export default function deleteMovePages() {
    const swiper = document.querySelector('.swiper-wrapper');
    while (swiper.firstChild) {
        swiper.removeChild(swiper.firstChild);
    }
}