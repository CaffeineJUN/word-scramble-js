const wordText = document.querySelector('.word'),
    hintText = document.querySelector('.hint span'),
    refreshBtn = document.querySelector('.refresh-word'),
    checkBtn = document.querySelector('.check-word')

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split('')

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

        // let temp = wordArray[i]
        // wordArray[i] = wordArray[j]
        // wordArray[j] = temp

        ;[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerText = wordArray.join('')
    hintText.innerText = randomObj.hint
    console.log(randomObj)
}

initGame()

refreshBtn.addEventListener('click', initGame)
