<template>
  <div id="app">
    <div class="appcontent">
      <Toolbar />
      <div class="ui fluid container" id="codingrounds">
        <div class="ui internally celled grid">
          <div class="stretched row">
            <div class="ten wide column">
              <Editor id="editor"/>
            </div>
            <div class="six wide column">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Horizon from '@horizon/client';

  import Editor from 'components/Editor.vue';
  import Comments from 'components/Comments.vue';
  import Toolbar from 'components/Toolbar.vue';

  export default {
    data() {
      return {
        basename: `${window.location.protocol}//${window.location.hostname}`,
        eventBus: new Vue(),
        horizon: new Horizon({ host: 'horizon.foxteck.org:8181' })
      };
    },
    components: {
      Comments: Comments,
      Editor: Editor,
      Toolbar: Toolbar
    },
    created() {
      this.horizon.connect();

      this.horizon.onReady()
          .subscribe(
            () => console.log('Connected to Horizon server')
          );
    }
  };
</script>

<style lang="less">
  @import 'https://fonts.googleapis.com/css?family=Inconsolata';
  @import url('https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css');

  body {
    font-family: Helvetica, sans-serif;
  }

  .appcontent {
    min-height: 500px;
  }

  #codingrounds {
    position: fixed;
    top: 0;
    padding-top: 85px;
  }

  div.internally.celled.grid {
    min-height: 100vh;
  }
</style>
