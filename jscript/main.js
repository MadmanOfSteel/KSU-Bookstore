/**
 * Created by jvoorhee on 4/20/17.
 */

var book_list = [];
var cart = [];
var book_DOM = [];
var profile_DOM = [];

//Initialize the document (webpage), preparing the results and book profiles prior to search
$(document).ready(function(e) {
    $.getJSON("Books.json", function(data) {
        $.each(data, function(key, val) {
            book_list.push(val);                                                                // Initialize the array of "book" objects
        });
    });

    for (index in book_list) {
        add_results(index);                                                                     // Push the results of the search onto a new document
        add_profiles(index);                                                                    // Generate profiles to be added to new document
    }
});

//Generate list of results prior to search query
function add_results(index) {
    var book = book_list[index];

    book_DOM.push(
        '<section class="search-results" id="result' + index + '">'
        +'<div class = "row">'
        +'<div class = "col-md-2">'
        +'<a class="book-link book-cover" href="javascript:book_profile(' + index + ');" onclick="book_profile)' +
        + index + ')"><img class ="book-cover" style="height:180px;width:120px;" src="CoverPhotos/' + book.ISBN + '.jpg"></a>'
        +'</div>'
        +'<div class="col-md-2">'
        +'<a class="book-link" href="javascript:void(0);" onclick="book_profile(' + index + ')"><h4 class="text-center">' + book.TITLE +'</h4></a>'
        +'</div>'
        +'<div class="col-md-2">'
        +'<h4 class="text-center">' + book.AUTHOR + '</h4>'
        +'</div>'
        +'<div class="col-md-4">'
        +'<h4 class="text-center">' +book.DESCRIPTION.substr(0,199) + '...</h4>'
        +'</div>'
        +'<div class="col-md-2">'
        +'<h4 class="text-center">' + book.ISBN + '</h4>'
        +'<h4 class="text-center"> Price (New):  %' + book.NEWPRICE + '</h4>'
        +'<h4 class="text-center"> Price (Used): $' + book.USEDPRICE + '</h4>'
        +'<h4 class="text-center"> Price (Rental): $' + book.RENTALPRICE + '</h4>'
        +'<h4 class="text-center"> Price (E-Book): $' + book.EBOOKPRICE + '</h4>'
        +'</div>'
        +'</div>'
        +'</section>');
}

//Book Profile Page
function add_profiles(index) {
    var book = book_list[index];

    profile_DOM.push(
        '<section class="row book-profile">'
        +'<div>'
        +'<div class="col-md-1">'
        +'</div>'
        +'<div class="col-md-3">'
        +'<img class="book-cover row" style="height:300px; width 200px;" src="CoverPhotos/' + book.ISBN + '.jpg">'
        +'</div>'
        +'<div class="col-md-3">'
        +'<h3>Book Summary:</h3>'
        +'<p class="profile-text">Semester: ' + book.SEMESTER + '</p>'
        +'<p class="profile-text">Course: ' + book.COURSE + '</p>'
        +'<p class="profile-text">Recommended or Required: ' + book.RECOMMENDEDREQUIRED + '</p>'
        +'<p class="profile-text">Course Hours: ' + book.CREDITHOURS + '</p>'
        +'<p class="profile-text">Book Summary: ' + book.DESCRIPTION + '</p>'
        +'</div>'
        +'<div class="col-md-2">'
        +'<h3>Price(s):</h3>'
        +'<p class="profile-text">Price (New):     $' + book.NEWPRICE + ' (In Stock:' + book.NEWQUANTITY + ')</p>'
        +'<button class="add-item new-button" onClick="add_item(1, \'new\',' +index + ')"> Add To Cart</button>'
        +'<p class="profile-text">Price (Used):    $' + book.USEDPRICE + ' (In Stock:' + book.USEDQUANTITY + ')</p>'
        +'<button class="add-item used-button" onClick="add_item(1, \'new\',' +index + ')"> Add To Cart</button>'
        +'<p class="profile-text">Price (Rental):  $' + book.RENTALPRICE + ' (In Stock:' + book.RENTALQUANTITY + ')</p>'
        +'<button class="add-item rental-button" onClick="add_item(1, \'new\',' +index + ')"> Add To Cart</button>'
        +'<p class="profile-text">Price (E-Book):  $' + book.EBOOKPRICE + ' (In Stock:' + book.EBOOKQUANTITY + ')</p>'
        +'<button class="add-item ebook-button" onClick="add_item(1, \'new\',' +index + ')"> Add To Cart</button>'
        +'</div>'
        +'<div class="col-md-1">'
        +'</div>'
        +'</section>');

    )
