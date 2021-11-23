import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

const STORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", throttle(onFormSubmit, 500));
form.addEventListener("input", throttle(onFormInput, 500));

populateTextarea();

function getFormData() {
    return {
        email: input.value,
        message: textarea.value
    };
};


function onFormInput(event) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(getFormData());
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText) {
        const savedObj = JSON.parse(savedText);

        textarea.value = savedObj.message;
        input.value = savedObj.email;
    };
}

