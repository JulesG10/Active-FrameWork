import {  _$ } from "./src/class/fast.active.js";
import { components } from "./src/components/main.active.js";
import { css } from "./src/function/css.active.js";
import { live } from "./src/utils/utils.active.js";
import { Active as Act,ActiveToDocument } from "./src/function/main.active.js";

/**
 * @var _
 * @public
 * @name _
 * @type {Object}
 */
export var _ = ({
    /**
     * @function
     * @public
     * @name init
     * @param {Boolean} manu
     * @param {Object} json
     * @returns {Promise}
     */
    init: (manu = false, json = {}) => {
        let t = _;
        return new Promise((res, rej) => {
            if (manu && typeof json == "object") {
                import('./src/controller/main.active.js').then($e => {
                    $e.manualJSONconfig(json)
                    t.config = $e.config;
                    import('./src/controller/mainconfig.active.js').then(el=>{
                        el.run()
                    })
                    res(_)
                }).catch(err => console.error(err));
            } else {
                import('./src/controller/main.active.js').then($e => {
                    $e.loadJSONconfig().then(d => {
                         t.config = $e.config;
                         import('./src/controller/mainconfig.active.js').then(el=>{
                             el.run()
                         })
                         res(_) 
                    }).catch(err => { rej(err) });
                }).catch(err => console.error(err));
            }
        })
    },
     /**
     * @function
     * @public
     * @name $
     * @param {String} el
     * @returns {_$}
     */
    $:(el)=>{
        return new _$(el);
    },
    /**
     * @function
     * @public
     * @name add$
     * @param {String} name
     * @param {Function} callback
     * @returns {void}
     */
    add$:(name,callback)=>{
        _$.prototype[name] = callback;
    },
    /**
     * @function
     * @public
     * @name live
     * @param {Object} obj
     * @param {Function} setE
     * @returns {void}
     */
    live:live,
    /**
     * @var components
     * @name components
     * @public
     * @type {Object}
     */
    components:components,
    /**
     * @var css
     * @name css
     * @public
     * @type {Object}
     */
    css:css,
    /**
     * @function
     * @public
     * @name addActive
     * @param {Object} obj
     * @returns {void}
     */
    addActive:(obj)=>{
        ActiveToDocument([Act(obj)])
    },
    /**
     * @function
     * @public
     * @name addComponent
     * @param {String} name
     * @param {Function} action
     * @returns {void}
     */
    addComponent:(name,action)=>{
        components[name] = action;
    },
    /**
     * @function
     * @public
     * @name addComponent
     * @param {String} name
     * @param {Function} action
     * @returns {void}
     */
    addCss:(name,action)=>{
        css[name] = action;
    }
});

/**
* @function
* @public
* @name Active
* @param {Object} obj
* @returns {HTMLElement}
*/
export function Active(obj){
    return Act(obj);
}

