"use client";

import { useEffect, useId, useRef, useState, useCallback, type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useMobileDetection } from "@/hooks/useMobileDetect";

type CardsType = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
}

interface ExpandableCardTypes{
    cards: Array<CardsType>
}

export default function ExpandableCard({
  cards,
}: ExpandableCardTypes) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();
  const isMobile = useMobileDetection();

  const handleOutsideClick = useCallback(() => {
    setActive(null);
  }, []);

  const closeCard = useCallback(() => {
    setActive(null);
  }, []);

  
  const handleCardClick = useCallback((card: CardsType) => {
    if (isMobile) {
      // Add a history entry when opening a card on mobile
      window.history.pushState({ cardOpen: true }, '');
      
      requestAnimationFrame(() => {
        setActive(card);
      });
    } 
    else {
      setActive(card);
    }
  }, [isMobile]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      // If there's an active card and user hits back button, close it
      if (active && typeof active === "object") {
        closeCard();
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [active, closeCard]);

  useEffect(() => {
    if (!active && isMobile) {
      if (window.history.state?.cardOpen) {
        window.history.back();
      }
    }
  }, [active, isMobile]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCard();
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, closeCard]);

  
  useOutsideClick(ref, handleOutsideClick);

  const shadow_class_from_ui = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.3 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout={!isMobile} // Disable layout animation on mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={closeCard}
              whileTap={{ scale: 0.9 }} // Add touch feedback
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={isMobile ? undefined : `card-${active.title}-${id}`} // Disable layoutId on mobile
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              initial={isMobile ? { scale: 0.9, opacity: 0 } : undefined} // Simple scale animation for mobile
              animate={isMobile ? { scale: 1, opacity: 1 } : undefined}
              exit={isMobile ? { scale: 0.9, opacity: 0 } : undefined}
              transition={isMobile ? { duration: 0.2, ease: "easeOut" } : undefined}
              style={isMobile ? { willChange: 'transform, opacity' } : undefined} // GPU acceleration hint
            >
              <motion.div 
                layoutId={isMobile ? undefined : `image-${active.title}-${id}`}
                style={isMobile ? { willChange: 'transform' } : undefined}
              >
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 md:h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  loading={isMobile ? "eager" : "lazy"} // Prioritize loading on mobile
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 gap-4">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      layoutId={isMobile ? undefined : `title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-sm md:text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={isMobile ? undefined : `description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.ctaText && (
                    <motion.a
                      layoutId={isMobile ? undefined : `button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="flex-shrink-0 min-w-[120px] px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm rounded-full font-bold bg-green-500 hover:bg-green-400 text-white text-center"
                      whileTap={{ scale: 0.95 }} // Touch feedback
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout={!isMobile} // Disable layout animation on mobile
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: isMobile ? 0.1 : 0.2 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <ul className="max-w-2xl mx-auto w-full gap-4 flex flex-col py-6">
        {cards.map((card) => (
          <motion.div
            layoutId={isMobile ? undefined : `card-${card.title}-${id}`} // Keep desktop animation
            key={`card-${card.title}-${id}`}
            onClick={() => handleCardClick(card)}
            className={`p-4 flex flex-col md:flex-row justify-between items-center bg-white ${shadow_class_from_ui} hover:bg-blue-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl cursor-pointer hover:text-white`}
            whileTap={isMobile ? { scale: 0.98 } : undefined} // Only add tap animation on mobile
            transition={isMobile ? { duration: 0.1 } : undefined}
            style={isMobile ? { willChange: 'transform' } : undefined}
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={isMobile ? undefined : `image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-60 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={isMobile ? undefined : `title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={isMobile ? undefined : `description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {card.ctaText && (
              <motion.button
                layoutId={isMobile ? undefined : `button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            )}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-white bg-red-700 rounded-full p-1 hover:cursor-pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
