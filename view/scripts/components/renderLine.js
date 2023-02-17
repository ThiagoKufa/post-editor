import { db, editedElement } from "../render-itens.js";
import { getDataElement } from "../save-after-time.js";
import { createLine } from "./createLine.js";
import { renderBtnEditDelete } from "./renderBtnEditDelete.js";
import { updateContent } from "./updateContents.js";

export const renderLine = (id) => {
  if (editedElement.get() !== id) {
    const line = createLine(id);
    line.onclick = () => {
      editedElement.set(id);

      const elementList = getDataElement();
      if (editedElement.get() !== id) {
        db.editById(elementList);
      }
      updateContent();
    };
    return line;
  } else {
    const inputlineContainer = document.createElement("div");
    const inputline = document.createElement("hr");
    inputline.classList = "inputline";

    const onDelete = () => {
      db.delete(id);
      editedElement.set("");
      updateContent();
    };
    const onClose = () => {
      editedElement.set("");
      updateContent();
    };
    const btnEditDelete = renderBtnEditDelete(onDelete, null, onClose);
    inputlineContainer.appendChild(inputline);
    inputlineContainer.appendChild(btnEditDelete);
    return inputlineContainer;
  }
};
