document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('menu-btn').classList.toggle('hide');
});

document.getElementById('sidebar').addEventListener('mouseleave', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('menu-btn').classList.remove('hide');
});

document.querySelectorAll('#sidebar ul li a').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('menu-btn').classList.remove('hide');
    });
});
