const listBingos = [
   /* [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]*/
];

let audioBingo = new Audio("sons/bingo.mp3");
let audioEtoile = new Audio("sons/etoile.mp3");
//let audioBingoTotal = new Audio("sons/");

var numberBingos = 0;

const Cases = document.getElementsByClassName("lesCases");

setTimeout(() => {
    const saveInfos = document.querySelector('#saveInfos');
    const lesChamps = document.querySelectorAll('.champsTexte');
    const lesRadios = document.querySelectorAll('.radioButton');

    saveInfos.addEventListener("click", (e) =>{
        for (var index=0;index < lesChamps.length;index++){
            const laCase = Cases[index];
            if (laCase.id == 'star') {
                console.log('oui');
                laCase.removeAttribute('id');
            }
            else if (lesRadios[index].checked == true) {
                laCase.setAttribute("id", "star");
            }

            laCase.innerHTML = lesChamps[index].value;
        }

        const nameTheme = document.querySelector('#nameTheme');

        nameTheme.innerHTML = document.querySelector('#themeText').value;

        alert('Enregistrement effectué!');
    })
}, 1);

setTimeout(() => {
    const nbrBingos = document.querySelector('#nbrBingos');
    //nbrBingos.innerHTML = 'Bingos -> ' + numberBingos;
    const ETOILE = document.querySelector('#Etoile');
    const lesChamps = document.querySelectorAll('.champsTexte');
    const lesRadios = document.querySelectorAll('.radioButton');

    const nameTheme = document.querySelector('#nameTheme');

    document.querySelector('#themeText').value = nameTheme.innerHTML;

    for (var index=0;index < Cases.length;index++){
        const laCase = Cases[index];
        const numéro = index;

        lesChamps[index].value = laCase.innerHTML;

        if (laCase.id == "star") {
            lesRadios[index].checked = true;
        }

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
                    //audioEtoile.play();
                    setTimeout(() => {
                        ETOILE.style.display = 'none';
                    }, "2000");
                }
            }
            compteurBingos();
        })
    }


    const buttonAdmin = document.querySelector("#buttonAdmin");
    const buttonAcceuil = document.querySelector("#buttonAcceuil");

    const bingoPage = document.querySelector("#bingoPage");
    const adminPage = document.querySelector("#adminPage");

    const body = document.querySelector('body');

    buttonAdmin.addEventListener("click", (e) =>{
        bingoPage.style.display = 'none';
        adminPage.style.display = 'block';
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = '#080710';
    })

    buttonAcceuil.addEventListener("click", (e) =>{
        adminPage.style.display = 'none';
        bingoPage.style.display = 'block';
        body.style.backgroundImage = 'linear-gradient(to right , #c33ec3 0%, #4987e9 100%)';
        body.style.backgroundColor = 'none';
    })

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
                //audioBingo.play();
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

    if(numberBingos == 10){
       // .play();
    }

    //nbrBingos.innerHTML = 'Bingos -> ' + numberBingos;
}
