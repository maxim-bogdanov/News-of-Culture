$(function(){

  
  $('.header__nav .list__link').on('click', function() {
    event.preventDefault();

    $('.list__link--active').toggleClass('list__link--active');
    $(this).toggleClass('list__link--active');

    let activeContent = $(this).attr('href');
    $('.main__block--active').toggleClass('main__block--active');
    $(activeContent).toggleClass('main__block--active');

    let elementClick = $(this).attr("href")
    let destination = $(elementClick).offset().top-40;
    $("*").animate({scrollTop: destination}, 1000);
  });

  $('.circle__btn').on('click', function() {
    event.preventDefault();

    let elementClick = $(this).attr("href")
    let destination = $(elementClick).offset().top;
    $("*").animate({scrollTop: destination}, 1300);
  });


  $('.main__item')
  .mouseover(function(){
    $(this).find('.main__item-img').toggleClass('main__item-img--hover');
    $(this).find('.main__item-title').toggleClass('main__item-title--hover');
  })
  .mouseout(function(){
    // $('.main__item-img').toggleClass('main__item-img--hover');
    // $('.main__item-title').toggleClass('main__item-title--hover');
    $(this).find('.main__item-img').toggleClass('main__item-img--hover');
    $(this).find('.main__item-title').toggleClass('main__item-title--hover');
  });
  
 });



