document.getElementById('next').onclick = function () {
  const widthItem = document.querySelector('.itembestseller-con').offsetWidth;
  document.getElementById('bestseller-con').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.itembestseller-con').offsetWidth;
  document.getElementById('bestseller-con').scrollLeft -= widthItem;
}

document.getElementById('next2').onclick = function () {
  const widthItem = document.querySelector('.itemfreshoff-con').offsetWidth;
  document.getElementById('freshoff-con').scrollLeft += widthItem;
}
document.getElementById('prev2').onclick = function () {
  const widthItem = document.querySelector('.itemfreshoff-con').offsetWidth;
  document.getElementById('freshoff-con').scrollLeft -= widthItem;
}

document.getElementById('next3').onclick = function () {
  const widthItem = document.querySelector('.itemexclusives-con').offsetWidth;
  document.getElementById('exclusives-con').scrollLeft += widthItem;
}
document.getElementById('prev3').onclick = function () {
  const widthItem = document.querySelector('.itemexclusives-con').offsetWidth;
  document.getElementById('exclusives-con').scrollLeft -= widthItem;
}

document.getElementById('next4').onclick = function () {
  const widthItem = document.querySelector('.itemRazer-lastchance-con').offsetWidth;
  document.getElementById('Razer-lastchance-con').scrollLeft += widthItem;
}
document.getElementById('prev4').onclick = function () {
  const widthItem = document.querySelector('.itemRazer-lastchance-con').offsetWidth;
  document.getElementById('Razer-lastchance-con').scrollLeft -= widthItem;
}


const carouselWrapper = document.getElementById('carouselWrapper');
let currentIndex = 0;

function showPage(index) {
  const translateValue = -index * 100 + '%';
  carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
    showPage(currentIndex);
  }
}

function nextPage() {
  if (currentIndex < 5) {
    currentIndex++;
    showPage(currentIndex);
  }
}

const carouselWrapper2 = document.getElementById('carouselWrapper2');
let currentIndex2 = 0;

function showPage2(index2) {
  const translateValue2 = -index2 * 100 + '%';
  carouselWrapper2.style.transform = 'translateX(' + translateValue2 + ')';
}

function prevPage2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
    showPage2(currentIndex2); // Corrected function call
  }
}

function nextPage2() {
  if (currentIndex2 < 2) { // Corrected the max index for the second carousel
    currentIndex2++;
    showPage2(currentIndex2); // Corrected function call
  }
}

