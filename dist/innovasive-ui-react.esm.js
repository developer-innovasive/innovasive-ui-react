import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Field } from 'formik';
import { isEmpty, isEqual, filter } from 'lodash-es';
import ReactPaginate from 'react-paginate';
import { useTable, usePagination } from 'react-table';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var TextInput = function TextInput(_ref) {
  var _form$errors$fields$n, _classnames, _classnames2;

  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      $error = _ref.error,
      fields = _extends({}, _ref.field),
      form = _ref.form,
      restProps = _objectWithoutPropertiesLoose(_ref, ["label", "error", "field", "form"]);

  var error = (_form$errors$fields$n = form == null ? void 0 : form.errors[fields.name]) != null ? _form$errors$fields$n : $error;
  return React.createElement("div", null, React.createElement("div", {
    className: "mb-8 leading-3 inno-label text-innovasive-ui-label"
  }, label), React.createElement("input", Object.assign({
    className: classnames((_classnames = {}, _classnames["w-full border inno-placeholder rounded-3 outline-none  h-40 px-24 transition-all duration-200 ease-in-out placeholder text-innovasive-ui-placeholder innovasive-ui-value disabled:cursor-not-allowed disabled:bg-innovasive-ui-disabled"] = true, _classnames["bg-innovasive-ui-disabled-bg border-innovasive-ui-disabled-border border-innovasive-ui-error"] = error, _classnames["bg-white border-innovasive-ui-border focus:border-black"] = !error, _classnames))
  }, restProps, fields)), React.createElement("div", {
    className: classnames((_classnames2 = {}, _classnames2["mt-8 leading-3 text-innovasive-ui-error transform inno-label transition-all h-24 duration-500 ease-in-out"] = true, _classnames2["opacity-1 00 translate-y-0"] = error, _classnames2["opacity-0 -translate-y-16"] = !error, _classnames2))
  }, error));
};

function useOnClickOutside(ref, handler) {
  useEffect(function () {
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
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      _ref$textSize = _ref.textSize,
      textSize = _ref$textSize === void 0 ? 'default' : _ref$textSize;
  var ref = useRef();
  useOnClickOutside(ref, function () {
    return setIsOpen(false);
  });

  var _useState = useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var isNoValue = isEmpty(value);
  var isError = !isEmpty(error);

  var handleOnClick = function handleOnClick() {
    setIsOpen(!isOpen);
  };

  var handleOnSelect = function handleOnSelect(value) {
    setIsOpen(false);
    onChange && onChange(value);
  };

  return React.createElement("div", {
    className: "h-72"
  }, React.createElement("div", {
    className: "mb-8 leading-3 inno-label text-innovasive-ui-label"
  }, label), React.createElement("div", {
    ref: ref,
    className: classnames('relative')
  }, React.createElement("button", {
    disabled: disabled,
    onClick: handleOnClick,
    type: "button",
    className: classnames('rounded-3 border w-full h-40 pl-24 focus:outline-none', {
      'cursor-not-allowed border-innovasive-ui-disabled-border': disabled,
      'border-innovasive-ui-border': !isError,
      'border-innovasive-ui-error': isError,
      'bg-white': !disabled,
      'bg-innovasive-ui-disabled-bg': disabled
    })
  }, React.createElement("div", {
    className: "flex items-center"
  }, React.createElement("span", {
    className: classnames({
      'inno-options-small': textSize === 'small',
      'inno-options-default': textSize !== 'small'
    }, 'text-innovasive-ui-placeholder')
  }, isNoValue ? placeholder : value)), React.createElement("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-24 pointer-events-none"
  }, React.createElement("svg", {
    className: classnames('fill-current', {
      'text-innovasive-ui-placeholder': !disabled,
      'text-innovasive-ui-disabled-border': disabled
    }),
    width: "11",
    height: "7",
    viewBox: "0 0 11 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86283 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z"
  })))), isOpen && React.createElement("div", {
    className: "absolute w-full max-h-160 overflow-y-scroll mt-4 border border-innovasive-ui-border rounded-3 shadow-md overflow-hidden bg-white"
  }, React.createElement("ul", null, options == null ? void 0 : options.map(function (o) {
    return React.createElement("li", {
      key: o.id,
      onClick: function onClick() {
        return handleOnSelect(o.value);
      },
      className: classnames('h-40 flex items-center px-24 cursor-pointer bg-white', {
        'bg-innovasive-ui-options-selected hover:bg-innovasive-ui-options-selected': isEqual(value, o.value),
        'hover:bg-innovasive-ui-options-hover': !isEqual(value, o.value)
      })
    }, React.createElement("span", {
      className: classnames({
        'inno-options-small': textSize === 'small',
        'inno-options-default': textSize !== 'small'
      })
    }, o.value));
  })))), isError && !disabled && React.createElement("p", {
    className: "inno-label text-innovasive-ui-error mt-8 leading-3"
  }, error));
};
var SelectFormik = function SelectFormik(props) {
  return React.createElement(Field, {
    name: props.name
  }, function (_ref2) {
    var field = _ref2.field,
        meta = _ref2.meta;
    return React.createElement(Select, Object.assign({}, field, {
      error: meta.error
    }, props));
  });
};

var ButtonBase = function ButtonBase(_ref) {
  var id = _ref.id,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      onClick = _ref.onClick,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? function () {
    return React.createElement("div", null);
  } : _ref$children;
  return React.createElement("button", {
    id: id,
    onClick: onClick,
    disabled: disabled,
    className: className
  }, children({
    disabled: disabled
  }));
};

var ButtonPrimary = function ButtonPrimary(_ref) {
  var _classnames;

  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return React.createElement(ButtonBase, {
    id: id,
    disabled: disabled,
    onClick: onClick,
    className: classnames((_classnames = {}, _classnames["w-full relative flex justify-center items-center rounded-3 group overflow-hidden focus:outline-none"] = 'default', _classnames['cursor-pointer active:brightness-80'] = !disabled, _classnames['disabled:cursor-not-allowed'] = disabled, _classnames))
  }, function () {
    var _classnames2, _classnames3;

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "z-10 absolute"
    }, React.createElement("p", {
      className: classnames((_classnames2 = {}, _classnames2['text-white heading2'] = !disabled, _classnames2['text-innovasive-ui-disabled-dark heading2'] = disabled, _classnames2))
    }, title)), React.createElement("div", {
      className: classnames('w-full h-40', (_classnames3 = {}, _classnames3['w-full h-32 transition-all duration-200 ease-in-out'] = 'default', _classnames3['group-hover:brightness-95 bg-innovasive-ui-primary'] = !disabled, _classnames3['bg-innovasive-ui-disabled'] = disabled, _classnames3))
    }));
  });
};

var ButtonSecondary = function ButtonSecondary(_ref) {
  var _classnames;

  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return React.createElement(ButtonBase, {
    id: id,
    disabled: disabled,
    onClick: onClick,
    className: classnames((_classnames = {}, _classnames["w-full relative flex justify-center items-center rounded-3 group overflow-hidden focus:outline-none"] = 'default', _classnames['cursor-pointer active:brightness-80'] = !disabled, _classnames['disabled:cursor-not-allowed'] = disabled, _classnames))
  }, function () {
    var _classnames2, _classnames3;

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "z-10 absolute"
    }, React.createElement("p", {
      className: classnames((_classnames2 = {}, _classnames2['text-white heading2'] = !disabled, _classnames2['text-innovasive-ui-disabled-dark heading2'] = disabled, _classnames2))
    }, title)), React.createElement("div", {
      className: classnames((_classnames3 = {}, _classnames3['w-full h-32 transition-all duration-200 ease-in-out'] = 'default', _classnames3['group-hover:brightness-95 bg-innovasive-ui-secondary'] = !disabled, _classnames3['bg-innovasive-ui-disabled'] = disabled, _classnames3))
    }));
  });
};

var ButtonIcon = function ButtonIcon(props) {
  var _classnames;

  return React.createElement("button", {
    disabled: props.disabled,
    onClick: props.onClick,
    className: classnames((_classnames = {}, _classnames["w-40 h-40 p-8 flex justify-center items-center rounded-full transition-all duration-200 ease-in-out focus:outline-none"] = true, _classnames["cursor-not-allowed text-innovasive-ui-placeholder bg-innovasive-ui-disabled"] = props.disabled, _classnames["hover:bg-innovasive-ui-hover active:bg-innovasive-ui-active"] = !props.disabled, _classnames))
  }, props.children);
};

function joinClassNames(classes) {
  return filter(classes).join(' ');
}

/**
|--------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------
*/

var DataTable = function DataTable(options) {
  var _options$overrides, _options$overrides2, _options$overrides3, _options$components, _options$classNames, _options$classNames2, _options$classNames3, _headerGroups$, _headerGroups$$header;

  /**
  |--------------------------------------------------
  | REACT-TABLE HOOK
  |--------------------------------------------------
  */
  var tableInstance = useTable(options, usePagination);
  var getTableProps = tableInstance.getTableProps,
      getTableBodyProps = tableInstance.getTableBodyProps,
      headerGroups = tableInstance.headerGroups,
      prepareRow = tableInstance.prepareRow,
      pageCount = tableInstance.pageCount,
      page = tableInstance.page,
      gotoPage = tableInstance.gotoPage;
  /**
  |--------------------------------------------------
  | OVERRIDE CLASSES
  |--------------------------------------------------
  */

  var headerOverride = (_options$overrides = options.overrides) == null ? void 0 : _options$overrides.header;
  var rowOverride = (_options$overrides2 = options.overrides) == null ? void 0 : _options$overrides2.row;
  var cellOverride = (_options$overrides3 = options.overrides) == null ? void 0 : _options$overrides3.cell;
  /**
  |--------------------------------------------------
  | OVERRIDE COMPONENTS
  |--------------------------------------------------
  */

  var emptyComponent = (_options$components = options.components) == null ? void 0 : _options$components.empty;
  /**
  |--------------------------------------------------
  | EXTENDED CLASSES
  |--------------------------------------------------
  */

  var headerClass = (_options$classNames = options.classNames) == null ? void 0 : _options$classNames.header;
  var rowClass = (_options$classNames2 = options.classNames) == null ? void 0 : _options$classNames2.row;
  var cellClass = (_options$classNames3 = options.classNames) == null ? void 0 : _options$classNames3.cell;
  /**
  |--------------------------------------------------
  | RENDER
  |--------------------------------------------------
  */

  return React.createElement("div", null, React.createElement("div", {
    className: "rounded-t-20 rounded-b-3 overflow-hidden border border-innovasive-ui-border shadow-sm"
  }, React.createElement("table", Object.assign({}, getTableProps(), {
    className: "w-full"
  }), React.createElement("thead", {
    className: "bg-innovasive-ui-table-header-bg"
  }, headerGroups.map(function (headerGroup) {
    return React.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      var _classnames;

      return React.createElement("td", {
        className: classnames((_classnames = {
          headerOverride: headerOverride
        }, _classnames[joinClassNames(['px-24 py-16', headerClass])] = !headerOverride, _classnames))
      }, column.render('Header'));
    }));
  })), React.createElement("tbody", Object.assign({}, getTableBodyProps(), {
    className: "bg-white"
  }), isEmpty(page) && React.createElement("tr", null, React.createElement("td", {
    colSpan: (_headerGroups$ = headerGroups[0]) == null ? void 0 : (_headerGroups$$header = _headerGroups$.headers) == null ? void 0 : _headerGroups$$header.length
  }, isEmpty(emptyComponent) ? React.createElement("div", {
    className: "h-320 flex justify-center items-center"
  }, "No data") : emptyComponent)), page.map(function (row) {
    var _classnames2;

    prepareRow(row);
    return React.createElement("tr", Object.assign({}, row.getRowProps(), {
      className: classnames((_classnames2 = {
        rowOverride: rowOverride
      }, _classnames2[joinClassNames(['border-b border-innovasive-ui-border', rowClass])] = !rowOverride, _classnames2))
    }), row.cells.map(function (cell) {
      var _classnames3;

      return React.createElement("td", Object.assign({}, cell.getCellProps(), {
        className: classnames((_classnames3 = {
          cellOverride: cellOverride
        }, _classnames3[joinClassNames(['px-24 py-16', cellClass])] = !cellOverride, _classnames3))
      }), cell.render('Cell'));
    }));
  })))), pageCount > 0 && React.createElement("div", {
    className: "mt-16 flex items-center justify-center"
  }, React.createElement(ReactPaginate, {
    pageCount: pageCount,
    pageRangeDisplayed: 3,
    marginPagesDisplayed: 1,
    onPageChange: function onPageChange(item) {
      return gotoPage(item.selected);
    },
    previousLabel: React.createElement("div", {
      className: "flex items-center cursor-pointer border-r  border-innovasive-ui-border pr-8"
    }, React.createElement("div", {
      className: "text-sm font-bold flex items-center justify-center rounded-3 px-8 py-2 hover:bg-innovasive-ui-paginate-hover active:bg-innovasive-ui-active transition-all duration-300"
    }, React.createElement("svg", {
      className: "mr-8",
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M3.66568 6.66389L3.88906 6.44206C3.95882 6.37225 3.99725 6.27936 3.99725 6.18009C3.99725 6.08088 3.95882 5.98788 3.88906 5.91807L1.35846 3.38758L3.89187 0.854177C3.96162 0.784473 4 0.691479 4 0.592264C4 0.493049 3.96162 0.4 3.89187 0.330241L3.66987 0.108355C3.52551 -0.0361184 3.29035 -0.0361184 3.14599 0.108355L0.118817 3.12468C0.0491127 3.19438 9.47276e-08 3.28727 9.03523e-08 3.38736L9.03017e-08 3.38852C8.59625e-08 3.48779 0.0491677 3.58067 0.118817 3.65038L3.13778 6.66389C3.20749 6.73371 3.30318 6.77203 3.40239 6.77214C3.50167 6.77214 3.59604 6.73371 3.66568 6.66389Z",
      fill: "#191D3C"
    })), "PREV")),
    nextLabel: React.createElement("div", {
      className: "flex items-center cursor-pointer border-l border-innovasive-ui-border pl-8"
    }, React.createElement("div", {
      className: "text-sm font-bold flex items-center justify-center rounded-3 px-8 py-2 hover:bg-innovasive-ui-paginate-hover active:bg-innovasive-ui-active transition-all duration-300"
    }, "NEXT", React.createElement("svg", {
      className: "ml-8",
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M0.334315 0.108325L0.110943 0.330155C0.0411839 0.399969 0.00275306 0.492853 0.00275306 0.592123C0.00275306 0.691339 0.0411839 0.784332 0.110943 0.854146L2.64154 3.38463L0.108135 5.91804C0.0383758 5.98774 8.24581e-09 6.08074 7.06268e-09 6.17995C5.87955e-09 6.27917 0.0383758 6.37222 0.108135 6.44198L0.330131 6.66386C0.474494 6.80834 0.709649 6.80834 0.854012 6.66386L3.88118 3.64754C3.95089 3.57783 4 3.48495 4 3.38485L4 3.3837C4 3.28443 3.95083 3.19154 3.88118 3.12184L0.862216 0.108325C0.792512 0.0385103 0.69682 0.000189313 0.597605 7.91621e-05C0.498335 7.91609e-05 0.403964 0.0385103 0.334315 0.108325Z",
      fill: "#191D3C"
    })))),
    previousLinkClassName: "focus:outline-none",
    nextLinkClassName: "focus:outline-none",
    containerClassName: "flex space-x-8 bg-white shadow items-center h-40 px-24",
    activeClassName: "bg-innovasive-ui-primary rounded-3",
    activeLinkClassName: "p-4 min-w-24 h-24 text-white rounded-3 flex justify-center items-center text-sm font-bold bg-innovasive-ui-primary hover:bg-innovasive-ui-primary",
    pageClassName: "rounded-3 hover:bg-innovasive-ui-paginate-hover transition-all duration-300 ",
    pageLinkClassName: "p-4 min-w-24 h-24 rounded-3 flex justify-center items-center text-sm font-bold focus:outline-none active:bg-innovasive-ui-active"
  })));
};

export { ButtonBase, ButtonIcon, ButtonPrimary, ButtonSecondary, DataTable, Select, SelectFormik, TextInput };
//# sourceMappingURL=innovasive-ui-react.esm.js.map
