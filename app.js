let string = '';
let buttons = document.querySelectorAll('.button')
let inp = document.querySelector('input')

Array.from(buttons).forEach((button) => {

    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            inp.value = string;
        } else if (e.target.innerHTML == 'C') {
            string = '';
            inp.value = string
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            inp.value = string;
        }


    })
})
