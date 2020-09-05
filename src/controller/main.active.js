import { ReadFile } from "./ajax.active.js";
import { UrlToBlob } from "../utils/utils.active.js";

/**
 * @var config
 * @public
 * @type {Object}
 */
export var config = null;

/**
 * @function
 * @public
 * @name loadJSONconfig
 * @returns {Promise}
 */
export function loadJSONconfig() {
    return new Promise((res, rej) => {
        UrlToBlob("../includes/config/config.active.json", "config", false)
            .then(u => {
                ReadFile(u).then(txt => {
                    try{
                        res(JSON.parse(txt))
                    }catch{
                        rej("You must put json content into the config file !");
                    }
                    if(!config) config=JSON.parse(txt);
                })
            })
    })
}

/**
 * @function
 * @public
 * @name loadJSONconfig
 * @param {Object} json
 * @returns {Promise}
 */
export function manualJSONconfig(json){
    if(!config) config=JSON.parse(json);
}




