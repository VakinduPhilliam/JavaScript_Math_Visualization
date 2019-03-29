
/*JAVASCRIPT ONLY*/
/*The script below uses JQuery and Ajax to load a local data file into HTML DOM*/
/*The data is split into an array using a string Regular Expression (Regex)*/
/*Ajax then iterates through the data records and identifies Digit numbers.*/
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
		 
	 //Declare variable to map out digit frequency
		
         var map={}; 
		 
      //Function to count the digits of an integer

      function digitCount(n){

      var count=0;

      if(n>=1) ++count;

       while((n/10)>=1){
          n/=10;
          ++count;
       }

       return count;
      }
		
     //Iterate through each element of data		
		
     $.each(data, function(element){
		
		//Call function to identify the number of digits in each number
		
		 var digits = digitCount(data[element]);
		
		//Map out frequency occurrence of digits
		
		 if(!map[digits]){
			
			map[digits]=0;
			
			} else {
			
			map[digits]+=1;
			
		  }	
			
		
		//Display each record of data
				 
		 document.write(map);
		 
		 });
    
		}
  
	 //Catch any errors in loading file
	 
    function errorHandler() {
		
      document.write( "There was a problem retrieving the forecast." );
    
		}
 
  });
 