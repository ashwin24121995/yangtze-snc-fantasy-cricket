import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: December 19, 2024</p>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">We collect the following information:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name and email address</li>
                    <li>Date of birth (for age verification)</li>
                    <li>State/region (for compliance)</li>
                    <li>Phone number (optional)</li>
                    <li>Team selections and gameplay data</li>
                    <li>Device and browser information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To provide and maintain our services</li>
                    <li>To verify age and location compliance</li>
                    <li>To calculate scores and leaderboards</li>
                    <li>To improve user experience</li>
                    <li>To send service-related notifications</li>
                    <li>To prevent fraud and abuse</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
                  <p className="text-muted-foreground mb-3">
                    We do not sell or rent your personal information. We may share data only in these circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers under strict confidentiality agreements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">5. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to maintain sessions, remember preferences, and analyze platform usage. You can control cookie settings through your browser.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access your personal data</li>
                    <li>Request data correction or deletion</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Export your data</li>
                    <li>Lodge complaints with authorities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your data as long as your account is active or as needed to provide services. You may request account deletion at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our platform is not intended for users under 18. We do not knowingly collect data from minors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">9. Changes to Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this policy periodically. We will notify users of significant changes via email or platform notification.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
                  <p className="text-muted-foreground">
                    For privacy-related questions or to exercise your rights, contact us at our registered office address.
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
