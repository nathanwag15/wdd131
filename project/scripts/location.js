const mainOverview = document.querySelector('#main-overview')
const htmlContent = document.querySelector("title").innerHTML;
const squares = document.querySelector("#squares");
const title = document.querySelector("#title");

const path = window.location.pathname;

const fileName=path.split('/').pop;


console.log(htmlContent)

const osaka = [
    {
        description: "A symbol of Osaka, this historic castle features stunning architecture and beautiful gardens. Originally built in the 16th century, it offers panoramic views from its observation deck and a museum showcasing the castle's history.",
        title: "Osaka Castle",
        image: "https://www.accessible-japan.com/wp-content/uploads/2018/12/4880_osaka-castle-feature.jpg"
    },
    {
        title: "Dotonbori",
        description: "Known for its vibrant nightlife and iconic neon lights, Dotonbori is a bustling entertainment district filled with restaurants, bars, and street food stalls. Don't miss the famous Glico running man sign and the chance to try local delicacies like takoyaki and okonomiyaki.",
        image: "https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2024/07/Dotonbori-1-scaled.jpg?fit=2560%2C1707&ssl=1"
    },
    {
        title: "Shinsaibashi Shopping Arcade",
        description: "This extensive shopping district is lined with a mix of high-end brands, unique boutiques, and traditional shops. The covered arcade is a great place to shop and explore, no matter the weather.",
        image: "https://www.kintetsu.co.jp/foreign/assets/sightseeing/osaka/spot11/images/spot11_pic04.png"
    },
    {
        title: "Universal Studios Japan",
        description: "A must-visit for movie lovers, this popular theme park features attractions based on blockbuster films. Enjoy thrilling rides, immersive experiences, and themed areas like The Wizarding World of Harry Potter.",
        image: "https://osaka.b-cdn.net/wp-content/uploads/2021/06/IMG_1263-1-1200x900.jpg"
    },
    {
        title: "Umeda Sky Building",
        description: "This iconic skyscraper offers a unique design and a stunning rooftop observatory with 360-degree views of the city. The Floating Garden Observatory is a perfect spot to take in the skyline, especially at sunset.",
        image: "https://www.skybldg.co.jp/lang/asset/img/top/mv_bg01.jpg"
    }
]

const tokyo = [
    {
        title: "Shibuya Crossing",
        description: "One of the busiest pedestrian crossings in the world, Shibuya Crossing is an iconic symbol of Tokyo. Experience the vibrant energy as hundreds of people cross from all directions. Nearby, you can visit the famous Hachiko Statue, honoring the loyal dog.",
        image: "https://assets.vogue.com/photos/659db809e0e9934642099815/16:9/w_1280,c_limit/1189690204"
    },
    {
        title: "Tokyo Tower",
        description: "Inspired by the Eiffel Tower, Tokyo Tower is a communications and observation tower offering stunning views of the city from its observation decks. It lights up beautifully at night and has an aquarium and wax museum at its base.",
        image: "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-10/tokyo-tower-vs-tokyo-skytree_4.jpg?itok=YW4EnryU"
    },
    {
        title: "Senso-ji Temple",
        description: "Tokyo's oldest temple, Senso-ji, is located in Asakusa. This historic site features a striking entrance gate, the Kaminarimon, and a bustling shopping street, Nakamise-dori, filled with traditional snacks and souvenirs.",
        image: "https://www.alexisjetsets.com/wp-content/uploads/2019/01/tokyo-sensoji-temple-alexisjetsets-e1547465076859.jpg"
    },
    {
        title: "Meiji Shrine",
        description: "Nestled in a lush forested area, Meiji Shrine is dedicated to Emperor Meiji and Empress Shoken. It offers a serene atmosphere, beautiful walking paths, and traditional Shinto architecture, making it a peaceful retreat in the city.",
        image: "https://www.wamazing.com/media/wp-content/uploads/sites/7/2024/03/pixta_64997891_M-854x569.jpg.webp"
    }
]

const sapporo = [
    {
        title: "Odori Park",
        description: "This long, central park stretches through downtown Sapporo and is famous for hosting the annual Sapporo Snow Festival. It’s a popular spot for events, festivals, and offers beautiful seasonal views, especially during cherry blossom season.",
        image: "https://www.japan-guide.com/g18/5301_01.jpg"
    },
    {
        title: "Sapporo Beer Museum",
        description: "The only beer museum in Japan, this historic site provides insights into the history of Sapporo Beer. You can learn about brewing, see vintage advertisements, and sample a variety of local brews in the beer hall.",
        image: "https://www.planmyjapan.com/wp-content/uploads/2024/05/sapporo-beer-museum-44-1088x800.jpg"
    },
    {
        title: "Mount Moiwa",
        description: "A scenic mountain offering breathtaking panoramic views of Sapporo from its summit. You can take a cable car and then a mini-rail to reach the top, making it a popular spot for both daytime and nighttime city views.",
        image: "https://www.japan-guide.com/g18/5309_01.jpg"
    },
    {
        title: "Hokkaido Shrine",
        description: "Located in Maruyama Park, this Shinto shrine is dedicated to the spirits of Emperor Meiji and other deities. Surrounded by nature, the shrine is especially beautiful during cherry blossom season and attracts visitors for its peaceful atmosphere.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Hokkaido_Jingu.JPG"
    }
]

let count = 0;

function returnLocationItemSquare(location) {
    count++
    console.log(location)
    if (count % 2 === 0) {
        return `
            <div class="square">
                    <div class="image-wrapper">
                        <img src="${location.image}" loading="lazy">
                    </div>
                    <div class="square-text-wrapper">
                        <a href="#mild" name="mild" class="anchor-link">
                            <h1>${location.title}</h1>
                        </a>              
                        <p>${location.description}</p>

                    </div>
                </div>
        `
      } else {
        return `
            <div class="square">
                    <div class="square-text-wrapper">
                        <a href="#mild" name="mild" class="anchor-link">
                            <h1>${location.title}</h1>
                        </a>              
                        <p>${location.description}</p>
                    </div>
                    <div class="image-wrapper">
                        <img src="${location.image}" loading="lazy">
                    </div>
                </div>
        `
      }
      
}

const osakaMap = osaka.map(returnLocationItemSquare);
const tokyoMap = tokyo.map(returnLocationItemSquare);
const sapporoMap = sapporo.map(returnLocationItemSquare);

console.log(osakaMap);
 

if (htmlContent == "Osaka Nihon"){
    title.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://live.staticflickr.com/138/344863774_5d8524610e_3k.jpg')"
    title.style.backgroundSize = "cover";
    title.style.backgroundPosition = "center";
    title.innerHTML = "<h1>Osaka</h1>";
    mainOverview.innerHTML = "<h2>This is Osaka</h2><p>Osaka is Japan’s lively culinary and cultural hub, known for its welcoming locals, street food, and iconic attractions. The vibrant Dotonbori district, with neon lights and street food, captures the city’s bustling energy, while Osaka Castle and Sumiyoshi Taisha Shrine highlight its rich history. Shopping at Shinsaibashi and panoramic views from the Umeda Sky Building offer a modern experience. Visitors can also enjoy Universal Studios Japan and the impressive Osaka Aquarium. Osaka’s unique charm and friendly atmosphere make it a must-visit, with easy access to other Kansai treasures like Kyoto and Nara.</p>";
    squares.innerHTML = osakaMap;
}

else if (htmlContent == "Tokyo Nihon") {
    title.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/originals/f3/ef/5a/f3ef5a77a9ec3d0dad338fb29ccb634a.jpg"
    title.style.backgroundSize = "cover";
    title.style.backgroundPosition = "center";
    title.innerHTML = "<h1>Tokyo</h1>";
    mainOverview.innerHTML = "<h2>This is Toyko</h2><p>Tokyo, Japan's bustling capital, is a vibrant blend of modern innovation and traditional charm. Known for its towering skyscrapers, neon-lit streets, historic temples, and serene parks, Tokyo offers something for everyone. From the iconic Shibuya Crossing and cultural Asakusa temples to high-tech Akihabara and trendy Harajuku, Tokyo is a city of endless exploration.</p>";
    squares.innerHTML = tokyoMap;
}

else if (htmlContent == "Sapporo Nihon") {
    title.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.olympiccities.org/wp-content/uploads/2020/03/City_of_Sapporo_PANORAMA.jpg"
    title.style.backgroundSize = "cover";
    title.style.backgroundPosition = "center";
    title.innerHTML = "<h1>Sapporo</h1>";
    mainOverview.innerHTML = "<h2>This is Sapporo</h2><p>Sapporo, the capital of Japan's northern island of Hokkaido, is known for its stunning seasonal landscapes, vibrant festivals, and culinary delights. Famous for the annual Sapporo Snow Festival, the city transforms into a winter wonderland with intricate ice sculptures. Sapporo also offers delicious seafood, fresh produce, and renowned Sapporo Beer. With attractions like the scenic Odori Park, historic Sapporo Clock Tower, and relaxing hot springs, Sapporo blends natural beauty with urban charm, making it a top destination in Japan.</p>";
    squares.innerHTML = sapporoMap;
}

