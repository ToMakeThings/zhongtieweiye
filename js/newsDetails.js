$(function(){
	//获取url 参数
	function GetQueryString(name)
	{
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var url_id=GetQueryString("id");
//	判断是否有参数
	if(url_id !=null && url_id.toString().length>0)
	{
	   $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/news/news",
			data:{"id":url_id},
			async:true,
			success:function(data){
				var list="";
				var content=""
				   list='<img src="'+data.data.img+'" alt=""/>'
				    +'<p>'
					+'<span>'+data.data.t_name+'</span><span>标题：'+data.data.title+'</span>'
				    +'</p>'
				 content=data.data.detailed;
			    $("header h3").after(list);
			    $(".navBtnGroup .content").html(content);
			}})
	 
	}
})
