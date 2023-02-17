export const getContentElement = (element) => {
  if (element.tagName === "HR") {
    return null;
  }
  if (element.tagName === "IMG") {
    return element.src;
  }

  return element.textContent;
};
