/**
 * слайдер карточки товара
 */
if(document.querySelector('.card-product-detailed__dots')) {
    const imgsProduct = document.querySelectorAll('.card-product-detailed__img>img');
    document.querySelector('.card-product-detailed__dots').onclick = (e) => {
        for(let img of imgsProduct) {
            img.style.display = 'none';
            if(img.dataset.number == e.target.dataset.number){
                img.style.display = 'flex';
            }
        }
        let dots = document.querySelectorAll('.dot');
        for(let dot of dots) {
            dot.classList.remove('dot-activ');
        }
        e.target.classList.add('dot-activ');
    }
}

/**
 * модальное окно картинки слайдера
 */
if(document.querySelector('.card-product-detailed__img')) {
    const imgModalForm = document.querySelector('.img-form__img-box>img');
    document.querySelector('.card-product-detailed__img').onclick = (e) => {
        imgModalForm.setAttribute('src', e.target.getAttribute('src'));
        document.querySelector('.img-form').style.display = 'flex';
        document.querySelector('html').classList.add('no-scroll');
    }
}
function formImgClose(){
    document.querySelector('.img-form').style.display = 'none';
    document.querySelector('html').classList.remove('no-scroll');
}

if(document.querySelector('.close__img-form')) {document.querySelector('.close__img-form').onclick = formImgClose;}

/**
 * функции открытия и закрытия модального окна обратной связи
 */
function formOrderOpen(){
    document.querySelector('.modal-background').style.display = 'flex';
    document.querySelector('html').classList.add('no-scroll');
}
function formOrderClose(){
    document.querySelector('.modal-background').style.display = 'none';
    document.querySelector('html').classList.remove('no-scroll');
}

if(document.querySelector('.close-form')) {document.querySelector('.close-form').onclick = formOrderClose;}
if(document.querySelector('.btnOpenForm')) {
    let btnsOpenForm = document.querySelectorAll('.btnOpenForm');
    for(let btnOpenForm of btnsOpenForm) {
        btnOpenForm.onclick = formOrderOpen;
    }
}

/**
 * выбор региона в контактах
 */
if(document.querySelector('.button-contact-region')) {
    document.querySelector('.button-contact-region').onclick = (e) => {
        const btnRegions = document.querySelectorAll('.button-contact-region button');
        for(let btnRegion of btnRegions) {
            btnRegion.style.display = 'none';
        }
        if(document.querySelector('.button-contact-region button')) {
            e.target.style.display = 'block';
        }
    }
}

/**
 * список категорий на странице товаров в мобильном расширении
 */
if(document.querySelector('.products')) {
    document.querySelector('.products').onclick = (e) => {
        const productCards = document.querySelectorAll('.products-cards'),
              productCardsH2 = document.querySelectorAll('.h2-page');
        for(let productCardH2 of productCardsH2) {
            if (productCardH2 == e.target) {
                e.target.classList.toggle("h2-page-mob");
            } else {
                productCardH2.classList.remove("h2-page-mob");
            }   
        }
        for(let productCard of productCards) {
            if(productCard.dataset.number != e.target.dataset.number){
                productCard.classList.remove("products-cards__close");
            }
            if(productCard.dataset.number == e.target.dataset.number){
                productCard.classList.toggle('products-cards__close');
            }
        }      
    }
}