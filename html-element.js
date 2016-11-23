let __HTMLElement = HTMLElement
if (window.customElements) {
  __HTMLElement = BabelHTMLElement
}

// https://github.com/babel/babel/issues/4480
var reConstruct = typeof Reflect === 'object' ?
  Reflect.construct : function (Parent, args, Child) {
  return Parent.apply(this, args)
}

// https://github.com/w3c/webcomponents/issues/587#issuecomment-254126763
function BabelHTMLElement() {
  const newTarget = this.__proto__.constructor
  return reConstruct(HTMLElement, [], newTarget)
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement)
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype)

export default __HTMLElement
