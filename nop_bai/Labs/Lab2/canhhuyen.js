//nhập a,b
// var a = prompt("nhập a: ");
// var b = prompt("nhập b: ");
//canh huyen
// var c = Math.sqrt((a*a+b*b));

// console.log("\na^2 + b^2 = c^2");
// console.log("=> "+a+"^2 + "+b+"^2 = c^2");
// console.log("\n=> c^2 = "+Math.pow(a,2)+" + "+Math.pow(b,2));
// console.log("\n=> c^2 = "+(a*a+b*b));
// console.log("\n=> c = "+c);
// alert("=> c = "+c);
// document.write("=> c = "+c);

function tinh(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var c = Math.sqrt((a*a+b*b)).toFixed(2);
    console.log(c);
    //ánh xạ qua html h2
    document.querySelector('#kq').innerHTML = "Cạnh huyền = "+c; 
}
//back
function quayVe(){
    history.back();
}