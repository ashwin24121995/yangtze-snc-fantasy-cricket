import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, Cookie, Globe, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "December 18, 2024";

  const sections = [
    {
      icon: Shield,
      title: "1. Introduction & Our Commitment",
      color: "text-primary",
      content: [
        "YANGTZE SNC E-COMMERCE PRIVATE LIMITED (\"we,\" \"us,\" \"our,\" or \"YANGTZE SNC\") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fantasy cricket platform at yangtzesnc.com (the \"Platform\").",
        "We understand that privacy is important to you, and we take our responsibility to protect your personal data seriously. This policy is designed to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.",
        "By using the Platform, you consent to the data practices described in this Privacy Policy. If you do not agree with this policy, please do not use the Platform."
      ]
    },
    {
      icon: Database,
      title: "2. Information We Collect",
      color: "text-secondary",
      content: [
        "**2.1 Personal Information You Provide**",
        "When you create an account, we collect the following information:",
        "• Full Name: To identify you and personalize your experience",
        "• Email Address: For account verification, communication, and password reset",
        "• Date of Birth: To verify you meet our age requirement (18+)",
        "• State of Residence: To ensure compliance with geographic restrictions",
        "• Password: Encrypted and stored securely for account access",
        "",
        "**2.2 Information Automatically Collected**",
        "When you use the Platform, we automatically collect certain information:",
        "• Device Information: Device type, operating system, browser type and version",
        "• Usage Data: Pages visited, time spent on pages, click patterns, features used",
        "• IP Address: For security, fraud prevention, and geographic verification",
        "• Log Data: Access times, error logs, and system activity",
        "• Cookies and Similar Technologies: Session identifiers, preferences, and analytics data",
        "",
        "**2.3 Fantasy Cricket Activity Data**",
        "We collect information about your activities on the Platform:",
        "• Teams Created: Player selections, team compositions, and strategies",
        "• Contest Participation: Matches entered, performance history, rankings",
        "• Leaderboard Data: Scores, rankings, and competitive statistics",
        "• Interaction Data: Comments, feedback, and user-generated content",
        "",
        "**2.4 Information We Do NOT Collect**",
        "We do not collect:",
        "• Financial information (credit cards, bank accounts) - we have no monetary transactions",
        "• Sensitive personal data (religion, caste, sexual orientation) unless voluntarily provided",
        "• Biometric data or health information",
        "• Information from children under 18 years of age"
      ]
    },
    {
      icon: Eye,
      title: "3. How We Use Your Information",
      color: "text-accent",
      content: [
        "We use the information we collect for the following purposes:",
        "",
        "**3.1 Platform Operation & Service Delivery**",
        "• Creating and managing your account",
        "• Providing fantasy cricket contests and features",
        "• Processing your team selections and calculating scores",
        "• Displaying leaderboards and rankings",
        "• Enabling communication between users (if applicable)",
        "",
        "**3.2 Platform Improvement & Analytics**",
        "• Understanding how users interact with the Platform",
        "• Analyzing usage patterns to improve features",
        "• Testing new features and functionality",
        "• Conducting research and analysis",
        "",
        "**3.3 Communication**",
        "• Sending account-related notifications (verification, password reset)",
        "• Providing customer support and responding to inquiries",
        "• Sending important updates about the Platform",
        "• Notifying you about contests, matches, and results (with your consent)",
        "",
        "**3.4 Security & Compliance**",
        "• Verifying your identity, age, and location",
        "• Detecting and preventing fraud, abuse, and security threats",
        "• Enforcing our Terms and Conditions",
        "• Complying with legal obligations and regulations",
        "",
        "**3.5 Personalization**",
        "• Customizing your experience based on your preferences",
        "• Recommending relevant content and features",
        "• Remembering your settings and preferences"
      ]
    },
    {
      icon: Globe,
      title: "4. How We Share Your Information",
      color: "text-primary",
      content: [
        "We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:",
        "",
        "**4.1 Public Information**",
        "• Your username and leaderboard rankings are publicly visible to other users",
        "• Your team compositions may be visible to other participants in the same contest",
        "• Any content you voluntarily post publicly (e.g., comments) will be visible to others",
        "",
        "**4.2 Service Providers**",
        "We may share information with trusted third-party service providers who assist us in operating the Platform:",
        "• Hosting and infrastructure providers (servers, databases)",
        "• Email service providers (for sending notifications)",
        "• Analytics providers (to understand Platform usage)",
        "• Cricket data providers (for match and player information)",
        "These service providers are contractually obligated to protect your information and use it only for the purposes we specify.",
        "",
        "**4.3 Legal Requirements**",
        "We may disclose your information if required by law or in response to:",
        "• Valid legal processes (court orders, subpoenas)",
        "• Government or regulatory requests",
        "• Protection of our rights, property, or safety",
        "• Investigation of fraud or security issues",
        "",
        "**4.4 Business Transfers**",
        "If YANGTZE SNC is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.",
        "",
        "**4.5 With Your Consent**",
        "We may share your information with third parties when you explicitly consent to such sharing."
      ]
    },
    {
      icon: Lock,
      title: "5. Data Security Measures",
      color: "text-secondary",
      content: [
        "We implement industry-standard security measures to protect your personal information:",
        "",
        "**5.1 Technical Safeguards**",
        "• Encryption: All data transmitted between your device and our servers is encrypted using SSL/TLS",
        "• Password Protection: Passwords are hashed and salted using bcrypt encryption",
        "• Secure Servers: Our servers are hosted in secure facilities with restricted access",
        "• Firewalls: Network-level protection against unauthorized access",
        "• Regular Security Audits: Periodic vulnerability assessments and penetration testing",
        "",
        "**5.2 Administrative Safeguards**",
        "• Access Controls: Limited employee access to personal data on a need-to-know basis",
        "• Employee Training: Regular security awareness training for all staff",
        "• Confidentiality Agreements: All employees sign confidentiality agreements",
        "• Incident Response Plan: Procedures for detecting and responding to security breaches",
        "",
        "**5.3 Limitations**",
        "While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you use the Platform at your own risk. You are responsible for maintaining the confidentiality of your account credentials."
      ]
    },
    {
      icon: Database,
      title: "6. Data Retention",
      color: "text-accent",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        "",
        "**6.1 Active Accounts**",
        "• We retain your account information and activity data for as long as your account remains active",
        "• You can request account deletion at any time",
        "",
        "**6.2 Inactive Accounts**",
        "• Accounts inactive for more than 2 years may be automatically deleted",
        "• We will send you a notification before deleting an inactive account",
        "",
        "**6.3 Legal Obligations**",
        "• We may retain certain information for longer periods if required by law",
        "• Information related to legal disputes or investigations will be retained as necessary",
        "",
        "**6.4 Aggregated Data**",
        "• We may retain anonymized, aggregated data indefinitely for analytics and research purposes",
        "• This data cannot be used to identify individual users"
      ]
    },
    {
      icon: UserCheck,
      title: "7. Your Rights & Choices",
      color: "text-primary",
      content: [
        "You have the following rights regarding your personal information:",
        "",
        "**7.1 Access & Portability**",
        "• You have the right to access your personal information",
        "• You can request a copy of your data in a portable format",
        "• Contact us at privacy@yangtzesnc.com to request your data",
        "",
        "**7.2 Correction & Update**",
        "• You can update your account information through your account settings",
        "• Contact us if you need assistance correcting inaccurate information",
        "",
        "**7.3 Deletion**",
        "• You have the right to request deletion of your account and personal information",
        "• We will delete your data within 30 days of your request",
        "• Some information may be retained for legal or legitimate business purposes",
        "• To delete your account, contact us at support@yangtzesnc.com",
        "",
        "**7.4 Opt-Out of Communications**",
        "• You can opt out of promotional emails by clicking \"unsubscribe\" in any email",
        "• You cannot opt out of essential service-related communications",
        "",
        "**7.5 Cookie Management**",
        "• You can control cookies through your browser settings",
        "• Disabling cookies may affect Platform functionality",
        "",
        "**7.6 Complaint**",
        "• If you believe your privacy rights have been violated, you can file a complaint with us at privacy@yangtzesnc.com",
        "• You also have the right to lodge a complaint with the appropriate data protection authority"
      ]
    },
    {
      icon: Cookie,
      title: "8. Cookies & Tracking Technologies",
      color: "text-secondary",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on the Platform.",
        "",
        "**8.1 What Are Cookies?**",
        "Cookies are small text files stored on your device that help us recognize you and remember your preferences.",
        "",
        "**8.2 Types of Cookies We Use**",
        "• Essential Cookies: Required for the Platform to function (e.g., session management, authentication)",
        "• Functional Cookies: Remember your preferences and settings",
        "• Analytics Cookies: Help us understand how users interact with the Platform",
        "• Performance Cookies: Monitor Platform performance and identify issues",
        "",
        "**8.3 Third-Party Cookies**",
        "We may use third-party analytics services (such as Google Analytics) that use cookies to collect usage data. These third parties have their own privacy policies.",
        "",
        "**8.4 Managing Cookies**",
        "You can control and delete cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of the Platform.",
        "",
        "**8.5 Do Not Track**",
        "Some browsers have a \"Do Not Track\" feature. Currently, there is no industry standard for responding to Do Not Track signals, and we do not respond to such signals at this time."
      ]
    },
    {
      icon: Globe,
      title: "9. Third-Party Services & Links",
      color: "text-accent",
      content: [
        "**9.1 Third-Party Services**",
        "The Platform may integrate with third-party services (e.g., cricket data providers, analytics tools). These third parties have their own privacy policies, and we are not responsible for their practices.",
        "",
        "**9.2 External Links**",
        "The Platform may contain links to external websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
        "",
        "**9.3 Social Media**",
        "If we integrate social media features (e.g., sharing buttons), these features may collect information about your interaction with them. Such features are governed by the privacy policies of the respective social media platforms."
      ]
    },
    {
      icon: AlertCircle,
      title: "10. Children's Privacy",
      color: "text-primary",
      content: [
        "The Platform is NOT intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18.",
        "",
        "If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at privacy@yangtzesnc.com. We will take steps to delete such information from our systems.",
        "",
        "If we discover that we have inadvertently collected information from a child under 18, we will delete that information as soon as possible."
      ]
    },
    {
      icon: Globe,
      title: "11. International Data Transfers",
      color: "text-secondary",
      content: [
        "Your information is primarily stored and processed in India. However, some of our service providers may be located in other countries.",
        "",
        "When we transfer your information to other countries, we ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.",
        "",
        "By using the Platform, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws."
      ]
    },
    {
      icon: FileText,
      title: "12. Changes to This Privacy Policy",
      color: "text-accent",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.",
        "",
        "When we make material changes to this Privacy Policy, we will:",
        "• Update the \"Last Updated\" date at the top of this page",
        "• Notify you via email or through a prominent notice on the Platform",
        "• Obtain your consent if required by applicable law",
        "",
        "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
        "",
        "Your continued use of the Platform after the effective date of the revised Privacy Policy constitutes your acceptance of the changes."
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
                <Shield className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Your Privacy Matters</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            {/* Privacy Commitment */}
            <Card className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Our Privacy Commitment</p>
                    <p className="text-sm text-muted-foreground">
                      At YANGTZE SNC, we believe that privacy is a fundamental right. We are committed to being transparent about our data practices and giving you control over your personal information. We do not sell your data to third parties, and we implement industry-standard security measures to protect your information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
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
            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Questions About Your Privacy?</p>
                    <p className="text-sm text-muted-foreground">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Privacy Email:</strong> <a href="mailto:privacy@yangtzesnc.com" className="text-primary hover:underline">privacy@yangtzesnc.com</a></p>
                      <p><strong>General Support:</strong> <a href="mailto:support@yangtzesnc.com" className="text-primary hover:underline">support@yangtzesnc.com</a></p>
                      <p><strong>Company:</strong> YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                      <p><strong>Address:</strong> 37 G-2 579 GALI NO.14, SAI ENCLAVE MOHAN GARDEN, New Delhi - 110059, India</p>
                      <p><strong>CIN:</strong> U47912DL2024PTC437115</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Rights Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-accent" />
                  Your Data Rights at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">✓ Access Your Data</p>
                    <p className="text-xs text-muted-foreground">Request a copy of your personal information</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">✓ Correct Your Data</p>
                    <p className="text-xs text-muted-foreground">Update inaccurate or incomplete information</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">✓ Delete Your Data</p>
                    <p className="text-xs text-muted-foreground">Request deletion of your account and data</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">✓ Control Communications</p>
                    <p className="text-xs text-muted-foreground">Opt out of promotional emails anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consent Notice */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By using the YANGTZE SNC platform, you acknowledge that you have read, understood, and agree to this Privacy Policy and consent to our collection, use, and disclosure of your information as described herein.
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
