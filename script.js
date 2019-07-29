window.onload = function () {
    parallaxEff('#rjj', '.list-eff');
};

/* Параллакс эффект */
function parallaxEff(id, list) {
    var rjj = document.querySelector(id);
    var boxer = rjj.querySelectorAll(list);
    for (var z = 0; z < boxer.length; z++) {
        var boxerCenterX = boxer[z].offsetLeft + (boxer[z].offsetWidth / 2);
        var boxerCenterY = boxer[z].offsetTop + (boxer[z].offsetHeight / 2);
        var fluidboxer = window.matchMedia("(min-width: 1600px)");
    }
    function getMousePos(xRef, yRef) {

        let panelRect = rjj.getBoundingClientRect();
        return {
            x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * rjj.offsetWidth,
            y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * rjj.offsetHeight
        };
    }

    document.body.addEventListener("mousemove", function (e) {
        for (var x = 0; x < boxer.length; x++) {
            let mousePos = getMousePos(e.clientX, e.clientY),
                distX = mousePos.x - boxerCenterX,
                distY = mousePos.y - boxerCenterY;
            if (Math.abs(distX) < 1600 && distY < 990 && fluidboxer.matches) {
                boxer[x].style.transform = "translate(" + (-1 * distX) / 12 + "px," + (-1 * distY) / 12 + "px)";
                rjj.children[0].style.backgroundPosition = `calc(50% + ${distX / 50}px) calc(50% + ${distY / 50}px)`;
            }
        }
    });
}
