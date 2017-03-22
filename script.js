var brendamor_data_url = 'https://api.airtable.com/v0/appEmW1lSuM0fBVev/Symptoms?api_key=keybIfILI5Qa2691W';
var brendamorHTML = '';
var brendamorDiv = $('.symptoms');
var brendamorDiv2 = $('.symptoms2');
var renderbrendamorData = function (data) {
  // counter = 1;
  data.records.forEach(function(brendamor) {

    var symptoms_Pictures = brendamor.fields['Icon'];
    var Body_Part = ["General", "Head", "Eyes", "Back", "Stomach"];
    // brendamorHTML += '<h1>' + brendamor.fields['MY SYMPTOMS TRACKER'] + '</h1>';
    brendamorHTML += '<div class = "feelings"><h2>' + brendamor.fields['Name'] + '</h2>';
    brendamorHTML += '<p>' + brendamor.fields['Description'] + '</p>';

    $.each(symptoms_Pictures, function(i, Pictures){

    brendamorHTML += `<img src="${Pictures.url}">`;
    brendamorHTML += "</br><hr /></div>";
    // if (counter%2 == 1) {
    //   brendamorDiv.html(brendamorHTML);
    // }


  // else {
    brendamorDiv2.html(brendamorHTML)
  // }
    // counter += 1;
  $('.general').append(brendamorHTML);
    })
});
}

//
$.getJSON(brendamor_data_url, renderbrendamorData);
