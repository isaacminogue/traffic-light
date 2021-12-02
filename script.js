var activitySelect = document.querySelector('#activity-select');
var activityTitle = document.querySelector('#activity-title');
var activityDesc = document.querySelector('#activity-desc');
var vaxText = document.querySelector('#vax-text');
var vaxCheckbox = document.querySelector('#vax-checkbox');
var vaxPanel = document.querySelector('#vax-panel');
var dotRed = document.querySelector('.alert-dot-red');
var dotOrange = document.querySelector('.alert-dot-orange');
var dotGreen = document.querySelector('.alert-dot-green');
var radioRed = document.querySelector('#group-radio-red');
var radioOrange = document.querySelector('#group-radio-orange');
var radioGreen = document.querySelector('#group-radio-green');
var vax = false;
var alert = 'red';
var activity = 'public';
var size = 1;

activitySelect.onchange = function() {
    var value = this.value;
    var options = this.children;
    for(i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.getAttribute('value') === value) {
            activity = value;
            activityTitle.innerHTML = option.innerHTML
            activityDesc.innerHTML = option.getAttribute('data-desc');
        }
    }
    refresh()
}

vaxCheckbox.onchange = function() {
    vaxCheckbox.checked ? vaxOn() : vaxOff()
}

function vaxOn() {
    vax = true
    vaxText.innerHTML = 'Yes';
    vaxPanel.classList.add('vax-on')
    refresh()
}

function vaxOff() {
    vax = false
    vaxText.innerHTML = 'No';
    vaxPanel.classList.remove('vax-on')
    refresh()
}

radioGreen.onchange = function() {
    alert = 'green';
    dotRed.classList.add('alert-dot-off');
    dotOrange.classList.add('alert-dot-off');
    dotGreen.classList.remove('alert-dot-off');
    refresh()
}

radioOrange.onchange = function()  {
    alert = 'orange';
    dotRed.classList.add('alert-dot-off');
    dotOrange.classList.remove('alert-dot-off');
    dotGreen.classList.add('alert-dot-off');
    refresh()
}

radioRed.onchange = function()  {
    alert = 'red';
    dotRed.classList.remove('alert-dot-off');
    dotOrange.classList.add('alert-dot-off');
    dotGreen.classList.add('alert-dot-off');
    refresh()
}

// TODO make this update ouput panels
function refresh() {
    console.log('Alert is ' + alert + ' activity is ' + activity + ' vax is ' + vax + ', and size is ' + size,);
}