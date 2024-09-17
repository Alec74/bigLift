const oldWorkout = document.querySelector('.old-workout-modal');
const oldWorkoutBtn = document.querySelector('.old-workout-btn');
const oldWorkoutClosebtn = document.querySelector('#close-old-workout-modal');


const startWorkout = document.querySelector('.start-workout-modal');
const startWorkoutBtn = document.querySelector('.start-workout-btn');
const startWorkoutClosebtn = document.querySelector('#close-workout-modal');
const header = document.querySelector('.menu-header-container');


oldWorkoutBtn.onclick = function() {
    oldWorkout.style.display = "block";
    header.style.display = "none";
}

oldWorkoutClosebtn.onclick = function() {
    oldWorkout.style.display = "none";
    header.style.display = "flex";
}


startWorkoutBtn.onclick = function() {
    startWorkout.style.display = "block";
    header.style.display = "none";
}

startWorkoutClosebtn.onclick = function() {
    startWorkout.style.display = "none";
    header.style.display = "flex";
}