import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Brain, Shield, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_homepage.png"
            alt="Fantasy Cricket"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Learn Fantasy Cricket
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Master cricket strategy without financial risk
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your dream team, compete with players nationwide, and learn
              the art of fantasy sports in a completely free, educational
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                >
                  Start Playing Free
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-accent" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-5 w-5 text-secondary" />
                <span>No Real Money</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Brain className="h-5 w-5 text-primary" />
                <span>Skill-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose YANGTZE SNC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience fantasy cricket the right way - focused on learning,
              strategy, and pure entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Free To Play</CardTitle>
                <CardDescription>
                  No entry fees, no hidden costs. Play unlimited fantasy cricket
                  completely free.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-secondary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Learn Strategy</CardTitle>
                <CardDescription>
                  Develop your cricket knowledge and strategic thinking without
                  financial pressure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Compete Safely</CardTitle>
                <CardDescription>
                  Join leaderboards and compete with others in a risk-free
                  environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real Matches</CardTitle>
                <CardDescription>
                  Create teams for actual cricket matches and track live
                  performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-secondary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Instant Results</CardTitle>
                <CardDescription>
                  See your team's performance and rankings update in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Fully Compliant</CardTitle>
                <CardDescription>
                  Age-verified, state-compliant platform following all legal
                  requirements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Register",
                  description: "Create your free account with age verification",
                },
                {
                  step: "2",
                  title: "Select Match",
                  description: "Choose from upcoming cricket matches",
                },
                {
                  step: "3",
                  title: "Build Team",
                  description: "Pick 11 players within the credit limit",
                },
                {
                  step: "4",
                  title: "Track & Learn",
                  description: "Watch your team perform and climb the leaderboard",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Master Fantasy Cricket?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of players learning cricket strategy in a safe,
              educational environment
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                Create Free Account
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              No credit card required • 100% free forever
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
