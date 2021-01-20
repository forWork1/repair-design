/*
document.addEventListener("DOMContentLoaded", function(event){
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function (){
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() +10 + bullets.width() + 10)
    bullets.css('left', prev.width() +10)

    new WOW().init();

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 3
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required:"Имя обязательно",
                minlength: "Имя не короче 3 символов"
            }, 
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите ваш Email",
              email: "Введите в формате: name@domain.com"
            }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, спасибо за заявку, мы с вами свяжемся');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
          }
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
       
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });
  
      var btn = $('#button');
  
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
  
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 4
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче четырех букв"
            }, 
            userPhone: "Телефон обязателен",
          }
    });
  
    $('.footer__form').validate({
      errorClass: "invalid",
      rules: {
          // simple rule, converted to {required:true}
          userName: {
              required: true,
              minlength: 4
          },
          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
        messages: {
          userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче четырех букв"
          }, 
          userPhone: "Телефон обязателен",
        }
  });

    $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});