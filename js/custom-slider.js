$('.testmonial_slider').owlCarousel({
  loop:true,
  margin:30,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  nav:true,
  responsive:{
    0:{
        items:1
    },
    576:{
        items:2
    },
    768:{
        items:2
    },
    992:{
        items:3
    },
    1200:{
        items:3
    }
  }
});

$('.blogs').owlCarousel({
  loop:true,
  margin:30,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  nav:true,
  responsive:{
    0:{
        items:1,
        nav:false,
    },
    576:{
        items:1,
        nav:false,
    },
    768:{
        items:2
    },
    992:{
        items:3
    },
    1200:{
        items:3
    }
  }
});

$('.driver_slider').owlCarousel({
  loop:true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  nav:true,
  responsive:{
    0:{
        items:1,
        nav:false,
    },
    576:{
        items:2
    },
    768:{
        items:2
    },
    992:{
        items:4
    },
    1200:{
        items:4
    }
  }
});