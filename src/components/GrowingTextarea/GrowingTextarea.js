/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';
import './GrowingTextarea.scss';

const TextArea = styled.textarea`
    position: relative;
    resize: none;
`;

/**
 * Textarea that expands as you type in it
 * Supported props
 * @class
 * @property {string} onChange Change event for input field
 * @property {string} maxRows Maximum number of lines this can expand to
 */
class GrowingTextArea extends React.Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);

    this.state = {
      rows: 1,
      diff: 0,
    };
    this.checkResize = this.checkResize.bind(this);
    this.areaRef = React.createRef();
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    const h1 = this.areaRef.current.clientHeight;
    this.setState({rows: 2}, (oldState) => {
      const h2 = this.areaRef.current.clientHeight;
      const diff = h2 - h1;
      this.setState({
        rows: 1,
        diff,
      });
    });
  }

  // eslint-disable-next-line require-jsdoc
  checkResize(e) {
    const inp = e.currentTarget;
    const lines = (inp.value.match(/\n|\r\n|\r/g) || []).length;
    this.setState({rows: lines+1}, () => {
      const diff=Math.ceil((inp.scrollHeight-inp.clientHeight)/this.state.diff);
      const newrows = this.state.rows + diff;
      this.setState({
        rows: newrows <= this.props.maxRows
          ? newrows
          : this.props.maxRows,
      });
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {
      ref,
      rows,
      onChange,
      children,
      ...rest
    } = this.props;
    return <TextArea
      rows={this.state.rows}
      ref={this.areaRef}
      onChange={this.checkResize}
      {...rest}
    >
    </TextArea>;
  }
}

export default GrowingTextArea;
