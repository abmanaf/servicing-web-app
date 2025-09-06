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
    case "Two":
      return "lg:grid-cols-2";
    case "Four":
      return "lg:grid-cols-4";
    case "Three":
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
