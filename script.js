if(document.querySelector('#dotProdImg1')) {
    document.querySelector('#dotProdImg1').onclick = () => {
        document.querySelector('#ProdImg1').style.display = 'flex';
        document.querySelector('#ProdImg2').style.display = 'none';
        document.querySelector('#ProdImg3').style.display = 'none';
        let dots = document.querySelectorAll('.dot');
        for(let dot of dots) {
            console.log(dot);
            dot.classList.remove('dot-activ');
        }
        document.querySelector('#dotProdImg1').classList.add('dot-activ');
    }
}
if(document.querySelector('#dotProdImg2')) {
    document.querySelector('#dotProdImg2').onclick = () => {
        document.querySelector('#ProdImg1').style.display = 'none';
        document.querySelector('#ProdImg2').style.display = 'flex';
        document.querySelector('#ProdImg3').style.display = 'none';
        let dots = document.querySelectorAll('.dot');
        for(let dot of dots) {
            console.log(dot);
            dot.classList.remove('dot-activ');
        }
        document.querySelector('#dotProdImg2').classList.add('dot-activ');
    }
}
if(document.querySelector('#dotProdImg3')) {
    document.querySelector('#dotProdImg3').onclick = () => {
        document.querySelector('#ProdImg1').style.display = 'none';
        document.querySelector('#ProdImg2').style.display = 'none';
        document.querySelector('#ProdImg3').style.display = 'flex';
        let dots = document.querySelectorAll('.dot');
        for(let dot of dots) {
            console.log(dot);
            dot.classList.remove('dot-activ');
        }
        document.querySelector('#dotProdImg3').classList.add('dot-activ');
    }
}

function formOrderOpen(){
    document.querySelector('.modal-background').style.display = 'flex';
    document.querySelector('html').classList.add('no-scroll');
}
function formOrderClose(){
    document.querySelector('.modal-background').style.display = 'none';
    document.querySelector('html').classList.remove('no-scroll');
}
if(document.querySelector('.close-form')) {document.querySelector('.close-form').onclick = formOrderClose;}
if(document.querySelector('#btnOpenForm1')) {document.querySelector('#btnOpenForm1').onclick = formOrderOpen;}
if(document.querySelector('#btnOpenForm2')) {document.querySelector('#btnOpenForm2').onclick = formOrderOpen;}
if(document.querySelector('#btnOpenForm3')) {document.querySelector('#btnOpenForm3').onclick = formOrderOpen;}

if(document.querySelector('#btnNovochercask')) {
    document.querySelector('#btnNovochercask').onclick = () => {
        document.querySelector('.region-novochercask').style.display = 'block';
        document.querySelector('.region-georgievsk').style.display = 'none';
        document.querySelector('#btnNovochercask').classList.add('act-btn-contact-region');
        document.querySelector('#btnGeorgievsk').classList.remove('act-btn-contact-region');
    }
}
if(document.querySelector('#btnGeorgievsk')) {
    document.querySelector('#btnGeorgievsk').onclick = () => {
        document.querySelector('.region-novochercask').style.display = 'none';
        document.querySelector('.region-georgievsk').style.display = 'block';
        document.querySelector('#btnGeorgievsk').classList.add('act-btn-contact-region');
        document.querySelector('#btnNovochercask').classList.remove('act-btn-contact-region');
    }
}

if(document.querySelector('.products')) {
    let electrodesBtn = document.querySelector('.electrodesBtn'),
        wireBtn = document.querySelector('.wireBtn'),
        rodsBtn = document.querySelector('.rodsBtn');

    electrodesBtn.onclick = () => {
        let electrodesCards = document.querySelector('.electrodesCards');
    
        electrodesCards.classList.toggle('products-cards__close');
        electrodesBtn.classList.toggle('h2-page-mob');
    }
    wireBtn.onclick = () => {
        let wireCards = document.querySelector('.wireCards');
    
        wireCards.classList.toggle('products-cards__close');
        wireBtn.classList.toggle('h2-page-mob');
    }
    rodsBtn.onclick = () => {
        let rodsCards = document.querySelector('.rodsCards');
    
        rodsCards.classList.toggle('products-cards__close');
        rodsBtn.classList.toggle('h2-page-mob');
    }
}
