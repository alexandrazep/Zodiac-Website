// document.getElementById('formulario').addEventListener('submit', function (event) {
//   event.preventDefault();
//   calculateSignAndFunFacts();
// });

// function calculateSignAndFunFacts() {
//   var birthDate = new Date(document.getElementById('fecha_nacimiento').value);
//   var zodiacSign = getZodiacSign(birthDate);
//   var funFacts = getFunFacts(zodiacSign);
//   displayResult(zodiacSign, funFacts);
// }

// function getZodiacSign(birthDate) {
//   var month = birthDate.getMonth() + 1;
//   var day = birthDate.getDate();

//   if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
//     return 'Aquarius';
//   } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//     return 'Pisces';
//   } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
//     return 'Aries';
//   }
//   // Add more conditions for other zodiac signs as needed
// }

// function getFunFacts(zodiacSign) {
//   switch (zodiacSign) {
//     case 'Aries':
//       return 'Aries are brave and energetic, natural-born leaders.';
//     case 'Taurus':
//       return 'Taurus are patient and reliable, lovers of stability.';
//     case 'Gemini':
//       return 'Gemini are versatile and curious, always seeking new experiences.';
//     case 'Cancer':
//       return 'Cancer are affectionate and protective, with strong family bonds.';
//     case 'Leo':
//       return 'Leo are charismatic and dominant, they love being in the spotlight.';
//     case 'Virgo':
//       return 'Virgo are meticulous and analytical, seeking perfection in everything they do.';
//     case 'Libra':
//       return 'Libra are diplomatic and balanced, seeking harmony in all situations.';
//     case 'Scorpio':
//       return 'Scorpio are passionate and determined, with a unique emotional intensity.';
//     case 'Sagittarius':
//       return 'Sagittarius are adventurous and optimistic, always seeking the next big adventure.';
//     case 'Capricorn':
//       return 'Capricorn are ambitious and disciplined, working hard to achieve their goals.';
//     case 'Aquarius':
//       return 'Aquarius are known for their originality and independence.';
//     case 'Pisces':
//       return 'Pisces are intuitive and emotionally deep.';
//     default:
//       return 'No fun facts found.';
//   }
// }

// function displayResult(zodiacSign, funFacts) {
//   var resultElement = document.getElementById('resultado');
//   resultElement.innerHTML = '<p>Your zodiac sign is <strong>' + zodiacSign + '</strong>.</p>' +
//     '<p>' + funFacts + '</p>';

// "<img>""//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fcirculo-astrologia-horoscopo-signos-zodiaco-constelaciones-geminis-cancer-leon-ilustracion-vector-coleccion-signo-zodiacal-mistico-calendario-diferentes-fases-lunares-cielo-nocturno_19463391.htm&psig=AOvVaw2EYjQDJRsa2E5wE6mdoSGJ&ust=1714509957363000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDXmMKl6IUDFQAAAAAdAAAAABAE"</img> 
//   var imageElement = document.createElement('img'https:"//www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fcirculo-astrologia-horoscopo-signos-zodiaco-constelaciones-geminis-cancer-leon-ilustracion-vector-coleccion-signo-zodiacal-mistico-calendario-diferentes-fases-lunares-cielo-nocturno_19463391.htm&psig=AOvVaw2EYjQDJRsa2E5wE6mdoSGJ&ust=1714509957363000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDXmMKl6IUDFQAAAAAdAAAAABAE);" 
//   imageElement.src = 'https://example.com/' + zodiacSign.toLowerCase() + '.jpg'; // Cambia la URL por la ruta de tu imagen
//   imageElement.alt = zodiacSign + ' symbol';
//   imageElement.id = 'imagen_signo';
//   resultElement.appendChild(imageElement);
// }




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
}

function displayResult(zodiacSign, funFacts) {
  var resultElement = document.getElementById('resultado');
  resultElement.innerHTML = '<p>Your zodiac sign is <strong>' + zodiacSign + '</strong>.</p>' +
    '<p>' + funFacts + '</p>';

  var imageElement = document.createElement('img');
  imageElement.src = 'https://example.com/' + zodiacSign.toLowerCase() + '.jpg'; <img> https:images.herzindagi.info/image/2023/Aug/zodiac-sign-enemies</img>.jpg
  imageElement.alt = zodiacSign + ' symbol';
  imageElement.id = 'imagen_signo';
  resultElement.appendChild(imageElement);
}
