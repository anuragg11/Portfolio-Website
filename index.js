var sidebar=$("#sidemenu");

$(".bi-list").on("click",function(){
    sidebar.css("right","0");
})

$(".bi-x-circle").on("click",function(){
  sidebar.css("right","-200px");
})



var tablinks=$(".tab-links");
var tabContents=$(".tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
