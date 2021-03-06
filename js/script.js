  var button = document.querySelector(".hotels-search-table");
  var form = document.querySelector(".search-form");
  var first_date = form.querySelector("[name=date-in]");
  var second_date = form.querySelector("[name=date-out]");
  var adults = form.querySelector("[name=adults-quantity]");
  var children = form.querySelector("[name=children-quantity]");

  var isStorageSupport = true;
  var storage_a_date = "";
  var storage_d_date = "";
  var storage_adults = "";
  var storage_children = "";

  try {
    storage_a_date = localStorage.getItem("date-in");
    storage_d_date = localStorage.getItem("date-out");
    storage_adults = localStorage.getItem("adults");
    storage_children = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

  document.addEventListener("DOMContentLoaded", function() {
    form.classList.remove("form-show");
  });

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");
    form.classList.remove("form-error");

    if (storage_a_date) {
      first_date.value = storage_a_date;
      second_date.focus();
    } else {
      first_date.focus();
    }
    if (storage_d_date) {
      second_date.value = storage_d_date;
      adults.focus();
    } else {
      second_date.focus();
    }
    if (storage_adults) {
      adults.value = storage_adults;
      children.focus();
    } else {
      adults.focus();
    }
    if (storage_children) {
      children.value = storage_children;
    } else {
      children.focus();
    }

    first_date.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!first_date.value || !second_date.value || !adults.value || !children.value) {
      evt.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("date-in", first_date.value);
        localStorage.setItem("date-out", second_date.value);
        localStorage.setItem("adults-quantity", adults.value);
        localStorage.setItem("children-quantity", children.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (form.classList.contains("form-show")) {
        form.classList.toggle("form-show");
        form.classList.remove("form-error");
      }
    }
  });