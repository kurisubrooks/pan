var gui = require("nw.gui"),
	window = gui.Window.get();

window.moveTo(window.screen.availWidth / 2, 0);

$(function() {
	function summon(options) {
        var toast = $('<toast></toast>', {class: options.type === 'pill' ? 'pill' : '', 'data-action': options.action ? options.action : ''});
        toast.append($('<img></img>', {class: 'toast-img', src: options.icon ? options.icon : 'default.png'}));
        toast.append($('<div></div>', {class: 'toast-title', text: options.title}));
        toast.append($('<div></div>', {class: 'toast-content', text: options.content}));
        if (options.sound) new Audio('audio.mp3').play();
		$(".container").append(toast);
		window.resizeTo($(document).width(), $(document).height());
		window.moveTo((window.screen.availWidth - $(document).width()) / 2, 0);
    }

	function pan(options) {
        if (typeof options === "object" && options.title && options.content) summon(options);
        else throw new Error("Options should be a variable containing title and content.");
    }

    pan({
        title: 'Notification',
        content: 'Woo Hoo!',
        type: 'pill',
        icon: 'https://www.gravatar.com/avatar/a77d7e92acc92dad1c557bba3024914c?s=512',
        action: undefined,
        sound: null
    });
});
