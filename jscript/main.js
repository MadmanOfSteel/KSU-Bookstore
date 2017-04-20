/**
 * Created by jvoorhee on 4/20/17.
 */

var book_list = [];
var cart = [];
var book_DOM = [];
var profile_DOM = [];

$(document).ready(function(e) {
    $.getJSON("Books.json", function(data) {
        $.each(data, function(key, val) {
            book_list.push(val);
        });
    })
    
    for (index in book_list) {
        add_results(index);
        add_profiles(index);
    }
});

