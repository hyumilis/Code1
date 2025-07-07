namespace EventInspBaector {

const iframe = document.getElementById("preview") as HTMLIFrameElement;

iframe.addEventListener("click", () => {
    const dataSrc = iframe.getAttribute("data-src");
    if (dataSrc && !iframe.src) {
        iframe.src = dataSrc;
        console.log("Iframe is now loading:", dataSrc);
    }
});

}