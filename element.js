/** @jsx preact.h */
import preact from 'preact'
import ToggleComponent from './components'

export default class ToggleElement extends BabelHTMLElement {
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

// https://github.com/w3c/webcomponents/issues/587#issuecomment-254126763
function BabelHTMLElement() {
  const newTarget = this.__proto__.constructor
  return Reflect.construct(HTMLElement, [], newTarget)
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement)
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype)
