import { ActiveDocument } from "../class/main.active.js";


/**
 * @public 
 * @function
 * @name Active
 * @param {Object} object
 * @returns {HTMLElement}
 * @example
 *  let object
 * {
 * tag: null,
 * id: null,
 * className: null,
 * html: [],
 * shadow: [],
 * attributes: [],
 * event: [],
 * css: [],
 * stylesheet: null,
 * text: null,
 * }
 * */

export function getActiveElement(object = {
  tag: null,
  id: null,
  className: null,
  html: [],
  shadow: [],
  attributes: [],
  event: [],
  css: [],
  stylesheet: null,
  text: null,
}){
  const _active = new ActiveDocument(object);
  return _active;
}

/**
 * @public 
 * @function
 * @name Active
 * @param {Object} object
 * @returns {HTMLElement}
 * @example
 *  let object
 * {
 * tag: null,
 * id: null,
 * className: null,
 * html: [],
 * shadow: [],
 * attributes: [],
 * event: [],
 * css: [],
 * stylesheet: null,
 * text: null,
 * }
 * */

export function Active(
  object = {
    tag: null,
    id: null,
    className: null,
    html: [],
    shadow: [],
    attributes: [],
    event: [],
    css: [],
    stylesheet: null,
    text: null,
  }
) {
  const _active = new ActiveDocument(object);
  return _active.getElement();
}
/**
 * @public
 * @function
 * @name ActivePromise
 * @param {Object} object
 * @returns {Promise}
 * */
export function ActivePromise(object) {
  const _active = new ActiveDocument(object);
  let element = null;
  return _active.getElementPromise();
}
/**
 * @public
 * @function
 * @name ActiveToDocument
 * @param {Array} obj
 * @returns {void}
 */
export function ActiveToDocument(obj = []) {
  if (document.body) {
    Object.keys(obj).map((ob) => {
      document.body.appendChild(obj[ob]);
    });
  } else {
    document
      .getElementsByTagName("html")[0]
      .appendChild(document.createElement("body"));
    Object.keys(obj).map((ob) => {
      document.body.appendChild(obj[ob]);
    });
  }
}


/**
 * @function
 * @public
 * @name ActiveInit
 * @param {Function} back 
 * @returns {void}
 */
export function ActiveInit(back) { document.addEventListener('DOMContentLoaded', back) };
