export const getBackgroundColor = (color: string) => {
  switch (color) {
    case "Primary":
      return "primary";
    case "Muted":
      return "muted";
    case "Secondary":
      return "secondary";
    default:
      return "default";
  }
};

export const getGridColumns = (columns: string) => {
  switch (columns) {
    case "2":
      return "lg:grid-cols-2";
    case "4":
      return "lg:grid-cols-4";
    case "3":
    default:
      return "lg:grid-cols-3";
  }
};

export const getHeaderColor = (color: string) => {
  switch (color) {
    case "Default Highlight":
      return "text-gray-700";
    case "Primary Highlight":
      return "text-primary";
    case "Secondary Highlight":
      return "text-blue-500";
    case "White Highlight":
      return "text-white";
    default:
      return "text-gray-900";
  }
};

export const getAspectRatioClass = (aspectRatio: string) => {
  switch (aspectRatio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-[4/3]";
    case "auto":
    default:
      return "aspect-auto";
  }
};

export const getHeightClass = (imageHeight: string) => {
  switch (imageHeight) {
    case "Small":
      return "h-[55vh]";
    case "Medium":
      return "h-[60vh]";
    case "Large":
      return "h-[75vh]";
    case "Full":
      return "h-screen";
    default:
      return "h-[70vh]";
  }
};

export const getOverlayOpacity = (opacity: string) => {
  switch (opacity) {
    case "Light":
      return "bg-black/30";
    case "Dark":
      return "bg-black/70";
    case "Medium":
    default:
      return "bg-black/50";
  }
};

export const getTextPositionClass = (textPosition: string) => {
  switch (textPosition) {
    case "left":
      return "text-left items-start";
    case "right":
      return "text-right items-end";
    case "center":
    default:
      return "text-center items-center";
  }
};

export const getTextColorClass = (textColor: string) => {
  switch (textColor) {
    case "Dark":
      return "text-gray-900";
    case "Light":
      return "text-gray-100";
    case "White":
    default:
      return "text-white";
  }
};

export const getBackgroundColorClass = (backgroundColor: string) => {
  switch (backgroundColor) {
    case "White":
      return "white";
    case "Gradient":
      return "gradient";
    case "Custom":
      return "custom";
    default:
      return "default";
  }
};
