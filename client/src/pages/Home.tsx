import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Brain, Shield, Target, Zap, TrendingUp, Award, CheckCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section - Unique Asymmetric Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background with Real Stadium Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-transparent"></div>
          <img
            src="/hero-stadium-real.jpg"
            alt="Cricket Stadium"
            className="w-full h-full object-cover opacity-20 animate-slow-zoom"
          />
          {/* Cyberpunk Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-500/10 animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
        </div>

        {/* Hero Content - Asymmetric Layout */}
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">100% Free • No Real Money • Pure Skill</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-300%">
                    Learn Fantasy
                  </span>
                  <br />
                  <span className="text-foreground">Cricket</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Master cricket strategy without financial risk
                </p>
              </div>

              <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
                Build your dream team, compete with players nationwide, and learn the art of fantasy sports in a completely free, educational environment. No gambling, no pressure—just pure strategy and fun.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-6 shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105"
                  >
                    Start Playing Free
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Secure Platform</p>
                    <p className="text-xs text-muted-foreground">Govt. Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">18+ Only</p>
                    <p className="text-xs text-muted-foreground">Age Verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fair Play</p>
                    <p className="text-xs text-muted-foreground">Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Cards with Real Cricket Images */}
            <div className="relative h-[600px] hidden lg:block animate-slide-in-right">
              {/* Card 1 - Top Right */}
              <div className="absolute top-0 right-0 w-72 animate-float">
                <Card className="border-primary/20 bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/20 overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img
                      src="/cricket-action-1.jpg"
                      alt="Cricket Action"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Build Your Team
                    </CardTitle>
                    <CardDescription>Select 11 players within budget</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Card 2 - Middle Left */}
              <div className="absolute top-32 left-0 w-64 animate-float-delayed">
                <Card className="border-cyan-500/20 bg-card/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/feature-live-scores.png"
                      alt="Live Scores"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="h-5 w-5 text-cyan-500" />
                      Live Updates
                    </CardTitle>
                    <CardDescription>Real-time score tracking</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Card 3 - Bottom Right */}
              <div className="absolute bottom-0 right-12 w-80 animate-float">
                <Card className="border-purple-500/20 bg-card/80 backdrop-blur-xl shadow-2xl shadow-purple-500/20 overflow-hidden">
                  <div className="h-44 overflow-hidden">
                    <img
                      src="/team-celebration.jpg"
                      alt="Team Celebration"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-purple-500" />
                      Compete & Win
                    </CardTitle>
                    <CardDescription>Climb the leaderboard ranks</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30 animate-fade-in">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Players", value: "10,000+", icon: Users },
              { label: "Matches Played", value: "50,000+", icon: Trophy },
              { label: "Teams Created", value: "25,000+", icon: Target },
              { label: "Learning Hours", value: "100,000+", icon: Brain },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center space-y-2 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Why Choose
              </span>{" "}
              YANGTZE SNC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience fantasy cricket the right way - focused on learning, strategy, and pure entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "100% Free to Play",
                description: "No hidden costs, no deposits, no real money involved. Pure educational fantasy cricket experience.",
                image: "/feature-team-building.png",
                color: "primary",
              },
              {
                icon: Brain,
                title: "Skill-Based Learning",
                description: "Develop strategic thinking, player analysis, and team management skills through hands-on practice.",
                image: "/feature-live-scores.png",
                color: "cyan-500",
              },
              {
                icon: Zap,
                title: "Real-Time Updates",
                description: "Live match scores, instant player points updates, and dynamic leaderboard rankings every 3 minutes.",
                image: "/cricket-action-2.jpg",
                color: "purple-500",
              },
              {
                icon: Shield,
                title: "Safe & Compliant",
                description: "Government compliant platform with age verification and state restrictions for responsible gaming.",
                image: "/feature-compliance.png",
                color: "green-500",
              },
              {
                icon: Users,
                title: "Compete Nationwide",
                description: "Join thousands of players across India, build your reputation, and climb the leaderboard.",
                image: "/feature-leaderboard.png",
                color: "yellow-500",
              },
              {
                icon: Target,
                title: "Strategic Gameplay",
                description: "Choose captain (2x points) and vice-captain (1.5x points), manage 100-credit budget wisely.",
                image: "/cricket-action-1.jpg",
                color: "pink-500",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 h-12 w-12 rounded-lg bg-${feature.color}/20 backdrop-blur-sm flex items-center justify-center border border-${feature.color}/30`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in 4 simple steps and start your fantasy cricket journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register Free", description: "Create your account with age and state verification", icon: Users },
              { step: "02", title: "Select Match", description: "Choose from upcoming or live cricket matches", icon: Target },
              { step: "03", title: "Build Team", description: "Pick 11 players, assign captain & vice-captain", icon: Trophy },
              { step: "04", title: "Track & Compete", description: "Watch live scores and climb the leaderboard", icon: TrendingUp },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/50">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105">
                Start Your Journey
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Trusted & Compliant
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your safety and responsible gaming are our top priorities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Secure Platform", icon: "/badge-secure.png" },
                { label: "18+ Verified", icon: "/badge-18plus.png" },
                { label: "Govt. Compliant", icon: "/badge-govt.png" },
                { label: "Fair Play", icon: "/badge-fairplay.png" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <img src={badge.icon} alt={badge.label} className="h-16 w-16 object-contain" />
                  <p className="text-sm font-semibold text-center">{badge.label}</p>
                </div>
              ))}
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Company:</strong> YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U47912DL2024PTC437115</p>
                <p><strong>GST:</strong> 07AABCY8991L1ZG</p>
                <p><strong>Head Office:</strong> 37 G-2 579 GALI NO.14, SAI ENCLAVE MOHAN GARDEN, New Delhi - 110059</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-stadium-real.jpg"
            alt="Cricket Stadium"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Master{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Fantasy Cricket?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of players learning cricket strategy in a safe, free, and educational environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-12 py-6 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105"
                >
                  Start Playing Now
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
