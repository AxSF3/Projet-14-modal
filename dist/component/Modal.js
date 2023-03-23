"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _button = _interopRequireDefault(require("./assets/button.png"));

var _ChicagoFLF = _interopRequireDefault(require("./assets/ChicagoFLF.ttf"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Modal = _ref => {
  let {
    openModal,
    setOpenModal,
    customText,
    customIcone
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), openModal ? /*#__PURE__*/_react.default.createElement(StyledBackground, null, /*#__PURE__*/_react.default.createElement(StyledModalWrapper, null, /*#__PURE__*/_react.default.createElement(StyledModalBorder, null, /*#__PURE__*/_react.default.createElement(StyledModalInnerBorder, null, /*#__PURE__*/_react.default.createElement(StyledAlertContent, null, /*#__PURE__*/_react.default.createElement(StyledTextSection, null, /*#__PURE__*/_react.default.createElement(StyledIcone, null, customIcone), /*#__PURE__*/_react.default.createElement(StyledText, {
    className: "alert-text"
  }, customText)), /*#__PURE__*/_react.default.createElement(StyledButtonSection, null, /*#__PURE__*/_react.default.createElement(StyledBtn, {
    "aria-label": "Close modal",
    onClick: () => setOpenModal(toggle => !toggle)
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(StyledBtn, {
    onClick: () => setOpenModal(toggle => !toggle),
    className: "btn-w"
  }, "OK"))))))) : null);
};

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n@font-face {\n    font-family: Chicago_12;\n    src: url(", ");\n  }\n    "])), _ChicagoFLF.default);

const StyledBackground = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: rgba(189, 189, 189, 0.3);\n  position: fixed;\n  min-height: 100vh;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  padding: 20px;\n  box-sizing: border-box;\n"])));

const StyledModalWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-width: 30rem;\n  max-width: 31rem;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6);\n  background-color: #fff;\n  color: #000;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  z-index: 21;\n  border-radius: 10px;\n  padding: 10px 20px;\n"])));

const StyledModalBorder = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 30rem;\n  border: 2px solid;\n  padding: 3px;\n"])));

const StyledModalInnerBorder = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-color: currentcolor;\n  border-style: solid;\n  border-width: 3.5px 5px;\n"])));

const StyledAlertContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  paddingleft: 30px;\n  paddingright: 20px;\n  padding: 10px;\n"])));

const StyledBtn = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    font-family: Chicago_12;\n    background: #fff;\n    border-image: url(", ") 30 stretch;\n    border-style: solid;\n    border-width: 5.5px;\n    color: #000;\n    cursor: pointer;\n    font-size: 18px;\n    min-height: 20px;\n    min-width: 59px;\n    padding: 0 20px;\n    text-align: center;\n    text-decoration: none;\n    margin-left: 6px;\n    &:active {\n      background: #000;\n      color: #fff;\n    }\n  }\n\n  &.btn-w {\n    width: 95px;\n"])), _button.default);

const StyledText = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-left: 10px;\n  font-family: Chicago_12;\n  font-size: 1.2em;\n  margin-top: 10px;\n  font-weight: normal;\n"])));

const StyledIcone = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n  border: 1.5px solid black;\n  padding: 14px;\n"])));

const StyledTextSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-family: Chicago_12;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 1em;\n  margin-left: 6px;\n  margin-top: 6px;\n"])));

const StyledButtonSection = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: Chicago_12;\n  font-size: 1em;\n  margin-left: 6px;\n  margin-top: 6px;\n"])));

var _default = Modal;
exports.default = _default;