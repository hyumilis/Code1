"use strict";
var EventInspector;
(function (EventInspector) {
    const iframe = document.getElementById("preview");
    iframe.addEventListener("click", () => {
        console.log("Iframe clicked. Loading new content...");
        iframe.src = "dice_Rolllllller/dR.html"; // Change this to the desired URL
    });
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=event_inspector.js.map