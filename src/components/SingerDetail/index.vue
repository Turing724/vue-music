<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import { ERR_OK } from 'api/config';
import { getSingerDetail } from 'api/singer';
import { createSong } from 'common/js/song';
import musicList from 'components/musicList';
export default {
  components: {
    musicList
  },
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(['singer'])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer');
        return;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list);
          console.log(this.songs);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  }
};
</script>
 <style lang="stylus" scoped>
 @import '~common/stylus/variable';

 .slide-enter-active, .slide-leave-active {
   transition: all 0.3s;
 }

 .slide-enter, .slide-leave-to {
   transform: translate3d(100%, 0, 0);
 }
</style>

