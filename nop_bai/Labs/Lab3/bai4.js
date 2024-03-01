
var arr = ['bao','kéo','búa'];
var player;
var may;
function chon(x){
    player = arr[x];
    console.log("Bạn chọn "+player);
}
function lamLai(){
    player='';
    may='';
}
function xet(){
    //check
    if(player==''){
        console.warn("bạn chưa chọn!");
        return;
    }

    //tạo biến random
    let rd = Math.floor(Math.random() * 3);
    may = arr[rd];
    console.log("máy chọn "+may);

    if((player=='bao' && may=='búa')||(player=='kéo' && may=='bao')||(player=='búa' && may=='kéo')){
        console.log("Thắng");
        document.querySelector('#kq').innerHTML = "Thắng";
    }
    if((may=='bao' && player=='búa')||(may=='kéo' && player=='bao')||(may=='búa' && player=='kéo')){
        console.log("Thua");
        document.querySelector('#kq').innerHTML = "Thua";
    }
    if(player==may){
        console.log("Hòa");
        document.querySelector('#kq').innerHTML = "Hòa";
    }

    lamLai();
}
//back
function quayVe(){
    history.back();
}