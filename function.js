

function setAlert(msg,type ='danger'){
    return `<p class="alert alert-${type}">${msg}</p>`

}



function emailCheck(email_0){
    let pattern = /^[a-z0-9_\.]{1,}@[a-z]{2,}\.[a-z]{2,5}$/;
  return  pattern.test(email_0)
}


function phoneCheck(num){
    let pattern = /^(01|\+8801|008801)[0-9]{9}$/
   return pattern.test(num)
}