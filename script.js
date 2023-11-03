const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btnSubmit = document.querySelector('#btn-submit');



// btnSubmit.addEventListener('click', () => {
//     const sum = Number(input1.value) + Number(input2.value);
//     alert(sum)
// })

// btnSubmit.addEventListener('click', () => {
//     const  user = {
//         name: input1.value,
//         age: input2.value
//     }
//     alert(JSON.stringify(user))
// })

btnSubmit.addEventListener('click', () => {
    const  name = input1.value
    const  age = input2.value
    if (name.length >= 1 && age > 0) {
        alert(`Welcome ${name} - your age ${age}!`)
    } else if (name.length <= 0 && age.length > 0) {
        alert('Please enter your name')
    } else if (name.length >= 1 && age.length <= 0) {
        alert('Please enter your age')
    }
});