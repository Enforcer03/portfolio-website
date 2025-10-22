import {ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % portfolioItems.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="relative flex flex-col items-center gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>

        {/* Carousel container */}
        <div className="relative h-96 w-full max-w-5xl">
          {portfolioItems.map((item, index) => {
            const offset = (index - currentIndex + portfolioItems.length) % portfolioItems.length;
            let positionStyle = {};

            // Center item
            if (offset === 0) {
              positionStyle = {
                transform: 'translateX(0) scale(1)',
                opacity: 1,
                zIndex: 30,
              };
            }
            // Item to the right
            else if (offset === 1 || offset === -(portfolioItems.length - 1)) {
              positionStyle = {
                transform: 'translateX(50%) scale(0.8)',
                opacity: 0.5,
                zIndex: 20,
              };
            }
            // Item to the left
            else if (offset === portfolioItems.length - 1 || offset === -1) {
              positionStyle = {
                transform: 'translateX(-50%) scale(0.8)',
                opacity: 0.5,
                zIndex: 20,
              };
            }
            // Hidden items
            else {
              const direction = index > currentIndex ? 1 : -1;
              positionStyle = {
                transform: `translateX(${direction * 100}%) scale(0.6)`,
                opacity: 0,
                zIndex: 10,
              };
            }

            return (
              <div
                className="absolute top-0 left-0 h-full w-full transition-all duration-500 ease-in-out"
                key={`${item.title}-${index}`}
                style={{...positionStyle, left: '50%', marginLeft: '-50%'}}>
                <div className="relative h-full w-full max-w-2xl mx-auto">
                  <Image
                    alt={item.title}
                    className="h-full w-full rounded-lg object-cover shadow-lg shadow-black/30 lg:shadow-xl"
                    placeholder="blur"
                    src={item.image}
                  />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          onClick={prevSlide}>
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          onClick={nextSlide}>
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full rounded-lg bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
