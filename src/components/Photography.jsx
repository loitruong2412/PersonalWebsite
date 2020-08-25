import React from "react";

import {
  Container, Carousel, CarouselItem, CarouselIndicators
} from "reactstrap";

// core components
import LightFooter from "./LightFooter";

const items = [
  {
    src: require("../assets/img/gallery/bali.jpg"),
    altText: "Bali, Indonesia",
    caption: "Bali, Indonesia"
  },
  {
    src: require("../assets/img/gallery/burma.jpg"),
    altText: "Old Bagan, Burma",
    caption: "Old Bagan, Burma"
  },
  {
    src: require("../assets/img/gallery/cambodia.png"),
    altText: "Phnom Penh, Cambodia",
    caption: "Phnom Penh, Cambodia"
  },
  {
    src: require("../assets/img/gallery/cherry.jpg"),
    altText: "Boston Common, USA",
    caption: "Boston Common, USA"
  },
  {
    src: require("../assets/img/gallery/chicago.jpg"),
    altText: "Chicago, USA",
    caption: "Chicago, USA"
  },
  // {
  //   src: require("../assets/img/gallery/dalat.JPG"),
  //   altText: "Da Lat, Vietnam",
  //   caption: "Da Lat, Vietnam"
  // },
  {
    src: require("../assets/img/gallery/dallas.jpg"),
    altText: "Dallas, USA",
    caption: "Dallas, USA"
  },
  // {
  //   src: require("../assets/img/gallery/foliage.jpg"),
  //   altText: "New Hampshire, USA",
  //   caption: "New Hampshire, USA"
  // },
  {
    src: require("../assets/img/gallery/hongkong.jpg"),
    altText: "HongKong, China",
    caption: "HongKong, China"
  },
  {
    src: require("../assets/img/gallery/indonesia1.jpg"),
    altText: "Bromo, Indonesia",
    caption: "Bromo, Indonesia"
  },
  // {
  //   src: require("../assets/img/gallery/indonesia2.jpg"),
  //   altText: "Ijen, Indonesia",
  //   caption: "Ijen, Indonesia"
  // },
  {
    src: require("../assets/img/gallery/japan.jpg"),
    altText: "Kyoto, Japan",
    caption: "Kyoto, Japan"
  },
  {
    src: require("../assets/img/gallery/montreal.jpg"),
    altText: "Montreal, Canada",
    caption: "Montreal, Canada"
  },
  {
    src: require("../assets/img/gallery/puertorico.jpg"),
    altText: "Puerto Rico, USA",
    caption: "Puerto Rico, USA"
  },
  {
    src: require("../assets/img/gallery/thailand.jpg"),
    altText: "Bangkok, Thailand",
    caption: "Bangkok, Thailand"
  },
];

function Photography() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="page-header clear-filter" filter-color="gray">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/background-photo.JPG") + ")",
          }}
        ></div>
        <Container>
          <div className="content">
            <h3>MY GALLERY</h3>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map(item => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <img src={item.src} alt={item.altText} />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{item.caption}</h5>
                    </div>
                  </CarouselItem>
                );
              })}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-right"></i>
              </a>
            </Carousel>
          </div>
        </Container>
        <LightFooter />
      </div>
    </>
  );
}

export default Photography;
