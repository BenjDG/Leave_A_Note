
$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get('/api/user_data').then((data) => {
        console.log(data);
        $('#firstname').text(data.first_name);
        $('#lastname').text(data.last_name);
        $('#useremail').text(data.email);
    });

    $("#note-nav").on("click", function () {
        window.location.replace('/notes');
    });
    $("#profile-nav").on("click",function (){
        window.location.replace('/profile');
    })

    $('#logout').on('click', function () {
        window.location.replace('/logout');
    });
});