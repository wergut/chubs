document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.open-modal-dialog'),
        overlay      = document.querySelector('body'),
        closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

    /* open modal*/
    modalButtons.forEach(function(modalBtn){
        modalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-src'),
                modalElem = document.querySelector('.modal-dialog.'+modalId);
            overlay.classList.add('modal-open');
            modalElem.style.display = "block";
            modalElem.classList.add('modal-opening');
        }); // end click
    }); // end foreach

    /* close modal */
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            this.closest('.modal-dialog').style.display = "none";
            overlay.classList.remove('modal-open');
            this.closest('.modal-dialog').classList.remove('modal-opening');
        })
    });

    document.querySelectorAll('.modal-dialog').forEach(function(item) {
        item.addEventListener('click', function (e) {
            if(e.target !== e.currentTarget) {
                return
            } else {
                this.style.display = "none";
                this.classList.remove('modal-opening');
            }
        })
    });
});
