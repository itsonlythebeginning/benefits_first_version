(function () {

    let header = document.querySelector(".header")

    window.onscroll = function()  {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active")
        }

        else {
            header.classList.remove("header_active")
        }





    }

}())


let header_burger = document.querySelector(".header_burger")
let header_list = document.querySelector(".header_list")
let header_nav_close = document.querySelector(".header_nav_close")

let header_link = document.querySelectorAll(".header_linkkk")




    header_burger.addEventListener("click", function gucci () {

        header_list.classList.add("header_list_active")

    });


    header_nav_close.addEventListener("click", function () {

        header_list.classList.remove("header_list_active")


    });








(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();

    if (window.innerWidth < 768) {

       for (let i = 0; i <  header_link.length; i++)

       {
           header_link[i].addEventListener("click", function () {

               header_list.classList.remove("header_list_active")

           })
       }



    }





}());










