$(function(){
	 $.ajax({
			type:"post",
			url:"https://admin.zhtwy.com.cn/api/index/index",
			async:true,
			success:function(data){
				var data=data;
				var list="";
				 list='<h3><span><img src="img/矩形-381.jpg" alt="" /></span>联系我们<p></p></h3>'
                   +'<ul>'
	                   	+'<li><span class="imgBox"><img src="img/index/地址@2x.png" alt="" /></span><div><span>地址：</span><span>'+data.data.contact_address+'</span></div></li>'
	                   	+'<li><span class="imgBox"><img src="img/index/电话@2x.png" alt="" /></span><div><span>电话：</span><span>'+data.data.contact_tel+'</span></div></li>'
	                   	+'<li><span class="imgBox"><img src="img/index/传真@2x.png" alt="" /></span><div><span>传真：</span><span>'+data.data.contact_chuanzhen+'</span></div></li>'
	                   	+'<li><span class="imgBox"><img src="img/index/邮编@2x.png" alt="" /></span><div><p><span>邮编：</span><span>'+data.data.contact_youbian+'</span></p><p><span>E-mail：</span><span>'+data.data.contact_email+'</span></p></div></li>'
                        +'</ul>'
 	             $("section .list").html(list); 
			}
			})
//	  * @param	name  姓名
//    * @param phone  电话
//    * @param email  联系邮箱
//    * @param content  所提需求
		$("#tjBtn").click(function(){
		     var name=$(".ly-name input").val();
		     var phone=$(".ly-phone input").val();
		     var email=$(".ly-email input").val();
		     var address=$(".ly-address input").val();
		     var textArea=$("#textArea").val();
		     if(name!=""&&phone!=""&&email!=""&&textArea!=""){
		     	 $.ajax({
					type:"post",
					url:"https://admin.zhtwy.com.cn/api/message/index",
					data:{"name":name,"phone":phone,"email":email,"content":textArea},
					async:true,
					success:function(data){
						  if(data.code==200){
						  	alert("发送成功")
						  }else{
						  	alert("发送失败，请重新发送")
						  }
					}
					}) 
		     }else{
		     	alert("选项不得为空")
		     }
			 
			  
	  
})
})
