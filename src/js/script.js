import MicroModal from 'micromodal'

MicroModal.init();
MicroModal.show('modal-1');

document.querySelector('.continue')
    .addEventListener('click', e => {
        document.querySelector('.modal__close').click();
    });