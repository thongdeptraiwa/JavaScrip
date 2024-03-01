//cách tối ưu
// var a = '';

// function toan_hang(Number){
//     a+=Number;
//     document.getElementById('kq').innerHTML = a;
// }
// function thuc_hien(){
//     document.getElementById('kq').innerHTML = eval(a);
// }
// function lam_lai(){
//     a='';
//     document.getElementById('kq').innerHTML = a;
// }

//cách ngu
var a = '', b = '', o = '', text = '';

function setToanHang(Number){
    text+=Number;
    document.querySelector('#kq').innerHTML = text;
    //
    if(o==''){
        a=a+Number;
        console.log(a);
    }else{
        b=b+Number;
        console.log(b);
    }
}
function setToanTu(toanTu){
    text+=toanTu;
    document.querySelector('#kq').innerHTML = text;
    //
    o=toanTu;
    console.log(o);
}
function lamLai(){
    a = '', b = '', o = '', text = '';
    document.querySelector('#kq').innerHTML = "Chưa có phép tính";
}
function tinh(){
    // if(a==''){
    //     console.warn("chưa nhập a!");
    // }
    // if(b==''){
    //     console.warn("chưa nhập b!");
    // }
    // if(b==''){
    //     console.warn("chưa nhập toán tử!");
    // }
    var kq ;
    switch(o){
        case '+':
        {
            kq = parseInt(a) + parseInt(b);
            console.log("Tổng: " + kq); 
            break;
        }
        case '-':
        {
            kq = parseInt(a) - parseInt(b);
            console.log("Hiệu: " + kq); 
            break;
        }
        case 'x':
        {
            kq = parseInt(a) * parseInt(b);
            console.log("Tích: " + kq); 
            break;
        }
        case ':':
        {
            kq = parseInt(a) / parseInt(b);
            console.log("Thương: " + kq); 
            break;
        }
    }
    document.querySelector('#kq').innerHTML = kq;
}
//back
function quayVe(){
    history.back();
}