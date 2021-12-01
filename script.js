var activitySelect = document.querySelector('#activity-select');
var activityTitle = document.querySelector('#activity-title');
var activityDesc = document.querySelector('#activity-desc');
var vaxText = document.querySelector('#vax-text');
var vaxCheckbox = document.querySelector('#vax-checkbox');

activitySelect.onchange = function() {
    activityTitle.innerHTML = 'Title ' + this.value;
    activityDesc.innerHTML = 'Description ' + this.value;
}

vaxCheckbox.onchange = function() {
    vaxCheckbox.checked ? vaxText.innerHTML = 'Yes' : vaxText.innerHTML = 'No'
}