$(document).ready(function (){        
				//자바스크립트 코드 작성 영역
				var imageNames = ['img/img1.png', 'img/img2.png', 'img/img3.png', 'img/img4.png', 'img/img5.png'];

	            for(var i=0;i < imageNames.length;i++){
	                $('<li></li>').append('<img src='+'"'+imageNames[i]+'"'+'/>').appendTo('ul#sliderContainer');  
	            }      
	            var $li = $("#sliderContainer > li");
	            $("#imageSlider").css('overflow','hidden');
	            $li.css('float','left');
	            $("#sliderContainer img").css('height','1080px');
	            
	            $("#sliderContainer").css('width',$li.length * parseInt($li.css('width')));
	            
	            $("#leftButton").html('move left').css({backgroundColor:'#ff6600',color:'#fff'});
	            $("#rightButton").html('move right').css({backgroundColor:'#ff8899',color:'#fff'});
	        
	            var max = $li.length;
	            var $container =$("#sliderContainer");
	            $container.css({'margin-left':'-1920px'});
	            //li 1개의 영역만큼 앞으로 항상 2번째li를보이게함
	            $container.prepend($container.children()[max-1]);
	            //맨마지막자식노드를 맨앞으로(배열은 0부터시작)
	        
	            function moveLeft (){
	                  $($container.children()[1]).css({'margin-left':'1920px'});
	                    //두번째자식li의 처음 위치값  
	                    $container.append($container.children()[0]);
	                    //첫번째li를 마지막노드로넣음
	                    $($container.children()[0]).animate({'margin-left':'0'},200);
	                    //두번째였던노드는 첫번째노드로 바뀌면서 배열[0]이되고 애니메이션실행
	                
	            }
	            function moveright (){
	                    $container.prepend($container.children()[max-1]);
	                    //마지막노드를 첫번째 노드로이동
	                    $($container.children()[0]).css({'margin-left':'-1920px'});
	                    
	                    $($container.children()[0]).animate({'margin-left':'0'},200);
	           
	            }
	                         
	            $('#leftButton').click(moveLeft);
	            $('#rightButton').click(moveright);
	           
	});