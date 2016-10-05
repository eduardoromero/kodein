<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="http://semantic-ui.com/images/avatar/small/joe.jpg">
        </a>
        <div class="content">
          <a class="author">Bob</a>
          <div class="metadata">
            <div class="date">1 day ago</div>
          </div>
          <div class="text">
            <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
            <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="http://semantic-ui.com/images/avatar/small/christian.jpg">
        </a>
        <div class="content">
          <a class="author">Code Thug</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
          </div>
          <div class="text">
            I re-tweeted this.
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui primary submit labeled icon button" id="add_comment">
          <i class="icon edit" /> Add Comment
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
  form.reply{
    position: fixed;
    width: 100%;
    bottom: 0;
    margin-bottom: 10px;
    margin-right: 5px;
  }
</style>
<script>
  export default{
    data() {
      return {};
    },
    components: {},
  };
</script>
