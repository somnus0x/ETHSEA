import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/libs/next-themes'
import { useMounted } from '@/hooks/useMounted'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PreFooter from '@/components/PreFooter'
import Highlights from '@/components/Highlights'
import Speakers from '@/components/Speaker'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-5">
        <Header />
      </div>
      <Hero />
      <About />
      <Highlights />
      <Speakers />
      <PreFooter />
      <FAQ />
      <Footer />
    </div>
  )
}
