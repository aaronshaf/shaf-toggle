/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Check from './check'
import X from './x'

export default class Toggle extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true }, () => {})
    this.handleBlur = this.setState.bind(this, { hasFocus: false }, () => {})
    this.input = props.input
    this.state = {
      checked: !!(props.input.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick (event) {
    const checkbox = this.input
    if (event.target !== checkbox) {
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    if (!(this.input.props.checked)) {
      this.setState({checked: checkbox.checked})
    }
  }

  getIcon (type) {
    const { icons } = this.props
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type]
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState)
  // }

  handleInputChange () {
    this.setState({ checked: this.input.checked })
  }

  componentDidMount () {
    this.input.addEventListener('focus', this.handleFocus)
    this.input.addEventListener('blur', this.handleBlur)
    this.input.addEventListener('change', this.handleInputChange)
  }

  componentWillUnmount () {
    this.input.removeEventListener('focus', this.handleFocus)
    this.input.removeEventListener('blur', this.handleBlur)
    this.input.removeEventListener('change', this.handleInputChange)
  }

  render () {
    const { className, icons: _icons } = this.props

    const inputProps = this.props
    delete inputProps.className
    delete inputProps.icons

    const classes = classNames('shaf-toggle', {
      'shaf-toggle--checked': this.state.checked,
      'shaf-toggle--focus': this.state.hasFocus,
      'shaf-toggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchEnd={this.handleClick}
      >
        <div className='shaf-toggle-track'>
          <div className='shaf-toggle-track-check'>
            <Check />
          </div>
          <div className='shaf-toggle-track-x'>
            <X />
          </div>
        </div>
        <div className='shaf-toggle-thumb' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'
