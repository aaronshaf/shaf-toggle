/** @jsx preact.h */
import preact from 'preact'
import ToggleComponent from './components'
import createElementClass from 'create-element-class'

export default createElementClass({
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  },

  connectedCallback() {
    this.input = this.querySelector('input')
    this.input.className += 'shaf-toggle-screenreader-only'
    this.updateRendering()
  },

  updateRendering() {
    preact.render(<ToggleComponent input={this.input} />, this, this.lastChild)
    this.rendered = true
  }
})
