import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, GraduationCap, Clock, AlertCircle, Shield, Users, CheckCircle, Phone, Eye, TrendingUp, BookOpen, HelpCircle } from "lucide-react";

export default function ResponsibleGaming() {
  const lastUpdated = "December 18, 2024";

  const sections = [
    {
      icon: Heart,
      title: "1. Introduction & Our Philosophy",
      color: "text-primary",
      content: [
        "At YANGTZE SNC E-COMMERCE PRIVATE LIMITED, responsible gaming is at the heart of everything we do. Unlike traditional fantasy sports platforms that involve real money, YANGTZE SNC is a 100% free, educational platform designed to help users learn cricket strategy, develop analytical skills, and enjoy fantasy sports without any financial risk.",
        "Our philosophy is simple: fantasy cricket should be about skill, knowledge, and fun—not gambling or financial gain. We believe that by removing the financial element, we create a healthier, more sustainable, and more educational environment where users can focus on improving their cricket understanding and strategic thinking.",
        "This Responsible Gaming page outlines our commitment to promoting healthy gaming habits, protecting vulnerable users, providing educational resources, and ensuring that our platform remains a positive force in the fantasy sports community."
      ]
    },
    {
      icon: GraduationCap,
      title: "2. Educational Focus: No Real Money, No Risk",
      color: "text-secondary",
      content: [
        "YANGTZE SNC is fundamentally different from gambling or betting platforms. Here's what makes us unique:",
        "",
        "**100% Free to Play**",
        "• No entry fees, deposits, or payments required",
        "• No in-app purchases or premium features",
        "• No hidden costs or subscription fees",
        "• All features are available to all users equally",
        "",
        "**No Real Money Prizes**",
        "• No cash prizes, payouts, or monetary rewards",
        "• No gift cards, vouchers, or financial incentives",
        "• Recognition through leaderboards and rankings only",
        "• Success is measured by skill improvement, not financial gain",
        "",
        "**Educational Purpose**",
        "• Platform designed to teach cricket strategy and player analysis",
        "• Focus on developing analytical and decision-making skills",
        "• Learning from wins and losses without financial consequences",
        "• Building cricket knowledge through hands-on experience",
        "",
        "**No Gambling or Betting**",
        "• Not a gambling platform under Indian law",
        "• No wagering, betting, or games of chance",
        "• Success depends entirely on skill and knowledge",
        "• No financial risk or potential for financial loss"
      ]
    },
    {
      icon: Clock,
      title: "3. Healthy Gaming Habits",
      color: "text-accent",
      content: [
        "Even though YANGTZE SNC is free and educational, we encourage all users to maintain healthy gaming habits:",
        "",
        "**Time Management**",
        "• Set reasonable time limits for platform usage",
        "• Balance fantasy cricket with other activities (work, study, family, hobbies)",
        "• Take regular breaks during extended sessions",
        "• Avoid playing when tired, stressed, or emotionally distressed",
        "",
        "**Balanced Perspective**",
        "• Remember that fantasy cricket is entertainment and education, not a profession",
        "• Don't let wins or losses affect your mood or self-esteem",
        "• Keep fantasy cricket in perspective relative to real-life priorities",
        "• Celebrate learning and improvement, not just winning",
        "",
        "**Social Balance**",
        "• Don't neglect relationships or responsibilities due to platform usage",
        "• Engage in offline activities and social interactions",
        "• Share your interest in cricket with friends and family in healthy ways",
        "• Don't isolate yourself or withdraw from real-world activities",
        "",
        "**Self-Awareness**",
        "• Regularly assess your gaming habits and motivations",
        "• Be honest with yourself about how much time you spend on the platform",
        "• Recognize when gaming stops being fun and becomes compulsive",
        "• Seek help if you feel your gaming habits are becoming problematic"
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Recognizing Problematic Behavior",
      color: "text-primary",
      content: [
        "While YANGTZE SNC has no financial risk, it's still important to recognize signs of problematic gaming behavior:",
        "",
        "**Warning Signs**",
        "• Spending excessive time on the platform (multiple hours daily)",
        "• Neglecting work, study, or personal responsibilities",
        "• Feeling anxious, irritable, or restless when unable to access the platform",
        "• Lying to family or friends about time spent on fantasy cricket",
        "• Using the platform to escape from real-life problems or negative emotions",
        "• Continuing to play despite negative consequences (e.g., poor grades, relationship issues)",
        "• Losing interest in other hobbies or activities",
        "• Experiencing sleep disruption due to late-night gaming",
        "",
        "**Compulsive Behavior Indicators**",
        "• Feeling the need to check the platform constantly",
        "• Difficulty controlling the urge to create teams or check scores",
        "• Preoccupation with fantasy cricket even when not playing",
        "• Increasing time spent on the platform to achieve the same satisfaction",
        "",
        "**Emotional Impact**",
        "• Significant mood swings based on contest results",
        "• Feelings of depression or anxiety related to performance",
        "• Loss of self-esteem due to poor rankings",
        "• Anger or frustration that affects relationships or daily life"
      ]
    },
    {
      icon: CheckCircle,
      title: "5. Self-Assessment Tools",
      color: "text-secondary",
      content: [
        "Use these questions to assess whether your gaming habits are healthy:",
        "",
        "**Time & Frequency**",
        "• How many hours per day do you spend on YANGTZE SNC?",
        "• Do you play every day, or do you take regular breaks?",
        "• Have you tried to reduce your time on the platform but found it difficult?",
        "",
        "**Impact on Life**",
        "• Has your platform usage affected your work, studies, or responsibilities?",
        "• Have family or friends expressed concern about your gaming habits?",
        "• Have you missed important events or obligations due to fantasy cricket?",
        "",
        "**Emotional State**",
        "• Do you feel anxious or irritable when you can't access the platform?",
        "• Do contest results significantly affect your mood or self-worth?",
        "• Do you use fantasy cricket to escape from stress or problems?",
        "",
        "**Control & Motivation**",
        "• Do you feel in control of your gaming habits, or do they control you?",
        "• Are you playing because you enjoy it, or because you feel compelled to?",
        "• Can you easily stop playing when you need to, or do you struggle to log off?",
        "",
        "**If You Answered 'Yes' to Multiple Questions:**",
        "• Consider taking a break from the platform",
        "• Talk to a trusted friend, family member, or counselor",
        "• Review the support resources in Section 7",
        "• Contact us at support@yangtzesnc.com for assistance"
      ]
    },
    {
      icon: Shield,
      title: "6. Setting Personal Limits",
      color: "text-accent",
      content: [
        "We encourage all users to set personal limits to maintain healthy gaming habits:",
        "",
        "**Time Limits**",
        "• Decide in advance how much time you'll spend on the platform each day",
        "• Use phone alarms or timers to remind yourself when to stop",
        "• Schedule specific times for fantasy cricket (e.g., 30 minutes after dinner)",
        "• Take at least one day off per week from the platform",
        "",
        "**Activity Limits**",
        "• Limit the number of contests you enter per day or week",
        "• Avoid creating teams late at night or when tired",
        "• Set a maximum number of teams you'll manage simultaneously",
        "• Focus on quality (thoughtful team building) over quantity",
        "",
        "**Emotional Boundaries**",
        "• Don't play when you're feeling stressed, angry, or upset",
        "• Accept that losses are part of the learning process",
        "• Don't let contest results define your self-worth",
        "• Celebrate small improvements, not just top rankings",
        "",
        "**Social Boundaries**",
        "• Prioritize real-life relationships and activities",
        "• Don't let fantasy cricket interfere with family time",
        "• Engage in other hobbies and interests",
        "• Maintain a balanced lifestyle",
        "",
        "**Taking Breaks**",
        "• Take regular breaks during gaming sessions (e.g., 10 minutes every hour)",
        "• Consider longer breaks (days or weeks) if you feel overwhelmed",
        "• Use breaks to reflect on your gaming habits and motivations",
        "• Return to the platform only when you feel ready and balanced"
      ]
    },
    {
      icon: Phone,
      title: "7. Support Resources & Help",
      color: "text-primary",
      content: [
        "If you or someone you know is struggling with problematic gaming behavior, help is available:",
        "",
        "**Professional Support (India)**",
        "• **NIMHANS (National Institute of Mental Health and Neurosciences)**: +91-80-2699-5000",
        "• **Vandrevala Foundation Helpline**: 1860-2662-345 or 1800-2333-330 (24/7 mental health support)",
        "• **iCall Psychosocial Helpline**: +91-22-2556-3291 (Monday-Saturday, 8 AM - 10 PM)",
        "• **COOJ Mental Health Foundation**: +91-83-6080-3000 (24/7 helpline)",
        "",
        "**Online Resources**",
        "• **Game Quitters**: https://gamequitters.com (community and resources for gaming addiction)",
        "• **Internet and Gaming Addicts Anonymous (IGAA)**: https://internetgamingaddictsanonymous.org",
        "• **SAMHSA National Helpline (International)**: 1-800-662-4357 (24/7 treatment referral)",
        "",
        "**Local Support**",
        "• Consult a mental health professional (psychologist, psychiatrist, counselor)",
        "• Speak with your family doctor or general practitioner",
        "• Reach out to school or university counseling services",
        "• Join local support groups for gaming or internet addiction",
        "",
        "**YANGTZE SNC Support**",
        "• Email us at support@yangtzesnc.com if you need help managing your account",
        "• We can temporarily suspend your account if you need a break",
        "• We can provide information about your usage patterns",
        "• We're here to help, not judge"
      ]
    },
    {
      icon: Users,
      title: "8. Parental Guidance & Age Verification",
      color: "text-secondary",
      content: [
        "While YANGTZE SNC is free and educational, we strictly enforce age restrictions to protect minors:",
        "",
        "**Age Requirement: 18+**",
        "• All users must be at least 18 years old",
        "• Date of birth verification is mandatory during registration",
        "• We may request additional verification if age is in question",
        "• Accounts found to belong to minors will be immediately terminated",
        "",
        "**Why 18+?**",
        "• Fantasy sports involve strategic decision-making and competition",
        "• Content and interactions may not be suitable for minors",
        "• Compliance with Indian laws and regulations",
        "• Protection of vulnerable young users",
        "",
        "**For Parents & Guardians**",
        "• Monitor your children's online activities and screen time",
        "• Educate children about responsible internet and gaming habits",
        "• Set parental controls on devices to limit access to age-restricted platforms",
        "• Have open conversations about online safety and healthy gaming",
        "",
        "**Reporting Underage Users**",
        "• If you suspect a user is under 18, report it to support@yangtzesnc.com",
        "• Include the username and any evidence (if available)",
        "• We will investigate and take appropriate action",
        "• Protecting minors is a shared responsibility"
      ]
    },
    {
      icon: Eye,
      title: "9. Platform Safety Features",
      color: "text-accent",
      content: [
        "YANGTZE SNC includes several features designed to promote responsible gaming:",
        "",
        "**No Financial Pressure**",
        "• Since the platform is free, there's no financial pressure to keep playing",
        "• No deposits, entry fees, or payments mean no financial loss",
        "• Users can take breaks without worrying about losing money",
        "",
        "**Transparent Rules**",
        "• All contest rules and scoring systems are clearly explained",
        "• No hidden mechanics or surprise changes",
        "• Fair play policies are publicly available",
        "",
        "**Educational Content**",
        "• How To Play guides help users understand the platform",
        "• FAQ section answers common questions",
        "• Tips and strategies promote skill development over compulsive play",
        "",
        "**Account Management**",
        "• Users can request temporary account suspension if they need a break",
        "• Account deletion is available for users who want to stop permanently",
        "• We provide usage statistics upon request",
        "",
        "**Community Standards**",
        "• We enforce respectful behavior and prohibit harassment",
        "• Toxic or abusive users are removed to maintain a positive environment",
        "• Fair play policies ensure honest competition"
      ]
    },
    {
      icon: TrendingUp,
      title: "10. Healthy Competition & Perspective",
      color: "text-primary",
      content: [
        "Competition can be motivating, but it's important to maintain a healthy perspective:",
        "",
        "**Focus on Learning, Not Just Winning**",
        "• The primary goal is to improve your cricket knowledge and analytical skills",
        "• Every contest is a learning opportunity, regardless of the outcome",
        "• Analyze your decisions to understand what worked and what didn't",
        "• Celebrate personal growth and improvement over time",
        "",
        "**Accept Wins and Losses Gracefully**",
        "• Winning feels good, but it doesn't define your worth as a person",
        "• Losing is part of the learning process—don't take it personally",
        "• Cricket is unpredictable; even the best teams can underperform",
        "• Maintain sportsmanship and respect for other users",
        "",
        "**Avoid Unhealthy Comparisons**",
        "• Don't compare yourself to top-ranked users who may have more experience",
        "• Everyone progresses at their own pace",
        "• Focus on your own improvement, not others' success",
        "• Remember that leaderboards are just one measure of engagement",
        "",
        "**Keep It Fun**",
        "• If fantasy cricket stops being enjoyable, take a break",
        "• Don't let competition create stress or anxiety",
        "• Play because you love cricket, not because you feel obligated",
        "• Balance competition with enjoyment and relaxation"
      ]
    },
    {
      icon: BookOpen,
      title: "11. Educational Benefits of Fantasy Cricket",
      color: "text-secondary",
      content: [
        "When approached responsibly, fantasy cricket offers numerous educational benefits:",
        "",
        "**Cricket Knowledge**",
        "• Learn about players, teams, and match formats",
        "• Understand player roles (batsmen, bowlers, all-rounders, wicket-keepers)",
        "• Follow live matches and stay updated on cricket news",
        "• Develop a deeper appreciation for the sport",
        "",
        "**Analytical Skills**",
        "• Analyze player statistics and performance trends",
        "• Evaluate match conditions (pitch, weather, venue)",
        "• Make data-driven decisions under uncertainty",
        "• Learn to weigh multiple factors when making choices",
        "",
        "**Strategic Thinking**",
        "• Develop team-building strategies within constraints (credits, player limits)",
        "• Balance risk and reward when selecting captains and vice-captains",
        "• Adapt strategies based on match situations",
        "• Learn from mistakes and refine your approach",
        "",
        "**Emotional Intelligence**",
        "• Manage emotions during wins and losses",
        "• Develop patience and resilience",
        "• Practice decision-making under pressure",
        "• Build confidence through skill improvement"
      ]
    },
    {
      icon: HelpCircle,
      title: "12. Frequently Asked Questions",
      color: "text-accent",
      content: [
        "**Q: Is YANGTZE SNC a gambling platform?**",
        "A: No. YANGTZE SNC is a 100% free, educational platform with no real money involved. There are no entry fees, deposits, or cash prizes. It is not gambling or betting under Indian law.",
        "",
        "**Q: Can I become addicted to a free platform?**",
        "A: While there's no financial risk, any activity can become problematic if it interferes with daily life. We encourage healthy gaming habits and provide resources for users who need help.",
        "",
        "**Q: How can I take a break from the platform?**",
        "A: You can simply stop logging in, or contact us at support@yangtzesnc.com to request a temporary account suspension. We're happy to help you take a break.",
        "",
        "**Q: Can I delete my account permanently?**",
        "A: Yes. You can request account deletion at any time by contacting support@yangtzesnc.com. We will permanently delete your account and data within 30 days.",
        "",
        "**Q: What if I'm concerned about a friend or family member's gaming habits?**",
        "A: Have an open, non-judgmental conversation with them. Share this Responsible Gaming page and encourage them to seek professional help if needed. You can also contact us for guidance.",
        "",
        "**Q: Does YANGTZE SNC share data with gambling platforms?**",
        "A: No. We do not share user data with gambling, betting, or real-money gaming platforms. Your privacy is protected as outlined in our Privacy Policy."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            {/* Hero Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Heart className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Your Well-Being Matters</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Responsible Gaming
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to promoting healthy gaming habits, protecting vulnerable users, and ensuring that fantasy cricket remains a positive, educational experience for everyone.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            {/* Responsible Gaming Commitment */}
            <Card className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Our Commitment to Your Well-Being</p>
                    <p className="text-sm text-muted-foreground">
                      YANGTZE SNC is a 100% free, educational platform with no financial risk. We believe fantasy cricket should be about learning, skill development, and fun—not gambling or compulsive behavior. We provide resources, support, and tools to help you maintain healthy gaming habits and seek help if needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsible Gaming Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className={`h-5 w-5 ${section.color}`} />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className={`leading-relaxed ${paragraph.startsWith('**') || paragraph.startsWith('•') || paragraph.startsWith('A:') ? 'text-foreground' : 'text-muted-foreground'} ${paragraph === '' ? 'h-2' : ''}`}>
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Help Section */}
            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Need Help? We're Here for You</p>
                    <p className="text-sm text-muted-foreground">
                      If you're struggling with problematic gaming behavior, please reach out for support:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>YANGTZE SNC Support:</strong> <a href="mailto:support@yangtzesnc.com" className="text-primary hover:underline">support@yangtzesnc.com</a></p>
                      <p><strong>Vandrevala Foundation (24/7):</strong> 1860-2662-345 or 1800-2333-330</p>
                      <p><strong>iCall Helpline:</strong> +91-22-2556-3291 (Mon-Sat, 8 AM - 10 PM)</p>
                      <p><strong>COOJ Mental Health (24/7):</strong> +91-83-6080-3000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Questions About Responsible Gaming?</p>
                    <p className="text-sm text-muted-foreground">
                      If you have questions or concerns about responsible gaming, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> <a href="mailto:support@yangtzesnc.com" className="text-primary hover:underline">support@yangtzesnc.com</a></p>
                      <p><strong>Company:</strong> YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                      <p><strong>Address:</strong> 37 G-2 579 GALI NO.14, SAI ENCLAVE MOHAN GARDEN, New Delhi - 110059, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final Notice */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Remember: Fantasy cricket should be fun, educational, and balanced with other aspects of your life. If you ever feel that your gaming habits are becoming problematic, please seek help. We're here to support you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
