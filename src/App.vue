<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'components/Header';
import Tab from 'components/Tab';
export default {
  name: 'App',
  components: {
    Header,
    Tab
  }
};
</script>

<style scoped lang="stylus">
</style>
