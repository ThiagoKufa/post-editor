export const createTitle = (id, content) => {
  const title = document.createElement("h1");
  title.classList = "title";
  title.id = id;
  title.textContent = content;
  return title;
};
