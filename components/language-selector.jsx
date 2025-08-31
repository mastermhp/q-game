"use client"

import { useState } from "react"
import { ChevronDown, Globe, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function LanguageSelector({ className = "" }) {
  const { currentLanguage, changeLanguage, languages } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-[#D1D5DB] cursor-pointer hover:text-[#9D0C0F] transition-colors duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="my-text text-[14px] leading-[20px]">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-[#1F2937] border border-slate-600 rounded-lg shadow-xl z-20 py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="my-text text-[14px] text-[#D1D5DB]">{language.name}</span>
                </div>
                {currentLanguage === language.code && <Check className="w-4 h-4 text-[#9D0C0F]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
