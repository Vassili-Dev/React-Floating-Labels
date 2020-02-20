/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

import styled from 'styled-components';
import './Floating.scss';

const InputWrapper = styled.div`
    position: relative;
`;

/**
 * Input field with floating label
 * Supported props
 * @class
 * @property {string} label Label text for the input
 * @property {string} onChange Change event for input field
 * @property {string} className Class name for input wrapper
 * @property {string} inputClass Class name for input field
 * @property {string} labelClass Class name for label
 */
class FloatingInput extends React.Component {
  constructor(props) {
    super(props);
    const {
      value,
    } = props;

    let dirty = false;
    if (value && value.length > 0) {
      dirty = true;
    }
    this.state = {
      dirty,
    };
    this.onDirty = this.onDirty.bind(this);
    this.inpField = React.createRef();
    this.delegateFocus = this.delegateFocus.bind(this);
  }


  componentDidMount() {
    const text = this.props.value;
    if (text && text.length > 0) {
      this.setState({dirty: true});
    }
  }

  onDirty(e) {
    const val = e.target.value;
    if (val && val.length > 0 && !this.state.dirty) {
      this.setState({dirty: true});
    } else if (
      (!val || val.length <= 0) && this.state.dirty) {
      this.setState({dirty: false});
    }
    if (this.props.onChange) this.props.onChange(e);
  }

  delegateFocus() {
    this.inpField.current.focus();
  }

  render() {
    const {
      className,
      inputClass,
      labelClass,
      // eslint-disable-next-line no-unused-vars
      ref,
      children,
      ...rest
    } = this.props;
    return (
!(/(submit|checkbox|image|hidden|file)/i.test(this.props.type)) ?
  <InputWrapper
    className={`${className || ''} 
      ${/month/i.test(this.props.type)
        ? 'month'
        : ''}`}>
    <input
      className={`floating-input 
      ${inputClass || ''}`}
      {...rest}
      ref={this.inpField}
      onChange={this.onDirty}>
    </input>
    <label
      onClick={this.delegateFocus}
      className={`floating-label 
      ${labelClass || ''} 
      ${this.state.dirty
        ? 'floating'
        : ''}`}
      htmlFor={this.props.id ? this.props.id : ''}>{this.props.label}</label>
    {children}
  </InputWrapper> :
  <input {...rest} className={inputClass || ''} />
    );
  }
}

export default FloatingInput;
