import { config } from "./main.active.js";
import { Active,ActiveToDocument } from "../function/main.active.js";
import { Key } from "../utils/utils.active.js";


export function run(){
    Key(config).map(k=>{
        ActiveToDocument([Active(config[k])]);
    })
}


