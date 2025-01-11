export function featuredProperties() {
    fetch('./assets/properties.json')
    .then(response => response.json())
    .then(data => {
        const carouselOuter = document.querySelector('.carousel-inner');
        const keys = Object.keys(data)
        let carouselItem = null;
        for (var i = 0; i < 5; i++)
            {
                carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (i === 0) {
                    carouselItem.classList.add('active');
                }
                carouselItem.innerHTML = `
                <a href="pages/propertyDetail.html?id=${data[keys[i]].id}">
                    <div class="card">
                        <div class="img-wrapper"><img src="${data[keys[i]].pictures[0]}" class="card-img-top" alt="..."></div>
                        <div class="card-body">
                            <h5 class="card-title">${data[keys[i]].location}</h5>
                            <p class="card-text">${data[keys[i]].features[0]}, ${data[keys[i]].features[1]}</p>
                        </div>
                    </div>
                </a>
                `
                carouselOuter.appendChild(carouselItem);
            }
            handleCarousel();
            window.addEventListener("load", handleCarousel);
            window.addEventListener("resize", handleCarousel);
        })
    // handle carousel logic
    function handleCarousel () {
        var multipleCardCarousel = document.querySelector("#carouselExample");
        if (window.matchMedia("(min-width: 768px)").matches) {
            var carousel = new bootstrap.Carousel(multipleCardCarousel, {
                interval: false,
            });
            multipleCardCarousel.classList.remove("slide");
            var carouselInner = document.querySelector(".carousel-inner");
            var carouselItems = document.querySelectorAll(".carousel-item");
            var carouselWidth = carouselInner.scrollWidth;
            var cardWidth = carouselItems[0].offsetWidth;
            var scrollPosition = 0;

            document.querySelector("#carouselExample .carousel-control-next").addEventListener("click", function () {
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    scrollPosition += cardWidth;
                    carouselInner.scrollTo({
                        left: scrollPosition,
                        behavior: "smooth"
                    });
                }
            });

            document.querySelector("#carouselExample .carousel-control-prev").addEventListener("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    carouselInner.scrollTo({
                        left: scrollPosition,
                        behavior: "smooth"
                    });
                }
            });
        } else {
            multipleCardCarousel.classList.add("slide");
        }
    }
}