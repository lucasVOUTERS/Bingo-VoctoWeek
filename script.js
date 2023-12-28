const listBingos = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]
];

let audioBingo = new Audio("sons/bingo.mp3");
let audioEtoile = new Audio("sons/etoile.mp3")

var numberBingos = 0;

const Cases = document.getElementsByClassName("lesCases");

setTimeout(() => {
    const nbrBingos = document.querySelector('#nbrBingos');
    nbrBingos.innerHTML = 'Bingos -> ' + numberBingos;
    const ETOILE = document.querySelector('#Etoile');

    for (var index=0;index < Cases.length;index++){
        const laCase = Cases[index];
        const numéro = index;
        laCase.addEventListener("click", (e) =>{
            if (laCase.classList.contains('active')) {
                laCase.classList.remove('active');
                laCase.style.backgroundColor = 'white';
            } else {
                laCase.classList.add('active');
                verifBingos(numéro);
                laCase.style.backgroundColor = 'rgb(255, 21, 21)';
                if (laCase.id == "star") {
                    ETOILE.style.display = 'flex';
                    audioEtoile.play();
                    setTimeout(() => {
                        ETOILE.style.display = 'none';
                    }, "2000");
                }
            }
            compteurBingos();
        })
    }

}, "1");

function resetAll(){
    for (var index=0;index < Cases.length;index++){
        const laCase = Cases[index];
        if (laCase.classList.contains('active')) {
            laCase.classList.remove('active');
            laCase.style.backgroundColor = 'white';
        }
    }
    compteurBingos();
}

function verifBingos(numéro){
    const BINGO = document.querySelector('#BINGO');
    for (var index=0;index < listBingos.length;index++){
        let compteur = 0;
        if (listBingos[index].includes(numéro)) {
            for (var index2=0;index2 < listBingos[index].length;index2++){
                if (Cases[listBingos[index][index2]].classList.contains('active')) {
                    compteur++;
                }
            }
            if (compteur == 4) {
                BINGO.style.display = 'flex';
                audioBingo.play();
                setTimeout(() => {
                    BINGO.style.display = 'none';
                }, "2000");
            }
        }
    }
}

function compteurBingos(){
    const nbrBingos = document.querySelector('#nbrBingos');

    numberBingos = 0;
    let compteur2 = 0;
    
    for (var index = 0; index < listBingos.length; index++) {
        for (var index2=0;index2 < listBingos[index].length;index2++){
            if (Cases[listBingos[index][index2]].classList.contains('active')) {
                compteur2++;
            }
            if (compteur2 == 4) {
                numberBingos++;
            }
        }
        compteur2 = 0;
    }

    nbrBingos.innerHTML = 'Bingos -> ' + numberBingos;
}