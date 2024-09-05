import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/libs/next-themes'
import { useMounted } from '@/hooks/useMounted'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CallToAction from '@/components/CallToAction'
import Highlights from '@/components/Highlights'
import Speakers from '@/components/Speaker'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <CallToAction />
      <Highlights />
      <Speakers />
      <FAQ />
      <Footer />
    </div>
  )
}
