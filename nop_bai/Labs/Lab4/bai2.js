function hienThi(){
    var arrSV = new Object;
    arrSV.ten = document.querySelector('#ten').value;
    arrSV.diem = document.querySelector('#diem').value;
    if(arrSV.diem <0 || arrSV.diem >10){
        document.querySelector('#kq').innerHTML ="Nhập sai điểm!"
        return;
    }
    arrSV.hocLuc = xepLoai(arrSV.diem);
    console.log(arrSV.hocLuc);
    document.querySelector('#kq').innerHTML = `Họ và tên: ${arrSV.ten}<br>Điểm: ${arrSV.diem}<br>Học lực: ${arrSV.hocLuc}`;
}
function xepLoai(diem){
    if(diem >= 8.5){
        return "Giỏi"; 
    }else if(diem >= 6.5){
        return "Khá";
    }else if(diem >= 5){
        return "Trung bình";
    }else if(diem >= 3.5){
        return "Kém";
    }else{
        return "Yếu";
    }
    
}
//back
function quayVe(){
    history.back();
}