const copyrightdate = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastmodified');
const selectElement = document.getElementById('product');



const date = new Date().getFullYear();
console.log(date);
copyrightdate.textContent = date;

const lastModifiedDate = new Date(document.lastModified);
const options = {year:'numeric', month: "long", day:'numeric'};
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString(undefined, options);

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const productListDisplay = `<option value="" disabled selected>Choose a Product ...</option>` + products.map(product => {
  const option=`<option value=${product.id}>${product.name}</option>`
  return option;
}).join("");

selectElement.innerHTML = productListDisplay;



lastmodified.textContent =formattedLastModifiedDate;