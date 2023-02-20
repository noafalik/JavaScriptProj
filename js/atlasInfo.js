export const doApi = async (_country) => {
    console.log(_country);

    let url = `https://restcountries.com/v3.1/name/${_country}?fullText=true`;
    // console.log(url);

    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        updateInfoUI(data);
    }
    catch (err) {
        console.log(err);
        alert("The name of the country is incorrect");

    }
}

// דו איפיאי לארצות השכנות
const doApiBorder = async (_country) => {
    console.log(_country);

    let url = `https://restcountries.com/v3.1/alpha/${_country}`;
    // console.log(url);

    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        updateInfoUI(data);
    }
    catch (err) {
        console.log(err);
        alert("There is a problem, come back later!");

    }
}

const updateInfoUI = (json) => {
    document.querySelector("#id_img").innerHTML = `<img src="${json[0].flags.png}" width="350" alt="${json[0].flags.alt}" style="border-radius: 15px;">`;
    document.querySelector("#country_id").innerHTML = json[0].name.common;
    // console.log(json[0].name.common);

    document.querySelector("#pop_id").innerHTML = json[0].population.toLocaleString();
    document.querySelector("#region_id").innerHTML = json[0].region;

    // שליפת השפות
    document.querySelector("#lang_id").innerHTML = ` `;//איפוס המקום

    const keys = Object.keys(json[0].languages);
    const array = keys.map(key => ({ key: key, value: json[0].languages[key] }));
    array.forEach((item, index) => {
        document.querySelector("#lang_id").innerHTML += `${item.value}${index < (array.length - 1) ? `,` : `.`}`;

    })

    //הוצאת שם המטבע מאובייקט ששמו לא ידוע 
    const keys2 = Object.keys(json[0].currencies);
    const array2 = keys2.map(key => ({ key: key, value: json[0].currencies[key] }));
    document.querySelector("#coin_id").innerHTML = array2[0].value.name;
    //סוף שם מטבע

    document.querySelector("#capi_id").innerHTML = json[0].capital;

    document.querySelector("#map_id").src = `https://maps.google.com/maps?q=${json[0].latlng[0]},${json[0].latlng[1]}&z=5&ie=UTF8&iwloc=&output=embed`;

    // ערים שכנות -לולאת שליפה
    document.querySelector("#border_id").innerHTML = ` `; //ניקוי המדינה הקודמת
    const array3 = json[0].borders;
    if (array3 != null) {
        array3.forEach((item, index) => {

            let div = document.createElement("div");
            div.className = "col-auto m-2 p-0";
            document.querySelector("#border_id").append(div);
            getFullNameBorder(item, div, item, index, array3);

        })
    }
    else {
        document.querySelector("#border_id").innerHTML = `The country has no neighboring countries. `;
    }
    // סוף ערים שכנות

}

const getFullNameBorder = async (_country, div, item, index, array3) => {
    let url = `https://restcountries.com/v3.1/alpha/${_country}`;
    console.log(url);

    try {
        let resp = await fetch(url);
        let data = await resp.json();
        // console.log(data);

        div.innerHTML += `<a class="a_border text-decoration-none" href="#">${data[0].name.common}</a>${index < (array3.length - 1) ? `, ` : `.`} `


        let a_border = div.querySelector(".a_border");
        a_border.addEventListener("click", () => {

            doApiBorder(item);
        })
    }
    catch (err) {
        console.log(err);
        alert("There is a problem, come back later!");

    }
}
