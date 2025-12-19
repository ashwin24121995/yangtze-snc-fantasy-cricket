import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Leaderboard() {
  const { data: liveMatches } = trpc.fantasy.getLiveMatches.useQuery();
  const selectedMatchId = liveMatches?.[0]?.id;

  const { data: leaderboard, isLoading } = trpc.fantasy.getMatchLeaderboard.useQuery(
    { matchId: selectedMatchId!, limit: 100 },
    { enabled: !!selectedMatchId }
  );

  const getRankIcon = (rank: number | null) => {
    if (!rank) return null;
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />;
    return null;
  };

  const getRankBadge = (rank: number | null) => {
    if (!rank) return null;
    if (rank <= 3) {
      return (
        <Badge
          variant={rank === 1 ? "default" : "secondary"}
          className={`text-lg font-bold ${
            rank === 1
              ? "bg-yellow-500 text-black"
              : rank === 2
              ? "bg-gray-400 text-black"
              : "bg-amber-600 text-white"
          }`}
        >
          #{rank}
        </Badge>
      );
    }
    return <Badge variant="outline" className="text-lg font-bold">#{rank}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">See how you rank against other players</p>
        </div>

        {!liveMatches || liveMatches.length === 0 ? (
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="py-12 text-center">
              <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">No active leaderboards</p>
              <p className="text-muted-foreground text-sm">
                Leaderboards will be available when matches are live
              </p>
            </CardContent>
          </Card>
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading leaderboard...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top 3 Podium */}
            {leaderboard && leaderboard.length >= 3 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* 2nd Place */}
                <Card className="border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-gray-500/10 transform translate-y-8">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      <Medal className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">2nd Place</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold text-xl mb-1">Team #{leaderboard[1].teamId}</p>
                    <p className="text-sm text-muted-foreground mb-2">{leaderboard[1].teamName}</p>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {leaderboard[1].points} pts
                    </Badge>
                  </CardContent>
                </Card>

                {/* 1st Place */}
                <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 transform -translate-y-4">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      <Trophy className="h-16 w-16 text-yellow-500" />
                    </div>
                    <CardTitle className="text-xl">1st Place</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold text-2xl mb-1">Team #{leaderboard[0].teamId}</p>
                    <p className="text-sm text-muted-foreground mb-2">{leaderboard[0].teamName}</p>
                    <Badge className="bg-yellow-500 text-black text-xl font-bold">
                      {leaderboard[0].points} pts
                    </Badge>
                  </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="border-amber-600/30 bg-gradient-to-br from-amber-600/10 to-amber-700/10 transform translate-y-8">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      <Award className="h-12 w-12 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">3rd Place</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold text-xl mb-1">Team #{leaderboard[2].teamId}</p>
                    <p className="text-sm text-muted-foreground mb-2">{leaderboard[2].teamName}</p>
                    <Badge variant="secondary" className="bg-amber-600 text-white text-lg font-bold">
                      {leaderboard[2].points} pts
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Full Leaderboard */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Full Rankings</CardTitle>
                <CardDescription>All teams ranked by points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard && leaderboard.length > 0 ? (
                    leaderboard.map((entry, index) => (
                      <div
                        key={entry.teamId}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          entry.rank && entry.rank <= 3
                            ? "border-primary/30 bg-primary/5"
                            : "border-border bg-muted/30"
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center gap-2 w-16">
                            {getRankIcon(entry.rank)}
                            {getRankBadge(entry.rank)}
                          </div>
                          <div className="flex-1">
                            <p className="font-bold">{entry.teamName}</p>
                            <p className="text-sm text-muted-foreground">Team #{entry.teamId}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{entry.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No teams yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
