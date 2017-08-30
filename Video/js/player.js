function player(){
    var VideoMp4Url = document.getElementById("VideoSourceMp4").value;
    document.write("<link href='http://vjs.zencdn.net/5.8.8/video-js.css' rel='stylesheet'><script src='http://vjs.zencdn.net/5.8.8/video.js'></script><script src='https://unpkg.com/videojs-flash/dist/videojs-flash.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.10.1/videojs-contrib-hls.min.js'></script><title>JLCVideo - Player</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><video id='video' width='100%' height='' controls data-setup='' class='video-js vjs-default-skin'><source src='"+VideoMp4Url+"' type='application/x-mpegURL'></video>"); 
	}
