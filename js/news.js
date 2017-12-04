$(function(){
	 $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/news/index",
			async:true,
			success:function(data){
				var data=data;
				var list="";
				$.each(data.total,function(key,val){
					list+='<dl data-id='+val.id+'>'
         				+'<dt><img src="'+val.img+'" alt="" /></dt>'
         				+'<dd>'
         					+'<h3>'+val.title+'</h3>'
         					+'<p class="g-p1">'+val.add_time+'</p>'
         					+'<p class="g-p2">'+val.detailed+'</p>'
         					+'<p class="g-p3"><span><img src="img/more-right@3x.png" alt="" /></span><span><img src="img/more-right@3x.png" alt="" /></span></p>'
         				+'</dd>'
         			+'</dl>'
				})
				$("section .group").html(list); 
				//进入二级页面
			$(".group dl").click(function(){
				   var id=$(this).attr("data-id");
				window.location.href="newsDetails.html?&id="+id;
		    })
			}
			})
	 
})
