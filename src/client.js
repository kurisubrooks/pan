var gui = require("nw.gui"),
    window = gui.Window.get();

$(function() {
    function resize() {
        window.resizeTo($(".container").width(), $(".container").height());
        window.moveTo((window.screen.availWidth - $(".container").width()) / 2, 0);
    }
    resize();

    function summon(options) {
        window.resizeTo(window.screen.availWidth, window.screen.availHeight);
        var toast = $('<toast></toast>', {class: options.type === 'pill' ? 'pill' : '', 'data-action': options.action ? options.action : '', style: 'display: none'});
        toast.append($('<img></img>', {class: 'toast-img', src: options.icon ? options.icon : 'default.png'}));
        toast.append($('<div></div>', {class: 'toast-title', text: options.title}));
        toast.append($('<div></div>', {class: 'toast-content', text: options.content}));
        if (options.sound) new Audio('audio.mp3').play();
        $('.container').append(toast);
        toast.slideDown('fast', function() {
            resize();
        });
    }

    function pan(options) {
        if (typeof options === "object" && options.title && options.content) summon(options);
        else throw new Error("Options should be a variable containing title and content.");
    }

    $('toast').click($('toast').fadeOut('fast'));

    pan({
        title: 'Squarespace',
        content: 'Build it beautiful.',
        icon: 'https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s900-c-k-no/photo.jpg',
        action: undefined,
        sound: null
    });

    $('#bx').click(function(){
        pan({
            title: 'Notification',
            content: 'Square? How dare you.',
            icon: 'https://www.gravatar.com/avatar/a77d7e92acc92dad1c557bba3024914c?s=512',
            action: undefined,
            sound: null
        });
    });
    $('#ro').click(function(){
        pan({
            title: 'Notification',
            content: 'Wow! I\'m round! Amazing!',
            type: 'pill',
            icon: 'https://www.gravatar.com/avatar/a77d7e92acc92dad1c557bba3024914c?s=512',
            action: undefined,
            sound: null
        });
    });
});
