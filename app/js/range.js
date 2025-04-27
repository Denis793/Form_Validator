export function range() {
  const rangeInput = document.getElementById('rangeInput');
  const rangeOutput = document.getElementById('rangeValue');

  function updateRangeFill() {
    const value = 100 - (rangeInput.value / rangeInput.max) * 100;
    rangeInput.style.background = `linear-gradient(to right, #ddd  ${value}%, #d64200 ${value}%)`;
    rangeOutput.textContent = `${rangeInput.value}K`;
  }

  rangeInput.addEventListener('input', updateRangeFill);
  updateRangeFill();

  const fileInput = document.getElementById('file');
  const fileName = document.getElementById('file-name');

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      fileName.textContent = e.target.files[0].name;
    } else {
      fileName.textContent = 'No file chosen';
    }
  });
}
