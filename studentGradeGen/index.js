// declare the called button
let btn = document.getElementById('btn')
// add event listener to the button
btn.addEventListener('click', function(){
// student input
    let studentMarks = prompt('Please enter your marks: ')

    let h3 = document.getElementById('grade')
// generation of grade
    if (studentMarks > 79 && studentMarks <= 100) {
        h3.innerHTML = 'A'
    } if (studentMarks >= 60 && studentMarks <= 79) {
        h3.innerHTML = 'B'
    } if (studentMarks >= 50 && studentMarks <= 59) {
        h3.innerHTML = 'C'
    } if (studentMarks >= 40 && studentMarks <= 49) {
        h3.innerHTML = 'D'
    } if (studentMarks <= 39 && studentMarks >= 0) {
        h3.innerHTML = 'E'
    } if (studentMarks > 100 || studentMarks < 0) {
        h3.innerHTML = 'Try Again!'
    }
    
})
