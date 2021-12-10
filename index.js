function askUser() {
    const Words = [];
    let answer = true;
    for (let i = 0; true; i++) {
        if (i % 3 === 0 && i !== 0) {
            answer = confirm('Ready to continue?');
        }
        if (!answer) {
            break;
        }
        const currentWord = prompt('Enter your word');
        words.push(currentWord);
    }
}
console.log(Words);
askUser();
