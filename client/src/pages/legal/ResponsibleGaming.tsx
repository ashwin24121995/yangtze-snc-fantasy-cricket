import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Responsible Gaming</h1>
            <p className="text-sm text-muted-foreground">Last Updated: December 19, 2024</p>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Our Philosophy</h2>
                  <p className="text-muted-foreground">
                    YANGTZE SNC promotes responsible gaming by providing a completely free, educational platform with no financial risks. We believe fantasy sports should be about skill development and entertainment, not gambling.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">1. No Financial Risk</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>100% free to play - no entry fees</li>
                    <li>No real money prizes or rewards</li>
                    <li>No in-app purchases or premium features</li>
                    <li>Recognition through leaderboards only</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">2. Age Verification</h2>
                  <p className="text-muted-foreground">
                    We strictly enforce the 18+ age requirement through mandatory date of birth verification during registration. This protects minors from inappropriate content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">3. State Compliance</h2>
                  <p className="text-muted-foreground">
                    We respect regional regulations by blocking access from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana, ensuring full legal compliance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">4. Educational Focus</h2>
                  <p className="text-muted-foreground mb-3">
                    Our platform emphasizes learning and skill development:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Detailed scoring explanations</li>
                    <li>Strategy guides and tips</li>
                    <li>Performance analysis tools</li>
                    <li>Learning from top performers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">5. Healthy Gaming Habits</h2>
                  <p className="text-muted-foreground mb-3">
                    We encourage users to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Play for enjoyment and learning</li>
                    <li>Take regular breaks</li>
                    <li>Balance gaming with other activities</li>
                    <li>Not let fantasy sports interfere with responsibilities</li>
                    <li>Maintain perspective - it's just a game</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">6. Self-Exclusion</h2>
                  <p className="text-muted-foreground">
                    Users can request temporary or permanent account deactivation at any time through their profile settings or by contacting support.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">7. Support Resources</h2>
                  <p className="text-muted-foreground mb-3">
                    If you feel your gaming habits are becoming problematic, please seek help:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Contact our support team for guidance</li>
                    <li>Speak with a mental health professional</li>
                    <li>Reach out to gaming addiction helplines</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">8. Parental Guidance</h2>
                  <p className="text-muted-foreground">
                    While our platform is 18+, we encourage parents to discuss responsible gaming with young adults and monitor their online activities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">9. Skill-Based Platform</h2>
                  <p className="text-muted-foreground">
                    Fantasy cricket on YANGTZE SNC is a game of skill, not chance. Success depends on cricket knowledge, research, and strategic thinking.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">10. Our Commitment</h2>
                  <p className="text-muted-foreground">
                    We continuously review and improve our responsible gaming measures to ensure a safe, educational, and enjoyable experience for all users.
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
