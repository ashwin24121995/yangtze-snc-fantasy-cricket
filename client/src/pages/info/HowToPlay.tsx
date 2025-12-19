import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">How To Play</h1>
              <p className="text-xl text-muted-foreground">
                Master fantasy cricket in 4 simple steps
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="bg-card border-border border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <CardTitle>Create Your Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Register with your email and verify your age (18+) and state. The platform is not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to regulatory requirements.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>Provide your full name and email address</li>
                    <li>Create a secure password</li>
                    <li>Verify your date of birth (must be 18+)</li>
                    <li>Select your state/region</li>
                    <li>Agree to terms and conditions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-card border-border border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <CardTitle>Select a Match</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Browse upcoming cricket matches and choose the one you want to create a fantasy team for. You can view match details, teams, venue, and timing.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>View all upcoming matches</li>
                    <li>Check match type (T20, ODI, Test)</li>
                    <li>See participating teams</li>
                    <li>Note the match start time</li>
                    <li>Create teams before match starts</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-card border-border border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                    <CardTitle>Build Your Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Select 11 players from both teams within a credit budget of 100 credits. Each player has a credit value based on their performance and role.
                  </p>
                  
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Team Composition Rules:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Select exactly 11 players</li>
                      <li>Minimum 1 Wicket-keeper</li>
                      <li>Minimum 3 Batsmen</li>
                      <li>Minimum 1 All-rounder</li>
                      <li>Minimum 3 Bowlers</li>
                      <li>Maximum 7 players from one team</li>
                      <li>Total credits must not exceed 100</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Captain & Vice-Captain:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Choose 1 Captain (gets 2x points)</li>
                      <li>Choose 1 Vice-Captain (gets 1.5x points)</li>
                      <li>Strategic selection is crucial for high scores</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="bg-card border-border border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                      4
                    </div>
                    <CardTitle>Track Performance & Learn</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Watch the match and see your team's points accumulate in real-time. Analyze your performance and learn from each match to improve your strategy.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>View live score updates</li>
                    <li>Track individual player performance</li>
                    <li>See your rank on the leaderboard</li>
                    <li>Analyze what worked and what didn't</li>
                    <li>Learn from top performers</li>
                    <li>Improve your strategy for next match</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Scoring System */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-border">
              <CardHeader>
                <CardTitle>Points Scoring System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Batting Points</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Run: +1 point per run</li>
                      <li>• Boundary (4): +1 bonus point</li>
                      <li>• Six: +2 bonus points</li>
                      <li>• Half-century (50 runs): +8 bonus points</li>
                      <li>• Century (100 runs): +16 bonus points</li>
                      <li>• Duck (out for 0): -2 points</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Bowling Points</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wicket: +25 points</li>
                      <li>• Bonus (LBW/Bowled): +8 points</li>
                      <li>• 3 wickets: +4 bonus points</li>
                      <li>• 4 wickets: +8 bonus points</li>
                      <li>• 5 wickets: +16 bonus points</li>
                      <li>• Maiden over: +12 points</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Fielding Points</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Catch: +8 points</li>
                      <li>• 3 catches: +4 bonus points</li>
                      <li>• Stumping: +12 points</li>
                      <li>• Run out: +6 points</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Economy & Strike Rate</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Economy rate below 5: +6 points</li>
                      <li>• Economy rate 5-6: +4 points</li>
                      <li>• Economy rate above 10: -6 points</li>
                      <li>• Strike rate above 170: +6 points</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Pro Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Research player form and recent performance before selection</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Consider pitch conditions and weather forecasts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Choose captain and vice-captain based on current form, not reputation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Balance your team with players from both sides</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Don't spend all credits on star players - find value picks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Learn from each match and refine your strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Playing Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
