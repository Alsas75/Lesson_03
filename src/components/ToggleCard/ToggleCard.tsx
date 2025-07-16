import { useState } from "react";
import { cn } from "clsx-for-tailwind";

export const ToggleCard = () => {
  const [isBlue, setIsBlue] = useState(false);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div
        className={cn(
          "h-24 w-48 rounded-xl shadow-lg flex items-center justify-center",
          {
            "bg-blue-400": isBlue,
            "bg-yellow-300": !isBlue,
          }
        )}
      >
        <p className="text-black font-medium">
          {isBlue ? "Blue Card" : "Yellow Card"}
        </p>
      </div>
      <button
        onClick={toggleColor}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors shadow"
      >
        Toggle card color
      </button>
    </div>
  );
};