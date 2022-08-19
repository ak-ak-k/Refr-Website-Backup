history.scrollRestoration = "manual"
jQuery(document).ready(function ($) {
    $(function () {
        $('[data-toggle="popover"]').popover({
            container: 'body',
            trigger: 'focus',
            html: true,
            content: function () {
                var content = $(this).attr("data-popover-content");
                return $(content).children(".popover-body").html();
            }
        })
        .data('bs.popover')
        .addClass('my-super-popover');
    });
    
    $(function(){
        $('.infiniteslide#sliderbox1').infiniteslide({
            'speed': 100,
            'direction': 'left',
            'pauseonhover': true,
            'responsive': true,
            'clone': 6
        });
        $('.infiniteslide#sliderbox2').infiniteslide({
            'speed': 100,
            'direction': 'right',
            'pauseonhover': true,
            'responsive': true,
            'clone': 6
        });

        var vids = $("video"); 
        $.each(vids, function(){
            this.controls = false; 
        }); 
        $(vids).autoplay;
        //Loop though all Video tags and set Controls as false
    });

    $("a.menulinks").click(function () {
      $(this).next("ul").slideToggle(250);
      return false;
    });
    
    const isOnScreen = (element) => {
        const w = window,
            elBounds = element.getBoundingClientRect(),
            scrollTop = w.pageYOffset,
            elTop = (elBounds.y + scrollTop) + 300;
    
        return (
            elTop < (w.innerHeight + scrollTop) &&
            elTop > (scrollTop - elBounds.height)
        );
    }

    
    const text = document.querySelectorAll('.content');
    const box = document.querySelectorAll('.work-img');
    const bgwarp = document.querySelector('.how-work');
    
    document.addEventListener('scroll', function() {
        Array.from(text).forEach((el, idx) => {
            debugger;
            if (isOnScreen(el)) {
                box.forEach((el1, idx1) => {
                    bgwarp.id = 'an-banner' + idx;
                    if (idx === idx1) {
                        el1.classList.add("show");
                    } else {
                        el1.classList.remove("show");
                    }
                });
            }
        });
    });

});