


// bersagliamo lo slider
// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// per ognuno di essi andremo a creare un elemento img dentro lo slider

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
console.log(images);


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");


// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// Inserimento immagini nello slider
images.forEach((image, index) => {
  sliderElement.innerHTML += `<img src="${image}" alt="Immagine ${index + 1}">`;
});

document.querySelector("#slider img:nth-of-type(1)").className = "active";

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia S
document.querySelector("#left-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});


document.querySelector("#right-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    }
    


});