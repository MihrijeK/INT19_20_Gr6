$(document).ready(function(){
				$("#shop-view").hide();
				$("#account-view").hide();
				$("#shop").click(function(){
					if($("#shop-view").is(":hidden")){
						$("#shop-view").show('fast');
						$("#account-view").hide('fast');
					}
					else if($("#shop-view").is(":visible")){
						$("#shop-view").hide('fast');
					}
				});

				$("#account").click(function(){
					if($("#account-view").is(":hidden")){
						$("#account-view").show('fast');
						$("#shop-view").hide('fast');
					}
					else if($("#account-view").is(":visible")){
						$("#account-view").hide('fast');
					}
				})

				$("#blej").click(function(){
					$("#shop-view").show('fast');
				})
			});
