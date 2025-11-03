import { 
  HeroSection, 
  ViralProductsSection, 
  PsychologySection, 
  UrgencySection,
  TestimonialsSection,
  InstagramSection
} from '@/components/home'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ViralProductsSection />
      <PsychologySection />
      <TestimonialsSection />
      <InstagramSection />
      <UrgencySection />
      <Footer />
    </main>
  )
}