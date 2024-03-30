var list=[];
let activity=document.getElementById("input");
let todoAppList=document.getElementById("todolist");
document.getElementById("button").onclick=activityClickIt;
function activityClickIt(){
    list.push(activity.value);
    console.log(list);
    activity.value=""
    show();
}
function show(){
    todoAppList.innerHTML="";
    list.forEach((n,i)=>{
        todoAppList.innerHTML+="<li>"+n+"<a onclick='edit("+i+")'>Edit</a>"+"<a onclick='deleteIt("+i+")'>&items|</a></li>";
    })
}
function deleteIt(i){
    list.splice(i,1);
    show();
}
function edit(i){
    let value=prompt("Please enter the new task!!!");
    list.splice(i,1,value);
    show();
}