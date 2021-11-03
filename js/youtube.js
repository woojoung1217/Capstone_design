var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // div id= player
          new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 
          playerVars: {
            autoplay : true, //자동재생 유무
            loop : true,     // 반복 재생 유무
            playlist : 'c2wF2jBre4c'            
          },
          events:{
            onReady : function(event) {
              event.target.mute()
            }
          }
        });
      }