document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'fraudaway.html';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.getElementById('button');
  closeButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.remove(tab.id, function(){});

    });
  }, false);
}, false);
