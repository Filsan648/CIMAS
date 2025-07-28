"use client";;
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function NumberTicker({
  text,
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() =>
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    }), [springValue, decimalPlaces]);
 return (
    (
      <div className="flex flex-col">
     
        <div className="flex flex-row">
        <h1 className=" text-8xl text-amber-700">
        +
        </h1>
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-amber-700 dark:text-white",
        className
      )}
      {...props} /></div>   <h1 className=" text-4xl ml-16 text-black/60 leading-relaxed">
     {text}
      </h1></div>)
  );
}
