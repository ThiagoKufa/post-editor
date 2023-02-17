export const createParagraph = (id, content) => {
  const paragraph = document.createElement("p");
  paragraph.id = id;
  paragraph.classList = "paragraph content__itens";
  paragraph.draggable = true;
  paragraph.textContent = content;
  return paragraph;
};
