//nhap
// var a = prompt("Toán hạng a: ");
// var b = prompt("Toán hạng b: ");
// var o = prompt("Toán tử: ");
function xemkq(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var o = document.querySelector('#o').value;

    switch(o){
        case '+':
        {
            var kq = parseInt(a) + parseInt(b);
            console.log("Tổng: " + kq);
            document.querySelector('#kq').innerHTML = "Tổng: " + kq;
            break;
        }
        case '-':
        {
            var kq = parseInt(a) - parseInt(b);
            console.log("Hiệu: " + kq); 
            document.querySelector('#kq').innerHTML = "Hiệu: " + kq;
            break;
        }
        case 'x':
        case '*':
        {
            var kq = parseInt(a) * parseInt(b);
            console.log("Tích: " + kq); 
            document.querySelector('#kq').innerHTML = "Tích: " + kq;
            break;
        }
        case ':':
        case '/':
        {
            var kq = parseInt(a) / parseInt(b);
            console.log("Thương: " + kq); 
            document.querySelector('#kq').innerHTML = "Thương: " + kq;
            break;
        }
        default:
            {
                console.log(o + " không phải là toán tử"); 
                document.querySelector('#kq').innerHTML = o + " không phải là toán tử";
                break;
            }
        
    }

}
//back
function quayVe(){
    history.back();
}
