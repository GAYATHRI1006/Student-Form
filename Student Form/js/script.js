
function saved()
{   
    var content= document.getElementById("box")
    var usernames=document.getElementById("Name")
    var age=document.getElementById("Age")
    var gender=document.getElementById("Gender")
    var course=document.getElementById("Course")
    var email=document.getElementById("mail")
    var row=table.insertRow()
    var nick=row.insertCell(0)
    var num=row.insertCell(1)
    var sub=row.insertCell(2)
    var sex=row.insertCell(3)
    var contact=row.insertCell(4)
    var del=row.insertCell(5)
    var deleteButton=document.createElement("button")
    deleteButton.innerHTML="Delete"
    deleteButton.onclick=function()
    {
        content.deleteRow(row.rowIndex)
        del.appendChild(deleteButton)

    }


}
var btn=document.getElementById("btn")

function saved(){
    btn.style.backgroundColor="red"
}