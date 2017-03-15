var techies_data_url = 'https://api.airtable.com/v0/appHHeiqyJmJPdgw3/Techies?api_key=key2m8VgwGT2iztad';
var techiesHTML = '';
var techiesDiv = $('.techies');
var renderTechiesData = function (data) {
  data.records.forEach(function(techie) {
    techiesHTML += '<h2>' + techie.fields['Name'] + '</h2>';
    techiesHTML += '<a href="' + techie.fields['Website'] + '">' + techie.fields['Website'] + '</a>';
    techiesHTML += '<p>' + techie.fields['Bio'] + '</p>';
    techiesHTML += '<hr />';
  })
  techiesDiv.html(techiesHTML);
}

//
$.getJSON(techies_data_url, renderTechiesData);
