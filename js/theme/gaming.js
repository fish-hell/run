ace.define('ace/theme/gaming', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-gaming';
    exports.cssText = `
/* this theme created by fish_hell*/
.ace-gaming .ace_gutter {
    animation: gaming-bg 3s infinite linear,gaming-sub 3s infinite linear;
  }
  
  .ace-gaming .ace_print-margin {
    width: 1px;
    background: #000000
  }
  
  .ace-gaming {
    animation: gaming-bg 3s infinite linear,bright-gaming 3s infinite;
  }
  
  .ace-gaming .ace_cursor {
    animation: gaming 3s infinite linear;
  }
  
  .ace-gaming .ace_marker-layer .ace_selection {
    animation: gaming-bg-selection 3s infinite linear;
  }
  
  .ace-gaming.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #272822;
  }
  
  .ace-gaming .ace_marker-layer .ace_step {
    background: rgb(102, 82, 0)
  }
  
  .ace-gaming .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #49483E
  }
  
  .ace-gaming .ace_marker-layer .ace_active-line {
    animation: gaming-bg 3s infinite linear;
    animation-delay: -1.5s;
  }
  
  .ace-gaming .ace_gutter-active-line {
    animation: gaming-bg 3s infinite linear;
    animation-delay: -1.5s;
  }
  
  .ace-gaming .ace_marker-layer .ace_selected-word {
    border: 1px solid #49483E
  }
  
  .ace-gaming .ace_invisible {
    color: #52524d
  }
  
  .ace-gaming .ace_entity.ace_name.ace_tag,
  .ace-gaming .ace_keyword,
  .ace-gaming .ace_meta.ace_tag,
  .ace-gaming .ace_storage {
    animation: gaming 3s infinite linear;
  }
  
  .ace-gaming .ace_punctuation,
  .ace-gaming .ace_punctuation.ace_tag {
    color: #fff
  }
  
  .ace-gaming .ace_constant.ace_character,
  .ace-gaming .ace_constant.ace_language,
  .ace-gaming .ace_constant.ace_numeric,
  .ace-gaming .ace_constant.ace_other {
    animation: gaming 3s infinite linear;
    animation-delay: -0.2s;
  }
  
  .ace-gaming .ace_invalid {
    color: #FFFFFF;
    animation: gaming-bg-sub 3s infinite linear;
  }
  
  .ace-gaming .ace_invalid.ace_deprecated {
    color: #F8F8F0;
    background-color: #AE81FF
  }
  
  .ace-gaming .ace_support.ace_constant,
  .ace-gaming .ace_support.ace_function {
    animation: gaming 3s infinite linear;
    animation-delay: -0.4s;
  }
  
  .ace-gaming .ace_fold {
    animation: gaming-bg-sub 3s infinite linear;
    border-color: #FFFFFF
  }
  
  .ace-gaming .ace_storage.ace_type,
  .ace-gaming .ace_support.ace_class,
  .ace-gaming .ace_support.ace_type {
    font-style: italic;
    animation: gaming 3s infinite linear;
    animation-delay: -0.6s;
  }
  
  .ace-gaming .ace_entity.ace_name.ace_function,
  .ace-gaming .ace_entity.ace_other,
  .ace-gaming .ace_entity.ace_other.ace_attribute-name,
  .ace-gaming .ace_variable {
    animation: gaming 3s infinite linear;
    animation-delay: -0.8s;
  }
  
  .ace-gaming .ace_variable.ace_parameter {
    font-style: italic;
    animation: gaming 3s infinite linear;
    animation-delay: -1s;
  }
  
  .ace-gaming .ace_string {
    animation: gaming 3s infinite linear;
    animation-delay: -1.2s;
  }
  
  .ace-gaming .ace_comment {
    animation: gaming-sub 3s infinite linear;
    animation-delay: -1.4s;
  }

  .ace-gaming .ace_class,
  .ace-gaming .ace_id, 
  .ace-gaming .ace_keyword  {
    animation: gaming 3s infinite linear;
    animation-delay: -1.6s;
  }

  .ace-gaming .ace_keyword.ace_important {
    animation: gaming 3s infinite linear;
    animation-delay: -1.8s;
  }
  
  .ace-gaming .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
  }
  
  .ace-gaming .ace_indent-guide-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
  }

  @keyframes gaming {
    0%   { color: #f00; }
    16%  { color: #ff0; }
    33%  { color: #0f0; }
    50%  { color: #0ff; }
    66%  { color: #00f; }
    83%  { color: #f0f; }
    100% { color: #f00; }
}
  @keyframes gaming-bg {
    0%   { background: #200; }
    16%  { background: #220; }
    33%  { background: #020; }
    50%  { background: #022; }
    66%  { background: #002; }
    83%  { background: #202; }
    100% { background: #200; }
}
  @keyframes gaming-sub {
    0%   { color: #a00; }
    16%  { color: #aa0; }
    33%  { color: #0a0; }
    50%  { color: #0aa; }
    66%  { color: #00a; }
    83%  { color: #a0a; }
    100% { color: #a00; }
}

@keyframes gaming-bg-sub {
  0%   { background: #f00; }
  16%  { background: #ff0; }
  33%  { background: #0f0; }
  50%  { background: #0ff; }
  66%  { background: #00f; }
  83%  { background: #f0f; }
  100% { background: #f00; }
}

@keyframes gaming-bg-selection {
  0%   { background: #600; }
  16%  { background: #660; }
  33%  { background: #060; }
  50%  { background: #066; }
  66%  { background: #006; }
  83%  { background: #606; }
  100% { background: #600; }
}

  @keyframes bright-gaming {
    0%   { color: #fdd; }
    16%  { color: #ffd; }
    33%  { color: #dfd; }
    50%  { color: #dff; }
    66%  { color: #ddf; }
    83%  { color: #fdf; }
    100% { color: #fdd; }
}
    `;
    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
