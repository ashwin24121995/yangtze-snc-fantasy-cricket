import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Trophy, Eye, Ban, Lock, AlertTriangle, FileText, Users, CheckCircle } from "lucide-react";

export default function FairPlay() {
  const lastUpdated = "December 18, 2024";

  const sections = [
    {
      icon: Shield,
      title: "1. Introduction & Commitment to Fair Play",
      color: "text-primary",
      content: [
        "At YANGTZE SNC E-COMMERCE PRIVATE LIMITED, fair play is the cornerstone of our fantasy cricket platform. We are committed to creating a level playing field where every user has an equal opportunity to succeed based on their cricket knowledge, strategic thinking, and analytical skills—not through unfair advantages or deceptive practices.",
        "This Fair Play Policy outlines our commitment to maintaining integrity, transparency, and fairness across the Platform. It defines what constitutes fair play, identifies prohibited practices, explains our detection and enforcement mechanisms, and describes the consequences for violations.",
        "By using the Platform, you agree to uphold these fair play principles and compete honestly with other users. Violations of this policy may result in account suspension, termination, or other penalties as described herein."
      ]
    },
    {
      icon: Trophy,
      title: "2. What is Fair Play?",
      color: "text-secondary",
      content: [
        "Fair play means competing honestly and ethically within the rules and spirit of the game. On the YANGTZE SNC platform, fair play includes:",
        "",
        "**Equal Opportunity**",
        "• All users have access to the same features, information, and tools",
        "• No premium advantages, paid benefits, or special privileges",
        "• The same scoring rules and point calculations apply to everyone",
        "• Transparent and publicly available contest rules",
        "",
        "**Honest Competition**",
        "• Creating teams based on your own cricket knowledge and analysis",
        "• Making strategic decisions independently without collusion",
        "• Accepting wins and losses with sportsmanship",
        "• Respecting other users and their right to compete fairly",
        "",
        "**Integrity & Transparency**",
        "• Providing accurate information during registration and participation",
        "• Using only one account per person",
        "• Following all Platform rules and Terms & Conditions",
        "• Reporting suspected violations or unfair practices",
        "",
        "**Skill-Based Success**",
        "• Success depends on cricket knowledge, player analysis, and strategic thinking",
        "• No shortcuts, exploits, or manipulation of results",
        "• Learning from experience and improving your skills over time",
        "• Contributing to a positive and educational community"
      ]
    },
    {
      icon: Ban,
      title: "3. Prohibited Unfair Practices",
      color: "text-accent",
      content: [
        "The following practices are strictly prohibited and constitute violations of fair play:",
        "",
        "**3.1 Multiple Accounts**",
        "• Creating more than one account per person",
        "• Using family members' or friends' accounts to circumvent the one-account rule",
        "• Maintaining inactive accounts to gain unfair advantages",
        "• Sharing account credentials with others",
        "",
        "**3.2 Automated Tools & Bots**",
        "• Using scripts, bots, or automated software to create teams",
        "• Employing automated tools to scrape data or gain unfair information",
        "• Using browser extensions or plugins that provide unfair advantages",
        "• Automating any aspect of gameplay or contest participation",
        "",
        "**3.3 Collusion & Coordination**",
        "• Coordinating team selections with other users to manipulate rankings",
        "• Sharing private information or strategies to gain collective advantages",
        "• Forming groups or syndicates to dominate leaderboards",
        "• Intentionally losing or manipulating results to benefit others",
        "",
        "**3.4 Exploitation & Manipulation**",
        "• Exploiting bugs, glitches, or technical vulnerabilities",
        "• Manipulating scoring systems or point calculations",
        "• Using insider information not publicly available to all users",
        "• Attempting to reverse engineer or hack the Platform",
        "",
        "**3.5 Account Fraud**",
        "• Providing false information during registration (age, location, identity)",
        "• Using stolen or fake identification documents",
        "• Impersonating another person or entity",
        "• Creating accounts from restricted states using VPNs or proxies",
        "",
        "**3.6 Harassment & Abuse**",
        "• Harassing, threatening, or abusing other users",
        "• Using offensive or inappropriate team names or usernames",
        "• Engaging in discriminatory behavior based on race, religion, gender, etc.",
        "• Disrupting the Platform or interfering with other users' experience"
      ]
    },
    {
      icon: Lock,
      title: "4. Account Security & Integrity",
      color: "text-primary",
      content: [
        "Maintaining account security is essential for fair play. You are responsible for:",
        "",
        "**Protecting Your Credentials**",
        "• Keeping your password confidential and secure",
        "• Not sharing your account with others",
        "• Using a strong, unique password",
        "• Enabling any available security features",
        "",
        "**Monitoring Your Account**",
        "• Regularly reviewing your account activity",
        "• Immediately reporting any suspicious or unauthorized activity",
        "• Notifying us if you suspect your account has been compromised",
        "• Updating your contact information to ensure you receive security alerts",
        "",
        "**One Account Per Person**",
        "• You may only create and maintain one account",
        "• If you forget your password, use the password reset feature instead of creating a new account",
        "• If you want to change your email address, update it in your account settings",
        "• Accounts cannot be transferred, sold, or given to others",
        "",
        "**Account Verification**",
        "• We may request verification of your identity, age, or location at any time",
        "• You must provide accurate and truthful verification documents",
        "• Failure to verify your account may result in suspension or termination",
        "• Providing false verification documents is a serious violation"
      ]
    },
    {
      icon: Eye,
      title: "5. Detection & Monitoring Systems",
      color: "text-secondary",
      content: [
        "We employ multiple systems and techniques to detect unfair practices and maintain platform integrity:",
        "",
        "**Automated Detection**",
        "• Machine learning algorithms analyze user behavior patterns",
        "• Anomaly detection identifies suspicious activity (e.g., rapid team creation, unusual login patterns)",
        "• IP address tracking detects multiple accounts from the same location",
        "• Device fingerprinting identifies users attempting to circumvent restrictions",
        "",
        "**Manual Review**",
        "• Our security team manually reviews flagged accounts and suspicious activity",
        "• We investigate user reports of suspected violations",
        "• We conduct periodic audits of high-performing accounts",
        "• We review contest results for signs of collusion or manipulation",
        "",
        "**Data Analysis**",
        "• We analyze team selection patterns to identify collusion",
        "• We monitor leaderboard movements for unusual fluctuations",
        "• We track user interactions and communications for signs of coordination",
        "• We compare user data against known fraud patterns",
        "",
        "**Third-Party Tools**",
        "• We use industry-standard fraud detection services",
        "• We employ security tools to detect bots and automated scripts",
        "• We validate email addresses and phone numbers",
        "• We verify geographic location to enforce state restrictions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "6. Reporting Violations",
      color: "text-accent",
      content: [
        "We encourage all users to help maintain a fair playing environment by reporting suspected violations.",
        "",
        "**How to Report**",
        "• Email us at fairplay@yangtzesnc.com with details of the suspected violation",
        "• Include the username(s) of the suspected violator(s)",
        "• Provide specific examples, dates, and any supporting evidence",
        "• Describe the nature of the violation (e.g., multiple accounts, collusion, bot usage)",
        "",
        "**What to Report**",
        "• Suspected multiple accounts operated by the same person",
        "• Evidence of collusion or coordination between users",
        "• Unusual patterns suggesting bot or automated tool usage",
        "• Harassment, abuse, or inappropriate behavior",
        "• Bugs or exploits being used for unfair advantages",
        "",
        "**Confidentiality**",
        "• All reports are treated confidentially",
        "• We do not disclose the identity of reporters",
        "• You will not face retaliation for reporting violations in good faith",
        "• False or malicious reports may result in penalties",
        "",
        "**Response Time**",
        "• We aim to acknowledge reports within 48 hours",
        "• Investigations may take several days depending on complexity",
        "• We will notify you of the outcome if appropriate",
        "• We cannot always disclose specific actions taken due to privacy concerns"
      ]
    },
    {
      icon: FileText,
      title: "7. Investigation Process",
      color: "text-primary",
      content: [
        "When a potential violation is detected or reported, we follow a structured investigation process:",
        "",
        "**Step 1: Initial Review**",
        "• Our security team reviews the flagged account or reported violation",
        "• We gather relevant data (login history, team selections, IP addresses, etc.)",
        "• We assess the severity and credibility of the suspected violation",
        "",
        "**Step 2: Evidence Collection**",
        "• We collect detailed evidence from our systems and databases",
        "• We analyze user behavior patterns and compare them to known violation signatures",
        "• We may contact the user for additional information or clarification",
        "• We review any evidence provided by reporters",
        "",
        "**Step 3: Analysis & Determination**",
        "• Our team analyzes all collected evidence",
        "• We determine whether a violation occurred and its severity",
        "• We consider the user's history and any mitigating factors",
        "• We decide on appropriate penalties or actions",
        "",
        "**Step 4: Action & Notification**",
        "• We implement the determined penalty (warning, suspension, or termination)",
        "• We notify the user via email of the violation and penalty",
        "• We provide an opportunity for the user to appeal (see Section 8)",
        "• We document the case for future reference",
        "",
        "**Investigation Standards**",
        "• All investigations are conducted fairly and impartially",
        "• We base decisions on evidence, not assumptions",
        "• We respect user privacy while conducting investigations",
        "• We maintain confidentiality throughout the process"
      ]
    },
    {
      icon: Ban,
      title: "8. Penalties & Consequences",
      color: "text-secondary",
      content: [
        "Violations of this Fair Play Policy may result in the following penalties, depending on the severity and frequency of the violation:",
        "",
        "**8.1 Warning**",
        "• Issued for minor or first-time violations",
        "• User is notified via email with details of the violation",
        "• No immediate impact on account status",
        "• Serves as a formal notice to cease the violating behavior",
        "",
        "**8.2 Temporary Suspension**",
        "• Account access is suspended for a specified period (e.g., 7 days, 30 days)",
        "• User cannot participate in contests or access certain features during suspension",
        "• Issued for moderate violations or repeated minor violations",
        "• User is notified of the suspension duration and reason",
        "",
        "**8.3 Permanent Termination**",
        "• Account is permanently closed and cannot be reactivated",
        "• User loses access to all Platform features and data",
        "• Issued for serious violations (e.g., multiple accounts, bots, fraud)",
        "• User is prohibited from creating new accounts",
        "",
        "**8.4 Contest Disqualification**",
        "• User is removed from specific contests where violations occurred",
        "• Rankings and scores are adjusted to reflect disqualification",
        "• Other users' rankings may be recalculated",
        "",
        "**8.5 Legal Action**",
        "• In cases of fraud, hacking, or illegal activity, we may pursue legal action",
        "• We may report violations to law enforcement authorities",
        "• We reserve the right to seek damages for harm caused to the Platform",
        "",
        "**Factors Considered**",
        "• Severity of the violation",
        "• Intent (accidental vs. deliberate)",
        "• User's history and prior violations",
        "• Impact on other users and the Platform",
        "• Cooperation during the investigation"
      ]
    },
    {
      icon: CheckCircle,
      title: "9. Appeals Process",
      color: "text-accent",
      content: [
        "If you believe a penalty was issued in error, you have the right to appeal.",
        "",
        "**How to Appeal**",
        "• Email us at appeals@yangtzesnc.com within 14 days of the penalty notification",
        "• Include your username and the penalty you are appealing",
        "• Provide a detailed explanation of why you believe the penalty was incorrect",
        "• Include any supporting evidence or documentation",
        "",
        "**Appeal Review Process**",
        "• A different team member (not involved in the original investigation) reviews the appeal",
        "• We re-examine the evidence and consider any new information provided",
        "• We aim to respond to appeals within 7 business days",
        "• Our decision on appeals is final",
        "",
        "**Possible Outcomes**",
        "• **Penalty Upheld**: The original penalty remains in effect",
        "• **Penalty Reduced**: The penalty is lessened (e.g., suspension shortened)",
        "• **Penalty Overturned**: The penalty is removed and the account is restored",
        "",
        "**Appeal Limitations**",
        "• You may only appeal once per penalty",
        "• Appeals must be submitted within 14 days of the penalty notification",
        "• Frivolous or abusive appeals may result in additional penalties",
        "• We reserve the right to deny appeals without detailed explanation in certain cases"
      ]
    },
    {
      icon: Users,
      title: "10. Community Responsibility",
      color: "text-primary",
      content: [
        "Fair play is a shared responsibility. Every user plays a role in maintaining a fair and enjoyable environment.",
        "",
        "**Your Responsibilities**",
        "• Compete honestly and ethically",
        "• Follow all Platform rules and policies",
        "• Report suspected violations",
        "• Treat other users with respect",
        "• Set a positive example for the community",
        "",
        "**Our Responsibilities**",
        "• Provide a fair and transparent platform",
        "• Enforce this Fair Play Policy consistently",
        "• Investigate reported violations promptly",
        "• Communicate clearly about rules and expectations",
        "• Continuously improve our detection and enforcement systems",
        "",
        "**Building a Positive Community**",
        "• Fair play creates a better experience for everyone",
        "• Honest competition makes victories more meaningful",
        "• A fair environment attracts more users and enhances the community",
        "• Your actions contribute to the overall integrity of the Platform"
      ]
    },
    {
      icon: Shield,
      title: "11. Platform Integrity Commitment",
      color: "text-secondary",
      content: [
        "YANGTZE SNC is committed to maintaining the highest standards of platform integrity.",
        "",
        "**Our Commitments**",
        "• We will continuously improve our detection and prevention systems",
        "• We will enforce this Fair Play Policy fairly and consistently",
        "• We will be transparent about our rules and enforcement actions",
        "• We will listen to user feedback and adapt our policies as needed",
        "",
        "**Regular Reviews**",
        "• We regularly review and update this Fair Play Policy",
        "• We analyze violation trends to identify new threats",
        "• We test and refine our detection algorithms",
        "• We train our team on best practices for fair play enforcement",
        "",
        "**Zero Tolerance**",
        "• We have zero tolerance for serious violations such as fraud, hacking, or multiple accounts",
        "• We will take swift action against users who threaten platform integrity",
        "• We will not hesitate to terminate accounts or pursue legal action when necessary",
        "",
        "**Continuous Improvement**",
        "• We invest in technology and tools to enhance fair play",
        "• We collaborate with industry experts and other platforms to share best practices",
        "• We welcome user suggestions for improving fair play measures"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Fair Competition</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Fair Play Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to maintaining a fair, transparent, and honest environment where every user competes on equal terms based on skill and knowledge.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            {/* Fair Play Commitment */}
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Our Fair Play Commitment</p>
                    <p className="text-sm text-muted-foreground">
                      At YANGTZE SNC, fair play is non-negotiable. We employ advanced detection systems, conduct thorough investigations, and enforce strict penalties to ensure every user competes honestly. We have zero tolerance for cheating, collusion, or any practice that undermines the integrity of our platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fair Play Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className={`h-5 w-5 ${section.color}`} />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className={`leading-relaxed ${paragraph.startsWith('**') || paragraph.startsWith('•') ? 'text-foreground' : 'text-muted-foreground'} ${paragraph === '' ? 'h-2' : ''}`}>
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Section */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Questions or Concerns About Fair Play?</p>
                    <p className="text-sm text-muted-foreground">
                      If you have questions about this Fair Play Policy or want to report a violation, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Fair Play Reports:</strong> <a href="mailto:fairplay@yangtzesnc.com" className="text-primary hover:underline">fairplay@yangtzesnc.com</a></p>
                      <p><strong>Appeals:</strong> <a href="mailto:appeals@yangtzesnc.com" className="text-primary hover:underline">appeals@yangtzesnc.com</a></p>
                      <p><strong>General Support:</strong> <a href="mailto:support@yangtzesnc.com" className="text-primary hover:underline">support@yangtzesnc.com</a></p>
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
                  By using the YANGTZE SNC platform, you agree to uphold these fair play principles and compete honestly. Violations may result in account suspension, termination, or legal action.
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
