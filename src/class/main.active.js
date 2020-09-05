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
export class ActiveDocument {
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
    return element;
  }
  /**
   * @function
   * @name active
   * @public
   * @param {Object} obj
   * @returns {HTMLElement}
   * */
  activeInnner(obj){
    let tag = "div";
    let id = "";
    let className = "";
    let stylesheet = "";
    let html = [];
    let css = [];
    let text = "";
    let attributes = [];
    let event = [];

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
        if(typeof html[item] == "object"){
          el.appendChild(this.active(html[item]))
        }else{
          el.appendChild(html[item]);
        }
      });
      Keys(attributes).map((item) => {
        el.setAttribute(
          Keys(attributes[item])[0],
          attributes[item][Keys(attributes[item])]
        );
      });
      Keys(event).map((evt) => {
        el.addEventListener(Keys(event[evt])[0], () => {
          eval(event[evt][Keys(event[evt])]);
        });
      });
      finalElement = el;
    } else {
      customElements.define(tag + "-");
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
        if(typeof html[item] == "object"){
          el.appendChild(this.active(html[item]))
        }else{
          el.appendChild(html[item]);
        }
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
    }
    return finalElement;
  }
  /**
   * @function
   * @name active
   * @public
   * @param {Object} obj
   * @returns {HTMLElement}
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
        if(typeof html[item] == "object"){
          el.appendChild(this.activeInnner(html[item]))
        }else{
          el.appendChild(html[item]);
        }
      });
      Keys(attributes).map((item) => {
        el.setAttribute(
          Keys(attributes[item])[0],
          attributes[item][Keys(attributes[item])]
        );
      });
      Keys(event).map((evt) => {
        el.addEventListener(Keys(event[evt])[0], () => {
          eval(event[evt][Keys(event[evt])]);
        });
      });
      finalElement = el;
    } else {
      customElements.define(tag + "-");
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
        if(typeof html[item] == "object"){
          el.appendChild(this.activeInnner(html[item]))
        }else{
          el.appendChild(html[item]);
        }
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
    }
    return finalElement;
  }
}
export class HTMLDefiner extends HTMLElement {
  constructor() {
    super()
  }
}
