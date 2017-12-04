$(function(){
	 $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/position/index",
			async:true,
			success:function(data){
				var data=data;
				var list="";
				$.each(data.PositionList, function(key,val) {
					 list+='<div class="group">'
         			+'<div class="title">'
         				+'<span class="txtop"><img src="img/矩形-24.jpg" alt="" /></span>'
         				+'<h3><b><img src="img/椭圆-1.jpg" alt="" /></b>'+val.name+'</h3>'
         			+'</div>'
         			+'<div class="content">'
         				+'<h3>职位描述</h3>'
         				+'<div class="content1 content2">'
         				+'<p>'+val.describe+'</p>'
         				 
         			    +'</div>'
         			    +'<h3>任职资格</h3>'
         			    +'<div class="content1 ">'
         				+'<p>'+val.qualification+'</p>'
         			    +'</div>'
         				+'</div>'
         		+'</div>'
				});
 		    $("section").html(list); 
			}
			})
})
