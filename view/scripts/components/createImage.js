export const createImage = (id, content) => {
  const img = document.createElement("img");
  img.id = id;
  img.classList = "image content__itens";
  img.draggable = true;
  img.src = content;
  return img;
};
