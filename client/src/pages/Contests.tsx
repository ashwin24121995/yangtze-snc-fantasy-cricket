import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, Trophy, Users, Calendar, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Contests() {
  const { matchId } = useParams<{ matchId: string }>();
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedContest, setSelectedContest] = useState<any>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const { data: contests, isLoading: contestsLoading } = trpc.contest.getContestsByMatch.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId }
  );

  const { data: userTeams, isLoading: teamsLoading } = trpc.contest.getAvailableTeamsForMatch.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId && isAuthenticated }
  );

  const joinContestMutation = trpc.contest.joinContest.useMutation({
    onSuccess: () => {
      toast.success("Successfully joined contest!");
      setSelectedContest(null);
      setSelectedTeamId(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (!isAuthenticated) {
    setLocation("/login");
    return null;
  }

  const handleJoinContest = (contest: any) => {
    if (!userTeams || userTeams.length === 0) {
      toast.error("You need to create a team first!");
      setLocation(`/matches/${matchId}/build-team`);
      return;
    }

    setSelectedContest(contest);
  };

  const handleConfirmJoin = () => {
    if (!selectedTeamId) {
      toast.error("Please select a team");
      return;
    }

    joinContestMutation.mutate({
      contestId: selectedContest.id,
      teamId: selectedTeamId,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "live":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "completed":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
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
            Free Contests
          </h1>
          <p className="text-muted-foreground">
            Join educational contests and compete with other players - completely free!
          </p>
        </div>

        {contestsLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading contests...</p>
          </div>
        ) : contests && contests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contests.map((contest) => {
              const spotsRemaining = contest.maxEntries - contest.currentEntries;
              const percentFilled = (contest.currentEntries / contest.maxEntries) * 100;

              return (
                <Card
                  key={contest.id}
                  className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Trophy className="h-6 w-6 text-primary" />
                      <Badge className={getStatusColor(contest.status)}>
                        {contest.status.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{contest.contestName}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {contest.description || "Compete with other players and climb the leaderboard!"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Contest Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-xs text-muted-foreground">Participants</span>
                        </div>
                        <p className="text-lg font-bold text-primary">
                          {contest.currentEntries}/{contest.maxEntries}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-4 w-4 text-secondary" />
                          <span className="text-xs text-muted-foreground">Spots Left</span>
                        </div>
                        <p className="text-lg font-bold text-secondary">{spotsRemaining}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="w-full bg-muted rounded-full h-2 mb-1">
                        <div
                          className="h-2 rounded-full bg-primary transition-all"
                          style={{ width: `${percentFilled}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">
                        {percentFilled.toFixed(0)}% filled
                      </p>
                    </div>

                    {/* Contest Type */}
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">
                        {contest.contestType === "public" ? "Public Contest" : "Private Contest"}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        100% FREE
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={() => handleJoinContest(contest)}
                        disabled={
                          contest.status !== "upcoming" ||
                          contest.currentEntries >= contest.maxEntries
                        }
                      >
                        {contest.currentEntries >= contest.maxEntries ? "Contest Full" : "Join Contest"}
                      </Button>
                      <Link href={`/contests/${contest.id}/leaderboard`}>
                        <Button variant="outline" size="icon">
                          <TrendingUp className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="py-12 text-center">
              <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Contests Available</h3>
              <p className="text-muted-foreground mb-6">
                There are no contests available for this match yet. Check back later!
              </p>
              <Link href="/matches">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Matches
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Join Contest Modal */}
      <Dialog open={!!selectedContest} onOpenChange={() => setSelectedContest(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join {selectedContest?.contestName}</DialogTitle>
            <DialogDescription>
              Select a team to join this free educational contest
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {teamsLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              </div>
            ) : userTeams && userTeams.length > 0 ? (
              <>
                <div className="space-y-2">
                  {userTeams.map((team) => (
                    <div
                      key={team.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedTeamId === team.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTeamId(team.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{team.teamName}</p>
                          <p className="text-sm text-muted-foreground">
                            {team.totalCredits} credits used
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{team.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedContest(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={handleConfirmJoin}
                    disabled={!selectedTeamId || joinContestMutation.isPending}
                  >
                    {joinContestMutation.isPending ? "Joining..." : "Confirm & Join"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">
                  You don't have any teams for this match yet.
                </p>
                <Link href={`/matches/${matchId}/build-team`}>
                  <Button>Create Team First</Button>
                </Link>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
