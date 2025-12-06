import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: 'dark', // 'dark' | 'light' - default to dark for retro-futuristic feel

      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme);
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(theme);
        }
      },

      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        get().setTheme(newTheme);
      },

      // Initialize theme from system preference or stored value
      initializeTheme: () => {
        if (typeof window === 'undefined') return;

        const stored = localStorage.getItem('theme-storage');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.state?.theme) {
            get().setTheme(parsed.state.theme);
            return;
          }
        }

        // Fall back to system preference, but default to dark
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        get().setTheme(prefersDark ? 'dark' : 'dark'); // Default dark for retro feel
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);





