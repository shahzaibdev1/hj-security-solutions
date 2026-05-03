import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      {/* <!-- 404 Canvas Area --> */}
      <div
        className="relative w-full max-w-[1280px] mx-auto px-8 grid grid-cols-1 gap-xl items-center max-w-2xl text-center"
      >
        {/* Visual Element */}
        {/* Content Element */}
        <div className="order-1 lg:order-2 flex flex-col space-y-md items-center">
          <div className="flex items-center space-x-xs text-primary mb-2 justify-center">
            <span className="material-symbols-outlined" data-icon="error">error</span>
            <span className="font-label-sm uppercase tracking-widest">Error 404</span>
          </div>
          <h1 className="font-display-xl text-on-surface mb-xs">Page Not Found</h1>
          <p className="font-body-lg text-tertiary max-w-2xl mb-lg mx-auto">
            The page you are looking for might have been moved, deleted, or is temporarily unavailable. Rest assured,
            our systems remain fully operational.
          </p>
          <div className="flex flex-col sm:flex-row gap-md items-start justify-center">
            <Link
              className="px-8 py-4 bg-primary text-on-primary font-body-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20"
              href="/"
            >
              Return to Home
            </Link>
          </div>
          <div className="mt-xl pt-lg border-t border-surface-container-highest w-full flex flex-col items-center">
            <span className="font-label-sm text-tertiary mb-md block">QUICK LINKS</span>
            <nav
              className="grid grid-cols-1 sm:grid-cols-2 gap-base max-w-2xl text-center justify-items-center sm:justify-items-start"
            >
              <Link
                className="group flex items-center space-x-2 text-on-surface hover:text-primary transition-colors"
                href="/services"
              >
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                <span className="font-newsreader text-lg">Our Services</span>
              </Link>
              <Link
                className="group flex items-center space-x-2 text-on-surface hover:text-primary transition-colors"
                href="/our-approach"
              >
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                <span className="font-newsreader text-lg">Our Approach</span>
              </Link>
              <Link
                className="group flex items-center space-x-2 text-on-surface hover:text-primary transition-colors"
                href="/about-us"
              >
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                <span className="font-newsreader text-lg">About Us</span>
              </Link>
              <Link
                className="group flex items-center space-x-2 text-on-surface hover:text-primary transition-colors"
                href="/contact-us"
              >
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                <span className="font-newsreader text-lg">Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound