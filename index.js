function askUser () {
    const words = [];
    let answer = true;
    for (let i=0;true; i++) {
        if(i%3===&& i!==0) {
            answer = confirm ('Ready to continue?');
        }
        if(!answer) {
            break;
        }
        const currentWord = prompt('Enter your word');
        words.push(currentWord);
    }
}
 console.log(words);
 askUser();
    