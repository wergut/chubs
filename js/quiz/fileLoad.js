function removeFilesItem(target) {
    var name = target.getAttribute('data-filename');
    var input = target.closest('.input-file-row').querySelector('input[type=file]');
    var filesList = input.closest('.input-file-row').querySelector('.input-file-list');
    var listItems = filesList.getElementsByClassName('input-file-list-item');
    var dt = new DataTransfer();
    for (var i = 0; i < dt.items.length; i++) {
        if (name === dt.items[i].getAsFile().name) {
            dt.items.remove(i);
            break;
        }
    }
    for (var j = 0; j < listItems.length; j++) {
        if (listItems[j].querySelector('.input-file-list-remove').getAttribute('data-filename') === name) {
            listItems[j].remove();
            break;
        }
    }
    input.files = dt.files;
}

/* image field*/
var dt = new DataTransfer();
var fileInputs = document.querySelectorAll('.input-file input[type=file]');
fileInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        var filesList = this.closest('.input-file').nextElementSibling;
        filesList.innerHTML = '';

        for (var i = 0; i < this.files.length; i++) {
            var file = this.files[i];
            dt.items.add(file);

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                var newFileInput = '<div class="input-file-list-item">' +
                    '<img class="input-file-list-img" src="' + reader.result + '">' +
                    '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove" data-filename="' + file.name + '"></a>' +
                    '</div>';
                filesList.insertAdjacentHTML('beforeend', newFileInput);
            };
        }
        this.files = dt.files;
    });
});
