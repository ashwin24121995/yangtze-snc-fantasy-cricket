import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, UserPlus, Gamepad2, Shield, Settings, Trophy, AlertCircle, Lock } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: UserPlus,
      color: "text-primary",
      faqs: [
        {
          question: "Is YANGTZE SNC really completely free?",
          answer: "Yes, absolutely! YANGTZE SNC is 100% free forever with no hidden costs. There are no entry fees, no subscription charges, no premium features locked behind paywalls, and no in-app purchases. We are backed by investors who believe in educational technology, which allows us to provide this service completely free to all users. You will never be asked for payment information or credit card details."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account takes less than 30 seconds. Click the 'Register' button in the top-right corner of any page. You'll need to provide your full name, email address, a secure password, your date of birth (must be 18+), and your state/region. After submitting, you'll receive a verification email. Click the link in that email to activate your account and start playing immediately."
        },
        {
          question: "Do I need to be 18+ to play?",
          answer: "Yes, you must be at least 18 years old to register and use our platform. This is a strict legal requirement under Indian law. During registration, you will be asked to provide your date of birth, and our system automatically verifies that you meet the minimum age requirement. Users who provide false age information will have their accounts permanently suspended."
        },
        {
          question: "Which states are restricted from using the platform?",
          answer: "Due to state-specific regulations and government compliance requirements, our platform is NOT available to residents of the following six states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. If you reside in any of these states, you will not be able to create an account or access the platform. This restriction is mandatory for legal compliance with Indian laws and cannot be bypassed."
        },
        {
          question: "What if I live in a restricted state but want to play?",
          answer: "Unfortunately, we cannot provide access to users residing in restricted states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana) due to mandatory legal compliance with state-specific regulations. These restrictions are enforced by law, and we have no ability to make exceptions. If you move to a non-restricted state in the future, you will be able to create an account at that time."
        },
        {
          question: "Can I use the platform if I'm traveling to a restricted state?",
          answer: "If you have an existing account and are temporarily traveling to a restricted state, you may experience access limitations due to our compliance systems. Our platform is designed for use by residents of non-restricted states. We recommend waiting until you return to your home state to resume using the platform."
        }
      ]
    },
    {
      title: "Gameplay & Rules",
      icon: Gamepad2,
      color: "text-secondary",
      faqs: [
        {
          question: "How do I create a fantasy cricket team?",
          answer: "Creating a team involves four steps: (1) Navigate to the 'Matches' page and select an upcoming match. (2) Click 'Create Team' to enter the team builder. (3) Select exactly 11 players from both teams combined, staying within your 100-credit budget. Your team must include at least 1 wicket-keeper, 3 batsmen, 1 all-rounder, and 3 bowlers, with a maximum of 7 players from one team. (4) Choose one captain (2x points) and one vice-captain (1.5x points), then submit your team before the match starts."
        },
        {
          question: "What are the team composition rules?",
          answer: "Your team must follow strict composition rules: Exactly 11 players total. Wicket-keepers: minimum 1, maximum 4. Batsmen: minimum 3, maximum 6. All-rounders: minimum 1, maximum 4. Bowlers: minimum 3, maximum 6. Maximum 7 players from one team (minimum 4 from the other team). Total credits must not exceed 100. The system will prevent you from submitting a team that violates any of these rules."
        },
        {
          question: "How does the credit system work?",
          answer: "Every player has a credit value between 8.0 and 12.0 credits, reflecting their expected impact based on recent form, role, and historical performance. Budget players (8.0-9.0 credits) are emerging talents or inconsistent performers. Mid-range players (9.5-10.5 credits) are consistent performers offering good value. Premium players (11.0-12.0 credits) are star players and match-winners. You have a total budget of 100 credits to build your entire 11-player team, so you must balance expensive stars with value picks."
        },
        {
          question: "What do captain and vice-captain do?",
          answer: "The captain and vice-captain are your most important strategic choices because they receive point multipliers. Your captain earns 2x points for all their performance—if they score 50 runs (50 points), you get 100 points. Your vice-captain earns 1.5x points—if they take 3 wickets (75 points), you get 112.5 points. Choose players in excellent current form who are likely to have high-impact performances, not just the most expensive players."
        },
        {
          question: "Can I edit my team after submitting?",
          answer: "Yes, you can edit your team as many times as you want until the match starts. Once the match begins, all teams are permanently locked and no changes can be made. We recommend submitting your team early and then making adjustments as you receive new information about playing conditions, team news, or player availability. Always leave enough time before the match start to avoid last-minute technical issues."
        },
        {
          question: "Can I create multiple teams for one match?",
          answer: "Currently, you can create only one team per match. This limitation helps maintain the educational focus of our platform by encouraging thoughtful, strategic team building rather than hedging bets with multiple teams. It also ensures fair competition where users compete on strategic skill rather than volume of entries."
        },
        {
          question: "What happens if a player I selected doesn't play in the match?",
          answer: "If a player you selected is not included in the playing XI (doesn't participate in the match), they will score 0 points for your team. This is why it's important to check team news and playing XI announcements before the match starts. If you learn that a player won't play, you can edit your team to replace them before the match begins."
        },
        {
          question: "Can I see other users' teams?",
          answer: "No, team selections are private until the match starts. Once the match begins, you can view the teams of top performers on the leaderboard to learn from their strategies. This privacy ensures fair competition and prevents users from simply copying successful teams."
        }
      ]
    },
    {
      title: "Scoring System",
      icon: Trophy,
      color: "text-accent",
      faqs: [
        {
          question: "How are points calculated?",
          answer: "Points are awarded based on actual player performance in live matches. Batting: +1 point per run, +1 bonus for boundaries (4s), +2 bonus for sixes, +8 bonus for half-centuries, +16 bonus for centuries, -2 points for ducks. Bowling: +25 points per wicket, +8 bonus for LBW/Bowled dismissals, +12 points for maiden overs, bonus points for 3/4/5 wicket hauls. Fielding: +8 points per catch, +12 points for stumpings, +6-12 points for run outs. Economy rate and strike rate bonuses also apply in limited-overs formats."
        },
        {
          question: "Do captain and vice-captain points get multiplied for all actions?",
          answer: "Yes, absolutely. The captain receives 2x points for ALL their performance (batting, bowling, fielding), and the vice-captain receives 1.5x points for ALL their performance. For example, if your captain scores 50 runs (50 points), takes 2 wickets (50 points), and takes 1 catch (8 points), their total is 108 points, which becomes 216 points after the 2x multiplier. This is why captain selection is so crucial."
        },
        {
          question: "What are strike rate and economy rate bonuses?",
          answer: "In T20 and ODI formats, batsmen earn bonus points for high strike rates: +2 points for strike rate 170-200, +4 points for 200-250, +6 points for 250+. Bowlers earn bonus points for low economy rates: +6 points for economy below 5, +4 points for economy 5-6, +2 points for economy 6-7. These bonuses reward aggressive batting and economical bowling, which are valuable in limited-overs cricket."
        },
        {
          question: "Do players get points for not getting out?",
          answer: "No, there are no specific 'not out' bonuses in our scoring system. However, batsmen who remain not out typically score more runs (which earn points), and they avoid the -2 point penalty for getting out on a duck. The scoring system focuses on positive contributions rather than rewarding defensive play."
        },
        {
          question: "How quickly are points updated during live matches?",
          answer: "Our system automatically updates player points and team scores every 3 minutes during live matches. This provides near-real-time feedback on your team's performance. After the match ends, final scores are calculated and leaderboard rankings are finalized within minutes."
        }
      ]
    },
    {
      title: "Technical Issues",
      icon: Settings,
      color: "text-primary",
      faqs: [
        {
          question: "I can't log in to my account. What should I do?",
          answer: "If you're having trouble logging in, first verify that you're using the correct email address and password. Passwords are case-sensitive. If you've forgotten your password, click the 'Forgot Password' link on the login page to reset it. If you're still unable to log in, clear your browser cache and cookies, or try a different browser. If problems persist, contact our support team through the Contact page."
        },
        {
          question: "The website is loading slowly or not working. What should I do?",
          answer: "Slow loading can be caused by several factors. First, check your internet connection. Try refreshing the page (Ctrl+R or Cmd+R). Clear your browser cache and cookies. If the issue persists, try a different browser (we support Chrome, Firefox, Safari, and Edge). Make sure your browser is updated to the latest version. If you're still experiencing issues, the problem may be on our end—check back in a few minutes or contact support."
        },
        {
          question: "My team didn't save. What happened?",
          answer: "If your team didn't save, the most common cause is submitting after the match has already started—teams are locked once matches begin. Other causes include internet connection issues during submission or not meeting team composition rules (the system will show error messages if rules are violated). Always submit your team well before the match starts and wait for the confirmation message. If you believe your team should have saved but didn't, contact support immediately."
        },
        {
          question: "Which browsers are supported?",
          answer: "YANGTZE SNC works best on modern browsers including Google Chrome (version 90+), Mozilla Firefox (version 88+), Safari (version 14+), and Microsoft Edge (version 90+). We recommend keeping your browser updated to the latest version for the best experience. Mobile browsers on iOS and Android are also fully supported."
        },
        {
          question: "Can I use the platform on my mobile phone?",
          answer: "Yes! Our platform is fully responsive and works seamlessly on mobile devices. You can access the website through your mobile browser (Chrome, Safari, Firefox, etc.) on both iOS and Android devices. All features including team creation, live score tracking, and leaderboard viewing are available on mobile. We currently do not have a dedicated mobile app, but the mobile web experience is optimized for touch screens and smaller displays."
        },
        {
          question: "Why am I seeing 'Access Denied' or 'Restricted' messages?",
          answer: "If you see access denied messages, the most common reason is that you're trying to access the platform from a restricted state (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana). Our system detects your location and enforces state-specific restrictions for legal compliance. If you believe you're seeing this message in error, contact our support team with details about your location."
        }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      color: "text-secondary",
      faqs: [
        {
          question: "Is fantasy cricket legal in India?",
          answer: "Yes, skill-based fantasy sports are legal in most Indian states under the current legal framework. Fantasy sports are recognized as games of skill (not games of chance) by multiple court rulings. However, some states have specific regulations that restrict or prohibit fantasy sports platforms. YANGTZE SNC complies with all applicable laws and regulations, including mandatory age verification, state-specific restrictions, and data protection requirements."
        },
        {
          question: "Why is the platform not available in certain states?",
          answer: "Six states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana) have specific state laws or regulations that restrict fantasy sports platforms. To ensure full legal compliance, we do not offer our services to residents of these states. These restrictions are based on state-specific legislation and are mandatory for all fantasy sports operators in India."
        },
        {
          question: "Can I win real money or prizes?",
          answer: "No. YANGTZE SNC is a purely educational platform with no real money involvement whatsoever. There are no cash prizes, no monetary rewards, and no financial transactions of any kind. Winners are recognized on leaderboards and receive the satisfaction of strategic success, but no money changes hands. This educational focus is what makes our platform completely free and accessible to everyone."
        },
        {
          question: "Do you verify user age and location?",
          answer: "Yes, we strictly verify both age and location during registration. You must provide your date of birth, and our system automatically verifies that you are at least 18 years old. You must also select your state/region, and our system prevents registration from restricted states. Providing false information during registration is a violation of our Terms of Service and will result in permanent account suspension."
        },
        {
          question: "What data do you collect and why?",
          answer: "We collect only the data necessary to operate the platform and comply with legal requirements: your name, email address, date of birth, state/region, and gameplay data (teams created, scores, rankings). We use this data to provide the service, verify eligibility, improve the platform, and comply with legal obligations. We never sell your data to third parties, never use it for advertising purposes, and protect it with enterprise-grade security measures."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: Trophy,
      color: "text-accent",
      faqs: [
        {
          question: "How do live score updates work?",
          answer: "During live matches, our platform automatically fetches real-time cricket data from Cricket Data API and updates player points every 3 minutes. You'll see a pulsing 'LIVE' indicator on ongoing matches, and your team's total score updates automatically as players perform. You can watch your rank on the leaderboard change in real-time as the match progresses. No manual refresh is needed—everything updates automatically."
        },
        {
          question: "What is the leaderboard and how does it work?",
          answer: "The leaderboard shows the ranking of all users who created teams for a specific match, sorted by total points from highest to lowest. Your rank is determined by your team's total points (including captain and vice-captain multipliers). The leaderboard updates automatically every 3 minutes during live matches. After the match ends, final rankings are locked. You can view leaderboards for any completed match to see how you performed and learn from top-ranked teams."
        },
        {
          question: "Can I see which players are currently playing live?",
          answer: "Yes! During live matches, players who are currently on the field are marked with a special 'LIVE' indicator in the team builder and on your team view. This helps you identify which of your selected players are actively contributing to your score at any given moment. The live indicator updates automatically as players enter and exit the field."
        },
        {
          question: "Do you send notifications about matches?",
          answer: "Currently, we do not send email or push notifications about upcoming matches or live score updates. We recommend checking the Matches page regularly to see upcoming matches and create your teams. You can also bookmark the website and visit during match times to track live scores. We may add notification features in the future based on user feedback."
        },
        {
          question: "Can I view my past teams and performance history?",
          answer: "Yes! Navigate to your profile or the 'My Teams' section to view all teams you've created for past matches. You can see your team composition, captain/vice-captain choices, total points scored, and your rank on the leaderboard for each match. This history helps you analyze your strategic decisions and improve over time."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Lock,
      color: "text-primary",
      faqs: [
        {
          question: "How is my personal data protected?",
          answer: "We take data security extremely seriously. All personal information is encrypted both in transit (using HTTPS/SSL) and at rest (in our database). We use enterprise-grade security measures including secure authentication systems, regular security audits, and strict access controls. Our servers are hosted in secure data centers with multiple layers of protection. We follow industry best practices for data protection and comply with applicable data protection laws."
        },
        {
          question: "Do you sell my data to third parties?",
          answer: "Absolutely not. We never sell, rent, or share your personal information with third parties for marketing or advertising purposes. Your data is used solely to operate the platform, verify eligibility, and improve the service. We do not monetize user data in any way. This commitment is fundamental to our mission as an educational platform."
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you have the right to delete your account and all associated personal data at any time. To request account deletion, contact our support team through the Contact page. We will permanently delete your account and all personal information within 30 days of your request. Note that some anonymized gameplay data may be retained for statistical and analytical purposes, but it will not be linked to your identity."
        },
        {
          question: "How do I change my password?",
          answer: "To change your password, log in to your account and navigate to your profile settings. Click 'Change Password,' enter your current password, then enter and confirm your new password. We recommend using a strong password with at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and special characters. If you've forgotten your current password, use the 'Forgot Password' link on the login page to reset it via email."
        },
        {
          question: "What happens if my account is compromised?",
          answer: "If you suspect unauthorized access to your account, immediately change your password and contact our support team. We will investigate the issue and take appropriate action to secure your account. To prevent unauthorized access, never share your password with anyone, use a unique password for YANGTZE SNC (don't reuse passwords from other sites), and log out when using shared computers."
        }
      ]
    },
    {
      title: "Account Management",
      icon: Settings,
      color: "text-secondary",
      faqs: [
        {
          question: "How do I update my profile information?",
          answer: "Log in to your account and navigate to your profile settings. You can update your display name and other non-critical information. However, certain information like your email address, date of birth, and state/region cannot be changed after registration because they are used for legal verification and compliance. If you need to update these critical fields, contact our support team with appropriate documentation."
        },
        {
          question: "I didn't receive the verification email. What should I do?",
          answer: "First, check your spam/junk folder—verification emails sometimes get filtered incorrectly. If you still don't see it, wait a few minutes as email delivery can be delayed. If you haven't received it after 10 minutes, log in to your account and look for a 'Resend Verification Email' option. If you continue to have issues, contact our support team and we'll manually verify your account."
        },
        {
          question: "Can I have multiple accounts?",
          answer: "No, each user is allowed only one account. Creating multiple accounts violates our Terms of Service and is considered unfair play. Users found operating multiple accounts will have all accounts permanently suspended. Our one-account-per-user policy ensures fair competition and maintains the educational integrity of the platform."
        },
        {
          question: "What if I forget my password?",
          answer: "Click the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link. Click the link in the email (check your spam folder if you don't see it), then create a new password. The reset link expires after 24 hours for security reasons. If you're still having trouble, contact our support team."
        },
        {
          question: "Can I change my registered email address?",
          answer: "Email addresses cannot be changed directly through the platform because your email is used for account verification and security. If you need to change your email address, contact our support team with your current email, the new email you want to use, and a reason for the change. We'll verify your identity and update your email manually."
        }
      ]
    },
    {
      title: "Fair Play & Responsible Gaming",
      icon: Shield,
      color: "text-accent",
      faqs: [
        {
          question: "What is your Fair Play Policy?",
          answer: "Our Fair Play Policy ensures that all users compete on equal terms based on strategic skill. Prohibited activities include: creating multiple accounts, using automated bots or scripts, colluding with other users, exploiting technical vulnerabilities, and providing false information during registration. Violations result in immediate account suspension. We actively monitor for unfair play and investigate reported violations."
        },
        {
          question: "What does 'educational platform' mean?",
          answer: "As an educational platform, our primary goal is to teach strategic thinking, analytical skills, and cricket knowledge—not to facilitate gambling or monetary transactions. We focus on learning outcomes rather than financial rewards. Users compete for leaderboard recognition and the satisfaction of strategic success. This educational focus is what allows us to offer the platform completely free and makes it accessible to anyone who wants to learn fantasy cricket strategy."
        },
        {
          question: "How do you promote responsible gaming?",
          answer: "We promote responsible gaming through several measures: no real money involvement (eliminating financial risk), one team per match (preventing excessive participation), clear disclaimers about the educational nature of the platform, and strict age verification (18+ only). We encourage users to play for fun and learning, not as a substitute for other activities. If you feel you're spending too much time on the platform, we recommend setting personal limits."
        },
        {
          question: "Can I report suspicious activity or unfair play?",
          answer: "Yes, absolutely. If you suspect another user is violating our Fair Play Policy, using multiple accounts, or engaging in any form of cheating, please report it immediately through our Contact page. Provide as much detail as possible including usernames, match information, and a description of the suspicious activity. We take all reports seriously and investigate thoroughly."
        },
        {
          question: "What happens if I violate the Terms of Service?",
          answer: "Violations of our Terms of Service result in penalties ranging from warnings to permanent account suspension, depending on the severity and frequency of violations. Common violations include creating multiple accounts, providing false information, using automated tools, and engaging in unfair play. Serious violations (such as fraud or attempting to exploit the platform) result in immediate permanent suspension with no appeal."
        }
      ]
    },
    {
      title: "Contact & Support",
      icon: HelpCircle,
      color: "text-primary",
      faqs: [
        {
          question: "How do I contact customer support?",
          answer: "You can contact our support team through the Contact page on our website. Fill out the contact form with your name, email, subject, and detailed message describing your issue or question. Our support team typically responds within 24-48 hours during business days. For urgent issues related to account security or legal compliance, mark your message as high priority."
        },
        {
          question: "What information should I include when contacting support?",
          answer: "To help us resolve your issue quickly, please include: your registered email address, a clear description of the problem, any error messages you received, the browser and device you're using, when the issue occurred, and any steps you've already taken to try to resolve it. Screenshots are also helpful if applicable. The more detail you provide, the faster we can help."
        },
        {
          question: "Do you have a phone number for support?",
          answer: "Currently, we provide support exclusively through our online contact form and email. This allows us to maintain detailed records of all support interactions and ensure that our small team can help as many users as possible efficiently. We do not offer phone support at this time."
        },
        {
          question: "How long does it take to get a response from support?",
          answer: "Our support team typically responds to inquiries within 24-48 hours during business days (Monday-Friday). Response times may be longer during weekends and holidays. For urgent issues related to account security or legal matters, we prioritize responses and aim to reply within 24 hours. Please be patient and avoid sending multiple messages about the same issue, as this can delay our response."
        },
        {
          question: "Where can I provide feedback or suggest new features?",
          answer: "We welcome user feedback and feature suggestions! Use the Contact page to send us your ideas, suggestions, or general feedback about the platform. While we can't implement every suggestion, we carefully review all feedback and consider it when planning platform improvements and new features. Your input helps us make YANGTZE SNC better for everyone."
        }
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
                <HelpCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find detailed answers to all your questions about YANGTZE SNC, from getting started to advanced gameplay strategies.
              </p>
            </div>

            {/* Quick Navigation */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {faqCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <a
                        key={index}
                        href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors text-center"
                      >
                        <Icon className={`h-5 w-5 ${category.color}`} />
                        <span className="text-xs font-medium">{category.title}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="space-y-4 scroll-mt-20">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className={`h-10 w-10 rounded-lg bg-${category.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <span className="ml-auto text-sm text-muted-foreground">{category.faqs.length} questions</span>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`item-${categoryIndex}-${faqIndex}`} 
                        className="bg-card border-border rounded-lg px-6 border"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          <span className="flex items-start gap-3">
                            <span className="text-primary mt-1">Q.</span>
                            <span>{faq.question}</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          <div className="flex items-start gap-3">
                            <span className="text-secondary font-bold mt-1">A.</span>
                            <span>{faq.answer}</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}

            {/* Still Have Questions */}
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
              <CardContent className="p-8 text-center space-y-4">
                <AlertCircle className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-2xl font-bold">Still Have Questions?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our support team is here to help. Contact us through the Contact page and we'll respond within 24-48 hours.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
