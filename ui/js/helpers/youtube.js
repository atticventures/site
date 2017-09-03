var players = {};
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	$('.youtube').each(function(i){
		var vid = $(this).data('video');
		if ( vid ) {
			var id = 'video-embed-youtube-'+i;
			//$(this).siblings('.cta').attr('data-video-button',id);
			$(this).append('<div id="'+id+'"/>');
			var options = { autohide: 1, color: 'white', modestbranding: 1, showinfo: 0, theme: 'dark', rel: 0, iv_load_policy: 3, playlist: vid };
			if ( $(window).width() > 720 ) { options.playsinline = 1; }
			if ( $(this).data('video-controls') === false ) { options.controls = 0; }
			var player = new YT.Player(id,{ videoId: vid, playerVars: options, events: { 'onReady': onPlayerReady } });
			players[id] = player;
		}
	});
}

function onPlayerReady(event) {
	var iframe = $(event.target.getIframe());
	var wrapper = iframe.parent();
	if ( $(window).width() > 720 ) {
		if ( wrapper.data('video-autoplay') ) { event.target.playVideo() }
		if ( wrapper.data('video-loop') ) { event.target.setLoop({loopPlaylists:true}) }
		if ( wrapper.data('video-mute') ) { event.target.mute(); }
		if ( wrapper.data('video-autoplay') && wrapper.data('video-mute') ) {
			iframe.after($('\
				<div class="overlay" data-video-unmute="true" data-video-restart="true">\
					<a href="#" class="icon unmute" data-toggle="play">Play Video</a>\
				</div>\
			'));
		}
	}
}

$(document).on('click','.video .overlay',function(){
	var iframe = $(this).siblings('iframe');
	var id = iframe.attr('id');
	var player = players[id];
	if ( $(this).data('video-mute') ) { player.mute(); }
	if ( $(this).data('video-unmute') ) { player.unMute(); player.setVolume(60); }
	if ( $(this).data('video-restart') ) { player.seekTo(0); }
	$('html,body').animate({scrollTop:(iframe.offset().top)},750,'swing');
	$(this).remove();
	return false;
});