$(document).ready(function() {
	var host = "http://jsonplaceholder.typicode.com/";

	$("get-users").on("click", function() {
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
		}).fail(function(data, textStatus, errorThrown) {
			console.log("fail() called.");
			console.log("data: " + data);
			console.log("textStatus: " + textStatus);
			console.log("errorThrown: " + errorThrown);
		}).always(function(data, textStatus, jqXHRorErrorThrown) {
			console.log("always() called.");
			console.log("data: " + data);
			console.log("textStatus: " + textStatus);
			console.log("jqXHR or errorThrown: " + jqXHRorErrorThrown);
		});
	});
});
