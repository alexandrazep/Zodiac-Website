document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  calculateSignAndFunFacts();
});

function calculateSignAndFunFacts() {
  var birthDate = new Date(document.getElementById('fecha_nacimiento').value);
  var zodiacSign = getZodiacSign(birthDate);
  var funFacts = getFunFacts(zodiacSign);
  displayResult(zodiacSign, funFacts);
}

function getZodiacSign(birthDate) {
  var month = birthDate.getMonth() + 1;
  var day = birthDate.getDate();

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return 'Aquarius';
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return 'Aries';
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return 'Gemini';
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return 'Leo';
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return 'Libra';
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return 'Sagittarius';
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return 'Capricorn';
  } else {
    return 'Unknown'; // Default for unknown dates
  }
}

function getFunFacts(zodiacSign) {
  // Your existing code for fun facts
  // Assuming you'll fill this function later
}

function displayResult(zodiacSign, funFacts) {
  var resultElement = document.getElementById('resultado');
  resultElement.innerHTML = '<p>Your zodiac sign is <strong>' + zodiacSign + '</strong>.</p>' +
    '<p>' + funFacts + '</p>';

  var imageElement = document.createElement('img');
  imageElement.src = 'https://example.com/' + zodiacSign.toLowerCase() + '.jpg';
  imageElement.alt = zodiacSign + ' symbol';
  imageElement.id = 'imagen_signo';
  resultElement.appendChild(imageElement);

  console.log('Displayed zodiac sign and fun facts.'); // Adding console.log statement
}
