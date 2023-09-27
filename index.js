function writeCards(stringNames , eventName) {
  let logMessage = [];
    for (let i = 0; i < stringNames.length; i++) {
      logMessage.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    }
  return logMessage;
  }

function countDown(number) {
  for (let i = number; i >= 0; i--){
    console.log(i);
  }
}
