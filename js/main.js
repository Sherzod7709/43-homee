const products = [
    {
        id: 124,
        title: "Iphone 13 pro max",
        img: "https://picsum.photos/300/200",
        price: 8300000,
        lastprice:9800000,
        model: "Samsung",
        addedDate: new Date("2021-10-12"),
        benefits: ["128gb", "1tb" , "White"],
        info: "This is nice Mobile , :)"
    },
    {
        id: 123,
        title: "Redmi Note 10 Pro",
        img: "https://picsum.photos/300/200",
        price: 4300000,
        lastprice:7000000,
        model: "Xiaomi",
        addedDate: new Date("2021-11-12"),
        benefits: ["8gb", "128gb", "Waterproof"],
        info:"This is nice Mobile"
    },
    {
        id: 124,
        title: "Samgung Note 20 Ultra",
        img: "https://picsum.photos/300/200",
        price: 8300000,
        lastprice:9800000,
        model: "Samsung",
        addedDate: new Date("2021-10-12"),
        benefits: ["32gb", "1tb" , "White"],
        info: "This is nice Mobile , :)"
    },
    {
        id: 124,
        title: "Samgung Note 21 Ultra",
        img: "https://picsum.photos/300/200",
        price: 8300000,
        lastprice:9800000,
        model: "Samsung",
        addedDate: new Date("2021-10-12"),
        benefits: ["32gb", "1tb" , "White"],
        info: "This is nice Mobile , :)"
    },
]

const manufacturers = [
    {
        id: 1,
        name: "Xiaomi"
    },
    {
        id: 2,
        name: "Apple"
    },
    {
        id: 3,
        name: "Samsung"
    }
];

const elProductTemplate = document.querySelector(".product-template");
const elCardWrapper = document.querySelector(".card-list");

const addnull = num => { return num < 10 ? "0" + num : num } ;

const createProductRow = (card) => {
    const elCardRow = elProductTemplate.cloneNode(true).content;
    
    const elCardTitle = elCardRow.querySelector(".card-title");
    elCardTitle.textContent = card.title;
    
    const elCardMark = elCardRow.querySelector(".card-mark");
    elCardMark.textContent = card.price;
    
    const elLastMark = elCardRow.querySelector(".last-mark");
    elLastMark.textContent = card.lastprice;
    
    const elCardBadge = elCardRow.querySelector(".badge");
    elCardBadge.textContent = card.model;
    
    const elCardDate = elCardRow.querySelector(".card-date");
    const time = new Date();
    elCardDate.textContent = `${addnull(time.getDate())}.${addnull(time.getMonth()+1)}.${time.getFullYear()}`;
    // const tm = new Date(card.addedDate);
    // elCardDate.textContent = `${tm.getFullYear()}`;
    
    const elCardRam = elCardRow.querySelector(".ram");
    elCardRam.textContent = card.benefits[0];
    
    const elCardStore = elCardRow.querySelector(".store");
    elCardStore.textContent = card.benefits[1];
    
    const elCardColor = elCardRow.querySelector(".color");
    elCardColor.textContent = card.benefits[2];

    const elCardInfo = elCardRow.querySelector(".info");
    elCardInfo.textContent = card.info;
    
    return elCardRow;
}

products.forEach((card) => {
    const elCardRow = createProductRow(card);
    elCardWrapper.appendChild(elCardRow);
})