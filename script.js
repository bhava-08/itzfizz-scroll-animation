// ========================================
// REGISTER GSAP SCROLLTRIGGER
// ========================================

gsap.registerPlugin(ScrollTrigger);


// ========================================
// PAGE LOAD ANIMATION
// ========================================

const timeline = gsap.timeline();

timeline
    .from(".eyebrow", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out"
    })

    .from(".hero h1", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
    }, "-=0.3")

    .from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")

    .from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.3")

    .from(".circle", {
        opacity: 0,
        scale: 0.5,
        rotation: -40,
        duration: 1.2,
        ease: "back.out(1.7)"
    }, "-=0.8");


// ========================================
// SCROLL-DRIVEN HERO ANIMATION
// ========================================

gsap.to(".circle", {

    x: 300,

    y: 180,

    rotation: 360,

    scale: 1.35,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


// ========================================
// HERO CONTENT SCROLL ANIMATION
// ========================================

gsap.to(".hero-content", {

    y: -120,

    opacity: 0.2,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


// ========================================
// SCROLL INDICATOR
// ========================================

gsap.to(".scroll-indicator", {

    opacity: 0,

    y: 20,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "20% top",

        scrub: true

    }

});


// ========================================
// SECOND SECTION ANIMATION
// ========================================

gsap.from(".content-box", {

    opacity: 0,

    y: 80,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".content-section",

        start: "top 70%",

        toggleActions: "play none none reverse"

    }

});