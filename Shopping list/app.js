$( document ).ready(function() {
 $("#addButton").click(function(){
 var addto = $("#sform").val();
 $(".shoplist").append('<li>'+addto+'</li>');
 });
$(".shoplist").click(function(){
$("li").css("text-decoration", "line-through");
});
$(".shoplist").dblclick(function(){
$("li").remove();
});
});