function $ (elem) {
	return (document.querySelector(elem));
}

var windowHeight = 0.99 * document.documentElement.clientHeight;
var windowWidth = 0.99 * document.documentElement.clientWidth;
var side;


if (windowHeight > windowWidth) side = windowWidth
else side = windowHeight;

for (let i = 0; i < document.querySelectorAll('.screen').length; i+=1) {
	document.querySelectorAll('.screen')[i].style.width = side + 'px';
	document.querySelectorAll('.screen')[i].style.height = side + 'px';
}

$('h1').style.fontSize = (side / 15) + 'px';
$('h2').style.fontSize = (side / 30) + 'px';
$('#p1').style.fontSize = (side / 15) + 'px';
$('#p2').style.fontSize = (side / 15) + 'px';
$('#p3').style.fontSize = (side / 18) + 'px';
$('#p4').style.fontSize = (side / 13) + 'px';
$('#p4').style.top = "4%";
$('#img1').style.width = (side / 4) + 'px';

$('#start').style.visibility = 'visible';


function goAway(elem) {
	elem.style.opacity = 1;
	let i = 50;
	let o = 1;
	let timerId = setInterval(() => {
		window.requestAnimationFrame(()=>{
			i -= 2;
			o -= 0.1;
			elem.style.opacity = o;
			elem.style.left = i + '%';
		});
		if (o <= 0.2) {
			clearInterval(timerId); 
			elem.style.visibility = 'hidden';
		}
	}, 60);

}

function goIn(elem) {
	elem.style.opacity = 0;
	elem.style.visibility = 'visible';
	let i = 70;
	let o = 0;
	let timerId = setInterval(() => {
		window.requestAnimationFrame(()=>{
			i -= 2;
			o += 0.1
			elem.style.opacity = o;
			elem.style.left = i + '%';
			console.log(o);
		});
		if (o >=0.8) {
			clearInterval(timerId); 
			elem.style.opacity = 1;
			elem.style.left = '50%';
		};
	}, 60);
}

$('#arrow1').addEventListener('click', () => {
	goAway($('#start'));
	goIn($('#subject-industry'));
  });

  $('#arrow2').addEventListener('click', () => {
	goAway($('#subject-industry'));
	goIn($('#support'));
  });


  $('#arrow3').addEventListener('click', () => {
	goAway($('#support'));
	goIn($('#final'));
  });
  $('#arrow2').style.visibility = 'hidden';
  $('#arrow3').style.visibility = 'hidden';


  selectInfo={};

for (let i = 1; i <= 5; i+=1){
	$('#sub'+i).addEventListener('click', () => {
		selectItem ('#sub', 5, i);
		if (selectInfo['#ind'] && selectInfo['#sub']) $('#arrow2').style.visibility = 'visible';

	});
	$('#ind'+i).addEventListener('click', () => {
		selectItem ('#ind', 5, i);
		if (selectInfo['#ind'] && selectInfo['#sub']) $('#arrow2').style.visibility = 'visible';
	});
}

for (let i = 1; i<=24; i+=1) {
	$('#sup'+i).addEventListener('click', () => {
		selectItem ('#sup', 24, i);
		$('#arrow3').style.visibility = 'visible'
	})
}


function selectItem(idFam, number, i) {
	for (let j = 1; j<= number; j++){
		$(idFam+j).style.boxShadow = "white 0 0 5px 0";
	}
	$(idFam+i).style.boxShadow = "white 0 0 25px 0, inset black 0 0 10px 0";
	selectInfo[idFam] = i;
	console.log(selectInfo);
}

function emailForm(){
	var form = document.createElement('form');
	form.action = 'send.php';
	form.method='post';
	$("#final").append(form);
	var input = document.createElement('input');
	input.id = "email-text";
	input.type = 'text';
	input.name = 'email';
	input.placeholder="Укажите ваш email";
	form.append(input);
	var button = document.createElement('input');
	button.type = "submit";
	button.id="email-button";
	button.value = " ";
	form.append(button);
}
emailForm();