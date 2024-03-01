//nhập cận nặng vs chiều cao
// var canNang = prompt("Nhập cân nặng: ");
// var chieuCao = prompt("Nhập chiều cao: ");
//var bmi = canNang/(chieuCao*chieuCao);

//check
function BMI(){

    var canNang = document.querySelector('#canNang').value;
    var chieuCao = (document.querySelector('#chieuCao').value)/100;
    var bmi = (canNang/(chieuCao*chieuCao)).toFixed(2);
    var text;
    console.log(bmi);
    
    if(bmi<18.5){
        text=" (Thiếu cân)";
        console.log("Thiếu cân");
        document.querySelector('#anh').src = '../../img/thieucan.png';
    }
    else if(bmi >=18.5 && bmi<25)
    {
        text=" (Bình thường)";
        console.log("Bình thường");
        document.querySelector('#anh').src = '../../img/binhthuong.png';
    }
    else if(bmi>=25 && bmi<30)
    {
        text=" (Thừa cân)";
        console.log("Thừa cân");
        document.querySelector('#anh').src = '../../img/thuacan.png';
    }
    else
    {
        text=" (Béo phì)";
        console.log("Béo phì");
        document.querySelector('#anh').src = '../../img/beophi.png';
    }   

    //ánh xạ qua html
    document.querySelector('#kq').innerHTML = bmi+text; 
}
//back
function quayVe(){
    history.back();
}
