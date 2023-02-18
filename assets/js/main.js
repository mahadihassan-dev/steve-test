$(document).ready(function(){
    $("#bell").click(function(){
        $("#drawer").toggle();
    });
});

$(document).ready(function(){
    $("#user-opt-btn").click(function(){
        $("#user-opt-drawer").toggle();
    });
});

$(document).ready(function(){
    $(".sidebar-btn").click(function(){
        $("#sidebar").toggleClass("sidebar-show")
    });
});
