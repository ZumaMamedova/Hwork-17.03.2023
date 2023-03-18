let table=document.querySelector(".table");

if(localStorage.getItem("basket")!=null) {
    let arr=JSON.parse(localStorage.getItem("basket"));
    table.classList.remove("d-none");

    arr.forEach(product => {
        let tr=
        <tr>
            <td>
            <img src="${product.imgUrl}" alt="" width="150px" height="150px">
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><i class="fa-solid fa-trash"></i></td>
        </tr>

        table.lastElementChild.innerHTML=tr;

    
        
    });

}
