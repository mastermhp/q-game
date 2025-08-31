"use client"

import { useI18n } from "@/lib/i18n-context"

export default function TranslationStatus() {
  const { isLoading, currentLanguage, getCacheSize, clearTranslationCache } = useI18n()

  if (currentLanguage === "en") return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isLoading && (
        <div className="bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
          <span className="text-sm">Translating...</span>
        </div>
      )}

      {process.env.NODE_ENV === "development" && (
        <div className="mt-2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-xs">
          <div>Language: {currentLanguage}</div>
          <div>Cache: {getCacheSize()} items</div>
          <button
            onClick={clearTranslationCache}
            className="mt-1 bg-red-500 px-2 py-1 rounded text-xs hover:bg-red-600"
          >
            Clear Cache
          </button>
        </div>
      )}
    </div>
  )
}
