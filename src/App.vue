<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
import Header from 'components/Header';
import Tab from 'components/Tab';
import Player from 'components/Player';
export default {
  name: 'App',
  components: {
    Header,
    Tab,
    Player
  }
};
</script>

<style scoped lang="stylus">
</style>
