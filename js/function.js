function hideMenu(){
	var a;
	
	a = document.getElementById("menu-box");
	a.style.display="none";
	
	document.getElementById("search-box").style.display="block";
}
function showMenu(){
	document.getElementById("search-box").style.display="none";
	document.getElementById("menu-box").style.display="block";
}