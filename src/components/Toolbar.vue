<template>
  <div class="ui huge menu">
    <div class="item">
      <img src="../assets/logo-bg-transparent.png">
    </div>
    <div class="header item">&lt;Kodein /&gt;</div>
    <div class="item">
      <div class="ui form">
        <div class="field">
          <label for="language">Pick your poison: </label>
          <div class="ui floating red dropdown search labeled icon button" id="language-dropdown">
            <input type="hidden" name="language" id="language" />
            <i class="black lab icon" />
            <span class="text">JavaScript</span>
            <div class="menu">
              <div class="item" data-value="c_cpp">C/C++</div>
              <div class="item" data-value="csharp">C#</div>
              <div class="item" data-value="java">Java</div>
              <div class="item" data-value="javascript">JavaScript</div>
              <div class="item" data-value="perl">Perl</div>
              <div class="item" data-value="php">PHP</div>
              <div class="item" data-value="python">Python</div>
              <div class="item" data-value="r">R</div>
              <div class="item" data-value="ruby">Ruby</div>
              <div class="item" data-value="rust">Rust</div>
              <div class="item" data-value="swift">Swift</div>
              <div class="item" data-value="typescript">Typescript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right menu">
      <div class="item active">
        <div class="ui action input">
          <input type="text" placeholder="Participant name">
          <div class="ui green icon button"><i class="ui save icon" /></div>
        </div>

        <a class="ui black right labeled icon button"><i class="ui white photo icon" />Snapshot</a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .menu {
    .header.item {
      font-size: 1.6em;
      font-family: 'Inconsolata', monospace;
    }
  }
</style>
<script>
  import jQuery from 'jquery';
  window.jQuery = jQuery;

  const $ = jQuery;

  $.fn.transition = require('semantic-ui-transition');
  $.fn.dropdown = require('semantic-ui-dropdown');

  export default{
    data() {
      return {
        selectedLang: 'javascript'
      };
    },
    created() {
      this.$root.eventBus.$on('LANGUAGE_CHANGED', (selected) => {
        if (this.selectedLang !== selected.value) {
          jQuery('#language-dropdown')
            .dropdown('set selected', selected.value);
        }
      });
    },
    mounted() {
      /* UX */
      jQuery('#language-dropdown')
        .dropdown({
          transition: 'drop',
          fullTextSearch: true,
          allowAdditions: false,
          forceSelection: true,
          onChange: (value, text, $selectedItem) => {
            this.selectedLang = value;
            this.$root.eventBus.$emit('LANGUAGE_CHANGED',
              { value: value, text: text, element: $selectedItem }
            );
          }
        })
      ;
    }
  };
</script>
