
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;
  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      "height": "100%",
      "width": "100%",
      "videoId": "Gq5zx6rzePM",
       "playerVars": {
          "autoplay": 1, // Auto-play the video on load
          "controls": 1, // Show pause/play buttons in player
          "showinfo": 0, // Hide the video title
          "modestbranding": 1, // Hide the Youtube Logo
          "fs": 1, // Hide the full screen button
          "cc_load_policy": 0, // Hide closed captions
          "iv_load_policy": 3, // Hide the Video Annotations
          "start": 1,
          "autohide": 1, // Hide video controls when playing
        },
      "events": {
        "onReady": onPlayerReady
        
      }
    });
  }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        
      }
   


      function handleClick (event) {
        let button = event.target.id;
        switch (button) {
          case "btn-1":
            player.seekTo(0);
            break;
          case "btn-2":
            player.seekTo(987);
            break;
          case "btn-2a":
            player.seekTo(996);
            break;
          case "btn-3":
            player.seekTo(1725);
            break;
          case "btn-3a":
            player.seekTo(1741);
            break;
          case "btn-4":
            player.seekTo(3170);
            break;
          case "btn-5":
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

  $('.link').click(function(){
    $('.link.onstate').removeClass('onstate')
        $(this).addClass('onstate');
});
}); //Automatically run these jQuery scripts when the page loads


//lols
