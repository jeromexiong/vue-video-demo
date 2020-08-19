<template>
  <div class="player">
    <div class="md-subhead">
      <span>{{isRTMP ? 'rtmp' : 'flv'}}流播放 & 自定义hotkeys</span>
      <button @click="switchSource">切换</button>
    </div>
    <video-player
      playsinline
      class="vjs-custom-skin"
      :options="playerOptions"
      customEventName="changed"
      @ready="playerIsReady"
      @changed="playerStateChanged($event)"
    ></video-player>
  </div>
</template>

<script>
import "videojs-flash";
import "videojs-hotkeys";
export default {
  data() {
    return {
      isRTMP: true,
      playerOptions: {
        //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // sources: [{
        //     type: "application/x-mpegURL",
        //     src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" //你的m3u8地址（必填）
        // }],
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://58.200.131.2:1935/livetv/hunantv",
          },
        ],
        techOrder: ["flash", "html5"],
        // poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true, //全屏按钮
        // },
      },
    };
  },
  methods: {
    playerStateChanged(playerCurrentState) {
      console.log("example 5: state changed", playerCurrentState);
    },
    playerIsReady(player) {
      console.log("example 5 ready!", player);
      player.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
        fullscreenKey: function (event, player) {
          // override fullscreen to trigger when pressing the F key or Ctrl+Enter
          return event.which === 70 || (event.ctrlKey && event.which === 13);
        },
      });
    },
    switchSource() {
      this.isRTMP = !this.isRTMP;
      this.playerOptions.sources = this.isRTMP
        ? [
            {
              type: "rtmp/mp4",
              src: "rtmp://58.200.131.2:1935/livetv/hunantv",
            },
          ]
        : [
            {
              type: "video/x-flv",
              src: "http://img.ksbbs.com/asset/Mon_1704/15868902d399b87.flv",
            },
          ];
    },
  },
};
</script>

