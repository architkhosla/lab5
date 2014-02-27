'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	
}

function addIt(res,price2,item)
		{
			
			console.log(item);
			//console.log("../add?item=" + item + "&qty=" + qty + "&price=" +price2);
			window.location.replace("../add?res=" + res.innerHTML + "&price=" + price2 + "&item=" + item.innerHTML);
			
		}