/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Check from './check'
import X from './x'

export default class Toggle extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true }, () => {})
    this.handleBlur = this.setState.bind(this, { hasFocus: false }, () => {})
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
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

    if (!('checked' in this.props)) {
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

  render () {
    const { className, icons: _icons } = this.props

    const inputProps = this.props
    delete inputProps.className
    delete inputProps.icons

    const classes = classNames('aaronshaf-toggle', {
      'aaronshaf-toggle--checked': this.state.checked,
      'aaronshaf-toggle--focus': this.state.hasFocus,
      'aaronshaf-toggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchEnd={this.handleClick}
      >
        <div className='aaronshaf-toggle-track'>
          <div className='aaronshaf-toggle-track-check'>
            <Check />
          </div>
          <div className='aaronshaf-toggle-track-x'>
            <X />
          </div>
        </div>
        <div className='aaronshaf-toggle-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='aaronshaf-toggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'
