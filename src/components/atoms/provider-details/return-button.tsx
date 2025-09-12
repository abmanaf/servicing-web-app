"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ReturnButtonProps {
  back: string;
  className?: string;
}

export default function ReturnButton({ back, className }: ReturnButtonProps) {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className={cn("text-black cursor-pointer", className)}
      onClick={() => router.back()}
    >
      {back}
    </Button>
  );
}
