let btn = document.getElementsByTagName('button')
btn.addEventListener(onclick, studentGradeGenerator())
let h1 = document.getElementsByTagName('h1')


function studentGradeGenerator(studentMarks) {

    let studentMarks = prompt('Please enter your marks: ')


    if (studentMarks >= 0 && studentMarks <= 100) {
        switch (studentMarks) {
            case 79 >= 100:
                h1.innerHTML = 'A'
                break;
            case 60 >= 79:
                h1.innerHTML = 'B'
                break;
            case 50 >= 59:
                h1.innerHTML = 'C'
                break;    
            case 40 >= 49:
                h1.innerHTML = 'D'
                break;
            case 0 >= 39:
                h1.innerHTML = 'E'
                break;
            default:
                break;
        }
    } else {
        console.log('Marks should be between 0 - 100');
    }
}