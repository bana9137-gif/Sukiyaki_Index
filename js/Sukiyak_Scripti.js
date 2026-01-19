// 彈出式菜單
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function() {
        const modalInstance = bootstrap.Modal.getInstance(this);
        modalInstance.hide();
    });
});