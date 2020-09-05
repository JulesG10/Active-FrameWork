/**
 * @name Roboto
 * @function
 * @public
 * @param {HTMLElement} el 
 * @param {String} fonts 
 * @param {Boolean} italic 
 * @returns {HTMLElement}
 */
export function Roboto(el, fonts, italic = false) {
    let font = "Roboto-Black";
    if(italic){
        switch (fonts) {
            case "Roboto":
                font += "-Italic";
                break;
            case "Light":
                font = "Roboto-light-Italic"
                break;
            case "Bold":
                font = "Roboto-Bold-Italic"
                break;
            case "Regular":
                font = "Roboto-Regular-Italic"
                break;
            case "Thin":
                font = "Roboto-Thin-Italic"
                break;
            case "Medium":
                font = "Roboto-Medium-Italic"
                break;
            default:
                font += "-Italic";
                break;
        }
    }else{
        switch (fonts) {
            case "Roboto":
                font += "";
                break;
            case "Light":
                font = "Roboto-light"
                break;
            case "Bold":
                font = "Roboto-Bold"
                break;
            case "Regular":
                font = "Roboto-Regular"
                break;
            case "Thin":
                font = "Roboto-Thin"
                break;
            case "Medium":
                font = "Roboto-Medium"
                break;
            default:
                font += "";
                break;
        }
    }
    let style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
    let importFont = document.createElement('link');
    importFont.href = "./lib/css/css.active.css";
    document.head.appendChild(importFont)
    style.fontFamily = font;
    return el;
}


export function GetCSS(el){
    return window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
}

export var css = {
    ComputedStyle:GetCSS,
    setRoboto:Roboto
}