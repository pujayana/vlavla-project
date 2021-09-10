$(document).ready(function(){
    
    // Auto size textarea
    autosize($('#autoresizing'));
    
    // Textarea change color
    $('#autoresizing').on('click', function(){
        $(this).css('color', '#000');
    });

});

// Task
$(document).on('change', ".task-data input", function(event){
	event.preventDefault();

	var attr = $(this).attr('data');

	$(document).find('.task-data p[data-collapse="'+ attr +'"]').toggleClass('action');
    $(document).find('.progress[data-collapse="'+ attr +'"]').toggleClass('action');
});

//Tambah Anggota
$(document).on('click', ".btn-anggota", function(){
    $('.tambah-anggota').addClass('action');
    $('.ctambah-anggota').addClass('action');
});

$(document).on('click', ".tambah-anggota .btn-close", function(){
    $('.tambah-anggota').removeClass('action');
    $('.ctambah-anggota').removeClass('action');
});

$(document).on('click', ".tambah-anggota .screen", function(){
    $('.tambah-anggota').removeClass('action');
    $('.ctambah-anggota').removeClass('action');
});

//Info Target
$(document).on('click', ".btn-info", function(){
    $('.info').addClass('action');
    $('.cinfo').addClass('action');
});

$(document).on('click', ".info .btn-close", function(){
    $('.info').removeClass('action');
    $('.cinfo').removeClass('action');
});

$(document).on('click', ".info .screen", function(){
    $('.info').removeClass('action');
    $('.cinfo').removeClass('action');
});

//Info Goal
$(document).on('click', ".btn-info2", function(){
    $('.info2').addClass('action');
    $('.cinfo2').addClass('action');
});

$(document).on('click', ".info2 .btn-close", function(){
    $('.info2').removeClass('action');
    $('.cinfo2').removeClass('action');
});

$(document).on('click', ".info2 .screen", function(){
    $('.info2').removeClass('action');
    $('.cinfo2').removeClass('action');
});

//Task
$(document).on('click', ".wrap-task", function(){
    $('.goal').addClass('action');
    $('.cgoal').addClass('action');
});

$(document).on('click', ".goal .btn-close", function(){
    $('.goal').removeClass('action');
    $('.cgoal').removeClass('action');
});

$(document).on('click', ".goal .screen", function(){
    $('.goal').removeClass('action');
    $('.cgoal').removeClass('action');
});

//Message
$(document).on('click', ".btn-message", function(){
    $('.message').addClass('action');
    $('.cmessage').addClass('action');
});

$(document).on('click', ".message .btn-close", function(){
    $('.message').removeClass('action');
    $('.cmessage').removeClass('action');
});

$(document).on('click', ".message .screen", function(){
    $('.message').removeClass('action');
    $('.cmessage').removeClass('action');
});

//Kontak
$(document).on('click', ".btn-kontak", function(){
    $('.kontak').addClass('action');
    $('.ckontak').addClass('action');
});

$(document).on('click', ".kontak .btn-close", function(){
    $('.kontak').removeClass('action');
    $('.ckontak').removeClass('action');
});

$(document).on('click', ".kontak .screen", function(){
    $('.kontak').removeClass('action');
    $('.ckontak').removeClass('action');
});
