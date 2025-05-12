AOS.init();


        // 헤더 스크롤
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }

        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('header').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up');
                }
            }
            lastScrollTop = st;
        }



        // 모바일 햄버거 버튼 

        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navMenu.classList.toggle('.m_nav');
            menuToggle.classList.toggle('active'); // 버튼도 X로 토글
        });

        // 모바일 햄버거 버튼 끝


        // 메인 슬라이드

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            navigation: {
                nextEl: ".content1 .swiper-button-next",
                prevEl: ".content1 .swiper-button-prev",
            },
            loop: true,
            breakpoints: {
                // 640: {
                //     slidesPerView: 2,
                //     spaceBetween: 20,
                // },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1320: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
            },
        });


        // 탭메뉴
        $(document).ready(function () {

            $('.tab_button li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('.tab_button li').removeClass('on');
                $('.tab-content').removeClass('on');

                $(this).addClass('on');
                $("#" + tab_id).addClass('on');
            })

        })

        // 모바일 슬라이드 메뉴
        var swiper = new Swiper(".ms", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            navigation: {
                nextEl: ".ms .swiper-button-next",
                prevEl: ".ms .swiper-button-prev",
            },
            loop: true,

        });