import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, Users, Shield, Heart, Building2, Scale, 
  TrendingUp, Award, CheckCircle2, AlertCircle, 
  Globe, Lightbulb, BookOpen, UserCheck, Lock,
  FileCheck, MapPin, Phone, Mail
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            {/* Hero Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About YANGTZE SNC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                India's Premier Educational
                <br />
                Fantasy Cricket Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering cricket enthusiasts to master fantasy sports strategy through free, safe, and skill-focused learning experiences since 2024
              </p>
            </div>

            {/* Company Overview */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Company Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    <strong className="text-foreground">YANGTZE SNC E-COMMERCE PRIVATE LIMITED</strong> is a legally registered Indian private limited company incorporated under the Companies Act, 2013. We are headquartered in New Delhi with a regional office in Bengaluru, Karnataka. Our company was founded with a singular mission: to democratize fantasy cricket education and make strategic learning accessible to every cricket enthusiast in India, completely free of charge.
                  </p>
                  <p className="text-base leading-relaxed">
                    Unlike traditional fantasy sports platforms that focus on monetary transactions and gambling mechanics, YANGTZE SNC operates as a pure educational platform. We believe fantasy cricket is fundamentally a skill-based strategic game that teaches analytical thinking, statistical analysis, team management, and decision-making under uncertainty. Our platform removes all financial barriers and pressures, allowing users to focus entirely on learning, practicing, and mastering these valuable skills.
                  </p>
                  <p className="text-base leading-relaxed">
                    We are backed by investors who share our vision of fantasy sports education. Our funding model ensures that we never need to monetize user data, charge subscription fees, or introduce gambling elements. This independence allows us to maintain our commitment to providing a completely free, safe, and educational experience for all users.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Legal Entity Name
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                      Corporate Identity Number (CIN)
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">U47912DL2024PTC437115</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                      PAN Number
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">AABCY8991L</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                      GST Registration Number
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">07AABCY8991L1ZG</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                      Date of Incorporation
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">26 September 2024</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      Registered State
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Story */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  Our Story: Why We Exist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    The idea for YANGTZE SNC was born from a simple observation: millions of cricket fans in India wanted to learn fantasy cricket strategy, but the existing platforms created significant barriers. Most fantasy sports platforms required real money deposits, creating financial pressure and anxiety. Users who wanted to learn and practice without risking money had no suitable options.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our founder, <strong className="text-foreground">Nitish Kumar Singh</strong>, recognized this gap in the market. As a passionate cricket enthusiast and technology entrepreneur, he envisioned a platform where anyone could learn fantasy cricket strategy in a safe, pressure-free environment. The vision was clear: create a completely free educational platform that focuses on skill development, strategic thinking, and cricket knowledge—without any gambling elements or financial transactions.
                  </p>
                  <p className="text-base leading-relaxed">
                    In 2024, after months of research, development, and securing backing from investors who believed in educational technology, YANGTZE SNC was officially incorporated. We built our platform from the ground up with education as the core principle. Every feature, every design decision, and every policy was created to support learning and responsible participation.
                  </p>
                  <p className="text-base leading-relaxed">
                    Today, we continue to operate with the same founding principles: provide free access to fantasy cricket education, maintain strict compliance with Indian laws, ensure user safety and privacy, and create a community of learners who improve their strategic thinking skills through practice and experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide a safe, accessible, and completely free educational platform where cricket enthusiasts of all skill levels can learn fantasy sports strategy, develop analytical thinking abilities, and master team-building skills without any financial risk or pressure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted and comprehensive educational fantasy cricket platform, empowering millions of users to master strategic thinking and cricket analysis through hands-on learning in a responsible, compliant, and completely free environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Our Promise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We promise to always keep our platform 100% free, maintain the highest standards of legal compliance and user safety, protect user privacy, and focus exclusively on education and skill development—never introducing gambling or monetary transactions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Our Core Values & Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Integrity & Legal Compliance</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We strictly adhere to all Indian laws and regulations governing online platforms and fantasy sports. This includes mandatory age verification (18+ only), enforcement of state-specific restrictions (blocking users from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana), data protection compliance, and transparent operations. We maintain all required licenses and registrations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">User-First Approach</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every feature, design decision, and policy is created with user education, safety, and experience as the top priority. We actively listen to user feedback, continuously improve our platform based on user needs, and ensure that our interface is intuitive and accessible to users of all technical skill levels.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Educational Excellence</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We emphasize learning, skill development, and strategic thinking over competition and rewards. Our platform provides detailed scoring explanations, real-time performance feedback, comprehensive guides, and educational resources to help users understand the strategic elements of fantasy cricket and improve their analytical abilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Responsible Gaming</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our platform is 100% free with absolutely no real money involvement, ensuring responsible participation without financial risk. We promote healthy gaming habits, provide clear disclaimers about the educational nature of our platform, and actively discourage any form of gambling or excessive time investment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Privacy & Security</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We implement enterprise-grade security measures to protect user data, never sell or monetize user information, use secure authentication systems, encrypt sensitive data, and maintain transparent privacy policies. Users have full control over their personal information and can request data deletion at any time.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Innovation & Technology</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We leverage cutting-edge technology to provide real-time match data integration, automatic score updates every 3 minutes, live player indicators, dynamic leaderboards, and seamless user experiences. Our platform is built with modern web technologies ensuring fast performance, mobile responsiveness, and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Makes Us Different */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  What Makes YANGTZE SNC Different
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    YANGTZE SNC stands apart from traditional fantasy sports platforms in several fundamental ways:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">100% Free Forever</h4>
                      <p className="text-sm text-muted-foreground">
                        No deposits, no subscriptions, no hidden fees, no premium features, no in-app purchases. Everything is completely free for all users, always.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Zero Gambling Elements</h4>
                      <p className="text-sm text-muted-foreground">
                        No real money prizes, no cash withdrawals, no monetary incentives. Winners receive only leaderboard recognition and the satisfaction of strategic success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Educational Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive guides, detailed scoring explanations, strategic tips, and learning resources help users understand and improve their fantasy cricket skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Real-Time Data Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Live match data from Cricket Data API, automatic score updates every 3 minutes, live player indicators, and dynamic leaderboard rankings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Strict Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Mandatory 18+ age verification, state-specific restrictions, transparent policies, and full adherence to Indian laws and regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Privacy Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        We never sell user data, never monetize personal information, and implement strong security measures to protect user privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Operate */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                  How We Operate: Our Business Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    Many users wonder: "If the platform is completely free, how does YANGTZE SNC sustain itself?" The answer is simple and transparent:
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-foreground">We are backed by investors who believe in educational technology and fantasy sports education.</strong> Our investors understand that not every platform needs to extract money from users to be valuable. They support our mission to democratize fantasy cricket knowledge and make strategic learning accessible to everyone in India.
                  </p>
                  <p className="text-base leading-relaxed">
                    This investment-backed model means we have no pressure to monetize users, introduce gambling elements, sell user data, or compromise our educational mission. We can focus entirely on providing the best possible learning experience without any conflicts of interest.
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-foreground">What we will NEVER do:</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Charge users any fees or subscriptions</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Introduce real money transactions or gambling</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Sell or monetize user data</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Show intrusive advertisements</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Create premium or paid tiers</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">Compromise user privacy or security</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Compliance */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  Legal Compliance & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    YANGTZE SNC operates in full compliance with all applicable Indian laws and regulations. We take our legal responsibilities seriously and maintain the highest standards of regulatory adherence.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-primary" />
                      Age Verification (18+ Mandatory)
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All users must be 18 years or older to register and use our platform. We implement strict age verification during registration, requiring users to confirm their date of birth. Users who provide false age information are permanently banned. This policy ensures compliance with Indian laws regarding online gaming and protects minors from accessing fantasy sports platforms.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      State-Specific Restrictions
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In compliance with state laws, our platform is NOT available to residents of the following states: <strong className="text-foreground">Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</strong>. During registration, users must declare their state of residence. Users from restricted states are blocked from creating accounts. Users who provide false state information are permanently banned. We actively monitor and enforce these restrictions to maintain full legal compliance.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      No Gambling or Real Money
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      YANGTZE SNC is a pure educational platform with zero gambling elements. We do not accept any deposits, do not offer any monetary prizes or rewards, do not facilitate any financial transactions between users, and do not operate as a betting or gambling platform. Winners receive only leaderboard recognition. This structure ensures we operate as a skill-based educational platform, not a gambling service, maintaining compliance with Indian gaming laws.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      Data Protection & Privacy
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We comply with Indian data protection laws and best practices. User data is encrypted and securely stored, never sold or shared with third parties, used only for platform functionality and user experience, and can be deleted upon user request. We maintain transparent privacy policies and give users full control over their personal information.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-secondary" />
                      Corporate Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      As a registered private limited company, we maintain all required corporate filings, licenses, and registrations. We file annual returns with the Ministry of Corporate Affairs, maintain GST compliance and file regular returns, adhere to Companies Act, 2013 requirements, and maintain transparent financial records. All company information is publicly verifiable through official government databases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Leadership & Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    YANGTZE SNC is led by experienced professionals who are passionate about cricket, technology, and education.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Nitish Kumar Singh</h3>
                      <p className="text-sm font-semibold text-primary">Founder & Chief Executive Officer</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nitish Kumar Singh is the visionary founder and CEO of YANGTZE SNC. With a deep passion for cricket and a strong background in technology entrepreneurship, Nitish recognized the need for an educational fantasy cricket platform that prioritizes learning over gambling. Under his leadership, YANGTZE SNC has built a platform that serves thousands of users while maintaining unwavering commitment to free access, legal compliance, and educational excellence. Nitish's vision continues to guide the company's mission to democratize fantasy cricket education across India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-sm leading-relaxed">
                    Our team includes experienced software engineers, cricket analysts, compliance specialists, and customer support professionals who work together to deliver the best possible educational experience for our users.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technology & Platform */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  Technology & Platform Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    YANGTZE SNC is built on modern, reliable technology infrastructure designed to provide seamless user experiences and real-time cricket data integration.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Real-Time Cricket Data
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Integration with Cricket Data API (cricketdata.org) provides live match data, player statistics, and real-time scores for international and domestic cricket matches.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      Automatic Score Updates
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Background jobs run every 3 minutes during live matches to automatically update player points, team scores, and leaderboard rankings without user intervention.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Live Player Indicators
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Visual indicators show which players are currently in ongoing matches, helping users make informed team selection decisions.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Dynamic Leaderboards
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Global and match-specific leaderboards update in real-time as matches progress, showing user rankings and points.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      Strategic Team Building
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      100-credit budget system with role-based player selection, captain (2x points) and vice-captain (1.5x points) multipliers for strategic depth.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Mobile-Responsive Design
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Fully responsive interface works seamlessly on desktop, tablet, and mobile devices for learning on the go.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Offices */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Our Offices & Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Head Office */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">Head Office (Registered Address)</h3>
                    </div>
                    <div className="space-y-3 pl-12">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-semibold text-foreground mb-1">Address:</p>
                          <p>37 G-2 579 GALI NO.14</p>
                          <p>SAI ENCLAVE MOHAN GARDEN</p>
                          <p>D. K. Mohan Garden</p>
                          <p>New Delhi, West Delhi - 110059</p>
                          <p>Delhi, India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Regional Office */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold">Regional Office</h3>
                    </div>
                    <div className="space-y-3 pl-12">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-semibold text-foreground mb-1">Address:</p>
                          <p>MSK Plaza, 3rd Main Rd</p>
                          <p>Defence Colony, Indiranagar</p>
                          <p>Bengaluru, Karnataka 560038</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Email Support</p>
                        <p className="text-sm text-muted-foreground">Visit our Contact page for support inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                      <Globe className="h-5 w-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Website</p>
                        <p className="text-sm text-muted-foreground">yangtzesnc.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Vision */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Our Future Vision & Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    As we continue to grow, our commitment to free, educational, and responsible fantasy cricket remains unwavering. We are constantly working to improve our platform, add new features, and enhance the learning experience for our users.
                  </p>
                  <p className="text-base leading-relaxed">
                    <strong className="text-foreground">Our promise to you:</strong> YANGTZE SNC will always remain 100% free, will never introduce gambling or real money transactions, will continue to prioritize education and skill development, will maintain the highest standards of legal compliance and user safety, and will keep improving based on user feedback and technological advancements.
                  </p>
                  <p className="text-base leading-relaxed">
                    We invite you to join our growing community of learners, practice your fantasy cricket strategy in a safe environment, and master the art of team building without any financial pressure. Welcome to YANGTZE SNC—where learning fantasy cricket is free, fun, and focused on your growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
