import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, Users, Trophy, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LiveIndicator } from "@/components/LiveIndicator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SelectedPlayer {
  playerId: string;
  playerName: string;
  role: string;
  credits: number;
  team: string;
}

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

  const togglePlayer = (player: any, team: string) => {
    const playerId = player.id;
    const isSelected = selectedPlayers.some((p) => p.playerId === playerId);

    if (isSelected) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== playerId));
      if (captainId === playerId) setCaptainId("");
      if (viceCaptainId === playerId) setViceCaptainId("");
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }

      // Check team limit (max 7 from one team)
      const teamCount = selectedPlayers.filter((p) => p.team === team).length;
      if (teamCount >= 7) {
        toast.error(`Maximum 7 players allowed from ${team}`);
        return;
      }

      setSelectedPlayers([
        ...selectedPlayers,
        {
          playerId: player.id,
          playerName: player.name,
          role: player.role,
          credits: 10, // Default credits
          team,
        },
      ]);
    }
  };

  const handleSubmit = () => {
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }

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

    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return;
    }

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

  const getRoleCount = (role: string) => {
    return selectedPlayers.filter((p) => p.role.toLowerCase().includes(role.toLowerCase())).length;
  };

  const filterPlayers = (players: any[]) => {
    if (activeTab === "all") return players;
    return players.filter((p) => p.role.toLowerCase().includes(activeTab.toLowerCase()));
  };

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
          <p className="text-muted-foreground">Select 11 players to create your fantasy cricket team</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading players...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Player Selection */}
            <div className="lg:col-span-2 space-y-4">
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
                  WK ({getRoleCount("wk")})
                </Button>
                <Button
                  variant={activeTab === "bat" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("bat")}
                >
                  BAT ({getRoleCount("bat")})
                </Button>
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("allrounder")}
                >
                  AR ({getRoleCount("allrounder")})
                </Button>
                <Button
                  variant={activeTab === "bowl" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("bowl")}
                >
                  BOWL ({getRoleCount("bowl")})
                </Button>
              </div>

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
                          e.currentTarget.src = "/logo_icon_only.png";
                        }}
                      />
                      <div>
                        <CardTitle className="text-lg">{team.teamName}</CardTitle>
                        <CardDescription className="text-xs">{team.shortname}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filterPlayers(team.players).map((player) => {
                        const isSelected = selectedPlayers.some((p) => p.playerId === player.id);
                        const isCaptain = captainId === player.id;
                        const isViceCaptain = viceCaptainId === player.id;

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
                                  {isCaptain && (
                                    <Badge variant="default" className="text-xs">
                                      C
                                    </Badge>
                                  )}
                                  {isViceCaptain && (
                                    <Badge variant="outline" className="text-xs">
                                      VC
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="text-xs font-bold text-primary">10 Cr</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Team Summary */}
            <div className="lg:col-span-1">
              <Card className="border-primary/20 bg-card/50 backdrop-blur sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Your Team ({selectedPlayers.length}/11)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Team Name */}
                  <div>
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      id="teamName"
                      placeholder="Enter team name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Selected Players */}
                  <div>
                    <Label className="mb-2 block">Selected Players</Label>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {selectedPlayers.length > 0 ? (
                        selectedPlayers.map((player) => (
                          <div
                            key={player.playerId}
                            className="p-2 rounded bg-muted text-sm flex items-center justify-between"
                          >
                            <span className="truncate flex-1">{player.playerName}</span>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {player.role}
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

                  {/* Captain Selection */}
                  {selectedPlayers.length > 0 && (
                    <div>
                      <Label htmlFor="captain">Captain (2x points)</Label>
                      <select
                        id="captain"
                        value={captainId}
                        onChange={(e) => setCaptainId(e.target.value)}
                        className="w-full mt-1 p-2 rounded-md border border-input bg-background"
                      >
                        <option value="">Select Captain</option>
                        {selectedPlayers.map((player) => (
                          <option key={player.playerId} value={player.playerId}>
                            {player.playerName}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Vice Captain Selection */}
                  {selectedPlayers.length > 0 && (
                    <div>
                      <Label htmlFor="viceCaptain">Vice Captain (1.5x points)</Label>
                      <select
                        id="viceCaptain"
                        value={viceCaptainId}
                        onChange={(e) => setViceCaptainId(e.target.value)}
                        className="w-full mt-1 p-2 rounded-md border border-input bg-background"
                      >
                        <option value="">Select Vice Captain</option>
                        {selectedPlayers.map((player) => (
                          <option key={player.playerId} value={player.playerId}>
                            {player.playerName}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={selectedPlayers.length !== 11 || createTeamMutation.isPending}
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
