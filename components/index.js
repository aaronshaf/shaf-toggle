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

    const classes = classNames('react-toggle', {
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled,
    }, className)

    let styles = {
      // 'display': 'inline-block',
      // // 'position': 'relative',
      // 'cursor': 'pointer',
      // 'backgroundColor': 'transparent',
      // 'border': '0',
      // 'padding': '0',
      // 'WebkitTouchCallout': 'none',
      // 'WebkitUserSelect': 'none',
      // 'KhtmlUserSelect': 'none',
      // 'MozUserSelect': 'none',
      // 'MsUserSelect': 'none',
      // 'userSelect': 'none',
      // 'WebkitTapHighlightColor': 'transparent'
    }

    const trackCheckStyles = {
      // 'position': 'absolute',
      // 'width': '14px',
      // 'height': '10px',
      // 'top': '0px',
      // 'bottom': '0px',
      // 'marginTop': 'auto',
      // 'marginBottom': 'auto',
      // 'lineHeight': '0',
      // 'left': '8px',
      // 'opacity': '0',
      // 'WebkitTransition': 'opacity 0.25s ease',
      // 'MozTransition': 'opacity 0.25s ease',
      // 'transition': 'opacity 0.25s ease'
    }

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchEnd={this.handleClick}
        style={styles}
      >
        <div className='react-toggle-track'>
          <div className='react-toggle-track-check' style={trackCheckStyles}>
            <Check />
          </div>
          <div className='react-toggle-track-x'>
            <X />
          </div>
        </div>
        <div className='react-toggle-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='react-toggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'
