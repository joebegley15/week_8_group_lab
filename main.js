$(document).ready(function() {
	"use strict";

	var host = "http://jsonplaceholder.typicode.com/";
	var usersTemplate = Handlebars.compile($("#users-template").html());

	$("#get-users").on("click", function(e) {
		e.preventDefault();

		$.ajax(host + "users", {
			method: "GET",
			contentType: "application/json",
			dataType: "json",
			processData: false
		}).done(function(data, textStatus, jqXHR) {
			console.log("done() called.");
			console.log("data: " + data);
			console.log("textStatus: " + textStatus);
			console.log("jqXHR: " + jqXHR);

			$("#users-box").html(usersTemplate({
				users: data
			}));
		}).fail(function(data, textStatus, errorThrown) {
			console.log("fail() called.");
			console.log("data: " + data);
			console.log("textStatus: " + textStatus);
			console.log("errorThrown: " + errorThrown);
		}).always(function(data, textStatus, jqXHRorErrorThrown) {
			// console.log("always() called.");
			// console.log("data: " + data);
			// console.log("textStatus: " + textStatus);
			// console.log("jqXHR or errorThrown: " + jqXHRorErrorThrown);
		});
	});
});
