import { editElement } from "./editElement.js";

export const createElement = (element, item) => {
  const title = document.querySelector(".titleContainer");
  const containerContent = document.querySelector(".content");
  element.id = item.id;
  element.onclick = () => {
    editElement(element, item);
  };
  if (item.type === "img") {
    element.src = `public/${item.content}`;
    element.alt = "Descrição da imagem";
  }
  if (item.type !== "img") {
    if (item.content) {
      element.innerText = item.content;
    }
  }
  if (item.type !== "title") {
    element.draggable = true;
    element.classList = "content__itens";
    containerContent.appendChild(element);
  } else {
    element.classList = "title";
    title.appendChild(element);
  }
};
