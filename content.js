window.onload = ()=>{
  if((/https:\/\/scratch.mit.edu\/projects\/\d+\/editor/).test(location.href)){
    let highlighted;
    let previousColor;
    let lasthovered;
    document.addEventListener("mouseover", e => {
      if (e.target.tagName == "path") {
        lasthovered = e.target;
      }
    })
    document.addEventListener("keydown", f => {
      if ((f.shiftKey && f.altKey)) {
        if (previousColor) {
          highlighted.setAttribute("fill", previousColor);
        }
        if (lasthovered) {
          previousColor = lasthovered.getAttribute("fill");
          lasthovered.setAttribute("fill", "#" + Math.floor((parseInt(previousColor.substring(1, 3), 16) + 255) / 2).toString(16).padStart(2, '0') + Math.floor((parseInt(previousColor.substring(3, 5), 16) + 255) / 2).toString(16).padStart(2, '0') + Math.floor((parseInt(previousColor.substring(5), 16) + 255) / 2).toString(16).padStart(2, '0'));
          highlighted = lasthovered;
        }
      }
    })
  }
};