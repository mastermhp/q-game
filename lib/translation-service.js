// Translation service with LibreTranslate API and caching
class TranslationService {
  constructor() {
    this.cache = new Map()
    this.apiUrl = "https://libretranslate.de/translate" // Free public instance
    this.fallbackApiUrl = "https://translate.argosopentech.com/translate" // Alternative free instance
  }

  // Get cached translation or fetch new one
  async getTranslation(text, targetLang, sourceLang = "en") {
    const cacheKey = `${text}_${sourceLang}_${targetLang}`

    // Return cached translation if available
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)
    }

    // If target language is English, return original text
    if (targetLang === "en") {
      this.cache.set(cacheKey, text)
      return text
    }

    try {
      const translation = await this.translateWithAPI(text, targetLang, sourceLang)
      this.cache.set(cacheKey, translation)
      return translation
    } catch (error) {
      console.warn(`Translation failed for "${text}":`, error)
      // Return original text as fallback
      return text
    }
  }

  // Translate using LibreTranslate API
  async translateWithAPI(text, targetLang, sourceLang = "en") {
    const payload = {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: "text",
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.translatedText || text
    } catch (error) {
      // Try fallback API
      try {
        const fallbackResponse = await fetch(this.fallbackApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json()
          return fallbackData.translatedText || text
        }
      } catch (fallbackError) {
        console.warn("Fallback translation also failed:", fallbackError)
      }

      throw error
    }
  }

  // Batch translate multiple texts
  async batchTranslate(texts, targetLang, sourceLang = "en") {
    const translations = {}

    for (const key in texts) {
      if (typeof texts[key] === "string") {
        translations[key] = await this.getTranslation(texts[key], targetLang, sourceLang)
      } else if (typeof texts[key] === "object") {
        translations[key] = await this.batchTranslate(texts[key], targetLang, sourceLang)
      }
    }

    return translations
  }

  // Clear cache
  clearCache() {
    this.cache.clear()
  }

  // Get cache size
  getCacheSize() {
    return this.cache.size
  }
}

export const translationService = new TranslationService()
