
$('.ebs').load('examList_top_menu.html');  
$('.header').load('header.html');        
$('.footer').load('footer.html');    



$(document).ready(function(){


//charts
	google.charts.load("current", {packages:['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
	  var data = google.visualization.arrayToDataTable([
			['Element', '年薪', { role: 'style' }],
			['公股　銀行', 715524, "color: #fdd166"],            // RGB value
			['高考　會計', 705240, '#dfdfdf'],            // English color name
			['普考　會計', 589250, '#dfdfdf'],
			['民營　行業', 492000, '#dfdfdf'],
		 	['一般　就業', 396500, '#dfdfdf' ], // CSS-style declaration
	  ]);

	  var view = new google.visualization.DataView(data);
	  view.setColumns([0, 1,
							 { calc: "stringify",
								type: "string",
								role: "annotation" },
							 2]);

	  var options = {
		 title: "",//頂部標題
		 color: '#7c7c7c',
		 fontSize: 16,
		 tooltip: {trigger:'selection'},
		 width: 570,
		 height: 380,
		 bar: {groupWidth: "70%"},
		 legend: { position: "none" },//顯示目標說明
		 vAxis: {//縱軸設定
			minValue: 0,
			ticks: [0, 200000, 400000, 600000, 800000],
			textStyle: {
				fontSize: 13,
				color: '#464646',
			  },
		 },
		 hAxis: {//橫軸設定
			textStyle: {
			  fontSize: 16,
			  color: '#9498A3',
			  bold: true,
			  italic: false
			},
			titleTextStyle: {
			  fontSize: 18,
			  color: '#9498A3',
			  bold: true,
			  italic: false
			}
		 },
	  };
	  
	  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	  chart.draw(view, options);
	}




//Aos init
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 100, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: 'ease-in-out-back', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: true, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // 視窗觸發位置

});

		$('#Chen').click(function(){
			$('#Chen').toggleClass('active');
			$('#Lin').toggleClass('active');
		});

		$('#Lin').click(function(){
			$('#Lin').toggleClass('active');
			$('#Chen').toggleClass('active');
		});

		$('.tab_item').click(function(){
			$('.tab_box li').removeClass('active');
			$(this).addClass('active');
		});



   //cbox 自適應   
	var cboxOptions = {
	width: '98%',
	//    height: '95%',
	maxWidth: '1280px',
	//maxHeight: '800px',
	};
	$('.ec_combos').colorbox(cboxOptions);

	$(window).resize(function(){
		$(window).resize({
		width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
		height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
		});
	});


	//文章斷點
		var info_content_len = 110;
		$('.info_content').each(function(i){
			if($(this).text().length>info_content_len){
				$(this).attr("title",$(this).text());
				var thistext=$(this).text().substring(0,info_content_len-1)+"...";
				$(this).text(thistext);
			};
		});

	//年度區塊
	$('#year_108').fadeIn(1);
	$('.years_btn:first').addClass("active");
	$('.years_btn a:first').addClass("active");

	$('.years_btn').click(function() {  
	$('.years_btn').removeClass('active');
	$('.years_btn a').removeClass('active');
		
	$(this).addClass('active');
	$(this).children('a').addClass('active');
		$(".years_panel").hide();
			var years = $(this).children('a').attr('href');
			$(years).fadeIn(300);
			return false;
	});



});
