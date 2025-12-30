import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Trophy, Users, TrendingUp, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LiveIndicator } from "@/components/LiveIndicator";

export default function Dashboard() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const { data: myTeams, isLoading: teamsLoading } = trpc.fantasy.getMyTeams.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const { data: myContests, isLoading: contestsLoading } = trpc.contest.getMyContests.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Get live matches to show live indicators
  const { data: liveMatches = [] } = trpc.fantasy.getLiveMatches.useQuery();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    setLocation("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-muted-foreground">Manage your fantasy cricket teams and track your performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myTeams?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Active fantasy teams</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contests Joined</CardTitle>
              <Trophy className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myContests?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Free contests entered</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {myTeams?.reduce((sum, team) => sum + team.points, 0) || 0}
              </div>
              <p className="text-xs text-muted-foreground">Across all teams</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/matches">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Create New Team
                  </CardTitle>
                  <CardDescription>Select a match and build your fantasy team</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/leaderboard">
              <Card className="border-primary/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    View Leaderboards
                  </CardTitle>
                  <CardDescription>Check rankings and compete with other players</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* My Contests */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Contests</h2>
          {contestsLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-muted-foreground text-sm">Loading contests...</p>
            </div>
          ) : myContests && myContests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myContests.slice(0, 6).map((contest) => (
                <Card key={contest.entryId} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">{contest.contestName}</CardTitle>
                    <CardDescription className="text-xs">{contest.teamName}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Points:</span>
                        <span className="font-bold text-primary">{contest.points}</span>
                      </div>
                      {contest.rank && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Rank:</span>
                          <span className="font-bold text-yellow-500">#{contest.rank}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="text-xs">{contest.currentEntries}/{contest.maxEntries}</span>
                      </div>
                      <Link href={`/contests/${contest.contestId}/leaderboard`}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          View Leaderboard
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="py-8 text-center">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">You haven't joined any contests yet</p>
                <Link href="/matches">
                  <Button>
                    <Trophy className="h-4 w-4 mr-2" />
                    Browse Contests
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        {/* My Teams */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Teams</h2>
          {teamsLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-muted-foreground text-sm">Loading teams...</p>
            </div>
          ) : myTeams && myTeams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myTeams.map((team) => (
                <Card key={team.id} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg">{team.teamName}</CardTitle>
                      {liveMatches.some((m) => m.id === team.apiMatchId) && (
                        <LiveIndicator size="sm" />
                      )}
                    </div>
                    <CardDescription className="text-xs">{team.matchName}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Points:</span>
                        <span className="font-bold text-primary">{team.points}</span>
                      </div>
                      {team.rank && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Rank:</span>
                          <span className="font-bold text-yellow-500">#{team.rank}</span>
                        </div>
                      )}
                      <Link href={`/team/${team.id}`}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="py-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">You haven't created any teams yet</p>
                <Link href="/matches">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
