export const getBackgroundColor = (color: string) => {
  switch (color) {
    case "primary":
      return "muted";
    case "white":
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
