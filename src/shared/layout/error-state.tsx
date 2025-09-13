import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  message: string;
  icon?: ReactNode;
  buttonText?: string;
  retry?: () => void;
}

const ErrorState = ({
  title,
  message,
  icon,
  buttonText,
  retry,
}: Readonly<EmptyStateProps>) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
      {icon && (
        <div className="mb-4 flex justify-center text-4xl text-gray-400">
          {icon}
        </div>
      )}
      {title && (
        <h1 className="mb-2 mt-3 text-2xl font-bold text-gray-800">{title}</h1>
      )}

      <p className="mb-6 max-w-md text-lg font-medium text-gray-600">
        {message}
      </p>

      {buttonText && retry && (
        <Button
          onClick={retry}
          className="rounded-md bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-700 cursor-pointer"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
export default ErrorState;
