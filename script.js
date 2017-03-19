var brendamor_data_url = 'https://api.airtable.com/v0/appEmW1lSuM0fBVev/Symptoms?api_key=keybIfILI5Qa2691W';
var brendamorHTML = '';
var brendamorDiv = $('.symptoms');
var renderbrendamorData = function (data) {
  data.records.forEach(function(brendamor) {
    brendamorHTML += '<h1>' + brendamor.fields['MY SYMPTOMS TRACKER'] + '</h1>';
    brendamorHTML += '<h2>' + brendamor.fields['Name'] + '</h2>';
    brendamorHTML += '<p>' + brendamor.fields['Description'] + '</p>';
    brendamorHTML += '<hr />';
  })
  brendamorDiv.html(brendamorHTML);
  $('.general').append(brendamorHTML);
}

//
$.getJSON(brendamor_data_url, renderbrendamorData);
