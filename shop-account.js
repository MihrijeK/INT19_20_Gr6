$(document).ready(function(){
				$("#shop-view").hide();
				$("#account-view").hide();
				$("#shop").click(function(){
					if($("#shop-view").is(":hidden")){
						$("#shop-view").show('slow');
						$("#account-view").hide('slow');
					}
					else if($("#shop-view").is(":visible")){
						$("#shop-view").hide('slow');
					}
				});

				$("#account").click(function(){
					if($("#account-view").is(":hidden")){
						$("#account-view").show('slow');
						$("#shop-view").hide('slow');
					}
					else if($("#account-view").is(":visible")){
						$("#account-view").hide('slow');
					}
				})
			});