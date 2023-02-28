hljs.initHighlightingOnLoad();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
            });
        });
    });

    let hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
        nav = document.querySelector(".navList");
        nav.classList.toggle("active")
    }

    let html = document.getElementById("card-html");
    html.onmouseover = function() {
        document.getElementById("text-html").innerHTML = "Vanilla HTML"
    }
    html.onmouseleave = function() {
        document.getElementById("text-html").innerHTML = "HTML"
    }

    let css = document.getElementById("card-css");
    css.onmouseover = function() {
        document.getElementById("text-css").innerHTML = "Vanilla CSS"
    }
    css.onmouseleave = function() {
        document.getElementById("text-css").innerHTML = "CSS"
    }

    let js = document.getElementById("card-js");
    js.onmouseover = function() {
        document.getElementById("text-js").innerHTML = "JS Libraries"
    }
    js.onmouseleave = function() {
        document.getElementById("text-js").innerHTML = "JavaScript"
    }


    const scrollPage = () => {
        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;
    
      return (docST + bodyST) / (docSH - docCH) * 100
    }
    window.onscroll = () => {
        codeAnimation.seek((scrollPage() / 30) * codeAnimation.duration);
        textAnimation.seek((scrollPage() / 30) * textAnimation.duration);
        lineAnimation.seek((scrollPage() / 62) * lineAnimation.duration);
        staggerCard.seek((scrollPage() / 35) * staggerCard.duration);
        accorWrap1.seek((scrollPage() / 65) * accorWrap1.duration);
        accorWrap2.seek((scrollPage() / 65) * accorWrap2.duration);
        gitContent.seek((scrollPage() / 130) * gitContent.duration);
    };

    let typed = new Typed(".auto-type", {
        strings: ["Prototyping", "Coding", "Debugging"],
        typeSpeed: 140,
        backSpeed: 30,
        backDelay: 2000,
        cursorChar: "_",
        loop: true
    })
    let typed2 = new Typed(".auto-type2", {
        strings: ["CODE", "PROJECT", "PROTO", "REPO"],
        typeSpeed: 120,
        backSpeed: 50,
        delay: 1500,
        cursorChar: "|",
        smartBackspace: true,
        loop: true
    })
    const svgLeft = anime({
        targets: '#svg-left',
        translateX: [0, 180, 0],
        duration: 2000,
        autoplay: true,
        easing: 'easeInOutElastic',
        delay: 600,
        loop: true
    });
    const svgRight = anime({
        targets: '#svg-right',
        translateX: [0, -180, 0],
        duration: 2000,
        autoplay: true,
        easing: 'easeInOutElastic',
        delay: 600,
        loop: true
    });
    const codeAnimation = anime({
        targets: 'code',
        scale: 1,
        translateX: [-100, 0],
        elasticity: 1000,
        easing: 'easeInOutQuart',
        autoplay: false,
        opacity: [0,3]
    });
    const textAnimation = anime({
        targets: '.code-h2',
        scale: 1,
        translateX: [100, 0],
        elasticity: 1000,
        easing: 'easeInOutQuart',
        autoplay: false,
        opacity: [0,3]
    });
    const lineAnimation = anime({
        targets: '.tech-line',
        width: ['0%','73%'],
        easing: 'easeInOutQuart',
        direction: 'alternate',
        autoplay: false,
    });
    const staggerCard = anime({
        targets: '.ct-card .card',
        translateY: [180, 0],
        easing: 'easeInCubic',
        opacity: [0,1],
        delay: anime.stagger(100)
    });
    const accorWrap1 = anime({
        targets: '.faq-flex .accordion',
        translateY: [180, 0],
        easing: 'easeInCubic',
        opacity: [0,1],
        delay: anime.stagger(100)
    })
    const accorWrap2 = anime({
        targets: '.faq-flex2 .accordion',
        translateY: [180, 0],
        easing: 'easeInCubic',
        opacity: [0,1],
        delay: anime.stagger(100)
    })
    const gitContent = anime({
      targets: '.gitContent',
      translateX: [200, 0],
      easing: 'easeInOutQuart',
      autoplay: false,
    })