const Cases = document.getElementsByClassName("lesCases");

setTimeout(() => {
    fetch('index.html')
    .then(res => res.text())
    .then(data =>{
        Cases.innerHTML = data;
    })

    console.log(Cases);
}, 1000);