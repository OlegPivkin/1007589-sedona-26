"use strict"

var popapSearch = document.querySelector(".search-form");
var popapBtn = document.querySelector(".map-and-search__btn");

function onClickPopapBtn(evt) {
  evt.preventDefault();
  popapSearch.classList.toggle("search-form--opened");
} 

popapBtn.addEventListener("click", onClickPopapBtn);
