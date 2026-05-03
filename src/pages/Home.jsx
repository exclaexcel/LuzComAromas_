import HeroBanner from '../components/HeroBanner'
import BrandIntro from '../components/BrandIntro'
import CollectionsShowcase from '../components/CollectionsShowcase'
import CareGuide from '../components/CareGuide'
import QuizTeaser from '../components/QuizTeaser'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <BrandIntro />
      <CollectionsShowcase />
      <CareGuide />
      <QuizTeaser />
      <ContactSection />
    </>
  )
}
