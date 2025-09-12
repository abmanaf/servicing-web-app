import type { GetInTouchButton } from "@/types";
import { cn } from "@/lib/utils";

interface GetInTouchProps {
  blok: GetInTouchButton;
  className?: string;
}

const GetInTouch = ({ blok, className }: GetInTouchProps) => {
  return (
    <div className={cn("w-full", className)}>
      <a
        href={`mailto:${blok.value}`}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-3 px-6 rounded-lg flex items-center justify-center transition-colors shadow-md hover:shadow-lg font-medium"
      >
        {blok.label}
      </a>
    </div>
  );
};

export default GetInTouch;
