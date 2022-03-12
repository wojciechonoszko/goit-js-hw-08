const form = document.querySelector("form");

console.log(form);



inputElementsUpdate();



form.addEventListener("input", saveMessage);
form.addEventListener("submit", resetForm);

function saveMessage(evt) {
    evt.preventDefault();
    const obj = {
        email: document.querySelector("input").value,
        message: document.querySelector("textarea").value,
    };
    const storage = localStorage.setItem("feedback-form-state", JSON.stringify(obj));
    inputElementsUpdate();
    //form.reset();

};

function resetForm() {
    form.reset();
}

function inputElementsUpdate() {
    const storageItem = localStorage.getItem("feedback-form-state");
    const parsedStorage = JSON.parse(storageItem);
    document.querySelector("input").value = parsedStorage.email;
    document.querySelector("textarea").value = parsedStorage.message;
    console.log(parsedStorage);
}




