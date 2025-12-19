import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Brain, Shield, Target, Zap, TrendingUp, Award, CheckCircle, Star, Clock, BarChart3, Lock, Heart, HelpCircle, Lightbulb } from "lucide-react";

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

              <p className="text-lg text-muted-foreground leading-relaxed">
                Build your dream team, compete with players nationwide, and learn the art of fantasy sports in a completely free, educational
                environment. No gambling, no pressure—just pure strategy and fun.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105">
                    Start Playing Free
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary">
                    How It Works
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
                  <img src="/badge-18plus.png" alt="18+" className="h-6 w-6" />
                  <span className="text-sm font-medium">18+ Only</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
                  <img src="/badge-fairplay.png" alt="Fair Play" className="h-6 w-6" />
                  <span className="text-sm font-medium">Fair Play</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
                  <img src="/badge-govt.png" alt="Compliant" className="h-6 w-6" />
                  <span className="text-sm font-medium">Govt. Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Cards */}
            <div className="relative h-[600px] animate-slide-in-right hidden lg:block">
              {/* Build Team Card */}
              <div className="absolute top-0 right-0 w-80 animate-float">
                <Card className="bg-card/80 backdrop-blur-md border-primary/30 shadow-2xl shadow-primary/20">
                  <img src="/cricket-action-1.jpg" alt="Build Team" className="h-48 w-full object-cover rounded-t-lg" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Build Your Team
                    </CardTitle>
                    <CardDescription>Select 11 players within 100 credits</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Live Updates Card */}
              <div className="absolute top-32 left-0 w-72 animate-float-delayed">
                <Card className="bg-card/80 backdrop-blur-md border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-500">LIVE</span>
                    </div>
                    <CardTitle className="text-lg">Live Updates</CardTitle>
                    <CardDescription>Real-time score tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="/cricket-celebration.jpg" alt="Live Match" className="w-full h-32 object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </div>

              {/* Compete Card */}
              <div className="absolute bottom-0 right-12 w-64 animate-float">
                <Card className="bg-card/80 backdrop-blur-md border-purple-500/30 shadow-2xl shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="h-5 w-5 text-purple-500" />
                      Compete & Win
                    </CardTitle>
                    <CardDescription>Climb the leaderboard</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="h-8 w-5 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
              <div className="h-2 w-1 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Image Left */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
                <img
                  src="/section-why-choose.jpg"
                  alt="Why Choose Us"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Why Choose YANGTZE SNC</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  India's Most Trusted
                </span>
                <br />
                Fantasy Cricket Platform
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We're revolutionizing fantasy cricket education in India by providing a completely free, safe, and skill-focused platform where aspiring cricket strategists can learn, practice, and master the art of team building without any financial risk.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "100% Safe", desc: "No real money, no gambling" },
                  { icon: Users, title: "10,000+ Players", desc: "Growing community" },
                  { icon: Award, title: "Educational Focus", desc: "Learn cricket strategy" },
                  { icon: CheckCircle, title: "Govt. Compliant", desc: "Fully legal platform" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Learn More About Us
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Content Focused */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Lightbulb className="h-4 w-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-500">How It Works</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-primary bg-clip-text text-transparent">
                  Simple 4-Step Process
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Getting started is incredibly easy. Follow these four simple steps to begin your fantasy cricket journey.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {[
                { 
                  num: "01", 
                  title: "Register Free", 
                  desc: "Create your account in 30 seconds. No payment required, no credit card needed. Just your basic information and you're ready to play.",
                  icon: Users
                },
                { 
                  num: "02", 
                  title: "Select Match", 
                  desc: "Browse upcoming and live cricket matches from international tournaments, domestic leagues, and T20 series. Choose the match you want to play.",
                  icon: Target
                },
                { 
                  num: "03", 
                  title: "Build Your Dream Team", 
                  desc: "Pick 11 players within 100 credits budget. Select 1-4 batsmen, 1-4 bowlers, 1-4 all-rounders, and 1 wicket-keeper. Choose your captain (2x points) and vice-captain (1.5x points).",
                  icon: Trophy
                },
                { 
                  num: "04", 
                  title: "Track & Compete", 
                  desc: "Watch your team's performance update in real-time every 3 minutes during the match. Climb the leaderboard as your players score runs, take wickets, and make catches.",
                  icon: TrendingUp
                },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-all animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-primary flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <span className="text-2xl font-bold text-white">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-cyan-500" />
                      <h3 className="font-bold text-xl">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cricket Scoring System */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Cricket Scoring System
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-primary mb-3">Batting Points</h4>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Runs</span>
                    <span className="font-semibold">1 point per run</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Boundaries (4s)</span>
                    <span className="font-semibold">1 bonus point</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Sixes (6s)</span>
                    <span className="font-semibold">2 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Strike Rate Bonus</span>
                    <span className="font-semibold">2-4 points</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-cyan-500 mb-3">Bowling Points</h4>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Wickets</span>
                    <span className="font-semibold">25 points each</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Maiden Over</span>
                    <span className="font-semibold">8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Economy Rate Bonus</span>
                    <span className="font-semibold">2-4 points</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                    <span className="text-muted-foreground">Catches/Stumping</span>
                    <span className="font-semibold">8 points each</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Captain Bonus</span>
                  </div>
                  <span className="font-bold text-primary text-lg">2x Points</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-cyan-500" />
                    <span className="font-semibold">Vice-Captain Bonus</span>
                  </div>
                  <span className="font-bold text-cyan-500 text-lg">1.5x Points</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/how-to-play">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-primary hover:from-cyan-600 hover:to-primary/90">
                  View Complete Scoring Guide
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Image Left */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
                <img
                  src="/section-mission.jpg"
                  alt="Our Mission"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Heart className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-500">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
                  Empowering Cricket Minds
                </span>
                <br />
                Through Education
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At YANGTZE SNC, we believe fantasy cricket should be about learning, strategy, and passion for the game—not gambling or financial pressure. Our mission is to create India's largest educational fantasy cricket community where players develop analytical skills, cricket knowledge, and strategic thinking.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    Skill Development Focus
                  </h3>
                  <p className="text-muted-foreground">
                    We're backed by investors who believe in fantasy education and want users to learn cricket strategy without any financial burden. Every feature is designed to enhance your understanding of the game.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    Entertainment & Education Only
                  </h3>
                  <p className="text-muted-foreground">
                    Winners are not rewarded with money—only recognition on the leaderboard. This keeps the focus on learning, improving, and enjoying the strategic aspects of cricket.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-500" />
                    Responsible Gaming Always
                  </h3>
                  <p className="text-muted-foreground">
                    We enforce strict age verification (18+) and state restrictions to comply with Indian laws. Your safety and responsible gaming are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section - Image Right */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6 animate-slide-in-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Platform Features</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Powerful Features
                </span>
                <br />
                For Better Learning
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform is packed with advanced features designed to enhance your fantasy cricket experience and accelerate your learning curve.
              </p>

              <div className="grid gap-4">
                {[
                  {
                    icon: Clock,
                    title: "Real-Time Score Updates",
                    desc: "Live match scores and player points updated automatically every 3 minutes during matches",
                  },
                  {
                    icon: Users,
                    title: "Live Player Indicators",
                    desc: "See which players are currently in ongoing matches with pulsing 'LIVE' badges",
                  },
                  {
                    icon: TrendingUp,
                    title: "Dynamic Leaderboards",
                    desc: "Global and match-specific rankings updated in real-time as matches progress",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Analytics",
                    desc: "Track your team history, points trends, and strategic decisions over time",
                  },
                  {
                    icon: Target,
                    title: "Strategic Team Building",
                    desc: "100-credit budget system with captain (2x) and vice-captain (1.5x) multipliers",
                  },
                  {
                    icon: Shield,
                    title: "Secure & Reliable",
                    desc: "Enterprise-grade security with government compliance and data protection",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all group">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="animate-slide-in-right order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
                <img
                  src="/section-features.jpg"
                  alt="Platform Features"
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Play Commitment Section - Image Left */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 border border-green-500/20">
                <img
                  src="/section-fairplay.jpg"
                  alt="Fair Play Commitment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">Fair Play Commitment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                  Transparency & Integrity
                </span>
                <br />
                At Every Step
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to maintaining the highest standards of fair play, transparency, and ethical gaming practices. Our platform operates with complete integrity and government compliance.
              </p>

              <div className="space-y-4">
                <Card className="bg-card/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lock className="h-5 w-5 text-green-500" />
                      No Hidden Agendas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We never ask for money, never offer cash prizes, and never engage in any gambling activities. Our platform is 100% free and educational.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="h-5 w-5 text-green-500" />
                      Government Compliant
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We strictly enforce state restrictions (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana) and age verification (18+) as per Indian laws.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Equal Opportunity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every player has equal access to all features, real-time data, and fair scoring. No pay-to-win mechanics, no unfair advantages.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Link href="/fair-play">
                <Button variant="outline" className="border-green-500/50 hover:bg-green-500/10">
                  Read Full Fair Play Policy
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Image Right */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6 animate-slide-in-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <HelpCircle className="h-4 w-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-500">Frequently Asked Questions</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-500 to-primary bg-clip-text text-transparent">
                  Got Questions?
                </span>
                <br />
                We've Got Answers
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Find quick answers to the most common questions about our platform, gameplay, and policies.
              </p>

              <div className="space-y-4">
                {[
                  {
                    q: "Is this platform really 100% free?",
                    a: "Yes! There are no hidden costs, no deposits, no in-app purchases. Everything is completely free forever.",
                  },
                  {
                    q: "Do winners get real money prizes?",
                    a: "No. Winners are only shown on the leaderboard for recognition. This is an educational platform, not a gambling site.",
                  },
                  {
                    q: "Who can play on this platform?",
                    a: "Anyone 18 years or older can play, except residents of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to government regulations.",
                  },
                  {
                    q: "How are points calculated?",
                    a: "Points are based on real match performance: runs, wickets, catches, strike rate, economy rate, etc. Captain gets 2x points, vice-captain gets 1.5x points.",
                  },
                  {
                    q: "How often do scores update?",
                    a: "Live match scores and player points are automatically updated every 3 minutes during ongoing matches.",
                  },
                ].map((faq, idx) => (
                  <Card key={idx} className="bg-card/50 border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Link href="/faq">
                <Button className="bg-gradient-to-r from-cyan-500 to-primary hover:from-cyan-600 hover:to-primary/90">
                  View All FAQs
                  <HelpCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="animate-slide-in-right order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
                <img
                  src="/section-why-choose.jpg"
                  alt="FAQ Support"
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-card/90 backdrop-blur-sm border-cyan-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Need More Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Can't find what you're looking for? Our support team is here to help!
                      </p>
                      <Link href="/contact">
                        <Button size="sm" variant="outline" className="w-full border-cyan-500/50">
                          Contact Support
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
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
