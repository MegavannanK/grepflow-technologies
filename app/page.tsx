import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Products } from "@/components/sections/Products"
import { Services } from "@/components/sections/Services"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
