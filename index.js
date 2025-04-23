(function() {
  if(!("name" in document.createElement("details"))) {
    addEventListener("toggle", event => {
      // check if the element is really a HTML <details>
      if (event.target.localName != "details" || event.target.namespaceURI != "http://www.w3.org/1999/xhtml")
        return;
      const details = event.target;
      if (details.hasAttribute("name") && details.open)
        // `details` selector will return <details> in any namespace (or no namespace)...
        for (const other of document.querySelectorAll(`details[name="${CSS.escape(details.getAttribute("name"))}"]`))
          // ...so we need to check that the other element is really a HTML <details>
          if (other != details && other.namespaceURI == "http://www.w3.org/1999/xhtml")
            other.open = false;
    }, true);
  }
}());
