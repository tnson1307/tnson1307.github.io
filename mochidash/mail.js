// Opens an email to us on click, without the address ever appearing in the
// page or its source, so spam bots that scrape sites can't pick it up.
document.addEventListener("click", function (event) {
  var link = event.target.closest("[data-mail]");
  if (!link) return;
  event.preventDefault();
  window.location.href = "mai" + "lto:" + ["tnson", "bwaco.vn"].join("@");
});
