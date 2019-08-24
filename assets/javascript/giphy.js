$(document).ready(function(){
    var Sports =[ "soccer" , "Football" , "Baseball" , "Racing" , "Volleyball" , "Tennis"]

    function renderButtons(){
        $("#sports-buttons").empty();
        for (i=0; i < Sports.length; i++) {
            $("#sports-buttons").append("<button class ='btn btn-success' data-sports='" + sports[i] + "'>" + sports[i] + "</button>");
        }
    }


    renderButtons();

    $("#add-sport").on("click", function(){
        event.preventDefault();
        var sport = $("#sport-input").val().trim();
        sports.push(sport);
        renderButtons();
        return;
    })


    $("button").on("click", function(){
        var sport = $(this).attr("data-sport");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            sport + "&api_key=dc6zaTOxFJmzC&limit=10"
            

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            var results = response.data;
            $("#sports").empty();
        })



    })





















})