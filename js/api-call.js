var app_id = "185ef909";
var api_key = "8f3c401be14660c9c8b1fbb4cc5d7843";

var url = 'https://api.nutritionix.com/v1_1/search/?phrase=Yoplait&results=0%3A50&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_water_grams%2Cnf_calories%2Cnf_total_fat%2C+nf_cholesterol%2Cnf_sodium%2Cnf_sugars%2Cnf_protein&appId=185ef909&appKey=8f3c401be14660c9c8b1fbb4cc5d7843'

// $.get(url, {appId: app_id, appKey: api_key}, function(response){
//     // callback success
// }, function(response) {
//     console.log(response);
// });

$.ajax({
  type: 'GET',
  url: url,
  data: data,
  async: false,
  dataType: 'json',
  success: function (data) {
    console.log(data);
  }
});
