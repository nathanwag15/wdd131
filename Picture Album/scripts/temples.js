const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const copyrightdate = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastmodified');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

const date = new Date().getFullYear();
console.log(date);
copyrightdate.textContent = date;

const lastModifiedDate = new Date(document.lastModified);
const options = {year:'numeric', month: "long", day:'numeric'};
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString(undefined, options);


lastmodified.textContent =formattedLastModifiedDate;