$(function() {
  $('.adImgBox').hide();
  $(".gifbox").find('img').attr("src", "img/ads/pregame.gif"); 

  $('.link').click(clickCallback);

  function clickCallback () {
    $('.adImgBox').hide();
    $('.adImgBoxdefault').hide();
    $('.adImgBox[data-link=' + $(this).data('link') + ']').fadeIn({
      width: '200px'
    }, 300);
  }

  $('.link').click(function() {
    $('.link.onstate').removeClass('onstate');
    $(this).addClass('onstate');
  });

   $('.gif').click(function() {
    $(".gifbox").find('img').attr("src", "img/ads/pregame.gif");
  });

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  if(location.protocol.indexOf('file') != -1) {
   tag.src = "http://www.youtube.com/iframe_api";
 } else {
   tag.src = "//www.youtube.com/iframe_api";
     // or location.protocol  + '//www.youtube.com/iframe_api'
   }
   var firstScriptTag = document.getElementsByTagName("script")[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   var done = false;
  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      "height": "444px",
      "width": "100%",
      "videoId": "CHHb-dd03fU",
      "playerVars": {
        "autoplay": 1, // Auto-play the video on load
        "disablekb": 1,
        "controls": 1, // Show pause/play buttons in player
        "showinfo": 0, // Hide the video title
        "modestbranding": 1, // Hide the Youtube Logo
        "fs": 1, // Hide the full screen button
        "cc_load_policy": 0, // Hide closed captions
        "iv_load_policy": 3, // Hide the Video Annotations
        "start": 1,
        "autohide": 1, // Hide video controls when playing
        "mute": 1,
        "rel": 0
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

  function handleClick(event) {
    let button = event.target.id;
    switch (button) {
      case "btn-1":
      player.seekTo(7);
      break;
      case "btn-2":
      player.seekTo(24);
      break;
      case "btn-3":
      player.seekTo(46);
      break;
      case "btn-4":
      player.seekTo(70);
      break;
      case "btn-5":
      player.seekTo(91);
      break;
      case "btn-6":
      player.seekTo(117);
      break;
      default:
      player.seekTo(0);
    }
  }

  function stopVideo() {
    player.stopVideo();
  }

  var eventTimestamps = {
    0: 'default',
    7: 'act-pre', // Pregame Pizza Hut
    25: 'act-goal-1-pre', // Fanatics Pre Goal
    32: 'act-goal-1-0',
    46: 'act-goal-2-pre', // Fubo Pre Goal 2
    57: 'act-goal-2-0',
    70: 'act-half-pre', // Coke Halftime
    79: 'act-half',
    91: 'act-pred-01', // McDonalds Pre Goal 3
    95: 'act-pred-02',
    103: 'act-pred-03',
    117: 'act-post', // Stubhub Pre
    127: 'act-end' 
  };

  setInterval(function () {
    if (eventTimestamps[Math.floor(player.getCurrentTime())]) {
      $('.adImgBox').hide();
      $('.adImgBoxdefault').hide();


      if (player.getCurrentTime() > 7 && player.getCurrentTime() < 24 )  {
        $('.link[data-link=act-pre]').addClass('onstate');
      } else if (player.getCurrentTime() > 25 && player.getCurrentTime() < 45 )  {
        $('.link[data-link=act-pre]').removeClass('onstate');
        $('.link[data-link=act-goal-pre]').addClass('onstate');
      } else if (player.getCurrentTime() > 46 && player.getCurrentTime() < 69 )  {
        $('.link[data-link=act-goal-pre]').removeClass('onstate');
        $('.link[data-link=act-goal-2-pre]').addClass('onstate');
      } else if (player.getCurrentTime() > 70 && player.getCurrentTime() < 90 )  {
        $('.link[data-link=act-goal-2-pre]').removeClass('onstate');
        $('.link[data-link=act-half-pre]').addClass('onstate');
      } else if (player.getCurrentTime() > 91 && player.getCurrentTime() < 116  )  {
        $('.link[data-link=act-half-pre]').removeClass('onstate');
        $('.link[data-link=act-pred-01]').addClass('onstate');
      } else if (player.getCurrentTime() > 117 )  {
        $('.link[data-link=act-pred-01]').removeClass('onstate');
        $('.link[data-link=act-post]').addClass('onstate');
      }

      
      $('.adImgBox[data-link=' + eventTimestamps[Math.floor(player.getCurrentTime())] +  ']').fadeIn({
        width: '200px'
      }, 300);
    }
  }, 1000);


  window.handleClick = handleClick;

}); //Automatically run these jQuery scripts when the page loads

//lols
