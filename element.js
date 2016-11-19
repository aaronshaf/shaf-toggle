/** @jsx preact.h */
import preact from 'preact'
import ToggleComponent from './components'

export default class ToggleElement extends HTMLElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback() {
    this.input = this.querySelector('input')
    this.input.className += 'shaf-toggle-screenreader-only'
    this.updateRendering()
  }

  updateRendering() {
    const a = preact.render(<ToggleComponent input={this.input} />, this, this.lastChild)
    this.rendered = true
  }
}
