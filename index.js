function scuberGreetingForFeet(miles){
  // Write your code here!

  if (miles<=400)
    return('This one is on me!');
  else if(miles<2500 && miles>2000)
    return('I will gladly take your thirty bucks.');

  else
    return('No can do.');
  
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch (amount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}