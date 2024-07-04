document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('show-code-btn');
    const code = document.getElementById('python-code');

    button.addEventListener('click', function() {
        if (code.classList.contains('show')) {
            code.classList.remove('show');
        } else {
            code.classList.add('show');
        }
    });
});
