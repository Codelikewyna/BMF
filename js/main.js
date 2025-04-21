jQuery(document).ready(function($) {

	'use strict';
      
      $('#form-submit .date').datepicker({
      });

      var owl = $("#owl-suiteroom");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


      var owl = $("#owl-mostvisited");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 4, //10 items above 1000px browser width
          itemsDesktop : [1000,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });
  
  var owl = $("#owl-mostvisited1");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 4, //10 items above 1000px browser width
          itemsDesktop : [1000,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        
        $('.recommendedgroup > div').hide();
        $('.recommendedgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('recommendedgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })


        $('.weathergroup > div').hide();
        $('.weathergroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('weathergroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});




//WIDGETS
function loadWidget(widgetId, loaderSelector, scriptUrl) {
    // Get the specific widget container and its loader
    const widgetContainer = document.getElementById(widgetId);
    const loader = widgetContainer.querySelector(loaderSelector);

    // Ensure the loader is visible initially
    if (loader) loader.style.display = "flex";

    // Create the script element for the widget
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    // When the script successfully loads
    script.onload = () => {
        if (loader) {
            loader.style.display = "none"; // Hide the loader
        }
        console.log(`${widgetId} loaded successfully.`);
    };

    // If the script fails to load
    script.onerror = () => {
        console.error(`Failed to load widget: ${widgetId}`);
        if (loader) loader.style.display = "flex"; // Hide the loader even on error
    };

    // Append the script to the widget container
    widgetContainer.appendChild(script);
}

// Load widgets for flight, hotel, and taxi
loadWidget(
    'widget-flight',
    '.spinner',
    "https://tp.media/content?trs=364981&shmarker=585487&locale=en&curr=USD&powered_by=false&border_radius=29&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121"
);

loadWidget(
    'widget-hotel',
    '.spinner',
    "https://tp.media/content?currency=usd&trs=364981&shmarker=585487&show_hotels=true&powered_by=false&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=30&no_labels=true&plain=true&promo_id=7873&campaign_id=101"
);

loadWidget(
    'widget-taxi',
    '.spinner',
    "https://c1.travelpayouts.com/content?currency=USD&trs=364981&shmarker=585487&locale=en&from=&to=&country=&powered_by=true&height=400&wtype=false&transfers_limit=10&bg_color=%23f5f5f5&button_color=%23015291&button_font_color=%23ffffff&button_hover_color=%230274da&border_color=%23f9ac1a&input_font_color=%23c8ced4&input_bg_color=%23ffffff&input_label_color=%23c8ced4&icon_bg_color=%23ffffff&icon_arrow_color=%236c7c8c&icon_bg_color_mobile=%23f9ac1a&icon_arrow_color_mobile=%23ffffff&autocomplete_font_color=%23373f47&autocomplete_bg_color=%23ffffff&autocomplete_font_color_active=%23373f47&autocomplete_bg_color_active=%23015291&loader_color=%23f9ac1a&empty_color=%23373f47&info_bg_color=%23fff0cc&info_icon_color=%234a4a4a&info_caption_color=%234a4a4a&class_background=%23ffffff&class_font_color=%23373f47&class_header_color=%236c7c8c&class_button_background=%23015291&class_button_font_color=%23ffffff&class_button_background_hover=%230274da&class_comment_background=%23bfc0c4&class_comment_font=%23bfc0c4&more_background=&more_background_hover=&more_font_color=%230267c1&notification_background=%23f6f1ec&notification_border_color=%23e37f17&notification_color=%23373f47&transfer_background=%23f6f7f8&transfer_background_hover=%23f6f7f8&transfer_font_color=%23373f47&promo_id=2949"
);

loadWidget(
    'widget-esim',
    '.spinner',
    "https://tp.media/content?trs=364981&shmarker=585487&locale=en&powered_by=true&color_button=%23015291&color_focused=%23015291&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=5&plain=true&no_labels=true&promo_id=8588&campaign_id=541"
);

loadWidget(
    'widget-ticket',
    '.spinner',
    "https://c72.travelpayouts.com/content?trs=364981&shmarker=585487&bg_color=%23112266&title=Need%20tickets%3F&title_color=%23ffffff&icon_color=%230077ff&search_text=Search%20by%20artist%2C%20team%2C%20event%2C%20etc...&footer_color=%23ffffff&powered_by=true&promo_id=8505");





//contact form

function send() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value;
    
  var body = "Name: " + name + "%0D%0A%0D%0AMessage: " + message;
  window.location.href = "mailto:contact@budgetingmyflight.com?subject=" + subject + "&body=" + body;
}



//NewsLetter
    document.getElementById('contact').addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevents the default form submission

        let name = document.getElementById('nlName').value;
        let email = document.getElementById('nlEmail').value;

        let audienceId = "6a6d472a85"; 
        let dataCenter = "us9"; // Extracted from your API key

        let url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;

        let data = {
            email_address: email,
            status: "subscribed", 
            merge_fields: {
                FNAME: name
            }
        };

        let apiKey = "ab642acb18e24da8ba08d92405a685dd-us9"; 
        let encodedAuth = btoa(`anystring:${apiKey}`); // Encodes API Key for authentication

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${encodedAuth}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // Converts data to JSON format
        });

        let result = await response.json();

        if (response.ok) {
            alert("Subscription successful! Thank you.");
        } else {
            alert("Error: " + result.detail);
        }
    });