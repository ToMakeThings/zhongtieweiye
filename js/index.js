$(function(){
//	展开 收起 公司介绍
  $(".ci-btn span").on("click",function(){
  	if($(this).attr("class")=="ci-open"){
  	  $(".CompanyIntroduction .ci-content").css("height","auto");
  	  $(this).text("收起").removeClass("ci-open").addClass("ci-off");
  	 }else if($(this).attr("class")=="ci-off"){
  	 	$(".CompanyIntroduction .ci-content").css("height","16rem");
  	  $(this).text("展开").removeClass("ci-off").addClass("ci-open");
  	 }
  })
  
	$.ajax({
		type:"post",
		url:"https://admin.zhtwy.com.cn/api/index/index",
		async:true,
		success:function(data){
			var data=data;
//			console.log(data);
				    //轮播
				    var headerImg="";
				    $.each(data.bannerList,function(key,val){
				    	headerImg+='<div class="swiper-slide"><img src='+val.img+' alt="" /></div>'
				    })
				    $(".headerImg").html(headerImg);
		       var swiper = new Swiper('.swiper-container', {
				      slidesPerView: 1,
				      autoplay: {
				        delay: 3500,
				        disableOnInteraction: false,
				      },
				      loop: true,
				    });
           //关于我们
           var about=data.about;
           $(".CompanyIntroduction .ci-content span").html(about.about_content);
           $(".landmark img").attr("src",about.img)
           //产品分类
           var cp_list_one="";
           var cp_list_two="";
           var productTypeList=data.productTypeList;
           $.each(productTypeList,function(key,val){
           	if(key<4){
                cp_list_one+='<dl>'
		 		 			+'<dt><img src='+val.img+'></dt>'
		 		 			+'<dd>'+val.name+'</dd>'
	 		 		    +'</dl>'
	 		}
           })
            $.each(productTypeList,function(key,val){
           	if(key>=4&key<8){
                cp_list_two+='<dl>'
		 		 			+'<dt><img src='+val.img+'></dt>'
		 		 			+'<dd>'+val.name+'</dd>'
	 		 		    +'</dl>'
	 		}
           })
           $(".pi-c-one").html(cp_list_one);
           $(".pi-c-two").html(cp_list_two);
//         新闻中心
           var newList=""; 
           var NewsList=data.NewsList;
           $.each(NewsList,function(key,val){ 
           	  var newContent="";
           	  var first_add_time="";
           	  var first_title="";
              $.each(val.data, function(k,v) {
              	if(k==0){
              		first_add_time=v.add_time;
              		first_title=v.title;
              	}
							 	   newContent+='<p class="bkContent"><s><img src="img/矩形-32.jpg" /></s><span class="date">'+v.add_time+'</span><span class="content">'+v.title+'</span></p>'
							 });
               newList+='<div class="block">'
	 		 		                    +'<div class="bkImg">'
	 		 		                  	+'<img src="'+val.img+'"/>'
	 		 		                    +'<div><p><span class="bkimg-date">'+first_add_time+'&nbsp;&nbsp;</span><span class="bkimg-content">'+first_title+'</span></p></div>'
	 		 		                    +'</div>'
	 		 		                    +'<h4>'+val.name+'</h4>'
	 		 		                    +newContent
													 		+'<div class="moreBox"><a href="#">查看更多</a></div>'
													    +'</div>'
           })
            $(".newsCenter .blockGroup").html(newList);
           //联系我们
            var  contactUs="";
              	 contactUs='<div><span class="imgBox"><img src="img/index/地址@3x.png"/></span><span class="content">'+data.data.contact_address+'</span></div>'
										 		 		+'<div><span class="imgBox"><img src="img/index/电话@3x.png"/></span>&nbsp;&nbsp;电话：<span class="content">'+data.data.contact_chuanzhen+'</span></div>'
										 		 		+'<div><span class="imgBox"><img src="img/index/传真@3x.png"/></span>&nbsp;&nbsp;传真：<span class="content">'+data.data.contact_email+'</span></div>'
										 		 		+'<div><span class="imgBox"><img src="img/index/邮编@3x.png"/></span>&nbsp;&nbsp;邮编:<span class="content">'+data.data.contact_tel+'</span></div>'
										 		 		+'<div><span class="imgBox"><img src="img/index/邮箱@3x.png"/></span>&nbsp;&nbsp;邮箱:<span class="content">'+data.data.contact_youbian+'</span></div>'
				    
				    $(".contactUs .showMessage").html(contactUs);
		}
	});
	
	//点击信息跳转填写信息页面
	$(".selfMessage").click(function(){
		  window.location.href="contactUs.html";
	})
})
