import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-background text-gray-800 dark:text-dark-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-heading">TechCompany</h3>
            <p className="mt-2">
              Modern web ve mobil uygulamalar geliştiriyoruz.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-heading">Linkler</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/hakkimizda" className="hover:text-primary-600 dark:hover:text-orange-accent">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-primary-600 dark:hover:text-orange-accent">Hizmetler</Link></li>
              <li><Link href="/projeler" className="hover:text-primary-600 dark:hover:text-orange-accent">Projeler</Link></li>
              <li><Link href="/blog" className="hover:text-primary-600 dark:hover:text-orange-accent">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-heading">İletişim</h4>
            <ul className="mt-4 space-y-2">
              <li>info@techcompany.com</li>
              <li>+90 212 123 45 67</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} TechCompany. Tüm hakları saklıdır.</p>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            <Link href="#" className="hover:text-primary-600 dark:hover:text-orange-accent">LinkedIn</Link>
            <Link href="#" className="hover:text-primary-600 dark:hover:text-orange-accent">Twitter</Link>
            <Link href="#" className="hover:text-primary-600 dark:hover:text-orange-accent">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}