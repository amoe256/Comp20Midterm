$(document).ready(function() {
    // Toggle for the photographs page
    $("#p").click(function() {
        $(".p").slideToggle("slow");
    });

    $("#e").click(function() {
        $(".e").slideToggle("slow");
    });

    $("#a").click(function() {
        $(".a").slideToggle("slow");
    });

    $("#l").click(function() {
        $(".l").slideToggle("slow");
    });

    $("#f").click(function() {
        $(".f").slideToggle("slow");
    });

    // Toggle for the sculptures
    $("#cer").click(function() {
        $(".cer").slideToggle("slow");
    });

    $("#cla").click(function() {
        $(".cla").slideToggle("slow");
    });

    // Toggle for the paintings
    $("#sti").click(function() {
        $(".sti").slideToggle("slow");
    });

    // Hover effect for all images (images appear only in column sections)
    // If want images imbedded in the header will need to change the function to differentiate between the 2
    $("img").hover(function() {
        var img_id = $(this).attr('id');
        var str = img_id.split('_');
        document.getElementById("artist_name").innerHTML = "Artist is " + "<b>" + str[0] + "</b>";
        document.getElementById("art_name").innerHTML = "Artwork name: " + "<b>" + str[1] + "</b>";;
    }, function() {
        document.getElementById("artist_name").innerHTML = "";
        document.getElementById("art_name").innerHTML = "";
    });
})