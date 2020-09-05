/**
 * @public
 * @function
 * @name Get
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise}
 */
export function Get(url,params=null){
    return new Promise((res,rej)=>{
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send(params);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                   res(request.responseText);
                }else{
                    res()
                }
            }
        }
    });
}

/**
 * @public
 * @function
 * @name Post
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise}
 */
export function Post(url,params=null){
    return new Promise((res,rej)=>{
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.send(params);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                   res(request.responseText);
                }else{
                    res()
                }
            }
        }
    });
}
/**
 * @public
 * @function
 * @name ReadFile
 * @param {Blob} blob 
 * @returns {Promise}
 */
export function ReadFile(blob){
    let reader = new FileReader();
    reader.readAsText(blob,"blob");
    return new Promise((res,rej)=>{
        reader.onload = function() { res(reader.result) };
    })
}

