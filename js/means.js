$(function(){
	 $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/files/index",
			async:true,
			success:function(data){
				var data=data;
				var list="";
				$.each(data.FileList, function(key,val) {
					list+='<ul class="messages">'
         			+'<li>'+val.name+'</li>'
         			+'<li><a href="'+val.src+'">点击下载</a></li>'
         		    +'</ul>'
				});
 			    $("section .group").html(list); 
			}
			})
})
