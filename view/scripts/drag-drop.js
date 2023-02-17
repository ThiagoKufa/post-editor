// const itens = document.querySelectorAll(".content__itens");
// const content = document.querySelector(".content");

// document.addEventListener("dragstart", (e) => {
//   e.target.classList.add("dragging");
// });

// document.addEventListener("dragend", (e) => {
//   e.target.classList.remove("dragging");
// });

// content.addEventListener("dragover", (e) => {
//   const dragging = document.querySelector(".dragging");
//   const applyAfter = getNewPosition(content, e.clientY);

//   if (applyAfter) {
//     applyAfter.insertAdjacentElement("afterend", dragging);
//   } else {
//     content.prepend(dragging);
//   }
// });

// function getNewPosition(column, posY) {
//   const cards = column.querySelectorAll(".content__itens:not(.dragging)");
//   let result;

//   for (let refer_card of cards) {
//     const box = refer_card.getBoundingClientRect();
//     const boxCenterY = box.y + box.height / 2;
//     if (posY >= boxCenterY) result = refer_card;
//   }

//   return result;
// }

const itens = document.querySelectorAll(".content__itens");
const content = document.querySelector(".content");

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

document.addEventListener("touchstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("touchend", (e) => {
  e.target.classList.remove("dragging");
});

content.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const applyAfter = getNewPosition(content, e.touches[0].clientY);

  if (applyAfter) {
    applyAfter.insertAdjacentElement("afterend", dragging);
  } else {
    content.prepend(dragging);
  }
});

content.addEventListener("dragover", (e) => {
  const dragging = document.querySelector(".dragging");
  const applyAfter = getNewPosition(content, e.clientY);

  if (applyAfter) {
    applyAfter.insertAdjacentElement("afterend", dragging);
  } else {
    content.prepend(dragging);
  }
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".content__itens:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;
    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}
