"use client"

import { createContext, useContext, useState, useEffect } from "react"
import enTranslations from "./translations/en.js"
import esTranslations from "./translations/es.js"
import frTranslations from "./translations/fr.js"
import deTranslations from "./translations/de.js"

const I18nContext = createContext()

const translations = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export function I18nProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [currentTranslations, setCurrentTranslations] = useState(translations.en)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage && languages.find((lang) => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
      setCurrentTranslations(translations[savedLanguage])
    }
  }, [])

  useEffect(() => {
    setCurrentTranslations(translations[currentLanguage])
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem("preferred-language", languageCode)
  }

  const t = (key, fallback = key) => {
    if (isLoading) return fallback

    const keys = key.split(".")
    let value = currentTranslations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return fallback
      }
    }

    return typeof value === "string" ? value : fallback
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    languages,
    isLoading,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
