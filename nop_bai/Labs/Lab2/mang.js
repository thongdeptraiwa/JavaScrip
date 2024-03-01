const theList = ['Lauren', 'Kevin',true,35,null,undefined,[ 'one', 'two']];
//gốc
console.log("Gốc");
console.log(theList)

//xóa phần tử đầu 
theList.shift();
console.log("xóa phần tử đầu");
console.log(theList)

// //xóa phần tử cuối
theList.pop();
console.log("xóa phần tử cuối");
console.log(theList)

//thêm FIRST vào đầu mảng
theList.splice(0,0,"FIRST");//tại vị trí 0 - xóa 0 phần tử - thêm "FIRST" vào vị trí 0
console.log("thêm FIRST vào đầu mảng");
console.log(theList)

//thêm hello world vào vị trí thứ 4 của mảng
theList.splice(3,0,"hello world");//tại vị trí 3 - xóa 0 phần tử - thêm "hello world" vào vị trí 3
console.log("thêm hello world vào vị trí thứ 4 của mảng");
console.log(theList)

//Thêm 'middle' vào vị trí thứ 3 của mảng
theList.splice(2,0,"middle");//tại vị trí 2 - xóa 0 phần tử - thêm "middle" vào vị trí 2
console.log("Thêm 'middle' vào vị trí thứ 3 của mảng");
console.log(theList)

//Thêm 'LAST' vào cuối mảng
theList.push("LAST");
console.log("Thêm 'LAST' vào cuối mảng");
console.log(theList)
//back
function quayVe(){
    history.back();
}
