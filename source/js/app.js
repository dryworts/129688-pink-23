const mainNavClose = document.querySelector(".logo-container__nav-close");
const mainNavOpen = document.querySelector(".logo-container__nav-open");
const mainNavList = document.querySelector(".main-nav__list");
const pageHeaderNavStripe = document.querySelector(".page-header__nav-stripe");


mainNavClose.addEventListener("click", function () {
  mainNavClose.classList.toggle("visually-hidden");
  mainNavOpen.classList.toggle("visually-hidden");
  mainNavList.classList.toggle("main-nav__list--closed");
  pageHeaderNavStripe.classList.toggle("page-header__nav-stripe--closed");
});

mainNavOpen.addEventListener("click", function () {
  mainNavClose.classList.toggle("visually-hidden");
  mainNavOpen.classList.toggle("visually-hidden");
  mainNavList.classList.toggle("main-nav__list--closed");
  pageHeaderNavStripe.classList.toggle("page-header__nav-stripe--closed");
});
