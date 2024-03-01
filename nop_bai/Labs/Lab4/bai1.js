//1 tạo mảng
var arr = [];
function item(name, model, cost, quantity) {
    this.name = name;
    this.model = model; 
    this.cost = cost; 
    this.quantity = quantity;  
}
//2 3 thêm item vào mảng
arr[0]= new item("name1","model1","cost1","quantity1");
arr[1]= new item("name2","model2","cost2","quantity2");
arr[2]= new item("name3","model3","cost3","quantity3");
//4 truy xuất item thứ 3 trong mảng
console.log("quantity của item thứ 3: "+arr[2].quantity);
//5 thêm và truy xuất
arr[3]= new item("name4","model4","cost4","quantity4");
console.log("name của item thứ 4: "+arr[3].name);
console.log("model của item thứ 4: "+arr[3].model);
//ánh xạ
//document.querySelector("#kq").innerHTML = `quantity của item thứ 3: `;
//back
function quayVe(){
    history.back();
}
