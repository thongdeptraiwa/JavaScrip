function show(){
    //get date hệ thống
    var now = new Date;
    //get giờ phút giây
    var gio = now.getHours();
    var phut = now.getMinutes();
    var giay = now.getSeconds();
    //thêm 0 nếu <10 để 2 chữ số
    if(gio<10){
        gio="0"+gio;
    }
    if(phut<10){
        phut="0"+phut;
    }
    if(giay<10){
        giay="0"+giay;
    }
    //ánh xạ qua html
    document.querySelector("#kq").innerHTML = gio+":"+phut+":"+giay;
    //cứ 1 giây(1000) gọi hàm show setTimeout == setInterval
    //location.reload() sẽ tải lại trang
    //setTimeout(location.reload(),1000); //ngu
    setTimeout("show()",1000);
}
//back
function quayVe(){
    history.back();
}