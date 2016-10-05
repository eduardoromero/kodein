<template>
  <div class="code editor">
    <div id="ace"></div>
  </div>
</template>
<style scoped>
  div#ace {
    width: 100%;
    height: 95vh;
  }
</style>
<script>
  const ace = require('brace');
  require('brace/mode/html');
  require('brace/mode/c_cpp');
  require('brace/mode/csharp');
  require('brace/mode/java');
  require('brace/mode/javascript');
  require('brace/mode/perl');
  require('brace/mode/php');
  require('brace/mode/python');
  require('brace/mode/r');
  require('brace/mode/ruby');
  require('brace/mode/rust');
  require('brace/mode/swift');
  require('brace/mode/typescript');
  require('brace/theme/chrome');
  require('brace/ext/emmet');

  export default{
    data() {
      return {
        editor: null,
        contentBackup: '',
        code: '',
        lang: 'javascript',
        theme: 'chrome'
      };
    },
    created() {
      this.$root.eventBus.$on('LANGUAGE_CHANGED', (selected) => {
        if (selected.value !== this.lang) {
          this.updateLang(selected.value);
        }
      });
    },
    mounted() {
      const editor = ace.edit('ace');
      editor.$blockScrolling = Infinity;

      editor.setOption('enableEmmet', true);
      editor.getSession()
            .setMode(`ace/mode/${this.lang}`);
      editor.setTheme(`ace/theme/${this.theme}`);

      editor.setValue(this.code, 1);

      editor.on('change', () => {
        this.code = editor.getValue();
        this.contentBackup = this.code;
      });

      this.editor = editor;
    },
    watch: {
      code: function updateCode(newValue) {
        if (this.contentBackup !== newValue) {
          this.editor.setValue(newValue, 1);
        }
      }
    },
    components: {},
    methods: {
      updateLang(lang) {
        this.lang = lang;
        this.editor.getSession()
            .setMode(`ace/mode/${this.lang}`);
        this.editor.focus();
      }
    },
    events: {
      'vue-ace-editor:init': function init() {

      }
    },
  };
</script>
