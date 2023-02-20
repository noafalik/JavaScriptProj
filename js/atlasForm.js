import { doApi } from "./atlasInfo.js";

export const declareEvents = () => {
    let id_input = document.querySelector("#id_input");
    let search_btn = document.querySelector("#search_btn");
    let icon_btn = document.querySelector("#id_icon");

    let isr_btn = document.querySelector("#isr_btn");
    let usa_btn = document.querySelector("#usa_btn");
    let fra_btn = document.querySelector("#fra_btn");
    let uk_btn = document.querySelector("#uk_btn");
    let tha_btn = document.querySelector("#tha_btn");

    search_btn.addEventListener("click", () => {

        doApi(id_input.value)
    })
    id_input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            doApi(id_input.value)
        }
    })

    icon_btn.addEventListener("click", () => {

        doApi("israel");
    })

    isr_btn.addEventListener("click", () => {

        doApi("israel");
    })
    usa_btn.addEventListener("click", () => {

        doApi("united States");
    })
    fra_btn.addEventListener("click", () => {

        doApi("france");
    })
    uk_btn.addEventListener("click", () => {

        doApi("united Kingdom");
    })
    tha_btn.addEventListener("click", () => {

        doApi("thailand");
    })
}
