let fname = document.querySelector('.name')
let address = document.querySelector('.address')
let password = document.querySelector('.password')
let email = document.querySelector('.email')
let comment = document.querySelector('.comment')
let resetBtn = document.querySelector('.reset-btn')
let btn = document.querySelector('.form2')


let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/
let passwordRegex = /^[a-zA-Z0-9]{8,}$/

btn.addEventListener('click', function(event){
    event.preventDefault()
    
    console.log(comment.value)
    if(fname.value==="" || address.value === "" || password.value === "" || email.value ==="" || comment.value === ""){
        alert('All Fields are required!')
    } 
    else if(!emailRegex.test(email.value)) {
        alert('verify email!')
    } 
    else if(!passwordRegex.test(password.value)) {
        alert('verify pwd!')
    }   
    else{
        alert('Thank You! :D')
    }
})

resetBtn.addEventListener("click", function(e){
    e.preventDefault()
    fname.value = ""
    address.value  =  ""
    password.value  =  ""
    email.value  = ""
    comment.value = ""
})


