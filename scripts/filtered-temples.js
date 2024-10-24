const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const copyrightdate = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastmodified');
const albumWrapper = document.querySelector('#album-wrapper');
const heading = document.getElementById('dynamicHeading');

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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 36000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	  },
	  {
		templeName: "Brigham City Utah",
		location: "Brigham City, USA",
		dedicated: "2012, September, 23",
		area: 116642,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
	  },{
		templeName: "Okinawa Japan",
		location: "Okinawa, Japan",
		dedicated: "2023, November, 12",
		area: 12437,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40844.jpg"
	  },
	  {
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, August, 21",
		area: 48480,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-11067.jpg"
	  },
	  
  ];

 

  const templeListDisplay = temples.map(temple => {
		return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
  }).join("");


  document.getElementById('old').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {

		const dateParts = temple.dedicated.split(',');

		const year = dateParts[0].trim();
		if (year < 1900) {
			return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
		}
  }).join("");

  	title = "Old";
	
  	albumWrapper.innerHTML = templeListDisplay
	pageTitle.innerText= title
  });

  document.getElementById('old').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {

		const dateParts = temple.dedicated.split(',');

		const year = dateParts[0].trim();
		if (year < 1900) {
			return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
		}
		
  }).join("");
  	heading.textContent = "Old"
  	albumWrapper.innerHTML = templeListDisplay
  });  

  document.getElementById('new').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {

		const dateParts = temple.dedicated.split(',');

		const year = dateParts[0].trim();
		if (year > 2000) {
			return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
		}
		
  }).join("");
  	heading.textContent = "New"
  	albumWrapper.innerHTML = templeListDisplay
  });  

  document.getElementById('home').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {
		return `
		<figure>
			<h2>${temple.templeName}</h2>
			<p>Location: ${temple.location}</p>
			<p>Dedicated: ${temple.dedicated}</p>
			<p>Size: ${temple.area} sq ft</p>
			<img src=${temple.imageUrl} loading="lazy">		
			
		</figure> `;
		
  }).join("");
  	heading.textContent = "Home"
  	albumWrapper.innerHTML = templeListDisplay
  });

  document.getElementById('large').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {

		if (temple.area > 90000) {
			return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
		}
		
  }).join("");
  	heading.textContent = "Large"
  	albumWrapper.innerHTML = templeListDisplay
  });  

  document.getElementById('small').addEventListener('click', () =>{
	const templeListDisplay = temples.map(temple => {

		if (temple.area < 10000) {
			return `
			<figure>
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Size: ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} loading="lazy">		
                
            </figure> `;
		}
		
  }).join("");
  	heading.textContent = "Small"
  	albumWrapper.innerHTML = templeListDisplay
  });  

  heading.textContent = "Home"
  albumWrapper.innerHTML = templeListDisplay
  