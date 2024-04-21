let user=document.getElementById('username');
    let password=document.getElementById('pass');
    let flag=1;
    function validateForm(){
        // for username
        if(user.value==""){
            document.getElementById("userError").innerHTML = "User name is empty";
            flag=0;
        }
        else if(user.value.length<3){
            document.getElementById("userError").innerHTML = "User name require minimun 3 char";
            flag=0;
            
        }
        else{
            document.getElementById('userError').innerHTML="";
            flag=1;
        }

        // for password

        if(password.value==""){
            document.getElementById("passError").innerHTML = "Password is empty";
            flag=0;

        }
        else{
            document.getElementById('passError').innerHTML="";
            flag=1;
        }
        if(flag){
            return true;
        }  
        else{
            return false;
        }   
    }