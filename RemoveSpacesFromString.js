/**
	{
		"api":1,
		"name":"Remove spaces from string",
		"description":"Removes all spaces in a string.",
		"author":"neanias",
		"icon":"collapse",
		"tags":"join, space, remove",
		"bias": -0.1
	}
**/

function main(input) {
	input.text = input.text.replace(/\s/g, '');
}
