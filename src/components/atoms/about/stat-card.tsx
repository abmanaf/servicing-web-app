"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import type { StatCard as StatCardType } from "@/types";

interface StatCardProps {
  blok: StatCardType;
  animate?: boolean;
  delay?: number;
}

export function StatCard({ blok, animate = true, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isNumeric =
    !isNaN(parseFloat(blok?.value ?? "")) &&
    isFinite(parseFloat(blok?.value ?? ""));
  const numericValue = isNumeric ? parseFloat(blok?.value ?? "") : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && animate && isNumeric) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else if (isVisible) {
      setCount(numericValue);
    }
  }, [isVisible, animate, isNumeric, numericValue]);

  return (
    <div
      ref={cardRef}
      className="text-center p-6 lg:p-8 bg-white rounded-2xl shadow hover:shadow transition-all duration-300 transform hover:scale-105 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-3">
        <span className="text-4xl lg:text-5xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
          {blok?.prefix}
          {isNumeric && animate ? Math.floor(count) : blok.value}
          {blok?.suffix}
        </span>
      </div>

      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
        {blok.label}
      </h3>

      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
