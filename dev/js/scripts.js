
var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;


function mouseClick(){

    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);



//smooth scroll//
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


    var lastScrollTop = 0;
        header = document.getElementById("header");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document
            .documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            header.style.top="-100px";
        } else {
            header.style.top="0";
        }
        lastScrollTop = scrollTop;
    })


    // var lastpos = 0;

    // document.addEventListener('scroll',function(){
            
    //     let pos = document.documentElement.scrollTop || document.body.scrollTop;
    //     let windowHeight = document.documentElement.clientHeight || window.innerHeight;
    //     let sHeight = document.documentElement.scrollHeight;
    //     let pWidth = ((pos/(sHeight-windowHeight))*100);
            
    //     let top = document.getElementById('header');
    //     let percent = document.getElementById('header');
            
    //     if (pos>top.clientHeight && (pos>=sHeight-windowHeight-100 || lastpos<=pos)){
    //         top.style.top = (-top.clientHeight)+'px';
    //     }else{
    //         top.style.top = 0;
    //     }
    
    //     lastpos = pos;
            
    // },true);