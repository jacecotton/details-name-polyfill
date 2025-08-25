(function() {
  if("name" in document.createElement("details")) return;

  const ns = "http://www.w3.org/1999/xhtml";
  
  addEventListener("toggle", (event) => {
    const element = event.target;
    const {localName, namespaceURI} = element;
    
    // Check if the element is really <details>
    if(localName !== "details" || namespaceURI !== ns) {
      return;
    }
    
    if(element.hasAttribute("name") && element.open) {
      // `details` selector will return <details> in any namespace (or no namespace)...
      for(const other of document.querySelectorAll(`details[name="${CSS.escape(element.getAttribute("name"))}"]`)) {
        // ...so we need to check that the other element is really a HTML <details>
        if (other !== element && other.namespaceURI === ns) {
          other.open = false;
        }
      }
    }
  }, true);
}());
