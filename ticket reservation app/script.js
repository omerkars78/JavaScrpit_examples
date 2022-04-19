const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();  
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    // [1,3,5]
    let selected_seat_index = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selected_seat_count = selectedSeats.length;
    count.innerText = selected_seat_count;
    amount.innerText = selected_seat_count * select.value;

    saveToLocalStorage(selected_seat_index);
}

function getFromLocalStorage() {
    const selected_seats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selected_seats !=null && selected_seats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selected_seats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }



    const selected_movie_index = localStorage.getItem('selected_movie_index');

    if (selected_movie_index != null) {
        select.selected_index = selected_index;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selected_seats', JSON.stringify(indexs));
    localStorage.setItem('selected_movie_index', select.selected_index);
}