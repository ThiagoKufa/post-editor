import { updateContent } from "./components/updateContents.js";
import { db, editedElement } from "./render-itens.js";
import { getContentElement } from "./utils/getContentElement.js";
import { checkElementType } from "./utils/getElementType.js";

let timer;

const myFunction = () => {
  // reinicia o timer
  clearTimeout(timer);
  timer = setTimeout(savePost, 5000);
};

export const getDataElement = () => {
  const elements = document.querySelectorAll(".content__itens, .title");
  const dataElements = [];
  elements.forEach((element) => {
    if (getContentElement(element)) {
      dataElements.push({
        id: element.id,
        type: checkElementType(element.tagName),
        content: getContentElement(element),
      });
    } else {
      dataElements.push({
        id: element.id,
        type: checkElementType(element.tagName),
      });
    }
  });
  return dataElements;
};

// adiciona event listeners para o mousemove e keydown
document.addEventListener("mousemove", myFunction);
document.addEventListener("keydown", myFunction);

const savePost = () => {
  if (editedElement.get() === "") {
    db.editAll(getDataElement()).then((data) => {
      updateContent();
    });
  }
};
