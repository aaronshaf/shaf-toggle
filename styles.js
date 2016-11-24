export default
`.shaf-toggle {
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

.shaf-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.shaf-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4D4D4D;
}

.shaf-toggle--focus .shaf-toggle-track {
  -webkit-transition: background-color 0.2s ease;
  -moz-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
}

.shaf-toggle:hover:not(.shaf-toggle--disabled) .shaf-toggle-track {
  background-color: #000000;
}

.shaf-toggle--checked .shaf-toggle-track {
  background-color: #19AB27;
}

.shaf-toggle--checked:hover:not(.shaf-toggle--disabled) .shaf-toggle-track {
  background-color: #128D15;
}

.shaf-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.shaf-toggle--checked .shaf-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.shaf-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.shaf-toggle--checked .shaf-toggle-track-x {
  opacity: 0;
}

.shaf-toggle-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50%;
  background-color: #FAFAFA;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: left 0.25s ease, box-shadow 0.25s ease;
  -moz-transition: left 0.25s ease, box-shadow 0.25s ease;
  transition: left 0.25s ease, box-shadow 0.25s ease;
  will-change: left, box-shadow;
}

.shaf-toggle--checked .shaf-toggle-thumb {
  left: 27px;
  border-color: #19AB27;
}

.shaf-toggle--focus .shaf-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
  -moz-box-shadow: 0px 0px 3px 2px #0099E0;
  box-shadow: 0px 0px 2px 3px #0099E0;
}

.shaf-toggle:active:not(.shaf-toggle--disabled) .shaf-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
  -moz-box-shadow: 0px 0px 5px 5px #0099E0;
  box-shadow: 0px 0px 5px 5px #0099E0;
}`
