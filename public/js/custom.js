jQuery(document).ready(function () {
  $(".btn-close ").click(function () {
    $('.navbar-collapse').removeClass("show");
  });
});
/* Dark Color Theme Change JS Start */
jQuery(document).ready(function(){
	function setTheme(theme) {
		localStorage.setItem('theme', theme); // Changed from sessionStorage to localStorage
	}
	function getTheme() {
		return localStorage.getItem('theme'); // Changed from sessionStorage to localStorage
	}
	function applyStoredTheme() {
		var storedTheme = getTheme();
		if (storedTheme === 'black') {
			jQuery('html').addClass('dark-mode');
			jQuery('.black_bg').addClass('active');
		} else {
			jQuery('html').removeClass('dark-mode');
			jQuery('.black_bg').removeClass('active');
		}
	} 
	// Apply theme on page load
	applyStoredTheme();
	// Toggle theme on button click
	jQuery('.black_bg').click(function() {
		jQuery(this).toggleClass('active');
		jQuery('html').toggleClass('dark-mode');
		if (jQuery('html').hasClass('dark-mode')) {
			setTheme('black');
		} else {
			setTheme('default');
		}
	});
});
/* Dark Color Theme Change JS End */
/* Invert Filter Toggle JS Start */
jQuery(document).ready(function(){
  if(localStorage.getItem('invert-filter') === 'true') {
    $('html').addClass('invert-filter');
    $('.inner_box_acces:nth-child(2)').addClass('active');
  }
  $(".inner_box_acces:nth-child(2)").click(function(){
    $('html').toggleClass("invert-filter");
    $('.inner_box_acces:nth-child(2)').toggleClass("active");
    if($('html').hasClass('invert-filter')) {
      localStorage.setItem('invert-filter', 'true');
    } else {
      localStorage.setItem('invert-filter', 'false');
    }
  });
});
/* Invert Filter Toggle JS End */
/* Saturation Filter Toggle JS Start */
jQuery(document).ready(function(){
  if(localStorage.getItem('saturation-filter') === 'true') {
    $('html').addClass('saturation-filter');
	$('.inner_box_acces:nth-child(3)').toggleClass("active");
  }
  $(".inner_box_acces:nth-child(3)").click(function(){
    $('html').toggleClass("saturation-filter");
	$('.inner_box_acces:nth-child(3)').toggleClass("active");
    if($('html').hasClass('saturation-filter')) {
      localStorage.setItem('saturation-filter', 'true');
    } else {
      localStorage.setItem('saturation-filter', 'false');
    }
  });
});
/* Saturation Filter Toggle JS End */
/* Highlight Links Toggle JS Start */
jQuery(document).ready(function(){
  if(localStorage.getItem('highlight-link') === 'true') {
    $('html').addClass('highlight-link');
	$('.inner_box_acces:nth-child(6)').toggleClass("active");
  }
  $(".inner_box_acces:nth-child(6)").click(function(){
    $('html').toggleClass("highlight-link");
	$('.inner_box_acces:nth-child(6)').toggleClass("active");
    if($('html').hasClass('highlight-link')) {
      localStorage.setItem('highlight-link', 'true');
    } else {
      localStorage.setItem('highlight-link', 'false');
    }
  });
});
/* Highlight Links Toggle JS End */
/* Hide Images Toggle JS Start */
jQuery(document).ready(function(){
  if(localStorage.getItem('hide-img') === 'true') {
    $('html').addClass('hide-img');
	$('.inner_box_acces:nth-child(7)').toggleClass("active");
  }
  $(".inner_box_acces:nth-child(7)").click(function(){
    $('html').toggleClass("hide-img");
	$('.inner_box_acces:nth-child(7)').toggleClass("active");
    if($('html').hasClass('hide-img')) {
      localStorage.setItem('hide-img', 'true');
    } else {
      localStorage.setItem('hide-img', 'false');
    }
  });
});
/* Hide Images Toggle JS End */
/* Default Cursor Toggle JS Start */
jQuery(document).ready(function(){
  if(localStorage.getItem('cursor-size') === 'true') {
    $('html').addClass('cursor-size');
	$('.inner_box_acces:nth-child(8)').toggleClass("active");
  }
  $(".inner_box_acces:nth-child(8)").click(function(){
    $('html').toggleClass("cursor-size");
	$('.inner_box_acces:nth-child(8)').toggleClass("active");
    if($('html').hasClass('cursor-size')) {
      localStorage.setItem('cursor-size', 'true');
    } else {
      localStorage.setItem('cursor-size', 'false');
    }
  });
});
/* Default Cursor Toggle JS End */
/* Font Size Increase And Decrease JS Start */
jQuery(document).ready(function () {
	var $affectedElements = $("p, h1, h2, h3, h4, h5, h6, blockquote, td, th, a, button, span, label, Input, select");
	$("#btn-increase").click(function(){
	  changeFontSize(1);
	})
	$("#btn-decrease").click(function(){
	  changeFontSize(-1);
	})
	function changeFontSize(direction){
		$affectedElements.each( function(){
			var $this = $(this);
			$this.css( "font-size" , parseInt($this.css("font-size"))+direction );
		});
	}
});
/* Font Size Increase And Decrease JS End */
// Header Fixed Window Scroll JS Start
$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('.header_section').addClass('is-sticky');
  }
  else {
    $('.header_section').removeClass('is-sticky');
  }
});
// Header Fixed Window Scroll JS End
/* Sub Menu Open OnClick JS Start */
$(document).ready(function () {
  // Handle first-level (Documents, Reports, etc.)
  $(".nav-item.dropdown > a").click(function (e) {
    e.preventDefault();
    var $submenu = $(this).next("ul");
    var $icon = $(this).find(".material-symbols-outlined");
    if ($submenu.hasClass("opened")) {
      $submenu.removeClass("opened").slideUp(200);
      $icon.removeClass("rotate");
    } else {
      $(".nav-item.dropdown > ul").removeClass("opened").slideUp(200);
      $(".nav-item.dropdown > a .material-symbols-outlined").removeClass("rotate");
      $submenu.addClass("opened").slideDown(200);
      $icon.addClass("rotate");
    }
  });
  // Handle second-level (Publications, Reports, Technical, etc.)
  $(".dropdown-submenu > a.custom_child_menu").click(function (e) {
    e.preventDefault();
    var $submenu = $(this).next("ul");
    var $icon = $(this).find(".material-symbols-outlined");
    if ($submenu.hasClass("opened")) {
      $submenu.removeClass("opened").slideUp(200);
      $icon.removeClass("rotate");
    } else {
      $(this)
        .closest("ul")
        .find("> li > ul.custom-submenu")
        .removeClass("opened")
        .slideUp(200);
      $(this)
        .closest("ul")
        .find("> li > a .material-symbols-outlined")
        .removeClass("rotate");
      $submenu.addClass("opened").slideDown(200);
      $icon.addClass("rotate");
    }
  });
});
/* Sub Menu Open OnClick JS End */
/* News Updates Section JS Start */
jQuery(document).ready(function () {
  var dd = jQuery('.news-updates-ticker').easyTicker({
    direction: 'up',
    easing: 'swing',
    speed: 'slow',
    interval: 5000,
    height: '340px',
    visible: 2,
    mousePause: 1,
    controls: {
      up: '.next',
      down: '.prev'
    }
  }).data('easyTicker');
  // Optional: Manual control via click (ensures consistent behavior)
  jQuery('.next').on('click', function (e) {
    e.preventDefault();
    dd.move('up');
  });
  jQuery('.prev').on('click', function (e) {
    e.preventDefault();
    dd.move('down');
  });
  // Optional: Pause when user hovers over the ticker area
  jQuery('.news-updates-ticker').hover(
    function () { dd.stop(); },
    function () { dd.start(); }
  );
});
/* News Updates Section JS End */
/* Product gallery Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#photo-slider');
  owl.owlCarousel({
    //  stagePadding: 50,
   items: 3.5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 3 }
    }
  });
  jQuery('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon').toggleClass('fa-pause fa-play');
  });
});
/* Product gallery Section JS End */
/* Product gallery Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#video-slider');
  owl.owlCarousel({
   items: 3.5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 3 }
    }
  });
  jQuery('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon').toggleClass('fa-pause fa-play');
  });
});
/* video gallery Section JS End */
/* impact-slider Stories Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#impact-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 1 },
      1199: { items: 1 }
    }
  });
  jQuery('.owl-prev2').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next2').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon').toggleClass('fa-pause fa-play');
  });
});
/* impact-slider Section JS End */

/* Product gallery Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#prd-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 4 },
      1199: { items: 4 }
    }
  });
  jQuery('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon').toggleClass('fa-pause fa-play');
  });
});
/* Product gallery Section JS End */



/* Success Stories Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#success-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 2 },
      1199: { items: 2 }
    }
  });
  jQuery('.owl-prev2').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next2').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause1').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon').toggleClass('fa-pause fa-play');
  });
});
/* Success Stories Section JS End */










/*brand section start here*/
 $(document).ready(function () {
      $("#brand_crosule").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
          // "<button class='owl-prev'><i class='fa fa-chevron-left'></i></button>",
          // "<button class='owl-next'><i class='fa fa-chevron-right'></i></button>"
        ],
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 4
          },
          1000: {
            items: 6
          }
        }
      });
    });
/*brand section end here*/













/* Past Events Section JS Start */
jQuery(document).ready(function () {
  var dd = jQuery('.past-events-ticker').easyTicker({
    direction: 'up',
    easing: 'swing',
    speed: 'slow',
    interval: 5000,
    height: '396px',
    visible: 3,
    mousePause: 1,
    controls: {
      up: '.ticker-next',
      down: '.ticker-prev'
    }
  }).data('easyTicker');
  // Manual controls
  jQuery('.ticker-next').on('click', function (e) {
    e.preventDefault();
    dd.move('up');
  });
  jQuery('.ticker-prev').on('click', function (e) {
    e.preventDefault();
    dd.move('down');
  });
  // Pause / Play toggle
  var isPaused = false;
  jQuery('.ticker-pause').on('click', function (e) {
    e.preventDefault();
    if (isPaused) {
      dd.start(); // resume ticker
      jQuery(this).html('<i class="fa fa-pause"></i>');
    } else {
      dd.stop(); // pause ticker
      jQuery(this).html('<i class="fa fa-play"></i>');
    }
    isPaused = !isPaused;
  });
  // Optional: Pause on hover (independent of pause button)
  jQuery('.past-events-ticker').hover(
    function () { if (!isPaused) dd.stop(); },
    function () { if (!isPaused) dd.start(); }
  );
});
/* Past Events Section JS End */
/* Communities of Practice (CoPs) Section JS Start */
jQuery(document).ready(function () {
  var owl = jQuery('#cops-slider');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1199: { items: 3 }
    }
  });
  jQuery('.owl-prev-cops').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next-cops').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause2').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon2').toggleClass('fa-pause fa-play');
  });
});
/* Communities of Practice (CoPs) Section JS End */
// use tab button on keyboard open menu items 
document.addEventListener("DOMContentLoaded", function () {
  let initialized = false; // Track if dropdown functionality is active

  function isLargeScreen() {
    return window.innerWidth > 992;
  }

  function initializeDropdowns() {
    if (!isLargeScreen()) {
      removeDropdowns();
      return;
    }

    if (initialized) return; // Prevent reinitialization if already set
    initialized = true;

    const navItems = document.querySelectorAll(".nav-item.dropdown");
    const subMenus = document.querySelectorAll(".dropdown-submenu");

    // Function to close all dropdowns
    function closeAllDropdowns() {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
    }

    // Function to close all submenus
    function closeAllSubmenus() {
      document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach((submenu) => {
        submenu.classList.remove("show");
      });
    }

    // Attach event listeners for main dropdowns
    navItems.forEach((item) => {
      let dropdownToggle = item.querySelector(".dropdown-toggle");
      let dropdownMenu = item.querySelector(".dropdown-menu");

      function focusHandler() {
        closeAllDropdowns();
        dropdownMenu.classList.add("show");
      }

      function focusOutHandler(event) {
        if (!item.contains(event.relatedTarget)) {
          dropdownMenu.classList.remove("show");
        }
      }

      function escKeyHandler(event) {
        if (event.key === "Escape") {
          dropdownMenu.classList.remove("show");
          dropdownToggle.focus();
        }
      }

      function shiftTabHandler(event) {
        if (event.key === "Tab" && event.shiftKey) {
          closeAllDropdowns();
        }
      }

      dropdownToggle.addEventListener("focus", focusHandler);
      dropdownMenu.addEventListener("focusout", focusOutHandler);
      dropdownToggle.addEventListener("keydown", escKeyHandler);
      dropdownToggle.addEventListener("keydown", shiftTabHandler);

      // Store event references for later removal
      item.eventHandlers = { focusHandler, focusOutHandler, escKeyHandler, shiftTabHandler };
    });

    // Attach event listeners for submenus
    subMenus.forEach((submenu) => {
      let submenuToggle = submenu.querySelector(".dropdown-toggle");
      let submenuMenu = submenu.querySelector(".dropdown-menu");

      function focusHandler() {
        closeAllSubmenus();
        submenuMenu.classList.add("show");
      }

      function focusOutHandler(event) {
        if (!submenu.contains(event.relatedTarget)) {
          submenuMenu.classList.remove("show");
        }
      }

      function escKeyHandler(event) {
        if (event.key === "Escape") {
          submenuMenu.classList.remove("show");
          submenuToggle.focus();
        }
      }

      function shiftTabHandler(event) {
        if (event.key === "Tab" && event.shiftKey) {
          closeAllSubmenus();
        }
      }

      submenuToggle.addEventListener("focus", focusHandler);
      submenuMenu.addEventListener("focusout", focusOutHandler);
      submenuToggle.addEventListener("keydown", escKeyHandler);
      submenuToggle.addEventListener("keydown", shiftTabHandler);

      // Store event references for later removal
      submenu.eventHandlers = { focusHandler, focusOutHandler, escKeyHandler, shiftTabHandler };
    });
  }

  function removeDropdowns() {
    if (!initialized) return; // Avoid unnecessary execution
    initialized = false;

    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("show");
    });

    // Remove event listeners from main dropdowns
    document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
      if (item.eventHandlers) {
        let { focusHandler, focusOutHandler, escKeyHandler, shiftTabHandler } = item.eventHandlers;
        let dropdownToggle = item.querySelector(".dropdown-toggle");
        let dropdownMenu = item.querySelector(".dropdown-menu");

        dropdownToggle.removeEventListener("focus", focusHandler);
        dropdownMenu.removeEventListener("focusout", focusOutHandler);
        dropdownToggle.removeEventListener("keydown", escKeyHandler);
        dropdownToggle.removeEventListener("keydown", shiftTabHandler);
      }
    });

    // Remove event listeners from submenus
    document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
      if (submenu.eventHandlers) {
        let { focusHandler, focusOutHandler, escKeyHandler, shiftTabHandler } = submenu.eventHandlers;
        let submenuToggle = submenu.querySelector(".dropdown-toggle");
        let submenuMenu = submenu.querySelector(".dropdown-menu");

        submenuToggle.removeEventListener("focus", focusHandler);
        submenuMenu.removeEventListener("focusout", focusOutHandler);
        submenuToggle.removeEventListener("keydown", escKeyHandler);
        submenuToggle.removeEventListener("keydown", shiftTabHandler);
      }
    });
  }

  // Run the script only on large screens
  initializeDropdowns();

  // Reinitialize when window resizes
  window.addEventListener("resize", function () {
    if (isLargeScreen()) {
      initializeDropdowns();
    } else {
      removeDropdowns();
    }
  });
});

// whats new 
const container = document.getElementById('ticker-container');
const track = document.getElementById('ticker-track');
const toggleBtn = document.getElementById('toggleBtn');

let speed = 1;
let paused = false;
let autoPaused = false;
let playing = true;

const items = Array.from(track.children);
const totalItems = items.length;

// Determine if we need to clone for infinite scroll
const shouldClone = totalItems > 2;

// Clone items only if more than 2
if (shouldClone) {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

// Set initial scroll to start from the right (end of the scrollable area)
function setInitialScrollPosition() {
    if (shouldClone) {
        container.scrollLeft = 0;
    } else {
        const maxScroll = track.scrollWidth - container.clientWidth;
        container.scrollLeft = maxScroll > 0 ? maxScroll : 0;
    }
}
setInitialScrollPosition();

// Main scrolling loop (scrolls right to left)
function scrollLoop() {
    if (!paused && playing && totalItems > 0) {
        container.scrollLeft += speed;

        if (shouldClone) {
            // When cloned and half track scrolled, reset
            if (container.scrollLeft >= track.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        } else {
            const maxScroll = track.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = 0;
            }
        }
    }
    requestAnimationFrame(scrollLoop);
}
scrollLoop();

// Auto pause on hover
container.addEventListener('mouseenter', () => autoPaused = true);
container.addEventListener('mouseleave', () => autoPaused = false);

// Update paused state every 100ms
setInterval(() => {
    paused = autoPaused || !playing;
}, 100);

// Scroll Next (manual scroll right ➡ left)
function scrollNext() {
    if (totalItems === 0) return;
    const itemWidth = track.children[0].offsetWidth;
    container.scrollLeft += itemWidth;
}

// Scroll Prev (manual scroll left ➡ right)
function scrollPrev() {
    if (totalItems === 0) return;
    const itemWidth = track.children[0].offsetWidth;
    container.scrollLeft -= itemWidth;

    if (shouldClone && container.scrollLeft <= 0) {
        container.scrollLeft = track.scrollWidth / 2;
    }
}

// Toggle play/pause
// function togglePlayPause() {
//     playing = !playing;
//     toggleBtn.innerHTML = playing ? '⏸' : '▶';
// }

function togglePlayPause() {
    playing = !playing;

    if (playing) {
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Make manual functions globally accessible
window.scrollNext = scrollNext;
window.scrollPrev = scrollPrev;
window.togglePlayPause = togglePlayPause;
// End 

// testmonial 
jQuery(document).ready(function () {
  var owl = jQuery('#testmonial');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      992: { items: 1 },
      1199: { items: 1 }
    }
  });
  jQuery('.owl-prev-testmonial').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  jQuery('.owl-next-testmonial').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Play/Pause toggle works fine
  var isAutoplayPaused = false;
  jQuery('.owl-pause3').on('click', function () {
    if (isAutoplayPaused) {
      owl.trigger('play.owl.autoplay');
    } else {
      owl.trigger('stop.owl.autoplay');
    }
    isAutoplayPaused = !isAutoplayPaused;
    jQuery('.owl-pay-icon3').toggleClass('fa-pause fa-play');
  });
});