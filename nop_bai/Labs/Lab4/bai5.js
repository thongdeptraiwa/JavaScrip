var cuaSo;
function mo(){
  cuaSo = window.open('https://fptshop.com.vn/', 'Youtube', 'toolba = yes, menu = yes, width = 800px, height = 600px');
}

function dong(){
    cuaSo.close();
}

function check(){
    if (cuaSo.closed){
        document.querySelector('#kq').innerHTML = "Cửa sổ đã đóng";
    } else {
        document.querySelector('#kq').innerHTML = "Cửa sổ đang mở";
    }
}
//back
function quayVe(){
    history.back();
}