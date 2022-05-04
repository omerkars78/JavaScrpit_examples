const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let display_value = '0';
let first_value = null;
let operator = null;
let waiting_for_second_value = false;

keys_value();

function keys_value() {
    display.value = display_value;
}


keys.addEventListener('click', function(e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if(element.classList.contains('operator')) {
        // console.log('operator', element.value);
        handle_operator(element.value);
        return;
    }

    if(element.classList.contains('decimal')) {
        // console.log('decimal', element.value);
        input_decimal();
        keys_value();
        return;
    }

    if(element.classList.contains('clear')) {
        // console.log('clear', element.value);
        clear();
        keys_value();
        return;
    }

    // console.log('number', element.value);
    input_number(element.value);
    keys_value();
});


function handle_operator(next_operator){
    const value = parseFloat(display_value);

    if(first_value === null){
        first_value = value;
    }

    waiting_for_second_value = true;
    operator = next_operator;
}

function input_number(num) {
    
    if(display_value = num){
    waiting_for_second_value = false;

} else {
    display_value = display_value === '0'? num: display_value + num;
}
}

function input_decimal() {
    if (!display_value.includes('.')) {
        display_value += '.';
    }
}

function clear() {
    display_value = '0';
}