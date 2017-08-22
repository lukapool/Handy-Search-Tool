$(function() { 



});

var win_Array = new Array(); 

function closeTab() {
	for (var i = win_Array.length - 1; i >= 0; i--) {
		win_Array[i].close();
	}
}

function goto() {
	closeTab();
	var key = $('#word').val()
	if (key == null || $.trim(key) == '') return;
	key = $.trim(key)
	win_Array[0] = window.open("https://fanyi.baidu.com/#en/zh/"+key); 
	win_Array[1] = window.open("https://translate.google.cn/?hl=en#en/zh-CN/"+key); 
	win_Array[2] = window.open("https://www.bing.com/dict/search?q="+key); 
}

