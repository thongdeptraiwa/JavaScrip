//nhập m^2
// var mV = prompt("nhập mét vuông: ");

//đề sai 
function doi(){
    var mV = document.querySelector('#mV').value;
    var sao = mV/1000;
    var mau = sao/10;
    var ha = mau;
    console.log(mV+" mét vuông = "+sao+" sào = "+mau+" mẫu = "+ha+" ha")

    //ánh xạ qua html h2
    document.querySelector('#kq').innerHTML = mV+" mét vuông = "+sao+" sào = "+mau+" mẫu = "+ha+" ha"; 
}
//back
function quayVe(){
    history.back();
}