document.addEventListener('DOMContentLoaded',function() {
  var buttons = document.querySelectorAll('a.btn');
  for (i = 0; i < buttons.length; ++i) {
    var button = buttons[i];
    var functionName = button.getAttribute('data-function');
    var functionBody = window[functionName].toString();
    button.setAttribute('href', 'javascript:('+functionBody+')()');
  }
});
