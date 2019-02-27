var first, menu, yPos;
function yScroll(){
	first = document.getElementById('first');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	if(yPos > 150){
		first.style.height = "90px";
		first.style.paddingTop = "4px";
		menu.style.height = "0px";
		$("#img").attr("src", "images/_3D_small_small.png");
		//img.src = "images/_3D_small_small.png";
		first.style.overflow = "hidden";
		$("#my_name").text("Benjamin   Koech");
		$("#tag").text("\"Inspired By Purpose. Driven by Passion\"")
		$("#btn_fb").css("color", "#6200EA");
		btn_twitter.style.color = "#6200EA";
		btn_git.style.color = "#6200EA";
		btn_linkedin.style.color = "#6200EA";
	} else {
		first.style.height = "200px";
		first.style.paddingTop = "5px";
		menu.style.height = "90px";
		$("#img").attr("src", "images/nic_small.png");
		//img.src = "images/nic_small.png";
		$("#my_name").text("");
		$("#tag").text("");
		$("#btn_fb").css("color", "white");
		btn_twitter.style.color = "white";
		btn_git.style.color = "white";
		btn_linkedin.style.color = "white";

	}
}
window.addEventListener("scroll", yScroll);