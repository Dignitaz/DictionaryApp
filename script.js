 const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
 const subBtn = document.querySelector('.submit-btn');
 const inputWord = document.querySelector('.intWord');
 const sound = document.querySelector('.sound');
 const resultDiv = document.querySelector('.result')

 subBtn.addEventListener('click', () => {
    resultDiv.style.display = 'flex';
    let reachWord = inputWord.value;
    fetch(`${url}${reachWord}`)
    .then(res => res.json())
    .then((data) => {
        let firstinfo = data[0].meanings[0].partOfSpeech;
        let firstSecondInfo = data[0].phonetic;
        let secondInfo = data[0].meanings[0].definitions[0].definition;
        let thirdInfo = data[0].meanings[0].definitions[0].example || "";
        debugger;
        resultDiv.innerHTML = 
        `<div class="result__header">
            <h3> ${reachWord} </h3>
            <button onclick="playSound()"> <i class="fas fa-volume-up"></i>
            </button>
        </div>
        <div class="result__info">
            <p class="firstinfo">${firstinfo} / ${firstSecondInfo}</p>
            <p class="secondinfo">${secondInfo} </p>
            <p class="thirdinfo">${thirdInfo}</p>
        </div>`;
    sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
        console.error(error);
        resultDiv.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    })
 });
 function playSound() {
    sound.play();
}