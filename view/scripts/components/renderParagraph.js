import { db, editedElement } from "../render-itens.js";
import { createParagraph } from "./createParagraph.js";
import { renderBtnEditDelete } from "./renderBtnEditDelete.js";
import { updateContent } from "./updateContents.js";
import { getDataElement } from "../save-after-time.js";

export const renderParagraph = (id, content) => {
  if (editedElement.get() !== id) {
    const paragraph = createParagraph(id, content);
    paragraph.onclick = () => {
      editedElement.set(id);
      const elementList = getDataElement();
      if (editedElement.get() !== id) {
        db.editById(elementList);
      }
      updateContent();
    };
    return paragraph;
  } else {
    const inputParagraphContainer = document.createElement("div");
    const inputParagraph = document.createElement("textarea");
    inputParagraph.classList = "inputParagraph";
    inputParagraph.value = content;
    const onEdit = () => {
      db.editById(id, inputParagraph.value);
      editedElement.set("");
      updateContent();
    };

    const onDelete = () => {
      db.delete(id);
      editedElement.set("");
      updateContent();
    };
    const btnEditDelete = renderBtnEditDelete(onDelete, onEdit);
    inputParagraphContainer.appendChild(inputParagraph);
    inputParagraphContainer.appendChild(btnEditDelete);
    return inputParagraphContainer;
  }
};
