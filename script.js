//  document.write('External Script Here!');

//  alert('Everything is going according to plan');

// var phrase = 'The quick brown fox jumps over the lazy dog';
// varible are used to store vaues and they can be updates later or used in other/multiple places. Strings
// var age = 25;

// var height = 5.11;

// numbers do not need a ''

// var sex = true ;
//  bulean variable only two variables
// var flaws = null;
//  null means it has no value

// var description = undefined;

//  hasn't been defined yet so has value somehow

//  document.write(phrase.toUpperCase());
//  document.write( age);
//  phrase =  'Handwriting';
//  document.write(phrase.toLocaleLowerCase());
//  document.write(phrase);
//  phrase = 'Sociopath';
//  document.write(height);
//  document.write(phrase.substring(0, 4));

// index of or lastindexof needs ('') letters to numbers
// *charAT () 0 is he first. It shows numbers to letters */
// -1 means the character dosen't exist on the string

// document.write(phrase.substring(phrase.indexOf('Q'),phrase.length));

// document.write(phrase.endsWith('dog'))

// var num1 = prompt('Enter Number Here');
// var num2 = prompt('Enter Another Number');

// num1 = parseFloat(num1)

// num2 = parseFloat(num2);
// parseInt only adds whole numbers
// parseFloat adds decimals

// document.write(num1+num2);

// document.getElementById('comics');

function getComics() {
  var comic = document.getElementById("comics");
  comic.addEventListener("click", function comicGrab() {
    comic.innerHTML = "Suck it now.";
    console.log('clicked!');
  });
}
getComics();

function drawFace(){
  var draw = document.getElementById('btn');
  draw.addEventListener('click', function drawFace(){
    draw.innerHTML = 'Nice try round eye.';
    console.log("clicked!");
  })
}
drawFace();

  var face = document.getElementById('img');
  face.addEventListener('click', smileDong )

function smileDong(){
   face.src = "./3d_monster.jpg";
  console.log("clicked!");
   face.style="width:20em;"
   face.style="opacity:1;";
   face.style="box-shadow:2px 2px 2px 2px red";
}

