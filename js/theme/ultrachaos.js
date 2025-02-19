ace.define('ace/theme/ultrachaos', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-ultrachaos';
    exports.cssText = `
/* this theme created by fish_hell*/
.ace-ultrachaos .ace_gutter {
  background: #2a2a2a;
  color: #888;
}

.ace-ultrachaos .ace_print-margin {
  width: 1px;
  background: #333
}

.ace-ultrachaos {
  background-color: #222;
  color: #fff;
  display: inline-block;
}

.ace-ultrachaos .ace_cursor {
  color: #fff;
}

.ace-ultrachaos .ace_marker-layer .ace_selection {
  background: #333
}

.ace-ultrachaos.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
}

.ace-ultrachaos .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-ultrachaos .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483E
}

.ace-ultrachaos .ace_marker-layer .ace_active-line {
  background: #444
}

.ace-ultrachaos .ace_gutter-active-line {
  background-color: #2e2e2e
}

.ace-ultrachaos .ace_marker-layer .ace_selected-word {
  border: 1px solid #443
}

.ace-ultrachaos .ace_invisible {
  color: #52524d
}

.ace-ultrachaos .ace_entity.ace_name.ace_tag,
.ace-ultrachaos .ace_keyword,
.ace-ultrachaos .ace_meta.ace_tag,
.ace-ultrachaos .ace_storage {
  color: #f00;
  animation: blink 0.5s infinite step-start;
}

.ace-ultrachaos .ace_punctuation,.ace-ultrachaos .ace_gutter {
  background: #2F3129;
  color: #8F908A
}

.ace-ultrachaos .ace_print-margin {
  width: 1px;
  background: #555651
}

.ace-ultrachaos {
  background-color: #272822;
  color: #fff
}

.ace-ultrachaos .ace_cursor {
  color: #fff
}

.ace-ultrachaos .ace_marker-layer .ace_selection {
  background: #49483E
}

.ace-ultrachaos.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272727;
}

.ace-ultrachaos .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-ultrachaos .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483E
}

.ace-ultrachaos .ace_marker-layer .ace_active-line {
  background: #333
}

.ace-ultrachaos .ace_gutter-active-line {
  background-color: #272727
}

.ace-ultrachaos .ace_marker-layer .ace_selected-word {
  border: 1px solid #494949;
}

.ace-ultrachaos .ace_invisible {
  color: #525252
}

.ace-ultrachaos .ace_entity.ace_name.ace_tag,
.ace-ultrachaos .ace_keyword,
.ace-ultrachaos .ace_meta.ace_tag,
.ace-ultrachaos .ace_storage {
  color: #ff0;
  display: inline-block;
  animation: rotate 1s infinite linear;
}

.ace-ultrachaos .ace_punctuation,
.ace-ultrachaos .ace_punctuation.ace_tag {
  color: #fff
}

.ace-ultrachaos .ace_constant.ace_character,
.ace-ultrachaos .ace_constant.ace_language,
.ace-ultrachaos .ace_constant.ace_numeric,
.ace-ultrachaos .ace_constant.ace_other {
  color: #a0f;
  animation: size 1s infinite linear;
}

.ace-ultrachaos .ace_invalid {
  color: #fff;
  background-color: #f00
}

.ace-ultrachaos .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #a0f
}

.ace-ultrachaos .ace_support.ace_constant,
.ace-ultrachaos .ace_support.ace_function {
  color: #0ff;
  display: inline-block;
  animation: rotateX 1s infinite linear;
}

.ace-ultrachaos .ace_fold {
  background-color: #0f0;
  border-color: #F8F8F2
}

.ace-ultrachaos .ace_storage.ace_type,
.ace-ultrachaos .ace_support.ace_class,
.ace-ultrachaos .ace_support.ace_type {
  font-style: italic;
  display: inline-block;
  color: #f70;
  animation: rotateY 1s infinite linear;
}

.ace-ultrachaos .ace_entity.ace_name.ace_function,
.ace-ultrachaos .ace_entity.ace_other,
.ace-ultrachaos .ace_entity.ace_other.ace_attribute-name,
.ace-ultrachaos .ace_variable {
  color: #f00;
  animation: blink 0.2s infinite step-start;

}

.ace-ultrachaos .ace_variable.ace_parameter {
  font-style: italic;
  color: #0ff;
  animation: rotateX 1s infinite linear;
  display: inline-block;
}

.ace-ultrachaos .ace_string {
  color: #0f0;
  display: inline-block;
  animation: shake 0.2s infinite linear;
}

.ace-ultrachaos .ace_comment {
  color: #888;
  animation: boldblink 1s infinite linear;
}

.ace-ultrachaos .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}

.ace-ultrachaos .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}


@keyframes blink {0%{ opacity: 0; }50%{ opacity: 1; }100%{ opacity: 0; }}
@keyframes rotate {0%{ transform:rotate(0deg); } 100%{ transform:rotate(360deg); }}
@keyframes rotateX {0%{transform: rotateX(0deg);}100%{transform: rotateX(360deg);}}
@keyframes rotateY {0%{transform: rotateY(0deg);}100%{transform: rotateY(360deg);}}
@keyframes size { 0%{font-size: 1em;} 50%{font-size: 1.5em;}100%{font-size: 1em;} }
@keyframes wave { 25% {transform: rotateZ(50deg);}70% {transform: rotateZ(-50deg);}}
@keyframes boldblink {
  0% { -webkit-text-stroke: 0; }
  10% { -webkit-text-stroke: 0.2px #888; }
  20% { -webkit-text-stroke: 0.4px #888; }
  30% { -webkit-text-stroke: 0.6px #888; }
  40% { -webkit-text-stroke: 0.8px #888; }
  50% { -webkit-text-stroke: 1px #888; }
  60% { -webkit-text-stroke: 0.8px #888; }
  70% { -webkit-text-stroke: 0.6px #888; }
  80% { -webkit-text-stroke: 0.4px #888; }
  90% { -webkit-text-stroke: 0.2px #888; }
  100% { -webkit-text-stroke: 0; }
}
@keyframes shake {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }}

    `;
    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
