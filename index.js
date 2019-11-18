let mainItem = document.getElementById('main');
mainItem.remove();

let newHeader = document.createElement('h1');
newHeader.innerHTML = ('YOUR-NAME is the champion');
newHeader.className = "victory";
newHeader.id = 'victory';
document.body.appendChild(newHeader);