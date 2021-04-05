// let user = localStorage.getItem("currentUpdate");
// user=JSON.parse(user)

changeDisplay = (id) => {
    // if(id=="account1"){
    // document.getElementById(id).style.display="none";
    // document.getElementById("account").style.display="block";
    // // document.getElementById("account").value=user.account;
    // }
    if(id=="pan1"){
        document.getElementById(id).style.display="none";
        document.getElementById("pan").style.display="block";
        // document.getElementById("pan").value=user.pan;
    }
    if(id=="name1"){
        document.getElementById(id).style.display="none";
        document.getElementById("name").style.display="block";
        // document.getElementById("name").value=user.name;
    }
    if(id=="gender1"){
        document.getElementById(id).style.display="none";
        document.getElementById("gender").style.display="block";
        // document.getElementById("gender").value=user.gender;
    }
    if(id=="DOB1"){
        document.getElementById(id).style.display="none";
        document.getElementById("DOB").style.display="block";
        // document.getElementById("DOB").value=user.DOB;
    }
    if(id=="email1"){
        document.getElementById(id).style.display="none";
        document.getElementById("email").style.display="block";
        // document.getElementById("email").value=user.email;
    }
    if(id=="aadhar1"){
        document.getElementById(id).style.display="none";
        document.getElementById("aadhar").style.display="block";
        // document.getElementById("aadhar").value=user.aadhar;
    }
    if(id=="totalAmount1"){
        document.getElementById(id).style.display="none";
        document.getElementById("totalAmount").style.display="block";
        // document.getElementById("totalAmount").value=user.balance;
    }
    if(id=="mobileNo1"){
        document.getElementById(id).style.display="none";
        document.getElementById("mobileNo").style.display="block";
        // document.getElementById("pan").value=user.pan;
    }
}
