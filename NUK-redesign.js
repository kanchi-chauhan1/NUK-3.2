(function () {

    function waitUntil(predicate, success, error) {
        var int = setInterval(function () {
            if (predicate()) {
                clearInterval(int);
                int = null;
                success();
            }
        }, 500);

        setTimeout(function () {
            if (int !== null) {
                clearInterval(int);
                if (typeof (error) === 'function') {
                    error();
                }
            }
        }, 15000);
    }

    function trialContainer () {
        document.querySelector('footer').insertAdjacentHTML('afterend','<div class="free-trial-container-desktop"><div class="container"><div class="free-trial-heading">Get unlimited access, free for one month</div><a href="https://www.thetimes.co.uk/checkout?pc=INTL1MTHFR10" class="free-trial-button">Start your free trial</a></div></div>');
    }
    function revealonScroll () {
        var desktopBar = document.querySelector('.free-trial-container-desktop');
        document.addEventListener('scroll', function () {
            var breakpoint = window.pageYOffset + document.querySelector('.cv-0-2-cta').getBoundingClientRect().top;
            var liveChat = document.querySelector('.LPMimage');
            if (window.pageYOffset >= breakpoint) {
                desktopBar.classList.add("show-bar");
                liveChat.classList.add("change-position");
            }
            else {
                desktopBar.classList.remove("show-bar");
                liveChat.classList.remove("change-position");
            }
        });
    }
    function init() {
        trialContainer();
        revealonScroll();
    }
    waitUntil(function () {
        return document.querySelectorAll('footer').length > 0;
    }, function () {
        init();
    });
}());
