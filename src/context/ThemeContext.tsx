import {createContext, memo, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState} from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'resume-theme';

const ThemeContext = createContext<ThemeContextValue | null>(null);

const prefersDark = (): ThemeMode => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const readStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  return stored === 'dark' || stored === 'light' ? stored : prefersDark();
};

const ThemeProvider = memo(({children}: PropsWithChildren) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => (typeof window === 'undefined' ? 'light' : readStoredTheme()));

  useEffect(() => {
    setThemeState(readStoredTheme());
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // no-op write failure
    }
  }, [theme]);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
});

ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};

export default ThemeProvider;
