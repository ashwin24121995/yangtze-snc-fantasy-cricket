import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "wouter";
import { Calendar, MapPin, Trophy, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function Matches() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  
  const { data: upcomingMatches, isLoading: upcomingLoading } = trpc.fantasy.getUpcomingMatches.useQuery();
  const { data: liveMatches, isLoading: liveLoading } = trpc.fantasy.getLiveMatches.useQuery();

  if (!isAuthenticated) {
    setLocation("/login");
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
            Select a Match
          </h1>
          <p className="text-muted-foreground">Choose a match to create your fantasy cricket team</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
            <TabsTrigger value="live">Live Matches</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {upcomingLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading matches...</p>
              </div>
            ) : upcomingMatches && upcomingMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingMatches.map((match) => (
                  <Card key={match.id} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {match.matchType.toUpperCase()}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          Upcoming
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{match.name}</CardTitle>
                      <CardDescription className="text-xs space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(match.dateTimeGMT)} at {formatTime(match.dateTimeGMT)}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {match.venue}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          {match.teamInfo.map((team, idx) => (
                            <div key={idx} className="flex items-center gap-2 flex-1">
                              <img
                                src={team.img}
                                alt={team.name}
                                className="w-8 h-8 rounded-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "/logo_icon_only.webp";
                                }}
                              />
                              <span className="text-sm font-medium truncate">{team.shortname}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/build-team/${match.id}`} className="flex-1">
                            <Button className="w-full">
                              <Trophy className="h-4 w-4 mr-2" />
                              Create Team
                            </Button>
                          </Link>
                          <Link href={`/contests/${match.id}`}>
                            <Button variant="outline">
                              <Users className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="py-12 text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No upcoming matches</p>
                  <p className="text-muted-foreground text-sm">Check back later for new matches</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="live">
            {liveLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading live matches...</p>
              </div>
            ) : liveMatches && liveMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveMatches.map((match) => (
                  <Card key={match.id} className="border-red-500/30 bg-card/50 backdrop-blur hover:border-red-500/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-full"></div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {match.matchType.toUpperCase()}
                        </Badge>
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          <div className="h-2 w-2 bg-white rounded-full mr-1"></div>
                          LIVE
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{match.name}</CardTitle>
                      <CardDescription className="text-xs space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {match.venue}
                        </div>
                        <div className="text-primary font-medium">{match.status}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          {match.teamInfo.map((team, idx) => (
                            <div key={idx} className="flex items-center gap-2 flex-1">
                              <img
                                src={team.img}
                                alt={team.name}
                                className="w-8 h-8 rounded-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "/logo_icon_only.webp";
                                }}
                              />
                              <span className="text-sm font-medium truncate">{team.shortname}</span>
                            </div>
                          ))}
                        </div>
                        <Link href={`/leaderboard?match=${match.id}`}>
                          <Button variant="outline" className="w-full">
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
                <CardContent className="py-12 text-center">
                  <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No live matches</p>
                  <p className="text-muted-foreground text-sm">Matches will appear here when they go live</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
