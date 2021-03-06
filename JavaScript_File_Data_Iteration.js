
/*JAVASCRIPT ONLY*/
/*The script below uses JQuery and Ajax to load a local data file into HTML DOM*/
/*The data is split into an array using a string Regular Expression (Regex)*/
/*Ajax then iterates through the data records and the results are displayed.*/
/*The data file is a record of abstract numbers.*/
/*The aim is to find patterns in the numbers.*/
/*Written by Vakindu Philliam*/
 
  $( function() {
 
    $('#getNumbers').click( function() {
      $.ajax( "Numbers.txt", {
        dataType: "text",
        error: errorHandler,
        success: success
      } );
    } );
 
    //Define what happens after file is loaded
	
    function success(feed) {
		
		//Split the data records into array 
		
		var data =feed.split(/\s/);
		
		//Iterate through each element of data		
		
     $.each(data, function(element){
		
		//Display each record of data
				 
		 document.write("Data : "+data[element]+"<p>");
		 
		 });
    
		}
  
	 //Catch any errors in loading file
	 
    function errorHandler() {
		
      document.write( "There was a problem retrieving the forecast." );
    
		}
 
  });
