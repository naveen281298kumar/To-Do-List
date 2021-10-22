let add=document.getElementById("add-to-list");
function getAndUpdate() {
    console.log("add value");
     let title=document.getElementById('title').value;
     let desc=document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null) {
        let itemJson=[];
        itemJson.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJson));
    }
    else{
         itemJsonstr=localStorage.getItem('itemsJson');
        itemJson=JSON.parse(itemJsonstr);
        itemJson.push([title,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJson));
    }
    update();
}



 function update() {
    if (localStorage.getItem('itemsJson')==null) {
         itemJson=[];
        localStorage.setItem('itemsJson',JSON.stringify(itemJson));
    }
    else{
         itemJsonstr=localStorage.getItem('itemsJson');
        itemJson=JSON.parse(itemJsonstr);

    }

// Display value in table
   let tabelbody=document.getElementById("table-body");
   let str="";
    itemJson.forEach((element,index) => {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
    </tr> `;
    });
    tabelbody.innerHTML=str;
}

add.addEventListener("click",getAndUpdate);
update();

function deleted(itemIndex) {
    console.log("Delete",itemIndex);


//delete item from table
    itemJsonstr=localStorage.getItem('itemsJson');
    itemJson=JSON.parse(itemJsonstr);

    itemJson.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJson));
    update();
}



function clearStore() {
    if (confirm("Do you really want to delete everthing")) {
        console.log("Clearing storage");
        localStorage.clear();
        update(); 
    }
}

// hamburger menu
const hamburger=document.getElementById("navbarSupportedContent");
const navUl=document.getElementById("nav-ul");

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});