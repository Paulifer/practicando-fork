window.onload = function () {
	var btn = document.getElementById('button-change');
	var txt = document.getElementById('paragraph');
	var btn2 = document.getElementById('magic');
	var txt2 = document.getElementById('text');

	btn.addEventListener('click',function(){
		txt.innerHTML = '<h2> Git y Github te AMAMOS</h2> ';
	})
	btn2.addEventListener('click',function(){
		txt2.classList.add('disappear');
	})
}
//document.getElementById('button-change')