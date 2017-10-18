$(document).ready(function(){
	
		    navigator.geolocation.getCurrentPosition(function(position){
      	var currentLat = position.coords.latitude;
      	var currentLon = position.coords.longitude;
      
      	var api = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + currentLat + "&"+"lon=" + currentLon;

      	$.getJSON(api, function(data){
        console.log(data);
        $("#location").html(data.name + ", " +data.sys.country );
        var currentTempType = "c";
        var currentTemp = data.main.temp;
        $("#temperature").html(currentTemp +" C");
        
             
        $("#weather").text(data.weather[0].main);
        showIcon(data);  
          
        $("#convert").on("click", function(){
          if(currentTempType === "c"){
            currentTemp = tempConversion(currentTemp, "c");
            $("#temperature").html(currentTemp +" F");
            currentTempType = "f";
           
            
          }
          else if(currentTempType === "f"){
            currentTemp = tempConversion(currentTemp,"f");
            $("#temperature").html(currentTemp+" C");
            currentTempType = "c";
          }
          
          
        });
       
        
       
         
        });

        function showIcon(data){
        $("#icon").html("<img src="+data.weather[0].icon +">");
        var description = data.weather[0].description.toLowerCase();
        
        if(description.includes("cloud")){
          $("body").css("background", "url(https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?dpr=1&auto=format&fit=crop&w=1350&h=&q=60&cs=tinysrgb&crop=)");
        }else if(description.includes("rain")){
          $("body").css("background", "url(https://images.unsplash.com/photo-1486016006115-74a41448aea2?dpr=1&auto=format&fit=crop&w=1347&h=&q=60&cs=tinysrgb&crop=)");
        }else if(description.includes("clear")){
          $("body").css("background", "url(https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?dpr=1&auto=format&fit=crop&w=1350&h=&q=60&cs=tinysrgb&crop=)");
        }else if(description.includes("sun")){
          $("body").css("background", "url(https://images.unsplash.com/photo-1421081177127-339f586c9b49?dpr=1&auto=format&fit=crop&w=1349&h=&q=60&cs=tinysrgb&crop=)");
        }        
      }

      function tempConversion(num, type){
        if(type === "c"){
          return num * (9/5)+32;
        }
        return (num-32)/(9/5);
       
      }



    });
	 
});