/* mylib.js
*  date: 3/6/2010
*  author: rat
*  E:\code\js\lib\mylib.js
*/

function dw(str){
    document.write(str);
}

function dwb(str){
    document.write(str, '<br />');
}

function a(str){
    alert(str);
}

function cl(){
    console.log.apply(this, arguments);
}

function getTags(type){
    return document.getElementsByTagName(type);
}

function displayArray(arrRef){
    for(i=0; arrRef[i]; i++){
        for(key in arrRef[i]){
            dwb(key + ': ' + arrRef[i][key])
        }
        dwb(' ')
    }
}
function addUpArr(arrRef){
    var total=0;
    for(i=0; i<(arrRef.length); i++){
        total+=parseInt(arrRef[i])
    }
    return total
}
function addUpDice(arrRef){
    var total=0;
    for(i=0; i<(arrRef.length); i++){
        total+=(parseInt(arrRef[i])*(i+1))
    }
    return total
}
function getTagsByClass(tag, classref){
  var array = []
  var divs = getTags(tag)
  for(var i=0; divs[i]; i++){
    if(divs[i].className == classref){
      array.push(divs[i])           
    }
  }
  return array
}