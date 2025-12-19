import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertCircle, Scale, UserCheck, Ban, Copyright, Gavel } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "December 18, 2024";

  const sections = [
    {
      icon: FileText,
      title: "1. Introduction & Acceptance",
      color: "text-primary",
      content: [
        "Welcome to YANGTZE SNC E-COMMERCE PRIVATE LIMITED (\"we,\" \"us,\" \"our,\" or \"YANGTZE SNC\"). These Terms and Conditions (\"Terms\") govern your access to and use of our fantasy cricket platform located at yangtzesnc.com (the \"Platform\").",
        "By accessing, browsing, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you must not use the Platform.",
        "These Terms constitute a legally binding agreement between you (\"User,\" \"you,\" or \"your\") and YANGTZE SNC. We reserve the right to modify these Terms at any time, and your continued use of the Platform after such modifications constitutes your acceptance of the revised Terms."
      ]
    },
    {
      icon: UserCheck,
      title: "2. Eligibility Requirements",
      color: "text-secondary",
      content: [
        "**Age Requirement:** You must be at least 18 years of age to use the Platform. By using the Platform, you represent and warrant that you are 18 years or older. We reserve the right to request proof of age at any time.",
        "**Geographic Restrictions:** The Platform is NOT available to residents of the following Indian states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. By using the Platform, you confirm that you are not a resident of any restricted state.",
        "**Legal Capacity:** You must have the legal capacity to enter into binding contracts under applicable law. If you are using the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
        "**Account Integrity:** You may only create one account per person. Creating multiple accounts or using another person's account is strictly prohibited and may result in immediate termination."
      ]
    },
    {
      icon: Shield,
      title: "3. Account Registration & Security",
      color: "text-accent",
      content: [
        "**Registration Process:** To access certain features of the Platform, you must create an account by providing accurate, current, and complete information including your full name, email address, date of birth, and state of residence.",
        "**Account Security:** You are responsible for maintaining the confidentiality of your account credentials (username and password). You agree to immediately notify us of any unauthorized use of your account or any other security breach.",
        "**Account Responsibility:** You are solely responsible for all activities that occur under your account, whether or not you authorized such activities. We will not be liable for any loss or damage arising from your failure to protect your account credentials.",
        "**Verification:** We reserve the right to verify your identity, age, and location at any time. Failure to provide requested verification documents may result in account suspension or termination.",
        "**Account Termination:** You may terminate your account at any time by contacting us at support@yangtzesnc.com. We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion."
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Platform Nature & Educational Purpose",
      color: "text-primary",
      content: [
        "**Educational Platform:** YANGTZE SNC is an educational fantasy cricket platform designed to help users learn cricket strategy, player analysis, and team management skills. The Platform is NOT a gambling or betting platform.",
        "**No Real Money:** The Platform operates on a completely free model with NO real money transactions, deposits, withdrawals, or prizes. All activities on the Platform are for educational and entertainment purposes only.",
        "**Skill-Based Learning:** Success on the Platform depends on your cricket knowledge, strategic thinking, and analytical skills. The Platform is designed to enhance your understanding of cricket and fantasy sports strategy.",
        "**No Wagering:** Users do not wager money or anything of value on the Platform. There are no cash prizes, monetary rewards, or financial incentives of any kind."
      ]
    },
    {
      icon: FileText,
      title: "5. User Responsibilities & Conduct",
      color: "text-secondary",
      content: [
        "**Accurate Information:** You agree to provide accurate, truthful, and complete information when creating your account and participating in contests. Providing false information may result in account termination.",
        "**Lawful Use:** You agree to use the Platform only for lawful purposes and in accordance with these Terms. You will not use the Platform in any way that violates any applicable federal, state, local, or international law or regulation.",
        "**Respectful Conduct:** You agree to treat other users, our staff, and the Platform with respect. Harassment, abuse, threats, or discriminatory behavior of any kind will not be tolerated.",
        "**Fair Play:** You agree to participate in contests fairly and honestly. Any attempt to manipulate results, exploit bugs, or gain unfair advantages is strictly prohibited.",
        "**Content Standards:** Any content you submit to the Platform (including team names, usernames, or messages) must not be offensive, defamatory, obscene, or otherwise inappropriate."
      ]
    },
    {
      icon: Ban,
      title: "6. Prohibited Activities",
      color: "text-accent",
      content: [
        "You agree NOT to engage in any of the following prohibited activities:",
        "• Creating multiple accounts or sharing accounts with others",
        "• Using automated scripts, bots, or other automated means to access the Platform",
        "• Attempting to gain unauthorized access to any portion of the Platform or any other systems or networks",
        "• Interfering with or disrupting the Platform or servers or networks connected to the Platform",
        "• Reverse engineering, decompiling, or disassembling any part of the Platform",
        "• Copying, modifying, distributing, or creating derivative works based on the Platform",
        "• Using the Platform for any commercial purpose without our express written permission",
        "• Collecting or harvesting any information about other users",
        "• Transmitting any viruses, malware, or other malicious code",
        "• Impersonating any person or entity or falsely stating or misrepresenting your affiliation with any person or entity",
        "• Violating any applicable laws or regulations"
      ]
    },
    {
      icon: Copyright,
      title: "7. Intellectual Property Rights",
      color: "text-primary",
      content: [
        "**Platform Ownership:** The Platform and all content, features, and functionality (including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software) are owned by YANGTZE SNC or its licensors and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.",
        "**Limited License:** We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your personal, non-commercial use, subject to these Terms. This license does not include any right to: (a) resell or commercial use of the Platform; (b) collection and use of any product listings, descriptions, or prices; (c) derivative use of the Platform or its contents; (d) downloading or copying of account information; or (e) use of data mining, robots, or similar data gathering and extraction tools.",
        "**Trademarks:** \"YANGTZE SNC,\" our logo, and all related names, logos, product and service names, designs, and slogans are trademarks of YANGTZE SNC or its affiliates or licensors. You must not use such marks without our prior written permission.",
        "**User Content:** By submitting content to the Platform (such as team names or usernames), you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with operating and promoting the Platform."
      ]
    },
    {
      icon: Scale,
      title: "8. Disclaimers & Limitations of Liability",
      color: "text-secondary",
      content: [
        "**AS-IS Basis:** THE PLATFORM IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.",
        "**No Guarantees:** We do not warrant that the Platform will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Platform or the servers that make it available are free of viruses or other harmful components.",
        "**Third-Party Data:** We rely on third-party cricket data providers for match information and player statistics. We do not guarantee the accuracy, completeness, or timeliness of such data.",
        "**Limitation of Liability:** TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL YANGTZE SNC, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE PLATFORM.",
        "**Maximum Liability:** OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED ₹1,000 (ONE THOUSAND INDIAN RUPEES)."
      ]
    },
    {
      icon: Shield,
      title: "9. Indemnification",
      color: "text-accent",
      content: [
        "You agree to indemnify, defend, and hold harmless YANGTZE SNC, its affiliates, and their respective directors, officers, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:",
        "• Your use of or inability to use the Platform",
        "• Your violation of these Terms",
        "• Your violation of any rights of another person or entity",
        "• Your violation of any applicable laws or regulations",
        "• Any content you submit to the Platform",
        "This indemnification obligation will survive the termination of these Terms and your use of the Platform."
      ]
    },
    {
      icon: AlertCircle,
      title: "10. Termination & Suspension",
      color: "text-primary",
      content: [
        "**Termination by You:** You may terminate your account at any time by contacting us at support@yangtzesnc.com or through your account settings.",
        "**Termination by Us:** We reserve the right to suspend or terminate your account and access to the Platform at any time, with or without notice, for any reason, including but not limited to:",
        "• Violation of these Terms",
        "• Fraudulent, abusive, or illegal activity",
        "• Extended periods of inactivity",
        "• Technical or security reasons",
        "• At our sole discretion for any other reason",
        "**Effect of Termination:** Upon termination, your right to use the Platform will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
        "**No Refunds:** Since the Platform is completely free with no monetary transactions, there are no refunds or compensation upon termination."
      ]
    },
    {
      icon: FileText,
      title: "11. Modifications to Terms",
      color: "text-secondary",
      content: [
        "We reserve the right to modify these Terms at any time at our sole discretion. We will notify you of material changes by posting the updated Terms on the Platform and updating the \"Last Updated\" date at the top of this page.",
        "Your continued use of the Platform after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using the Platform immediately.",
        "We encourage you to review these Terms periodically to stay informed about our terms and conditions."
      ]
    },
    {
      icon: Gavel,
      title: "12. Governing Law & Dispute Resolution",
      color: "text-accent",
      content: [
        "**Governing Law:** These Terms and your use of the Platform shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
        "**Jurisdiction:** Any legal action or proceeding arising out of or related to these Terms or the Platform shall be instituted exclusively in the courts located in New Delhi, India, and you irrevocably submit to the jurisdiction of such courts.",
        "**Dispute Resolution:** Before filing any legal action, you agree to first contact us at legal@yangtzesnc.com to attempt to resolve the dispute informally. We will work in good faith to resolve any disputes.",
        "**Arbitration:** If informal resolution is unsuccessful, any dispute shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration being New Delhi, India.",
        "**Class Action Waiver:** You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action."
      ]
    },
    {
      icon: FileText,
      title: "13. Miscellaneous Provisions",
      color: "text-primary",
      content: [
        "**Entire Agreement:** These Terms, together with our Privacy Policy and any other legal notices published on the Platform, constitute the entire agreement between you and YANGTZE SNC regarding your use of the Platform.",
        "**Severability:** If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
        "**Waiver:** Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.",
        "**Assignment:** You may not assign or transfer these Terms or your rights and obligations under these Terms without our prior written consent. We may assign these Terms without restriction.",
        "**No Third-Party Beneficiaries:** These Terms do not and are not intended to confer any rights or remedies upon any person other than you and YANGTZE SNC.",
        "**Force Majeure:** We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials."
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
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Legal Agreement</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Please read these terms carefully before using the YANGTZE SNC platform. By using our services, you agree to be bound by these terms.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Important Notice</p>
                    <p className="text-sm text-muted-foreground">
                      These Terms and Conditions constitute a legally binding agreement. If you do not agree with any part of these terms, you must not use the Platform. By continuing to use YANGTZE SNC, you acknowledge that you have read, understood, and agreed to be bound by these terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
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
                    <CardContent className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Section */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">Questions About These Terms?</p>
                    <p className="text-sm text-muted-foreground">
                      If you have any questions, concerns, or comments about these Terms and Conditions, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> <a href="mailto:legal@yangtzesnc.com" className="text-primary hover:underline">legal@yangtzesnc.com</a></p>
                      <p><strong>Company:</strong> YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                      <p><strong>Address:</strong> 37 G-2 579 GALI NO.14, SAI ENCLAVE MOHAN GARDEN, New Delhi - 110059, India</p>
                      <p><strong>CIN:</strong> U47912DL2024PTC437115</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance Confirmation */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By clicking "I Accept" during registration or by continuing to use the YANGTZE SNC platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
