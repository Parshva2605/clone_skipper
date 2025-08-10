'use client'
import Aiinput from '@/components/homecard/Aiinput'
import Homcard from '@/components/homecard/Homcard'
import SpecialCard from '@/components/homecard/SpecialCard'
import TemplateCard from '@/components/homecard/TemplateCard'
import Theam from '@/components/homecard/Theam'
import HeroContent from '@/components/landing page/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <Homcard />
      <TemplateCard />
      <SpecialCard />
      <Aiinput />
      <Theam />
    </div>
  )
}

export default page