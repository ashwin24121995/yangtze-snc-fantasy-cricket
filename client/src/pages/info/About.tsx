import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Shield, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">About YANGTZE SNC</h1>
              <p className="text-xl text-muted-foreground">
                Pioneering educational fantasy cricket in India
              </p>
            </div>

            {/* Company Info */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Our Company</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  YANGTZE SNC E-COMMERCE PRIVATE LIMITED is a registered Indian company dedicated to providing educational fantasy sports experiences. We believe in skill development, strategic thinking, and responsible gaming.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Company Name</p>
                    <p className="text-sm text-muted-foreground">YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CIN</p>
                    <p className="text-sm text-muted-foreground">U47912DL2024PTC437115</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">GST Number</p>
                    <p className="text-sm text-muted-foreground">07AABCY8991L1ZG</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Incorporation Date</p>
                    <p className="text-sm text-muted-foreground">26 September 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide a safe, educational platform where cricket enthusiasts can learn fantasy sports strategy without financial risk, fostering skill development and strategic thinking.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become India's most trusted educational fantasy cricket platform, empowering users to master the game through practice and learning in a completely free environment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Our Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Integrity & Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        We strictly adhere to all legal requirements, including age verification and state-specific regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">User-First Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        Every feature is designed with user education and safety as the top priority.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Educational Focus</h3>
                      <p className="text-sm text-muted-foreground">
                        We emphasize learning and skill development over competition and rewards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Responsible Gaming</h3>
                      <p className="text-sm text-muted-foreground">
                        100% free platform with no real money involvement, ensuring responsible participation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Free? */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-border">
              <CardHeader>
                <CardTitle>Why Completely Free?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are backed by investors who believe in fantasy education and want users to learn how to play without any financial pressure. Our platform exists to democratize fantasy cricket knowledge and make it accessible to everyone.
                </p>
                <p className="text-muted-foreground">
                  There are no hidden fees, no premium features, and no monetization of user data. This is purely an educational initiative to help cricket fans understand and enjoy fantasy sports.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Our Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Head Office</h3>
                    <p className="text-sm text-muted-foreground">
                      37 G-2 579 GALI NO.14<br />
                      SAI ENCLAVE MOHAN GARDEN<br />
                      D. K. Mohan Garden<br />
                      New Delhi, West Delhi - 110059<br />
                      Delhi, India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Regional Office</h3>
                    <p className="text-sm text-muted-foreground">
                      MSK Plaza, 3rd Main Rd<br />
                      Defence Colony, Indiranagar<br />
                      Bengaluru, Karnataka 560038<br />
                      India
                    </p>
                  </div>
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
