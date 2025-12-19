import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Fair Play Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: December 19, 2024</p>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Our Commitment to Fair Play</h2>
                  <p className="text-muted-foreground">
                    YANGTZE SNC is committed to maintaining a fair, transparent, and enjoyable fantasy cricket environment for all users. This policy outlines our principles and enforcement mechanisms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">1. Equal Opportunity</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>All users have equal access to platform features</li>
                    <li>No premium advantages or paid benefits</li>
                    <li>Same scoring rules apply to everyone</li>
                    <li>Transparent point calculation system</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">2. Prohibited Practices</h2>
                  <p className="text-muted-foreground mb-3">The following actions violate fair play:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Creating multiple accounts</li>
                    <li>Using automated tools or bots</li>
                    <li>Colluding with other users</li>
                    <li>Exploiting system vulnerabilities</li>
                    <li>Sharing insider information</li>
                    <li>Manipulating match data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">3. Transparent Scoring</h2>
                  <p className="text-muted-foreground">
                    All scoring rules are publicly available and applied consistently. Points are calculated automatically based on official match statistics from verified sources.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">4. Data Integrity</h2>
                  <p className="text-muted-foreground">
                    We use official cricket data providers and verify all statistics. Any discrepancies are investigated and corrected promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">5. Reporting Violations</h2>
                  <p className="text-muted-foreground mb-3">
                    Users can report suspected fair play violations through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Contact form on our website</li>
                    <li>Email to our support team</li>
                    <li>In-platform reporting tools</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    All reports are investigated confidentially.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">6. Enforcement Actions</h2>
                  <p className="text-muted-foreground mb-3">
                    Violations may result in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Warning and education</li>
                    <li>Temporary account suspension</li>
                    <li>Permanent account termination</li>
                    <li>Removal from leaderboards</li>
                    <li>Legal action in severe cases</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">7. Appeals Process</h2>
                  <p className="text-muted-foreground">
                    Users may appeal enforcement actions by contacting our support team with relevant evidence. Appeals are reviewed within 7 business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">8. Continuous Monitoring</h2>
                  <p className="text-muted-foreground">
                    We employ automated systems and manual reviews to detect suspicious activity and ensure fair play across the platform.
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
