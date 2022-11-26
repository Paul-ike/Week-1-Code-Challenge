let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    let speed = prompt('Enter the speed: ')
    let h3 = document.getElementById('h3')
    if (speed <= 70) {
        h3.innerHTML = 'OK!'
    } else if (speed > 70) {
        let totalSpeed = speed - 70
        let points = parseInt(totalSpeed / 5)
        if (points > 12) {
            points = 'Licence Suspended!'
        }
        h3.innerHTML = points
    }
})