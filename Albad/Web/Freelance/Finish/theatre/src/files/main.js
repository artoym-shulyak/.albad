// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
  const nameItems = document.querySelectorAll(boxesSelect),
  body = document.querySelector('body');

  nameItems.forEach(item => {

    const select = item,
    selectItem = item.querySelector(boxSelect)

        //	Функционал раскрытия/сворачивания выпадающих списокв
    selectItem.addEventListener('click', e => {
      if (!select.classList.contains('open')) {
        nameItems.forEach(box => {
          box.classList.remove('open');
          box.querySelector(boxSelect).classList.remove('open')
        })
        select.classList.add('open');
        selectItem.classList.add('open');
      } else {
        select.classList.remove('open');
        selectItem.classList.remove('open');
      }
    })

        // Отслеживаем клик по элементам
    select.addEventListener('click', e => {
      const target = e.target;
      if (target && target.tagName === 'LI' && !target.classList.contains('active')) {
        const value = target.innerText;
        try {
          select.querySelector('li.active').classList.remove('active');
        } catch (e) {}
        target.classList.add('active');
        selectItem.innerText = value;
        select.classList.remove('open')
        selectItem.classList.remove('open')
      }
    })

    body.addEventListener('click', e => {
      const target = e.target;
      const targetBody = e.currentTarget; 
      console.log(target)
      if (target !== selectItem && targetBody === body) {
        target.classList.add('active');
        select.classList.remove('open')
        selectItem.classList.remove('open')
        console.log('close')
      } else {

      }

    })
  })
}
try {
  hundleSelect('.repertore__box', '.repertore__value');
} catch(e) {
}


// Swiper page-repertoire
function swiperRepertoire(item) {
  const swiper = new Swiper(item, {
    loop: true,
    speed: 700,
    allowTouchMove: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// Swiper page-repertoire for the mobile
function startSwiperMobile() {
  const lg_small = window.matchMedia("(max-width: 767.98px)").matches;
  const lg_big = window.matchMedia("(min-width: 767.98px)").matches;
  let valid = true;

  if (lg_small && valid) {
    valid = true;
    try {
      swiperRepertoire('.repertore__swiper') 
    } catch(e) {
    }
  }
  if (lg_big) {    valid = false;
}


window.addEventListener("resize", () => {
  const lg_small = window.matchMedia("(max-width: 767.98px)").matches;
  const lg_big = window.matchMedia("(min-width: 767.98px)").matches;
  let valid = true;

  if (lg_small && valid) {
    valid = true;
    swiperRepertoire('.repertore__swiper') 
  }
  if (lg_big) {
    valid = false;
  }
}); 
} 
try {
  startSwiperMobile();
} catch(e) {
}


// Click the button in Icon Right Header 
function hundlerIconheader() {
  const iconHeader = document.querySelector('#icon-header .header__sub-img');
  const box = document.querySelector('#icon-header .header__sub-box');

  iconHeader.addEventListener('click', () => {
    iconHeader.parentElement.classList.toggle('active');
  })

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target != iconHeader && target != box) {
      iconHeader.parentElement.classList.remove('active');
    }
  });
}
try {
  hundlerIconheader()
} catch(e) {
}

// Show list click the button elements in this menu
function hundleElemMenu() {
  const elem = document.querySelector('.menu__li');
  elem.addEventListener('click', () => {
    elem.classList.toggle('active');
  })

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.parentElement != elem) {
      elem.classList.remove('active');
    }
  });
}
hundleElemMenu();


function swiperProduct(item, next, prev) {
  const swiper = new Swiper(item, {
   loop: true,
   speed: 900,
   allowTouchMove: true,
   slidesPerView: 1,
   spaceBetween: 20,
   autoplay: {
    delay: 5000,       
  },
  mousewheel: {
    eventsTarget: ".product__swiper",
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: next,
    prevEl: prev,
  },
});
}
swiperProduct('.product__swiper','.swiper-button-next', '.swiper-button-prev')
swiperProduct('.product__swiper','.product__next', '.product__prev' );

// Swiper for page-performance.html
function swiperPerfomance() {
  const swiper = new Swiper('.performance__swiper', {
    loop: true,
    speed: 900,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 5000,       
    // },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
}
swiperPerfomance();

// Swiper for page-content_information.html
function swiperContentinforamtion(next, prev) {
  const swiper = new Swiper('.theme__swiper', {
    loop: true,
    speed: 900,
    allowTouchMove: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,       
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}
try {
  swiperContentinforamtion('.swiper-button-next', '.swiper-button-prev');
} catch(e) {
}
try {
  swiperContentinforamtion('.theme__next', '.theme__prev');
} catch(e) {
}

// Modal
function modalMail() {
  const modal = document.querySelector('#subscription');
  const open = document.querySelector('#mail');
  const close = modal.querySelector('[data-close]');
  const body = document.querySelector('body');


  open.addEventListener('click', () => {
    modal.classList.add('active');
    body.classList.add('lock');
  })

  close.addEventListener('click', () => {
   modal.classList.remove('active');
   body.classList.remove('lock');
 })

  modal.addEventListener('click', e => {
    const target = e.target;
    if(target === modal) {
      modal.classList.remove('active');
      body.classList.remove('lock');
    }
  }) 
}
modalMail();

// Change text Partners
// Swiper page-repertoire for the mobile
function changeTextPartner() {
  const lg_small = window.matchMedia("(max-width: 767.98px)").matches;
  const lg_big = window.matchMedia("(min-width: 767.98px)").matches;
  let valid = true;

  const partnerTitle = document.querySelector('#partner-title');

  if (lg_small && valid) {
    valid = true;
    partnerTitle.textContent = 'Главный партнер';
  }
  if (lg_big) {    
    valid = false;
    partnerTitle.textContent = 'Главный партнер театра';
  }


  window.addEventListener("resize", () => {
    const lg_small = window.matchMedia("(max-width: 767.98px)").matches;
    const lg_big = window.matchMedia("(min-width: 767.98px)").matches;
    let valid = true;

    if (lg_small && valid) {
      valid = true;
      partnerTitle.textContent = 'Главный партнер';
    }
    if (lg_big) {
      valid = false;
      partnerTitle.textContent = 'Главный партнер театра';
    }
  }); 
} 
changeTextPartner();

// Media query change for page-content_information.html
function settingsContent(){
  // Don-elements
const dates = document.querySelector('#dates'); // has Dates
const themeFooter = document.querySelector('#theme-footer'); // has Name and Button
const themeHead = document.querySelector('#theme-head'); // has Data and Adres (Head content)
const themeTitle = document.querySelector('#theme-title') // Name content
const themePlay = document.querySelector('#theme-play'); // Play the button
const themeArrows = document.querySelector('#theme-arrows'); // Arrows for prev/next/play
const themeAdres = document.querySelector('#theme-adres'); // Adress
const themeInfo = document.querySelector('#theme-info'); // Info
const themeEnd = document.querySelector('#theme-end'); // End Info
const themeBody = document.querySelector('#theme-body'); // Body

// function changeTextPartner() {
const lg_small = window.matchMedia("(max-width: 1199.98px)").matches;
const lg_big = window.matchMedia("(min-width: 1199.98px)").matches;
const md_small = window.matchMedia("(max-width: 991.98px)").matches;
const md_big = window.matchMedia("(min-width: 991.98px)").matches;
let valid = true;

if (lg_small && valid) {
  valid = true;
  themeFooter.prepend(dates);
  themeHead.prepend(themeTitle)
  themeArrows.querySelector('.theme__prev').after(themePlay);
  themeEnd.appendChild(themeInfo)
}
if (lg_big) {    
  valid = false;
  themeHead.prepend(dates)
  themeFooter.prepend(themeTitle)
  themeTitle.after(themePlay)
  themeBody.prepend(themeInfo)
  // themeBody.prepend(themeEnd);
}

if (md_small && valid) {
  valid = true;
  themeFooter.prepend(themePlay)
  themeFooter.prepend(themeAdres)
  console.log(1)
}
if (md_big) {    
  valid = false;
  themeHead.appendChild(themeAdres);
  console.log(0)
}


window.addEventListener("resize", () => {
  const lg_small = window.matchMedia("(max-width: 1199.98px)").matches;
  const lg_big = window.matchMedia("(min-width: 1199.98px)").matches;
  const md_small = window.matchMedia("(max-width: 991.98px)").matches;
  const md_big = window.matchMedia("(min-width: 991.98px)").matches;
  let valid = true;

  if (lg_small && valid) {
    valid = true;
    themeFooter.prepend(dates)
    themeHead.prepend(themeTitle)
    themeHead.appendChild(themePlay);
    themeArrows.querySelector('.theme__prev').after(themePlay);
    themeEnd.appendChild(themeInfo)
  }
  if (lg_big) {
    valid = false;
    themeHead.prepend(dates)
    themeFooter.prepend(themeTitle)
    themeTitle.after(themePlay)
    themeBody.prepend(themeInfo)
  }
  if (md_small && valid) {
    valid = true;
    themeFooter.prepend(themePlay)
    themeFooter.prepend(themeAdres)
    console.log(1)
  }
  if (md_big) {    
    valid = false;
    themeHead.appendChild(themeAdres);
    console.log(0)
  }
}); 
}
try {
  settingsContent()
} catch(e) {}



function swiperTheatre(next, prev) {
const swiper = new Swiper('.theatre__swiper', {
  loop: true,
    speed: 900,
    allowTouchMove: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,       
    },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: next,
    prevEl: prev,
  },

});
}
try {
  swiperTheatre('.swiper-button-next', '.swiper-button-prev');
} catch(e) {
}
try {
  
  swiperTheatre('.theatre__next', '.theatre__prev');
} catch(e) {
}





