"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CurrencyContext = createContext()

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan", flag: "🇨🇳" },
]

const mockExchangeRates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.0,
  CAD: 1.25,
  AUD: 1.35,
  CHF: 0.92,
  CNY: 6.45,
}

export function CurrencyProvider({ children }) {
  const [currentCurrency, setCurrentCurrency] = useState("USD")
  const [exchangeRates, setExchangeRates] = useState(mockExchangeRates)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferred-currency")
    if (savedCurrency && currencies.find((curr) => curr.code === savedCurrency)) {
      setCurrentCurrency(savedCurrency)
    }
  }, [])

  const changeCurrency = async (currencyCode) => {
    setCurrentCurrency(currencyCode)
    localStorage.setItem("preferred-currency", currencyCode)

    // In production, fetch real exchange rates here
    // await fetchExchangeRates(currencyCode);
  }

  const convertPrice = (usdPrice, targetCurrency = currentCurrency) => {
    if (!usdPrice || typeof usdPrice !== "number") return 0

    const rate = exchangeRates[targetCurrency] || 1
    const convertedPrice = usdPrice * rate

    // Format based on currency
    if (targetCurrency === "JPY" || targetCurrency === "CNY") {
      return Math.round(convertedPrice) // No decimals for yen/yuan
    }

    return Math.round(convertedPrice * 100) / 100 // 2 decimal places
  }

  const formatPrice = (usdPrice, targetCurrency = currentCurrency) => {
    const convertedPrice = convertPrice(usdPrice, targetCurrency)
    const currency = currencies.find((c) => c.code === targetCurrency)

    if (!currency) return `$${convertedPrice}`

    // Format based on currency conventions
    if (targetCurrency === "EUR") {
      return `${convertedPrice}${currency.symbol}`
    } else if (targetCurrency === "JPY" || targetCurrency === "CNY") {
      return `${currency.symbol}${convertedPrice.toLocaleString()}`
    } else {
      return `${currency.symbol}${convertedPrice.toLocaleString()}`
    }
  }

  const value = {
    currentCurrency,
    changeCurrency,
    currencies,
    convertPrice,
    formatPrice,
    isLoading,
    exchangeRates,
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
