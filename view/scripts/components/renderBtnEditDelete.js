export const renderBtnEditDelete = (onDelete, onSave, onClose) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList = "btnEditContainer";
  if (onDelete) {
    const btnDelete = document.createElement("button");
    btnDelete.className = "btnIcon text-error";
    btnDelete.innerHTML = `
    <span class="material-symbols-outlined">
    delete_forever
    </span>
    `;
    btnDelete.onclick = onDelete;
    btnContainer.appendChild(btnDelete);
  }
  if (onSave) {
    const btnSave = document.createElement("button");
    btnSave.classList = "btnIcon text-sucess";
    btnSave.innerHTML = `
  <span class="material-symbols-outlined">
    edit
  </span>
  `;

    btnSave.onclick = onSave;

    btnContainer.appendChild(btnSave);
  }

  if ((!onSave && onDelete) || (onSave && !onDelete)) {
    const btnClose = document.createElement("button");
    btnClose.classList = "btnIcon";
    btnClose.onclick = onClose;
    btnClose.innerHTML = `
    <span class="material-symbols-outlined">
      close
    </span>
    `;
    btnContainer.appendChild(btnClose);
  }

  return btnContainer;
};
