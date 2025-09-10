import type { TestimonialCard as TestimonialCardType } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  blok: TestimonialCardType;
}
const TestimonialCard = ({ blok }: TestimonialCardProps) => {
  const formatFeedback = (feedback: string) => {
    const cleanFeedback = feedback.replace(/\n— .+$/, "").trim();
    return cleanFeedback;
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-700 rounded-2xl p-6 mb-8 max-w-sm w-full">
        <p className="text-gray-200 text-sm leading-relaxed font-light">
          {formatFeedback(blok?.feedback ?? "")}
        </p>

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-gray-700 rotate-45" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        {blok.image ? (
          <Image
            src={blok.image.filename ?? ""}
            alt={blok.image.alt ?? blok.name ?? "Testimonial image"}
            width={100}
            height={100}
            className="w-16 h-16 bg-gray-600 object-cover rounded-full flex items-center justify-center mb-4"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-semibold text-lg">
              {getInitials(blok?.name ?? "")}
            </span>
          </div>
        )}
        <h4 className="text-gray-900 font-medium text-lg mb-1">
          {blok?.name ?? ""}
        </h4>
        <p className="text-gray-500 text-sm font-light">{blok?.role ?? ""}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
