function isScrolledIntoView(e){var a=$(window).scrollTop(),i=a+$(window).height(),t=$(e).offset().top,l=t+$(e).height();return t<=i&&l>=a}var randomScalingFactor=function(){return Math.round(100*Math.random())},barChartData={labels:["EMS","Good Intent Calls","False Alarms","Service Calls","Hazardous Conditions","Fires","Other"],datasets:[{fillColor:"rgba(108,175,224,1)",highlightFill:"rgba(171,29,64,0.8)",data:[74,11,7,4,2.5,2,.2]}]},inView2=!1;$(window).scroll(function(){if(isScrolledIntoView("#bar")){if(inView2)return;inView2=!0,new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData,{responsive:!0,scaleShowGridLines:!1,scaleShowHorizontalLines:!1,scaleShowVerticalLines:!1,barShowStroke:!1,scaleFontSize:13,showScale:!0,animationSteps:200,scaleLabel:" <%=value %>%",tooltipTemplate:"<%if (label){%><%=label %>: <%}%><%= value + ' %' %>"})}else inView2=!1});