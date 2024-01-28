// 가입부분 체크
document.getElementById("btn").addEventListener("click", function(event){
    const toggler = document.body;           //  배경 element
    toggler.classList.toggle('dark-mode');   //스위치 같은 메소드
})

function signUpCheck(){

  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let check = true;

    // 이메일확인
    if(email.includes('@')){
        let emailId = email.split('@')[0]
        let emailServer = email.split('@')[1]
        if(emailId === "" || emailServer === ""){
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check = false
        }
        else{
        document.getElementById("emailError").innerHTML=""
        }
    }else{
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check = false
    }


    // 이름확인
    if(name===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check = false
    }else{
        document.getElementById("nameError").innerHTML=""
    }


    // 비밀번호 확인    
    if(password !== passwordCheck){
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
        check = false
    }else{
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
    }

    if(password===""){
        document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
        check = false
    }else{
        //document.getElementById("passwordError").innerHTML=""
    }
    if(passwordCheck===""){
        document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
        check = false
    }else{
        //document.getElementById("passwordCheckError").innerHTML=""
    }



    
    if(check){
        document.getElementById("emailError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
        

        alert("가입이 완료되었습니다.");
        location.href = './index.html';

    }
    }
