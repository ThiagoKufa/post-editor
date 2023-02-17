import { db, editedElement } from "../render-itens.js";
import { renderBtnEditDelete } from "./renderBtnEditDelete.js";
import { updateContent } from "./updateContents.js";
import { createImage } from "./createImage.js";
import { getDataElement } from "../save-after-time.js";

export const renderImage = (id, content) => {
  if (editedElement.get() !== id) {
    const title = createImage(id, content);

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

    const onDelete = () => {
      db.delete(id);
      editedElement.set("");
      updateContent();
    };
    const btnEditDelete = renderBtnEditDelete(onDelete, onEdit);
    inputTitleContainer.appendChild(inputTitle);
    inputTitleContainer.appendChild(btnEditDelete);
    return inputTitleContainer;
  }
};
