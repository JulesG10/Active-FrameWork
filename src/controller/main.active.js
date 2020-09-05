import { ActiveDocument } from "../class/main.active.js";

/**
 * @public
 * @function
 * @name ActiveText
 * @param {Object} obj
 */
export function ActiveText(obj,fonts) {
    let object = {
      tag: "p",
      css: [{ fontFamily: "Arial, sans-serif" }, { color: "#383838" }],
    };
    Object.keys(obj).map((ob) => {
      object[ob] = obj[ob];
    });
    const _active = new ActiveDocument(object);
    let element = null;
    return _active.getElement();
}

export var components = {
  ActiveText:ActiveText,
}

