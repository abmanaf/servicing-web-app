import Image from "next/image";
import type { TeamCard as TeamCardType } from "@/types";

interface TeamCardProps {
  blok: TeamCardType;
}

export function TeamCard({ blok }: TeamCardProps) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full h-[50vh] overflow-hidden">
        {blok.image?.filename ? (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || blok.name || "Team member"}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
            <div className="text-4xl font-bold text-blue-600">
              {blok.name?.charAt(0) || "?"}
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1 drop-shadow-md">{blok.name}</h3>
          {blok.role && (
            <p className="text-blue-200 font-medium text-sm drop-shadow-md">
              {blok.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
