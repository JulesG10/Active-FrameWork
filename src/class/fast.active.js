import { GetCSS } from "../function/css.active.js";
import { HTMLDefiner } from "../class/main.active.js";
import { Key, log } from "../utils/utils.active.js";


export class _$ {
    el = ""
    constructor(el = "div") {
        this.el = el;
        if (document.querySelector(this.el)&&document.querySelector(this.el) instanceof HTMLElement) {
            this.el = document.querySelectorAll(this.el);
        } else if (document.createElement(this.el) instanceof HTMLElement) {
            this.el = [document.createElement(this.el)];
        } else if (this.el instanceof HTMLElement) {
            this.el = [el];
        }
        else {
            customElements.define(this.el, HTMLDefiner);
            this.el = [document.createElement(this.el)];
        }
        return this;
    }
    style() {
        let arr = [];
        this.each((e) => {
            arr.push(GetCSS(e))
        })
        if (arr.length < 2) {
            arr = arr[0];
        }
        return arr;
    }
    each(callback) {
        this.el.forEach(el => {
            callback(el)
        })
        return this;
    }
    self(id=null) {
        if (this.el.length < 2) {
            return this.el[0];
        }else if( id){
            return this.el[id];
        }
        return this.el;
    }
    on(event, callback) {
        this.each((e) => {
            e.addEventListenner(event, callback);
        })
        return this;
    }
    find(child) {
        this.each((e) => {
            e.childNodes.forEach((chilD) => {
                if (child == chilD) {
                    return true;
                }
            })
        })
        return false;
    }
    css(text) {
        this.each((e) => {
            Key(e.style).forEach(k => {
                Key(arguments).forEach(arg => {
                    if (k == arguments[arg].split(':')[0]) {
                        e.style[k] = arguments[arg].split(':')[1];
                    }
                })
            })
        })
        return this;
    }
    delay(delay){
        return new Promise(resolve => setTimeout(resolve, delay))
    }
    has(attr){
        let o={el:null,has:false};
        this.each(e=>{
            if(e.hasAttribute(attr)){
            o.has=true;
            o.el =e;
            }
        })
        return o;
    }
    first(){
        let le;
        this.each(e=>{
            if(!le) le= e;
        })
        return le;
    }
    last(){
        let l;
        this.each(e=>{
            l= e;
        })
        return l;
    }
    attr(key, value, remove = false) {
        if (remove) {
            if (key == "class") {
                this.each((e) => {
                    e.classList.remove(value);
                })
            } else {
                this.each((e) => {
                    e.removeAttribute(key);
                })
            }
        } else {
            if (key == "class") {
                this.each((e) => {
                    e.classList.add(value);
                })
            } else {
                this.each((e) => {
                    e.setAttribute(key, value);
                })
            }
        }
        return this;
    }
    to(parent, id = null) {
        if (id) {
            parent.appendChild(this.el[id]);
        } else {
            this.each((e) => {
                parent.appendChild(e)
            })
        }
        return this;
    }
    append(child,id=null){
        if(id){
            this.el[id].appendChild(child)
        }else{
            this.each((e) => {
                e.appendChild(child)
            })
        }
        return this;
    }
    remove(id = null) {
        if (id) {
            this.el[id].remove()
        } else {
            this.each(e => {
                e.remove()
            })
        }
        return this;
    }
    text(text){
        this.each(el=>{
            el.innerText=text;
        })
        return this;
    }
    html(html){
        this.each(el=>{
            el.innerHTML=html;
        })
        return this;
    }
    hide(delay=0){
        setTimeout(()=>{
            this.each((e)=>e.style.display="none")
        },delay)
        return this;
    }
    show(delay=0,last="block"){
        setTimeout(()=>{
            if(last=="none") last = "block";
                this.each((e)=>e.style.display=last)
        },delay)
        return this;
    }
    toActive(){
        let arr=[];
        this.each(el=>{
            let s = [];
            let a=[];
            Key(el.style).forEach(st=>{
                s.push(JSON.parse('{"'+st+'":"'+el.style[st]+'"}'));
            })
            Key(el.attributes).forEach(st=>{
                a.push(JSON.parse('{"'+st+'":"'+el.attributes[st]+'"}'));
            })
            let obj={
                tag: el.tagName,
                id: el.id,
                className: el.className,
                html: el.childNodes,
                shadow: [],
                attributes: a,
                event: [],
                css:s,
                stylesheet:"",
                text: el.innerText,
            }
            arr.push(obj)
        })
        return arr;
    }
    die(err=""){
        throw err;
    }
}