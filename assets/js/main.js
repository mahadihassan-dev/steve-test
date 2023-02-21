jQuery(document).ready(function () {
    $("#bell").click(function () {
        $("#drawer").toggle();
    });
    $("#user-opt-btn").click(function () {
        $("#user-opt-drawer").toggle();
    });
});



// Sidebar - Toggle Button
$(document).ready(function () {

    $(".sidebar-btn").click(function () {
        $(".dash-main-right").toggleClass('full-width');
        $(".dash-main-left").toggleClass('hideSidebar');
        $(".dash-main-left-inner").toggleClass('hideSidebar');
        if ($(".dash-main-left-inner").hasClass('show-left-inner')) {
            $(".dash-main-left-inner").removeClass('show-left-inner');
        } else {
            $(".dash-main-left-inner").hideClass('hide-left-inner');
        }
    })
    
    $(".sidebar_show_btn").click(function () {
        $(".dash-main-right").toggleClass('full-width');
        $(".dash-main-left").toggleClass('hideSidebar');
        $(".dash-main-left-inner").toggleClass('hideSidebar');
        if ($(".dash-main-left-inner").hasClass('show-left-inner')) {
            $(".dash-main-left-inner").removeClass('show-left-inner');
        } else {
            $(".dash-main-left-inner").hideClass('hide-left-inner');
        }
    })

});

