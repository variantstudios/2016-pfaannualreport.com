
var data = [
    {
      value: 76,
      label: "City & Fire District Taxes: 28M",
      color: "#152C53",
    },{
      value: 18,
      label: "Capital Fund revenue: 6.5M*",
      color: "#AA1E41",
    },{
      value: 5,
      label: "Fees and charges for service: 2M",
      color: "#626467",
    },{
      value: 0.05,
      label: "Earnings on investments: 19K",
      color: "#499544",
    },{
      value: 0.11,
      label: "Grants and Non-capital Projects: 42K",
      color: "#F38020",
    },{
      value: 0.3,
      label: "Miscellaneous revenue: 111K",
      color: "#6CAEDF",
    }

  ];

var doughnutData2 = [
    {
      value: 53,
      label: "Operations: 19M",
      color: "#152C53"
    },{
      value: 11,
      label: "Support: 4M",
      color: "#AA1E41",
    },{
      value: 8,
      label: "Administration: 3M",
      color: "#499544"
    },{
      value: 5.6,
      label: "Community Safety Services: 2M",
      color: "#9C8B6F"
    },{
      value: 22,
      label: "Total Capital Expenditures: 8M",
      color: "#626467"
    },{
      value: 0.8,
      label: "Grants and Non Capital Services: 281K",
      color: "#002B54"
    },{
      value: 0.65,
      label: "Lease Purchase: 234K",
      color: "#499638"
    }
  ];




var inView = false;
var inView4 = false;

function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}
$(window).scroll(function() {
  if (isScrolledIntoView('#chart-area')) {
      if (inView) { return; }
      inView = true;
      new Chart(document.getElementById("chart-area").getContext("2d")).Doughnut(data, {responsive : true, segmentShowStroke : false,animationSteps : 150,  animationEasing : "easeInOutExpo",tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",});        
  } else {
      inView = false;  
  }
});
$(window).scroll(function() {
  if (isScrolledIntoView('#chart-area2')) {
      if (inView4) { return; }
      inView4 = true;
      new Chart(document.getElementById("chart-area2").getContext("2d")).Doughnut(doughnutData2, {responsive : true, segmentShowStroke : false,animationSteps : 150,  animationEasing : "easeInOutExpo",tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",});
      
  } else {
      inView4 = false;  
  }
});


