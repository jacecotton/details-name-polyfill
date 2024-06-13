(function() {
  if(!("name" in document.createElement("details"))) {
    const details = [...document.querySelectorAll("details")];

    details.forEach((detail) => {
      detail.addEventListener("toggle", () => {
        detail.open && detail.hasAttribute("name") && details
          .filter(_detail => _detail !== detail)
          .filter(_detail => _detail.getAttribute("name") === detail.getAttribute("name"))
          .forEach(_detail => _detail.open = false);
      });
    });
  }
}());
