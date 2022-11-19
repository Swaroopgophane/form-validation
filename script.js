var S1 = document.getElementById('s1');
var S2 = document.getElementById('s2');
var S3 = document.getElementById('s3');
var S4 = document.getElementById('s4');
var S5 = document.getElementById('s5');
var S6 = document.getElementById('s6');


function validation()
{
    var Uname = document.getElementById('uname').value;
    var Upass = document.getElementById('pass').value;
    var Ucpass = document.getElementById('cpass').value;
    var Uage = document.getElementById('age').value;
    var Uphone = document.getElementById('phone').value;
    var Uemail = document.getElementById('email').value;


    let flag = 1;

    if(Uname.length == 0)
    {
        S1.innerHTML = "*Username cannot be empty";
        flag = 0;
    }
    if(Uname.length != 0)
    {
        S1.innerHTML = " ";
       
    }

    if(Uname == Upass)
    {
        S2.innerHTML = "*Username and Password must not be same";
        flag = 0;
    }
    if(Uname != Upass)
    {
        S2.innerHTML = " ";
       
    }
    if(Upass != Ucpass)
    {
        S3.innerHTML = "*Password and ConfirmPassword must be same";
        flag = 0;
    }
    if(Upass == Ucpass)
    {
        S3.innerHTML = " ";
       
    }

    if(Uage.length == 0)
    {
        S4.innerHTML = "*Age must not be empty<br>";
        flag = 0;
       
    }
    else
    {
        if(Uage < 18 || Uage > 25)
        {
            S4.innerHTML = "*You are not eligible";
            flag = 0;
        }
        else if(isNaN(Uage) == true)
        {
            S4.innerHTML = "*Please enter a valid age";
            flag = 0;
        }
        else
        {
            S4.innerHTML = " ";
        }
    }
   
    
       

    if(Uphone.length < 10 || Uphone.length > 10)
    {
        S5.innerHTML = "*Phone number not valid";
        flag = 0;
    }
    if(Uphone.length == 10)
    {
        S5.innerHTML = " ";
       
    }
    if(isNaN(Uphone) == true)
    {
        S5.innerHTML = "*Phone number not valid";
        flag = 0;
    }
    
   if(Uemail.length == 0)
   {
        S6.innerHTML = "*Email must not be empty";
        flag = 0;
   }
   if(Uemail.length != 0)
   {
        S6.innerHTML = " ";
        
   }


   if(flag == 0)
   {
        return false;
   }
   
    
    
}

