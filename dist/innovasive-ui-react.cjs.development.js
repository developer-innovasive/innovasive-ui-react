'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var formik = require('formik');
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
var lodash = require('lodash');
var ReactPaginate = _interopDefault(require('react-paginate'));
var reactTable = require('react-table');

var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      error = _ref.error,
      disabled = _ref.disabled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      innerRef = _ref.innerRef,
      _onChange = _ref.onChange,
      _onKeyPress = _ref.onKeyPress;
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: "mb-8 label text-body"
  }, label), React__default.createElement("input", {
    ref: innerRef,
    type: type || 'text',
    disabled: disabled,
    className: "w-full border text-body " + (disabled ? 'bg-innovasive-ui-disabled-light border-innovasive-ui-disabled-dark cursor-not-allowed' : 'bg-white') + " " + (error ? 'border-innovasive-ui-error' : 'focus:border-black ') + "  outline-none h-48 px-24 transition-all duration-200 ease-in-out placeholder",
    style: {
      borderRadius: '3px'
    },
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return _onChange && _onChange(e);
    },
    onKeyPress: function onKeyPress(e) {
      return _onKeyPress && _onKeyPress(e);
    }
  }), React__default.createElement("div", {
    className: "mt-8 text-innovasive-ui-error transform text-body " + (error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16') + " transition-all h-24 duration-500 ease-in-out"
  }, error));
};
var TextInputFormik = function TextInputFormik(props) {
  return React__default.createElement(formik.Field, {
    name: props.name
  }, function (_ref2) {
    var field = _ref2.field,
        meta = _ref2.meta;
    return React__default.createElement(TextInput, Object.assign({}, field, {
      error: meta.error
    }, props));
  });
};

function useOnClickOutside(ref, handler) {
  React.useEffect(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

var Select = function Select(_ref) {
  var label = _ref.label,
      value = _ref.value,
      options = _ref.options,
      disabled = _ref.disabled,
      error = _ref.error,
      onChange = _ref.onChange;
  var ref = React.useRef();
  useOnClickOutside(ref, function () {
    return setIsOpen(false);
  });

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var isNoValue = lodash.isEmpty(value);
  var isError = !lodash.isEmpty(error);

  var handleOnClick = function handleOnClick() {
    setIsOpen(!isOpen);
  };

  var handleOnSelect = function handleOnSelect(value) {
    setIsOpen(false);
    onChange && onChange(value);
  };

  return React__default.createElement("div", {
    className: "h-72"
  }, React__default.createElement("div", {
    ref: ref,
    className: classnames('relative', {
      'bg-white': !disabled,
      'bg-innovasive-ui-disabled-light': disabled
    })
  }, React__default.createElement("button", {
    disabled: disabled,
    onClick: handleOnClick,
    type: "button",
    className: classnames('rounded border w-full h-40 px-24 focus:outline-none', {
      'cursor-not-allowed border-innovasive-ui-disabled-light': disabled,
      'border-innovasive-ui-grey-medium': !isError,
      'border-innovasive-ui-error': isError
    })
  }, React__default.createElement("div", {
    className: "flex items-center"
  }, React__default.createElement("span", {
    className: classnames('text-body', {
      'text-innovasive-ui-grey': isNoValue,
      'text-innovasive-ui-black': !isNoValue || !disabled,
      'text-innovasive-ui-grey-medium': disabled
    })
  }, isNoValue ? label : value)), React__default.createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-24 pointer-events-none"
  }, React__default.createElement("svg", {
    className: classnames('fill-current', {
      'text-innovasive-ui-grey': !disabled,
      'text-innovasive-ui-disabled-dark': disabled
    }),
    width: "11",
    height: "7",
    viewBox: "0 0 11 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86283 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z"
  })))), isOpen && React__default.createElement("div", {
    className: "absolute w-full max-h-160 overflow-y-scroll mt-4 border border-innovasive-ui-grey-medium rounded shadow-md overflow-hidden bg-white"
  }, React__default.createElement("ul", null, options == null ? void 0 : options.map(function (o) {
    return React__default.createElement("li", {
      key: o.id,
      onClick: function onClick() {
        return handleOnSelect(o.value);
      },
      className: classnames('h-40 flex items-center px-24 cursor-pointer bg-white', {
        'bg-innovasive-ui-grey-medium hover:bg-innovasive-ui-grey-medium': lodash.isEqual(value, o.value),
        'hover:bg-innovasive-ui-grey-light': !lodash.isEqual(value, o.value)
      })
    }, React__default.createElement("span", {
      className: "text-body"
    }, o.value));
  })))), isError && !disabled && React__default.createElement("p", {
    className: "text-error text-innovasive-ui-error mt-4"
  }, error));
};
var SelectFormik = function SelectFormik(props) {
  return React__default.createElement(formik.Field, {
    name: props.name
  }, function (_ref2) {
    var field = _ref2.field,
        meta = _ref2.meta;
    return React__default.createElement(Select, Object.assign({}, field, {
      error: meta.error
    }, props));
  });
};

var Button = function Button(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#0010F7' : _ref$color,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'Primary' : _ref$size;
  var hoverRef = React.useRef(null);

  function hoverHandler(state) {
    var _hoverRef$current;

    var style = (_hoverRef$current = hoverRef.current) == null ? void 0 : _hoverRef$current.style;

    if (state && style) {
      style.opacity = '0.15';
    } else if (!state && style) {
      style.opacity = '0';
    }
  }

  return React__default.createElement("div", {
    onClick: onClick,
    className: classnames('relative flex justify-center items-center cursor-pointer overflow-hidden select-none', size === 'Primary' ? 'h-40' : 'h-32'),
    onMouseOver: function onMouseOver() {
      return hoverHandler(true);
    },
    onMouseLeave: function onMouseLeave() {
      return hoverHandler(false);
    },
    style: {
      backgroundColor: color,
      borderRadius: '3px'
    }
  }, React__default.createElement("div", {
    ref: hoverRef,
    style: {
      opacity: 0
    },
    className: "absolute w-full h-full bg-black transition-all duration-200 ease-in-out"
  }), React__default.createElement("div", {
    className: "z-50"
  }, children));
};

var DataTable = function DataTable(options) {
  var tableInstance = reactTable.useTable(options, reactTable.usePagination);
  var getTableProps = tableInstance.getTableProps,
      getTableBodyProps = tableInstance.getTableBodyProps,
      headerGroups = tableInstance.headerGroups,
      prepareRow = tableInstance.prepareRow,
      pageCount = tableInstance.pageCount,
      page = tableInstance.page,
      gotoPage = tableInstance.gotoPage;
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: "rounded-lg overflow-hidden border-l border-r border-innovasive-ui-grey-light"
  }, React__default.createElement("table", Object.assign({}, getTableProps(), {
    className: "w-full"
  }), React__default.createElement("thead", {
    className: "h-48 bg-innovasive-ui-grey-light"
  }, headerGroups.map(function (headerGroup) {
    return React__default.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      return React__default.createElement("td", {
        className: "sub-heading1 py-16 text-left px-24"
      }, column.render('Header'));
    }));
  })), React__default.createElement("tbody", Object.assign({}, getTableBodyProps(), {
    className: "bg-white"
  }), page.map(function (row) {
    prepareRow(row);
    return React__default.createElement("tr", Object.assign({}, row.getRowProps(), {
      className: "border-b border-innovasive-ui-grey-light hover:bg-innovasive-ui-grey-light"
    }), row.cells.map(function (cell) {
      return React__default.createElement("td", Object.assign({}, cell.getCellProps(), {
        className: "text-body py-16 px-24"
      }), cell.render('Cell'));
    }));
  })))), React__default.createElement("div", {
    className: "mt-16 flex items-center justify-center"
  }, React__default.createElement(ReactPaginate, {
    pageCount: pageCount,
    pageRangeDisplayed: 3,
    marginPagesDisplayed: 1,
    onPageChange: function onPageChange(item) {
      return gotoPage(item.selected);
    },
    previousLabel: React__default.createElement("div", {
      className: "flex items-center cursor-pointer border-r border-innovasive-ui-grey-medium pr-8"
    }, React__default.createElement("div", {
      className: "text-sm font-bold flex items-center justify-center rounded px-8 py-2 hover:bg-innovasive-ui-grey-light transition-all duration-300"
    }, React__default.createElement("svg", {
      className: "mr-8",
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M3.66568 6.66389L3.88906 6.44206C3.95882 6.37225 3.99725 6.27936 3.99725 6.18009C3.99725 6.08088 3.95882 5.98788 3.88906 5.91807L1.35846 3.38758L3.89187 0.854177C3.96162 0.784473 4 0.691479 4 0.592264C4 0.493049 3.96162 0.4 3.89187 0.330241L3.66987 0.108355C3.52551 -0.0361184 3.29035 -0.0361184 3.14599 0.108355L0.118817 3.12468C0.0491127 3.19438 9.47276e-08 3.28727 9.03523e-08 3.38736L9.03017e-08 3.38852C8.59625e-08 3.48779 0.0491677 3.58067 0.118817 3.65038L3.13778 6.66389C3.20749 6.73371 3.30318 6.77203 3.40239 6.77214C3.50167 6.77214 3.59604 6.73371 3.66568 6.66389Z",
      fill: "#191D3C"
    })), "PREV")),
    nextLabel: React__default.createElement("div", {
      className: "flex items-center cursor-pointer border-l border-innovasive-ui-grey-medium pl-8"
    }, React__default.createElement("div", {
      className: "text-sm font-bold flex items-center justify-center rounded px-8 py-2 hover:bg-innovasive-ui-grey-light active:bg-innovasive-ui-grey-medium transition-all duration-300"
    }, "NEXT", React__default.createElement("svg", {
      className: "ml-8",
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M0.334315 0.108325L0.110943 0.330155C0.0411839 0.399969 0.00275306 0.492853 0.00275306 0.592123C0.00275306 0.691339 0.0411839 0.784332 0.110943 0.854146L2.64154 3.38463L0.108135 5.91804C0.0383758 5.98774 8.24581e-09 6.08074 7.06268e-09 6.17995C5.87955e-09 6.27917 0.0383758 6.37222 0.108135 6.44198L0.330131 6.66386C0.474494 6.80834 0.709649 6.80834 0.854012 6.66386L3.88118 3.64754C3.95089 3.57783 4 3.48495 4 3.38485L4 3.3837C4 3.28443 3.95083 3.19154 3.88118 3.12184L0.862216 0.108325C0.792512 0.0385103 0.69682 0.000189313 0.597605 7.91621e-05C0.498335 7.91609e-05 0.403964 0.0385103 0.334315 0.108325Z",
      fill: "#191D3C"
    })))),
    previousLinkClassName: "focus:outline-none",
    nextLinkClassName: "focus:outline-none",
    containerClassName: "flex space-x-8 bg-white shadow items-center h-40 px-24",
    activeClassName: "bg-innovasive-ui-primary rounded",
    activeLinkClassName: "p-4 min-w-24 h-24 text-white rounded flex justify-center items-center text-sm font-bold bg-innovasive-ui-primary hover:bg-innovasive-ui-primary",
    pageClassName: "rounded hover:bg-innovasive-ui-grey-light transition-all duration-300",
    pageLinkClassName: "p-4 min-w-24 h-24 rounded flex justify-center items-center text-sm font-bold focus:outline-none"
  })));
};

exports.Button = Button;
exports.DataTable = DataTable;
exports.Select = Select;
exports.SelectFormik = SelectFormik;
exports.TextInput = TextInput;
exports.TextInputFormik = TextInputFormik;
//# sourceMappingURL=innovasive-ui-react.cjs.development.js.map
