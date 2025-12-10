"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandingExtensionsBase = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BrandingExtensionsBase = /*#__PURE__*/function () {
  function BrandingExtensionsBase() {
    (0, _classCallCheck2["default"])(this, BrandingExtensionsBase);
  }

  (0, _createClass2["default"])(BrandingExtensionsBase, [{
    key: "getAppTitle",
    value: function getAppTitle(context) {
      return null;
    }
  }, {
    key: "getFaviconSrc",
    value: function () {
      var _getFaviconSrc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(content, opts) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", null);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getFaviconSrc(_x, _x2) {
        return _getFaviconSrc.apply(this, arguments);
      }

      return getFaviconSrc;
    }()
  }]);
  return BrandingExtensionsBase;
}();

exports.BrandingExtensionsBase = BrandingExtensionsBase;