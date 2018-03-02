// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: 'Gq5zx6rzePM',
          playerVars: {
            color: 'white',
            controls: 2,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            enablejsapi: 1
          },
          events: {
            onReady: 'initialize',
            onStateChange: 'stateChange'
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function initialize() {
        player.mute();
        stateChange();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function handleClick (event) {
        let button = event.target.id;
        switch (button) {
          case "btn-1":
            player.seekTo(0);
            break;
          case "btn-2":
            player.seekTo(955);
            break;
          case "btn-3":
            player.seekTo(1680);
            break;
          case "btn-4":
            player.seekTo(3170);
            break;
          case "btn-5":
            player.seekTo(5880);
            break;
          case "btn-6":
            player.seekTo(6040);
            break;
          default:
            player.seekTo(0);
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

//Run JQuery scripts
$(function () {
  $('.adImgBox').hide();

  $('.link').click(function() {
    $('.adImgBox').hide();
    $('.adImgBoxdefault').hide();        
    $('.adImgBox[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
  });
}); //Automatically run these jQuery scripts when the page loads

//lols
