import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground">Last Updated: December 19, 2024</p>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using YANGTZE SNC fantasy cricket platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>You must be at least 18 years of age</li>
                    <li>You must not be a resident of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana</li>
                    <li>You must provide accurate registration information</li>
                    <li>You are responsible for maintaining account security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">3. Platform Nature</h2>
                  <p className="text-muted-foreground mb-3">
                    This is a free-to-play, educational fantasy cricket platform:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>No real money is involved</li>
                    <li>No monetary prizes or rewards</li>
                    <li>Purely for entertainment and educational purposes</li>
                    <li>Recognition through leaderboards only</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">4. User Conduct</h2>
                  <p className="text-muted-foreground mb-3">Users must not:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Use the platform for any illegal purposes</li>
                    <li>Create multiple accounts</li>
                    <li>Share account credentials</li>
                    <li>Attempt to manipulate or cheat the system</li>
                    <li>Harass or abuse other users</li>
                    <li>Use automated tools or bots</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, logos, and materials on this platform are owned by YANGTZE SNC E-COMMERCE PRIVATE LIMITED and protected by intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    YANGTZE SNC is not liable for any direct, indirect, incidental, or consequential damages arising from platform use. The service is provided "as is" without warranties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">7. Account Termination</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend or terminate accounts that violate these terms or engage in inappropriate conduct.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We may update these terms at any time. Continued use of the platform constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Delhi.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these terms, contact us at our registered office address.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
