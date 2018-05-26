function prepareButton(){
	var button = document.getElementById('button');
	button.setAttribute('onclick','changeStyle()');	
}
function changeStyle(){
	var head = document.getElementsByTagName('head')[0];
	var links = document.getElementsByTagName('link');
	for(var i = 1;i<links.length;i++){
		var link = links[i];
		var href = link.getAttribute('href');
		var num = href.replace(/[^0-9]/ig,"");
		var name = href.substring(13,href.length);
		num = parseInt(num);
		num++;
		if(num>3){
			num = 1;
		}
		href = "styles/plan_"+ num + name;
		var newlink = document.createElement('link');
		newlink.rel = "stylesheet";
		newlink.type = "text/css";
		newlink.href = href;
		head.insertBefore(newlink,link);
		head.removeChild(link);
	}
	switch(num){
		case 1:
			alert("跳往单列布局的简历");
			break;
		case 2:
			alert("跳往双列布局的简历");
			break;
		case 3:
			alert("跳往采用flex布局的简历");
			break;
		default:
			alert("Unbelieveable!"); 
	}
}
window.onload = prepareButton();
