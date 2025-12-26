"use client"

import React, { useMemo } from 'react'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel'
import Image from 'next/image'
import clsx from 'clsx'
import { montserrat } from '@/fonts/montserrat'
import { satoshi } from '@/fonts/satoshi'
import { Modal } from '@/components/Modal/Modal'

interface Props {
  title?: string
  intro?: string
  moreText?: string
  images?: string[]
  projectTitle?: string
}

const ProjectShowcaseSection: React.FC<Props> = ({ title = 'Layouts', intro = '', moreText = '', images = [], projectTitle = '' }) => {

  const carouselImages = useMemo(() => images.slice(0, 3), [images])
  const gridImages = useMemo(() => images.slice(3, 6), [images])

  const carouselSlides = carouselImages.map((src, i) => (
    <div key={i} className="w-full h-56 md:h-72 lg:h-80 relative rounded-md overflow-hidden">
      <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
    </div>
  ))

  return (
    <section className="px-6 md:px-24 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6">
          <h3 className={clsx(montserrat.className, 'text-4xl font-medium text-[#3d3834]')}>{title}</h3>
          {intro && <p className={clsx(satoshi.className, 'mt-4 text-lg text-[#3f3f3f]')}>{intro}</p>}
        </div>

        <div className="lg:col-span-6">
          <EmblaCarousel slides={carouselSlides} options={{ loop: true }} fullWidth={true}/>
        </div>

        <div className="lg:col-span-12 mt-20">
          {moreText && <div className={clsx(satoshi.className, 'text-2xl text-[#3f3f3f]')}>{moreText}</div>}

          {gridImages && gridImages.length > 0 && (
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
              {gridImages.map((src, i) => (
                <div key={i} className="relative w-full h-56 md:h-72 lg:h-80 rounded-md overflow-hidden">
                  <Image src={src} alt={`grid-${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcaseSection
