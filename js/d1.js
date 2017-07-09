/**
 * Created by Administrator on 2016/12/23.
 */
$(function () {
    var a1=$(".header_r").find(".l1");
    a1.hover(function () {
        a1.find("div").show();
    },function () {
        a1.find("div").hide();
    });
    var a2=$("#header").find(".banXin").find(".im_rr");
    var blu=$("#header").find(".im_c1").find(".in1");
    blu.focus(function () {
        $(this).attr("placeholder","")
    });
    blu.blur(function () {
        $(this).attr("placeholder","请输入你要的商品或者店家")
    });
    a2.hover(function () {
        a2.find(".im_a").show();
    },function () {
        a2.find(".im_a").hide();
    })
    var nav =$("#nav").find(".nav1");
    nav.hover(function () {
        nav.parents(".banXin").find(".nav_01").show();
        var nb=nav.find("b");
        nb.css({"position":"absolute","top":"15px","right":"10px","border-style":"dashed dashed solid","border-color":"transparent transparent #fff"})
    },function () {
        nav.parents(".banXin").find(".nav_01").hide();
        var nb=nav.find("b");
        nb.css({"position":"absolute","top":"20px","right":"10px","border-style":"solid dashed dashed","border-color":"#fff transparent transparent"});
    })
    var aBtn = $("#luoBo").find(".an").find("span");
    //alert(aBTtn.length)
    var ul =$("#luoBo").find("ul");
    var ali=ul.find("li");
    var timer=null;
    //alert(ali.length)
    ul.attr("width",ali.eq(0).outerWidth()*ali.length);
    //alert(ul.attr("width"));
    var iN=0;
    aBtn.hover(function () {
        iN= $(this).index()+1;
        tab();
    })
    function tab() {
        aBtn.attr("class","");
        aBtn.eq(iN-1).attr("class","active");
        ul.animate({"left":iN*-1000})
    }
    timer=setInterval(fun,3000);
    function fun() {
        iN++;
        if(iN==aBtn.size()+1){
            ul.css("left",0);
            iN=1;
        }
        tab()
    }
    $("#uu").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(fun,3000);
    })
    $(".an").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(fun,3000);
    })
    var row=$("#content").find(".row");
    var col=row.find(".col-md-6");
    var dli =$("#content").find(".box01_c").find(".ulca").find("li");
    col.each(function () {
        $(this).hover(function () {
            $(this).find(".strategy-item").find(".pp").css("background","rgba(254,254,254,0.2)")
        },function () {
            $(this).find(".strategy-item").find(".pp").css("background","")
        })
    });
    dli.each(function (){
        $(this).hover(function () {
            $(this).children().eq(0).find(".poZcn").show();
            $(this).children().eq(1).animate({"bottom":"0"},100);
        },function () {
            $(this).find(".poZcn").hide();
            $(this).children().eq(1).animate({"bottom":"-65"},100);
        })
    });

    $("#c_nav li").eq(0).click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $("body,html").animate({scrollTop:0},500);
    })
    var _index=0;
    $("#c_nav li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        _index=$(this).index();
        var _top=$("#a"+_index).offset().top;
        //scrollTop滚动到对应高度
        $("body,html").animate({scrollTop:_top},500);
    });

    var n=0;
    $('.titpic').each(function () {
        n++;
        $(this).attr('index',n);
    })
    $(".linkDiv").find("a").attr("href","./size.html")
    var scroll=$("#content").find("#c_nav").offset().top;
    $(window).scroll(function () {
        var scrollTop=$(this).scrollTop();
        // alert($("#c_nav").offset().top);
        if(scrollTop>scroll){
            $("#c_nav").css("position","fixed");
        }else{
            $("#c_nav").css("position","absolute");
            $("#c_nav").find("li").eq(0).addClass("current").siblings().removeClass("current");
        }
        $('.titpic').each(function () {
            if($(document).scrollTop()>=$(this).offset().top-480){
                var index = $(this).attr('index');
                $("#c_nav").find("li").eq(index).addClass("current").siblings().removeClass("current");
            }
        })
    });
})