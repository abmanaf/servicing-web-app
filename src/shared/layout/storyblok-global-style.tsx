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
      return "text-white";
    case "Primary Highlight":
      return "text-primary";
    case "Secondary Highlight":
      return "text-blue-500";
    default:
      return "text-gray-900";
  }
};

export const getHeightClass = (imageHeight: string) => {
  switch (imageHeight) {
    case "Small":
      return "h-[50vh]";
    case "Large":
      return "h-[90vh]";
    case "Full":
      return "h-screen";
    case "Medium":
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
