
function ToSqlDate(dato)
{
    let dat = new Date(dato);
    return dat.getFullYear() + "-" + (dat.getMonth()+1) + "-" + dat.getDate();
}

function SqlToNormalDate(dato)
{
    var arr = dato.split("-")
    return arr[2] + "-" + arr[1]  + "-" + arr[0];
}

function JSToNormalDate(dato)
{
    var arr = dato.split("/");
    var month = ((arr[0].lelength >0)? arr[0] : "0"+arr[0]);
    var day = ((arr[1].length >1)? arr[1] : "0"+arr[1]);
    return arr[2] + "-" + month  + "-" + day;
}

function logOut(){
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("role");
    window.localStorage.removeItem("name");
    window.location.assign("../index.html");
}

function editOnOff()
{
    let status = window.localStorage.getItem("admin");

    if (status == 'on')
    {
        window.localStorage.setItem("admin", "off");
    }
    else
    {
        window.localStorage.setItem("admin", "on");
    }

    
    location.reload(); 
}

function navigate(loca) {
    
       window.location.assign(loca + ".html");
}

function navigate(loca, id) {
    //alert(loca + id);
    if (id > 0) {
        window.localStorage.setItem("id", id);
    }
    window.location.assign(loca + ".html");
}

function navigate(loca, value, name) {
    //alert(loca + id);
    if (value > 0) {
        window.localStorage.setItem(name, value);
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

        