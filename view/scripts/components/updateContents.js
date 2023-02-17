import * as element from "./elements.js";
import { db, renderContent } from "../render-itens.js";

export const updateContent = () => {
  element.content.innerHTML = "";
  element.titleContainer.innerHTML = "";
  db.getById("1").then((result) => renderContent(result));
};
