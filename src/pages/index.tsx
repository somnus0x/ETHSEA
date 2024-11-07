import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/libs/next-themes'
import { useMounted } from '@/hooks/useMounted'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PreFooter from '@/components/PreFooter'
import TicketInfo from '@/components/TicketInfo'
import Speakers from '@/components/Speaker'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Venue from '@/components/Venue'
import WhatToExpect from '@/components/WhatToExpect'
import ScheduleSection from '@/components/Schedule'

export default function Home() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          'linear-gradient(180deg, #F797C4 0.18%, #1BC5CE 4.71%, #1E22AA 11.18%, #1E22AA 99.97%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="md:px-6 md:pb-14">
        <Header />
      </div>
      <div className="container md:mx-auto">
        <Hero />
        <About />
        <WhatToExpect />
        <Speakers />
        <TicketInfo />
        <ScheduleSection />
        <Venue />
        <FAQ />
        <PreFooter />
        <Footer />
      </div>
    </div>
  )
}
