/**
 * @function
 * @public
 * @name UrlToBlob
 * @param {String} url 
 * @param {String} name
 * @param {Boolean} toUrl
 * @returns {Promise} 
 */
export function UrlToBlob(url,name="",toUrl=false){
    return new Promise((res,rej)=>{
    fetch(url)
      .then((e) => {
        return e.blob()
      })
      .then((blob) => {
        let b = blob
        b.lastModifiedDate = new Date()
        b.name = name;
        if(!toUrl){
          res(b)
        }else{
          res(URL.createObjectURL(b))
        }
      })
    })
}
/**
 * @var log
 * @public
 * @name log
 * @type {Object}
 */
export var log = console.log;
/**
 * @var Key
 * @public
 * @name Key
 * @type {Object}
 */
export var Key = Object.keys;
/**
 * @var Entries
 * @public
 * @name Entries
 * @type {Object}
 */
export var Entries = Object.entries;

/**
 * @function
 * @public
 * @name live
 * @param {Object} obj 
 * @param {Function} getE 
 * @param {Function} setE 
 * @param {Function} hasE 
 * @returns {Proxy}
 */
export function live(obj,setE){
  let handler = {
    get(target, prop, receiver){
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key],handler)
      } else {
        return target[key];
      }
    },
    set(obj, prop, value){
        setE(obj, prop, value)
        return true;
    }
};
  return new Proxy(obj,handler)
} 
