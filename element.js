/** @jsx preact.h */
import preact from 'preact'
import ToggleComponent from './components'

export default class ToggleElement extends HTMLElement {
  constructor() {
    super()
    this._checked = null
    this._value = null
  }

  static get observedAttributes() { return ['checked', 'value'] }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'checked':
        this._checked = newValue
        break
      case 'value':
        this._value = newValue
        break
    }
    if (this.rendered) { this._updateRendering() }
  }
  connectedCallback() {
    this._updateRendering()
  }

  get checked() { return this._checked }
  set checked(v) { this.setAttribute('checked', v) }

  get value() { return this._value }
  set value(v) { this.setAttribute('value', v) }

  _updateRendering() {
    preact.render(<ToggleComponent />, this, this.lastChild)
    this.rendered = true
  }

  // disconnectedCallback() {}
}
