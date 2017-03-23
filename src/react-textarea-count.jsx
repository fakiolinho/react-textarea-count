import React, { Component, PropTypes } from 'react';

export default class Textarea extends Component {
  static propTypes = {
    countLimit: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    countShow: PropTypes.bool,
  };

  static defaultProps = {
    countLimit: 0,
    countShow: true,
  };

  state = {
    count: 0,
  };

  handleChange = () => {
    this.setState({
      count: this.textarea.value.length,
    });
  };

  renderCount() {
    const { countLimit } = this.props;
    const className = `textarea__count${this.textarea && countLimit && this.textarea.value.length > countLimit ? ' textarea__count--error' : ''}`;

    return (
      <span className={className}>
        {this.state.count}{countLimit > 0 && `/${countLimit}`}
      </span>
    );
  }

  render() {
    const { countLimit, countShow, ...restProps } = this.props;

    return (
      <div className="textarea__wrapper">
        <textarea
          {...restProps}
          ref={ref => (this.textarea = ref)}
          onInput={this.handleChange}
        />
        {countShow && this.renderCount()}
      </div>
    );
  }
}
