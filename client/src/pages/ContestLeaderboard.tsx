import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function ContestLeaderboard() {
  const { contestId } = useParams<{ contestId: string }>();

  const { data: leaderboard, isLoading } = trpc.contest.getContestLeaderboard.useQuery(
    { contestId: parseInt(contestId!), limit: 100 },
    { enabled: !!contestId }
  );

  const getRankIcon = (rank: number | null) => {
    if (!rank) return null;
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />;
    return null;
  };

  const getRankBadge = (rank: number | null) => {
    if (!rank) return undefined;
    if (rank === 1) return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    if (rank === 2) return "bg-gray-400/10 text-gray-400 border-gray-400/20";
    if (rank === 3) return "bg-amber-600/10 text-amber-600 border-amber-600/20";
    return undefined;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            Contest Leaderboard
          </h1>
          <p className="text-muted-foreground">See how you rank against other players</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading leaderboard...</p>
          </div>
        ) : leaderboard && leaderboard.length > 0 ? (
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Rankings
              </CardTitle>
              <CardDescription>
                {leaderboard.length} {leaderboard.length === 1 ? "participant" : "participants"} in this contest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboard.map((entry, index) => {
                  const displayRank = entry.rank || index + 1;

                  return (
                    <div
                      key={entry.entryId}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        displayRank <= 3
                          ? "border-primary/40 bg-primary/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank */}
                        <div className="flex-shrink-0 w-16 text-center">
                          {getRankIcon(displayRank) ? (
                            <div className="flex justify-center">{getRankIcon(displayRank)}</div>
                          ) : (
                            <div className="text-2xl font-bold text-muted-foreground">
                              #{displayRank}
                            </div>
                          )}
                        </div>

                        {/* Team Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-semibold text-lg truncate">{entry.teamName}</p>
                            {displayRank <= 3 && (
                              <Badge className={getRankBadge(displayRank)}>
                                {displayRank === 1 && "1st Place"}
                                {displayRank === 2 && "2nd Place"}
                                {displayRank === 3 && "3rd Place"}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">Team ID: {entry.teamId}</p>
                        </div>

                        {/* Points */}
                        <div className="flex-shrink-0 text-right">
                          <div className="text-3xl font-bold text-primary">{entry.points}</div>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="py-12 text-center">
              <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Entries Yet</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to join this contest and compete for the top spot!
              </p>
              <Button onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Contests
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}
