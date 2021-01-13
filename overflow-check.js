// Javascript width overflow identifier
// Author: BJ Halloran
// Verson: 1.0.0


// When executed in the browser, this script checks for overflow and returns any 
// element(s) that have a width that is larger than the document width.

// Add this script, or simply paste into the browser console.  Enjoy!


// Get document width
	var docWidth = document.documentElement.offsetWidth;

  // Output document width
	console.log('Doc Width: ' + docWidth);

  // Select all elements
  var all = document.querySelectorAll('*');
  
  // Length of the array
  var length = all.length;

  // Count overflow elements
  var count = 0;

  // Check each element for overflow and output
 	for (x = 0; x < length; x++) {
    if (all[x].offsetWidth > docWidth) {
      count++;
      var element = all[x];
      console.log(element);
    }  
 	}

  // Total overflow elements
  console.log('Overflow Elements: ' + count);