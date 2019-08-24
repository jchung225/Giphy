$(document).ready(function(){
    var sports =[ "soccer" , "football" , "baseball" , "racing" , "volleyball" , "tennis"]

    function renderButtons(){
        $("#sports-buttons").empty();
        for (i=0; i < sports.length; i++) {
            $("#sports-buttons").append("<button class='btn btn-success' data-sport='" + sports[i] + "'>" + sports[i] + "</button>");
        }
    }
    renderButtons();

    $("#add-sport").on("click", function(){
        event.preventDefault();
        var sportinput = $("#sport-input").val().trim();
        sports.push(sportinput);
        renderButtons();
        return;
    })


    $("button").on("click", function(){
        var sport = $(this).attr("data-sport");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            sport + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"
            

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            var results = response.data;
            $("#sports").empty();   
            for ( var i =0; i < results.length; i++){
                var sportDiv= $("<div>");
                var p =$("<p>").text("Rating: " + results[i].rating);
                
                var sportImg = $("<img>");
                sportImg.attr("src", results[i].images.original_still.url);
				sportImg.attr("data-still", results[i].images.original_still.url);
				sportImg.attr("data-animate", results[i].images.original.url);
				sportImg.attr("data-state", "still");
				sportImg.attr("class", "gif");
				sportDiv.append(p);
				sportDiv.append(sportImg);
				$("#gif-appear-here").append(sportDiv);

            }
        });
    });


    function imagechangeState() {
        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");
        
        if (state === "still") {
            $(this).attr("src", animateImage);
            $(this).attr("data-state", "animate");
        }

        else if (state === "animate"){
            $(this).attr("src", stillImage);
            $(this).attr("src", "data-state", "still");
        }
    }
    $(document).on("click", ".gif",imagechangeState);

















})