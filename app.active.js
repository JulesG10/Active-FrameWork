import {  _$ } from "./src/class/fast.active.js";
import { components } from "./src/components/main.active.js";
import { css } from "./src/function/css.active.js";
import { live } from "./src/utils/utils.active.js";

export var _ = ({
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
    $:(el)=>{
        return new _$(el);
    },
    add$:(name,callback)=>{
        _$.prototype[name] = callback;
    },
    live:live,
    components:components,
    css:css
});
