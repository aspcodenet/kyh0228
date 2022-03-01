const CreateProduct = (namn,price,color)=>{
    return {
        name: namn,
        price:price,
        color:color
    }
}

const items = [
    CreateProduct('Slow Cooker Sauces Apple Bourbon Bbq',122,'Silver'),
    CreateProduct('iPhone 5S 64GB Space',150,'Grey'),
    CreateProduct('Ritter Marzipan',12,'Pink'),
]

const productsTableBody = document.getElementById('products')
const listSection = document.getElementById('list')
const newSection = document.getElementById('new')
const editSection = document.getElementById('edit')
const listMenu = document.getElementById('listMenu')
const newMenu = document.getElementById('newMenu')


const addProductToTable = (product) => {
    var tr = document.createElement('tr')
    tr.appendChild( wrapInTd(product.name) )
    tr.appendChild( wrapInTd(product.price) )
    tr.appendChild( wrapInTd(product.color) )

    const tdClick = wrapInTd('<i class="bi bi-pencil-square"></i>',true);
    tdClick.addEventListener("click",()=>{
        editProduct(product);
    });

    tr.appendChild( tdClick )
    
    productsTableBody.appendChild(tr)
}

const wrapInTd = (s, ishtml) => {
    var td = document.createElement('td')
    if(ishtml)
        td.innerHTML = s;
    else
        td.innerText = s;
    return td;
}


const editName = document.getElementById('editname')
const editPrice = document.getElementById('editprice')
const editColor = document.getElementById('editcolor')


const newName = document.getElementById('name')
const newPrice = document.getElementById('price')
const newColor = document.getElementById('color')


const editSave = document.getElementById('saveEdit')
const newSave = document.getElementById('newSave')
let currentlyEditingProduct = null

editSave.addEventListener("click",()=> {
    currentlyEditingProduct.name = editName.value
    currentlyEditingProduct.price = editPrice.value
    currentlyEditingProduct.color = editColor.value
    productsTableBody.innerHTML = '';
    items.forEach( (item)=>{
        addProductToTable(item)
    }  )
    listSection.style.display = "block";
    newSection.style.display = "none";
    editSection.style.display = "none";

})


const editProduct = (product)=>{
    listSection.style.display = "none";
    newSection.style.display = "none";
    editSection.style.display = "block";
    editName.value = product.name;
    editPrice.value = product.price;
    editColor.value = product.color;
    currentlyEditingProduct = product

}


newSave.addEventListener("click",()=> {
    addProductToTable(CreateProduct(newName.value, newPrice.value, newColor.value))
    listSection.style.display = "block";
    newSection.style.display = "none";
    editSection.style.display = "none";

})





items.forEach( (item)=>{
    addProductToTable(item)
}  )


document.querySelector(".cancelbtn").addEventListener("click",()=>{
    listSection.style.display = "block";
    newSection.style.display = "none";
    editSection.style.display = "none";
})

document.querySelector(".newcancelbtn").addEventListener("click",()=>{
    listSection.style.display = "block";
    newSection.style.display = "none";
    editSection.style.display = "none";
})



listSection.style.display = "block";
newSection.style.display = "none";
editSection.style.display = "none";


listMenu.addEventListener("click", ()=>{
    listSection.style.display = "block";
    newSection.style.display = "none";
    editSection.style.display = "none";
})

newMenu.addEventListener("click", ()=>{
    listSection.style.display = "none";
    newSection.style.display = "block";
    editSection.style.display = "none";

})
