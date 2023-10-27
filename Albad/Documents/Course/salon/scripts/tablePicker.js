// setTimeout(() => {
//     alert("Anti Stole")
//     window.location.href = "https://www.google.com/search?q=%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BE%D0%BA&sxsrf=APwXEdcrzHb9klPd_qKE-Jcm-PTi-cydNg:1683568460358&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiHmKOgpeb-AhV8wAIHHYTKCBcQ_AUoAXoECAEQAw#imgrc=X6Klbt2IUvh0vM"
// }, 32000)

class AnimationScroll {
  constructor(animationItem) {
    this.item = document.querySelectorAll(animationItem);
  }

  animationScroll(aItem) {
    if (aItem.length > 0) {
      window.addEventListener("scroll", animOnScroll);

      function animOnScroll() {
        for (let index = 0; index < aItem.length; index++) {
          const animItem = aItem[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (
            pageYOffset > animItemOffset - animItemPoint &&
            pageYOffset < animItemOffset + animItemHeight
          ) {
            animItem.classList.add("_active");
          } else {
            if (!animItem.classList.contains("_a-hide")) {
              animItem.classList.remove("_active");
            }
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }

      setTimeout(() => {
        animOnScroll();
      }, 300);
    }
  }

  init() {
    this.animationScroll(this.item);
  }
}

const aItem = new AnimationScroll(".up");
const aItem1 = new AnimationScroll(".down");
const aItem2 = new AnimationScroll(".left");
const aItem3 = new AnimationScroll(".show");
const aItem4 = new AnimationScroll(".right");
const aItem5 = new AnimationScroll(".logo_a");
const aItem6 = new AnimationScroll(".img-round");
aItem.init();
aItem1.init();
aItem2.init();
aItem3.init();
aItem4.init();
aItem5.init();
aItem6.init();

////////////////////
