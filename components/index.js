/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Check from './check'
import X from './x'

const trackCheckStyles = {
  'position': 'absolute',
  'width': '14px',
  'height': '10px',
  'top': '0px',
  'bottom': '0px',
  'marginTop': 'auto',
  'marginBottom': 'auto',
  'lineHeight': '0',
  'left': '8px',
  // 'opacity': '0',
  'WebkitTransition': 'opacity 0.25s ease',
  'MozTransition': 'opacity 0.25s ease',
  'transition': 'opacity 0.25s ease'
}

const xStyles = {
  'position': 'absolute',
  'width': '10px',
  'height': '10px',
  'top': '0px',
  'bottom': '0px',
  'marginTop': 'auto',
  'marginBottom': 'auto',
  'lineHeight': '0',
  'right': '10px',
  'opacity': '1',
  'WebkitTransition': 'opacity 0.25s ease',
  'MozTransition': 'opacity 0.25s ease',
  'transition': 'opacity 0.25s ease'
}

const trackStyles = {
  'width': '50px',
  'height': '24px',
  'padding': '0',
  'borderRadius': '30px',
  // 'backgroundColor': '#4D4D4D',
  'WebkitTransition': 'all 0.2s ease',
  'MozTransition': 'all 0.2s ease',
  'transition': 'all 0.2s ease'
}

const srStyles = {
  'border': '0',
  'clip': 'rect(0 0 0 0)',
  'height': '1px',
  'margin': '-1px',
  'overflow': 'hidden',
  'padding': '0',
  'position': 'absolute',
  'width': '1px'
}

const thumbStyles = {
  'position': 'absolute',
  'top': '1px',
  // 'left': '1px',
  'width': '22px',
  'height': '22px',
  // 'border': '1px solid #4D4D4D',
  'borderRadius': '50%',
  'backgroundColor': '#FAFAFA',
  'WebkitBoxSizing': 'border-box',
  'MozBoxSizing': 'border-box',
  'boxSizing': 'border-box',
  'WebkitTransition': 'all 0.25s ease',
  'MozTransition': 'all 0.25s ease',
  'transition': 'all 0.25s ease'
}

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

    const styles = {
      'display': 'inline-block',
      'position': 'relative',
      'cursor': 'pointer',
      'backgroundColor': 'transparent',
      'border': '0',
      'padding': '0',
      'WebkitTouchCallout': 'none',
      'WebkitUserSelect': 'none',
      'KhtmlUserSelect': 'none',
      'MozUserSelect': 'none',
      'MsUserSelect': 'none',
      'userSelect': 'none',
      'WebkitTapHighlightColor': 'transparent'
    }

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchEnd={this.handleClick}
        style={styles}
      >
        <div className='aaronshaf-toggle-track' style={trackStyles}>
          <div className='aaronshaf-toggle-track-check' style={trackCheckStyles}>
            <Check />
          </div>
          <div style={xStyles}>
            <X />
          </div>
        </div>
        <div className='aaronshaf-toggle-thumb' style={thumbStyles} />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='aaronshaf-toggle-screenreader-only'
          type='checkbox'
          style={srStyles}
        />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'
