<template>
  <div class="player">
    <div class="md-subhead">
      <span>AudioTrack && playsinline / 音轨 及 移动端不全屏 hls</span>
    </div>
    <video-player
      class="vjs-custom-skin"
      :options="playerOptions"
      :playsinline="true"
      @ready="playerReadied($event)"
    ></video-player>
  </div>
</template>

<script>
// videojs
import videojs from "video.js";

// export
export default {
  data() {
    return {
      playerOptions: {
        height: "360",
        autoplay: true,
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
        sources: [
          {
            type: "application/x-mpegURL",
            src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" //你的m3u8地址（必填）
          }
        ],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg"
      }
    };
  },
  methods: {
    playerReadied(player) {
      const track = new videojs.AudioTrack({
        id: "my-spanish-audio-track",
        kind: "translation",
        label: "Spanish",
        language: "es"
      });
      player.audioTracks().addTrack(track);
      // Get the current player's AudioTrackList object.
      const audioTrackList = player.audioTracks();

      // Listen to the "change" event.
      audioTrackList.addEventListener("change", function() {
        // Log the currently enabled AudioTrack label.
        for (let i = 0; i < audioTrackList.length; i++) {
          const track = audioTrackList[i];
          if (track.enabled) {
            videojs.log(track.label);
            return;
          }
        }
      });
    }
  }
};
</script>
