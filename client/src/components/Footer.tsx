import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Compliance Badges */}
      <div className="bg-muted/50 py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="/badge_18_plus.png"
              alt="18+ Only"
              className="h-16 w-auto"
            />
            <img
              src="/badge_fair_play.png"
              alt="Fair Play"
              className="h-16 w-auto"
            />
            <img
              src="/badge_responsible_gaming.png"
              alt="Responsible Gaming"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo_icon_only.png"
                alt="YANGTZE SNC"
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-bold text-foreground">YANGTZE SNC</h3>
                <p className="text-xs text-muted-foreground">
                  Learn Fantasy Cricket
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Educational fantasy cricket platform for skill development and
              entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    How To Play
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    FAQ
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/fair-play">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Fair Play Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Responsible Gaming
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Head Office</p>
                <p>37 G-2 579 GALI NO.14</p>
                <p>SAI ENCLAVE MOHAN GARDEN</p>
                <p>New Delhi, West Delhi - 110059</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Regional Office
                </p>
                <p>MSK Plaza, 3rd Main Rd</p>
                <p>Defence Colony, Indiranagar</p>
                <p>Bengaluru, Karnataka 560038</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-destructive/10 border-t border-destructive/20 py-6">
        <div className="container">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-destructive-foreground text-center">
              ⚠️ LEGAL DISCLAIMER
            </p>
            <p className="text-xs text-center text-muted-foreground max-w-4xl mx-auto">
              This platform is NOT available in Andhra Pradesh, Assam, Odisha,
              Telangana, Nagaland, and Sikkim. Only users 18 years and older
              are permitted. This is a skill-based, free-to-play platform with
              no real money involved.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-card border-t border-border py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              © {currentYear} YANGTZE SNC E-COMMERCE PRIVATE LIMITED. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <p>CIN: U47912DL2024PTC437115</p>
              <p>GST: 07AABCY8991L1ZG</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
