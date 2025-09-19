import type { GetInTouchButton } from "@/types";
import { cn } from "@/lib/utils";

interface GetInTouchProps {
  blok: GetInTouchButton;
  className?: string;
}

const GetInTouch = ({ blok, className }: GetInTouchProps) => {
  const isPhoneContact =
    blok.label?.includes("Call") ||
    blok.label?.includes("Jetzt anrufen") ||
    blok.label?.includes("Phone") ||
    blok.label?.includes("Telefon");

  const href = isPhoneContact ? `tel:${blok.value}` : `mailto:${blok.value}`;

  return (
    <div className={cn("w-full", className)}>
      <a
        href={href}
        className={cn(
          "w-full py-3 px-6 rounded-lg flex items-center justify-center transition-colors shadow-md hover:shadow-lg font-medium",
          isPhoneContact
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-primary text-primary-foreground hover:bg-primary/80",
        )}
      >
        {blok.label}
      </a>
    </div>
  );
};

export default GetInTouch;
