import { _ as act } from "../app.active.js";
        
act.init(false,false).then((_act) => {
    var _ = _act;
}).catch(err=>console.error(err));