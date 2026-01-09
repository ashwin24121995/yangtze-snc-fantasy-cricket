import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/info/About";
import HowToPlay from "./pages/info/HowToPlay";
import FAQ from "./pages/info/FAQ";
import Contact from "./pages/info/Contact";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import FairPlay from "./pages/legal/FairPlay";
import ResponsibleGaming from "./pages/legal/ResponsibleGaming";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import BuildTeam from "./pages/BuildTeam";
import Leaderboard from "./pages/Leaderboard";
import Contests from "./pages/Contests";
import ContestLeaderboard from "./pages/ContestLeaderboard";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/register"} component={Register} />
      <Route path={"/login"} component={Login} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/matches"} component={Matches} />
      <Route path={"/build-team/:matchId"} component={BuildTeam} />
      <Route path={"/leaderboard"} component={Leaderboard} />
      <Route path={"/contests/:matchId"} component={Contests} />
      <Route path={"/contests/:contestId/leaderboard"} component={ContestLeaderboard} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-to-play"} component={HowToPlay} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
