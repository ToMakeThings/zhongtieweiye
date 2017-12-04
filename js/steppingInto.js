$(function(){
	 $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/index/index",
			async:true,
			success:function(data){
				var data=data;
				var list="";
            	list='<p><span>中铁伟业（北京）新技术有限公司</span>'+data.about.about_content+'</p>'
 	         $("section").html(list); 
			}
			})
})
