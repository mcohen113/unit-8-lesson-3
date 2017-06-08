// Step 1: (Write your code for this step in the index.html file)
	// Create a handlebars template inside the .groceries ul for a list item
	// with the following format: <li>{{item}} - ${{cost}}</li>


// Step 2: When the user submits the form, do the following:

$('form').on('submit', function(event) {
  event.preventDefault();


  var userInput = {
    item: $('#item').val()
    cost: $('#cost').val()
  }// b) Create an object called userInput. There should be two key/value pairs in the object:
        // item: the value the user entered into the #item input (hint: use the val() method)
        // cost: the cost the user entered into the #cost input (hint: use the val() method)
  // c) Get HTML from #groceryItem template and store it in a variable called source
  var source = $("#groceryItem").html();
  // d) Use Handlebars.compile() to compile the source template and store in a variable called template.
  var template = Handlebars.compile(source);
  // e) Use template() to add the userInput to the template and store in a variable called newListItemHTML
  var newListItemHTML = template(userInput);
  // f) Append newListItemHTML to the .groceries list
  $('.groceries').append(newListItemHTML);
});



// var source = $("#entry-template").html();
// var template = Handlebars.compile(source);
// var data = {itemDescription: $('#newItemDescription').val() };
// var newListItemHTML = template(data);

// // Step 6: Append each new list item to the #packing list.
// $('#packingList').append(newListItemHTML);
