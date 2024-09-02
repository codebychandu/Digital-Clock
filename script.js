const time = document.querySelector('#timer')
const month = document.querySelector('.month')

setInterval(function() {
    let date = new Date()
    time.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

setInterval(function() {
    let months = new Date()
    month.innerHTML = `${months.toLocaleDateString()}`;
}, 1000);
