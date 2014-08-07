$(document).ready(function () {

//    .................... Left Content ..............
    var changeIcons = {
        activeInactive: function (select, active, inactive) {
            $(select).live("click", function () {
                var initVal = $(this).data("init");
//                alert(initVal);
                if (initVal == "0") {

                    var src = $(this).find(".icon .iconImg").attr("src");
                    var newSrc = src.replace(inactive, active);
                    $(this).find(".icon .iconImg").attr({
                        "src": newSrc
                    });
                }
                else if (initVal == "1") {

                    var src = $(this).find(".icon .iconImg").attr("src");
                    var newSrc = src.replace(active, inactive);
                    $(this).find(".icon .iconImg").attr({
                        "src": newSrc
                    });
                }
            })
        }
    };
    changeIcons.activeInactive($(".leftContent .menu .dropDown .head"), "active", "inactive")


    //    .................... Drop down..............
    var dropDown = {
        explore: function (select) {
            $(select).live("click", function () {
                var initVal = $(this).data("init");
                if (initVal == "0") {
                    $(this).data({
                        "init": "1"
                    })
                    $(this).addClass("active");
                    $(this).parent().find(".list").slideDown(300);
                }
                else if (initVal == "1") {
                    $(this).data({
                        "init": "0"
                    });
                    $(this).removeClass("active");
                    $(this).parent().find(".list").slideUp(300);
                }
            })
        }
    };
    dropDown.explore($(".dropDown .head"));


//    .......... tree structure...........

    var folderSign = '<span class="icon"></span><span class="mark"></span>';
    var fileSign = '<span class="single"></span>';

    var i = 0;

    var treeStructure = {
        addFileAndFolderSign: function () {
            $(".menu li .tree li").each(function (e) {

                i++;
                console.log(i + " " + $(this).find("> .content .text").text().trim() + " and length " + $(this).find(" > ul").length);

                if ($(this).find(" > ul").length > 0) {
                    $(folderSign).prependTo($(this).find(" > .content"));
                }
                else {
                    $(fileSign).prependTo($(this).find(" > .content"));
                }
            })
        },
        exploreTree: function (select) {
            $(select).live("click", function (e) {
                e.stopPropagation();
                var initVal = $(this).data("init");
//                alert(initVal);
                if (initVal == "0") {

                    $(this).parent().find("> li").data({
                        "init": "0"
                    }).removeClass("current");

                    $(this).parent().find("> li ul").slideUp(400);

//                    ........ to remove current class on parent slideUp...........
                    $(this).parent().find("> li ul li").removeClass("current");

                    $(this).find("> ul").slideDown(400);

                    $(this).data({
                        "init": "1"
                    }).addClass("current show");
                }
                else if (initVal == "1") {
                    $(this).find("> ul").slideUp(400);
                    $(this).data({
                        "init": "0"
                    }).removeClass("show");
                }


            });
        }
    };
//    treeStructure.addFileAndFolderSign();
//    treeStructure.exploreTree($(".menu li .tree li"));


//    ..................... Tags....................
    var tags = {
        enableDisable: function (select) {
            $(select).click(function () {
                var initVal = $(this).data("init");
//                alert(initVal);
                if (initVal == "0") {
                    $(this).addClass("disable");
                    $(this).data({
                        "init": "1"
                    });
                }
                else if (initVal == "1") {
                    $(this).removeClass("disable");
                    $(this).data({
                        "init": "0"
                    });
                }
            });
        },
        selectAll: function (select) {
            $(select).toggle(function () {
                    $(this).find(".checkBox").addClass("checked");
                },
                function () {
                    $(this).find(".checkBox").removeClass("checked");
                })
        }
    };
//    tags.enableDisable($(".rightContent .tagsMain .tag"));
    tags.selectAll($(".rightContent .tagTitle .selectAll"));

////    ................. middle content Slide......................
//    var contentSlide={
//        middleContent: function(select){
//            $(select).click(function(){
//                $(".contentWrapper .middleContent").animate({
//                    width: "80%"
//                },1000)
//            });
//        }
//    };
//    contentSlide.middleContent($(".middleContent .contentTitle .slideBtn"));

////    ..................... hide and show toggle.......................
//    var toggleSlider={
//        hideShow: function(select){
//            $(select).live("click",function(){
//                var initVal= $(this).data("init");
////                alert(initVal);
//                if(initVal=="0"){
//                    $(this).parents().eq(1).find(".content").slideDown(400);
//                    $(this).data({
//                        "init": "1"
//                    })
//                }
//                else {
//                    $(this).parents().eq(1).find(".content").slideUp(400);
//                    $(this).data({
//                        "init": "0"
//                    })
//                }
//            })
//        }
//    };
//
//    toggleSlider.hideShow($(".extraCont .head .control"));


//    .............. inner content Page...............
    var minMaxInit = 0;
    var innerContent = {
        minMaxContent: function (select) {
            $(select).live("click", function () {
                if (minMaxInit == 0) {
                    $(".contentWrapper .leftContent").animate({
                        left: "-15%"
                    }, 400);
                    $(".contentWrapper .rightContent").animate({
                        right: "-18%"
                    }, 400);
                    $(".contentWrapper .middleContent").animate({
                        width: "100%",
                        left: "0px"
                    }, 400);

                    $(this).find("img").attr({
                        "src": "images/maximizeActiveIcon.png"
                    });
                    $(this).find(".icon").attr({
                        "src": "images/minimizeActiveIcon.png"
                    });

                    minMaxInit = 1;
                }

                else if (minMaxInit == 1) {

                    $(".contentWrapper .leftContent").animate({
                        left: "0"
                    }, 400);
                    $(".contentWrapper .rightContent").animate({
                        right: "0"
                    }, 400);
                    $(".contentWrapper .middleContent").animate({
                        width: "67%",
                        left: "15%"
                    }, 400);
                    $(this).find(".icon").attr({
                        "src": "images/maximizeActiveIcon.png"
                    });
                    minMaxInit = 0;
                }
            })
        }
    };

    innerContent.minMaxContent($(".innerPageContent .backExpand .minAndMax"));

//.................... Initializing grids isotop.......................

    var container = document.querySelector('.contentSections');
// init
    var iso = new Isotope(container, {
        // options
        itemSelector: '.contentSections li',
        layoutMode: 'fitRows'
    });


//    ................... Close or delete Elements...............

    var close = {
        remove: function (select, parentNum, effect) {
            $(select).click(function () {
                if (effect == "slideUp") {
                    $(this).parents().eq(parentNum).slideUp(300, function () {
                        $(this).remove();
                    })
                }
                else if (effect == "fadeOut") {
                    $(this).parents().eq(parentNum).fadeOut(400, function () {
                        $(this).remove();
                    })
                }
            })
        }
    };

    close.remove($(".menu li a .close"), 1, "slideUp");


//............. History Slider ....................

    var containerWid, length, elementWid, slideInit = 0, leftVal;

    var historySlider = {
        createSlider: function (container, elements, slideNum) {
            length = $(container).find(elements).length;
            containerWid = (parseInt(length) / parseInt(slideNum)) * 100;

            $(container).css({
                width: containerWid + "%"
            });

            elementWid = 100 / parseInt(length);
            $(elements).css({
                width: elementWid + "%"
            });

        },

        moveLeft: function (container, select, slideNum) {
            $(select).click(function () {
                if (slideInit > 0) {

                    $(".arrow.right").find("img").css({
                        opacity:"1"
                    })

                    slideInit--;
                    leftVal = (100 / slideNum) * slideInit;
                    $(container).animate({
                        left: "-" + leftVal + "%"
                    }, 300);
                }
                else{
                    $(select).find("img").css({
                        opacity:"0.5"
                    })
                }
                console.log("elementWid " + elementWid + " slideInit " + slideInit + " leftVal " + leftVal);
            })
        },
        moveRight: function (container, select,slideNum) {
            $(select).click(function () {
                if (slideInit < (length - slideNum)) {

                    $(".arrow.left").find("img").css({
                        opacity:"1"
                    })

                    slideInit++;
                    leftVal = (100 / slideNum) * slideInit;
                    $(container).animate({
                        left: "-" + leftVal + "%"
                    }, 300);
                }
                else{
                    $(select).find("img").css({
                        opacity:"0.5"
                    })
                }

                console.log("elementWid " + elementWid + " slideInit " + slideInit + " leftVal " + leftVal);
            })
        },
        addSlide: function (select,container) {
            $(select).click(function () {
                var slideText = $(this).find(".text").text();
                var slide = ' <div class="slide"> <div class="content">' + slideText + '<div class="close"> x</div></div></div>';
                $(slide).prependTo($(container)).hide(0,
                function(){
                    $(this).fadeIn(500);
                });
                historySlider.createSlider($(".historySliderMain .slider .sliderContent"), $(".slide"), 4);
            });
        },
        removeSlide: function(select){
            $(select).live("click",function(){
                $(this).parents().eq(1).fadeOut(800,
                function(){
                    $(this).remove();
                    historySlider.createSlider($(".historySliderMain .slider .sliderContent"), $(".slide"), 4);
                })
            });
        }




    };

//    historySlider.addSlides($(".rightContent .relatedContent .contentList li"))
//    historySlider.removeSlides($(".historySliderMain .slide"))
    historySlider.createSlider($(".historySliderMain .slider .sliderContent"), $(".slide"), 4);
    historySlider.moveLeft($(".historySliderMain .slider .sliderContent"), $(".historySliderMain .arrow.left"), 4);
    historySlider.moveRight($(".historySliderMain .slider .sliderContent"), $(".historySliderMain .arrow.right"), 4);
    historySlider.addSlide($(".rightContent .relatedContent .contentList li"),$(".historySliderMain .slider .sliderContent"));
    historySlider.removeSlide($(".historySliderMain .slide .content .close"));
});

