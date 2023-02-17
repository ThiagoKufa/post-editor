import * as element from "./elements.js";
import { renderTitle } from "./renderTitle.js";
import { renderParagraph } from "./renderParagraph.js";
import { renderLine } from "./renderLine.js";
import { renderImage } from "./renderImage.js";

export const renderElements = ({ type, id, content }) => {
  switch (type) {
    case "title":
      element.titleContainer.appendChild(renderTitle(id, content));
      break;
    case "paragraph":
      element.content.appendChild(renderParagraph(id, content));
      break;
    case "line":
      element.content.appendChild(renderLine(id));
      break;
    case "img":
      element.content.appendChild(renderImage(id, content));
      break;
  }
};
