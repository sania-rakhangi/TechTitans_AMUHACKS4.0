import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-8">
        {/* Brand + Social */}
        <div className="flex-1 min-w-[200px] mb-10 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">GaonLearn</h3>
          <p className="mb-4 leading-relaxed">
            Empowering rural education through technology and community
            collaboration.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent-orange transition"
            >
              FB
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent-orange transition"
            >
              TW
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent-orange transition"
            >
              IG
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent-orange transition"
            >
              YT
            </a>
          </div>
        </div>

        {/* Platform Links */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="text-lg font-medium text-accent-yellow mb-3">
            Platform
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/student-dashboard"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Student Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/teacher-portal"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Teacher Portal
              </Link>
            </li>
            <li>
              <Link
                to="/family-learning"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Family Learning
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="text-lg font-medium text-accent-yellow mb-3">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-accent-yellow"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="text-lg font-medium text-accent-yellow mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/accessibility"
                className="text-gray-300 hover:text-accent-yellow"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 py-6 border-t border-white/10 bg-black/20 text-sm">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} GaonLearn. All rights reserved.
        </p>
        <p>Designed with ❤️ for rural education</p>
      </div>
    </footer>
  );
};

export default Footer;
