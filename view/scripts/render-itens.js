import { renderElements } from "./components/renderElements.js";
import { StatesEditedElement } from "./components/statesEditElement.js";
import { DataBase } from "./services/db.js";

export const editedElement = new StatesEditedElement();
export const db = new DataBase();
export const renderContent = (data) => {
  data.forEach((item) => {
    renderElements(item);
  });
};
db.getById("1").then((result) => renderContent(result));
