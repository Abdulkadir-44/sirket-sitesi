'use client'

import Link from 'next/link'
import LightRays from '../components/animations/LightRays'
import SplitText from "../components/animations/SplitText"
import CountUp from '../components/animations/CountUp'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div>
      <section className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden font-newsreader bg-light-background dark:bg-dark-background">
        {/* Light Rays Background */}
        <div className="absolute inset-0 z-0">
          <LightRays className="custom-rays" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <SplitText
            text="Dijital Geleceğinizi Birlikte İnşa Edelim"
            className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary mb-4 font-heading"
            delay={50}
            duration={0.6}
            ease="easeOut"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <p className="text-lg md:text-xl text-light-text dark:text-dark-text max-w-2xl mb-8 ">
            Modern teknolojilerle güçlü ve etkili dijital çözümler üretiyoruz. Web
            sitenizi, uygulamanızı veya özel yazılımınızı hayata geçiriyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 ">
            <Link
              href="/projeler"
              className="relative inline-block px-8 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-lg text-lg font-semibold overflow-hidden transition-all shadow-lg hover:bg-opacity-90"
            >
              Projelerimizi İncele
            </Link>
            <Link
              href="/iletisim"
              className="relative inline-block px-8 py-3 border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-lg text-lg font-semibold overflow-hidden hover:bg-light-primary hover:dark:bg-dark-primary hover:text-white transition-all"
            >
              İletişime Geç
            </Link>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 text-light-text dark:text-dark-text">
            <div className="text-center">
              <CountUp
                from={0}
                to={23}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-light-primary dark:text-dark-primary"
              />
              <span className='text-3xl font-bold text-light-primary dark:text-dark-primary'>+</span>
              <p className="text-sm">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <CountUp
                from={0}
                to={14}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-light-primary dark:text-dark-primary"
              />
              <span className='text-3xl font-bold text-light-primary dark:text-dark-primary'>+</span>
              <p className="text-sm">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <CountUp
                from={0}
                to={4}
                separator=","
                direction="up"
                duration={0.4}
                className="count-up-text text-3xl font-bold text-light-primary dark:text-dark-primary"
              />
              <span className='text-3xl font-bold text-light-primary dark:text-dark-primary'>+</span>
              <p className="text-sm">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}
