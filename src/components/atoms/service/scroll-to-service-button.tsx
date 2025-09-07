"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ScrollToServiceButtonProps {
  label: string;
}

export default function ScrollToServiceButton({
  label,
}: ScrollToServiceButtonProps) {
  function scrollToService() {
    const section = document.getElementById("services-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        variant="primary"
        className="px-10 py-6 text-lg cursor-pointer"
        onClick={scrollToService}
      >
        {label}
      </Button>
    </motion.div>
  );
}
