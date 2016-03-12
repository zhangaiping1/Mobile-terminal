
if(typeof jQuery == "undefined"){
	document.writeln('<script src="/swt/jquery.js" type="application/javascript" charset="utf-8"></script>');
};
/*/!*底部*!/
document.writeln('<style>#tpw {background: #2a74c1;left: 0;text-align: center;height: 70px; width: 100%;position: fixed;top: 0px;}#tpw img{ width:320px; margin:0 auto;}#bottom{width:100%;position:fixed;bottom:0;left:0}#bottom a{color:#fff;float:left;width:25%; text-align:center;}#bottom li{ background:rgba(3,3,3,0.4); line-height:16px;}#bottom li img{margin-top:15px; width:55px;}#tpw{background:#2a74c1;left:0;text-align:center;height:70px; width:100%; position:fixed; top:0px}</style>');
/!*document.write('<a href="/"><div id="tpw"><img src="images/logo.jpg"></div></a>');*!/

document.writeln('<div id="bottom"><ul><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><li><img src="/swt/images/dh.png"><br>免费呼叫</li></a><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><li ><img src="/swt/images/qq.png"><br>咨询专家</li></a><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><li><img src="/swt/images/yygh.png"><br>预约挂号</li></a><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><li><img src="/swt/images/lylx.png"><br>来院路线</li></a></ul></div>');*/

document.writeln('<div id="s_bottom" class="s_bottom"><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><div class="s_lbtn"><div class="s_limg"><p>电话咨询</p></div></div></a><a href="javascript:void(0);return false;" onclick="openZoosUrl(); return false;"><div class="s_rbtn"><div class="s_rimg"><p>网络预约</p></div></div></a></div>');

document.writeln('<style>.s_bottom {width:100%; height:60px; background-color: rgba(34,35,38,0.4); position: fixed; left:0; bottom: 0; display: none; text-align: center;}.s_lbtn {width:140px; height:40px; background-color: #5bd999;  margin: 10px; border-radius: 7px; display: inline-block; text-align: left;}.s_rbtn {width:140px; height:40px; background-color: #ff9602;  border-radius: 7px; display: inline-block; text-align: left;  margin-top: 10px;}.s_limg {display:inline-block; width:140px; height:30px; margin:5px 10px; background: url("/swt/images/icon1.png") no-repeat; background-size: 30px 30px;}.s_rimg {display:inline-block; width:140px; height:30px; margin:5px 10px; background: url("/swt/images/icon2.png") no-repeat; background-size: 30px 30px;}.s_lbtn p { display: inline-block; margin: 2px 0px 2px 40px; color: white; font-size: 16px;font-weight: normal; font-family: "微软雅黑";}.s_rbtn p {display: inline-block; margin: 2px 0px 2px 40px; color: white; font-size: 16px;font-weight: normal; font-family: "微软雅黑";}</style>');











document.writeln("<style type=\"text/css\">");
document.writeln("#LRfloater0,#LRfloater1{ display: none;}");
document.writeln("#divM{ display: none; position: fixed;z-index: 214748364;}");
document.writeln("#divM {width: 300px;height: 243px; background:url(/swt/images/lan.gif) 0px 0px no-repeat; right: 50%;bottom: 50%;margin-right: -150px;margin-bottom: -35px;}");
document.writeln("#divM a{position:absolute;display: block; width:58px; height:25px;bottom:5px;}");
document.writeln("#divM #divMagb{ right:0px;top:0px; width:20px; height:20px}");
document.writeln("#divM #divMa1{right:80px; bottom:30px; width:140px;height:60px;}");
document.writeln("#divM #divMa2{right:10px; width:140px;height:60px;}");
document.writeln("#divM #divMa3{ width:40px; height:40px; top:25px; right:15px;}");
document.writeln("#LRfloater1,#LRfloater0{display:none;}");
document.writeln("</style>");
document.writeln("<div id=\"divM\">");
document.writeln("	<a id=\"divMa1\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl(); return false;\" title=\"在线咨询\"></a> ");
/*document.writeln("	<a id=\"divMa2\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl(); return false;\" target=\"_self\"></a> ");*/
document.writeln("	<a id=\"divMa3\" href=\"javascript:void(0)\" target=\"_self\" title=\"稍后联系\"></a> ");
document.writeln("</div>");
	setTimeout("openM()",2000);
function openM(){
	$("#divM").fadeIn(1000);
	$("#divM").css("display","block");
}
function openMdivM(){
	$("#divM").fadeIn(1000)
}
$(document).ready(function(){
//如果用户不点击就自动化
	$("#divMagb,#divMa3").click(function(){
		setTimeout("openMdivM()",6000);
		$("#divM").animate({'width':'0','height': '0','right': '0%','bottom': '70%','margin-right':'0px','margin-bottom': '0px'},1000);
		$("#divM").fadeOut(100).delay(6000).animate({'width':'300px','height': '243px','right': '50%','bottom': '50%','margin-right':'-150px','margin-bottom': '-35px'},1000);
		$("#s_bottom").css("display","block");
	});

							  
});


document.writeln('<script language="javascript" src="http://pbt.zoosnet.net/JS/LsJS.aspx?siteid=PBT64380744&float=1&lng=cn"></script>');
