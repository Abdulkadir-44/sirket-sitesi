'use client'

import Link from 'next/link'
import LightRays from '../components/animations/LightRays'
import SplitText from "../components/animations/SplitText"
import CountUp from '../components/animations/CountUp'

// Düzeltilmesi gerekenler,responsive görünümde en iyi görünüm 390px,bunun altında içerik sığmadığı için
//header'a yaklaşıyor content,bunun üstünde ise içerik sığıyor bundan dolayı header'den çok uzaklaşıyor,bunların 
//düzeltilmesi gerekiyor.

export default function HeroSection() {
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden font-newsreader">
        {/* Light Rays Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-900 dark:bg-gray-900 relative">
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1.4}
              lightSpread={2.8}
              rayLength={2.0}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <SplitText
            text="Dijital Geleceğinizi Birlikte İnşa Edelim"
            className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-orange-400 mb-4 font-heading"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          {/* <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-orange-400 mb-4 ">
            Dijital Geleceğinizi Birlikte İnşa Edelim
          </h1> */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8 ">
            Modern teknolojilerle güçlü ve etkili dijital çözümler üretiyoruz. Web
            sitenizi, uygulamanızı veya özel yazılımınızı hayata geçiriyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 ">
            <Link
              href="/projeler"
              className="relative inline-block px-8 py-3 bg-blue-600 dark:bg-orange-500 text-white rounded-lg text-lg font-semibold overflow-hidden transition-all shadow-lg hover:bg-blue-700 dark:hover:bg-orange-600"
            >
              Projelerimizi İncele
            </Link>
            <Link
              href="/iletisim"
              className="relative inline-block px-8 py-3 border border-blue-600 dark:border-orange-400 text-blue-600 dark:text-orange-400 rounded-lg text-lg font-semibold overflow-hidden hover:bg-blue-600 hover:dark:bg-orange-500 hover:text-white transition-all"
            >
              İletişime Geç
            </Link>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300 animate-fadeInUp delay-600">
            <div className="text-center">
              <CountUp
                from={0}
                to={23}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-blue-600 dark:text-orange-400"
              />
              <span className='text-3xl font-bold text-blue-600 dark:text-orange-400'>+</span>
              {/* <p className="">23+</p> */}
              <p className="text-sm">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <CountUp
                from={0}
                to={14}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-blue-600 dark:text-orange-400"
              />
              <span className='text-3xl font-bold text-blue-600 dark:text-orange-400'>+</span>
              {/* <p className="text-3xl font-bold text-blue-600 dark:text-orange-400">10+</p> */}
              <p className="text-sm">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <CountUp
                from={0}
                to={4}
                separator=","
                direction="up"
                duration={0.4}
                className="count-up-text text-3xl font-bold text-blue-600 dark:text-orange-400"
              />
              <span className='text-3xl font-bold text-blue-600 dark:text-orange-400'>+</span>
              {/* <p className="text-3xl font-bold text-blue-600 dark:text-orange-400">4+</p> */}
              <p className="text-sm">Yıllık Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
