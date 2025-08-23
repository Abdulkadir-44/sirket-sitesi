import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Hizmetler', href: '/hizmetler' },
      { name: 'Projeler', href: '/projeler' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'İletişim', href: '/iletisim' },
      { name: 'SSS', href: '/sss' },
      { name: 'Destek', href: '/destek' },
      { name: 'Gizlilik', href: '/gizlilik' },
    ],
    social: [
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
    ]
  }

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        )
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.833 2.245 17.815.227 14.183.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              <span className="text-[#64FFDA]">Tech</span>Company
            </div>
            <p className="font-sans text-[#8892B0] mb-6 leading-relaxed">
              Modern web ve mobil uygulamalar geliştiriyoruz. Teknoloji ile işinizi büyütmenize yardımcı oluyoruz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 font-sans text-[#8892B0]">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@techcompany.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 (555) 123 45 67
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-sans text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-sans text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Bizi Takip Edin</h3>
            <p className="font-sans text-[#8892B0] mb-4">
              Son projelerimizden ve teknoloji trendlerinden haberdar olun.
            </p>
            
            {/* Email Subscribe */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-[#112240] border border-[#233554] rounded-l-lg 
                           text-white placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]
                           font-sans"
                />
                <button className="bg-[#64FFDA] text-[#0A192F] px-4 py-2 rounded-r-lg font-sans font-semibold
                                 hover:bg-[#64FFDA]/90 transition-colors duration-200">
                  Abone Ol
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-[#112240] rounded-lg text-[#8892B0] hover:text-[#64FFDA] 
                           hover:bg-[#233554] transition-all duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#233554] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-[#8892B0] text-sm">
              © {currentYear} TechCompany. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/gizlilik" 
                className="font-sans text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors duration-200"
              >
                Gizlilik Politikası
              </Link>
              <Link 
                href="/kullanim" 
                className="font-sans text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors duration-200"
              >
                Kullanım Şartları
              </Link>
              <Link 
                href="/cerezler" 
                className="font-sans text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors duration-200"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}