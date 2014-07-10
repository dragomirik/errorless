$(function(){
	//Тут має бути код слайдера
	//Здесь должен быть код слайдера
	//Slider code must be here
	$('#isActive .ticket .date .addition').on('click', function(){
		var obj = $(this).parent().parent().next('.additions');
		var visibility = obj.css('display');
		if (visibility == 'none') {
			//open();
			obj.show();
		} else {
			//close();
			obj.hide();	
		}
		return false;
	});
	var open = function (){
		step(-10, -10);
	};
	var close = function (){
		step(10, 10);
	};
	var step = function (d, k){
		alert(d);
		var notd = -d;
		$('.additions .ticket:nth-child(n)').css({ transform: 'perspective(200px) rotateX('+notd+'deg)'});
		$('.additions .ticket:nth-child(2n)').css({ transform: 'perspective(200px) rotateX('+d+'deg)'});
		if (!(d == 0 || d == 90)) {
			step(d + k, k);
		}
	}
});