export const createLine = (id) => {
  const line = document.createElement("hr");
  line.draggable = true;
  line.classList = "line content__itens";
  line.id = id;
  return line;
};
