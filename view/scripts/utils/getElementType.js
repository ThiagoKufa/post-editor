export const checkElementType = (elementTagName) => {
  switch (elementTagName) {
    case "H1":
      return "title";
    case "P":
      return "paragraph";
    case "HR":
      return "line";
    case "IMG":
      return "img";
  }
};
