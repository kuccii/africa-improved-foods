import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img src="https://africaimprovedfoods.com/wp-content/uploads/2021/02/favilogo.png" alt="Africa Improved Foods Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-green-600 transition"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-sm font-semibold transition duration-300 px-1 ${
                location.pathname === item.href
                  ? 'text-green-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-green-500'
                  : 'text-gray-800 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-white px-6 py-6 shadow-xl transition-all duration-500 ease-in-out">
          {/* Mobile Top */}
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-green-600">
              Africa Foods
            </Link>
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-red-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-4 py-3 text-base font-semibold transition ${
                  location.pathname === item.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
