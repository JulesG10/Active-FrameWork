/**
 * @name ActiveDocument
 * @class
 * @public
 * @example
 * ActiveToDocument([
 *    Active({
 *       tag: "p",
 *       id: "ok",
 *       class: "nice",
 *       text: "easy !",
 *       html: [
 *         Active({
 *           tag: "p",
 *           id: "ok",
 *           class: "test",
 *           text: "test",
 *           html: [],
 *           attributes: [{ "data-el": "test" }],
 *           css: [{ color: "red" }],
 *           stylesheet: "p{display:block}",
 *         }),
 *       ],
 *       attributes: [{ "data-el": "hello" }],
 *       css: [{ color: "red" }, { fontFamily: "Arial, sans-serif" }],
 *       stylesheet: "p{display:block}",
 *       event: [{ click: "alert('ok')" }],
 *     }),
 *     Active({
 *       text: "ok",
 *     }),
 *   ]);
 * */
class ActiveDocument {
  /**
   * @private
   * @var obj
   */
  obj = null;

  /**
   * @public
   * @param {Object} object
   * @constructor
   * */
  constructor(object) {
    this.obj = object;
  }

  /**
   * @name getElement
   * @public
   * @returns {HTMLElement}
   * */
  getElement() {
    return this.init();
  }

  /**
   * @name getElementPromise
   * @public
   * @returns {Promise}
   * */
  getElementPromise() {
    return this.initPromise();
  }

  /**
   * @name initPromise
   * @public
   * @returns {Promise}
   * */
  initPromise() {
    return new Promise((resolve, reject) => {
      document.addEventListener("DOMContentLoaded", () => {
        resolve(this.active(this.obj));
      });
    });
  }

  /**
   * @name init
   * @public
   * @returns {HTMLElement}
   * */
  init() {
    let element;
    element = this.active(this.obj);
    // let evt = new CustomEvent("ActiveLoaded", {detail:""});
    // document.dispatchEvent(evt);
    return element;
  }

  /**
   * @name active
   * @public
   * @param {Object} obj
   * @returns {HTMLElement | Error}
   * */
  active(obj) {
    let tag = "div";
    let id = "";
    let className = "";
    let stylesheet = "";
    let html = [];
    let css = [];
    let text = "";
    let attributes = [];
    let event = [];
    obj = new Proxy(obj, {
      set: (target, key, value) => {
        console.log(target, value, key);
      },
    });

    if (obj["id"]) {
      id = obj["id"];
    }
    if (obj["class"] || obj["className"]) {
      if (obj["class"]) {
        className = obj["class"];
      } else {
        className = obj["className"];
      }
    }
    if (obj["tag"] || obj["name"]) {
      if (obj["name"]) {
        tag = obj["name"];
      } else {
        tag = obj["tag"];
      }
    }
    if (obj["text"]) {
      text = obj["text"].toString();
    }
    if (obj["stylesheet"]) {
      stylesheet = obj["stylesheet"];
    }
    if (obj["html"]) {
      html = obj["html"];
    }
    if (obj["event"]) {
      event = obj["event"];
    }
    if (obj["attributes"]) {
      attributes = obj["attributes"];
    }
    if (obj["css"] || obj["style"]) {
      if (obj["style"]) {
        css = obj["style"];
      } else {
        css = obj["css"];
      }
    }
    let finalElement;
    if (document.createElement(tag) instanceof HTMLElement) {
      let Keys = Object.keys;
      let el = document.createElement(tag);
      el.id = id;
      el.className = className;
      el.innerText = text;
      if (document.getElementsByTagName("style")[0]) {
        document.getElementsByTagName("style")[0].textContent += stylesheet;
      } else {
        if (document.getElementsByTagName("head")[0]) {
          let style = document.createElement("style");
          style.textContent = stylesheet;
          document.getElementsByTagName("head")[0].appendChild(style);
        } else {
          document
            .getElementsByTagName("html")
            .appendChild(document.createElement("head"));
          let style = document.createElement("style");
          style.textContent = stylesheet;
          document.getElementsByTagName("head")[0].appendChild(style);
        }
      }
      Keys(css).map((item) => {
        el.style[Keys(css[item])[0]] = css[item][Keys(css[item])];
      });
      Keys(html).map((item) => {
        el.appendChild(html[item]);
      });
      Keys(attributes).map((item) => {
        el.setAttribute(
          Keys(attributes[item])[0],
          attributes[item][Keys(attributes[item])]
        );
      });
      Keys(event).map((evt) => {
        console.log();
        el.addEventListener(Keys(event[evt])[0], () => {
          eval(event[evt][Keys(event[evt])]);
        });
      });
      finalElement = el;
    } else {
      finalElement = new Error(
        "Unknow element " +
          tag +
          " , your element must be instanceof HTMLElement !"
      );
    }
    return finalElement;
  }
}
/**
 * @name Active
 * @param {Object} object
 * @returns {HTMLElement}
 * */

function Active(
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
  let element = null;
  return _active.getElement();
}
/**
 * @public
 * @function
 * @name ActivePromise
 * @param {Object} object
 * @returns {Promise}
 * */
function ActivePromise(object) {
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
function ActiveToDocument(obj = []) {
  if (document.body) {
    Object.keys(obj).map((ob) => {
      document.body.appendChild(obj[ob]);
    });
  } else {
    document
      .getElementsByTagName("html")
      .appendChild(document.createElement("body"));
    Object.keys(obj).map((ob) => {
      document.body.appendChild(obj[ob]);
    });
  }
}
/**
 * @public
 * @function
 * @name ActiveText
 * @param {Object} obj
 */
function ActiveText(obj) {
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
