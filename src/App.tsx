import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


// PAGE
import Page from "./components/Page";

// HEADER
import Header from "./components/Header";
// NAV BAR
import Navigation from "./components/Navigation/Navigation";
// HERO
import Hero from "./components/Hero/Hero";

// MAIN
import Main from "./components/Main";
// STEPS
import Steps from "./components/Steps/Steps";
// SERVICES
import Services from "./components/Services/Services";
// NEWS/BLOG
import News from "./components/News/News";
// EXPLORE MORE
import ExploreMore from "./components/ExploreMore/ExploreMore";
// FREQUENT TRAVELER
import FrequentTraveler from "./components/FrequentTraveler";
// TESTIMONIALS
import Testimonials from "./components/Testimonials/Testimonials";
// FOOTER
import Footer from "./components/Footer";


function App() {
  return (
  <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>
    <Main>
      <Steps />
      <Services />
      <News />
      <ExploreMore />
      <FrequentTraveler />
      <Testimonials />
    </Main>

    <Footer />
  </Page>
  );
}

export default App;
