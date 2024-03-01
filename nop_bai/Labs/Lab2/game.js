//nhập n
// var n = prompt("Nhập số bạn đoán (10-15) vào: ");

function xemkq(){
    //lấy value của input
    var n = document.querySelector('#n').value;
    console.log(n);
    //check n
    if(n<10 || n>15){
        console.log("chọn số sai!");
        document.querySelector('#kq').innerHTML = "chọn số sai!";
        return;
    }
    //số ngẫu nhiên (số bí mật) từ 10 đến 15
    let x = 10 + Math.round(5 * Math.random());
    console.log(x); 
    //check kq
    if(n == x){
        console.log("Chúc mừng, bạn đã đoán đúng");
        document.querySelector('#kq').innerHTML = "Chúc mừng, bạn đã đoán đúng";
    }else if (n > x){
        console.log("Giá trị của bạn lớn hơn số bí mật");
        document.querySelector('#kq').innerHTML = "Giá trị của bạn lớn hơn số bí mật";
    }
    else{
        console.log("Giá trị của bạn nhỏ hơn số bí mật");
        document.querySelector('#kq').innerHTML = "Giá trị của bạn nhỏ hơn số bí mật";
    }
}
//back
function quayVe(){
    history.back();
}




