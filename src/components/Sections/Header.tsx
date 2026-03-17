import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId, siteLinks} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import ThemeToggle from '../ThemeToggle';

export const headerID = 'headerNav';

const pageLinks = [
  {label: 'Home', href: '/', external: false},
  {label: 'Blog', href: siteLinks.blog, external: true},
];

const Header: FC = memo(() => {
  const {pathname} = useRouter();

  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(() => [], []);

  const handleIntersection = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.length ? navSections.map(section => `#${section}`).join(',') : '', handleIntersection);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <>
      <header className="pointer-events-none fixed top-4 z-50 w-full px-4 sm:px-6" id={headerID}>
        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center gap-3 rounded-3xl border border-neutral-200/80 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-neutral-900/80">
          <Link
            className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-200"
            href="/">
            Ved Umrajkar
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-200 md:flex">
            {pageLinks.map(({label, href, external}) =>
              external ? (
                <a
                  className="rounded-full px-3 py-1 transition-colors duration-200 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  href={href}
                  key={href}
                  rel="noopener noreferrer"
                  target="_blank">
                  {label}
                </a>
              ) : (
                <Link
                  className={classNames(
                    'rounded-full px-3 py-1 transition-colors duration-200',
                    pathname === href
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white',
                  )}
                  href={href}
                  key={href}>
                  {label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-400 dark:text-neutral-500 lg:flex">
            {navSections.map(section => (
              <Link
                className={classNames(
                  'rounded-full px-3 py-1 transition-colors duration-200',
                  currentSection === section
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-white',
                )}
                href={`/#${section}`}
                key={section}>
                {section}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 md:ml-2">
            <ThemeToggle />
            <button
              aria-label="Open navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/70 bg-white/80 text-neutral-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-100 dark:focus-visible:ring-offset-neutral-900"
              onClick={toggleOpen}
              type="button">
              <Bars3BottomRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav
        currentPath={pathname}
        currentSection={currentSection}
        isOpen={isOpen}
        navSections={navSections}
        onClose={toggleOpen}
      />
    </>
  );
});

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}> = memo(({navSections, currentSection, isOpen, onClose, currentPath}) => {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="fixed inset-0 z-40 md:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-200 transform"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full">
          <Dialog.Panel className="fixed inset-x-0 bottom-0 rounded-t-3xl border border-neutral-200/80 bg-white/95 p-6 shadow-2xl dark:border-white/10 dark:bg-neutral-900/95">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                Menu
              </p>
              <button
                aria-label="Close navigation"
                className="rounded-full border border-neutral-200/80 p-2 text-neutral-600 transition hover:text-neutral-900 focus:outline-none dark:border-white/10 dark:text-neutral-200"
                onClick={onClose}
                type="button">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
                {pageLinks.map(({label, href, external}) =>
                  external ? (
                    <a
                      className="rounded-2xl border border-transparent bg-neutral-100 px-4 py-3 text-base font-semibold text-neutral-700 transition-colors duration-150 hover:border-neutral-400 dark:bg-neutral-800/80 dark:text-neutral-100"
                      href={href}
                      key={href}
                      onClick={onClose}
                      rel="noopener noreferrer"
                      target="_blank">
                      {label}
                    </a>
                  ) : (
                    <Link
                      className={classNames(
                        'rounded-2xl border px-4 py-3 text-base font-semibold transition-colors duration-150',
                        currentPath === href
                          ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                          : 'border-transparent bg-neutral-100 text-neutral-700 hover:border-neutral-400 dark:bg-neutral-800/80 dark:text-neutral-100',
                      )}
                      href={href}
                      key={href}
                      onClick={onClose}>
                      {label}
                    </Link>
                  ),
                )}
              </nav>
              {navSections.length ? (
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                    On this page
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {navSections.map(section => (
                      <Link
                        className={classNames(
                          'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]',
                          currentSection === section
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                            : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800/70 dark:text-neutral-300',
                        )}
                        href={`/#${section}`}
                        key={section}
                        onClick={onClose}>
                        {section}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="flex">
                <ThemeToggle />
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
});

Header.displayName = 'Header';
MobileNav.displayName = 'MobileNav';
export default Header;
