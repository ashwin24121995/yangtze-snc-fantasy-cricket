import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  HelpCircle,
  FileText,
  Shield,
  Building2
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactReasons = [
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Questions about gameplay, rules, or platform features",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Account Issues",
      description: "Login problems, password reset, or account verification",
      color: "text-secondary"
    },
    {
      icon: FileText,
      title: "Legal & Compliance",
      description: "Questions about regulations, state restrictions, or policies",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Feedback & Suggestions",
      description: "Share your ideas to help us improve the platform",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            {/* Hero Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">We're Here to Help</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions or need assistance? Our support team is ready to help. Choose your preferred contact method below.
              </p>
            </div>

            {/* Contact Reasons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <Icon className={`h-8 w-8 ${reason.color} mb-2`} />
                      <CardTitle className="text-base">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Send Us a Message</CardTitle>
                      <CardDescription>Fill out the form and we'll respond within 24-48 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {submitSuccess && (
                    <div className="mb-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600">
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm">We've received your message and will respond within 24-48 hours.</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Provide detailed information about your question or issue..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email Contact */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <CardTitle>Email Support</CardTitle>
                        <CardDescription>Direct email for urgent matters</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">General Inquiries</p>
                      <a href="mailto:support@yangtzesnc.com" className="text-primary hover:underline">
                        support@yangtzesnc.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Legal & Compliance</p>
                      <a href="mailto:legal@yangtzesnc.com" className="text-primary hover:underline">
                        legal@yangtzesnc.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Business Partnerships</p>
                      <a href="mailto:business@yangtzesnc.com" className="text-primary hover:underline">
                        business@yangtzesnc.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle>Business Hours</CardTitle>
                        <CardDescription>When you can expect responses</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Monday - Friday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Saturday</span>
                      <span className="text-sm text-muted-foreground">10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Sunday</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <strong>Response Time:</strong> We aim to respond to all inquiries within 24-48 hours during business days. 
                        Messages received on weekends will be addressed on the next business day.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone Support Note */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div className="space-y-2">
                        <p className="text-sm font-semibold">Phone Support</p>
                        <p className="text-sm text-muted-foreground">
                          We currently provide support exclusively through email and our online contact form. 
                          This allows us to maintain detailed records and serve you more efficiently. 
                          Phone support may be added in the future based on user demand.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Our Offices</h2>
                  <p className="text-muted-foreground">Visit us at our physical locations</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Head Office */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>Head Office</CardTitle>
                        <CardDescription>New Delhi, India</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                      <p>37 G-2 579 GALI NO.14</p>
                      <p>SAI ENCLAVE MOHAN GARDEN</p>
                      <p>D. K. Mohan Garden</p>
                      <p>New Delhi, West Delhi - 110059</p>
                      <p>Delhi, India</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm"><strong>Registered Office:</strong> Yes</p>
                      <p className="text-sm"><strong>Walk-in Support:</strong> By appointment only</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Regional Office */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-8 w-8 text-secondary" />
                      <div>
                        <CardTitle>Regional Office</CardTitle>
                        <CardDescription>Bengaluru, India</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">YANGTZE SNC - Bengaluru Branch</p>
                      <p>MSK Plaza, 3rd Main Rd</p>
                      <p>Defence Colony, Indiranagar</p>
                      <p>Bengaluru, Karnataka 560038</p>
                      <p>India</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm"><strong>Branch Office:</strong> Yes</p>
                      <p className="text-sm"><strong>Walk-in Support:</strong> By appointment only</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Company Information */}
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle>Company Information</CardTitle>
                    <CardDescription>Legal and registration details</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Company Name</p>
                      <p className="font-semibold">YANGTZE SNC E-COMMERCE PRIVATE LIMITED</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Corporate Identity Number (CIN)</p>
                      <p className="font-mono">U47912DL2024PTC437115</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date of Incorporation</p>
                      <p>December 2024</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">GST Number</p>
                      <p className="font-mono">07AABCY8991L1ZG</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">PAN Number</p>
                      <p className="font-mono">AABCY8991L</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Company Type</p>
                      <p>Private Limited Company</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Before You Contact Us</CardTitle>
                <CardDescription>You might find your answer faster in these resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a 
                    href="/faq" 
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <HelpCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">FAQ</p>
                      <p className="text-sm text-muted-foreground">55 common questions answered</p>
                    </div>
                  </a>
                  <a 
                    href="/how-to-play" 
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-secondary/50 transition-colors"
                  >
                    <FileText className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="font-semibold">How To Play</p>
                      <p className="text-sm text-muted-foreground">Complete gameplay guide</p>
                    </div>
                  </a>
                  <a 
                    href="/about" 
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <Building2 className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-semibold">About Us</p>
                      <p className="text-sm text-muted-foreground">Company information</p>
                    </div>
                  </a>
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
