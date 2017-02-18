$(document).ready(function(){
    $(".access_buttons").find("button").click(function(){
        $(this).parents(".access_buttons").find("button").toggleClass("disabled");
        var access_icon = $(this).parents("tr").find(".has_access");
        access_icon.toggleClass("btn-success")
            .toggleClass("btn-danger");
        access_icon.find("icon").toggleClass("glyphicon-remove")
            .toggleClass("glyphicon-ok");
    });
    $(".btn-remove").click(function(){
        $(this).parents("tr").remove();
    });
});