function addName() {
    var arrContainer = document.getElementById('array');

    var arr = []; 
    for(var i=0; i < 5; i++) {

        arr[i] = prompt('Enter any word', +i); 
        if(arr[i] === null) {
            alert('Отмена');
            return;
        }

        if(arr[i] === '') { 
            alert('You didnt put any word');
            arr[i] = prompt('Enter any word'); 
        }
    }

    arrContainer.innerHTML = '';
    arrContainer.innerHTML = arr;
}
    console.log(arr); 
