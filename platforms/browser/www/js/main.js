

function navigate(loca, id) {
    //alert(loca + id);
    if (id > 0) {
        window.localStorage.setItem("id", id);
    }
    window.location.assign(loca + ".html");
}

$(document).ready(function () {
    $("#toggleMenu").click(function () {
        $("#menu-panel").slideToggle("slow");
        $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
        
    });

    $(".mobileMenuItem").click(function () {
        $("#menu-panel").slideUp("slow");
    });

    $("#navBestilling").click(function () {
        $("#menuBestilling").slideToggle("slow");
        $("#menuKontakt").slideUp("slow");
        
    });

    $(".bestillingMenuItem").click(function () {
        $("#menuBestilling").slideUp("slow");
    });

    $("#navContact").click(function () {

        $("#menuKontakt").slideToggle("slow");
        $("#menuBestilling").slideUp("slow");

        
    });

    $(".kontaktMenuItem").click(function () {
        $("#menuKontakt").slideUp("slow");
    });
});

        // if (window.localStorage.getItem("user") == null) {
        //     window.location.assign("../index.html");
        // }