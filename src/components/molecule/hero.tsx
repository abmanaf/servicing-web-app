import React from "react";
import { HeroSection } from "@/types";

export default function Hero({ blok }: { blok: HeroSection }) {
  return <div>{blok.servicing}</div>;
}
