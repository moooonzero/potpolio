$(document).ready(function(){

    $(window).on('scroll',function(){

        var link = $('.navbar a.dot');
        var top = $(window).scrollTop();

        

        $('.sec').each(function(){
            var id = $(this).attr('id');
            var height =$(this).height();
            var offset = $(this).offset().top - 150;

            if(top >= offset && top < offset + height){
                link.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');

                $("#ps span").animate({
                    width:'187.5px'
                },2000),$("#ai span").animate({
                    width:'200px'
                },2000),$("#html span").animate({
                    width:'237.5px'
                },2000),$("#css span").animate({
                    width:'200px'
                },2000),$("#js span").animate({
                    width:'175px'
                },2000);
                    
                
            }

            $('.count-num').each(function() { // .count-num에 각각 적용
                var $this = $(this),
                    countTo = $this.attr('data-count');
                    // $this = 첫번째~세번째 .count-num
                    // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)
                
                $({ countNum: $this.text()}).animate({
                  countNum: countTo 
                  // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
                  // 0에서 countNum이 된다
                },
                {
                  duration: 2000, // 애니메이션이 완료될때까지 걸리는 시간
                  easing:'linear', // 애니메이션 효과 방식
                  step: function() { // 움직임 각 스텝별로 실행될 함수
                    $this.text(Math.floor(this.countNum));
                    // Math.floor -> this.countNum의 값을 정수로 만들어준다
                  },
                  complete: function() { // 움직임이 멈춘 후 실행될 함수
                    $this.text(this.countNum);
                    // this.countNum이 $this의 text값이 된다
                    //alert('finished');
                  }
                });  
            });

            // if(top >= offset && top < offset + height){
            //     $(".sec2 .r_box2 ul li div.ps span").animate({
            //         width:'187.5px'
            //     },500);
            //     return true;
            // }

            // var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            // var bottom_of_window = $(window).scrollTop() + $(window).height();

            // var sct = $(window).scrollTop();
            // var ost = $(this).offset().top;
            // var osb = $(window).height()-$(this).offset().top+ $(this).outerHeight();

            
            
            // if( ost <= sct <= osb ){
            //     $(".sec2 .r_box2 ul li div.ps span").animate({
            //         width:'187.5px'
            //     },500);
            // }


            if(top == 0){
                $(".sec1 .ai").addClass("on");
                $(".sec1 .svg g").addClass("on");
            }else{
                $(".sec1 .ai").removeClass("on");
                $(".sec1 .svg g").removeClass("on");
            }

        });

        

        

    });

    
    































}); 