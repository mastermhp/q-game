"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n-context"
import LanguageSelector from "./language-selector"
import CurrencySelector from "./currency-selector"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111827]/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg"
            : "bg-[#111827] border-b border-slate-700"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                  <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <Link
                href="/"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.home")}
              </Link>
              <Link
                href="/games"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.games")}
              </Link>
              <Link
                href="/tournaments"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.tournaments")}
              </Link>
              <Link
                href="/courses"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.courses")}
              </Link>
              <Link
                href="/sponsors"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.sponsors")}
              </Link>
              <Link
                href="/affiliate"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.affiliate")}
              </Link>
              <Link
                href="/about"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="/contact"
                className="my-text text-[14px] leading-[16px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                {t("navigation.contact")}
              </Link>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>

              <div className="hidden sm:block">
                <CurrencySelector />
              </div>

              <Link href="/login" className="hidden md:block">
                <Button className="bg-[#9D0C0F] hover:bg-[#9D0C0F]/30 hover:border-[1px] hover:border-[#9D0C0F] hover:cursor-pointer my-text text-[#ffffff] hover:text-[#D1D5DB] text-[14px] leading-[16px] transition-all duration-300 px-4 py-2 rounded-[4px] flex items-center space-x-2">
                  <User className="w-3 h-3" />
                  <span>{t("navigation.login")}</span>
                </Button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#111827] border-l border-slate-700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
                </div>
                <span className="my-text text-[#D1D5DB] text-lg font-semibold">{t("navigation.menu")}</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.home")}
              </Link>
              <Link
                href="/games"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.games")}
              </Link>
              <Link
                href="/tournaments"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.tournaments")}
              </Link>
              <Link
                href="/courses"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.courses")}
              </Link>
              <Link
                href="/sponsors"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.sponsors")}
              </Link>
              <Link
                href="/affiliate"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.affiliate")}
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block my-text text-[16px] leading-[20px] text-[#D1D5DB] hover:text-[#9D0C0F] transition-colors duration-200 py-2"
              >
                {t("navigation.contact")}
              </Link>
            </nav>

            <div className="p-6 border-t border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <LanguageSelector />
                <CurrencySelector />
              </div>

              <Link href="/login" onClick={closeMobileMenu}>
                <Button className="w-full bg-[#9D0C0F] hover:bg-[#9D0C0F]/30 hover:border-[1px] hover:border-[#9D0C0F] my-text text-[#ffffff] hover:text-[#D1D5DB] text-[16px] leading-[20px] transition-all duration-300 px-4 py-3 rounded-[4px] flex items-center justify-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{t("navigation.login")}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-20" />
    </>
  )
}
