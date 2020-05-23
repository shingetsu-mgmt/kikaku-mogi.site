var eco = 0;



$(function(){

  $(document).ready( function(){
    // ページ読み込み時に実行したい処理
    if ($('.wrapper').hasClass('for_index')) {
      var rotation = function (){
        $("#loading").rotate({
          angle:0,
          animateTo:360,
          callback: rotation
        });
      }
      rotation();  
    }


    //開いた画面の高さを取得
    var WindowHeight = $(window).height();
    var WindowWidth = $(window).width();

    var Height = WindowHeight - 70; //WindowHeightは変数で任意の名前
    if (WindowWidth >= 670) {
      $('.wrapper').css({
        'min-height': Height+'px'
      });  
    }
  });

  $(window).on('load',function(){
    $("#black_wall").delay(1000).fadeOut('slow');
    $("#index_contents").delay(1000).fadeIn('slow');
    
  });
  function loaderClose(){
    $("#black_wall").fadeOut('slow');
    $("#index_contents").fadeIn('slow');
  }
  setTimeout(loaderClose,10000);


  $(".header_sp").click(function(){
    $(".menu_sp").fadeIn();
    $(".menu_sp").addClass("sp_menu_active")
  });

  $("#menu_close_btn").click(function(){
    $(".menu_sp").fadeOut();
    $(".menu_sp").removeClass("sp_menu_active");
  });

  $(".faq_list").click(function(){
    var $answer = $(this).find(".faq_answer");
    if($answer.hasClass("faq_open")){
      $answer.removeClass("faq_open");
      $answer.slideUp();
      $(this).find(".op_cl").text("+");
    } else {
      $answer.addClass("faq_open");
      $answer.slideDown();
      $(this).find(".op_cl").text("－");
    }
  });

  $(".apply_campus").click(function(){
    var $apply_process = $(this).find(".apply_process");
    if($apply_process.hasClass("apply_open")){
      $apply_process.removeClass("apply_open");
      $apply_process.slideUp();
      $(this).find(".op_cl").text("+");
    } else {
      $apply_process.addClass("apply_open");
      $apply_process.slideDown();
      $(this).find(".op_cl").text("－");
    }
  });


  $(".news_column").click(function(){
    var $answer = $(this).find(".news_content");
    if($answer.hasClass("news_open")){
      $answer.removeClass("news_open");
      $answer.slideUp();
      $(this).find(".op_cl").text("+");
    } else {
      $answer.addClass("news_open");
      $answer.slideDown();
      $(this).find(".op_cl").text("－");
    }
  });

  $("#select_kikaku").click(function(){
    var $kikaku = $(".apply_kikaku");
    var $mogi = $(".apply_mogi");
    $(".please_select").slideUp();
    $(".please_select_2").slideDown();
    if(!$kikaku.hasClass("active")){
      if($mogi.hasClass("active")){
        $mogi.hide();
        $mogi.removeClass("active");
        $kikaku.show();
        $kikaku.addClass("active");
        $("#select_mogi").css({
          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px'
        });
        $("#select_kikaku").css({
          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      } else {
        $kikaku.slideDown();
        $kikaku.addClass("active");
        $("#select_kikaku").css({
            'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      }
    };
  });

  $("#select_mogi").click(function(){
    var $kikaku = $(".apply_kikaku");
    var $mogi = $(".apply_mogi");
    $(".please_select").slideUp();
    $(".please_select_2").slideDown();
    if(!$mogi.hasClass("active")){
      if($kikaku.hasClass("active")){
        $kikaku.hide();
        $kikaku.removeClass("active");
        $mogi.show();
        $mogi.addClass("active");
        $("#select_kikaku").css(
{          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px',
}        );
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      } else {
        $mogi.slideDown();
        $mogi.addClass("active");
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      }
    };
  });



  $("#select_kikaku").click(function(){
    var $kikaku = $(".faq_kikaku");
    var $mogi = $(".faq_mogi");
    $(".please_select").slideUp();
    if(!$kikaku.hasClass("active")){
      if($mogi.hasClass("active")){
        $mogi.hide();
        $mogi.removeClass("active");
        $kikaku.show();
        $kikaku.addClass("active");
        $("#select_mogi").css({
          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px'
        });
        $("#select_kikaku").css({
          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      } else {
        $kikaku.slideDown();
        $kikaku.addClass("active");
        $("#select_kikaku").css({
            'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px'
        });
      }
    };
  });

  $("#select_mogi").click(function(){
    var $kikaku = $(".faq_kikaku");
    var $mogi = $(".faq_mogi");
    $(".please_select").slideUp();
    if(!$mogi.hasClass("active")){
      if($kikaku.hasClass("active")){
        $kikaku.hide();
        $kikaku.removeClass("active");
        $mogi.show();
        $mogi.addClass("active");
        $("#select_kikaku").css(
{          'background-color':'white',
          'color':'#808080',
          'border':'solid #808080 1px',
}        );
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      } else {
        $mogi.slideDown();
        $mogi.addClass("active");
        $("#select_mogi").css(
{          'background-color':'#def7f9',
          'color':'#1b3988',
          'border':'solid #1b3988 1px',
}        );
      }
    };
  });

  $("#jump_to_difference").click(function(){
    var position = $("#jump").offset().top;
    if($(".menu_sp").hasClass("sp_menu_active")){
      $(".menu_sp").fadeOut();
      $(".menu_sp").removeClass("sp_menu_active");
    };
    $('html,body').animate({
      'scrollTop':position
    },{
      queue : false
    });
  });

  $(".menu_btn").hover(
    function(){
      $(this).animate({
        'background-color':'yellow',
        'color':'black'
      },500);
      $(this).find('.menu_eng').fadeIn();
    },function(){
      $(this).animate({
        'background-color':'black',
        'color':'white'
      },1000);
      $('.menu_eng').fadeOut();
    }
  );

  $(".latest_news").hover(
    function(){
      $(this).animate({
        'background-color':'rgba(255,255,255,0.8)',
        'color':'black'
      },500);
      $(this).find('.menu_eng').fadeIn();
    },function(){
      $(this).animate({
        'background-color':'#CE4444',
        'color':'white'
      },1000);
      $('.menu_eng').fadeOut();
    }
  );

  $("#inquiry_mogi_btn").click(
    function(){
      $('.mail_to_mogi').slideDown();
    }
  );

  $(".campus_btn").hover(
    function(){
      $(this).animate({
        'background-color':'#dcdcdc',
      },500);
    },function(){
      $(this).animate({
        'background-color':'white',
      },500);
    }
  );

  $(".continue_btn").click(function(){
    alert('大学祭基調へ賛同し、学生企画規則へ同意します。')

    $(".continue").slideDown();
    $(this).hide();

  });

  $("#link_eco").click(function(){
    eco = 1;
  });



  $(".continue_2_btn").click(function(){
    if (eco==1) {
      alert('三田エコプロジェクトの内容を参加し、学生企画規則へ同意します。')
      $(".continue_2").slideDown();
      $(this).hide();
    } else {
      alert('三田エコプロジェクトの内容をリンクより確認して下さい。')
    };
  });


  $(".out_of_term").click(function(){
    alert('期間外です。受付期間をご確認ください。')
  });

  $(".photo_big").fadeIn('slow');

  $("#photo_close_btn").click(function(){
    $('.photo_big').fadeOut();
  });

  $('.photo_big_img').click(function(){
    window.location.href = "https://shingetsu-mgmt.github.io/kikaku-mogi.site/covid";
  });




})