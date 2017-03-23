'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0
    }, _this.handleChange = function () {
      _this.setState({
        count: _this.textarea.value.length
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textarea, [{
    key: 'renderCount',
    value: function renderCount() {
      var _props = this.props,
          countLimit = _props.countLimit,
          countValidation = _props.countValidation;

      var className = 'textarea__count' + (countValidation && (this.textarea && this.textarea.value.length) > countLimit ? ' textarea__count--error' : '');

      return _react2.default.createElement(
        'span',
        { className: className },
        this.state.count,
        countLimit > 0 && '/' + countLimit
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'textarea__wrapper' },
        _react2.default.createElement('textarea', _extends({}, this.props, {
          ref: function ref(_ref2) {
            return _this2.textarea = _ref2;
          },
          onInput: this.handleChange
        })),
        this.renderCount()
      );
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  countLimit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  countValidation: _react.PropTypes.bool
};
Textarea.defaultProps = {
  countLimit: 0,
  countValidation: false
};
exports.default = Textarea;
