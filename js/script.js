const buttonSearch = document.querySelector(".button-hotel-search");
const searchForm = document.querySelector(".modal-container");
const buttonFind = document.querySelector(".button-find-hotel");
const arrivalDate = searchForm.querySelector("[name=date-arrival]");
const leavingDate = searchForm.querySelector("[name=date-leaving]");
const adultCount = searchForm.querySelector("[name=adult]");
const childCount = searchForm.querySelector("[name=child]");
const mapImage = document.querySelector(".map-image");
const mapIframe = document.querySelector(".map-iframe");

let isStorageSupport = true;
let adultsStorage = "";
let childrenStorage = "";

try {
  adultsStorage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

try {
  childrenStorage = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

searchForm.classList.add("modal-close");

window.onload = function() {
  mapImage.classList.add("hidden-title");
  mapIframe.classList.remove("hidden-title");
}

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (searchForm.classList.contains("modal-close")) {
    searchForm.classList.remove("modal-close");
    searchForm.classList.remove("error");
    arrivalDate.focus();
  } else {
    searchForm.classList.add("modal-close");
  }
});

buttonFind.addEventListener("click", function (evt) {
  if (!adultCount.value || !childCount.value || !arrivalDate.value || !leavingDate.value) {
    evt.preventDefault();
    searchForm.classList.remove("error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("adult", adultCount.value)
      localStorage.setItem("child", childCount.value)
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!searchForm.classList.contains("modal-close")) {
      evt.preventDefault();
      searchForm.classList.remove("error");
      searchForm.classList.add("modal-close");
    }
  }
});
