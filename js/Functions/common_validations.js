//Only Type Text & Numbers
$(function () {
    $('.onlyZupNum').on('input', function () {
        this.value = this.value.replace(/[^a-zA-Z0-9@]/g, '');
    });
});

//Only Type Text
$(function () {
    $('.onlyZup').on('input', function () {
        this.value = this.value.replace(/[0-9-~`!@#$%^&()_={}[\]:;,.<>+\/?-]/, '');
    });
});

//Only Number
$(function () {
    $('.onlyNum').on('input', function () {
        this.value = this.value.replace(/[a-zA-Z-~`!@#$%^&()_={}[\]:;,.<>\/?-]/, '');
    });
});

//Only Email
$(function () {
    $('.onlyEmail').on('input', function () {
        this.value = this.value.replace(/[~`!#$%^&()_={}[\]:;,<>+\/?-]/, '');
    });
});