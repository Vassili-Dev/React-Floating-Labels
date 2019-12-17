/* eslint-disable no-unused-vars */
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
      onChange,
      className,
      inputClass,
      labelClass,
      ratio,
      label,
      children,
      type,
      value,
      ...rest
    } = props;

    this.state = {
      dirty: false,
      value: value,
      type: type,
    };
    this.oldOnChange = onChange;
    this.rest = {...rest};
    this.onDirty = this.onDirty.bind(this);
    this.inpField = React.createRef();
    this.delegateFocus = this.delegateFocus.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({type: nextProps.type, value: nextProps.value});
  }

  onDirty(e) {
    if (e.target.value && e.target.value.length > 0 && !this.state.dirty) {
      this.setState({dirty: true});
    } else if (
      (!e.target.value || e.target.value.length <= 0) && this.state.dirty) {
      this.setState({dirty: false});
    }
    if (this.oldOnChange) this.oldOnChange(e);
  }

  delegateFocus() {
    this.inpField.current.focus();
  }

  render() {
    return (
!(/(submit|checkbox|image|hidden|file)/i.test(this.state.type)) ?
  <InputWrapper
    className={`${this.props.className || ''} 
      ${/month/i.test(this.state.type)
        ? 'month'
        : ''}`}>
    <input
      className={`floating-input 
      ${this.props.inputClass
        ? this.props.inputClass
        : ''}`}
      {...this.rest}
      type={this.state.type}
      value={this.state.value}
      ref={this.inpField}
      onChange={this.onDirty}>
    </input>
    <label
      onClick={this.delegateFocus}
      className={`floating-label 
      ${this.props.labelClass
        ? this.props.labelClass
        : ''} 
      ${this.state.dirty
        ? 'floating'
        : ''}`}
      htmlFor={this.props.id ? this.props.id : ''}>{this.props.label}</label>
    {this.props.children}
  </InputWrapper> :
  <input {...this.props} value={this.state.value} type={this.state.type}/>
    );
  }
}

export default FloatingInput;
