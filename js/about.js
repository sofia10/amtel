var myScreenWidth = $(document).width();

if(myScreenWidth <= 991) {
    $('.down').click(function(){
        $('.menu-items').stop().slideDown("slow");
        $('.content-menu').addClass('active');
    });
    $('.up').click(function(){
        $('.menu-items').stop().slideUp("slow");
        $('.content-menu').removeClass('active');
    });
};

function openModal() {
    document.getElementById('myModal').style.display = "block";
}
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
