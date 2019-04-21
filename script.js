
const createBTN = document.getElementById('createCharacter').onclick = function myFunction() {

  let firstLetter = document.getElementById("myWeapon").value[0];
  let firstLetterH = document.getElementById("myHero").value[0];
  let lowerLetterH = firstLetterH.toLowerCase();
  let lowerLetter = firstLetter.toLowerCase();
  
  //This is the first method that works
  // let prep = firstLetter == "a" || firstLetter =="e" || firstLetter == "i" || firstLetter=="o" || firstLetter =="u" ? 'an':'a';  
  
  //this is the second easier method
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  let prep = vowels.includes(lowerLetter) ? 'an' : 'a';
  let prepH = vowels.includes(lowerLetterH) ? 'an' : 'a';


  let hero = document.getElementById("myHero").value;
  document.getElementById("hero").innerHTML = `Your hero is ${prepH} ${hero}`;
  document.getElementById("myHero").value = '';
  
  let armor = document.getElementById("myArmor").value;
  document.getElementById("armor").innerHTML = `Your type of armor is ${armor}`;
  document.getElementById("myArmor").value = '';
  
  let weapon = document.getElementById("myWeapon").value;
  document.getElementById("weapon").innerHTML = `Your Weapon is ${prep} ${weapon}`;
  document.getElementById("myWeapon").value = '';
  

  
}



