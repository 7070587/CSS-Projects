const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  // Remove border before add border
  removeBorder();
  removeShow();

  // Add border to current tab
  this.classList.add("tab-border");

  // Grab content form DOM
  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder(e) {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow(e) {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
