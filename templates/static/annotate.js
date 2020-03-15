
var scene = document.getElementById("scene");
var annotations = config.annotations;

function renderAnnontations(nodeId) {
    $(".annotation").remove();
    let local = annotations[nodeId];
    if (local) {
        for (var a = 0; a < local.length; a++) {
            let annotation = document.createElement("a-text");
            annotation.setAttribute("value", local[a].value);
            annotation.setAttribute("color", local[a].color);
            annotation.setAttribute("z-offset", local[a].zoffset)
            annotation.setAttribute("width", local[a].width);
            annotation.setAttribute("height", local[a].height)
            annotation.setAttribute("class", "annotation");
            scene.appendChild(annotation);
            annotation = undefined;
        }
    };
};

