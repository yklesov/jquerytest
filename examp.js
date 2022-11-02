//the element selector
// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").hide();
//   });
// });

// the id selector
// $(document).ready(function(){
//   $("button").click(function(){
//     $("#test").hide();
//   });
// });

//the class selector
// $(document).ready(function(){
// 	$("button").click(function(){
// 		$(".test").hide();
// 	});
// });

//dblclick
// $(document).dblclick(function(){
//     $("p").hide();
//   });

//Функция выполняется, когда поле формы получает фокус
// $(document).ready(function(){
//     $("input").focus(function(){
//       $(this).css("background-color", "yellow");
//     });
//     $("input").blur(function(){
//       $(this).css("background-color", "green");
//     });
// });

//hide show function
// $(document).ready(function(){
//     $("#hide").click(function(){
//       $("p").hide();
//     });
//     $("#show").click(function(){
//       $("p").show();
//     });
// });

//toogle function Переключение между скрытием и отображением абзацев
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").toggle();
//     });
//   });

//fadeIn()используется для постепенного появления скрытого элемента.
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeIn();
//       $("#div2").fadeIn("slow");
//       $("#div3").fadeIn(3000);
//     });
//   });

//fadeOut()используется для затемнения видимого элемента.
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeOut();
//       $("#div2").fadeOut("slow");
//       $("#div3").fadeOut(3000);
//     });
//   });

//fadeToggle()переключается между методами fadeIn()и .fadeOut() скрытие и появление
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeToggle();
//       $("#div2").fadeToggle("slow");
//       $("#div3").fadeToggle(3000);
//     });
//   });

//
//slide up
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideUp("slow");
//     });
//   });

//slide down
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideDown("slow");
//     });
//   });

// slide toggle
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });
//   });

//animation влево на 250рх
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({left: '250px'});
//     });
//});

//animation в бок и крупнее
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//       });
//     });
//});

//animation в бок и больше несколько раз
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '250px',
//         height: '+=150px',
//         width: '+=150px'
//       });
//     });
// });

//animation вниз вбок вверх, на место
// $(document).ready(function(){
//     $("button").click(function(){
//       var div = $("div");
//       div.animate({height: '300px', opacity: '0.4'}, "slow");
//       div.animate({width: '300px', opacity: '0.8'}, "slow");
//       div.animate({height: '100px', opacity: '0.4'}, "slow");
//       div.animate({width: '100px', opacity: '0.8'}, "slow");
//     });
// });

//stop sliding
// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideDown(5000);
//     });
//     $("#stop").click(function(){
//       $("#panel").stop();
//     });
// });

//hide and callback
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide("slow", function(){
//         alert("The paragraph is now hidden");
//       });
//     });
// });

//callback and hide
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide(1000);
//       alert("The paragraph is now hidden");
//     });
//   });

//get function text and html
// $(document).ready(function(){
//     $("#btn1").click(function(){
//       alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function(){
//       alert("HTML: " + $("#test").html());
//     });
//   });

//get value function
// $(document).ready(function(){
//     $("button").click(function(){
//       alert("Value: " + $("#test").val());
//     });
//   });

//get attr value
// $(document).ready(function(){
//     $("button").click(function(){
//       alert($("#ytb").attr("href"));
//     });
//   });

//set values
// $(document).ready(function(){
//     $("#btn1").click(function(){
//       $("#test1").text("And now!");
//     });
//     $("#btn2").click(function(){
//       $("#test2").html("<b>Okaaaay!</b>");
//     });
//     $("#btn3").click(function(){
//       $("#test3").val("Morder");
//     });
// });

//add value
// $(document).ready(function(){
//     $("#btn1").click(function(){
//       $("p").append(" <b>Appended text</b>.");
//       //$("p").prepend(" <b>Prepended text</b>."); в начале
//     });   
//     $("#btn2").click(function(){
//       $("ol").append("<li>Appended item</li>");
//       //$("ol").prepend("<li>Prepended item</li>"); в начале
//     });
// });

//add a few values
// function appendText() {
//     var txt1 = "<p>Text.</p>";        // Create text with HTML
//     var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
//     var txt3 = document.createElement("p");
//     txt3.innerHTML = "Text.";         // Create text with DOM
//     $("body").append(txt1, txt2, txt3);   // Append new elements
// }

//add after before
// $(document).ready(function(){
//     $("#btn1").click(function(){
//       $("img").before("<b>Before</b>");
//     });
  
//     $("#btn2").click(function(){
//       $("img").after("<i>After</i>");
//     });
// });

//remove function
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").remove();
//     });
// });

//remove but not all
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").empty();
//     });
// });

//work with cssClasses , add
// $(document).ready(function(){
//     $("button").click(function(){
//       $("h1, h2, p").addClass("blue");
//       $("div").addClass("important");
//     });
// });

//work with cssClasses , remove
// $(document).ready(function(){
//     $("button").click(function(){
//       $("h1, h2, p").removeClass("blue");
//     });
//   });

//work with cssClasses , toggle
// $(document).ready(function(){
//     $("button").click(function(){
//       $("h1, h2, p").toggleClass("blue");
//     });
// });

//show Width and Height, innerWidth and innerHeight, outerWidth and innerHeight
// $(document).ready(function(){
//     $("button").click(function(){
//       var txt = "";
//       txt += "Width of div: " + $("#div1").width() + "</br>";
//       txt += "Height of div: " + $("#div1").height() + "</br>";
//       txt += "InnerWidth of div: " + $("#div1").innerWidth() + "</br>";
//       txt += "OuterWidth of div: " + $("#div1").outerWidth() + "</br>";
//       txt += "InnerHeight of div: " + $("#div1").innerHeight() + "</br>";
//       txt += "OuterHeight of div: " + $("#div1").outerHeight();
//       $("#div1").html(txt);
//     });
// });