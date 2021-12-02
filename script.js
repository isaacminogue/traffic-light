var activitySelect = document.querySelector('#activity-select');
var activityTitle = document.querySelector('#activity-title');
var activityDesc = document.querySelector('#activity-desc');
var vaxText = document.querySelector('#vax-text');
var vaxCheckbox = document.querySelector('#vax-checkbox');
var vaxPanel = document.querySelector('#vax-panel');
var dotRed = document.querySelector('.alert-dot-red');
var dotOrange = document.querySelector('.alert-dot-orange');
var dotGreen = document.querySelector('.alert-dot-green');

activitySelect.onchange = function() {
    activityTitle.innerHTML = 'Title ' + this.value;
    activityDesc.innerHTML = 'Description ' + this.value;
}

vaxCheckbox.onchange = function() {
    vaxCheckbox.checked ? vaxOn() : vaxOff()
}

function vaxOn() {
    vaxText.innerHTML = 'Yes';
    vaxPanel.classList.add('vax-on')
}

function vaxOff() {
    vaxText.innerHTML = 'No';
    vaxPanel.classList.remove('vax-on')
}

function alertGreen() {
    dotRed.classList.add('off');
    dotOrange.classList.add('off');
    dotGreen.classList.remove('off');
}

function alertOrange() {
    dotRed.classList.add('off');
    dotOrange.classList.remove('off');
    dotGreen.classList.add('off');
}

function alertRed() {
    dotRed.classList.remove('off');
    dotOrange.classList.add('off');
    dotGreen.classList.add('off');
}
