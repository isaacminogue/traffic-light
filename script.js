var select = document.querySelectorAll('select')[0];
var title = document.querySelectorAll('.panel-title')[0];
var desciption = document.querySelectorAll('.panel-description')[0];

select.onchange = function() {
    title.innerHTML = 'Title ' + this.value;
    desciption.innerHTML = 'Description ' + this.value;
}