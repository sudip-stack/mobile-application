// // Responsive Nav
// $(function () {
//     let menu = $("nav ul");
    
//     // Toggle menu on click and apply fade effect
//     $("#openup").on("click", function (e) {
//       e.preventDefault();
//       menu.slideToggle(500, function() {
//         // Callback function to fade in/out after the slide
//         if (menu.is(":visible")) {
//           menu.fadeIn(300);
//         } else {
//           menu.fadeOut(300);
//         }
//       });
//     });
    
//     // Window resize event to stop the current animation and reset styles
//     $(window).resize(function () {
//       var w = $(this).width();
//       if (w > 480 && menu.is(":hidden")) {
//         menu.removeAttr("style").stop(true, true);  // Stop current animation
//       }
//     });
  
//     // Close menu after clicking on a menu item (for small screens)
//     $("nav li").on("click", function (e) {
//       var w = $(window).width();
//       if (w < 480) {
//         menu.slideToggle(500);
//       }
//     });
  
//     // Make the menu background fill the window height
//     $(".open-menu").height($(window).height()).fadeIn(300);
  
//     // Smooth scrolling for navigation links with animation and stop to prevent conflicting animations
//     $(".cf a").on("click", function (event) {
//       if (this.hash !== "") {
//         event.preventDefault();
    
//         const hash = this.hash;
    
//         $("html, body").stop(true, true).animate(
//           {
//             scrollTop: $(hash).offset().top,
//           },
//           800,
//           function () {
//             window.location.hash = hash;
//           }
//         );
//       }
//     });
  
//     // Adding chaining effects: Hide, then fadeIn the text after 1 second
//     $("#showcase h1").hide().delay(1000).fadeIn(1000);
  
//     // Hide/show the paragraph in the entertainment section with a slide effect when clicking a button
//     $(".btn-secondary").on("click", function() {
//       $("#entertainment .container p").slideToggle(500, function() {
//         // Callback to animate text color change after sliding
//         $(this).css("color", "#ff0");
//       });
//     });
  
//     // Callback with chaining: Apply multiple effects
//     $("#showcase h2").fadeOut(1000).fadeIn(1000).animate({
//       fontSize: "2.5rem"
//     }, 500);
//   });
  
// Responsive Nav
$(function () {
    let menu = $("nav ul");
  
    // Toggle menu on click and apply fade effect
    $("#openup").on("click", function (e) {
      e.preventDefault();
      menu.slideToggle(500, function () {
        // Callback function to fade in/out after the slide
        if (menu.is(":visible")) {
          menu.fadeIn(300);
        } else {
          menu.fadeOut(300);
        }
      });
    });
  
    // Window resize event to stop the current animation and reset styles
    $(window).resize(function () {
      var w = $(this).width();
      if (w > 480 && menu.is(":hidden")) {
        menu.removeAttr("style").stop(true, true);  // Stop current animation
      }
    });
  
    // Close menu after clicking on a menu item (for small screens)
    $("nav li").on("click", function (e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle(500);
      }
    });
  
    // Make the menu background fill the window height
    $(".open-menu").height($(window).height()).fadeIn(300);
  
    // Smooth scrolling for navigation links with animation and stop to prevent conflicting animations
    $(".cf a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").stop(true, true).animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  
    // Adding chaining effects: Hide, then fadeIn the text after 1 second
    $("#showcase h1").hide().delay(1000).fadeIn(1000);
  
    // Hide/show the paragraph in the entertainment section with a slide effect when clicking a button
    $(".btn-secondary").on("click", function () {
      $("#entertainment .container p").slideToggle(500, function () {
        // Callback to animate text color change after sliding
        $(this).css("color", "#ff0");
      });
    });
  
    // Callback with chaining: Apply multiple effects
    $("#showcase h2").fadeOut(1000).fadeIn(1000).animate(
      {
        fontSize: "2.5rem",
      },
      500
    );
  
    // Toggle visibility of the footer with a slide and fade effect
    $("footer .footer-btn").on("click", function () {
      $("footer").stop(true, true).slideToggle(600, function () {
        // Callback to animate opacity change
        if ($(this).is(":visible")) {
          $(this).fadeTo(300, 1); // Fade to 100% opacity when visible
        } else {
          $(this).fadeTo(300, 0.5); // Fade to 50% opacity when hidden
        }
      });
    });
  
    // Hover effect on navigation links: Slide up and change color
    $("nav a").hover(
      function () {
        $(this).stop(true, true).slideUp(200).animate({ color: "#ff6347" }, 400); // Slide up and change color
      },
      function () {
        $(this).stop(true, true).slideDown(200).animate({ color: "#fff" }, 400); // Slide down and reset color
      }
    );
  
    // Toggle visibility of a section with a fade effect when button clicked
    $(".toggle-btn").on("click", function () {
      $(".section-to-toggle").fadeToggle(500);
    });
  
    // Apply an animation with a delay: Slide in an element from the left
    $(".animated-section").hide().delay(1000).animate(
      {
        left: "0px",
        opacity: 1,
      },
      800
    );
  
    // Scroll to the top of the page with a fade effect when clicking a "Back to Top" button
    $(".back-to-top").on("click", function () {
      $("html, body").stop(true, true).animate(
        {
          scrollTop: 0,
        },
        600,
        function () {
          // Callback to fade in after scroll is complete
          $(".back-to-top").fadeOut(200);
        }
      );
    });
  
    // Add an effect for a special highlight section with a bounce effect
    $(".highlight-section").on("click", function () {
      $(this).stop(true, true).animate({ left: "+=10px" }, 100).animate({ left: "-=10px" }, 100); // Bounce effect
    });
  });
