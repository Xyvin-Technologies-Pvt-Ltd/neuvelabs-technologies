import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLanguageStore = create(
  persist(
    (set, get) => ({
      locale: 'en', // 'en' | 'ar'
      isRTL: false,
      
      setLocale: (locale) => {
        const isRTL = locale === 'ar';
        set({ locale, isRTL });
        
        // Apply RTL to document
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('lang', locale);
          document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        }
      },
      
      toggleLocale: () => {
        const newLocale = get().locale === 'en' ? 'ar' : 'en';
        get().setLocale(newLocale);
      },
      
      // Initialize from browser or stored preference
      initializeLocale: () => {
        if (typeof window === 'undefined') return;
        
        const stored = localStorage.getItem('language-storage');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.state?.locale) {
            get().setLocale(parsed.state.locale);
            return;
          }
        }
        
        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'ar') {
          get().setLocale('ar');
        } else {
          get().setLocale('en');
        }
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ locale: state.locale }),
    }
  )
);

