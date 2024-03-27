var request = new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true)
      request.send();
      request.onload = function() 
      {
         var data = request.response;
        var result = JSON.parse(data)
       for(var i=0;i<result.length;i++){
console.log("countryname"+""+result[i].name.common,"region"+""+result[i].region, "Subregion"+""+result[i].subregion, "Population"+""+result[i].population);
console.log(result[i].flags.png)
       }}