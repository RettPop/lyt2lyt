/**
 * CYR2LAT Layout Mapping
 * Maps Cyrillic characters to their US-EN physical key equivalents.
 */
const layoutMap = {
  // Grave / Tilde row
  'ё': '`', 'Ё': '~',

  // Top row
  'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't', 'н': 'y', 'г': 'u', 'ш': 'i', 'щ': 'o', 'з': 'p', 'х': '[', 'ъ': ']',
  'Й': 'Q', 'Ц': 'W', 'У': 'E', 'К': 'R', 'Е': 'T', 'Н': 'Y', 'Г': 'U', 'Ш': 'I', 'Щ': 'O', 'З': 'P', 'Х': '{', 'Ъ': '}',

  // Middle row
  'ф': 'a', 'ы': 's', 'в': 'd', 'а': 'f', 'п': 'g', 'р': 'h', 'о': 'j', 'л': 'k', 'д': 'l', 'ж': ';', 'э': "'",
  'Ф': 'A', 'Ы': 'S', 'В': 'D', 'А': 'F', 'П': 'G', 'Р': 'H', 'О': 'J', 'Л': 'K', 'Д': 'L', 'Ж': ':', 'Э': '"',

  // Bottom row
  'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b', 'т': 'n', 'ь': 'm', 'б': ',', 'ю': '.', '.': '/',
  'Я': 'Z', 'Ч': 'X', 'С': 'C', 'М': 'V', 'И': 'B', 'Т': 'N', 'Ь': 'M', 'Б': '<', 'Ю': '>', ',': '?',

  // Number row Shift symbols (Standard Russian vs US-EN)
  '"': '@',
  '№': '#',
  ';': '$',
  '%': '%', // same
  ':': '^',
  '?': '&',
  '*': '*', // same
};

const inputArea = document.getElementById('cyrillic-input');
const outputArea = document.getElementById('latin-output');
const copyBtn = document.getElementById('copy-btn');

/**
 * Converts a string based on the layout map.
 * Characters not in the map are returned as-is.
 */
function convertText(text) {
  return text.split('').map(char => layoutMap[char] || char).join('');
}

/**
 * Event listener for real-time conversion.
 */
inputArea.addEventListener('input', (e) => {
  const converted = convertText(e.target.value);
  outputArea.value = converted;
});

/**
 * Clipboard functionality.
 */
copyBtn.addEventListener('click', () => {
  const textToCopy = outputArea.value;
  if (!textToCopy) return;

  navigator.clipboard.writeText(textToCopy).then(() => {
    // Visual feedback
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '_COPIED!';
    copyBtn.style.backgroundColor = '#fff';
    copyBtn.style.color = '#000';
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.style.backgroundColor = '';
      copyBtn.style.color = '';
    }, 1500);
  }).catch(err => {
    console.error('Could not copy text: ', err);
    alert('Failed to copy. Please select and copy manually.');
  });
});

// Boot sequence log
console.log('%c [SYSTEM]: CYR2LAT TERMINAL LOADED ', 'background: #000; color: #00ff41; font-weight: bold;');
console.log('%c [SYSTEM]: STATUS OK ', 'background: #000; color: #00ff41;');
