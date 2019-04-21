# Create-your-hero
This is a small app I created in order to use my basic knowledge on if statements. It will be improved and evolved over time. 

I made this app that when you write your prefered weapon or hero, it will display the appropriate preposition("a" or "an") before it so it would be gramatically correct. 

**I've done it like this: 

`<input type="text" id="myHero" placeholder="Type of hero">` This is the input field

`let firstLetter = document.getElementById("myHero").value[0];` This is how you select the first letter of the input value (whatever the user writes)

Now, I came up with one solution for filtering vowels/consonants and for the second one I got help by someone on discord :D. 
 SOLUTION 1.
 
 `let prepH = firstLetterH == "a" || firstLetterH =="e" || firstLetterH == "i" || firstLetterH == "o" || firstLetterH == "u" ? 'an':'a';  `
 
 SOLUTION 2.
`  const vowels = ['a', 'e', 'i', 'o', 'u']; 
   let prepH = vowels.includes(firstLetterH) ? 'an' : 'a';
`

and the DOM manipulation : 

 ` let hero = document.getElementById("myHero").value;`
 
  `document.getElementById("hero").innerHTML = ``Your hero is ${prepH} ${hero}``;`
  
  `document.getElementById("myHero").value = '';`
  
  You can check the code :D 
  
  I know this is simple but I came up with it alone so I'm happy as it's my first time to do it.
  
  
