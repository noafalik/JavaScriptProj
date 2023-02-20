import { declareEvents } from "./atlasForm.js";
import { doApi } from "./atlasInfo.js";


const init = () => {
    doApi("israel");
    // console.log(doApi("israel"));
    
    declareEvents();
}


init();