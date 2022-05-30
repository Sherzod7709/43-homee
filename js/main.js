const elProductTemplate = document.querySelector(".product-template");
const elCardWrapper = document.querySelector(".card-list");

const addnull = num => { return num < 10 ? "0" + num : num } ;

const createProductRow = (card) => {
    const elCardRow = elProductTemplate.cloneNode(true).content;
    
    const elCardTitle = elCardRow.querySelector(".card-title");
    elCardTitle.textContent = card.title;
    
    const elCardMark = elCardRow.querySelector(".card-mark");
    elCardMark.textContent = `${card.price}$`;
    
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

    const elDeleteBtn = elCardRow.querySelector('.btn-danger');
    elDeleteBtn.dataset.title = card.title;
    
    return elCardRow;
}

const renderMobile = () => {
    products.forEach((card) => {
        const elCardRow = createProductRow(card);
        elCardWrapper.appendChild(elCardRow);
    })
};
renderMobile();

const elAddMobileForm = document.querySelector('.add-mobile-form');

elAddMobileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const elFormElement = e.target.elements;
    const elInputPhone = elFormElement.productTitle.value.trim();
    const elInputPrice = +elFormElement.price.value.trim();
    const elBenefits = elFormElement.benefits.value.trim();

    if (elInputPhone && elBenefits  && elInputPrice > 0 ) {
        const imag = document.querySelector('.card-img-top')
        const logo = document.querySelector('#productManufacturer')
        const addingMobile = {
            title: elInputPhone,
            img: imag,
            price: `${elInputPrice}`,
            lastprice:"000",
            addedDate: new Date().toISOString,
            model: logo.value,
            benefits: ["Barcha turlari mavjud"],
            info: elBenefits
        }
        products.unshift(addingMobile);
        const newPhone = createProductRow(addingMobile);
        elCardWrapper.prepend(newPhone);
        elAddMobileForm.reset();

    }
});

elCardWrapper.addEventListener("click", (e) => {
    if (e.target.matches('.btn-danger')){
        const clickedBtnText = e.target.dataset.title;
        const clickedBtnIndex = products.findIndex (mobile => {
            return mobile.title === clickedBtnText;
        })
        products.splice(clickedBtnIndex,1)
        elCardWrapper.innerHTML = ``;

        renderMobile();
    }
})