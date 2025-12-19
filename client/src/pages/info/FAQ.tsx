import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is YANGTZE SNC really completely free?",
      answer: "Yes! There are no entry fees, no hidden charges, and no premium features. The platform is 100% free forever."
    },
    {
      question: "Do I need to be 18+ to play?",
      answer: "Yes, you must be at least 18 years old to register and play on our platform. We verify age during registration."
    },
    {
      question: "Which states are restricted?",
      answer: "Due to government compliance requirements, our service is not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana."
    },
    {
      question: "Can I win real money?",
      answer: "No. This is an educational platform with no real money involved. Winners are recognized on leaderboards only."
    },
    {
      question: "How do I create a fantasy team?",
      answer: "Select a match, choose 11 players within 100 credits, pick a captain and vice-captain, and submit your team before the match starts."
    },
    {
      question: "Can I edit my team after submitting?",
      answer: "You can edit your team until the match starts. Once the match begins, teams are locked."
    },
    {
      question: "How are points calculated?",
      answer: "Points are awarded based on player performance - runs, wickets, catches, strike rate, economy rate, etc. Check our 'How To Play' page for detailed scoring."
    },
    {
      question: "What happens if a player doesn't play?",
      answer: "If a selected player doesn't participate in the match, they will score 0 points."
    },
    {
      question: "Can I create multiple teams for one match?",
      answer: "Currently, you can create one team per match. This helps maintain the educational focus of the platform."
    },
    {
      question: "How is my data protected?",
      answer: "We follow strict data protection policies. Your personal information is encrypted and never shared with third parties. See our Privacy Policy for details."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">Find answers to common questions</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
