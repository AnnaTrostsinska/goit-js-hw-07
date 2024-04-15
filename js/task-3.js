const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener(`input`, uppName);

function uppName() {
    const value = inputName.value.trim();

    if (value === ``) {
        outputName.textContent = `Anonymous`;
    } else {
        outputName.textContent = value;
    }

}