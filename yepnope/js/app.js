

$(function(){

var name = 'favoriteIssue', data, selected, latestIssue, chosenIssue;
latestIssue = 209; //latest issue for counter


/* add a new key-value pair to localStorage */
function addItem(key, value){
  localStorage.setItem(key, value);
}

/* get a key-based item from localStorage */
function getItem(key){
  return localStorage.getItem(key);
}

/* remove a key-based item from localStorage */
function removeItem(key){
 localStorage.removeItem(key);
}

/* clear data from localStorage */
function clearItems(){
  localStorage.clear();
}

/* get the current issue number*/
function calcIssue(selected){
  return latestIssue - selected;
}


/* display the book cover's one at a time */
$('.cover').each(function(idx) {
    $(this).delay( idx * 400 ).fadeIn( 100 );
});		



/* save the index selected to localStorage on cover click*/
$('.cover').bind('click', function(){

    $('.cover').removeClass('selected');
    selected = $('.cover').index(this); 
      
    addItem('favoriteIssue', selected); 
     
    chosenIssue = calcIssue(selected);
    $(this).addClass('selected');   
    
    /* Display the modal 'favorited' message */
    $.blockUI({ 
            message: '<h3>You Favorited Issue #' + chosenIssue +'. <br><br>Reload To See localStorage or the polyfill in action.</h3>', 
            timeout: 3300 
        }); 
        
});


/* if the item exists in localstorage/polyfill localstorage display the welcome back message*/
if(getItem(name)){
 $('.cover').eq(getItem(name)).addClass('selected');
 chosenIssue = calcIssue(getItem(name));
 $.blockUI({ 
            message: '<h3>Welcome Back!. The Most Recent Issue You Favorited Was #' + chosenIssue +'.</h3>', 
            timeout: 3000 
        }); 
        
}

})();