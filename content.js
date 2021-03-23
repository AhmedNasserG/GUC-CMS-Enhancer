var card = document.getElementsByClassName('card mb-4');
for (var i = 0, l = card.length; i < l; i++) {
    var name = card[i].getElementsByTagName('strong')[0].innerText.replace(/^\d\d?\s-\s/, '');
    var button = card[i].getElementsByTagName('a')[0];
    button.setAttribute('style', 'display:yes;')
    button.setAttribute('download', name);

}
