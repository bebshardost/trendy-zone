import { 
  HeroSection, 
  ViralProductsSection, 
  PsychologySection, 
  UrgencySection 
} from '@/components/home'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ViralProductsSection />
      <PsychologySection />
      <UrgencySection />
    </main>
  )
}