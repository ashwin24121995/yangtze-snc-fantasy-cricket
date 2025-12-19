import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Lightbulb, Users, Trophy, Target, CheckCircle2, 
  AlertCircle, TrendingUp, Award, Shield, Clock,
  UserPlus, Search, Zap, BarChart3, BookOpen,
  Star, Sparkles, Brain, Eye, ThumbsUp, XCircle
} from "lucide-react";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            {/* Hero Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Complete Guide</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                How To Play Fantasy Cricket
                <br />
                on YANGTZE SNC
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master the art of fantasy cricket strategy with our comprehensive, step-by-step guide. Learn everything from account creation to advanced team-building tactics.
              </p>
            </div>

            {/* What is Fantasy Cricket */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  What is Fantasy Cricket?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    Fantasy cricket is a strategic skill-based game where you create virtual teams of real cricket players and earn points based on their actual performance in live matches. Unlike watching cricket passively, fantasy cricket challenges you to think like a team manager, making strategic decisions about player selection, budget allocation, and tactical choices.
                  </p>
                  <p className="text-base leading-relaxed">
                    On YANGTZE SNC, fantasy cricket is purely educational. You compete against other users to test your cricket knowledge and strategic thinking—without any real money involved. Every match is an opportunity to learn, practice analytical skills, and improve your understanding of cricket strategy.
                  </p>
                  <p className="text-base leading-relaxed">
                    The game teaches valuable skills including statistical analysis, risk assessment, budget management, pattern recognition, and decision-making under uncertainty. These skills extend beyond cricket and are applicable to many real-world scenarios.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start Overview */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Zap className="h-6 w-6 text-secondary" />
                  Quick Start: 4 Simple Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-bold mb-2">Register</h4>
                    <p className="text-sm text-muted-foreground">Create your free account in 30 seconds</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold text-secondary mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-bold mb-2">Choose Match</h4>
                    <p className="text-sm text-muted-foreground">Select from upcoming cricket matches</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-xl font-bold text-accent mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-bold mb-2">Build Team</h4>
                    <p className="text-sm text-muted-foreground">Select 11 players within 100 credits</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mx-auto mb-3">
                      4
                    </div>
                    <h4 className="font-bold mb-2">Track & Learn</h4>
                    <p className="text-sm text-muted-foreground">Watch live updates and improve</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Step-by-Step Guide */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Detailed Step-by-Step Guide</h2>

              {/* Step 1: Registration */}
              <Card className="bg-card border-border border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <UserPlus className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">STEP 1</div>
                      <CardTitle className="text-xl">Create Your Free Account</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Getting started on YANGTZE SNC is quick and completely free. Registration takes less than 30 seconds and requires only basic information. No payment details, no credit card, no hidden fees—just your email and a few details to verify you meet our legal requirements.
                  </p>

                  <div className="bg-muted/50 p-5 rounded-lg space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Registration Requirements
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Full Name:</strong> Your legal first and last name for account identification
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Email Address:</strong> A valid email for account verification and important notifications
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Secure Password:</strong> Create a strong password (minimum 8 characters, mix of letters and numbers)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Date of Birth:</strong> You must be 18 years or older to use our platform (legal requirement)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">State/Region:</strong> Select your state to verify you're not in a restricted region
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/20 p-5 rounded-lg space-y-3">
                    <h4 className="font-bold flex items-center gap-2 text-destructive">
                      <AlertCircle className="h-5 w-5" />
                      Important: State Restrictions
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Due to state-specific regulations, our platform is <strong className="text-foreground">NOT available</strong> to residents of the following states: <strong className="text-foreground">Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</strong>. If you reside in any of these states, you will not be able to create an account. This restriction is mandatory for legal compliance with Indian laws.
                    </p>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      Your Privacy is Protected
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We never sell your data, never share your information with third parties, and use enterprise-grade security to protect your account. You can delete your account and all associated data at any time.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Select Match */}
              <Card className="bg-card border-border border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Search className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-secondary mb-1">STEP 2</div>
                      <CardTitle className="text-xl">Choose Your Match</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Once you're logged in, navigate to the "Matches" page to see all available cricket matches. We cover international tournaments, domestic leagues, T20 series, ODIs, and Test matches. Each match card shows detailed information to help you decide which match to play.
                  </p>

                  <div className="bg-muted/50 p-5 rounded-lg space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <Eye className="h-5 w-5 text-secondary" />
                      Match Information Displayed
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Teams Playing:</strong> Both team names and logos</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Match Type:</strong> T20, ODI, or Test format</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Match Date & Time:</strong> When the match starts</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Venue:</strong> Stadium and location</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Match Status:</strong> Upcoming, Live, or Completed</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Live Indicator:</strong> Pulsing badge for ongoing matches</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Timing is Important
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You can create and submit your team anytime before the match starts. Once the match begins, team creation is locked and no changes can be made. Plan ahead and submit your team with enough time to avoid last-minute technical issues.
                    </p>
                  </div>

                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-foreground">Pro Tip:</strong> Choose matches where you have good knowledge of both teams' recent form, playing conditions, and player performances. Familiarity with the teams gives you a strategic advantage in player selection.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Build Team */}
              <Card className="bg-card border-border border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent mb-1">STEP 3</div>
                      <CardTitle className="text-xl">Build Your Dream Team</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    This is where strategy matters most. You need to select exactly 11 players from both teams combined, staying within a budget of 100 credits. Each player has a credit value based on their role, recent performance, and popularity. Your goal is to build the strongest possible team while managing your budget wisely.
                  </p>

                  {/* Team Composition Rules */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Team Composition Rules (Mandatory)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Your team must follow these strict composition rules. The system will prevent you from submitting a team that violates any of these requirements:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Total Players</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Exactly 11 players (no more, no less)</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Wicket-keepers</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Minimum 1, Maximum 4</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Batsmen</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Minimum 3, Maximum 6</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">All-rounders</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Minimum 1, Maximum 4</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Bowlers</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Minimum 3, Maximum 6</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Players per Team</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Maximum 7 from one team</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Total Credits</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Must not exceed 100 credits (budget constraint)</p>
                      </div>
                    </div>
                  </div>

                  {/* Credit System */}
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-secondary" />
                      Understanding the Credit System
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every player has a credit value ranging from 8.0 to 12.0 credits. This value reflects their expected impact on the match based on recent form, role, and historical performance. Star players cost more credits, while emerging or less consistent players cost fewer credits.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-card p-4 rounded-lg border border-border text-center">
                        <div className="text-2xl font-bold text-primary mb-1">8.0 - 9.0</div>
                        <div className="text-sm font-semibold mb-1">Budget Players</div>
                        <p className="text-xs text-muted-foreground">Emerging talents, inconsistent performers</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">9.5 - 10.5</div>
                        <div className="text-sm font-semibold mb-1">Mid-Range Players</div>
                        <p className="text-xs text-muted-foreground">Consistent performers, good value</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border text-center">
                        <div className="text-2xl font-bold text-accent mb-1">11.0 - 12.0</div>
                        <div className="text-sm font-semibold mb-1">Premium Players</div>
                        <p className="text-xs text-muted-foreground">Star players, match-winners</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Strategic Insight:</strong> You cannot fill your entire team with premium players due to the 100-credit budget limit. The key to success is finding the right balance between star players and value picks who can deliver high points at lower costs.
                    </p>
                  </div>

                  {/* Captain & Vice-Captain */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      Captain & Vice-Captain: The Game Changers
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      After selecting your 11 players, you must choose one Captain and one Vice-Captain. This is arguably the most important strategic decision because these players receive point multipliers that can dramatically increase your total score.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card p-5 rounded-lg border border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Star className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold">Captain</div>
                            <div className="text-2xl font-bold text-primary">2x Points</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your captain earns double points for all their performance. If your captain scores 50 runs (50 points), you get 100 points. Choose wisely!
                        </p>
                      </div>
                      <div className="bg-card p-5 rounded-lg border border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Star className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <div className="font-bold">Vice-Captain</div>
                            <div className="text-2xl font-bold text-secondary">1.5x Points</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your vice-captain earns 1.5x points. If they take 3 wickets (75 points), you get 112.5 points. A strong backup to your captain.
                        </p>
                      </div>
                    </div>
                    <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                      <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        Captain Selection Strategy
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Don't always choose the most expensive player as captain. Instead, analyze recent form, match conditions, and opposition strength. A player in excellent form against a weak opponent is often a better captain choice than a star player facing tough conditions.
                      </p>
                    </div>
                  </div>

                  {/* Player Selection Tips */}
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Smart Player Selection Strategies
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground text-sm">Research Recent Form:</strong>
                          <p className="text-sm text-muted-foreground">Check player statistics from their last 5 matches. Consistent performers are safer choices than players with erratic form.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground text-sm">Consider Match Conditions:</strong>
                          <p className="text-sm text-muted-foreground">Batting-friendly pitches favor batsmen and all-rounders. Bowling-friendly conditions favor bowlers. Weather and pitch reports matter.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground text-sm">Balance Both Teams:</strong>
                          <p className="text-sm text-muted-foreground">Don't load your team with players from only one side. If one team performs poorly, your entire team suffers. Spread risk across both teams.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground text-sm">Find Value Picks:</strong>
                          <p className="text-sm text-muted-foreground">Look for undervalued players who can deliver high points at low costs. These "differential picks" can give you an edge over competitors.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground text-sm">Prioritize All-Rounders:</strong>
                          <p className="text-sm text-muted-foreground">All-rounders can score points through both batting and bowling, making them valuable assets. They often provide the best return on investment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4: Track Performance */}
              <Card className="bg-card border-border border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">STEP 4</div>
                      <CardTitle className="text-xl">Track Performance & Learn</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Once the match starts, your learning journey begins. Watch how your selected players perform in real-time and see your points accumulate automatically. Our platform updates scores every 3 minutes during live matches, giving you near-instant feedback on your strategic decisions.
                  </p>

                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      Live Match Experience
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Real-Time Updates:</strong> Scores refresh every 3 minutes automatically</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Player Points:</strong> See individual player contributions to your total</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Live Leaderboard:</strong> Track your rank against other users in real-time</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Match Progress:</strong> Follow the actual cricket match alongside your fantasy team</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg space-y-3">
                    <h4 className="font-bold flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      Post-Match Analysis & Learning
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      After the match ends, take time to analyze your performance. Review which players performed well, which decisions paid off, and where you could improve. This reflection is crucial for developing better strategies in future matches.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Compare your team with top performers on the leaderboard</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Identify which player roles contributed most to winning teams</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Learn from your captain/vice-captain choices</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Note patterns in successful team compositions</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-foreground">Remember:</strong> Fantasy cricket is a skill that improves with practice. Every match teaches you something new about player evaluation, risk management, and strategic thinking. Don't be discouraged by early setbacks—even experienced players make mistakes. Focus on continuous learning and gradual improvement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Complete Scoring System */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Complete Points Scoring System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Understanding the scoring system is essential for making informed player selections. Points are awarded based on real match performance across batting, bowling, and fielding categories. Here's the complete breakdown:
                </p>

                {/* Batting Points */}
                <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Batting Points
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Run Scored</span>
                      <span className="text-sm font-bold text-primary">+1 point per run</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Boundary Bonus (4)</span>
                      <span className="text-sm font-bold text-primary">+1 bonus point</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Six Bonus (6)</span>
                      <span className="text-sm font-bold text-primary">+2 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Half-Century (50 runs)</span>
                      <span className="text-sm font-bold text-primary">+8 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Century (100 runs)</span>
                      <span className="text-sm font-bold text-primary">+16 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-destructive/10">
                      <span className="text-sm font-medium">Duck (out for 0)</span>
                      <span className="text-sm font-bold text-destructive">-2 points</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h5 className="font-bold text-sm mb-2">Strike Rate Bonuses (T20 & ODI)</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>SR 170-200</span>
                        <span className="font-bold text-primary">+2 pts</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>SR 200-250</span>
                        <span className="font-bold text-primary">+4 pts</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>SR 250+</span>
                        <span className="font-bold text-primary">+6 pts</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bowling Points */}
                <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-secondary" />
                    Bowling Points
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Wicket Taken</span>
                      <span className="text-sm font-bold text-secondary">+25 points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Bonus (LBW/Bowled)</span>
                      <span className="text-sm font-bold text-secondary">+8 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">3 Wicket Haul</span>
                      <span className="text-sm font-bold text-secondary">+4 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">4 Wicket Haul</span>
                      <span className="text-sm font-bold text-secondary">+8 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">5 Wicket Haul</span>
                      <span className="text-sm font-bold text-secondary">+16 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Maiden Over</span>
                      <span className="text-sm font-bold text-secondary">+12 points</span>
                    </div>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-bold text-sm mb-2">Economy Rate Bonuses (T20 & ODI)</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>ER below 5</span>
                        <span className="font-bold text-secondary">+6 pts</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>ER 5-6</span>
                        <span className="font-bold text-secondary">+4 pts</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-card">
                        <span>ER 6-7</span>
                        <span className="font-bold text-secondary">+2 pts</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fielding Points */}
                <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    Fielding Points
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Catch Taken</span>
                      <span className="text-sm font-bold text-accent">+8 points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">3 Catches Bonus</span>
                      <span className="text-sm font-bold text-accent">+4 bonus points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Stumping (WK)</span>
                      <span className="text-sm font-bold text-accent">+12 points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Run Out (Direct)</span>
                      <span className="text-sm font-bold text-accent">+12 points</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Run Out (Assist)</span>
                      <span className="text-sm font-bold text-accent">+6 points</span>
                    </div>
                  </div>
                </div>

                {/* Captain Multipliers */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Captain & Vice-Captain Multipliers
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card p-5 rounded-lg border border-border text-center">
                      <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-bold mb-1">Captain</div>
                      <div className="text-3xl font-bold text-primary mb-2">2x</div>
                      <p className="text-sm text-muted-foreground">All points doubled</p>
                    </div>
                    <div className="bg-card p-5 rounded-lg border border-border text-center">
                      <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="font-bold mb-1">Vice-Captain</div>
                      <div className="text-3xl font-bold text-secondary mb-2">1.5x</div>
                      <p className="text-sm text-muted-foreground">All points multiplied by 1.5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-destructive" />
                  Common Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Learn from the most common errors that beginners make. Avoiding these mistakes will significantly improve your fantasy cricket performance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Picking Only Star Players</h4>
                        <p className="text-sm text-muted-foreground">Budget constraints make this impossible. Find balance between stars and value picks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Ignoring Recent Form</h4>
                        <p className="text-sm text-muted-foreground">Past reputation doesn't guarantee current performance. Always check recent statistics.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Loading One Team Heavily</h4>
                        <p className="text-sm text-muted-foreground">If that team loses, your entire fantasy team suffers. Spread risk across both teams.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Poor Captain Selection</h4>
                        <p className="text-sm text-muted-foreground">Captaining out-of-form players wastes the 2x multiplier. Choose based on current form.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Neglecting All-Rounders</h4>
                        <p className="text-sm text-muted-foreground">All-rounders score through batting AND bowling, making them highly valuable.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Last-Minute Team Creation</h4>
                        <p className="text-sm text-muted-foreground">Rushing leads to poor decisions. Create teams early with proper research.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  Expert Tips for Success
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Take your fantasy cricket skills to the next level with these advanced strategies used by top performers:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Study Pitch Reports:</strong>
                      <p className="text-sm text-muted-foreground">Batting-friendly pitches favor batsmen, green pitches favor fast bowlers, turning tracks favor spinners.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Monitor Team News:</strong>
                      <p className="text-sm text-muted-foreground">Last-minute player injuries or changes can drastically affect match outcomes. Stay updated before match start.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Analyze Head-to-Head Records:</strong>
                      <p className="text-sm text-muted-foreground">Some players consistently perform well against specific opponents. Historical data provides valuable insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Consider Batting Order:</strong>
                      <p className="text-sm text-muted-foreground">Top-order batsmen get more opportunities to score. Lower-order batsmen are riskier despite lower costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Weather Matters:</strong>
                      <p className="text-sm text-muted-foreground">Overcast conditions help swing bowlers. Hot, dry weather favors batsmen and spinners.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Learn from Top Performers:</strong>
                      <p className="text-sm text-muted-foreground">After each match, study the teams of leaderboard toppers. Identify patterns in their player selections.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Ready to Start Your Fantasy Cricket Journey?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of cricket enthusiasts learning strategic thinking through fantasy cricket. It's completely free, safe, and educational.
                </p>
              </div>
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Create Free Account Now
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                No payment required • No hidden fees • 100% educational
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
