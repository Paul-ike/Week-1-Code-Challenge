// declare the called button
let btn = document.getElementById('btn')
// add event listener to the button
btn.addEventListener('click', function(){
 // speed input   
    let speed = prompt('Enter the speed: ')
    let h3 = document.getElementById('h3')
    // generation of speed outcome
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