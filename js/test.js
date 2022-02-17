var a = 1;


$(document).ready(function(){
  $("#knopka").mouseover(function(){$("#knopka").css("background-color", "#8e93ec");});
  $("#knopka").mouseleave(function(){$("#knopka").css("background-color", "#6b6ffa");});
});


function otvet()
{
  if (a)
  {
  var sum = 0;
  var value;

  for (var i = 1; i < 31; i++)
  {
    value = $("#ans" + i).is(":checked");
    if (value) {sum++;}
  }

  console.log(sum);
  $("#prav").text("В этом тесте у тебя " + sum + " правильных ответов из 30.");

  if(sum > 15 && sum < 25){
  console.log("средний iq");
  $("#result").text("У вас средний IQ.");
  $("#result").css("color", "#ffd784");
	}

	if(sum >= 25){
  console.log("высокий iq");
  $("#result").text("У вас высокий IQ.");
  $("#result").css("color", "lightgreen");
	}

	if(sum <= 15){
  console.log("низкий iq");
  $("#result").text("У вас низкий IQ.");
  $("#result").css("color", "#a80000");
	}
  $("#prav").show();
  $("#result").show();
  $("#knopka").text("Начать заново");

  a = 0;
  }


  else
  {
  $("#prav").text("Данный тест не рассчитан на анализ очень высоких показателей интеллекта.");
  $("#result").text("Автор теста:  Неумывайченко Максим");
  $("#result").css("color", "#ffe9bc");

  $("#knopka").text("Закончить тест");
  $('html, body').animate({scrollTop:0}, '300');

  $('input:radio').prop('checked', 0);


  a = 1;
  }
}
