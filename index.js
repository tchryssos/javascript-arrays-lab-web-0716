const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var new_array=[...kittens,name];
  return new_array;
}

function prependKitten(name){
  var new_array=[name,...kittens];
  return new_array;
}

function removeLastKitten(){
  var new_array=kittens.slice(0,-1);
  return new_array;
}

function removeFirstKitten(){
  var new_array=kittens.slice(1,kittens.legnth);
  return new_array;
}
