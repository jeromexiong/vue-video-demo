<template>
  <div class="player">
    <div class="md-subhead">
      <span>basic mp4</span>
    </div>
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @ready="playerReadied"
      @statechanged="playerStateChanged($event)"
    ></video-player>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // videojs options
      playerOptions: {
        height: "360",
        autoplay: true,
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // sources: [{
        //   type: "video/mp4",
        //   // mp4
        //   src: "http://vjs.zencdn.net/v/oceans.mp4",
        //   // webm
        //   // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        // }],
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          }
        ],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
      }
    };
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log("dynamic change options", this.player);

      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';

      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })

      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      // seek to 10s
      console.log("example player 1 readied", player);
      player.currentTime(10);
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>
<style></style>
