import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, Users, Trophy, Check, Wallet, AlertCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LiveIndicator } from "@/components/LiveIndicator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SelectedPlayer {
  playerId: string;
  playerName: string;
  role: string;
  credits: number;
  team: string;
}

// Role composition requirements
const ROLE_REQUIREMENTS = {
  wk: { min: 1, max: 4, label: "Wicket-Keeper" },
  bat: { min: 3, max: 6, label: "Batsman" },
  allrounder: { min: 1, max: 4, label: "All-Rounder" },
  bowl: { min: 3, max: 6, label: "Bowler" },
};

const TOTAL_BUDGET = 100;
const MAX_PLAYERS = 11;
const MAX_PLAYERS_PER_TEAM = 7;

export default function BuildTeam() {
  const { matchId } = useParams<{ matchId: string }>();
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  
  const { data: squad, isLoading } = trpc.fantasy.getMatchSquad.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId }
  );

  // Get live players
  const { data: livePlayers = [] } = trpc.fantasy.getLivePlayers.useQuery();

  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
  const [captainId, setCaptainId] = useState<string>("");
  const [viceCaptainId, setViceCaptainId] = useState<string>("");
  const [teamName, setTeamName] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [step, setStep] = useState<1 | 2 | 3>(1); // Multi-step wizard

  const createTeamMutation = trpc.fantasy.createTeam.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      setLocation("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (!isAuthenticated) {
    setLocation("/login");
    return null;
  }

  // Calculate total credits used
  const totalCreditsUsed = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const remainingCredits = TOTAL_BUDGET - totalCreditsUsed;

  // Get role counts
  const getRoleCount = (role: string) => {
    return selectedPlayers.filter((p) => {
      const playerRole = p.role.toLowerCase();
      if (role === "wk") return playerRole.includes("wicket") || playerRole.includes("keeper");
      if (role === "bat") return playerRole.includes("bat") && !playerRole.includes("all");
      if (role === "allrounder") return playerRole.includes("all");
      if (role === "bowl") return playerRole.includes("bowl") && !playerRole.includes("all");
      return false;
    }).length;
  };

  // Validate role composition
  const validateRoleComposition = () => {
    const errors: string[] = [];
    
    Object.entries(ROLE_REQUIREMENTS).forEach(([role, req]) => {
      const count = getRoleCount(role);
      if (count < req.min) {
        errors.push(`Need at least ${req.min} ${req.label}${req.min > 1 ? 's' : ''} (current: ${count})`);
      }
      if (count > req.max) {
        errors.push(`Maximum ${req.max} ${req.label}${req.max > 1 ? 's' : ''} allowed (current: ${count})`);
      }
    });

    return errors;
  };

  const togglePlayer = (player: any, team: string) => {
    const playerId = player.id;
    const isSelected = selectedPlayers.some((p) => p.playerId === playerId);

    if (isSelected) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== playerId));
      if (captainId === playerId) setCaptainId("");
      if (viceCaptainId === playerId) setViceCaptainId("");
    } else {
      if (selectedPlayers.length >= MAX_PLAYERS) {
        toast.error(`You can only select ${MAX_PLAYERS} players`);
        return;
      }

      // Check team limit
      const teamCount = selectedPlayers.filter((p) => p.team === team).length;
      if (teamCount >= MAX_PLAYERS_PER_TEAM) {
        toast.error(`Maximum ${MAX_PLAYERS_PER_TEAM} players allowed from ${team}`);
        return;
      }

      // Assign credits based on player role (simplified - in production, fetch from API)
      const credits = getPlayerCredits(player.role);

      // Check if adding this player exceeds budget
      if (totalCreditsUsed + credits > TOTAL_BUDGET) {
        toast.error(`Not enough credits! You need ${credits} credits but only have ${remainingCredits} remaining.`);
        return;
      }

      setSelectedPlayers([
        ...selectedPlayers,
        {
          playerId: player.id,
          playerName: player.name,
          role: player.role,
          credits,
          team,
        },
      ]);
    }
  };

  // Assign credits based on role (simplified logic)
  const getPlayerCredits = (role: string): number => {
    const roleLower = role.toLowerCase();
    if (roleLower.includes("all")) return 9; // All-rounders are valuable
    if (roleLower.includes("bat")) return 8;
    if (roleLower.includes("bowl")) return 8;
    if (roleLower.includes("wicket") || roleLower.includes("keeper")) return 8;
    return 8; // Default
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate player selection
      if (selectedPlayers.length !== MAX_PLAYERS) {
        toast.error(`Please select exactly ${MAX_PLAYERS} players`);
        return;
      }

      const roleErrors = validateRoleComposition();
      if (roleErrors.length > 0) {
        toast.error(roleErrors[0]);
        return;
      }

      if (!teamName.trim()) {
        toast.error("Please enter a team name");
        return;
      }

      setStep(2);
    } else if (step === 2) {
      // Validate captain/vice-captain
      if (!captainId) {
        toast.error("Please select a captain");
        return;
      }

      if (!viceCaptainId) {
        toast.error("Please select a vice captain");
        return;
      }

      if (captainId === viceCaptainId) {
        toast.error("Captain and vice captain must be different");
        return;
      }

      setStep(3);
    }
  };

  const handleSubmit = () => {
    // Get match name from squad data
    const matchName = squad && squad.length > 0 ? `${squad[0].teamName} vs ${squad[1]?.teamName || "TBD"}` : "Match";

    createTeamMutation.mutate({
      matchId: matchId!,
      matchName,
      teamName: teamName.trim(),
      captainId,
      viceCaptainId,
      players: selectedPlayers,
    });
  };

  const filterPlayers = (players: any[]) => {
    if (activeTab === "all") return players;
    return players.filter((p) => {
      const roleLower = p.role.toLowerCase();
      if (activeTab === "wk") return roleLower.includes("wicket") || roleLower.includes("keeper");
      if (activeTab === "bat") return roleLower.includes("bat") && !roleLower.includes("all");
      if (activeTab === "allrounder") return roleLower.includes("all");
      if (activeTab === "bowl") return roleLower.includes("bowl") && !roleLower.includes("all");
      return false;
    });
  };

  const roleErrors = validateRoleComposition();
  const canProceed = selectedPlayers.length === MAX_PLAYERS && roleErrors.length === 0 && teamName.trim();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Link href="/matches">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Matches
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            Build Your Team
          </h1>
          <p className="text-muted-foreground">
            {step === 1 && "Select 11 players within your 100 credit budget"}
            {step === 2 && "Choose your captain and vice-captain"}
            {step === 3 && "Review your team before submission"}
          </p>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted"}`}>
                {step > 1 ? <Check className="h-4 w-4" /> : "1"}
              </div>
              <span className="text-sm font-medium">Select Players</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-primary bg-primary text-primary-foreground" : "border-muted"}`}>
                {step > 2 ? <Check className="h-4 w-4" /> : "2"}
              </div>
              <span className="text-sm font-medium">Captain & VC</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-primary bg-primary text-primary-foreground" : "border-muted"}`}>
                3
              </div>
              <span className="text-sm font-medium">Preview</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading players...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-4">
              {/* Step 1: Player Selection */}
              {step === 1 && (
                <>
                  {/* Role Filters */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    <Button
                      variant={activeTab === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("all")}
                    >
                      All Players
                    </Button>
                    <Button
                      variant={activeTab === "wk" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("wk")}
                    >
                      WK ({getRoleCount("wk")}/{ROLE_REQUIREMENTS.wk.min}-{ROLE_REQUIREMENTS.wk.max})
                    </Button>
                    <Button
                      variant={activeTab === "bat" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("bat")}
                    >
                      BAT ({getRoleCount("bat")}/{ROLE_REQUIREMENTS.bat.min}-{ROLE_REQUIREMENTS.bat.max})
                    </Button>
                    <Button
                      variant={activeTab === "allrounder" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("allrounder")}
                    >
                      AR ({getRoleCount("allrounder")}/{ROLE_REQUIREMENTS.allrounder.min}-{ROLE_REQUIREMENTS.allrounder.max})
                    </Button>
                    <Button
                      variant={activeTab === "bowl" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("bowl")}
                    >
                      BOWL ({getRoleCount("bowl")}/{ROLE_REQUIREMENTS.bowl.min}-{ROLE_REQUIREMENTS.bowl.max})
                    </Button>
                  </div>

                  {/* Role Composition Errors */}
                  {roleErrors.length > 0 && selectedPlayers.length === MAX_PLAYERS && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <ul className="list-disc list-inside">
                          {roleErrors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                          ))}
                        </ul>
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Teams */}
                  {squad?.map((team, teamIdx) => (
                    <Card key={teamIdx} className="border-primary/20 bg-card/50 backdrop-blur">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <img
                            src={team.img}
                            alt={team.teamName}
                            className="w-10 h-10 rounded-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/logo_icon_only.webp";
                            }}
                          />
                          <div>
                            <CardTitle className="text-lg">{team.teamName}</CardTitle>
                            <CardDescription className="text-xs">
                              {selectedPlayers.filter(p => p.team === team.teamName).length}/{MAX_PLAYERS_PER_TEAM} selected
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {filterPlayers(team.players).map((player) => {
                            const isSelected = selectedPlayers.some((p) => p.playerId === player.id);
                            const playerCredits = getPlayerCredits(player.role);

                            return (
                              <div
                                key={player.id}
                                className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                                  isSelected
                                    ? "border-primary bg-primary/10"
                                    : "border-border hover:border-primary/50"
                                }`}
                                onClick={() => togglePlayer(player, team.teamName)}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <p className="font-medium text-sm truncate">{player.name}</p>
                                      {livePlayers.includes(player.id) && (
                                        <LiveIndicator size="sm" showText={false} />
                                      )}
                                      {isSelected && (
                                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Badge variant="secondary" className="text-xs">
                                        {player.role}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="text-right flex-shrink-0">
                                    <p className="text-xs font-bold text-primary">{playerCredits} Cr</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}

              {/* Step 2: Captain & Vice-Captain Selection */}
              {step === 2 && (
                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Select Captain & Vice-Captain</CardTitle>
                    <CardDescription>
                      Captain gets 2x points, Vice-Captain gets 1.5x points
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedPlayers.map((player) => {
                        const isCaptain = captainId === player.playerId;
                        const isViceCaptain = viceCaptainId === player.playerId;

                        return (
                          <div key={player.playerId} className="space-y-2">
                            <div className="p-3 rounded-lg border-2 border-border bg-card">
                              <p className="font-medium text-sm">{player.playerName}</p>
                              <Badge variant="secondary" className="text-xs mt-1">
                                {player.role}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant={isCaptain ? "default" : "outline"}
                                size="sm"
                                className="flex-1"
                                onClick={() => setCaptainId(player.playerId)}
                              >
                                {isCaptain && <Check className="h-3 w-3 mr-1" />}
                                Captain
                              </Button>
                              <Button
                                variant={isViceCaptain ? "default" : "outline"}
                                size="sm"
                                className="flex-1"
                                onClick={() => setViceCaptainId(player.playerId)}
                              >
                                {isViceCaptain && <Check className="h-3 w-3 mr-1" />}
                                Vice-Captain
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Team Preview */}
              {step === 3 && (
                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Team Preview</CardTitle>
                    <CardDescription>Review your team before submission</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Team Name: {teamName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Total Credits Used: {totalCreditsUsed}/{TOTAL_BUDGET}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {selectedPlayers.map((player) => {
                        const isCaptain = captainId === player.playerId;
                        const isViceCaptain = viceCaptainId === player.playerId;

                        return (
                          <div
                            key={player.playerId}
                            className="p-3 rounded-lg border bg-card flex items-center justify-between"
                          >
                            <div>
                              <p className="font-medium text-sm">{player.playerName}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {player.role}
                                </Badge>
                                {isCaptain && (
                                  <Badge variant="default" className="text-xs">
                                    Captain (2x)
                                  </Badge>
                                )}
                                {isViceCaptain && (
                                  <Badge variant="outline" className="text-xs">
                                    Vice-Captain (1.5x)
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-xs font-bold text-primary">{player.credits} Cr</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar - Team Summary */}
            <div className="lg:col-span-1">
              <Card className="border-primary/20 bg-card/50 backdrop-blur sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Your Team ({selectedPlayers.length}/{MAX_PLAYERS})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Team Name (Step 1 only) */}
                  {step === 1 && (
                    <div>
                      <Label htmlFor="teamName">Team Name *</Label>
                      <Input
                        id="teamName"
                        placeholder="Enter team name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  )}

                  {/* Credits Budget */}
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Credits</span>
                      </div>
                      <span className={`text-lg font-bold ${remainingCredits < 0 ? "text-destructive" : "text-primary"}`}>
                        {remainingCredits}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          remainingCredits < 0 ? "bg-destructive" : "bg-primary"
                        }`}
                        style={{ width: `${Math.min((totalCreditsUsed / TOTAL_BUDGET) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {totalCreditsUsed}/{TOTAL_BUDGET} credits used
                    </p>
                  </div>

                  {/* Role Composition */}
                  <div>
                    <Label className="mb-2 block">Role Composition</Label>
                    <div className="space-y-2">
                      {Object.entries(ROLE_REQUIREMENTS).map(([role, req]) => {
                        const count = getRoleCount(role);
                        const isValid = count >= req.min && count <= req.max;

                        return (
                          <div key={role} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{req.label}</span>
                            <span className={isValid ? "text-primary font-medium" : "text-destructive font-medium"}>
                              {count} ({req.min}-{req.max})
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Players List */}
                  <div>
                    <Label className="mb-2 block">Selected Players</Label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {selectedPlayers.length > 0 ? (
                        selectedPlayers.map((player) => (
                          <div
                            key={player.playerId}
                            className="p-2 rounded bg-muted text-sm flex items-center justify-between"
                          >
                            <span className="truncate flex-1">{player.playerName}</span>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {player.credits} Cr
                            </Badge>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm text-center py-4">
                          No players selected
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                    )}

                    {step < 3 ? (
                      <Button
                        className="w-full"
                        onClick={handleNextStep}
                        disabled={step === 1 && !canProceed}
                      >
                        Next Step
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={handleSubmit}
                        disabled={createTeamMutation.isPending}
                      >
                        {createTeamMutation.isPending ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Creating...
                          </>
                        ) : (
                          <>
                            <Trophy className="h-4 w-4 mr-2" />
                            Create Team
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
