"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import "./ui-css.css"

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  console.log("HeightTransform: ", heightTransform);
  console.log("OpactiyTransform: ", opacityTransform);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Educational Journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          From school foundations to pursuing B.Tech in Computer Science and Engineering — my educational journey so far.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col sm:px-[3.2rem] md:px-[1rem]
            lg:flex-row lg:px-0
            justify-start pt-10 md:pt-40  relative"
          >
            <div className="flex flex-col md:flex-row md:sticky z-40 items-center md:top-40 self-start max-w-xs lg:max-w-sm md:w-[50%]">
              <div className="md:hidden lg:flex h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center z-50">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-13 xl:pl-20 lg:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div 
            id="Item-card"
            className="relative lg:pl-1 xl:pl-20 2xl:pr-20 w-full ">
              <h3 id="Hides-after-medium-view-port" 
              className="lg:hidden pl-[clamp(3.2rem,10%,4rem)] sm:pl-0 block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="time-blue-line-extra absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
