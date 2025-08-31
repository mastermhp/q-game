import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, DollarSign, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#111827] border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="logo" />
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Games
            </Link>
            <Link
              href="/tournaments"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Tournaments
            </Link>
            <Link
              href="/courses"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/sponsors"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Sponsors
            </Link>
            <Link
              href="/affiliate"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Affiliate
            </Link>
            <Link
              href="/about"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-[#D1D5DB]">
              <Globe className="w-4 h-4" />
              <span className="my-text text-[14px] leading-[20px]">EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Currency Selector */}
            <div className="flex items-center space-x-1 text-[#D1D5DB]">
              <DollarSign className="w-4 h-4" />
              <span className="my-text text-[14px] leading-[20px]">USD</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Login/Register Button */}
            <Link href="/login">
              <Button className="bg-[#9D0C0F] hover:bg-[#9D0C0F]/30 hover:border-[1px] hover:border-[#9D0C0F] hover:cursor-pointer my-text text-[#ffffff] hover:text-[#D1D5DB] text-[14px] leading-[16px] transition-all duration-700 px-4 py-2 rounded-[4px] flex items-center space-x-2 ml-3">
                <User className="w-3 h-3" />
                <span>Login / Register</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
