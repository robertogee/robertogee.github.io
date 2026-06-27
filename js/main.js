//python3 -m http.server

$("#homePage").load("pages/homePage.html", function() {
    gsap.registerPlugin(ScrollTrigger);
setTimeout(() => {
    ScrollTrigger.create({
        trigger: ".hero-content",
        start: "top top",
        onEnter: () => {
            $(".navbar").addClass("white");
        },
        onLeaveBack: () => {
            $(".navbar").removeClass("white");
        }
    });
    ScrollTrigger.refresh();
}, 50);
});

$(document).on("click", ".menu-container", function() {
    $(".menu-overlay").toggleClass("show"),
    $("body").toggleClass("show-overlay")
})