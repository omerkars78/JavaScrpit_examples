const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let keys_value = "0";

update_display();

function update_display(){
    display.value = keys_value;
}

keys.addEventListener("click",function(e){
    const element = e.target;
    if(!element.matches("buttons")) return;

    if(element.classList.contains("operator")){
        console.log("operator",element.value);
        return;
    }
    if(element.classList.contains("decimal")){
        input_decimal();
        update_display();
        return;
    }
    if(element.classList.contains("clear")){
        clear();
        update_display();
        return;
    }

    input_number(element.value);
    update_display();    
    
});

function input_number(num){
    keys_value = keys_value === "0"? num: keys_value + num;
}

function input_decimal(){
    if(!keys_value.includes(".")){
        keys_value += ".";
    }
    
}

function clear() {
    keys_value = "0";
}