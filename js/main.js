$('.owl-carousel').owlCarousel({
    margin: 15,
    loop: true,
    autoWidth: true,
    items: 7,
    dots: false
});

$(function() {
    toggleNavMobile();
    toggleControlPros();
    sliderEdit();
    profileTab();
    $('#callnotibox').on('click', function() {
        $(this).toggleClass('open')
        $('#noti-box').toggle();
    })
});

$(window).on('resize', function() {
    if ($(window).innerWidth() > 767) {
        $('#nav-icon').removeClass('active');
        $('#mob-nav').removeClass('open');
    }
});

function toggleNavMobile() {
    $(document).on('click', '#nav-icon', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#mob-nav').removeClass('open');
        } else {
            $(this).addClass('active');
            $('#mob-nav').addClass('open');
        }
    });
}

function toggleControlPros() {
    $('#manage-call').on('click', function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $('#managebox').show();
        $('#prosbox').hide();
    });
    $('#pros-call').on('click', function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $('#managebox').hide();
        $('#prosbox').show();
    });
}

function sliderEdit() {
    $('.slider').on('input', function() {
        $(this).parent().next('.count').children('.val').text(this.value).css('left', this.value + '%');
        $(this).siblings('.fill').css('width', this.value + '%');
    });
}

$(".user-link").click(function() {
    $(".sub-nav").toggle();
});

$('#select-training .call').on('click', function(e) {
    e.preventDefault();
    let data = $(this).data('tag');
    $('#select-training .call').removeClass('active');
    $(this).addClass('active');
    $('#select-train-here .train-box').removeClass('d-flex');
    $('#select-train-here .train-box[data-tag="' + data + '"]').addClass('d-flex');
    if ($(window).innerWidth() < 1025)
        $('body').addClass('scrollfix');
});


function profileTab() {
    $('#tab-profile li').on('click', function(e) {
        e.preventDefault();
        let data = $(this).data('tag');
        console.log(data);
        $('#tab-profile li').removeClass('active');
        $(this).addClass('active');
        $('.acc-sec').removeClass('d-flex').addClass('d-none');
        $('.acc-sec[data-tag="' + data + '"]').addClass('d-flex').removeClass('d-none');
    });
}