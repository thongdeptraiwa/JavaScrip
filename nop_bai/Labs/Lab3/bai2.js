var a = prompt("Nhập bảng cửu chương(1-10): ");
switch(a){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':{
        for(let i=1;i<11;i++){
            console.log(a+" x "+i+" = "+(a*i)+"\n");
        }
        break;
    }
    default:{
        alert("nhập sai!");
        console.log("nhập sai!")
        break;
    }
}
//back
function quayVe(){
    history.back();
}