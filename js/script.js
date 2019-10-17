var popapSearch = document.querySelector(".map-and-search__form-container");
var popapBtn = document.querySelector(".map-and-search__btn");

popapSearch.classList.add("hidden");

popapBtn.addEventListener("click", function () {
  popapSearch.classList.toggle("hidden");
});
