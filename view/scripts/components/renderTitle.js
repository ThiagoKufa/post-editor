import { createTitle } from "./createTitle.js";
import { db, editedElement } from "../render-itens.js";
import { renderBtnEditDelete } from "./renderBtnEditDelete.js";
import { updateContent } from "./updateContents.js";
import { getDataElement } from "../save-after-time.js";

export const renderTitle = (id, content) => {
  if (editedElement.get() !== id) {
    const title = createTitle(id, content);
    title.onclick = () => {
      editedElement.set(id);
      const elementList = getDataElement();
      if (editedElement.get() !== id) {
        db.editById(elementList);
      }
      updateContent();
    };
    return title;
  } else {
    const inputTitleContainer = document.createElement("div");
    const inputTitle = document.createElement("input");
    inputTitle.classList = "inputTitle";
    inputTitle.value = content;
    const onEdit = () => {
      db.editById(id, inputTitle.value);
      editedElement.set("");
      updateContent();
    };

    const onClose = () => {
      editedElement.set("");
      updateContent();
    };
    const btnEditDelete = renderBtnEditDelete(null, onEdit, onClose);
    inputTitleContainer.appendChild(inputTitle);
    inputTitleContainer.appendChild(btnEditDelete);
    return inputTitleContainer;
  }
};
