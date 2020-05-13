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

$('#img1').style.width = (side / 4) + 'px';

$('#start').style.visibility = 'visible';


function goAway(elem) {
	elem.style.opacity = 1;
	let i = 50;
	let timerId = setInterval(() => {
		window.requestAnimationFrame(()=>{
			i -= 2;
			elem.style.opacity -= 0.1;
			elem.style.left = i + '%';
		});
	}, 60);
	setTimeout(() => {
		clearInterval(timerId); 
		elem.style.visibility = 'hidden';
	}, 600);
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
	}, 60);
	setTimeout(() => {
		clearInterval(timerId); 
		elem.style.opacity = 1;
		elem.style.left = '50%';
	}, 600);
}

$('#arrow1').addEventListener('click', () => {
	goAway($('#start'));
	goIn($('#subject-industry'));
  });

for (let i = 1; i <= 5; i+=1){
	$('#sub'+i).addEventListener('click', () => {
		selectItem ('#sub', 5, i);
	});
	$('#ind'+i).addEventListener('click', () => {
		selectItem ('#ind', 5, i);
		
	});
}

selectInfo={};

function selectItem(idFam, number, i) {
	for (let j = 1; j<= number; j++){
		$(idFam+j).style.boxShadow = "white 0 0 5px 0";
	}
	$(idFam+i).style.boxShadow = "white 0 0 25px 0, inset black 0 0 10px 0";
	selectInfo[idFam] = i;
	console.log(selectInfo);
}




