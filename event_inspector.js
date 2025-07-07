"use strict";
var EventInspector;
(function (EventInspector) {
    const iframe = document.getElementById("preview");
    iframe.addEventListener("click", () => {
        const dataSrc = iframe.getAttribute("data-src");
        if (dataSrc && !iframe.src) {
            iframe.src = dataSrc;
            console.log("Iframe is now loading:", dataSrc);
        }
    });
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=event_inspector.js.map