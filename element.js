/** @jsx preact.h */
import preact from 'preact'
import ToggleComponent from './components'
import createElementClass from 'create-element-class'
import css from './styles'

export default createElementClass({
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  },

  connectedCallback() {
    if (this.querySelector('input')) {
      this.init()
    } else {
      window.requestAnimationFrame(() => {
        this.init()
      })
    }
  },

  init() {
    this.container = document.createElement('div')

    if (document.body.attachShadow) {
      this._shadowRoot = this.container.attachShadow({mode: 'open'})
      const style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode(css))
      this._shadowRoot.appendChild(style)
    }

    this.appendChild(this.container)

    this.input = this.querySelector('input')
    this.input.className += ' shaf-screenreader-only'
    this.updateRendering()
  },

  updateRendering() {
    const root = this._shadowRoot || this.container
    preact.render(<ToggleComponent input={this.input} />, root, root.querySelector(':not(style)'))
    this.rendered = true
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.attachShadow) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.insertBefore(style, document.head.firstChild)
  }

  const tagStyle = document.createElement('style')
  tagStyle.type = 'text/css'
  tagStyle.appendChild(document.createTextNode(
`shaf-toggle {
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
  line-height: 1rem;
}

.shaf-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: fixed;
  width: 1px;
}`))
  document.head.insertBefore(tagStyle, document.head.firstChild)
})
