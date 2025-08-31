import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div> */}
              <span className="bg-[#252836] px-4 py-2 text-[#9D0C0F] font-bold text-[16px] my-text ">
                ESPORTS HUB
              </span>
            </div>
            <p className="text-[#9CA3AF] text-[13px] leading-[20px] mb-4 my-text">
              The ultimate eSports platform for <br /> tournaments, courses, and
              gaming <br />
              community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#9D0C0F] cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#9D0C0F] cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#9D0C0F] cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#9D0C0F] cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-[#9D0C0F] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[14px] leading-[22px] my-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/tournaments"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Affiliate
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#9CA3AF] my-text hover:text-white text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-[14px] leading-[22px] my-text mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="text-[#9CA3AF] my-text flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@esportshub.com
              </li>
              <li className="text-[#9CA3AF] my-text flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (123) 456-7890
              </li>
              <li className="text-[#9CA3AF] my-text flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Gaming Street
                <br />
                Los Angeles, CA 90001
                <br />
                United States
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-[14px] leading-[22px] my-text mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-400 my-text text-sm mb-4">
              Stay updated with the latest tournaments and courses.
            </p>
            <div className="space-x-2">
              <Input
                placeholder="Your email address"
                className="bg-[#1F2937] border-[#374151] text-white placeholder-[#9CA3AF] h-[40px] my-text mb-3"
              />
              <Button className="w-full h-[40px] p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer my-text text-white text-[16px] rounded-[8px]">
                {/* <Button className="bg-red-600 hover:bg-red-700 text-white"> */}
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm my-text">
            © 2025 eSports Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm my-text"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm my-text"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white text-sm my-text"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
