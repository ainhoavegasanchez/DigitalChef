
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const ratingValue = document.getElementById('rating-value');

ratingInputs.forEach(input => {
  input.addEventListener('change', () => {
    ratingValue.textContent = `Valor del rating: ${input.value}`;
  });
});;
