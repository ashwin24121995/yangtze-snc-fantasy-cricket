import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
              <p className="text-xl text-muted-foreground">Get in touch with our team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Head Office</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>37 G-2 579 GALI NO.14</p>
                  <p>SAI ENCLAVE MOHAN GARDEN</p>
                  <p>D. K. Mohan Garden</p>
                  <p>New Delhi, West Delhi - 110059</p>
                  <p>Delhi, India</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle>Regional Office</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>MSK Plaza, 3rd Main Rd</p>
                  <p>Defence Colony, Indiranagar</p>
                  <p>Bengaluru, Karnataka 560038</p>
                  <p>India</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p><strong>Company:</strong> YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U47912DL2024PTC437115</p>
                <p><strong>GST:</strong> 07AABCY8991L1ZG</p>
                <p><strong>PAN:</strong> AABCY8991L</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
