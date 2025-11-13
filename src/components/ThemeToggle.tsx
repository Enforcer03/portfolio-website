import {MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {useTheme} from '../context/ThemeContext';

const ThemeToggle: FC = memo(() => {
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/70 bg-white/70 text-neutral-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-100 dark:focus-visible:ring-offset-neutral-900"
      onClick={toggleTheme}
      type="button">
      <SunIcon
        aria-hidden="true"
        className={classNames(
          'h-5 w-5 transition-all duration-300',
          isDark ? 'scale-75 opacity-0 -rotate-90 absolute' : 'scale-100 opacity-100 rotate-0',
        )}
      />
      <MoonIcon
        aria-hidden="true"
        className={classNames(
          'h-5 w-5 transition-all duration-300',
          isDark ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-90 absolute',
        )}
      />
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';
export default ThemeToggle;
