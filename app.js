const student_form = document.getElementById('student_form');
const email_field = document.querySelector('input[name ="email"]');
const email_validation = document.getElementById('email_validation');
const phonenumber_validation = document.getElementById('phonenumber_validation');
const phone_fild =document.getElementById('phone_field')
const msg = document.querySelector('.msg');
const img = document.querySelector('.img');


student_form.addEventListener('submit',(e)=>{
e.preventDefault();


// get data 
img.classList.add('d-block');
let settimeout = setTimeout(()=>{
    img.classList.add('d-none');


const form_data = new FormData(e.target);
const {name,email,phonenumber,username,gender,subject} = Object.fromEntries(form_data.entries());


//  form validation 

if(!name || !email || !phonenumber || !username || !gender){
   msg.innerHTML = setAlert('All fiels are Required');
 }else{
   msg.innerHTML= setAlert('Data Stable','success');
   email_validation.textContent ='';
   email_validation.className = '';
   phonenumber_validation.textContent = '';
   phonenumber_validation.className = '';
   e.target.reset();
 }
    clearTimeout(settimeout);
},2000)


})



// email validation 

email_field.onkeyup = (e)=>{
    let email_vla =e.target.value;
    if(emailCheck(email_vla) == false){
        email_validation.textContent= '*invalid eamil'
        email_validation.className = 'text-danger'
    }else{
        email_validation.textContent ='Perfect Email'
        email_validation.className = 'text-success'
    }
}

// phone field valid 

phone_fild.onkeyup=(e)=>{
let phone_vl = e.target.value;

if(phoneCheck(phone_vl)==false){
    phonenumber_validation.textContent = 'invalid phone';
    phonenumber_validation.className = 'text-danger';
}else{
    phonenumber_validation.textContent = 'valid phone'
    phonenumber_validation.className = 'text-success'

}
}
