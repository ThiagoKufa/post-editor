export const checkType = (type) => {
  switch (type) {
    case "title":
      return "h1";
    case "paragraph":
      return "p";
    case "line":
      return "hr";
    case "img":
      return "img";
  }
};
