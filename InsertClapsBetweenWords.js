/**
{
  "api": 1,
  "name": "Clapback Case",
  "description": "Inserts clap emoji between each word to create a clap back",
  "author": "William Mathewson",
  "icon": "flame",
  "tags": "join,clap,emoji,string"
}
**/

function main(input) {
  input.text = input.text.split(" ").join(" 👏 ");
}
