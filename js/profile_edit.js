$(document).ready(function(){
    $(".form_clear_button").click(function(event){
        event.preventDefault();
        $(this).closest("form").find("input").attr("checked", false);
    });

    $("input.schedule-checkbox:checkbox").change(function(){
        var classList = $(this).attr("class").split(" ");
        var classes = classList.filter(function(value){
            var pattern = /\d-\d/;
            return pattern.test(value);
        });

        var day_identifier = classes[0];
        var $this_is_checked = $(this).is(":checked");

        $("." + day_identifier).attr("checked", $this_is_checked)
    });
});