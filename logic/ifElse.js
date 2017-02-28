const R = require('ramda');
/**
 * Example 1:
 */

// From: 
const onSeachClick = (searchTerm) => {
   if(searchTerm !== '') {
      searchForMovies(searchTerm)
   } else {
       console.log('a search term should be provided')
   }
}

// To:
const inNotEmpty = R.compose(
   R.not, 
   R.isEmpty
);

const onSearchClick = () => {
  R.ifElse(
     isNotEmpty,  // logic to check
     searchForMovices, // do it if true
     log('a search term should be provided') // do it if false
  )
} 


/*
    Example2:
*/
 function processSearchResponse(response) {
     // check total_results prop from response,
     // it shuold greater than 0
     const searchHasResult = R.compose(
         R.lt(0),
         R.prop('total_results')
     );
     // get results props from response,
     // then createMoviesElements called 
     const createElementFromResults = R.compose(
         createMovicesElements,
         R.prop('results')
     );
     //always return empty 
     const createArrayWithNotFound = R.always([
         createMoviceNotFoundElement({})
     ]);

     const elements = R.ifElse(
         searchHasResult,
         createElementFromResults,
         createArrayWithNotFound
     )(response);
 }  


/*
Mock
*/

function searchForMovies(searchTerm) {
    return [];
} 

function log(x) {
    console.log(x)
}

function createMovicesElements(elements) {
    console.log("createMovicesElements", elements);
    return elements
}

function createMoviceNotFoundElement (elments) {
    console.log("createMoviceNotFoundElement", elements);
    return elements
}