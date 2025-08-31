"use client"

import { useState } from "react"
import { ChevronDown, DollarSign, Check } from "lucide-react"
import { useCurrency } from "@/lib/currency-context"

export default function CurrencySelector({ className = "" }) {
  const { currentCurrency, changeCurrency, currencies } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const currentCurr = currencies.find((curr) => curr.code === currentCurrency)

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-[#D1D5DB] cursor-pointer hover:text-[#9D0C0F] transition-colors duration-200"
      >
        <DollarSign className="w-4 h-4" />
        <span className="my-text text-[14px] leading-[20px]">{currentCurr?.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-56 bg-[#1F2937] border border-slate-600 rounded-lg shadow-xl z-20 py-2 max-h-64 overflow-y-auto">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => {
                  changeCurrency(currency.code)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{currency.flag}</span>
                  <div className="flex flex-col">
                    <span className="my-text text-[14px] text-[#D1D5DB] font-medium">{currency.code}</span>
                    <span className="my-text text-[12px] text-[#9CA3AF]">{currency.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="my-text text-[14px] text-[#9CA3AF]">{currency.symbol}</span>
                  {currentCurrency === currency.code && <Check className="w-4 h-4 text-[#9D0C0F]" />}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
