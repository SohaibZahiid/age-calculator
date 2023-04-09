"use strict";

const days = document.querySelector(".days");
const months = document.querySelector(".months");
const years = document.querySelector(".years");

const dayI = document.querySelector(".day");
const monthI = document.querySelector(".month");
const yearI = document.querySelector(".year");

const btn = document.querySelector(".submit");
const errorMsg = document.querySelectorAll(".errorMsg");

btn.addEventListener("click", () => {
    if (validateInputs()) {
        const age = calculateAge(
            `${yearI.value}-${monthI.value}-${dayI.value}`
        );

        days.innerText = age.days;
        months.innerHTML = age.months;
        years.innerText = age.years;
    } else {
        days.innerText = "--";
        months.innerHTML = "--";
        years.innerText = "--";
    }
});

function validateInputs() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if (!input.value) {
            parent.querySelector("small").style.display = "block";
            validator = false;
        } else if (dayI.value > 31 || !Number(dayI.value)) {
            dayI.parentElement.querySelector("small").style.display = "block";
            validator = false;
        } else if (monthI.value > 12 || !Number(monthI.value)) {
            monthI.parentElement.querySelector("small").style.display = "block";
            validator = false;
        } else if (
            yearI.value > new Date().getFullYear() ||
            !Number(yearI.value)
        ) {
            yearI.parentElement.querySelector("small").style.display = "block";
            validator = false;
        } else {
            parent.querySelector("small").style.display = "none";
            validator = true;
        }
    });

    return validator;
}

function calculateAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    // If days is negative, calculate the number of days in the birth month
    // and add it to the current month's days
    if (days < 0) {
        var daysInMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += daysInMonth;
        months--;
    }

    // If months is negative, add 12 to it and subtract 1 from years
    if (months < 0) {
        months += 12;
        years--;
    }

    var age = {
        years: years,
        months: months,
        days: days,
    };

    return age;
}
