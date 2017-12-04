$(function(){
	 $.ajax({
		type:"post",
		url:"https://admin.zhtwy.com.cn/api/Product/type",
		data: {"id": "1"},
		async:true,
		success:function(data){
//			console.log(data);
//			产品页 导航
             var navControl=""
			  $.each(data.data, function(key,val) {  
               navControl+='<div class="swiper-slide">'+val.name+'</div>'
		    });
		    $(".navControl").html(navControl); 
//		导航栏滑动控制
			 var swiper = new Swiper('nav .swiper-container', {
	           slidesPerView: 4.5,
	         });
//	         开始显示的页面
	         $(".navControl div").eq(0).addClass("index")
	         var firstIndex=$(".navControl div.index").text();
	          $.ajax({
						type:"post",
						url:"https://admin.zhtwy.com.cn/api/index/common",
						async:true,
						success:function(data){
							var list="";
							 $.each(data.List, function(key,val) { 
								 	 $.each(val.list, function(k,v) {
								 	 	 if(val.name==firstIndex){
										     list+='<div class="sccContent" data-id='+v.id+'>'
										  	   	   	   +'<img src="img/500093136_wx.jpg" alt="" />'
										  	   	   	    +'<div class="jsContent">'
										  	   	   	    	+'<p>'+v.name+'</p>'
										  	   	   	    	+'<p>快速·高效·预防</p>'
										  	   	   	   +' </div>'
										  	   	  +' </div>'
								  	   	   }
								    })
							 	
							 })
						    $(".scContent").html(list);
							//进入二级页面
							$(".sccContent").click(function(){
								   var id=$(this).attr("data-id");
   								window.location.href="ProductDetails.html?&id="+id;
						    })
						}
						
					 })
		        
	         $(".navControl div").click(function(){
	         	var textContent=$(this).text();
				var index=$(this).index();
				$(this).addClass("index").siblings().removeClass("index");
					 $.ajax({
						type:"post",
						url:"https://admin.zhtwy.com.cn/api/index/common",
						async:true,
						success:function(data){
							var list="";
							 $.each(data.List, function(key,val) { 
								 	 $.each(val.list, function(k,v) {
								 	 	 if(val.name==textContent){
										     list+='<div class="sccContent" data-id='+v.id+'>'
										  	   	   	   +'<img src="img/500093136_wx.jpg" alt="" />'
										  	   	   	    +'<div class="jsContent">'
										  	   	   	    	+'<p>'+v.name+'</p>'
										  	   	   	    	+'<p>快速·高效·预防</p>'
										  	   	   	   +' </div>'
										  	   	  +' </div>'
								  	   	   }
								    })
							 	
							 })
							 $(".scContent").html(list);
							 //进入二级页面
							$(".sccContent").click(function(){
								   var id=$(this).attr("data-id");
   								window.location.href="ProductDetails.html?&id="+id;
						    })
						}
						
					 })
		    })
               
		} 
		
		}) 
		

	 
	 
	//  遮罩 导航
	$('.showListBox').click(function() {
		$('body').toggleClass('open');
	});
	$('.layer').click(function() {
		$('body').toggleClass('open');
	});
	 
	
//	       $.ajax({
//						type:"post",
//						url:"https://admin.zhtwy.com.cn/api/index/common",
//						async:true,
//						success:function(data){
//							console.log(data);
//						}
//						
//	       })
})