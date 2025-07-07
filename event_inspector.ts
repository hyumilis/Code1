namespace EventInspector {

const iframe = document.getElementById("preview") as HTMLIFrameElement;

iframe.addEventListener("click", () => {
    console.log("Iframe clicked. Loading new content...");
    iframe.src = "dice_Rolllllller/dR.html";
});

}