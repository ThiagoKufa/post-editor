import { updateContent } from "./components/updateContents.js";
import { db, editedElement } from "./render-itens.js";
import { getUID } from "./utils/getUID.js";

const addElementBtn = document.querySelector(".addElementBtn");
const btnLine = document.querySelector(".btnLine");
const btnParagraph = document.querySelector(".btnParagraph");
const btnImg = document.querySelector(".btnImg");

const togleVisible = () => {
  const dropdownMenu = document.querySelector(".dropdownMenu");
  const isVisible = dropdownMenu.style.display === "flex";
  dropdownMenu.style.display = isVisible ? "none" : "flex";
};
const update = () => {
  updateContent();
  togleVisible();
  window.scrollTo(0, document.body.scrollHeight);
};

const addLine = () => {
  db.create({ id: getUID(), type: "line" });
  update();
};
const addParagraph = () => {
  db.create({
    id: getUID(),
    type: "paragraph",
    content: "Clique para editar!",
  });
  update();
};
const addImage = async () => {
  const id = getUID();
  editedElement.set(id);
  db.create({ id, type: "img", content: "digite o url da imagem" });
  update();
};

btnLine.addEventListener("click", addLine);
btnParagraph.addEventListener("click", addParagraph);
btnImg.addEventListener("click", addImage);
addElementBtn.addEventListener("click", togleVisible);
