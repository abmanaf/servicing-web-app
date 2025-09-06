import React from "react";

export default function ImageDecorator() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="absolute top-6 right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000" />
    </>
  );
}
