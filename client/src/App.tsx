/**
 * VISUAL SYSTEM: Swiss Industrial Print — paper substrate, carbon-black structure,
 * aviation-red controls, zero radius, and hash routes for static GitHub Pages hosting.
 */
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProjectDetail from "@/pages/ProjectDetail";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

function PortfolioRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router hook={useHashLocation}>
          <PortfolioRouter />
        </Router>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
