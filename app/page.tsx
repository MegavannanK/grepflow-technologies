import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Products } from "@/components/sections/Products"
import { Services } from "@/components/sections/Services"
import { Reviews } from "@/components/sections/Reviews"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Clients } from "@/components/sections/Clients"
import { CTA } from "@/components/sections/CTA"
import { LoadingScreen } from "@/components/ui/LoadingScreen"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence mode="wait">
        <LoadingScreen key="loading" />
      </AnimatePresence>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Clients />
        <Products />
        <Services />
        <Reviews />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
