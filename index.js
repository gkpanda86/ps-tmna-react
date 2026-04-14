var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _a, _t2, _e2, _b, _c, _d2, _e, _f, _g, _h, _i2, _j;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$4 = Symbol.for("react.element"), n$7 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$a = Symbol.for("react.profiler"), t$d = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a7) {
  if (null === a7 || "object" !== typeof a7) return null;
  a7 = z$1 && a7[z$1] || a7["@@iterator"];
  return "function" === typeof a7 ? a7 : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$3(a7, b, e6) {
  this.props = a7;
  this.context = b;
  this.refs = D$1;
  this.updater = e6 || B$1;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a7, b) {
  if ("object" !== typeof a7 && "function" !== typeof a7 && null != a7) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a7, b, "setState");
};
E$3.prototype.forceUpdate = function(a7) {
  this.updater.enqueueForceUpdate(this, a7, "forceUpdate");
};
function F() {
}
F.prototype = E$3.prototype;
function G$1(a7, b, e6) {
  this.props = a7;
  this.context = b;
  this.refs = D$1;
  this.updater = e6 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$3.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a7, b, e6) {
  var d3, c2 = {}, k2 = null, h = null;
  if (null != b) for (d3 in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d3) && !L$1.hasOwnProperty(d3) && (c2[d3] = b[d3]);
  var g = arguments.length - 2;
  if (1 === g) c2.children = e6;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a7 && a7.defaultProps) for (d3 in g = a7.defaultProps, g) void 0 === c2[d3] && (c2[d3] = g[d3]);
  return { $$typeof: l$4, type: a7, key: k2, ref: h, props: c2, _owner: K$1.current };
}
function N$1(a7, b) {
  return { $$typeof: l$4, type: a7.type, key: b, ref: a7.ref, props: a7.props, _owner: a7._owner };
}
function O$1(a7) {
  return "object" === typeof a7 && null !== a7 && a7.$$typeof === l$4;
}
function escape(a7) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a7.replace(/[=:]/g, function(a8) {
    return b[a8];
  });
}
var P$1 = /\/+/g;
function Q$1(a7, b) {
  return "object" === typeof a7 && null !== a7 && null != a7.key ? escape("" + a7.key) : b.toString(36);
}
function R$1(a7, b, e6, d3, c2) {
  var k2 = typeof a7;
  if ("undefined" === k2 || "boolean" === k2) a7 = null;
  var h = false;
  if (null === a7) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a7.$$typeof) {
        case l$4:
        case n$7:
          h = true;
      }
  }
  if (h) return h = a7, c2 = c2(h), a7 = "" === d3 ? "." + Q$1(h, 0) : d3, I$1(c2) ? (e6 = "", null != a7 && (e6 = a7.replace(P$1, "$&/") + "/"), R$1(c2, b, e6, "", function(a8) {
    return a8;
  })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e6 + (!c2.key || h && h.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a7)), b.push(c2)), 1;
  h = 0;
  d3 = "" === d3 ? "." : d3 + ":";
  if (I$1(a7)) for (var g = 0; g < a7.length; g++) {
    k2 = a7[g];
    var f2 = d3 + Q$1(k2, g);
    h += R$1(k2, b, e6, f2, c2);
  }
  else if (f2 = A$1(a7), "function" === typeof f2) for (a7 = f2.call(a7), g = 0; !(k2 = a7.next()).done; ) k2 = k2.value, f2 = d3 + Q$1(k2, g++), h += R$1(k2, b, e6, f2, c2);
  else if ("object" === k2) throw b = String(a7), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a7).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a7, b, e6) {
  if (null == a7) return a7;
  var d3 = [], c2 = 0;
  R$1(a7, d3, "", "", function(a8) {
    return b.call(e6, a8, c2++);
  });
  return d3;
}
function T$1(a7) {
  if (-1 === a7._status) {
    var b = a7._result;
    b = b();
    b.then(function(b2) {
      if (0 === a7._status || -1 === a7._status) a7._status = 1, a7._result = b2;
    }, function(b2) {
      if (0 === a7._status || -1 === a7._status) a7._status = 2, a7._result = b2;
    });
    -1 === a7._status && (a7._status = 0, a7._result = b);
  }
  if (1 === a7._status) return a7._result.default;
  throw a7._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a7, b, e6) {
  S$1(a7, function() {
    b.apply(this, arguments);
  }, e6);
}, count: function(a7) {
  var b = 0;
  S$1(a7, function() {
    b++;
  });
  return b;
}, toArray: function(a7) {
  return S$1(a7, function(a8) {
    return a8;
  }) || [];
}, only: function(a7) {
  if (!O$1(a7)) throw Error("React.Children.only expected to receive a single React element child.");
  return a7;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$a;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a7, b, e6) {
  if (null === a7 || void 0 === a7) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a7 + ".");
  var d3 = C$1({}, a7.props), c2 = a7.key, k2 = a7.ref, h = a7._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c2 = "" + b.key);
    if (a7.type && a7.type.defaultProps) var g = a7.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d3[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d3.children = e6;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d3.children = g;
  }
  return { $$typeof: l$4, type: a7.type, key: c2, ref: k2, props: d3, _owner: h };
};
react_production_min.createContext = function(a7) {
  a7 = { $$typeof: u$2, _currentValue: a7, _currentValue2: a7, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a7.Provider = { $$typeof: t$d, _context: a7 };
  return a7.Consumer = a7;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a7) {
  var b = M$1.bind(null, a7);
  b.type = a7;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a7) {
  return { $$typeof: v$1, render: a7 };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a7) {
  return { $$typeof: y, _payload: { _status: -1, _result: a7 }, _init: T$1 };
};
react_production_min.memo = function(a7, b) {
  return { $$typeof: x, type: a7, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a7) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a7();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a7, b) {
  return U$1.current.useCallback(a7, b);
};
react_production_min.useContext = function(a7) {
  return U$1.current.useContext(a7);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a7) {
  return U$1.current.useDeferredValue(a7);
};
react_production_min.useEffect = function(a7, b) {
  return U$1.current.useEffect(a7, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a7, b, e6) {
  return U$1.current.useImperativeHandle(a7, b, e6);
};
react_production_min.useInsertionEffect = function(a7, b) {
  return U$1.current.useInsertionEffect(a7, b);
};
react_production_min.useLayoutEffect = function(a7, b) {
  return U$1.current.useLayoutEffect(a7, b);
};
react_production_min.useMemo = function(a7, b) {
  return U$1.current.useMemo(a7, b);
};
react_production_min.useReducer = function(a7, b, e6) {
  return U$1.current.useReducer(a7, b, e6);
};
react_production_min.useRef = function(a7) {
  return U$1.current.useRef(a7);
};
react_production_min.useState = function(a7) {
  return U$1.current.useState(a7);
};
react_production_min.useSyncExternalStore = function(a7, b, e6) {
  return U$1.current.useSyncExternalStore(a7, b, e6);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l$3 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$6 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c2, a7, g) {
  var b, d3 = {}, e6 = null, h = null;
  void 0 !== g && (e6 = "" + g);
  void 0 !== a7.key && (e6 = "" + a7.key);
  void 0 !== a7.ref && (h = a7.ref);
  for (b in a7) m$3.call(a7, b) && !p$1.hasOwnProperty(b) && (d3[b] = a7[b]);
  if (c2 && c2.defaultProps) for (b in a7 = c2.defaultProps, a7) void 0 === d3[b] && (d3[b] = a7[b]);
  return { $$typeof: k, type: c2, key: e6, ref: h, props: d3, _owner: n$6.current };
}
reactJsxRuntime_production_min.Fragment = l$3;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports$1) {
  function f2(a7, b) {
    var c2 = a7.length;
    a7.push(b);
    a: for (; 0 < c2; ) {
      var d3 = c2 - 1 >>> 1, e6 = a7[d3];
      if (0 < g(e6, b)) a7[d3] = b, a7[c2] = e6, c2 = d3;
      else break a;
    }
  }
  function h(a7) {
    return 0 === a7.length ? null : a7[0];
  }
  function k2(a7) {
    if (0 === a7.length) return null;
    var b = a7[0], c2 = a7.pop();
    if (c2 !== b) {
      a7[0] = c2;
      a: for (var d3 = 0, e6 = a7.length, w2 = e6 >>> 1; d3 < w2; ) {
        var m2 = 2 * (d3 + 1) - 1, C2 = a7[m2], n3 = m2 + 1, x2 = a7[n3];
        if (0 > g(C2, c2)) n3 < e6 && 0 > g(x2, C2) ? (a7[d3] = x2, a7[n3] = c2, d3 = n3) : (a7[d3] = C2, a7[m2] = c2, d3 = m2);
        else if (n3 < e6 && 0 > g(x2, c2)) a7[d3] = x2, a7[n3] = c2, d3 = n3;
        else break a;
      }
    }
    return b;
  }
  function g(a7, b) {
    var c2 = a7.sortIndex - b.sortIndex;
    return 0 !== c2 ? c2 : a7.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports$1.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports$1.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r3 = [], t8 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a7) {
    for (var b = h(t8); null !== b; ) {
      if (null === b.callback) k2(t8);
      else if (b.startTime <= a7) k2(t8), b.sortIndex = b.expirationTime, f2(r3, b);
      else break;
      b = h(t8);
    }
  }
  function H2(a7) {
    B2 = false;
    G2(a7);
    if (!A2) if (null !== h(r3)) A2 = true, I2(J2);
    else {
      var b = h(t8);
      null !== b && K2(H2, b.startTime - a7);
    }
  }
  function J2(a7, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b);
      for (v2 = h(r3); null !== v2 && (!(v2.expirationTime > b) || a7 && !M2()); ) {
        var d3 = v2.callback;
        if ("function" === typeof d3) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e6 = d3(v2.expirationTime <= b);
          b = exports$1.unstable_now();
          "function" === typeof e6 ? v2.callback = e6 : v2 === h(r3) && k2(r3);
          G2(b);
        } else k2(r3);
        v2 = h(r3);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t8);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports$1.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a7 = exports$1.unstable_now();
      Q2 = a7;
      var b = true;
      try {
        b = O2(true, a7);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a7) {
    O2 = a7;
    N2 || (N2 = true, S2());
  }
  function K2(a7, b) {
    L2 = D2(function() {
      a7(exports$1.unstable_now());
    }, b);
  }
  exports$1.unstable_IdlePriority = 5;
  exports$1.unstable_ImmediatePriority = 1;
  exports$1.unstable_LowPriority = 4;
  exports$1.unstable_NormalPriority = 3;
  exports$1.unstable_Profiling = null;
  exports$1.unstable_UserBlockingPriority = 2;
  exports$1.unstable_cancelCallback = function(a7) {
    a7.callback = null;
  };
  exports$1.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports$1.unstable_forceFrameRate = function(a7) {
    0 > a7 || 125 < a7 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a7 ? Math.floor(1e3 / a7) : 5;
  };
  exports$1.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports$1.unstable_getFirstCallbackNode = function() {
    return h(r3);
  };
  exports$1.unstable_next = function(a7) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c2 = y2;
    y2 = b;
    try {
      return a7();
    } finally {
      y2 = c2;
    }
  };
  exports$1.unstable_pauseExecution = function() {
  };
  exports$1.unstable_requestPaint = function() {
  };
  exports$1.unstable_runWithPriority = function(a7, b) {
    switch (a7) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a7 = 3;
    }
    var c2 = y2;
    y2 = a7;
    try {
      return b();
    } finally {
      y2 = c2;
    }
  };
  exports$1.unstable_scheduleCallback = function(a7, b, c2) {
    var d3 = exports$1.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d3 + c2 : d3) : c2 = d3;
    switch (a7) {
      case 1:
        var e6 = -1;
        break;
      case 2:
        e6 = 250;
        break;
      case 5:
        e6 = 1073741823;
        break;
      case 4:
        e6 = 1e4;
        break;
      default:
        e6 = 5e3;
    }
    e6 = c2 + e6;
    a7 = { id: u2++, callback: b, priorityLevel: a7, startTime: c2, expirationTime: e6, sortIndex: -1 };
    c2 > d3 ? (a7.sortIndex = c2, f2(t8, a7), null === h(r3) && a7 === h(t8) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d3))) : (a7.sortIndex = e6, f2(r3, a7), A2 || z2 || (A2 = true, I2(J2)));
    return a7;
  };
  exports$1.unstable_shouldYield = M2;
  exports$1.unstable_wrapCallback = function(a7) {
    var b = y2;
    return function() {
      var c2 = y2;
      y2 = b;
      try {
        return a7.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a7) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a7, c2 = 1; c2 < arguments.length; c2++) b += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a7 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a7, b) {
  ha(a7, b);
  ha(a7 + "Capture", b);
}
function ha(a7, b) {
  ea[a7] = b;
  for (a7 = 0; a7 < b.length; a7++) da.add(b[a7]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a7) {
  if (ja.call(ma, a7)) return true;
  if (ja.call(la, a7)) return false;
  if (ka.test(a7)) return ma[a7] = true;
  la[a7] = true;
  return false;
}
function pa(a7, b, c2, d3) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a7 = a7.toLowerCase().slice(0, 5);
      return "data-" !== a7 && "aria-" !== a7;
    default:
      return false;
  }
}
function qa(a7, b, c2, d3) {
  if (null === b || "undefined" === typeof b || pa(a7, b, c2, d3)) return true;
  if (d3) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a7, b, c2, d3, e6, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d3;
  this.attributeNamespace = e6;
  this.mustUseProperty = c2;
  this.propertyName = a7;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a7) {
  z[a7] = new v(a7, 0, false, a7, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a7) {
  var b = a7[0];
  z[b] = new v(b, 1, false, a7[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a7) {
  z[a7] = new v(a7, 2, false, a7.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a7) {
  z[a7] = new v(a7, 2, false, a7, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a7) {
  z[a7] = new v(a7, 3, false, a7.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a7) {
  z[a7] = new v(a7, 3, true, a7, null, false, false);
});
["capture", "download"].forEach(function(a7) {
  z[a7] = new v(a7, 4, false, a7, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a7) {
  z[a7] = new v(a7, 6, false, a7, null, false, false);
});
["rowSpan", "start"].forEach(function(a7) {
  z[a7] = new v(a7, 5, false, a7.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a7) {
  return a7[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a7) {
  var b = a7.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a7, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a7) {
  var b = a7.replace(ra, sa);
  z[b] = new v(b, 1, false, a7, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a7) {
  var b = a7.replace(ra, sa);
  z[b] = new v(b, 1, false, a7, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a7) {
  z[a7] = new v(a7, 1, false, a7.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a7) {
  z[a7] = new v(a7, 1, false, a7.toLowerCase(), null, true, true);
});
function ta(a7, b, c2, d3) {
  var e6 = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e6 ? 0 !== e6.type : d3 || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c2, e6, d3) && (c2 = null), d3 || null === e6 ? oa(b) && (null === c2 ? a7.removeAttribute(b) : a7.setAttribute(b, "" + c2)) : e6.mustUseProperty ? a7[e6.propertyName] = null === c2 ? 3 === e6.type ? false : "" : c2 : (b = e6.attributeName, d3 = e6.attributeNamespace, null === c2 ? a7.removeAttribute(b) : (e6 = e6.type, c2 = 3 === e6 || 4 === e6 && true === c2 ? "" : "" + c2, d3 ? a7.setAttributeNS(d3, b, c2) : a7.setAttribute(b, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a7) {
  if (null === a7 || "object" !== typeof a7) return null;
  a7 = Ja && a7[Ja] || a7["@@iterator"];
  return "function" === typeof a7 ? a7 : null;
}
var A = Object.assign, La;
function Ma(a7) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b = c2.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a7;
}
var Na = false;
function Oa(a7, b) {
  if (!a7 || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d3 = l2;
      }
      Reflect.construct(a7, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d3 = l2;
      }
      a7.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d3 = l2;
      }
      a7();
    }
  } catch (l2) {
    if (l2 && d3 && "string" === typeof l2.stack) {
      for (var e6 = l2.stack.split("\n"), f2 = d3.stack.split("\n"), g = e6.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e6[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e6[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e6[g] !== f2[h]) {
              var k2 = "\n" + e6[g].replace(" at new ", " at ");
              a7.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a7.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a7 = a7 ? a7.displayName || a7.name : "") ? Ma(a7) : "";
}
function Pa(a7) {
  switch (a7.tag) {
    case 5:
      return Ma(a7.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a7 = Oa(a7.type, false), a7;
    case 11:
      return a7 = Oa(a7.type.render, false), a7;
    case 1:
      return a7 = Oa(a7.type, true), a7;
    default:
      return "";
  }
}
function Qa(a7) {
  if (null == a7) return null;
  if ("function" === typeof a7) return a7.displayName || a7.name || null;
  if ("string" === typeof a7) return a7;
  switch (a7) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a7) switch (a7.$$typeof) {
    case Ca:
      return (a7.displayName || "Context") + ".Consumer";
    case Ba:
      return (a7._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a7.render;
      a7 = a7.displayName;
      a7 || (a7 = b.displayName || b.name || "", a7 = "" !== a7 ? "ForwardRef(" + a7 + ")" : "ForwardRef");
      return a7;
    case Ga:
      return b = a7.displayName || null, null !== b ? b : Qa(a7.type) || "Memo";
    case Ha:
      b = a7._payload;
      a7 = a7._init;
      try {
        return Qa(a7(b));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a7) {
  var b = a7.type;
  switch (a7.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a7 = b.render, a7 = a7.displayName || a7.name || "", b.displayName || ("" !== a7 ? "ForwardRef(" + a7 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a7) {
  switch (typeof a7) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a7;
    case "object":
      return a7;
    default:
      return "";
  }
}
function Ta(a7) {
  var b = a7.type;
  return (a7 = a7.nodeName) && "input" === a7.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a7) {
  var b = Ta(a7) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a7.constructor.prototype, b), d3 = "" + a7[b];
  if (!a7.hasOwnProperty(b) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e6 = c2.get, f2 = c2.set;
    Object.defineProperty(a7, b, { configurable: true, get: function() {
      return e6.call(this);
    }, set: function(a8) {
      d3 = "" + a8;
      f2.call(this, a8);
    } });
    Object.defineProperty(a7, b, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d3;
    }, setValue: function(a8) {
      d3 = "" + a8;
    }, stopTracking: function() {
      a7._valueTracker = null;
      delete a7[b];
    } };
  }
}
function Va(a7) {
  a7._valueTracker || (a7._valueTracker = Ua(a7));
}
function Wa(a7) {
  if (!a7) return false;
  var b = a7._valueTracker;
  if (!b) return true;
  var c2 = b.getValue();
  var d3 = "";
  a7 && (d3 = Ta(a7) ? a7.checked ? "true" : "false" : a7.value);
  a7 = d3;
  return a7 !== c2 ? (b.setValue(a7), true) : false;
}
function Xa(a7) {
  a7 = a7 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a7) return null;
  try {
    return a7.activeElement || a7.body;
  } catch (b) {
    return a7.body;
  }
}
function Ya(a7, b) {
  var c2 = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a7._wrapperState.initialChecked });
}
function Za(a7, b) {
  var c2 = null == b.defaultValue ? "" : b.defaultValue, d3 = null != b.checked ? b.checked : b.defaultChecked;
  c2 = Sa(null != b.value ? b.value : c2);
  a7._wrapperState = { initialChecked: d3, initialValue: c2, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a7, b) {
  b = b.checked;
  null != b && ta(a7, "checked", b, false);
}
function bb(a7, b) {
  ab(a7, b);
  var c2 = Sa(b.value), d3 = b.type;
  if (null != c2) if ("number" === d3) {
    if (0 === c2 && "" === a7.value || a7.value != c2) a7.value = "" + c2;
  } else a7.value !== "" + c2 && (a7.value = "" + c2);
  else if ("submit" === d3 || "reset" === d3) {
    a7.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a7, b.type, c2) : b.hasOwnProperty("defaultValue") && cb(a7, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a7.defaultChecked = !!b.defaultChecked);
}
function db(a7, b, c2) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d3 = b.type;
    if (!("submit" !== d3 && "reset" !== d3 || void 0 !== b.value && null !== b.value)) return;
    b = "" + a7._wrapperState.initialValue;
    c2 || b === a7.value || (a7.value = b);
    a7.defaultValue = b;
  }
  c2 = a7.name;
  "" !== c2 && (a7.name = "");
  a7.defaultChecked = !!a7._wrapperState.initialChecked;
  "" !== c2 && (a7.name = c2);
}
function cb(a7, b, c2) {
  if ("number" !== b || Xa(a7.ownerDocument) !== a7) null == c2 ? a7.defaultValue = "" + a7._wrapperState.initialValue : a7.defaultValue !== "" + c2 && (a7.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a7, b, c2, d3) {
  a7 = a7.options;
  if (b) {
    b = {};
    for (var e6 = 0; e6 < c2.length; e6++) b["$" + c2[e6]] = true;
    for (c2 = 0; c2 < a7.length; c2++) e6 = b.hasOwnProperty("$" + a7[c2].value), a7[c2].selected !== e6 && (a7[c2].selected = e6), e6 && d3 && (a7[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b = null;
    for (e6 = 0; e6 < a7.length; e6++) {
      if (a7[e6].value === c2) {
        a7[e6].selected = true;
        d3 && (a7[e6].defaultSelected = true);
        return;
      }
      null !== b || a7[e6].disabled || (b = a7[e6]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a7, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a7._wrapperState.initialValue });
}
function hb(a7, b) {
  var c2 = b.value;
  if (null == c2) {
    c2 = b.children;
    b = b.defaultValue;
    if (null != c2) {
      if (null != b) throw Error(p(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p(93));
        c2 = c2[0];
      }
      b = c2;
    }
    null == b && (b = "");
    c2 = b;
  }
  a7._wrapperState = { initialValue: Sa(c2) };
}
function ib(a7, b) {
  var c2 = Sa(b.value), d3 = Sa(b.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a7.value && (a7.value = c2), null == b.defaultValue && a7.defaultValue !== c2 && (a7.defaultValue = c2));
  null != d3 && (a7.defaultValue = "" + d3);
}
function jb(a7) {
  var b = a7.textContent;
  b === a7._wrapperState.initialValue && "" !== b && null !== b && (a7.value = b);
}
function kb(a7) {
  switch (a7) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a7, b) {
  return null == a7 || "http://www.w3.org/1999/xhtml" === a7 ? kb(b) : "http://www.w3.org/2000/svg" === a7 && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a7;
}
var mb, nb = function(a7) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c2, d3, e6) {
    MSApp.execUnsafeLocalFunction(function() {
      return a7(b, c2, d3, e6);
    });
  } : a7;
}(function(a7, b) {
  if ("http://www.w3.org/2000/svg" !== a7.namespaceURI || "innerHTML" in a7) a7.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a7.firstChild; ) a7.removeChild(a7.firstChild);
    for (; b.firstChild; ) a7.appendChild(b.firstChild);
  }
});
function ob(a7, b) {
  if (b) {
    var c2 = a7.firstChild;
    if (c2 && c2 === a7.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b;
      return;
    }
  }
  a7.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a7) {
  qb.forEach(function(b) {
    b = b + a7.charAt(0).toUpperCase() + a7.substring(1);
    pb[b] = pb[a7];
  });
});
function rb(a7, b, c2) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c2 || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a7) && pb[a7] ? ("" + b).trim() : b + "px";
}
function sb(a7, b) {
  a7 = a7.style;
  for (var c2 in b) if (b.hasOwnProperty(c2)) {
    var d3 = 0 === c2.indexOf("--"), e6 = rb(c2, b[c2], d3);
    "float" === c2 && (c2 = "cssFloat");
    d3 ? a7.setProperty(c2, e6) : a7[c2] = e6;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a7, b) {
  if (b) {
    if (tb[a7] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a7));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a7, b) {
  if (-1 === a7.indexOf("-")) return "string" === typeof b.is;
  switch (a7) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a7) {
  a7 = a7.target || a7.srcElement || window;
  a7.correspondingUseElement && (a7 = a7.correspondingUseElement);
  return 3 === a7.nodeType ? a7.parentNode : a7;
}
var yb = null, zb = null, Ab = null;
function Bb(a7) {
  if (a7 = Cb(a7)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a7.stateNode;
    b && (b = Db(b), yb(a7.stateNode, a7.type, b));
  }
}
function Eb(a7) {
  zb ? Ab ? Ab.push(a7) : Ab = [a7] : zb = a7;
}
function Fb() {
  if (zb) {
    var a7 = zb, b = Ab;
    Ab = zb = null;
    Bb(a7);
    if (b) for (a7 = 0; a7 < b.length; a7++) Bb(b[a7]);
  }
}
function Gb(a7, b) {
  return a7(b);
}
function Hb() {
}
var Ib = false;
function Jb(a7, b, c2) {
  if (Ib) return a7(b, c2);
  Ib = true;
  try {
    return Gb(a7, b, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a7, b) {
  var c2 = a7.stateNode;
  if (null === c2) return null;
  var d3 = Db(c2);
  if (null === d3) return null;
  c2 = d3[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d3 = !d3.disabled) || (a7 = a7.type, d3 = !("button" === a7 || "input" === a7 || "select" === a7 || "textarea" === a7));
      a7 = !d3;
      break a;
    default:
      a7 = false;
  }
  if (a7) return null;
  if (c2 && "function" !== typeof c2) throw Error(p(231, b, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a7) {
  Lb = false;
}
function Nb(a7, b, c2, d3, e6, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a7) {
  Ob = true;
  Pb = a7;
} };
function Tb(a7, b, c2, d3, e6, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a7, b, c2, d3, e6, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a7) {
  var b = a7, c2 = a7;
  if (a7.alternate) for (; b.return; ) b = b.return;
  else {
    a7 = b;
    do
      b = a7, 0 !== (b.flags & 4098) && (c2 = b.return), a7 = b.return;
    while (a7);
  }
  return 3 === b.tag ? c2 : null;
}
function Wb(a7) {
  if (13 === a7.tag) {
    var b = a7.memoizedState;
    null === b && (a7 = a7.alternate, null !== a7 && (b = a7.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a7) {
  if (Vb(a7) !== a7) throw Error(p(188));
}
function Yb(a7) {
  var b = a7.alternate;
  if (!b) {
    b = Vb(a7);
    if (null === b) throw Error(p(188));
    return b !== a7 ? null : a7;
  }
  for (var c2 = a7, d3 = b; ; ) {
    var e6 = c2.return;
    if (null === e6) break;
    var f2 = e6.alternate;
    if (null === f2) {
      d3 = e6.return;
      if (null !== d3) {
        c2 = d3;
        continue;
      }
      break;
    }
    if (e6.child === f2.child) {
      for (f2 = e6.child; f2; ) {
        if (f2 === c2) return Xb(e6), a7;
        if (f2 === d3) return Xb(e6), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c2.return !== d3.return) c2 = e6, d3 = f2;
    else {
      for (var g = false, h = e6.child; h; ) {
        if (h === c2) {
          g = true;
          c2 = e6;
          d3 = f2;
          break;
        }
        if (h === d3) {
          g = true;
          d3 = e6;
          c2 = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c2) {
            g = true;
            c2 = f2;
            d3 = e6;
            break;
          }
          if (h === d3) {
            g = true;
            d3 = f2;
            c2 = e6;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c2.alternate !== d3) throw Error(p(190));
  }
  if (3 !== c2.tag) throw Error(p(188));
  return c2.stateNode.current === c2 ? a7 : b;
}
function Zb(a7) {
  a7 = Yb(a7);
  return null !== a7 ? $b(a7) : null;
}
function $b(a7) {
  if (5 === a7.tag || 6 === a7.tag) return a7;
  for (a7 = a7.child; null !== a7; ) {
    var b = $b(a7);
    if (null !== b) return b;
    a7 = a7.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a7) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a7, void 0, 128 === (a7.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a7) {
  a7 >>>= 0;
  return 0 === a7 ? 32 : 31 - (pc(a7) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a7) {
  switch (a7 & -a7) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a7 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a7 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a7;
  }
}
function uc(a7, b) {
  var c2 = a7.pendingLanes;
  if (0 === c2) return 0;
  var d3 = 0, e6 = a7.suspendedLanes, f2 = a7.pingedLanes, g = c2 & 268435455;
  if (0 !== g) {
    var h = g & ~e6;
    0 !== h ? d3 = tc(h) : (f2 &= g, 0 !== f2 && (d3 = tc(f2)));
  } else g = c2 & ~e6, 0 !== g ? d3 = tc(g) : 0 !== f2 && (d3 = tc(f2));
  if (0 === d3) return 0;
  if (0 !== b && b !== d3 && 0 === (b & e6) && (e6 = d3 & -d3, f2 = b & -b, e6 >= f2 || 16 === e6 && 0 !== (f2 & 4194240))) return b;
  0 !== (d3 & 4) && (d3 |= c2 & 16);
  b = a7.entangledLanes;
  if (0 !== b) for (a7 = a7.entanglements, b &= d3; 0 < b; ) c2 = 31 - oc(b), e6 = 1 << c2, d3 |= a7[c2], b &= ~e6;
  return d3;
}
function vc(a7, b) {
  switch (a7) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a7, b) {
  for (var c2 = a7.suspendedLanes, d3 = a7.pingedLanes, e6 = a7.expirationTimes, f2 = a7.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e6[g];
    if (-1 === k2) {
      if (0 === (h & c2) || 0 !== (h & d3)) e6[g] = vc(h, b);
    } else k2 <= b && (a7.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a7) {
  a7 = a7.pendingLanes & -1073741825;
  return 0 !== a7 ? a7 : a7 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a7 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a7;
}
function zc(a7) {
  for (var b = [], c2 = 0; 31 > c2; c2++) b.push(a7);
  return b;
}
function Ac(a7, b, c2) {
  a7.pendingLanes |= b;
  536870912 !== b && (a7.suspendedLanes = 0, a7.pingedLanes = 0);
  a7 = a7.eventTimes;
  b = 31 - oc(b);
  a7[b] = c2;
}
function Bc(a7, b) {
  var c2 = a7.pendingLanes & ~b;
  a7.pendingLanes = b;
  a7.suspendedLanes = 0;
  a7.pingedLanes = 0;
  a7.expiredLanes &= b;
  a7.mutableReadLanes &= b;
  a7.entangledLanes &= b;
  b = a7.entanglements;
  var d3 = a7.eventTimes;
  for (a7 = a7.expirationTimes; 0 < c2; ) {
    var e6 = 31 - oc(c2), f2 = 1 << e6;
    b[e6] = 0;
    d3[e6] = -1;
    a7[e6] = -1;
    c2 &= ~f2;
  }
}
function Cc(a7, b) {
  var c2 = a7.entangledLanes |= b;
  for (a7 = a7.entanglements; c2; ) {
    var d3 = 31 - oc(c2), e6 = 1 << d3;
    e6 & b | a7[d3] & b && (a7[d3] |= b);
    c2 &= ~e6;
  }
}
var C = 0;
function Dc(a7) {
  a7 &= -a7;
  return 1 < a7 ? 4 < a7 ? 0 !== (a7 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a7, b) {
  switch (a7) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a7, b, c2, d3, e6, f2) {
  if (null === a7 || a7.nativeEvent !== f2) return a7 = { blockedOn: b, domEventName: c2, eventSystemFlags: d3, nativeEvent: f2, targetContainers: [e6] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a7;
  a7.eventSystemFlags |= d3;
  b = a7.targetContainers;
  null !== e6 && -1 === b.indexOf(e6) && b.push(e6);
  return a7;
}
function Uc(a7, b, c2, d3, e6) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a7, b, c2, d3, e6), true;
    case "dragenter":
      return Mc = Tc(Mc, a7, b, c2, d3, e6), true;
    case "mouseover":
      return Nc = Tc(Nc, a7, b, c2, d3, e6), true;
    case "pointerover":
      var f2 = e6.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a7, b, c2, d3, e6));
      return true;
    case "gotpointercapture":
      return f2 = e6.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a7, b, c2, d3, e6)), true;
  }
  return false;
}
function Vc(a7) {
  var b = Wc(a7.target);
  if (null !== b) {
    var c2 = Vb(b);
    if (null !== c2) {
      if (b = c2.tag, 13 === b) {
        if (b = Wb(c2), null !== b) {
          a7.blockedOn = b;
          Ic(a7.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b && c2.stateNode.current.memoizedState.isDehydrated) {
        a7.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a7.blockedOn = null;
}
function Xc(a7) {
  if (null !== a7.blockedOn) return false;
  for (var b = a7.targetContainers; 0 < b.length; ) {
    var c2 = Yc(a7.domEventName, a7.eventSystemFlags, b[0], a7.nativeEvent);
    if (null === c2) {
      c2 = a7.nativeEvent;
      var d3 = new c2.constructor(c2.type, c2);
      wb = d3;
      c2.target.dispatchEvent(d3);
      wb = null;
    } else return b = Cb(c2), null !== b && Fc(b), a7.blockedOn = c2, false;
    b.shift();
  }
  return true;
}
function Zc(a7, b, c2) {
  Xc(a7) && c2.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a7, b) {
  a7.blockedOn === b && (a7.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a7) {
  function b(b2) {
    return ad(b2, a7);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a7);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d3 = Kc[c2];
      d3.blockedOn === a7 && (d3.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a7);
  null !== Mc && ad(Mc, a7);
  null !== Nc && ad(Nc, a7);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c2 = 0; c2 < Qc.length; c2++) d3 = Qc[c2], d3.blockedOn === a7 && (d3.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a7, b, c2, d3) {
  var e6 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a7, b, c2, d3);
  } finally {
    C = e6, cd.transition = f2;
  }
}
function gd(a7, b, c2, d3) {
  var e6 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a7, b, c2, d3);
  } finally {
    C = e6, cd.transition = f2;
  }
}
function fd(a7, b, c2, d3) {
  if (dd) {
    var e6 = Yc(a7, b, c2, d3);
    if (null === e6) hd(a7, b, d3, id, c2), Sc(a7, d3);
    else if (Uc(e6, a7, b, c2, d3)) d3.stopPropagation();
    else if (Sc(a7, d3), b & 4 && -1 < Rc.indexOf(a7)) {
      for (; null !== e6; ) {
        var f2 = Cb(e6);
        null !== f2 && Ec(f2);
        f2 = Yc(a7, b, c2, d3);
        null === f2 && hd(a7, b, d3, id, c2);
        if (f2 === e6) break;
        e6 = f2;
      }
      null !== e6 && d3.stopPropagation();
    } else hd(a7, b, d3, null, c2);
  }
}
var id = null;
function Yc(a7, b, c2, d3) {
  id = null;
  a7 = xb(d3);
  a7 = Wc(a7);
  if (null !== a7) if (b = Vb(a7), null === b) a7 = null;
  else if (c2 = b.tag, 13 === c2) {
    a7 = Wb(b);
    if (null !== a7) return a7;
    a7 = null;
  } else if (3 === c2) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a7 = null;
  } else b !== a7 && (a7 = null);
  id = a7;
  return null;
}
function jd(a7) {
  switch (a7) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a7, b = ld, c2 = b.length, d3, e6 = "value" in kd ? kd.value : kd.textContent, f2 = e6.length;
  for (a7 = 0; a7 < c2 && b[a7] === e6[a7]; a7++) ;
  var g = c2 - a7;
  for (d3 = 1; d3 <= g && b[c2 - d3] === e6[f2 - d3]; d3++) ;
  return md = e6.slice(a7, 1 < d3 ? 1 - d3 : void 0);
}
function od(a7) {
  var b = a7.keyCode;
  "charCode" in a7 ? (a7 = a7.charCode, 0 === a7 && 13 === b && (a7 = 13)) : a7 = b;
  10 === a7 && (a7 = 13);
  return 32 <= a7 || 13 === a7 ? a7 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a7) {
  function b(b2, d3, e6, f2, g) {
    this._reactName = b2;
    this._targetInst = e6;
    this.type = d3;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c2 in a7) a7.hasOwnProperty(c2) && (b2 = a7[c2], this[c2] = b2 ? b2(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a8 = this.nativeEvent;
    a8 && (a8.preventDefault ? a8.preventDefault() : "unknown" !== typeof a8.returnValue && (a8.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a8 = this.nativeEvent;
    a8 && (a8.stopPropagation ? a8.stopPropagation() : "unknown" !== typeof a8.cancelBubble && (a8.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a7) {
  return a7.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a7) {
  return void 0 === a7.relatedTarget ? a7.fromElement === a7.srcElement ? a7.toElement : a7.fromElement : a7.relatedTarget;
}, movementX: function(a7) {
  if ("movementX" in a7) return a7.movementX;
  a7 !== yd && (yd && "mousemove" === a7.type ? (wd = a7.screenX - yd.screenX, xd = a7.screenY - yd.screenY) : xd = wd = 0, yd = a7);
  return wd;
}, movementY: function(a7) {
  return "movementY" in a7 ? a7.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a7) {
  return "clipboardData" in a7 ? a7.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a7) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a7) : (a7 = Od[a7]) ? !!b[a7] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a7) {
  if (a7.key) {
    var b = Md[a7.key] || a7.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a7.type ? (a7 = od(a7), 13 === a7 ? "Enter" : String.fromCharCode(a7)) : "keydown" === a7.type || "keyup" === a7.type ? Nd[a7.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a7) {
  return "keypress" === a7.type ? od(a7) : 0;
}, keyCode: function(a7) {
  return "keydown" === a7.type || "keyup" === a7.type ? a7.keyCode : 0;
}, which: function(a7) {
  return "keypress" === a7.type ? od(a7) : "keydown" === a7.type || "keyup" === a7.type ? a7.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a7) {
    return "deltaX" in a7 ? a7.deltaX : "wheelDeltaX" in a7 ? -a7.wheelDeltaX : 0;
  },
  deltaY: function(a7) {
    return "deltaY" in a7 ? a7.deltaY : "wheelDeltaY" in a7 ? -a7.wheelDeltaY : "wheelDelta" in a7 ? -a7.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a7, b) {
  switch (a7) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a7) {
  a7 = a7.detail;
  return "object" === typeof a7 && "data" in a7 ? a7.data : null;
}
var ie = false;
function je(a7, b) {
  switch (a7) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a7 = b.data, a7 === ee && fe ? null : a7;
    default:
      return null;
  }
}
function ke(a7, b) {
  if (ie) return "compositionend" === a7 || !ae && ge(a7, b) ? (a7 = nd(), md = ld = kd = null, ie = false, a7) : null;
  switch (a7) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a7) {
  var b = a7 && a7.nodeName && a7.nodeName.toLowerCase();
  return "input" === b ? !!le[a7.type] : "textarea" === b ? true : false;
}
function ne(a7, b, c2, d3) {
  Eb(d3);
  b = oe(b, "onChange");
  0 < b.length && (c2 = new td("onChange", "change", null, c2, d3), a7.push({ event: c2, listeners: b }));
}
var pe = null, qe = null;
function re(a7) {
  se(a7, 0);
}
function te(a7) {
  var b = ue(a7);
  if (Wa(b)) return a7;
}
function ve(a7, b) {
  if ("change" === a7) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a7) {
  if ("value" === a7.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a7, xb(a7));
    Jb(re, b);
  }
}
function Ce(a7, b, c2) {
  "focusin" === a7 ? (Ae(), pe = b, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a7 && Ae();
}
function De(a7) {
  if ("selectionchange" === a7 || "keyup" === a7 || "keydown" === a7) return te(qe);
}
function Ee(a7, b) {
  if ("click" === a7) return te(b);
}
function Fe(a7, b) {
  if ("input" === a7 || "change" === a7) return te(b);
}
function Ge(a7, b) {
  return a7 === b && (0 !== a7 || 1 / a7 === 1 / b) || a7 !== a7 && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a7, b) {
  if (He(a7, b)) return true;
  if ("object" !== typeof a7 || null === a7 || "object" !== typeof b || null === b) return false;
  var c2 = Object.keys(a7), d3 = Object.keys(b);
  if (c2.length !== d3.length) return false;
  for (d3 = 0; d3 < c2.length; d3++) {
    var e6 = c2[d3];
    if (!ja.call(b, e6) || !He(a7[e6], b[e6])) return false;
  }
  return true;
}
function Je(a7) {
  for (; a7 && a7.firstChild; ) a7 = a7.firstChild;
  return a7;
}
function Ke(a7, b) {
  var c2 = Je(a7);
  a7 = 0;
  for (var d3; c2; ) {
    if (3 === c2.nodeType) {
      d3 = a7 + c2.textContent.length;
      if (a7 <= b && d3 >= b) return { node: c2, offset: b - a7 };
      a7 = d3;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a7, b) {
  return a7 && b ? a7 === b ? true : a7 && 3 === a7.nodeType ? false : b && 3 === b.nodeType ? Le(a7, b.parentNode) : "contains" in a7 ? a7.contains(b) : a7.compareDocumentPosition ? !!(a7.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a7 = window, b = Xa(); b instanceof a7.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b.contentWindow.location.href;
    } catch (d3) {
      c2 = false;
    }
    if (c2) a7 = b.contentWindow;
    else break;
    b = Xa(a7.document);
  }
  return b;
}
function Ne(a7) {
  var b = a7 && a7.nodeName && a7.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a7.type || "search" === a7.type || "tel" === a7.type || "url" === a7.type || "password" === a7.type) || "textarea" === b || "true" === a7.contentEditable);
}
function Oe(a7) {
  var b = Me(), c2 = a7.focusedElem, d3 = a7.selectionRange;
  if (b !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d3 && Ne(c2)) {
      if (b = d3.start, a7 = d3.end, void 0 === a7 && (a7 = b), "selectionStart" in c2) c2.selectionStart = b, c2.selectionEnd = Math.min(a7, c2.value.length);
      else if (a7 = (b = c2.ownerDocument || document) && b.defaultView || window, a7.getSelection) {
        a7 = a7.getSelection();
        var e6 = c2.textContent.length, f2 = Math.min(d3.start, e6);
        d3 = void 0 === d3.end ? f2 : Math.min(d3.end, e6);
        !a7.extend && f2 > d3 && (e6 = d3, d3 = f2, f2 = e6);
        e6 = Ke(c2, f2);
        var g = Ke(
          c2,
          d3
        );
        e6 && g && (1 !== a7.rangeCount || a7.anchorNode !== e6.node || a7.anchorOffset !== e6.offset || a7.focusNode !== g.node || a7.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e6.node, e6.offset), a7.removeAllRanges(), f2 > d3 ? (a7.addRange(b), a7.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a7.addRange(b)));
      }
    }
    b = [];
    for (a7 = c2; a7 = a7.parentNode; ) 1 === a7.nodeType && b.push({ element: a7, left: a7.scrollLeft, top: a7.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b.length; c2++) a7 = b[c2], a7.element.scrollLeft = a7.left, a7.element.scrollTop = a7.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a7, b, c2) {
  var d3 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Ne(d3) ? d3 = { start: d3.selectionStart, end: d3.selectionEnd } : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = { anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset }), Se && Ie(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b = new td("onSelect", "select", null, b, c2), a7.push({ event: b, listeners: d3 }), b.target = Qe)));
}
function Ve(a7, b) {
  var c2 = {};
  c2[a7.toLowerCase()] = b.toLowerCase();
  c2["Webkit" + a7] = "webkit" + b;
  c2["Moz" + a7] = "moz" + b;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a7) {
  if (Xe[a7]) return Xe[a7];
  if (!We[a7]) return a7;
  var b = We[a7], c2;
  for (c2 in b) if (b.hasOwnProperty(c2) && c2 in Ye) return Xe[a7] = b[c2];
  return a7;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a7, b) {
  df.set(a7, b);
  fa(b, [a7]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a7, b, c2) {
  var d3 = a7.type || "unknown-event";
  a7.currentTarget = c2;
  Ub(d3, b, void 0, a7);
  a7.currentTarget = null;
}
function se(a7, b) {
  b = 0 !== (b & 4);
  for (var c2 = 0; c2 < a7.length; c2++) {
    var d3 = a7[c2], e6 = d3.event;
    d3 = d3.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d3.length - 1; 0 <= g; g--) {
        var h = d3[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e6.isPropagationStopped()) break a;
        nf(e6, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d3.length; g++) {
        h = d3[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e6.isPropagationStopped()) break a;
        nf(e6, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a7 = Rb, Qb = false, Rb = null, a7;
}
function D(a7, b) {
  var c2 = b[of];
  void 0 === c2 && (c2 = b[of] = /* @__PURE__ */ new Set());
  var d3 = a7 + "__bubble";
  c2.has(d3) || (pf(b, a7, 2, false), c2.add(d3));
}
function qf(a7, b, c2) {
  var d3 = 0;
  b && (d3 |= 4);
  pf(c2, a7, d3, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a7) {
  if (!a7[rf]) {
    a7[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a7), qf(b2, true, a7));
    });
    var b = 9 === a7.nodeType ? a7 : a7.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a7, b, c2, d3) {
  switch (jd(b)) {
    case 1:
      var e6 = ed;
      break;
    case 4:
      e6 = gd;
      break;
    default:
      e6 = fd;
  }
  c2 = e6.bind(null, b, c2, a7);
  e6 = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e6 = true);
  d3 ? void 0 !== e6 ? a7.addEventListener(b, c2, { capture: true, passive: e6 }) : a7.addEventListener(b, c2, true) : void 0 !== e6 ? a7.addEventListener(b, c2, { passive: e6 }) : a7.addEventListener(b, c2, false);
}
function hd(a7, b, c2, d3, e6) {
  var f2 = d3;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d3) a: for (; ; ) {
    if (null === d3) return;
    var g = d3.tag;
    if (3 === g || 4 === g) {
      var h = d3.stateNode.containerInfo;
      if (h === e6 || 8 === h.nodeType && h.parentNode === e6) break;
      if (4 === g) for (g = d3.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e6 || 8 === k2.nodeType && k2.parentNode === e6) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d3 = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d3 = d3.return;
  }
  Jb(function() {
    var d4 = f2, e7 = xb(c2), g2 = [];
    a: {
      var h2 = df.get(a7);
      if (void 0 !== h2) {
        var k3 = td, n3 = a7;
        switch (a7) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n3 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n3 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t8 = 0 !== (b & 4), J2 = !t8 && "scroll" === a7, x2 = t8 ? null !== h2 ? h2 + "Capture" : null : h2;
        t8 = [];
        for (var w2 = d4, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t8.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t8.length && (h2 = new k3(h2, n3, null, c2, e7), g2.push({ event: h2, listeners: t8 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a7 || "pointerover" === a7;
        k3 = "mouseout" === a7 || "pointerout" === a7;
        if (h2 && c2 !== wb && (n3 = c2.relatedTarget || c2.fromElement) && (Wc(n3) || n3[uf])) break a;
        if (k3 || h2) {
          h2 = e7.window === e7 ? e7 : (h2 = e7.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n3 = c2.relatedTarget || c2.toElement, k3 = d4, n3 = n3 ? Wc(n3) : null, null !== n3 && (J2 = Vb(n3), n3 !== J2 || 5 !== n3.tag && 6 !== n3.tag)) n3 = null;
          } else k3 = null, n3 = d4;
          if (k3 !== n3) {
            t8 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a7 || "pointerover" === a7) t8 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n3 ? h2 : ue(n3);
            h2 = new t8(F2, w2 + "leave", k3, c2, e7);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e7) === d4 && (t8 = new t8(x2, w2 + "enter", n3, c2, e7), t8.target = u2, t8.relatedTarget = J2, F2 = t8);
            J2 = F2;
            if (k3 && n3) b: {
              t8 = k3;
              x2 = n3;
              w2 = 0;
              for (u2 = t8; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t8 = vf(t8), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t8 === x2 || null !== x2 && t8 === x2.alternate) break b;
                t8 = vf(t8);
                x2 = vf(x2);
              }
              t8 = null;
            }
            else t8 = null;
            null !== k3 && wf(g2, h2, k3, t8, false);
            null !== n3 && null !== J2 && wf(g2, J2, n3, t8, true);
          }
        }
      }
      a: {
        h2 = d4 ? ue(d4) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a7, d4))) {
          ne(g2, na, c2, e7);
          break a;
        }
        xa && xa(a7, h2, d4);
        "focusout" === a7 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d4 ? ue(d4) : window;
      switch (a7) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d4, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c2, e7);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c2, e7);
      }
      var $a;
      if (ae) b: {
        switch (a7) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a7, c2) && (ba = "onCompositionEnd") : "keydown" === a7 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e7, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d4, ba), 0 < xa.length && (ba = new Ld(ba, a7, null, c2, e7), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a7, c2) : ke(a7, c2)) d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e7 = new Ld("onBeforeInput", "beforeinput", null, c2, e7), g2.push({ event: e7, listeners: d4 }), e7.data = $a);
    }
    se(g2, b);
  });
}
function tf(a7, b, c2) {
  return { instance: a7, listener: b, currentTarget: c2 };
}
function oe(a7, b) {
  for (var c2 = b + "Capture", d3 = []; null !== a7; ) {
    var e6 = a7, f2 = e6.stateNode;
    5 === e6.tag && null !== f2 && (e6 = f2, f2 = Kb(a7, c2), null != f2 && d3.unshift(tf(a7, f2, e6)), f2 = Kb(a7, b), null != f2 && d3.push(tf(a7, f2, e6)));
    a7 = a7.return;
  }
  return d3;
}
function vf(a7) {
  if (null === a7) return null;
  do
    a7 = a7.return;
  while (a7 && 5 !== a7.tag);
  return a7 ? a7 : null;
}
function wf(a7, b, c2, d3, e6) {
  for (var f2 = b._reactName, g = []; null !== c2 && c2 !== d3; ) {
    var h = c2, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d3) break;
    5 === h.tag && null !== l2 && (h = l2, e6 ? (k2 = Kb(c2, f2), null != k2 && g.unshift(tf(c2, k2, h))) : e6 || (k2 = Kb(c2, f2), null != k2 && g.push(tf(c2, k2, h))));
    c2 = c2.return;
  }
  0 !== g.length && a7.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a7) {
  return ("string" === typeof a7 ? a7 : "" + a7).replace(xf, "\n").replace(yf, "");
}
function Af(a7, b, c2) {
  b = zf(b);
  if (zf(a7) !== b && c2) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a7, b) {
  return "textarea" === a7 || "noscript" === a7 || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a7) {
  return Hf.resolve(null).then(a7).catch(If);
} : Ff;
function If(a7) {
  setTimeout(function() {
    throw a7;
  });
}
function Kf(a7, b) {
  var c2 = b, d3 = 0;
  do {
    var e6 = c2.nextSibling;
    a7.removeChild(c2);
    if (e6 && 8 === e6.nodeType) if (c2 = e6.data, "/$" === c2) {
      if (0 === d3) {
        a7.removeChild(e6);
        bd(b);
        return;
      }
      d3--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d3++;
    c2 = e6;
  } while (c2);
  bd(b);
}
function Lf(a7) {
  for (; null != a7; a7 = a7.nextSibling) {
    var b = a7.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a7.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a7;
}
function Mf(a7) {
  a7 = a7.previousSibling;
  for (var b = 0; a7; ) {
    if (8 === a7.nodeType) {
      var c2 = a7.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b) return a7;
        b--;
      } else "/$" === c2 && b++;
    }
    a7 = a7.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a7) {
  var b = a7[Of];
  if (b) return b;
  for (var c2 = a7.parentNode; c2; ) {
    if (b = c2[uf] || c2[Of]) {
      c2 = b.alternate;
      if (null !== b.child || null !== c2 && null !== c2.child) for (a7 = Mf(a7); null !== a7; ) {
        if (c2 = a7[Of]) return c2;
        a7 = Mf(a7);
      }
      return b;
    }
    a7 = c2;
    c2 = a7.parentNode;
  }
  return null;
}
function Cb(a7) {
  a7 = a7[Of] || a7[uf];
  return !a7 || 5 !== a7.tag && 6 !== a7.tag && 13 !== a7.tag && 3 !== a7.tag ? null : a7;
}
function ue(a7) {
  if (5 === a7.tag || 6 === a7.tag) return a7.stateNode;
  throw Error(p(33));
}
function Db(a7) {
  return a7[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a7) {
  return { current: a7 };
}
function E$2(a7) {
  0 > Tf || (a7.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a7, b) {
  Tf++;
  Sf[Tf] = a7.current;
  a7.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a7, b) {
  var c2 = a7.type.contextTypes;
  if (!c2) return Vf;
  var d3 = a7.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b) return d3.__reactInternalMemoizedMaskedChildContext;
  var e6 = {}, f2;
  for (f2 in c2) e6[f2] = b[f2];
  d3 && (a7 = a7.stateNode, a7.__reactInternalMemoizedUnmaskedChildContext = b, a7.__reactInternalMemoizedMaskedChildContext = e6);
  return e6;
}
function Zf(a7) {
  a7 = a7.childContextTypes;
  return null !== a7 && void 0 !== a7;
}
function $f() {
  E$2(Wf);
  E$2(H);
}
function ag(a7, b, c2) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c2);
}
function bg(a7, b, c2) {
  var d3 = a7.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d3.getChildContext) return c2;
  d3 = d3.getChildContext();
  for (var e6 in d3) if (!(e6 in b)) throw Error(p(108, Ra(a7) || "Unknown", e6));
  return A({}, c2, d3);
}
function cg(a7) {
  a7 = (a7 = a7.stateNode) && a7.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a7);
  G(Wf, Wf.current);
  return true;
}
function dg(a7, b, c2) {
  var d3 = a7.stateNode;
  if (!d3) throw Error(p(169));
  c2 ? (a7 = bg(a7, b, Xf), d3.__reactInternalMemoizedMergedChildContext = a7, E$2(Wf), E$2(H), G(H, a7)) : E$2(Wf);
  G(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a7) {
  null === eg ? eg = [a7] : eg.push(a7);
}
function ig(a7) {
  fg = true;
  hg(a7);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a7 = 0, b = C;
    try {
      var c2 = eg;
      for (C = 1; a7 < c2.length; a7++) {
        var d3 = c2[a7];
        do
          d3 = d3(true);
        while (null !== d3);
      }
      eg = null;
      fg = false;
    } catch (e6) {
      throw null !== eg && (eg = eg.slice(a7 + 1)), ac(fc, jg), e6;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a7, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a7;
  ng = b;
}
function ug(a7, b, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a7;
  var d3 = rg;
  a7 = sg;
  var e6 = 32 - oc(d3) - 1;
  d3 &= ~(1 << e6);
  c2 += 1;
  var f2 = 32 - oc(b) + e6;
  if (30 < f2) {
    var g = e6 - e6 % 5;
    f2 = (d3 & (1 << g) - 1).toString(32);
    d3 >>= g;
    e6 -= g;
    rg = 1 << 32 - oc(b) + e6 | c2 << e6 | d3;
    sg = f2 + a7;
  } else rg = 1 << f2 | c2 << e6 | d3, sg = a7;
}
function vg(a7) {
  null !== a7.return && (tg(a7, 1), ug(a7, 1, 0));
}
function wg(a7) {
  for (; a7 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a7 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a7, b) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b;
  c2.return = a7;
  b = a7.deletions;
  null === b ? (a7.deletions = [c2], a7.flags |= 16) : b.push(c2);
}
function Cg(a7, b) {
  switch (a7.tag) {
    case 5:
      var c2 = a7.type;
      b = 1 !== b.nodeType || c2.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a7.stateNode = b, xg = a7, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a7.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a7.stateNode = b, xg = a7, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a7.memoizedState = { dehydrated: b, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b, c2.return = a7, a7.child = c2, xg = a7, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a7) {
  return 0 !== (a7.mode & 1) && 0 === (a7.flags & 128);
}
function Eg(a7) {
  if (I) {
    var b = yg;
    if (b) {
      var c2 = b;
      if (!Cg(a7, b)) {
        if (Dg(a7)) throw Error(p(418));
        b = Lf(c2.nextSibling);
        var d3 = xg;
        b && Cg(a7, b) ? Ag(d3, c2) : (a7.flags = a7.flags & -4097 | 2, I = false, xg = a7);
      }
    } else {
      if (Dg(a7)) throw Error(p(418));
      a7.flags = a7.flags & -4097 | 2;
      I = false;
      xg = a7;
    }
  }
}
function Fg(a7) {
  for (a7 = a7.return; null !== a7 && 5 !== a7.tag && 3 !== a7.tag && 13 !== a7.tag; ) a7 = a7.return;
  xg = a7;
}
function Gg(a7) {
  if (a7 !== xg) return false;
  if (!I) return Fg(a7), I = true, false;
  var b;
  (b = 3 !== a7.tag) && !(b = 5 !== a7.tag) && (b = a7.type, b = "head" !== b && "body" !== b && !Ef(a7.type, a7.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a7)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a7, b), b = Lf(b.nextSibling);
  }
  Fg(a7);
  if (13 === a7.tag) {
    a7 = a7.memoizedState;
    a7 = null !== a7 ? a7.dehydrated : null;
    if (!a7) throw Error(p(317));
    a: {
      a7 = a7.nextSibling;
      for (b = 0; a7; ) {
        if (8 === a7.nodeType) {
          var c2 = a7.data;
          if ("/$" === c2) {
            if (0 === b) {
              yg = Lf(a7.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b++;
        }
        a7 = a7.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a7.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a7 = yg; a7; ) a7 = Lf(a7.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a7) {
  null === zg ? zg = [a7] : zg.push(a7);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a7, b, c2) {
  a7 = c2.ref;
  if (null !== a7 && "function" !== typeof a7 && "object" !== typeof a7) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p(309));
        var d3 = c2.stateNode;
      }
      if (!d3) throw Error(p(147, a7));
      var e6 = d3, f2 = "" + a7;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a8) {
        var b2 = e6.refs;
        null === a8 ? delete b2[f2] : b2[f2] = a8;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a7) throw Error(p(284));
    if (!c2._owner) throw Error(p(290, a7));
  }
  return a7;
}
function Mg(a7, b) {
  a7 = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a7 ? "object with keys {" + Object.keys(b).join(", ") + "}" : a7));
}
function Ng(a7) {
  var b = a7._init;
  return b(a7._payload);
}
function Og(a7) {
  function b(b2, c3) {
    if (a7) {
      var d4 = b2.deletions;
      null === d4 ? (b2.deletions = [c3], b2.flags |= 16) : d4.push(c3);
    }
  }
  function c2(c3, d4) {
    if (!a7) return null;
    for (; null !== d4; ) b(c3, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a8, b2) {
    for (a8 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a8.set(b2.key, b2) : a8.set(b2.index, b2), b2 = b2.sibling;
    return a8;
  }
  function e6(a8, b2) {
    a8 = Pg(a8, b2);
    a8.index = 0;
    a8.sibling = null;
    return a8;
  }
  function f2(b2, c3, d4) {
    b2.index = d4;
    if (!a7) return b2.flags |= 1048576, c3;
    d4 = b2.alternate;
    if (null !== d4) return d4 = d4.index, d4 < c3 ? (b2.flags |= 2, c3) : d4;
    b2.flags |= 2;
    return c3;
  }
  function g(b2) {
    a7 && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a8, b2, c3, d4) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c3, a8.mode, d4), b2.return = a8, b2;
    b2 = e6(b2, c3);
    b2.return = a8;
    return b2;
  }
  function k2(a8, b2, c3, d4) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a8, b2, c3.props.children, d4, c3.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d4 = e6(b2, c3.props), d4.ref = Lg(a8, b2, c3), d4.return = a8, d4;
    d4 = Rg(c3.type, c3.key, c3.props, null, a8.mode, d4);
    d4.ref = Lg(a8, b2, c3);
    d4.return = a8;
    return d4;
  }
  function l2(a8, b2, c3, d4) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c3.containerInfo || b2.stateNode.implementation !== c3.implementation) return b2 = Sg(c3, a8.mode, d4), b2.return = a8, b2;
    b2 = e6(b2, c3.children || []);
    b2.return = a8;
    return b2;
  }
  function m2(a8, b2, c3, d4, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c3, a8.mode, d4, f3), b2.return = a8, b2;
    b2 = e6(b2, c3);
    b2.return = a8;
    return b2;
  }
  function q2(a8, b2, c3) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a8.mode, c3), b2.return = a8, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c3 = Rg(b2.type, b2.key, b2.props, null, a8.mode, c3), c3.ref = Lg(a8, null, b2), c3.return = a8, c3;
        case wa:
          return b2 = Sg(b2, a8.mode, c3), b2.return = a8, b2;
        case Ha:
          var d4 = b2._init;
          return q2(a8, d4(b2._payload), c3);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a8.mode, c3, null), b2.return = a8, b2;
      Mg(a8, b2);
    }
    return null;
  }
  function r3(a8, b2, c3, d4) {
    var e7 = null !== b2 ? b2.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e7 ? null : h(a8, b2, "" + c3, d4);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e7 ? k2(a8, b2, c3, d4) : null;
        case wa:
          return c3.key === e7 ? l2(a8, b2, c3, d4) : null;
        case Ha:
          return e7 = c3._init, r3(
            a8,
            b2,
            e7(c3._payload),
            d4
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e7 ? null : m2(a8, b2, c3, d4, null);
      Mg(a8, c3);
    }
    return null;
  }
  function y2(a8, b2, c3, d4, e7) {
    if ("string" === typeof d4 && "" !== d4 || "number" === typeof d4) return a8 = a8.get(c3) || null, h(b2, a8, "" + d4, e7);
    if ("object" === typeof d4 && null !== d4) {
      switch (d4.$$typeof) {
        case va:
          return a8 = a8.get(null === d4.key ? c3 : d4.key) || null, k2(b2, a8, d4, e7);
        case wa:
          return a8 = a8.get(null === d4.key ? c3 : d4.key) || null, l2(b2, a8, d4, e7);
        case Ha:
          var f3 = d4._init;
          return y2(a8, b2, c3, f3(d4._payload), e7);
      }
      if (eb(d4) || Ka(d4)) return a8 = a8.get(c3) || null, m2(b2, a8, d4, e7, null);
      Mg(b2, d4);
    }
    return null;
  }
  function n3(e7, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n4 = r3(e7, u2, h2[w2], k3);
      if (null === n4) {
        null === u2 && (u2 = x2);
        break;
      }
      a7 && u2 && null === n4.alternate && b(e7, u2);
      g2 = f2(n4, g2, w2);
      null === m3 ? l3 = n4 : m3.sibling = n4;
      m3 = n4;
      u2 = x2;
    }
    if (w2 === h2.length) return c2(e7, u2), I && tg(e7, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e7, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e7, w2);
      return l3;
    }
    for (u2 = d3(e7, u2); w2 < h2.length; w2++) x2 = y2(u2, e7, w2, h2[w2], k3), null !== x2 && (a7 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a7 && u2.forEach(function(a8) {
      return b(e7, a8);
    });
    I && tg(e7, w2);
    return l3;
  }
  function t8(e7, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n4 = h2.next(); null !== m3 && !n4.done; w2++, n4 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t9 = r3(e7, m3, n4.value, k3);
      if (null === t9) {
        null === m3 && (m3 = x2);
        break;
      }
      a7 && m3 && null === t9.alternate && b(e7, m3);
      g2 = f2(t9, g2, w2);
      null === u2 ? l3 = t9 : u2.sibling = t9;
      u2 = t9;
      m3 = x2;
    }
    if (n4.done) return c2(
      e7,
      m3
    ), I && tg(e7, w2), l3;
    if (null === m3) {
      for (; !n4.done; w2++, n4 = h2.next()) n4 = q2(e7, n4.value, k3), null !== n4 && (g2 = f2(n4, g2, w2), null === u2 ? l3 = n4 : u2.sibling = n4, u2 = n4);
      I && tg(e7, w2);
      return l3;
    }
    for (m3 = d3(e7, m3); !n4.done; w2++, n4 = h2.next()) n4 = y2(m3, e7, w2, n4.value, k3), null !== n4 && (a7 && null !== n4.alternate && m3.delete(null === n4.key ? w2 : n4.key), g2 = f2(n4, g2, w2), null === u2 ? l3 = n4 : u2.sibling = n4, u2 = n4);
    a7 && m3.forEach(function(a8) {
      return b(e7, a8);
    });
    I && tg(e7, w2);
    return l3;
  }
  function J2(a8, d4, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d4; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a8, l3.sibling);
                    d4 = e6(l3, f3.props.children);
                    d4.return = a8;
                    a8 = d4;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a8, l3.sibling);
                  d4 = e6(l3, f3.props);
                  d4.ref = Lg(a8, l3, f3);
                  d4.return = a8;
                  a8 = d4;
                  break a;
                }
                c2(a8, l3);
                break;
              } else b(a8, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d4 = Tg(f3.props.children, a8.mode, h2, f3.key), d4.return = a8, a8 = d4) : (h2 = Rg(f3.type, f3.key, f3.props, null, a8.mode, h2), h2.ref = Lg(a8, d4, f3), h2.return = a8, a8 = h2);
          }
          return g(a8);
        case wa:
          a: {
            for (l3 = f3.key; null !== d4; ) {
              if (d4.key === l3) if (4 === d4.tag && d4.stateNode.containerInfo === f3.containerInfo && d4.stateNode.implementation === f3.implementation) {
                c2(a8, d4.sibling);
                d4 = e6(d4, f3.children || []);
                d4.return = a8;
                a8 = d4;
                break a;
              } else {
                c2(a8, d4);
                break;
              }
              else b(a8, d4);
              d4 = d4.sibling;
            }
            d4 = Sg(f3, a8.mode, h2);
            d4.return = a8;
            a8 = d4;
          }
          return g(a8);
        case Ha:
          return l3 = f3._init, J2(a8, d4, l3(f3._payload), h2);
      }
      if (eb(f3)) return n3(a8, d4, f3, h2);
      if (Ka(f3)) return t8(a8, d4, f3, h2);
      Mg(a8, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d4 && 6 === d4.tag ? (c2(a8, d4.sibling), d4 = e6(d4, f3), d4.return = a8, a8 = d4) : (c2(a8, d4), d4 = Qg(f3, a8.mode, h2), d4.return = a8, a8 = d4), g(a8)) : c2(a8, d4);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a7) {
  var b = Wg.current;
  E$2(Wg);
  a7._currentValue = b;
}
function bh(a7, b, c2) {
  for (; null !== a7; ) {
    var d3 = a7.alternate;
    (a7.childLanes & b) !== b ? (a7.childLanes |= b, null !== d3 && (d3.childLanes |= b)) : null !== d3 && (d3.childLanes & b) !== b && (d3.childLanes |= b);
    if (a7 === c2) break;
    a7 = a7.return;
  }
}
function ch(a7, b) {
  Xg = a7;
  Zg = Yg = null;
  a7 = a7.dependencies;
  null !== a7 && null !== a7.firstContext && (0 !== (a7.lanes & b) && (dh = true), a7.firstContext = null);
}
function eh(a7) {
  var b = a7._currentValue;
  if (Zg !== a7) if (a7 = { context: a7, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a7;
    Xg.dependencies = { lanes: 0, firstContext: a7 };
  } else Yg = Yg.next = a7;
  return b;
}
var fh = null;
function gh(a7) {
  null === fh ? fh = [a7] : fh.push(a7);
}
function hh(a7, b, c2, d3) {
  var e6 = b.interleaved;
  null === e6 ? (c2.next = c2, gh(b)) : (c2.next = e6.next, e6.next = c2);
  b.interleaved = c2;
  return ih(a7, d3);
}
function ih(a7, b) {
  a7.lanes |= b;
  var c2 = a7.alternate;
  null !== c2 && (c2.lanes |= b);
  c2 = a7;
  for (a7 = a7.return; null !== a7; ) a7.childLanes |= b, c2 = a7.alternate, null !== c2 && (c2.childLanes |= b), c2 = a7, a7 = a7.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a7) {
  a7.updateQueue = { baseState: a7.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a7, b) {
  a7 = a7.updateQueue;
  b.updateQueue === a7 && (b.updateQueue = { baseState: a7.baseState, firstBaseUpdate: a7.firstBaseUpdate, lastBaseUpdate: a7.lastBaseUpdate, shared: a7.shared, effects: a7.effects });
}
function mh(a7, b) {
  return { eventTime: a7, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a7, b, c2) {
  var d3 = a7.updateQueue;
  if (null === d3) return null;
  d3 = d3.shared;
  if (0 !== (K & 2)) {
    var e6 = d3.pending;
    null === e6 ? b.next = b : (b.next = e6.next, e6.next = b);
    d3.pending = b;
    return ih(a7, c2);
  }
  e6 = d3.interleaved;
  null === e6 ? (b.next = b, gh(d3)) : (b.next = e6.next, e6.next = b);
  d3.interleaved = b;
  return ih(a7, c2);
}
function oh(a7, b, c2) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c2 & 4194240))) {
    var d3 = b.lanes;
    d3 &= a7.pendingLanes;
    c2 |= d3;
    b.lanes = c2;
    Cc(a7, c2);
  }
}
function ph(a7, b) {
  var c2 = a7.updateQueue, d3 = a7.alternate;
  if (null !== d3 && (d3 = d3.updateQueue, c2 === d3)) {
    var e6 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e6 = f2 = g : f2 = f2.next = g;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e6 = f2 = b : f2 = f2.next = b;
    } else e6 = f2 = b;
    c2 = { baseState: d3.baseState, firstBaseUpdate: e6, lastBaseUpdate: f2, shared: d3.shared, effects: d3.effects };
    a7.updateQueue = c2;
    return;
  }
  a7 = c2.lastBaseUpdate;
  null === a7 ? c2.firstBaseUpdate = b : a7.next = b;
  c2.lastBaseUpdate = b;
}
function qh(a7, b, c2, d3) {
  var e6 = a7.updateQueue;
  jh = false;
  var f2 = e6.firstBaseUpdate, g = e6.lastBaseUpdate, h = e6.shared.pending;
  if (null !== h) {
    e6.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a7.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e6.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r3 = h.lane, y2 = h.eventTime;
      if ((d3 & r3) === r3) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n3 = a7, t8 = h;
          r3 = b;
          y2 = c2;
          switch (t8.tag) {
            case 1:
              n3 = t8.payload;
              if ("function" === typeof n3) {
                q2 = n3.call(y2, q2, r3);
                break a;
              }
              q2 = n3;
              break a;
            case 3:
              n3.flags = n3.flags & -65537 | 128;
            case 0:
              n3 = t8.payload;
              r3 = "function" === typeof n3 ? n3.call(y2, q2, r3) : n3;
              if (null === r3 || void 0 === r3) break a;
              q2 = A({}, q2, r3);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a7.flags |= 64, r3 = e6.effects, null === r3 ? e6.effects = [h] : r3.push(h));
      } else y2 = { eventTime: y2, lane: r3, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r3;
      h = h.next;
      if (null === h) if (h = e6.shared.pending, null === h) break;
      else r3 = h, h = r3.next, r3.next = null, e6.lastBaseUpdate = r3, e6.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e6.baseState = k2;
    e6.firstBaseUpdate = l2;
    e6.lastBaseUpdate = m2;
    b = e6.shared.interleaved;
    if (null !== b) {
      e6 = b;
      do
        g |= e6.lane, e6 = e6.next;
      while (e6 !== b);
    } else null === f2 && (e6.shared.lanes = 0);
    rh |= g;
    a7.lanes = g;
    a7.memoizedState = q2;
  }
}
function sh(a7, b, c2) {
  a7 = b.effects;
  b.effects = null;
  if (null !== a7) for (b = 0; b < a7.length; b++) {
    var d3 = a7[b], e6 = d3.callback;
    if (null !== e6) {
      d3.callback = null;
      d3 = c2;
      if ("function" !== typeof e6) throw Error(p(191, e6));
      e6.call(d3);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a7) {
  if (a7 === th) throw Error(p(174));
  return a7;
}
function yh(a7, b) {
  G(wh, b);
  G(vh, a7);
  G(uh, th);
  a7 = b.nodeType;
  switch (a7) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a7 = 8 === a7 ? b.parentNode : b, b = a7.namespaceURI || null, a7 = a7.tagName, b = lb(b, a7);
  }
  E$2(uh);
  G(uh, b);
}
function zh() {
  E$2(uh);
  E$2(vh);
  E$2(wh);
}
function Ah(a7) {
  xh(wh.current);
  var b = xh(uh.current);
  var c2 = lb(b, a7.type);
  b !== c2 && (G(vh, a7), G(uh, c2));
}
function Bh(a7) {
  vh.current === a7 && (E$2(uh), E$2(vh));
}
var L = Uf(0);
function Ch(a7) {
  for (var b = a7; null !== b; ) {
    if (13 === b.tag) {
      var c2 = b.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a7) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a7) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a7 = 0; a7 < Dh.length; a7++) Dh[a7]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a7, b) {
  if (null === b) return false;
  for (var c2 = 0; c2 < b.length && c2 < a7.length; c2++) if (!He(a7[c2], b[c2])) return false;
  return true;
}
function Nh(a7, b, c2, d3, e6, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a7 || null === a7.memoizedState ? Oh : Ph;
  a7 = c2(d3, e6);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a7 = c2(d3, e6);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a7;
}
function Sh() {
  var a7 = 0 !== Kh;
  Kh = 0;
  return a7;
}
function Th() {
  var a7 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a7 : O = O.next = a7;
  return O;
}
function Uh() {
  if (null === N) {
    var a7 = M.alternate;
    a7 = null !== a7 ? a7.memoizedState : null;
  } else a7 = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a7;
  else {
    if (null === a7) throw Error(p(310));
    N = a7;
    a7 = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a7 : O = O.next = a7;
  }
  return O;
}
function Vh(a7, b) {
  return "function" === typeof b ? b(a7) : b;
}
function Wh(a7) {
  var b = Uh(), c2 = b.queue;
  if (null === c2) throw Error(p(311));
  c2.lastRenderedReducer = a7;
  var d3 = N, e6 = d3.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e6) {
      var g = e6.next;
      e6.next = f2.next;
      f2.next = g;
    }
    d3.baseQueue = e6 = f2;
    c2.pending = null;
  }
  if (null !== e6) {
    f2 = e6.next;
    d3 = d3.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d3 = l2.hasEagerState ? l2.eagerState : a7(d3, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d3) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d3 : k2.next = h;
    He(d3, b.memoizedState) || (dh = true);
    b.memoizedState = d3;
    b.baseState = g;
    b.baseQueue = k2;
    c2.lastRenderedState = d3;
  }
  a7 = c2.interleaved;
  if (null !== a7) {
    e6 = a7;
    do
      f2 = e6.lane, M.lanes |= f2, rh |= f2, e6 = e6.next;
    while (e6 !== a7);
  } else null === e6 && (c2.lanes = 0);
  return [b.memoizedState, c2.dispatch];
}
function Xh(a7) {
  var b = Uh(), c2 = b.queue;
  if (null === c2) throw Error(p(311));
  c2.lastRenderedReducer = a7;
  var d3 = c2.dispatch, e6 = c2.pending, f2 = b.memoizedState;
  if (null !== e6) {
    c2.pending = null;
    var g = e6 = e6.next;
    do
      f2 = a7(f2, g.action), g = g.next;
    while (g !== e6);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d3];
}
function Yh() {
}
function Zh(a7, b) {
  var c2 = M, d3 = Uh(), e6 = b(), f2 = !He(d3.memoizedState, e6);
  f2 && (d3.memoizedState = e6, dh = true);
  d3 = d3.queue;
  $h(ai.bind(null, c2, d3, a7), [a7]);
  if (d3.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d3, e6, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c2, b, e6);
  }
  return e6;
}
function di(a7, b, c2) {
  a7.flags |= 16384;
  a7 = { getSnapshot: b, value: c2 };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a7]) : (c2 = b.stores, null === c2 ? b.stores = [a7] : c2.push(a7));
}
function ci(a7, b, c2, d3) {
  b.value = c2;
  b.getSnapshot = d3;
  ei(b) && fi(a7);
}
function ai(a7, b, c2) {
  return c2(function() {
    ei(b) && fi(a7);
  });
}
function ei(a7) {
  var b = a7.getSnapshot;
  a7 = a7.value;
  try {
    var c2 = b();
    return !He(a7, c2);
  } catch (d3) {
    return true;
  }
}
function fi(a7) {
  var b = ih(a7, 1);
  null !== b && gi(b, a7, 1, -1);
}
function hi(a7) {
  var b = Th();
  "function" === typeof a7 && (a7 = a7());
  b.memoizedState = b.baseState = a7;
  a7 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a7 };
  b.queue = a7;
  a7 = a7.dispatch = ii.bind(null, M, a7);
  return [b.memoizedState, a7];
}
function bi(a7, b, c2, d3) {
  a7 = { tag: a7, create: b, destroy: c2, deps: d3, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a7.next = a7) : (c2 = b.lastEffect, null === c2 ? b.lastEffect = a7.next = a7 : (d3 = c2.next, c2.next = a7, a7.next = d3, b.lastEffect = a7));
  return a7;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a7, b, c2, d3) {
  var e6 = Th();
  M.flags |= a7;
  e6.memoizedState = bi(1 | b, c2, void 0, void 0 === d3 ? null : d3);
}
function li(a7, b, c2, d3) {
  var e6 = Uh();
  d3 = void 0 === d3 ? null : d3;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d3 && Mh(d3, g.deps)) {
      e6.memoizedState = bi(b, c2, f2, d3);
      return;
    }
  }
  M.flags |= a7;
  e6.memoizedState = bi(1 | b, c2, f2, d3);
}
function mi(a7, b) {
  return ki(8390656, 8, a7, b);
}
function $h(a7, b) {
  return li(2048, 8, a7, b);
}
function ni(a7, b) {
  return li(4, 2, a7, b);
}
function oi(a7, b) {
  return li(4, 4, a7, b);
}
function pi(a7, b) {
  if ("function" === typeof b) return a7 = a7(), b(a7), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a7 = a7(), b.current = a7, function() {
    b.current = null;
  };
}
function qi(a7, b, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a7]) : null;
  return li(4, 4, pi.bind(null, b, a7), c2);
}
function ri() {
}
function si(a7, b) {
  var c2 = Uh();
  b = void 0 === b ? null : b;
  var d3 = c2.memoizedState;
  if (null !== d3 && null !== b && Mh(b, d3[1])) return d3[0];
  c2.memoizedState = [a7, b];
  return a7;
}
function ti(a7, b) {
  var c2 = Uh();
  b = void 0 === b ? null : b;
  var d3 = c2.memoizedState;
  if (null !== d3 && null !== b && Mh(b, d3[1])) return d3[0];
  a7 = a7();
  c2.memoizedState = [a7, b];
  return a7;
}
function ui(a7, b, c2) {
  if (0 === (Hh & 21)) return a7.baseState && (a7.baseState = false, dh = true), a7.memoizedState = c2;
  He(c2, b) || (c2 = yc(), M.lanes |= c2, rh |= c2, a7.baseState = true);
  return b;
}
function vi(a7, b) {
  var c2 = C;
  C = 0 !== c2 && 4 > c2 ? c2 : 4;
  a7(true);
  var d3 = Gh.transition;
  Gh.transition = {};
  try {
    a7(false), b();
  } finally {
    C = c2, Gh.transition = d3;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a7, b, c2) {
  var d3 = yi(a7);
  c2 = { lane: d3, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a7)) Ai(b, c2);
  else if (c2 = hh(a7, b, c2, d3), null !== c2) {
    var e6 = R();
    gi(c2, a7, d3, e6);
    Bi(c2, b, d3);
  }
}
function ii(a7, b, c2) {
  var d3 = yi(a7), e6 = { lane: d3, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a7)) Ai(b, e6);
  else {
    var f2 = a7.alternate;
    if (0 === a7.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c2);
      e6.hasEagerState = true;
      e6.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e6.next = e6, gh(b)) : (e6.next = k2.next, k2.next = e6);
        b.interleaved = e6;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a7, b, e6, d3);
    null !== c2 && (e6 = R(), gi(c2, a7, d3, e6), Bi(c2, b, d3));
  }
}
function zi(a7) {
  var b = a7.alternate;
  return a7 === M || null !== b && b === M;
}
function Ai(a7, b) {
  Jh = Ih = true;
  var c2 = a7.pending;
  null === c2 ? b.next = b : (b.next = c2.next, c2.next = b);
  a7.pending = b;
}
function Bi(a7, b, c2) {
  if (0 !== (c2 & 4194240)) {
    var d3 = b.lanes;
    d3 &= a7.pendingLanes;
    c2 |= d3;
    b.lanes = c2;
    Cc(a7, c2);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a7, b) {
  Th().memoizedState = [a7, void 0 === b ? null : b];
  return a7;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a7, b, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a7]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a7),
    c2
  );
}, useLayoutEffect: function(a7, b) {
  return ki(4194308, 4, a7, b);
}, useInsertionEffect: function(a7, b) {
  return ki(4, 2, a7, b);
}, useMemo: function(a7, b) {
  var c2 = Th();
  b = void 0 === b ? null : b;
  a7 = a7();
  c2.memoizedState = [a7, b];
  return a7;
}, useReducer: function(a7, b, c2) {
  var d3 = Th();
  b = void 0 !== c2 ? c2(b) : b;
  d3.memoizedState = d3.baseState = b;
  a7 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a7, lastRenderedState: b };
  d3.queue = a7;
  a7 = a7.dispatch = xi.bind(null, M, a7);
  return [d3.memoizedState, a7];
}, useRef: function(a7) {
  var b = Th();
  a7 = { current: a7 };
  return b.memoizedState = a7;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a7) {
  return Th().memoizedState = a7;
}, useTransition: function() {
  var a7 = hi(false), b = a7[0];
  a7 = vi.bind(null, a7[1]);
  Th().memoizedState = a7;
  return [b, a7];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a7, b, c2) {
  var d3 = M, e6 = Th();
  if (I) {
    if (void 0 === c2) throw Error(p(407));
    c2 = c2();
  } else {
    c2 = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d3, b, c2);
  }
  e6.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b };
  e6.queue = f2;
  mi(ai.bind(
    null,
    d3,
    f2,
    a7
  ), [a7]);
  d3.flags |= 2048;
  bi(9, ci.bind(null, d3, f2, c2, b), void 0, null);
  return c2;
}, useId: function() {
  var a7 = Th(), b = Q.identifierPrefix;
  if (I) {
    var c2 = sg;
    var d3 = rg;
    c2 = (d3 & ~(1 << 32 - oc(d3) - 1)).toString(32) + c2;
    b = ":" + b + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b += "H" + c2.toString(32));
    b += ":";
  } else c2 = Lh++, b = ":" + b + "r" + c2.toString(32) + ":";
  return a7.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a7) {
    var b = Uh();
    return ui(b, N.memoizedState, a7);
  },
  useTransition: function() {
    var a7 = Wh(Vh)[0], b = Uh().memoizedState;
    return [a7, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a7) {
  var b = Uh();
  return null === N ? b.memoizedState = a7 : ui(b, N.memoizedState, a7);
}, useTransition: function() {
  var a7 = Xh(Vh)[0], b = Uh().memoizedState;
  return [a7, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a7, b) {
  if (a7 && a7.defaultProps) {
    b = A({}, b);
    a7 = a7.defaultProps;
    for (var c2 in a7) void 0 === b[c2] && (b[c2] = a7[c2]);
    return b;
  }
  return b;
}
function Di(a7, b, c2, d3) {
  b = a7.memoizedState;
  c2 = c2(d3, b);
  c2 = null === c2 || void 0 === c2 ? b : A({}, b, c2);
  a7.memoizedState = c2;
  0 === a7.lanes && (a7.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a7) {
  return (a7 = a7._reactInternals) ? Vb(a7) === a7 : false;
}, enqueueSetState: function(a7, b, c2) {
  a7 = a7._reactInternals;
  var d3 = R(), e6 = yi(a7), f2 = mh(d3, e6);
  f2.payload = b;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b = nh(a7, f2, e6);
  null !== b && (gi(b, a7, e6, d3), oh(b, a7, e6));
}, enqueueReplaceState: function(a7, b, c2) {
  a7 = a7._reactInternals;
  var d3 = R(), e6 = yi(a7), f2 = mh(d3, e6);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b = nh(a7, f2, e6);
  null !== b && (gi(b, a7, e6, d3), oh(b, a7, e6));
}, enqueueForceUpdate: function(a7, b) {
  a7 = a7._reactInternals;
  var c2 = R(), d3 = yi(a7), e6 = mh(c2, d3);
  e6.tag = 2;
  void 0 !== b && null !== b && (e6.callback = b);
  b = nh(a7, e6, d3);
  null !== b && (gi(b, a7, d3, c2), oh(b, a7, d3));
} };
function Fi(a7, b, c2, d3, e6, f2, g) {
  a7 = a7.stateNode;
  return "function" === typeof a7.shouldComponentUpdate ? a7.shouldComponentUpdate(d3, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c2, d3) || !Ie(e6, f2) : true;
}
function Gi(a7, b, c2) {
  var d3 = false, e6 = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e6 = Zf(b) ? Xf : H.current, d3 = b.contextTypes, f2 = (d3 = null !== d3 && void 0 !== d3) ? Yf(a7, e6) : Vf);
  b = new b(c2, f2);
  a7.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a7.stateNode = b;
  b._reactInternals = a7;
  d3 && (a7 = a7.stateNode, a7.__reactInternalMemoizedUnmaskedChildContext = e6, a7.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a7, b, c2, d3) {
  a7 = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c2, d3);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c2, d3);
  b.state !== a7 && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a7, b, c2, d3) {
  var e6 = a7.stateNode;
  e6.props = c2;
  e6.state = a7.memoizedState;
  e6.refs = {};
  kh(a7);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e6.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e6.context = Yf(a7, f2));
  e6.state = a7.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a7, b, f2, c2), e6.state = a7.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e6.getSnapshotBeforeUpdate || "function" !== typeof e6.UNSAFE_componentWillMount && "function" !== typeof e6.componentWillMount || (b = e6.state, "function" === typeof e6.componentWillMount && e6.componentWillMount(), "function" === typeof e6.UNSAFE_componentWillMount && e6.UNSAFE_componentWillMount(), b !== e6.state && Ei.enqueueReplaceState(e6, e6.state, null), qh(a7, c2, e6, d3), e6.state = a7.memoizedState);
  "function" === typeof e6.componentDidMount && (a7.flags |= 4194308);
}
function Ji(a7, b) {
  try {
    var c2 = "", d3 = b;
    do
      c2 += Pa(d3), d3 = d3.return;
    while (d3);
    var e6 = c2;
  } catch (f2) {
    e6 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a7, source: b, stack: e6, digest: null };
}
function Ki(a7, b, c2) {
  return { value: a7, source: null, stack: null != c2 ? c2 : null, digest: null != b ? b : null };
}
function Li(a7, b) {
  try {
    console.error(b.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a7, b, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d3 = b.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d3);
    Li(a7, b);
  };
  return c2;
}
function Qi(a7, b, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d3 = a7.type.getDerivedStateFromError;
  if ("function" === typeof d3) {
    var e6 = b.value;
    c2.payload = function() {
      return d3(e6);
    };
    c2.callback = function() {
      Li(a7, b);
    };
  }
  var f2 = a7.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a7, b);
    "function" !== typeof d3 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a7, b, c2) {
  var d3 = a7.pingCache;
  if (null === d3) {
    d3 = a7.pingCache = new Mi();
    var e6 = /* @__PURE__ */ new Set();
    d3.set(b, e6);
  } else e6 = d3.get(b), void 0 === e6 && (e6 = /* @__PURE__ */ new Set(), d3.set(b, e6));
  e6.has(c2) || (e6.add(c2), a7 = Ti.bind(null, a7, b, c2), b.then(a7, a7));
}
function Ui(a7) {
  do {
    var b;
    if (b = 13 === a7.tag) b = a7.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a7;
    a7 = a7.return;
  } while (null !== a7);
  return null;
}
function Vi(a7, b, c2, d3, e6) {
  if (0 === (a7.mode & 1)) return a7 === b ? a7.flags |= 65536 : (a7.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c2, b, 1))), c2.lanes |= 1), a7;
  a7.flags |= 65536;
  a7.lanes = e6;
  return a7;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a7, b, c2, d3) {
  b.child = null === a7 ? Vg(b, null, c2, d3) : Ug(b, a7.child, c2, d3);
}
function Yi(a7, b, c2, d3, e6) {
  c2 = c2.render;
  var f2 = b.ref;
  ch(b, e6);
  d3 = Nh(a7, b, c2, d3, f2, e6);
  c2 = Sh();
  if (null !== a7 && !dh) return b.updateQueue = a7.updateQueue, b.flags &= -2053, a7.lanes &= ~e6, Zi(a7, b, e6);
  I && c2 && vg(b);
  b.flags |= 1;
  Xi(a7, b, d3, e6);
  return b.child;
}
function $i(a7, b, c2, d3, e6) {
  if (null === a7) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b.tag = 15, b.type = f2, bj(a7, b, f2, d3, e6);
    a7 = Rg(c2.type, null, d3, b, b.mode, e6);
    a7.ref = b.ref;
    a7.return = b;
    return b.child = a7;
  }
  f2 = a7.child;
  if (0 === (a7.lanes & e6)) {
    var g = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g, d3) && a7.ref === b.ref) return Zi(a7, b, e6);
  }
  b.flags |= 1;
  a7 = Pg(f2, d3);
  a7.ref = b.ref;
  a7.return = b;
  return b.child = a7;
}
function bj(a7, b, c2, d3, e6) {
  if (null !== a7) {
    var f2 = a7.memoizedProps;
    if (Ie(f2, d3) && a7.ref === b.ref) if (dh = false, b.pendingProps = d3 = f2, 0 !== (a7.lanes & e6)) 0 !== (a7.flags & 131072) && (dh = true);
    else return b.lanes = a7.lanes, Zi(a7, b, e6);
  }
  return cj(a7, b, c2, d3, e6);
}
function dj(a7, b, c2) {
  var d3 = b.pendingProps, e6 = d3.children, f2 = null !== a7 ? a7.memoizedState : null;
  if ("hidden" === d3.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a7 = null !== f2 ? f2.baseLanes | c2 : c2, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a7, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a7, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d3 = null !== f2 ? f2.baseLanes : c2;
    G(ej, fj);
    fj |= d3;
  }
  else null !== f2 ? (d3 = f2.baseLanes | c2, b.memoizedState = null) : d3 = c2, G(ej, fj), fj |= d3;
  Xi(a7, b, e6, c2);
  return b.child;
}
function gj(a7, b) {
  var c2 = b.ref;
  if (null === a7 && null !== c2 || null !== a7 && a7.ref !== c2) b.flags |= 512, b.flags |= 2097152;
}
function cj(a7, b, c2, d3, e6) {
  var f2 = Zf(c2) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e6);
  c2 = Nh(a7, b, c2, d3, f2, e6);
  d3 = Sh();
  if (null !== a7 && !dh) return b.updateQueue = a7.updateQueue, b.flags &= -2053, a7.lanes &= ~e6, Zi(a7, b, e6);
  I && d3 && vg(b);
  b.flags |= 1;
  Xi(a7, b, c2, e6);
  return b.child;
}
function hj(a7, b, c2, d3, e6) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e6);
  if (null === b.stateNode) ij(a7, b), Gi(b, c2, d3), Ii(b, c2, d3, e6), d3 = true;
  else if (null === a7) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d3 || k2 !== l2) && Hi(b, g, d3, l2);
    jh = false;
    var r3 = b.memoizedState;
    g.state = r3;
    qh(b, d3, g, e6);
    k2 = b.memoizedState;
    h !== d3 || r3 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c2, m2, d3), k2 = b.memoizedState), (h = jh || Fi(b, c2, h, d3, r3, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d3, b.memoizedState = k2), g.props = d3, g.state = k2, g.context = l2, d3 = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d3 = false);
  } else {
    g = b.stateNode;
    lh(a7, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r3 = g.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r3 !== k2) && Hi(b, g, d3, k2);
    jh = false;
    r3 = b.memoizedState;
    g.state = r3;
    qh(b, d3, g, e6);
    var n3 = b.memoizedState;
    h !== q2 || r3 !== n3 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c2, y2, d3), n3 = b.memoizedState), (l2 = jh || Fi(b, c2, l2, d3, r3, n3, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d3, n3, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d3, n3, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a7.memoizedProps && r3 === a7.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a7.memoizedProps && r3 === a7.memoizedState || (b.flags |= 1024), b.memoizedProps = d3, b.memoizedState = n3), g.props = d3, g.state = n3, g.context = k2, d3 = l2) : ("function" !== typeof g.componentDidUpdate || h === a7.memoizedProps && r3 === a7.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a7.memoizedProps && r3 === a7.memoizedState || (b.flags |= 1024), d3 = false);
  }
  return jj(a7, b, c2, d3, f2, e6);
}
function jj(a7, b, c2, d3, e6, f2) {
  gj(a7, b);
  var g = 0 !== (b.flags & 128);
  if (!d3 && !g) return e6 && dg(b, c2, false), Zi(a7, b, f2);
  d3 = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c2.getDerivedStateFromError ? null : d3.render();
  b.flags |= 1;
  null !== a7 && g ? (b.child = Ug(b, a7.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a7, b, h, f2);
  b.memoizedState = d3.state;
  e6 && dg(b, c2, true);
  return b.child;
}
function kj(a7) {
  var b = a7.stateNode;
  b.pendingContext ? ag(a7, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a7, b.context, false);
  yh(a7, b.containerInfo);
}
function lj(a7, b, c2, d3, e6) {
  Ig();
  Jg(e6);
  b.flags |= 256;
  Xi(a7, b, c2, d3);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a7) {
  return { baseLanes: a7, cachePool: null, transitions: null };
}
function oj(a7, b, c2) {
  var d3 = b.pendingProps, e6 = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a7 && null === a7.memoizedState ? false : 0 !== (e6 & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a7 || null !== a7.memoizedState) e6 |= 1;
  G(L, e6 & 1);
  if (null === a7) {
    Eg(b);
    a7 = b.memoizedState;
    if (null !== a7 && (a7 = a7.dehydrated, null !== a7)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a7.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d3.children;
    a7 = d3.fallback;
    return f2 ? (d3 = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d3 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d3, 0, null), a7 = Tg(a7, d3, c2, null), f2.return = b, a7.return = b, f2.sibling = a7, b.child = f2, b.child.memoizedState = nj(c2), b.memoizedState = mj, a7) : qj(b, g);
  }
  e6 = a7.memoizedState;
  if (null !== e6 && (h = e6.dehydrated, null !== h)) return rj(a7, b, g, d3, h, e6, c2);
  if (f2) {
    f2 = d3.fallback;
    g = b.mode;
    e6 = a7.child;
    h = e6.sibling;
    var k2 = { mode: "hidden", children: d3.children };
    0 === (g & 1) && b.child !== e6 ? (d3 = b.child, d3.childLanes = 0, d3.pendingProps = k2, b.deletions = null) : (d3 = Pg(e6, k2), d3.subtreeFlags = e6.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c2, null), f2.flags |= 2);
    f2.return = b;
    d3.return = b;
    d3.sibling = f2;
    b.child = d3;
    d3 = f2;
    f2 = b.child;
    g = a7.child.memoizedState;
    g = null === g ? nj(c2) : { baseLanes: g.baseLanes | c2, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a7.childLanes & ~c2;
    b.memoizedState = mj;
    return d3;
  }
  f2 = a7.child;
  a7 = f2.sibling;
  d3 = Pg(f2, { mode: "visible", children: d3.children });
  0 === (b.mode & 1) && (d3.lanes = c2);
  d3.return = b;
  d3.sibling = null;
  null !== a7 && (c2 = b.deletions, null === c2 ? (b.deletions = [a7], b.flags |= 16) : c2.push(a7));
  b.child = d3;
  b.memoizedState = null;
  return d3;
}
function qj(a7, b) {
  b = pj({ mode: "visible", children: b }, a7.mode, 0, null);
  b.return = a7;
  return a7.child = b;
}
function sj(a7, b, c2, d3) {
  null !== d3 && Jg(d3);
  Ug(b, a7.child, null, c2);
  a7 = qj(b, b.pendingProps.children);
  a7.flags |= 2;
  b.memoizedState = null;
  return a7;
}
function rj(a7, b, c2, d3, e6, f2, g) {
  if (c2) {
    if (b.flags & 256) return b.flags &= -257, d3 = Ki(Error(p(422))), sj(a7, b, g, d3);
    if (null !== b.memoizedState) return b.child = a7.child, b.flags |= 128, null;
    f2 = d3.fallback;
    e6 = b.mode;
    d3 = pj({ mode: "visible", children: d3.children }, e6, 0, null);
    f2 = Tg(f2, e6, g, null);
    f2.flags |= 2;
    d3.return = b;
    f2.return = b;
    d3.sibling = f2;
    b.child = d3;
    0 !== (b.mode & 1) && Ug(b, a7.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a7, b, g, null);
  if ("$!" === e6.data) {
    d3 = e6.nextSibling && e6.nextSibling.dataset;
    if (d3) var h = d3.dgst;
    d3 = h;
    f2 = Error(p(419));
    d3 = Ki(f2, d3, void 0);
    return sj(a7, b, g, d3);
  }
  h = 0 !== (g & a7.childLanes);
  if (dh || h) {
    d3 = Q;
    if (null !== d3) {
      switch (g & -g) {
        case 4:
          e6 = 2;
          break;
        case 16:
          e6 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e6 = 32;
          break;
        case 536870912:
          e6 = 268435456;
          break;
        default:
          e6 = 0;
      }
      e6 = 0 !== (e6 & (d3.suspendedLanes | g)) ? 0 : e6;
      0 !== e6 && e6 !== f2.retryLane && (f2.retryLane = e6, ih(a7, e6), gi(d3, a7, e6, -1));
    }
    tj();
    d3 = Ki(Error(p(421)));
    return sj(a7, b, g, d3);
  }
  if ("$?" === e6.data) return b.flags |= 128, b.child = a7.child, b = uj.bind(null, a7), e6._reactRetry = b, null;
  a7 = f2.treeContext;
  yg = Lf(e6.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a7 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a7.id, sg = a7.overflow, qg = b);
  b = qj(b, d3.children);
  b.flags |= 4096;
  return b;
}
function vj(a7, b, c2) {
  a7.lanes |= b;
  var d3 = a7.alternate;
  null !== d3 && (d3.lanes |= b);
  bh(a7.return, b, c2);
}
function wj(a7, b, c2, d3, e6) {
  var f2 = a7.memoizedState;
  null === f2 ? a7.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d3, tail: c2, tailMode: e6 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d3, f2.tail = c2, f2.tailMode = e6);
}
function xj(a7, b, c2) {
  var d3 = b.pendingProps, e6 = d3.revealOrder, f2 = d3.tail;
  Xi(a7, b, d3.children, c2);
  d3 = L.current;
  if (0 !== (d3 & 2)) d3 = d3 & 1 | 2, b.flags |= 128;
  else {
    if (null !== a7 && 0 !== (a7.flags & 128)) a: for (a7 = b.child; null !== a7; ) {
      if (13 === a7.tag) null !== a7.memoizedState && vj(a7, c2, b);
      else if (19 === a7.tag) vj(a7, c2, b);
      else if (null !== a7.child) {
        a7.child.return = a7;
        a7 = a7.child;
        continue;
      }
      if (a7 === b) break a;
      for (; null === a7.sibling; ) {
        if (null === a7.return || a7.return === b) break a;
        a7 = a7.return;
      }
      a7.sibling.return = a7.return;
      a7 = a7.sibling;
    }
    d3 &= 1;
  }
  G(L, d3);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e6) {
    case "forwards":
      c2 = b.child;
      for (e6 = null; null !== c2; ) a7 = c2.alternate, null !== a7 && null === Ch(a7) && (e6 = c2), c2 = c2.sibling;
      c2 = e6;
      null === c2 ? (e6 = b.child, b.child = null) : (e6 = c2.sibling, c2.sibling = null);
      wj(b, false, e6, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e6 = b.child;
      for (b.child = null; null !== e6; ) {
        a7 = e6.alternate;
        if (null !== a7 && null === Ch(a7)) {
          b.child = e6;
          break;
        }
        a7 = e6.sibling;
        e6.sibling = c2;
        c2 = e6;
        e6 = a7;
      }
      wj(b, true, c2, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a7, b) {
  0 === (b.mode & 1) && null !== a7 && (a7.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a7, b, c2) {
  null !== a7 && (b.dependencies = a7.dependencies);
  rh |= b.lanes;
  if (0 === (c2 & b.childLanes)) return null;
  if (null !== a7 && b.child !== a7.child) throw Error(p(153));
  if (null !== b.child) {
    a7 = b.child;
    c2 = Pg(a7, a7.pendingProps);
    b.child = c2;
    for (c2.return = b; null !== a7.sibling; ) a7 = a7.sibling, c2 = c2.sibling = Pg(a7, a7.pendingProps), c2.return = b;
    c2.sibling = null;
  }
  return b.child;
}
function yj(a7, b, c2) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d3 = b.type._context, e6 = b.memoizedProps.value;
      G(Wg, d3._currentValue);
      d3._currentValue = e6;
      break;
    case 13:
      d3 = b.memoizedState;
      if (null !== d3) {
        if (null !== d3.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c2 & b.child.childLanes)) return oj(a7, b, c2);
        G(L, L.current & 1);
        a7 = Zi(a7, b, c2);
        return null !== a7 ? a7.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d3 = 0 !== (c2 & b.childLanes);
      if (0 !== (a7.flags & 128)) {
        if (d3) return xj(a7, b, c2);
        b.flags |= 128;
      }
      e6 = b.memoizedState;
      null !== e6 && (e6.rendering = null, e6.tail = null, e6.lastEffect = null);
      G(L, L.current);
      if (d3) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a7, b, c2);
  }
  return Zi(a7, b, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a7, b) {
  for (var c2 = b.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a7.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a7, b, c2, d3) {
  var e6 = a7.memoizedProps;
  if (e6 !== d3) {
    a7 = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e6 = Ya(a7, e6);
        d3 = Ya(a7, d3);
        f2 = [];
        break;
      case "select":
        e6 = A({}, e6, { value: void 0 });
        d3 = A({}, d3, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e6 = gb(a7, e6);
        d3 = gb(a7, d3);
        f2 = [];
        break;
      default:
        "function" !== typeof e6.onClick && "function" === typeof d3.onClick && (a7.onclick = Bf);
    }
    ub(c2, d3);
    var g;
    c2 = null;
    for (l2 in e6) if (!d3.hasOwnProperty(l2) && e6.hasOwnProperty(l2) && null != e6[l2]) if ("style" === l2) {
      var h = e6[l2];
      for (g in h) h.hasOwnProperty(g) && (c2 || (c2 = {}), c2[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d3) {
      var k2 = d3[l2];
      h = null != e6 ? e6[l2] : void 0;
      if (d3.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c2 || (c2 = {}), c2[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c2 || (c2 = {}), c2[g] = k2[g]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a7), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a7, b, c2, d3) {
  c2 !== d3 && (b.flags |= 4);
};
function Dj(a7, b) {
  if (!I) switch (a7.tailMode) {
    case "hidden":
      b = a7.tail;
      for (var c2 = null; null !== b; ) null !== b.alternate && (c2 = b), b = b.sibling;
      null === c2 ? a7.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a7.tail;
      for (var d3 = null; null !== c2; ) null !== c2.alternate && (d3 = c2), c2 = c2.sibling;
      null === d3 ? b || null === a7.tail ? a7.tail = null : a7.tail.sibling = null : d3.sibling = null;
  }
}
function S(a7) {
  var b = null !== a7.alternate && a7.alternate.child === a7.child, c2 = 0, d3 = 0;
  if (b) for (var e6 = a7.child; null !== e6; ) c2 |= e6.lanes | e6.childLanes, d3 |= e6.subtreeFlags & 14680064, d3 |= e6.flags & 14680064, e6.return = a7, e6 = e6.sibling;
  else for (e6 = a7.child; null !== e6; ) c2 |= e6.lanes | e6.childLanes, d3 |= e6.subtreeFlags, d3 |= e6.flags, e6.return = a7, e6 = e6.sibling;
  a7.subtreeFlags |= d3;
  a7.childLanes = c2;
  return b;
}
function Ej(a7, b, c2) {
  var d3 = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d3 = b.stateNode;
      zh();
      E$2(Wf);
      E$2(H);
      Eh();
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (null === a7 || null === a7.child) Gg(b) ? b.flags |= 4 : null === a7 || a7.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a7, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e6 = xh(wh.current);
      c2 = b.type;
      if (null !== a7 && null != b.stateNode) Bj(a7, b, c2, d3, e6), a7.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d3) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a7 = xh(uh.current);
        if (Gg(b)) {
          d3 = b.stateNode;
          c2 = b.type;
          var f2 = b.memoizedProps;
          d3[Of] = b;
          d3[Pf] = f2;
          a7 = 0 !== (b.mode & 1);
          switch (c2) {
            case "dialog":
              D("cancel", d3);
              D("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d3);
              break;
            case "video":
            case "audio":
              for (e6 = 0; e6 < lf.length; e6++) D(lf[e6], d3);
              break;
            case "source":
              D("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d3
              );
              D("load", d3);
              break;
            case "details":
              D("toggle", d3);
              break;
            case "input":
              Za(d3, f2);
              D("invalid", d3);
              break;
            case "select":
              d3._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d3);
              break;
            case "textarea":
              hb(d3, f2), D("invalid", d3);
          }
          ub(c2, f2);
          e6 = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d3.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d3.textContent, h, a7), e6 = ["children", h]) : "number" === typeof h && d3.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d3.textContent,
              h,
              a7
            ), e6 = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d3);
          }
          switch (c2) {
            case "input":
              Va(d3);
              db(d3, f2, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d3.onclick = Bf);
          }
          d3 = e6;
          b.updateQueue = d3;
          null !== d3 && (b.flags |= 4);
        } else {
          g = 9 === e6.nodeType ? e6 : e6.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a7 && (a7 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a7 ? "script" === c2 ? (a7 = g.createElement("div"), a7.innerHTML = "<script><\/script>", a7 = a7.removeChild(a7.firstChild)) : "string" === typeof d3.is ? a7 = g.createElement(c2, { is: d3.is }) : (a7 = g.createElement(c2), "select" === c2 && (g = a7, d3.multiple ? g.multiple = true : d3.size && (g.size = d3.size))) : a7 = g.createElementNS(a7, c2);
          a7[Of] = b;
          a7[Pf] = d3;
          zj(a7, b, false, false);
          b.stateNode = a7;
          a: {
            g = vb(c2, d3);
            switch (c2) {
              case "dialog":
                D("cancel", a7);
                D("close", a7);
                e6 = d3;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a7);
                e6 = d3;
                break;
              case "video":
              case "audio":
                for (e6 = 0; e6 < lf.length; e6++) D(lf[e6], a7);
                e6 = d3;
                break;
              case "source":
                D("error", a7);
                e6 = d3;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a7
                );
                D("load", a7);
                e6 = d3;
                break;
              case "details":
                D("toggle", a7);
                e6 = d3;
                break;
              case "input":
                Za(a7, d3);
                e6 = Ya(a7, d3);
                D("invalid", a7);
                break;
              case "option":
                e6 = d3;
                break;
              case "select":
                a7._wrapperState = { wasMultiple: !!d3.multiple };
                e6 = A({}, d3, { value: void 0 });
                D("invalid", a7);
                break;
              case "textarea":
                hb(a7, d3);
                e6 = gb(a7, d3);
                D("invalid", a7);
                break;
              default:
                e6 = d3;
            }
            ub(c2, e6);
            h = e6;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a7, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a7, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a7, k2) : "number" === typeof k2 && ob(a7, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a7) : null != k2 && ta(a7, f2, k2, g));
            }
            switch (c2) {
              case "input":
                Va(a7);
                db(a7, d3, false);
                break;
              case "textarea":
                Va(a7);
                jb(a7);
                break;
              case "option":
                null != d3.value && a7.setAttribute("value", "" + Sa(d3.value));
                break;
              case "select":
                a7.multiple = !!d3.multiple;
                f2 = d3.value;
                null != f2 ? fb(a7, !!d3.multiple, f2, false) : null != d3.defaultValue && fb(
                  a7,
                  !!d3.multiple,
                  d3.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e6.onClick && (a7.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d3 = !!d3.autoFocus;
                break a;
              case "img":
                d3 = true;
                break a;
              default:
                d3 = false;
            }
          }
          d3 && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a7 && null != b.stateNode) Cj(a7, b, a7.memoizedProps, d3);
      else {
        if ("string" !== typeof d3 && null === b.stateNode) throw Error(p(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d3 = b.stateNode;
          c2 = b.memoizedProps;
          d3[Of] = b;
          if (f2 = d3.nodeValue !== c2) {
            if (a7 = xg, null !== a7) switch (a7.tag) {
              case 3:
                Af(d3.nodeValue, c2, 0 !== (a7.mode & 1));
                break;
              case 5:
                true !== a7.memoizedProps.suppressHydrationWarning && Af(d3.nodeValue, c2, 0 !== (a7.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d3 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d3), d3[Of] = b, b.stateNode = d3;
      }
      S(b);
      return null;
    case 13:
      E$2(L);
      d3 = b.memoizedState;
      if (null === a7 || null !== a7.memoizedState && null !== a7.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d3 && null !== d3.dehydrated) {
          if (null === a7) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c2, b;
      d3 = null !== d3;
      d3 !== (null !== a7 && null !== a7.memoizedState) && d3 && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a7 || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a7, b), null === a7 && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E$2(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d3 = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d3) Dj(f2, false);
      else {
        if (0 !== T || null !== a7 && 0 !== (a7.flags & 128)) for (a7 = b.child; null !== a7; ) {
          g = Ch(a7);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d3 = g.updateQueue;
            null !== d3 && (b.updateQueue = d3, b.flags |= 4);
            b.subtreeFlags = 0;
            d3 = c2;
            for (c2 = b.child; null !== c2; ) f2 = c2, a7 = d3, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a7, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a7 = g.dependencies, f2.dependencies = null === a7 ? null : { lanes: a7.lanes, firstContext: a7.firstContext }), c2 = c2.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a7 = a7.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d3 = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d3) if (a7 = Ch(g), null !== a7) {
          if (b.flags |= 128, d3 = true, c2 = a7.updateQueue, null !== c2 && (b.updateQueue = c2, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b.flags |= 128, d3 = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c2 = f2.last, null !== c2 ? c2.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c2 = L.current, G(L, d3 ? c2 & 1 | 2 : c2 & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d3 = null !== b.memoizedState, null !== a7 && null !== a7.memoizedState !== d3 && (b.flags |= 8192), d3 && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a7, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a7 = b.flags, a7 & 65536 ? (b.flags = a7 & -65537 | 128, b) : null;
    case 3:
      return zh(), E$2(Wf), E$2(H), Eh(), a7 = b.flags, 0 !== (a7 & 65536) && 0 === (a7 & 128) ? (b.flags = a7 & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E$2(L);
      a7 = b.memoizedState;
      if (null !== a7 && null !== a7.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a7 = b.flags;
      return a7 & 65536 ? (b.flags = a7 & -65537 | 128, b) : null;
    case 19:
      return E$2(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a7, b) {
  var c2 = a7.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d3) {
    W(a7, b, d3);
  }
  else c2.current = null;
}
function Mj(a7, b, c2) {
  try {
    c2();
  } catch (d3) {
    W(a7, b, d3);
  }
}
var Nj = false;
function Oj(a7, b) {
  Cf = dd;
  a7 = Me();
  if (Ne(a7)) {
    if ("selectionStart" in a7) var c2 = { start: a7.selectionStart, end: a7.selectionEnd };
    else a: {
      c2 = (c2 = a7.ownerDocument) && c2.defaultView || window;
      var d3 = c2.getSelection && c2.getSelection();
      if (d3 && 0 !== d3.rangeCount) {
        c2 = d3.anchorNode;
        var e6 = d3.anchorOffset, f2 = d3.focusNode;
        d3 = d3.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a7, r3 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e6 && 3 !== q2.nodeType || (h = g + e6);
            q2 !== f2 || 0 !== d3 && 3 !== q2.nodeType || (k2 = g + d3);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r3 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a7) break b;
            r3 === c2 && ++l2 === e6 && (h = g);
            r3 === f2 && ++m2 === d3 && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r3;
            r3 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a7, selectionRange: c2 };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a7 = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a7) a7.return = b, V = a7;
  else for (; null !== V; ) {
    b = V;
    try {
      var n3 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n3) {
            var t8 = n3.memoizedProps, J2 = n3.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t8 : Ci(b.type, t8), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a7 = b.sibling;
    if (null !== a7) {
      a7.return = b.return;
      V = a7;
      break;
    }
    V = b.return;
  }
  n3 = Nj;
  Nj = false;
  return n3;
}
function Pj(a7, b, c2) {
  var d3 = b.updateQueue;
  d3 = null !== d3 ? d3.lastEffect : null;
  if (null !== d3) {
    var e6 = d3 = d3.next;
    do {
      if ((e6.tag & a7) === a7) {
        var f2 = e6.destroy;
        e6.destroy = void 0;
        void 0 !== f2 && Mj(b, c2, f2);
      }
      e6 = e6.next;
    } while (e6 !== d3);
  }
}
function Qj(a7, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c2 = b = b.next;
    do {
      if ((c2.tag & a7) === a7) {
        var d3 = c2.create;
        c2.destroy = d3();
      }
      c2 = c2.next;
    } while (c2 !== b);
  }
}
function Rj(a7) {
  var b = a7.ref;
  if (null !== b) {
    var c2 = a7.stateNode;
    switch (a7.tag) {
      case 5:
        a7 = c2;
        break;
      default:
        a7 = c2;
    }
    "function" === typeof b ? b(a7) : b.current = a7;
  }
}
function Sj(a7) {
  var b = a7.alternate;
  null !== b && (a7.alternate = null, Sj(b));
  a7.child = null;
  a7.deletions = null;
  a7.sibling = null;
  5 === a7.tag && (b = a7.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a7.stateNode = null;
  a7.return = null;
  a7.dependencies = null;
  a7.memoizedProps = null;
  a7.memoizedState = null;
  a7.pendingProps = null;
  a7.stateNode = null;
  a7.updateQueue = null;
}
function Tj(a7) {
  return 5 === a7.tag || 3 === a7.tag || 4 === a7.tag;
}
function Uj(a7) {
  a: for (; ; ) {
    for (; null === a7.sibling; ) {
      if (null === a7.return || Tj(a7.return)) return null;
      a7 = a7.return;
    }
    a7.sibling.return = a7.return;
    for (a7 = a7.sibling; 5 !== a7.tag && 6 !== a7.tag && 18 !== a7.tag; ) {
      if (a7.flags & 2) continue a;
      if (null === a7.child || 4 === a7.tag) continue a;
      else a7.child.return = a7, a7 = a7.child;
    }
    if (!(a7.flags & 2)) return a7.stateNode;
  }
}
function Vj(a7, b, c2) {
  var d3 = a7.tag;
  if (5 === d3 || 6 === d3) a7 = a7.stateNode, b ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a7, b) : c2.insertBefore(a7, b) : (8 === c2.nodeType ? (b = c2.parentNode, b.insertBefore(a7, c2)) : (b = c2, b.appendChild(a7)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d3 && (a7 = a7.child, null !== a7)) for (Vj(a7, b, c2), a7 = a7.sibling; null !== a7; ) Vj(a7, b, c2), a7 = a7.sibling;
}
function Wj(a7, b, c2) {
  var d3 = a7.tag;
  if (5 === d3 || 6 === d3) a7 = a7.stateNode, b ? c2.insertBefore(a7, b) : c2.appendChild(a7);
  else if (4 !== d3 && (a7 = a7.child, null !== a7)) for (Wj(a7, b, c2), a7 = a7.sibling; null !== a7; ) Wj(a7, b, c2), a7 = a7.sibling;
}
var X = null, Xj = false;
function Yj(a7, b, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a7, b, c2), c2 = c2.sibling;
}
function Zj(a7, b, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h) {
  }
  switch (c2.tag) {
    case 5:
      U || Lj(c2, b);
    case 6:
      var d3 = X, e6 = Xj;
      X = null;
      Yj(a7, b, c2);
      X = d3;
      Xj = e6;
      null !== X && (Xj ? (a7 = X, c2 = c2.stateNode, 8 === a7.nodeType ? a7.parentNode.removeChild(c2) : a7.removeChild(c2)) : X.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a7 = X, c2 = c2.stateNode, 8 === a7.nodeType ? Kf(a7.parentNode, c2) : 1 === a7.nodeType && Kf(a7, c2), bd(a7)) : Kf(X, c2.stateNode));
      break;
    case 4:
      d3 = X;
      e6 = Xj;
      X = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a7, b, c2);
      X = d3;
      Xj = e6;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d3 = c2.updateQueue, null !== d3 && (d3 = d3.lastEffect, null !== d3))) {
        e6 = d3 = d3.next;
        do {
          var f2 = e6, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c2, b, g) : 0 !== (f2 & 4) && Mj(c2, b, g));
          e6 = e6.next;
        } while (e6 !== d3);
      }
      Yj(a7, b, c2);
      break;
    case 1:
      if (!U && (Lj(c2, b), d3 = c2.stateNode, "function" === typeof d3.componentWillUnmount)) try {
        d3.props = c2.memoizedProps, d3.state = c2.memoizedState, d3.componentWillUnmount();
      } catch (h) {
        W(c2, b, h);
      }
      Yj(a7, b, c2);
      break;
    case 21:
      Yj(a7, b, c2);
      break;
    case 22:
      c2.mode & 1 ? (U = (d3 = U) || null !== c2.memoizedState, Yj(a7, b, c2), U = d3) : Yj(a7, b, c2);
      break;
    default:
      Yj(a7, b, c2);
  }
}
function ak(a7) {
  var b = a7.updateQueue;
  if (null !== b) {
    a7.updateQueue = null;
    var c2 = a7.stateNode;
    null === c2 && (c2 = a7.stateNode = new Kj());
    b.forEach(function(b2) {
      var d3 = bk.bind(null, a7, b2);
      c2.has(b2) || (c2.add(b2), b2.then(d3, d3));
    });
  }
}
function ck(a7, b) {
  var c2 = b.deletions;
  if (null !== c2) for (var d3 = 0; d3 < c2.length; d3++) {
    var e6 = c2[d3];
    try {
      var f2 = a7, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e6);
      X = null;
      Xj = false;
      var k2 = e6.alternate;
      null !== k2 && (k2.return = null);
      e6.return = null;
    } catch (l2) {
      W(e6, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a7), b = b.sibling;
}
function dk(a7, b) {
  var c2 = a7.alternate, d3 = a7.flags;
  switch (a7.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a7);
      ek(a7);
      if (d3 & 4) {
        try {
          Pj(3, a7, a7.return), Qj(3, a7);
        } catch (t8) {
          W(a7, a7.return, t8);
        }
        try {
          Pj(5, a7, a7.return);
        } catch (t8) {
          W(a7, a7.return, t8);
        }
      }
      break;
    case 1:
      ck(b, a7);
      ek(a7);
      d3 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b, a7);
      ek(a7);
      d3 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a7.flags & 32) {
        var e6 = a7.stateNode;
        try {
          ob(e6, "");
        } catch (t8) {
          W(a7, a7.return, t8);
        }
      }
      if (d3 & 4 && (e6 = a7.stateNode, null != e6)) {
        var f2 = a7.memoizedProps, g = null !== c2 ? c2.memoizedProps : f2, h = a7.type, k2 = a7.updateQueue;
        a7.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e6, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e6, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e6, q2) : "children" === m2 ? ob(e6, q2) : ta(e6, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e6, f2);
              break;
            case "textarea":
              ib(e6, f2);
              break;
            case "select":
              var r3 = e6._wrapperState.wasMultiple;
              e6._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e6, !!f2.multiple, y2, false) : r3 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e6,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e6, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e6[Pf] = f2;
        } catch (t8) {
          W(a7, a7.return, t8);
        }
      }
      break;
    case 6:
      ck(b, a7);
      ek(a7);
      if (d3 & 4) {
        if (null === a7.stateNode) throw Error(p(162));
        e6 = a7.stateNode;
        f2 = a7.memoizedProps;
        try {
          e6.nodeValue = f2;
        } catch (t8) {
          W(a7, a7.return, t8);
        }
      }
      break;
    case 3:
      ck(b, a7);
      ek(a7);
      if (d3 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t8) {
        W(a7, a7.return, t8);
      }
      break;
    case 4:
      ck(b, a7);
      ek(a7);
      break;
    case 13:
      ck(b, a7);
      ek(a7);
      e6 = a7.child;
      e6.flags & 8192 && (f2 = null !== e6.memoizedState, e6.stateNode.isHidden = f2, !f2 || null !== e6.alternate && null !== e6.alternate.memoizedState || (fk = B()));
      d3 & 4 && ak(a7);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a7.mode & 1 ? (U = (l2 = U) || m2, ck(b, a7), U = l2) : ck(b, a7);
      ek(a7);
      if (d3 & 8192) {
        l2 = null !== a7.memoizedState;
        if ((a7.stateNode.isHidden = l2) && !m2 && 0 !== (a7.mode & 1)) for (V = a7, m2 = a7.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r3 = V;
            y2 = r3.child;
            switch (r3.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r3, r3.return);
                break;
              case 1:
                Lj(r3, r3.return);
                var n3 = r3.stateNode;
                if ("function" === typeof n3.componentWillUnmount) {
                  d3 = r3;
                  c2 = r3.return;
                  try {
                    b = d3, n3.props = b.memoizedProps, n3.state = b.memoizedState, n3.componentWillUnmount();
                  } catch (t8) {
                    W(d3, c2, t8);
                  }
                }
                break;
              case 5:
                Lj(r3, r3.return);
                break;
              case 22:
                if (null !== r3.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r3, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a7; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e6 = q2.stateNode, l2 ? (f2 = e6.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t8) {
                W(a7, a7.return, t8);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t8) {
              W(a7, a7.return, t8);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a7) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a7) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a7) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a7);
      ek(a7);
      d3 & 4 && ak(a7);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a7
      ), ek(a7);
  }
}
function ek(a7) {
  var b = a7.flags;
  if (b & 2) {
    try {
      a: {
        for (var c2 = a7.return; null !== c2; ) {
          if (Tj(c2)) {
            var d3 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p(160));
      }
      switch (d3.tag) {
        case 5:
          var e6 = d3.stateNode;
          d3.flags & 32 && (ob(e6, ""), d3.flags &= -33);
          var f2 = Uj(a7);
          Wj(a7, f2, e6);
          break;
        case 3:
        case 4:
          var g = d3.stateNode.containerInfo, h = Uj(a7);
          Vj(a7, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a7, a7.return, k2);
    }
    a7.flags &= -3;
  }
  b & 4096 && (a7.flags &= -4097);
}
function hk(a7, b, c2) {
  V = a7;
  ik(a7);
}
function ik(a7, b, c2) {
  for (var d3 = 0 !== (a7.mode & 1); null !== V; ) {
    var e6 = V, f2 = e6.child;
    if (22 === e6.tag && d3) {
      var g = null !== e6.memoizedState || Jj;
      if (!g) {
        var h = e6.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e6; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e6) : null !== k2 ? (k2.return = g, V = k2) : jk(e6);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e6;
        Jj = h;
        U = l2;
      }
      kk(a7);
    } else 0 !== (e6.subtreeFlags & 8772) && null !== f2 ? (f2.return = e6, V = f2) : kk(a7);
  }
}
function kk(a7) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c2 = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d3 = b.stateNode;
            if (b.flags & 4 && !U) if (null === c2) d3.componentDidMount();
            else {
              var e6 = b.elementType === b.type ? c2.memoizedProps : Ci(b.type, c2.memoizedProps);
              d3.componentDidUpdate(e6, c2.memoizedState, d3.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d3);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c2 = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c2 = b.child.stateNode;
                  break;
                case 1:
                  c2 = b.child.stateNode;
              }
              sh(b, g, c2);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c2 && b.flags & 4) {
              c2 = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r3) {
        W(b, b.return, r3);
      }
    }
    if (b === a7) {
      V = null;
      break;
    }
    c2 = b.sibling;
    if (null !== c2) {
      c2.return = b.return;
      V = c2;
      break;
    }
    V = b.return;
  }
}
function gk(a7) {
  for (; null !== V; ) {
    var b = V;
    if (b === a7) {
      V = null;
      break;
    }
    var c2 = b.sibling;
    if (null !== c2) {
      c2.return = b.return;
      V = c2;
      break;
    }
    V = b.return;
  }
}
function jk(a7) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c2, k2);
          }
          break;
        case 1:
          var d3 = b.stateNode;
          if ("function" === typeof d3.componentDidMount) {
            var e6 = b.return;
            try {
              d3.componentDidMount();
            } catch (k2) {
              W(b, e6, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a7) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a7) {
  if (0 === (a7.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a7 = C;
  if (0 !== a7) return a7;
  a7 = window.event;
  a7 = void 0 === a7 ? 16 : jd(a7.type);
  return a7;
}
function gi(a7, b, c2, d3) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a7, c2, d3);
  if (0 === (K & 2) || a7 !== Q) a7 === Q && (0 === (K & 2) && (qk |= c2), 4 === T && Ck(a7, Z)), Dk(a7, d3), 1 === c2 && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a7, b) {
  var c2 = a7.callbackNode;
  wc(a7, b);
  var d3 = uc(a7, a7 === Q ? Z : 0);
  if (0 === d3) null !== c2 && bc(c2), a7.callbackNode = null, a7.callbackPriority = 0;
  else if (b = d3 & -d3, a7.callbackPriority !== b) {
    null != c2 && bc(c2);
    if (1 === b) 0 === a7.tag ? ig(Ek.bind(null, a7)) : hg(Ek.bind(null, a7)), Jf(function() {
      0 === (K & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d3)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a7));
    }
    a7.callbackPriority = b;
    a7.callbackNode = c2;
  }
}
function Gk(a7, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c2 = a7.callbackNode;
  if (Hk() && a7.callbackNode !== c2) return null;
  var d3 = uc(a7, a7 === Q ? Z : 0);
  if (0 === d3) return null;
  if (0 !== (d3 & 30) || 0 !== (d3 & a7.expiredLanes) || b) b = Ik(a7, d3);
  else {
    b = d3;
    var e6 = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a7 || Z !== b) uk = null, Gj = B() + 500, Kk(a7, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a7, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e6;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e6 = xc(a7), 0 !== e6 && (d3 = e6, b = Nk(a7, e6)));
    if (1 === b) throw c2 = pk, Kk(a7, 0), Ck(a7, d3), Dk(a7, B()), c2;
    if (6 === b) Ck(a7, d3);
    else {
      e6 = a7.current.alternate;
      if (0 === (d3 & 30) && !Ok(e6) && (b = Ik(a7, d3), 2 === b && (f2 = xc(a7), 0 !== f2 && (d3 = f2, b = Nk(a7, f2))), 1 === b)) throw c2 = pk, Kk(a7, 0), Ck(a7, d3), Dk(a7, B()), c2;
      a7.finishedWork = e6;
      a7.finishedLanes = d3;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a7, tk, uk);
          break;
        case 3:
          Ck(a7, d3);
          if ((d3 & 130023424) === d3 && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a7, 0)) break;
            e6 = a7.suspendedLanes;
            if ((e6 & d3) !== d3) {
              R();
              a7.pingedLanes |= a7.suspendedLanes & e6;
              break;
            }
            a7.timeoutHandle = Ff(Pk.bind(null, a7, tk, uk), b);
            break;
          }
          Pk(a7, tk, uk);
          break;
        case 4:
          Ck(a7, d3);
          if ((d3 & 4194240) === d3) break;
          b = a7.eventTimes;
          for (e6 = -1; 0 < d3; ) {
            var g = 31 - oc(d3);
            f2 = 1 << g;
            g = b[g];
            g > e6 && (e6 = g);
            d3 &= ~f2;
          }
          d3 = e6;
          d3 = B() - d3;
          d3 = (120 > d3 ? 120 : 480 > d3 ? 480 : 1080 > d3 ? 1080 : 1920 > d3 ? 1920 : 3e3 > d3 ? 3e3 : 4320 > d3 ? 4320 : 1960 * lk(d3 / 1960)) - d3;
          if (10 < d3) {
            a7.timeoutHandle = Ff(Pk.bind(null, a7, tk, uk), d3);
            break;
          }
          Pk(a7, tk, uk);
          break;
        case 5:
          Pk(a7, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a7, B());
  return a7.callbackNode === c2 ? Gk.bind(null, a7) : null;
}
function Nk(a7, b) {
  var c2 = sk;
  a7.current.memoizedState.isDehydrated && (Kk(a7, b).flags |= 256);
  a7 = Ik(a7, b);
  2 !== a7 && (b = tk, tk = c2, null !== b && Fj(b));
  return a7;
}
function Fj(a7) {
  null === tk ? tk = a7 : tk.push.apply(tk, a7);
}
function Ok(a7) {
  for (var b = a7; ; ) {
    if (b.flags & 16384) {
      var c2 = b.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d3 = 0; d3 < c2.length; d3++) {
        var e6 = c2[d3], f2 = e6.getSnapshot;
        e6 = e6.value;
        try {
          if (!He(f2(), e6)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c2 = b.child;
    if (b.subtreeFlags & 16384 && null !== c2) c2.return = b, b = c2;
    else {
      if (b === a7) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a7) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a7, b) {
  b &= ~rk;
  b &= ~qk;
  a7.suspendedLanes |= b;
  a7.pingedLanes &= ~b;
  for (a7 = a7.expirationTimes; 0 < b; ) {
    var c2 = 31 - oc(b), d3 = 1 << c2;
    a7[c2] = -1;
    b &= ~d3;
  }
}
function Ek(a7) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a7, 0);
  if (0 === (b & 1)) return Dk(a7, B()), null;
  var c2 = Ik(a7, b);
  if (0 !== a7.tag && 2 === c2) {
    var d3 = xc(a7);
    0 !== d3 && (b = d3, c2 = Nk(a7, d3));
  }
  if (1 === c2) throw c2 = pk, Kk(a7, 0), Ck(a7, b), Dk(a7, B()), c2;
  if (6 === c2) throw Error(p(345));
  a7.finishedWork = a7.current.alternate;
  a7.finishedLanes = b;
  Pk(a7, tk, uk);
  Dk(a7, B());
  return null;
}
function Qk(a7, b) {
  var c2 = K;
  K |= 1;
  try {
    return a7(b);
  } finally {
    K = c2, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a7) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c2 = ok.transition, d3 = C;
  try {
    if (ok.transition = null, C = 1, a7) return a7();
  } finally {
    C = d3, ok.transition = c2, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$2(ej);
}
function Kk(a7, b) {
  a7.finishedWork = null;
  a7.finishedLanes = 0;
  var c2 = a7.timeoutHandle;
  -1 !== c2 && (a7.timeoutHandle = -1, Gf(c2));
  if (null !== Y) for (c2 = Y.return; null !== c2; ) {
    var d3 = c2;
    wg(d3);
    switch (d3.tag) {
      case 1:
        d3 = d3.type.childContextTypes;
        null !== d3 && void 0 !== d3 && $f();
        break;
      case 3:
        zh();
        E$2(Wf);
        E$2(H);
        Eh();
        break;
      case 5:
        Bh(d3);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$2(L);
        break;
      case 19:
        E$2(L);
        break;
      case 10:
        ah(d3.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q = a7;
  Y = a7 = Pg(a7.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c2 = fh[b], d3 = c2.interleaved, null !== d3) {
      c2.interleaved = null;
      var e6 = d3.next, f2 = c2.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e6;
        d3.next = g;
      }
      c2.pending = d3;
    }
    fh = null;
  }
  return a7;
}
function Mk(a7, b) {
  do {
    var c2 = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d3 = M.memoizedState; null !== d3; ) {
          var e6 = d3.queue;
          null !== e6 && (e6.pending = null);
          d3 = d3.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a7, g = c2.return, h = c2, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r3 = m2.alternate;
            r3 ? (m2.updateQueue = r3.updateQueue, m2.memoizedState = r3.memoizedState, m2.lanes = r3.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n3 = b.updateQueue;
            if (null === n3) {
              var t8 = /* @__PURE__ */ new Set();
              t8.add(k2);
              b.updateQueue = t8;
            } else n3.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a7 = mk.current;
  mk.current = Rh;
  return null === a7 ? Rh : a7;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a7, b) {
  var c2 = K;
  K |= 2;
  var d3 = Jk();
  if (Q !== a7 || Z !== b) uk = null, Kk(a7, b);
  do
    try {
      Tk();
      break;
    } catch (e6) {
      Mk(a7, e6);
    }
  while (1);
  $g();
  K = c2;
  mk.current = d3;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a7) {
  var b = Vk(a7.alternate, a7, fj);
  a7.memoizedProps = a7.pendingProps;
  null === b ? Sk(a7) : Y = b;
  nk.current = null;
}
function Sk(a7) {
  var b = a7;
  do {
    var c2 = b.alternate;
    a7 = b.return;
    if (0 === (b.flags & 32768)) {
      if (c2 = Ej(c2, b, fj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a7) a7.flags |= 32768, a7.subtreeFlags = 0, a7.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a7;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a7, b, c2) {
  var d3 = C, e6 = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a7, b, c2, d3);
  } finally {
    ok.transition = e6, C = d3;
  }
  return null;
}
function Wk(a7, b, c2, d3) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c2 = a7.finishedWork;
  var e6 = a7.finishedLanes;
  if (null === c2) return null;
  a7.finishedWork = null;
  a7.finishedLanes = 0;
  if (c2 === a7.current) throw Error(p(177));
  a7.callbackNode = null;
  a7.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a7, f2);
  a7 === Q && (Y = Q = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a7, c2);
    dk(c2, a7);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a7.current = c2;
    hk(c2);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a7.current = c2;
  vk && (vk = false, wk = a7, xk = e6);
  f2 = a7.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a7, B());
  if (null !== b) for (d3 = a7.onRecoverableError, c2 = 0; c2 < b.length; c2++) e6 = b[c2], d3(e6.value, { componentStack: e6.stack, digest: e6.digest });
  if (Oi) throw Oi = false, a7 = Pi, Pi = null, a7;
  0 !== (xk & 1) && 0 !== a7.tag && Hk();
  f2 = a7.pendingLanes;
  0 !== (f2 & 1) ? a7 === zk ? yk++ : (yk = 0, zk = a7) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a7 = Dc(xk), b = ok.transition, c2 = C;
    try {
      ok.transition = null;
      C = 16 > a7 ? 16 : a7;
      if (null === wk) var d3 = false;
      else {
        a7 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e6 = K;
        K |= 4;
        for (V = a7.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r3 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r3) {
                      r3.return = y2;
                      V = r3;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n3 = f2.alternate;
              if (null !== n3) {
                var t8 = n3.child;
                if (null !== t8) {
                  n3.child = null;
                  do {
                    var J2 = t8.sibling;
                    t8.sibling = null;
                    t8 = J2;
                  } while (null !== t8);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a7.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e6;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a7);
        } catch (na) {
        }
        d3 = true;
      }
      return d3;
    } finally {
      C = c2, ok.transition = b;
    }
  }
  return false;
}
function Xk(a7, b, c2) {
  b = Ji(c2, b);
  b = Ni(a7, b, 1);
  a7 = nh(a7, b, 1);
  b = R();
  null !== a7 && (Ac(a7, 1, b), Dk(a7, b));
}
function W(a7, b, c2) {
  if (3 === a7.tag) Xk(a7, a7, c2);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a7, c2);
      break;
    } else if (1 === b.tag) {
      var d3 = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d3.componentDidCatch && (null === Ri || !Ri.has(d3))) {
        a7 = Ji(c2, a7);
        a7 = Qi(b, a7, 1);
        b = nh(b, a7, 1);
        a7 = R();
        null !== b && (Ac(b, 1, a7), Dk(b, a7));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a7, b, c2) {
  var d3 = a7.pingCache;
  null !== d3 && d3.delete(b);
  b = R();
  a7.pingedLanes |= a7.suspendedLanes & c2;
  Q === a7 && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a7, 0) : rk |= c2);
  Dk(a7, b);
}
function Yk(a7, b) {
  0 === b && (0 === (a7.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R();
  a7 = ih(a7, b);
  null !== a7 && (Ac(a7, b, c2), Dk(a7, c2));
}
function uj(a7) {
  var b = a7.memoizedState, c2 = 0;
  null !== b && (c2 = b.retryLane);
  Yk(a7, c2);
}
function bk(a7, b) {
  var c2 = 0;
  switch (a7.tag) {
    case 13:
      var d3 = a7.stateNode;
      var e6 = a7.memoizedState;
      null !== e6 && (c2 = e6.retryLane);
      break;
    case 19:
      d3 = a7.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d3 && d3.delete(b);
  Yk(a7, c2);
}
var Vk;
Vk = function(a7, b, c2) {
  if (null !== a7) if (a7.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a7.lanes & c2) && 0 === (b.flags & 128)) return dh = false, yj(a7, b, c2);
    dh = 0 !== (a7.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d3 = b.type;
      ij(a7, b);
      a7 = b.pendingProps;
      var e6 = Yf(b, H.current);
      ch(b, c2);
      e6 = Nh(null, b, d3, a7, e6, c2);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e6 && null !== e6 && "function" === typeof e6.render && void 0 === e6.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d3) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e6.state && void 0 !== e6.state ? e6.state : null, kh(b), e6.updater = Ei, b.stateNode = e6, e6._reactInternals = b, Ii(b, d3, a7, c2), b = jj(null, b, d3, true, f2, c2)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e6, c2), b = b.child);
      return b;
    case 16:
      d3 = b.elementType;
      a: {
        ij(a7, b);
        a7 = b.pendingProps;
        e6 = d3._init;
        d3 = e6(d3._payload);
        b.type = d3;
        e6 = b.tag = Zk(d3);
        a7 = Ci(d3, a7);
        switch (e6) {
          case 0:
            b = cj(null, b, d3, a7, c2);
            break a;
          case 1:
            b = hj(null, b, d3, a7, c2);
            break a;
          case 11:
            b = Yi(null, b, d3, a7, c2);
            break a;
          case 14:
            b = $i(null, b, d3, Ci(d3.type, a7), c2);
            break a;
        }
        throw Error(p(
          306,
          d3,
          ""
        ));
      }
      return b;
    case 0:
      return d3 = b.type, e6 = b.pendingProps, e6 = b.elementType === d3 ? e6 : Ci(d3, e6), cj(a7, b, d3, e6, c2);
    case 1:
      return d3 = b.type, e6 = b.pendingProps, e6 = b.elementType === d3 ? e6 : Ci(d3, e6), hj(a7, b, d3, e6, c2);
    case 3:
      a: {
        kj(b);
        if (null === a7) throw Error(p(387));
        d3 = b.pendingProps;
        f2 = b.memoizedState;
        e6 = f2.element;
        lh(a7, b);
        qh(b, d3, null, c2);
        var g = b.memoizedState;
        d3 = g.element;
        if (f2.isDehydrated) if (f2 = { element: d3, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e6 = Ji(Error(p(423)), b);
          b = lj(a7, b, d3, c2, e6);
          break a;
        } else if (d3 !== e6) {
          e6 = Ji(Error(p(424)), b);
          b = lj(a7, b, d3, c2, e6);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c2 = Vg(b, null, d3, c2), b.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d3 === e6) {
            b = Zi(a7, b, c2);
            break a;
          }
          Xi(a7, b, d3, c2);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a7 && Eg(b), d3 = b.type, e6 = b.pendingProps, f2 = null !== a7 ? a7.memoizedProps : null, g = e6.children, Ef(d3, e6) ? g = null : null !== f2 && Ef(d3, f2) && (b.flags |= 32), gj(a7, b), Xi(a7, b, g, c2), b.child;
    case 6:
      return null === a7 && Eg(b), null;
    case 13:
      return oj(a7, b, c2);
    case 4:
      return yh(b, b.stateNode.containerInfo), d3 = b.pendingProps, null === a7 ? b.child = Ug(b, null, d3, c2) : Xi(a7, b, d3, c2), b.child;
    case 11:
      return d3 = b.type, e6 = b.pendingProps, e6 = b.elementType === d3 ? e6 : Ci(d3, e6), Yi(a7, b, d3, e6, c2);
    case 7:
      return Xi(a7, b, b.pendingProps, c2), b.child;
    case 8:
      return Xi(a7, b, b.pendingProps.children, c2), b.child;
    case 12:
      return Xi(a7, b, b.pendingProps.children, c2), b.child;
    case 10:
      a: {
        d3 = b.type._context;
        e6 = b.pendingProps;
        f2 = b.memoizedProps;
        g = e6.value;
        G(Wg, d3._currentValue);
        d3._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e6.children && !Wf.current) {
            b = Zi(a7, b, c2);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d3) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b
                );
                h.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c2;
            h = g.alternate;
            null !== h && (h.lanes |= c2);
            bh(g, c2, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a7, b, e6.children, c2);
        b = b.child;
      }
      return b;
    case 9:
      return e6 = b.type, d3 = b.pendingProps.children, ch(b, c2), e6 = eh(e6), d3 = d3(e6), b.flags |= 1, Xi(a7, b, d3, c2), b.child;
    case 14:
      return d3 = b.type, e6 = Ci(d3, b.pendingProps), e6 = Ci(d3.type, e6), $i(a7, b, d3, e6, c2);
    case 15:
      return bj(a7, b, b.type, b.pendingProps, c2);
    case 17:
      return d3 = b.type, e6 = b.pendingProps, e6 = b.elementType === d3 ? e6 : Ci(d3, e6), ij(a7, b), b.tag = 1, Zf(d3) ? (a7 = true, cg(b)) : a7 = false, ch(b, c2), Gi(b, d3, e6), Ii(b, d3, e6, c2), jj(null, b, d3, true, a7, c2);
    case 19:
      return xj(a7, b, c2);
    case 22:
      return dj(a7, b, c2);
  }
  throw Error(p(156, b.tag));
};
function Fk(a7, b) {
  return ac(a7, b);
}
function $k(a7, b, c2, d3) {
  this.tag = a7;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a7, b, c2, d3) {
  return new $k(a7, b, c2, d3);
}
function aj(a7) {
  a7 = a7.prototype;
  return !(!a7 || !a7.isReactComponent);
}
function Zk(a7) {
  if ("function" === typeof a7) return aj(a7) ? 1 : 0;
  if (void 0 !== a7 && null !== a7) {
    a7 = a7.$$typeof;
    if (a7 === Da) return 11;
    if (a7 === Ga) return 14;
  }
  return 2;
}
function Pg(a7, b) {
  var c2 = a7.alternate;
  null === c2 ? (c2 = Bg(a7.tag, b, a7.key, a7.mode), c2.elementType = a7.elementType, c2.type = a7.type, c2.stateNode = a7.stateNode, c2.alternate = a7, a7.alternate = c2) : (c2.pendingProps = b, c2.type = a7.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a7.flags & 14680064;
  c2.childLanes = a7.childLanes;
  c2.lanes = a7.lanes;
  c2.child = a7.child;
  c2.memoizedProps = a7.memoizedProps;
  c2.memoizedState = a7.memoizedState;
  c2.updateQueue = a7.updateQueue;
  b = a7.dependencies;
  c2.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c2.sibling = a7.sibling;
  c2.index = a7.index;
  c2.ref = a7.ref;
  return c2;
}
function Rg(a7, b, c2, d3, e6, f2) {
  var g = 2;
  d3 = a7;
  if ("function" === typeof a7) aj(a7) && (g = 1);
  else if ("string" === typeof a7) g = 5;
  else a: switch (a7) {
    case ya:
      return Tg(c2.children, e6, f2, b);
    case za:
      g = 8;
      e6 |= 8;
      break;
    case Aa:
      return a7 = Bg(12, c2, b, e6 | 2), a7.elementType = Aa, a7.lanes = f2, a7;
    case Ea:
      return a7 = Bg(13, c2, b, e6), a7.elementType = Ea, a7.lanes = f2, a7;
    case Fa:
      return a7 = Bg(19, c2, b, e6), a7.elementType = Fa, a7.lanes = f2, a7;
    case Ia:
      return pj(c2, e6, f2, b);
    default:
      if ("object" === typeof a7 && null !== a7) switch (a7.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d3 = null;
          break a;
      }
      throw Error(p(130, null == a7 ? a7 : typeof a7, ""));
  }
  b = Bg(g, c2, b, e6);
  b.elementType = a7;
  b.type = d3;
  b.lanes = f2;
  return b;
}
function Tg(a7, b, c2, d3) {
  a7 = Bg(7, a7, d3, b);
  a7.lanes = c2;
  return a7;
}
function pj(a7, b, c2, d3) {
  a7 = Bg(22, a7, d3, b);
  a7.elementType = Ia;
  a7.lanes = c2;
  a7.stateNode = { isHidden: false };
  return a7;
}
function Qg(a7, b, c2) {
  a7 = Bg(6, a7, null, b);
  a7.lanes = c2;
  return a7;
}
function Sg(a7, b, c2) {
  b = Bg(4, null !== a7.children ? a7.children : [], a7.key, b);
  b.lanes = c2;
  b.stateNode = { containerInfo: a7.containerInfo, pendingChildren: null, implementation: a7.implementation };
  return b;
}
function al(a7, b, c2, d3, e6) {
  this.tag = b;
  this.containerInfo = a7;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d3;
  this.onRecoverableError = e6;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a7, b, c2, d3, e6, f2, g, h, k2) {
  a7 = new al(a7, b, c2, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a7.current = f2;
  f2.stateNode = a7;
  f2.memoizedState = { element: d3, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a7;
}
function cl(a7, b, c2) {
  var d3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d3 ? null : "" + d3, children: a7, containerInfo: b, implementation: c2 };
}
function dl(a7) {
  if (!a7) return Vf;
  a7 = a7._reactInternals;
  a: {
    if (Vb(a7) !== a7 || 1 !== a7.tag) throw Error(p(170));
    var b = a7;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a7.tag) {
    var c2 = a7.type;
    if (Zf(c2)) return bg(a7, c2, b);
  }
  return b;
}
function el(a7, b, c2, d3, e6, f2, g, h, k2) {
  a7 = bl(c2, d3, true, a7, e6, f2, g, h, k2);
  a7.context = dl(null);
  c2 = a7.current;
  d3 = R();
  e6 = yi(c2);
  f2 = mh(d3, e6);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c2, f2, e6);
  a7.current.lanes = e6;
  Ac(a7, e6, d3);
  Dk(a7, d3);
  return a7;
}
function fl(a7, b, c2, d3) {
  var e6 = b.current, f2 = R(), g = yi(e6);
  c2 = dl(c2);
  null === b.context ? b.context = c2 : b.pendingContext = c2;
  b = mh(f2, g);
  b.payload = { element: a7 };
  d3 = void 0 === d3 ? null : d3;
  null !== d3 && (b.callback = d3);
  a7 = nh(e6, b, g);
  null !== a7 && (gi(a7, e6, g, f2), oh(a7, e6, g));
  return g;
}
function gl(a7) {
  a7 = a7.current;
  if (!a7.child) return null;
  switch (a7.child.tag) {
    case 5:
      return a7.child.stateNode;
    default:
      return a7.child.stateNode;
  }
}
function hl(a7, b) {
  a7 = a7.memoizedState;
  if (null !== a7 && null !== a7.dehydrated) {
    var c2 = a7.retryLane;
    a7.retryLane = 0 !== c2 && c2 < b ? c2 : b;
  }
}
function il(a7, b) {
  hl(a7, b);
  (a7 = a7.alternate) && hl(a7, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a7) {
  console.error(a7);
};
function ll(a7) {
  this._internalRoot = a7;
}
ml.prototype.render = ll.prototype.render = function(a7) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a7, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a7 = this._internalRoot;
  if (null !== a7) {
    this._internalRoot = null;
    var b = a7.containerInfo;
    Rk(function() {
      fl(null, a7, null, null);
    });
    b[uf] = null;
  }
};
function ml(a7) {
  this._internalRoot = a7;
}
ml.prototype.unstable_scheduleHydration = function(a7) {
  if (a7) {
    var b = Hc();
    a7 = { blockedOn: null, target: a7, priority: b };
    for (var c2 = 0; c2 < Qc.length && 0 !== b && b < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a7);
    0 === c2 && Vc(a7);
  }
};
function nl(a7) {
  return !(!a7 || 1 !== a7.nodeType && 9 !== a7.nodeType && 11 !== a7.nodeType);
}
function ol(a7) {
  return !(!a7 || 1 !== a7.nodeType && 9 !== a7.nodeType && 11 !== a7.nodeType && (8 !== a7.nodeType || " react-mount-point-unstable " !== a7.nodeValue));
}
function pl() {
}
function ql(a7, b, c2, d3, e6) {
  if (e6) {
    if ("function" === typeof d3) {
      var f2 = d3;
      d3 = function() {
        var a8 = gl(g);
        f2.call(a8);
      };
    }
    var g = el(b, d3, a7, 0, null, false, false, "", pl);
    a7._reactRootContainer = g;
    a7[uf] = g.current;
    sf(8 === a7.nodeType ? a7.parentNode : a7);
    Rk();
    return g;
  }
  for (; e6 = a7.lastChild; ) a7.removeChild(e6);
  if ("function" === typeof d3) {
    var h = d3;
    d3 = function() {
      var a8 = gl(k2);
      h.call(a8);
    };
  }
  var k2 = bl(a7, 0, false, null, null, false, false, "", pl);
  a7._reactRootContainer = k2;
  a7[uf] = k2.current;
  sf(8 === a7.nodeType ? a7.parentNode : a7);
  Rk(function() {
    fl(b, k2, c2, d3);
  });
  return k2;
}
function rl(a7, b, c2, d3, e6) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e6) {
      var h = e6;
      e6 = function() {
        var a8 = gl(g);
        h.call(a8);
      };
    }
    fl(b, g, a7, e6);
  } else g = ql(c2, b, a7, e6, d3);
  return gl(g);
}
Ec = function(a7) {
  switch (a7.tag) {
    case 3:
      var b = a7.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c2 = tc(b.pendingLanes);
        0 !== c2 && (Cc(b, c2 | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a7, 1);
        if (null !== b2) {
          var c3 = R();
          gi(b2, a7, 1, c3);
        }
      }), il(a7, 1);
  }
};
Fc = function(a7) {
  if (13 === a7.tag) {
    var b = ih(a7, 134217728);
    if (null !== b) {
      var c2 = R();
      gi(b, a7, 134217728, c2);
    }
    il(a7, 134217728);
  }
};
Gc = function(a7) {
  if (13 === a7.tag) {
    var b = yi(a7), c2 = ih(a7, b);
    if (null !== c2) {
      var d3 = R();
      gi(c2, a7, b, d3);
    }
    il(a7, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a7, b) {
  var c2 = C;
  try {
    return C = a7, b();
  } finally {
    C = c2;
  }
};
yb = function(a7, b, c2) {
  switch (b) {
    case "input":
      bb(a7, c2);
      b = c2.name;
      if ("radio" === c2.type && null != b) {
        for (c2 = a7; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c2.length; b++) {
          var d3 = c2[b];
          if (d3 !== a7 && d3.form === a7.form) {
            var e6 = Db(d3);
            if (!e6) throw Error(p(90));
            Wa(d3);
            bb(d3, e6);
          }
        }
      }
      break;
    case "textarea":
      ib(a7, c2);
      break;
    case "select":
      b = c2.value, null != b && fb(a7, !!c2.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a7) {
  a7 = Zb(a7);
  return null === a7 ? null : a7.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a7) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a7, b) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a7, b, null, c2);
};
reactDom_production_min.createRoot = function(a7, b) {
  if (!nl(a7)) throw Error(p(299));
  var c2 = false, d3 = "", e6 = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c2 = true), void 0 !== b.identifierPrefix && (d3 = b.identifierPrefix), void 0 !== b.onRecoverableError && (e6 = b.onRecoverableError));
  b = bl(a7, 1, false, null, null, c2, false, d3, e6);
  a7[uf] = b.current;
  sf(8 === a7.nodeType ? a7.parentNode : a7);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a7) {
  if (null == a7) return null;
  if (1 === a7.nodeType) return a7;
  var b = a7._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a7.render) throw Error(p(188));
    a7 = Object.keys(a7).join(",");
    throw Error(p(268, a7));
  }
  a7 = Zb(b);
  a7 = null === a7 ? null : a7.stateNode;
  return a7;
};
reactDom_production_min.flushSync = function(a7) {
  return Rk(a7);
};
reactDom_production_min.hydrate = function(a7, b, c2) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a7, b, true, c2);
};
reactDom_production_min.hydrateRoot = function(a7, b, c2) {
  if (!nl(a7)) throw Error(p(405));
  var d3 = null != c2 && c2.hydratedSources || null, e6 = false, f2 = "", g = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e6 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g = c2.onRecoverableError));
  b = el(b, null, a7, 1, null != c2 ? c2 : null, e6, false, f2, g);
  a7[uf] = b.current;
  sf(a7);
  if (d3) for (a7 = 0; a7 < d3.length; a7++) c2 = d3[a7], e6 = c2._getVersion, e6 = e6(c2._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c2, e6] : b.mutableSourceEagerHydrationData.push(
    c2,
    e6
  );
  return new ml(b);
};
reactDom_production_min.render = function(a7, b, c2) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a7, b, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a7) {
  if (!ol(a7)) throw Error(p(40));
  return a7._reactRootContainer ? (Rk(function() {
    rl(null, null, a7, false, function() {
      a7._reactRootContainer = null;
      a7[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a7, b, c2, d3) {
  if (!ol(c2)) throw Error(p(200));
  if (null == a7 || void 0 === a7._reactInternals) throw Error(p(38));
  return rl(a7, b, c2, false, d3);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
const E$1 = { DEFAULT: "default", BACK: "back-action", PICK_AUTHENTICATOR: "pick-authenticator", PICK_EMAIL: "pick-email", PICK_COUNTRY_CODE: "pick-country-code", RESEND_CODE: "resend-code", SWITCH_TO_VOICE: "switch-to-voice", SWITCH_TO_TEXT: "switch-to-text", BACK_TO_LOGIN: "back-to-login", CHANGE_LANGUAGE: "change-language" };
const e$d = { EMAIL_IDENTIFIER_CHALLENGE: "email-identifier-challenge", LOGIN_ID: "login-id", LOGIN_PASSWORD: "login-password", MFA_EMAIL_CHALLENGE: "mfa-email-challenge", PHONE_IDENTIFIER_CHALLENGE: "phone-identifier-challenge", RESET_PASSWORD: "reset-password", RESET_PASSWORD_REQUEST: "reset-password-request", RESET_PASSWORD_SUCCESS: "reset-password-success", SIGNUP_ID: "signup-id", SIGNUP_PASSWORD: "signup-password" };
const e$c = { PASSKEY_DATA_UNAVAILABLE: "Passkey data is unavailable. Please verify if passkeys are enabled in your Auth0 dashboard settings.", PASSKEY_PUBLIC_KEY_UNAVAILABLE: "Public key data is unavailable. Please verify if passkeys are enabled in your Auth0 dashboard settings.", PASSKEY_CREDENTIALS_UNAVAILABLE: "Unable to retrieve the credential. No credentials found or multiple options detected.", PASSKEY_EXPECTED_ASSERTION_RESPONSE: "Expected AuthenticatorAssertionResponse", PASSKEY_AUTOCOMPLETE_REGISTRATION_FAILED: "Passkey autocomplete registration failed" }, a$9 = { REQUIRED: "Username is required.", TOO_SHORT: (e6) => `Username must be at least ${e6} characters long.`, TOO_LONG: (e6) => `Username must be no more than ${e6} characters.`, EMAIL_NOT_ALLOWED: "Usernames in email format are not allowed.", PHONE_NOT_ALLOWED: "Usernames in phone number format are not allowed." }, s$5 = { TOO_SHORT: "username-too-short", TOO_LONG: "username-too-long", EMAIL_NOT_ALLOWED: "username-email-not-allowed", PHONE_NOT_ALLOWED: "username-phone-not-allowed" };
let e$b = class e {
  constructor(t8) {
    __publicField(this, "settings");
    __publicField(this, "themes");
    this.settings = e.getSettings(t8), this.themes = e.getThemes(t8);
  }
  static getSettings(e6) {
    if (!(e6 == null ? void 0 : e6.settings)) return null;
    const { colors: t8, favicon_url: r3, logo_url: g, font: n3 } = e6.settings;
    return { ...t8 && { colors: { primary: t8.primary, pageBackground: "string" == typeof t8.page_background ? t8.page_background : t8.page_background && { type: t8.page_background.type, start: t8.page_background.start, end: t8.page_background.end, angleDegree: t8.page_background.angle_deg } } }, ..."string" == typeof r3 && r3.length > 0 ? { faviconUrl: r3 } : {}, ..."string" == typeof g && g.length > 0 ? { logoUrl: g } : {}, ..."string" == typeof (n3 == null ? void 0 : n3.url) && n3.url.length > 0 ? { fontUrl: n3.url } : {} };
  }
  static getThemes(e6) {
    if (!(e6 == null ? void 0 : e6.themes)) return null;
    const { default: { borders: t8 = {}, colors: r3 = {}, displayName: g = "", fonts: n3 = {}, page_background: s3 = {}, widget: o4 = {} } = {} } = e6.themes;
    return { default: { borders: t8, colors: r3, displayName: g, fonts: n3, pageBackground: s3, widget: o4 } };
  }
};
let t$c = class t {
  constructor(t8) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "logoUrl");
    __publicField(this, "description");
    __publicField(this, "metadata");
    this.id = t8 == null ? void 0 : t8.id, this.name = t8 == null ? void 0 : t8.name, this.logoUrl = (t8 == null ? void 0 : t8.logo_uri) ?? null, this.description = (t8 == null ? void 0 : t8.description) ?? null, this.metadata = (t8 == null ? void 0 : t8.metadata) ?? null;
  }
};
let a$8 = class a {
  constructor(a7) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "usage");
    __publicField(this, "displayName");
    __publicField(this, "branding");
    __publicField(this, "metadata");
    this.id = (a7 == null ? void 0 : a7.id) ?? null, this.name = (a7 == null ? void 0 : a7.name) ?? null, this.usage = (a7 == null ? void 0 : a7.usage) ?? null, this.displayName = (a7 == null ? void 0 : a7.display_name) ?? null, this.branding = (a7 == null ? void 0 : a7.branding) ?? null, this.metadata = (a7 == null ? void 0 : a7.metadata) ?? null;
  }
};
let a$7 = class a2 {
  constructor(a7) {
    __publicField(this, "name");
    this.name = a7.name;
  }
};
let a$6 = class a3 {
  constructor(t8) {
    __publicField(this, "name");
    __publicField(this, "captchaImage");
    __publicField(this, "captchaSiteKey");
    __publicField(this, "captchaProvider");
    __publicField(this, "isCaptchaAvailable");
    __publicField(this, "data");
    __publicField(this, "links");
    __publicField(this, "texts");
    __publicField(this, "captcha");
    var _a3, _b2, _c2;
    this.name = t8.name, this.captchaImage = ((_a3 = t8.captcha) == null ? void 0 : _a3.image) ?? null, this.captchaSiteKey = ((_b2 = t8.captcha) == null ? void 0 : _b2.siteKey) ?? null, this.captchaProvider = ((_c2 = t8.captcha) == null ? void 0 : _c2.provider) ?? null, this.isCaptchaAvailable = !!t8.captcha, this.texts = t8.texts ?? null, this.captcha = t8.captcha ?? null, this.data = a3.getScreenData(t8), this.links = a3.getScreenLinks(t8);
  }
  static getScreenData(a7) {
    return a7.data ?? null;
  }
  static getScreenLinks(a7) {
    return a7.links ?? null;
  }
};
let e$a = class e2 {
  constructor(e6) {
    __publicField(this, "name");
    __publicField(this, "friendlyName");
    __publicField(this, "enabledLocales");
    __publicField(this, "enabledFactors");
    this.name = (e6 == null ? void 0 : e6.name) ?? null, this.friendlyName = (e6 == null ? void 0 : e6.friendly_name) ?? null, this.enabledLocales = (e6 == null ? void 0 : e6.enabled_locales) ?? null, this.enabledFactors = (e6 == null ? void 0 : e6.enabled_factors) ?? null;
  }
};
let t$b = class t2 {
  constructor(e6) {
    __publicField(this, "state");
    __publicField(this, "hasErrors");
    __publicField(this, "locale");
    __publicField(this, "countryCode");
    __publicField(this, "countryPrefix");
    __publicField(this, "connectionStrategy");
    __publicField(this, "errors");
    __publicField(this, "currentConnection");
    __publicField(this, "alternateConnections");
    var _a3, _b2, _c2, _d3;
    this.state = e6.state, this.hasErrors = !!(e6.errors && e6.errors.length > 0), this.locale = e6.locale, this.countryCode = ((_a3 = e6.country_code) == null ? void 0 : _a3.code) ?? null, this.countryPrefix = ((_b2 = e6.country_code) == null ? void 0 : _b2.prefix) ?? null, this.connectionStrategy = ((_d3 = (_c2 = e6 == null ? void 0 : e6.connection) == null ? void 0 : _c2.strategy) == null ? void 0 : _d3.toLowerCase()) ?? null, this.errors = t2.getErrors(e6), this.currentConnection = t2.getCurrentConnection(e6), this.alternateConnections = t2.getAlternateConnections(e6);
  }
  static getErrors(t8) {
    return t8.errors && 0 !== t8.errors.length ? t8.errors.map((t9) => ({ code: t9.code, field: t9.field, message: t9.message })) : null;
  }
  static getCurrentConnection(t8) {
    if (!(t8 == null ? void 0 : t8.connection)) return null;
    const { name: e6, strategy: n3, metadata: r3 } = t8.connection;
    return { name: e6, strategy: n3, metadata: r3 };
  }
  static getAlternateConnections(t8) {
    const e6 = t8 == null ? void 0 : t8.alternate_connections;
    return e6 && Array.isArray(e6) ? e6.map((t9) => {
      const { name: e7, strategy: n3, metadata: r3 } = t9, o4 = { name: e7, strategy: n3, metadata: r3 };
      if ("options" in t9) {
        const { icon_url: e8, display_name: n4, show_as_button: r4 } = t9.options;
        return { ...o4, options: { iconUrl: e8, displayName: n4, showAsButton: r4 } };
      }
      return o4;
    }) : null;
  }
};
let t$a = class t3 {
  constructor(a7) {
    __publicField(this, "submittedFormData");
    __publicField(this, "authorizationParams");
    this.submittedFormData = t3.getSubmittedFormData(a7), this.authorizationParams = t3.getAuthorizationParams(a7);
  }
  static getSubmittedFormData(t8) {
    return (t8 == null ? void 0 : t8.submitted_form_data) ? (t8 == null ? void 0 : t8.submitted_form_data) ?? null : null;
  }
  static getAuthorizationParams(t8) {
    var _a3, _b2, _c2;
    return (t8 == null ? void 0 : t8.authorization_params) ? { login_hint: (_a3 = t8 == null ? void 0 : t8.authorization_params) == null ? void 0 : _a3.login_hint, screen_hint: (_b2 = t8 == null ? void 0 : t8.authorization_params) == null ? void 0 : _b2.screen_hint, ui_locales: (_c2 = t8 == null ? void 0 : t8.authorization_params) == null ? void 0 : _c2.ui_locales, ...t8 == null ? void 0 : t8.authorization_params } : null;
  }
};
let e$9 = class e3 {
  constructor(a7) {
    __publicField(this, "id");
    __publicField(this, "username");
    __publicField(this, "email");
    __publicField(this, "picture");
    __publicField(this, "phoneNumber");
    __publicField(this, "userMetadata");
    __publicField(this, "appMetadata");
    __publicField(this, "enrolledFactors");
    __publicField(this, "enrolledEmails");
    __publicField(this, "enrolledPhoneNumbers");
    __publicField(this, "enrolledDevices");
    __publicField(this, "organizations");
    this.id = (a7 == null ? void 0 : a7.id) ?? null, this.username = (a7 == null ? void 0 : a7.username) ?? null, this.email = (a7 == null ? void 0 : a7.email) ?? null, this.picture = (a7 == null ? void 0 : a7.picture) ?? null, this.phoneNumber = (a7 == null ? void 0 : a7.phone_number) ?? null, this.userMetadata = (a7 == null ? void 0 : a7.user_metadata) ?? null, this.appMetadata = (a7 == null ? void 0 : a7.app_metadata) ?? null, this.enrolledFactors = (a7 == null ? void 0 : a7.enrolled_factors) ?? null, this.enrolledEmails = (a7 == null ? void 0 : a7.enrolled_emails) ?? null, this.enrolledPhoneNumbers = (a7 == null ? void 0 : a7.enrolled_phone_numbers) ?? null, this.enrolledDevices = (a7 == null ? void 0 : a7.enrolled_devices) ?? null, this.organizations = e3.getOrganizations(a7);
  }
  static getOrganizations(e6) {
    return (e6 == null ? void 0 : e6.organizations) && Array.isArray(e6 == null ? void 0 : e6.organizations) ? e6 == null ? void 0 : e6.organizations.map((e7) => {
      var _a3;
      return { organizationId: e7.id, organizationName: e7.name, displayName: e7.display_name, branding: { logoUrl: (_a3 = e7.branding) == null ? void 0 : _a3.logo_url } };
    }) : null;
  }
};
let t$9 = class t4 {
  constructor(t8) {
    __publicField(this, "options");
    this.options = t8;
  }
  async submitData(t8) {
    const e6 = { ...t8, state: this.options.state }, n3 = this.buildForm(e6);
    document.body.appendChild(n3), n3.submit();
  }
  buildForm(t8) {
    const e6 = document.createElement("form");
    return e6.method = "POST", e6.action = this.options.route ?? "", Object.entries(t8).forEach(([t9, n3]) => {
      const o4 = document.createElement("input");
      o4.type = "hidden", o4.name = t9, o4.value = String(n3 ?? ""), e6.appendChild(o4);
    }), this.addTelemetryField(e6), e6;
  }
  addTelemetryField(t8) {
    const e6 = document.createElement("input"), n3 = globalThis.__ACUL_SDK_NAME__ || "@auth0/auth0-acul-js", o4 = globalThis.__ACUL_SDK_VERSION__ || "1.2.0";
    return e6.type = "hidden", e6.name = "acul-sdk", e6.value = `${n3}@${o4}`, t8.appendChild(e6), t8;
  }
};
let l$2 = (_a = class {
  constructor() {
    __publicField(this, "branding");
    __publicField(this, "screen");
    __publicField(this, "tenant");
    __publicField(this, "prompt");
    __publicField(this, "organization");
    __publicField(this, "client");
    __publicField(this, "transaction");
    __publicField(this, "user");
    __publicField(this, "untrustedData");
    var _a3, _b2, _c2;
    if (!_a.context) {
      const t9 = window;
      _a.context = t9.universal_login_context ?? null;
    }
    const t8 = _a.context, u2 = (_a3 = new.target) == null ? void 0 : _a3.screenIdentifier;
    if (!t8) throw new Error("Universal Login Context is not available on the global window object.");
    if (u2 !== ((_b2 = t8 == null ? void 0 : t8.screen) == null ? void 0 : _b2.name) && "" !== u2) throw new Error(`Incorrect import: The current screen name does not match the imported screen class. Imported Screen: ${u2}, Current Screen: ${(_c2 = t8 == null ? void 0 : t8.screen) == null ? void 0 : _c2.name}`);
    this.branding = new e$b(t8.branding), this.screen = new a$6(t8.screen), this.tenant = new e$a(t8.tenant), this.prompt = new a$7(t8.prompt), this.organization = new a$8(t8.organization), this.client = new t$c(t8.client), this.transaction = new t$b(t8.transaction), this.user = new e$9(t8.user), this.untrustedData = new t$a(t8.untrusted_data);
  }
  getContext(t8) {
    if (!_a.context) {
      const t9 = window;
      _a.context = t9.universal_login_context ?? null;
    }
    if (_a.context) return _a.context[t8];
  }
  getErrors() {
    var _a3;
    return ((_a3 = this.transaction) == null ? void 0 : _a3.errors) ?? [];
  }
  async changeLanguage(n3) {
    const e6 = this.constructor.screenIdentifier, r3 = { state: this.transaction.state, telemetry: [e6, "changeLanguage"] };
    await new t$9(r3).submitData({ ...n3, action: E$1.CHANGE_LANGUAGE });
  }
}, __publicField(_a, "context", null), __publicField(_a, "screenIdentifier", ""), _a);
async function a$5() {
  var _a3;
  if ("undefined" == typeof navigator) return false;
  const a7 = navigator;
  if (((_a3 = a7.brave) == null ? void 0 : _a3.isBrave) && "function" == typeof a7.brave.isBrave) try {
    return Boolean(await a7.brave.isBrave());
  } catch {
    return false;
  }
  return false;
}
function e$8() {
  return void 0 !== window.PublicKeyCredential;
}
async function n$5() {
  if (!window || !window.PublicKeyCredential) return false;
  try {
    return Boolean(await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
  } catch (a7) {
    return console.warn("isUserVerifyingPlatformAuthenticatorAvailable failed", a7), false;
  }
}
async function t$8() {
  if (!e$8()) return false;
  try {
    return await n$5() && Boolean(await window.PublicKeyCredential.isConditionalMediationAvailable());
  } catch (a7) {
    return console.warn("isPasskeySupported failed", a7), false;
  }
}
async function r$9() {
  return { "js-available": true, "is-brave": await a$5(), "webauthn-available": e$8(), "webauthn-platform-available": await n$5(), "allow-passkeys": await t$8() };
}
let t$7 = class t5 extends Error {
  constructor(t8, e6) {
    super(t8);
    __publicField(this, "code");
    __publicField(this, "field");
    this.name = new.target.name, this.code = "ACUL_ERROR", this.field = e6, Object.setPrototypeOf(this, new.target.prototype);
  }
};
let o$4 = class o extends t$7 {
  constructor(t8, e6) {
    super(t8, e6);
    __publicField(this, "code", "SDK_USAGE_ERROR");
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
function n$4(n3) {
  return n3 || null;
}
function r$8(r3) {
  if (!r3 || "string" != typeof r3) throw new TypeError("Invalid base64Url input");
  const e6 = r3.replace(/-/g, "+").replace(/_/g, "/"), t8 = (4 - e6.length % 4) % 4, n3 = e6 + "=".repeat(t8), o4 = atob(n3), a7 = new Uint8Array(o4.length);
  for (let r4 = 0; r4 < o4.length; r4++) a7[r4] = o4.charCodeAt(r4);
  return a7.buffer;
}
function e$7(r3) {
  if (!(r3 instanceof ArrayBuffer)) throw new TypeError("Expected an ArrayBuffer");
  const e6 = new Uint8Array(r3);
  let t8 = "";
  for (const r4 of e6) t8 += String.fromCharCode(r4);
  return btoa(t8).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function r$7(t8) {
  return t8 ? e$7(t8) : null;
}
async function i$5(a7) {
  var _a3;
  if (!(a7 == null ? void 0 : a7.challenge)) throw new Error(e$c.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const i2 = await n$5(), o4 = r$8(a7.challenge), l2 = await navigator.credentials.get({ publicKey: { challenge: o4, allowCredentials: ((_a3 = a7.allowCredentials) == null ? void 0 : _a3.length) ? a7.allowCredentials.map((t8) => {
    var _a4;
    return { id: r$8(t8.id), type: "public-key", transports: (_a4 = t8.transports) == null ? void 0 : _a4.map((t9) => t9) };
  }) : void 0 } });
  if (!l2) throw new Error(e$c.PASSKEY_CREDENTIALS_UNAVAILABLE);
  if (!function(t8) {
    return void 0 !== t8.authenticatorData;
  }(l2.response)) throw new Error(e$c.PASSKEY_EXPECTED_ASSERTION_RESPONSE);
  const c2 = l2.response;
  return { id: l2.id, rawId: r$7(l2.rawId ?? null), type: l2.type, authenticatorAttachment: l2.authenticatorAttachment, response: { clientDataJSON: r$7(c2.clientDataJSON ?? null), authenticatorData: r$7(c2.authenticatorData ?? null), signature: r$7(c2.signature ?? null), userHandle: r$7(c2.userHandle ?? null) }, isUserVerifyingPlatformAuthenticatorAvailable: i2 };
}
async function l$1({ publicKey: e6, inputId: a7, onResolve: r3, onReject: i2 }) {
  var _a3;
  if (!(e6 == null ? void 0 : e6.challenge)) throw new Error(e$c.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const o4 = PublicKeyCredential;
  if (!("function" == typeof o4.isConditionalMediationAvailable && await o4.isConditionalMediationAvailable())) return void (i2 == null ? void 0 : i2(new Error("Conditional mediation not supported by this browser.")));
  if (!("credentials" in navigator) || !("PublicKeyCredential" in window)) return void (i2 == null ? void 0 : i2(new Error("WebAuthn is not supported in this environment.")));
  if ("undefined" != typeof document && a7) {
    const t8 = document.getElementById(a7);
    if (t8 && "INPUT" === ((_a3 = t8.tagName) == null ? void 0 : _a3.toUpperCase())) {
      t8.setAttribute("autocomplete", "username webauthn");
    } else console.warn(`[Auth0 ACUL] No valid <input> found with id="${a7}". Passkey autocomplete may not work.`);
  }
  const l2 = r$8(e6.challenge), c2 = new AbortController(), s3 = { publicKey: { challenge: l2, rpId: window.location.hostname, allowCredentials: [], userVerification: "preferred", timeout: 3e5 }, mediation: "conditional", signal: c2.signal };
  return navigator.credentials.get(s3).then((t8) => t8 && r3(t8)).catch((t8) => {
    t8 instanceof DOMException && "AbortError" === t8.name || (i2 == null ? void 0 : i2(t8));
  }), c2;
}
function n$3(n3) {
  const t8 = n3 == null ? void 0 : n3.links;
  return (t8 == null ? void 0 : t8.signup) ?? null;
}
function e$6(n3) {
  const t8 = n3 == null ? void 0 : n3.links;
  return (t8 == null ? void 0 : t8.login) ?? null;
}
function r$6(n3) {
  const t8 = n3 == null ? void 0 : n3.links;
  return (t8 == null ? void 0 : t8.reset_password) ?? null;
}
function i$4(n3) {
  const t8 = n3 == null ? void 0 : n3.links;
  return (t8 == null ? void 0 : t8.edit_identifier) ?? null;
}
function u$1(n3) {
  var _a3;
  const t8 = (_a3 = n3.data) == null ? void 0 : _a3.passkey;
  return (t8 == null ? void 0 : t8.public_key) ?? null;
}
let t$6 = class t6 extends a$6 {
  constructor(s3) {
    super(s3);
    __publicField(this, "signupLink");
    __publicField(this, "resetPasswordLink");
    __publicField(this, "publicKey");
    this.signupLink = n$3(s3), this.resetPasswordLink = r$6(s3), this.publicKey = u$1(s3);
  }
};
const e$5 = { EMAIL: "email", PHONE: "phone" }, E = { USERNAME: "username" };
const s$4 = { SMS: "sms", EMAIL: "email" };
function n$2(n3) {
  var _a3, _b2;
  return true === ((_b2 = (_a3 = n3 == null ? void 0 : n3.connection) == null ? void 0 : _a3.options) == null ? void 0 : _b2.signup_enabled);
}
function e$4(n3) {
  var _a3;
  const e6 = n3 == null ? void 0 : n3.connection;
  return true === ((_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.forgot_password_enabled);
}
function t$5(n3) {
  var _a3, _b2, _c2;
  const e6 = n3 == null ? void 0 : n3.connection;
  return ((_c2 = (_b2 = (_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.authentication_methods) == null ? void 0 : _b2.passkey) == null ? void 0 : _c2.enabled) ?? false;
}
function i$3(n3) {
  var _a3;
  const e6 = n3 == null ? void 0 : n3.connection;
  return ((_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.username_required) ?? false;
}
function o$3(n3) {
  var _a3, _b2, _c2, _d3;
  const e6 = n3 == null ? void 0 : n3.connection, { signup_status: t8, validation: i2 } = ((_b2 = (_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.attributes) == null ? void 0 : _b2.username) ?? {};
  if (i2) return { isActive: ["optional", "required"].includes(t8), maxLength: i2.max_length, minLength: i2.min_length, allowedFormats: { usernameInEmailFormat: ((_c2 = i2.allowed_types) == null ? void 0 : _c2.email) ?? false, usernameInPhoneFormat: ((_d3 = i2.allowed_types) == null ? void 0 : _d3.phone_number) ?? false } };
  const { validation: o4, username_required: r3 } = (e6 == null ? void 0 : e6.options) ?? {}, s3 = o4 == null ? void 0 : o4.username;
  return s3 ? { isActive: true === r3, maxLength: s3.max_length, minLength: s3.min_length } : null;
}
function r$5(n3) {
  var _a3, _b2, _c2;
  const e6 = n3 == null ? void 0 : n3.connection, t8 = (_b2 = (_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.authentication_methods) == null ? void 0 : _b2.password;
  return t8 ? { minLength: t8.min_length, policy: t8.policy, passwordSecurityInfo: (_c2 = t8.password_security_info) == null ? void 0 : _c2.map((n4) => "valid" === n4.status ? { ...n4, isValid: true } : { ...n4, isValid: false }) } : null;
}
function s$3(n3) {
  const e6 = n3 == null ? void 0 : n3.connection;
  if (!e6) return null;
  const { attributes: t8, username_required: i2 } = e6.options || {};
  if (t8 && Object.keys(t8).length > 0) {
    const n4 = Object.entries(t8).filter(([, n5]) => n5.identifier_active).map(([n5]) => n5);
    return n4.length > 0 ? n4 : null;
  }
  return i2 ? ["email", "username"] : ["email"];
}
function u(n3) {
  const e6 = n3 == null ? void 0 : n3.connection;
  if (!e6) return null;
  const { attributes: t8, username_required: i2 } = e6.options || {};
  return t8 && Object.keys(t8).length > 0 ? m$1(e6, ["required", "optional"]) : i2 ? ["email", "username"] : ["email"];
}
function a$4(n3) {
  return m$1(n3 == null ? void 0 : n3.connection, ["required"]);
}
function c(n3) {
  return m$1(n3 == null ? void 0 : n3.connection, ["optional"]);
}
function l(n3) {
  var _a3;
  const e6 = n3.connection;
  return !!((_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.attributes);
}
function m$1(n3, e6) {
  if (!n3) return null;
  const { attributes: t8, username_required: i2 } = n3.options || {};
  if (!t8 || 0 === Object.keys(t8).length) return i2 ? ["email", "username"] : ["email"];
  const o4 = Object.entries(t8).filter(([, n4]) => n4.signup_status && e6.includes(n4.signup_status)).map(([n4]) => n4);
  return o4.length > 0 ? o4 : null;
}
let d$1 = class d extends t$b {
  constructor(s3) {
    super(s3);
    __publicField(this, "isSignupEnabled");
    __publicField(this, "isForgotPasswordEnabled");
    __publicField(this, "isPasskeyEnabled");
    __publicField(this, "showPasskeyAutofill");
    __publicField(this, "isUsernameRequired");
    __publicField(this, "usernamePolicy");
    __publicField(this, "allowedIdentifiers");
    this.isSignupEnabled = n$2(s3), this.isForgotPasswordEnabled = e$4(s3), this.isPasskeyEnabled = t$5(s3), this.showPasskeyAutofill = d.getShowPasskeyAutofill(s3), this.isUsernameRequired = i$3(s3), this.usernamePolicy = o$3(s3), this.allowedIdentifiers = d.getAllowedIdentifiers(s3, this.connectionStrategy);
  }
  static getShowPasskeyAutofill(s3) {
    var _a3, _b2, _c2;
    const e6 = s3 == null ? void 0 : s3.connection;
    return ((_c2 = (_b2 = (_a3 = e6 == null ? void 0 : e6.options) == null ? void 0 : _a3.authentication_methods) == null ? void 0 : _b2.passkey) == null ? void 0 : _c2.showPasskeyAutofill) ?? false;
  }
  static getAllowedIdentifiers(t8, i2) {
    return i2 === s$4.SMS ? [e$5.PHONE] : i2 === s$4.EMAIL ? [e$5.EMAIL] : s$3(t8);
  }
};
const _d = class _d extends l$2 {
  constructor() {
    super();
    __privateAdd(this, _t2);
    __privateAdd(this, _e2, false);
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen"), e6 = this.getContext("transaction");
    this.screen = new t$6(t8), this.transaction = new d$1(e6);
  }
  async login(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_d.screenIdentifier, "login"] }, s3 = await r$9();
    await new t$9(e6).submitData({ ...t8, ...s3 });
  }
  async federatedLogin(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_d.screenIdentifier, "federatedLogin"] };
    await new t$9(e6).submitData(t8);
  }
  async passkeyLogin(t8) {
    var _a3;
    (_a3 = __privateGet(this, _t2)) == null ? void 0 : _a3.abort(), __privateSet(this, _t2, void 0);
    const e6 = this.screen.publicKey;
    if (!e6) throw new Error(e$c.PASSKEY_DATA_UNAVAILABLE);
    try {
      const s3 = await i$5(e6), r3 = { state: this.transaction.state, telemetry: [_d.screenIdentifier, "passkeyLogin"] };
      await new t$9(r3).submitData({ ...t8, passkey: JSON.stringify(s3) });
    } catch (t9) {
      if (t9 instanceof DOMException && "NotAllowedError" === t9.name) {
        if (__privateGet(this, _e2)) try {
          await this.registerPasskeyAutofill();
        } catch (t10) {
          console.warn("Conditional UI restart failed", t10);
        }
        return;
      }
      throw t9;
    }
  }
  async pickCountryCode(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_d.screenIdentifier, "pickCountryCode"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.PICK_COUNTRY_CODE });
  }
  getLoginIdentifiers() {
    return n$4(this.transaction.allowedIdentifiers);
  }
  async registerPasskeyAutofill(t8) {
    const e6 = this.screen.publicKey;
    if (!e6) throw new Error(e$c.PASSKEY_DATA_UNAVAILABLE);
    __privateSet(this, _t2, await l$1({ publicKey: e6, inputId: t8, onResolve: async (t9) => {
      const e7 = { state: this.transaction.state, telemetry: [_d.screenIdentifier, "passkeyAutocomplete"] };
      await new t$9(e7).submitData({ passkey: JSON.stringify(t9) });
    }, onReject: (t9) => {
      throw console.warn("Passkey autocomplete registration failed", t9), new o$4(e$c.PASSKEY_AUTOCOMPLETE_REGISTRATION_FAILED);
    } }) ?? void 0), __privateSet(this, _e2, true);
  }
};
_t2 = new WeakMap();
_e2 = new WeakMap();
__publicField(_d, "screenIdentifier", e$d.LOGIN_ID);
let d2 = _d;
let r$4 = class r extends a$6 {
  constructor(r3) {
    super(r3);
    __publicField(this, "signupLink");
    __publicField(this, "resetPasswordLink");
    __publicField(this, "editIdentifierLink");
    __publicField(this, "data");
    this.signupLink = n$3(r3), this.resetPasswordLink = r$6(r3), this.editIdentifierLink = i$4(r3), this.data = a$6.getScreenData(r3);
  }
};
let n$1 = class n extends t$b {
  constructor(s3) {
    super(s3);
    __publicField(this, "isSignupEnabled");
    __publicField(this, "isForgotPasswordEnabled");
    __publicField(this, "isPasskeyEnabled");
    __publicField(this, "passwordPolicy");
    __publicField(this, "usernamePolicy");
    __publicField(this, "allowedIdentifiers");
    this.isSignupEnabled = n$2(s3), this.isForgotPasswordEnabled = e$4(s3), this.isPasskeyEnabled = t$5(s3), this.passwordPolicy = r$5(s3), this.usernamePolicy = o$3(s3), this.allowedIdentifiers = u(s3);
  }
};
let r$3 = (_b = class extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen"), e6 = this.getContext("transaction");
    this.screen = new r$4(t8), this.transaction = new n$1(e6);
  }
  async login(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_b.screenIdentifier, "login"] }, i2 = await r$9();
    await new t$9(e6).submitData({ ...t8, ...i2 });
  }
  async federatedLogin(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_b.screenIdentifier, "federatedLogin"] };
    await new t$9(e6).submitData(t8);
  }
  async switchConnection(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_b.screenIdentifier, "switchConnection"] };
    await new t$9(e6).submitData(t8);
  }
}, __publicField(_b, "screenIdentifier", e$d.LOGIN_PASSWORD), _b);
const r$2 = { email: "email", sms: "phone" };
function t$4(t8, n3, i2) {
  if (i2 === s$4.EMAIL || i2 === s$4.SMS) {
    return [{ type: r$2[i2], required: true }];
  }
  return [...(t8 == null ? void 0 : t8.map((e6) => ({ type: e6, required: true }))) ?? [], ...(n3 == null ? void 0 : n3.map((e6) => ({ type: e6, required: false }))) ?? []];
}
const n2 = E.USERNAME;
function o$2(t8, o4) {
  const r3 = [];
  if (!o4 || !o4.isActive) return { isValid: true, errors: [] };
  const { minLength: a7, maxLength: i2, allowedFormats: O2 = {} } = o4, m2 = void 0 === O2.usernameInEmailFormat || O2.usernameInEmailFormat, d3 = void 0 === O2.usernameInPhoneFormat || O2.usernameInPhoneFormat;
  t8.length < a7 && r3.push({ code: s$5.TOO_SHORT, message: a$9.TOO_SHORT(a7), field: n2 }), t8.length > i2 && r3.push({ code: s$5.TOO_LONG, message: a$9.TOO_LONG(i2), field: n2 });
  const c2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t8);
  !m2 && c2 && r3.push({ code: s$5.EMAIL_NOT_ALLOWED, message: a$9.EMAIL_NOT_ALLOWED, field: n2 });
  const l2 = t8.replace(/\s+/g, ""), L2 = /^\+?\d{7,15}$/.test(l2);
  return !d3 && L2 && r3.push({ code: s$5.PHONE_NOT_ALLOWED, message: a$9.PHONE_NOT_ALLOWED, field: n2 }), { isValid: 0 === r3.length, errors: r3 };
}
let e$3 = class e4 extends a$6 {
  constructor(r3) {
    super(r3);
    __publicField(this, "loginLink");
    this.loginLink = e$6(r3);
  }
};
let a$3 = class a4 extends t$b {
  constructor(e6) {
    super(e6);
    __publicField(this, "isPasskeyEnabled");
    __publicField(this, "usernamePolicy");
    __publicField(this, "optionalIdentifiers");
    __publicField(this, "requiredIdentifiers");
    this.isPasskeyEnabled = t$5(e6), this.usernamePolicy = o$3(e6), this.optionalIdentifiers = c(e6), this.requiredIdentifiers = a4.getRequiredIdentifiers(e6, this.connectionStrategy);
  }
  static getRequiredIdentifiers(i2, s3) {
    return s3 === s$4.SMS ? [e$5.PHONE] : s3 === s$4.EMAIL ? [e$5.EMAIL] : a$4(i2);
  }
};
const _m = class _m extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen"), e6 = this.getContext("transaction");
    this.screen = new e$3(t8), this.transaction = new a$3(e6);
  }
  async signup(t8) {
    var _a3;
    const e6 = { state: this.transaction.state, telemetry: [_m.screenIdentifier, "signup"] }, s3 = (this.transaction.requiredIdentifiers || []).filter((e7) => !Object.keys(t8).includes(e7));
    if (s3.length) throw new Error(`Missing parameter(s): ${s3.join(", ")}`);
    if ((_a3 = t8.phone) == null ? void 0 : _a3.trim()) {
      const { phone: e7, ...s4 } = t8;
      t8 = { ...s4, phone_number: e7 };
    }
    const r3 = await r$9();
    await new t$9(e6).submitData({ ...t8, ...r3 });
  }
  async federatedSignup(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_m.screenIdentifier, "federatedSignup"] };
    await new t$9(e6).submitData(t8);
  }
  getSignupIdentifiers() {
    const t8 = { ...this.transaction, errors: this.transaction.errors ?? void 0 };
    return t$4(t8.requiredIdentifiers ?? [], t8.optionalIdentifiers ?? [], t8.connectionStrategy);
  }
  async pickCountryCode() {
    const e6 = { state: this.transaction.state, telemetry: [_m.screenIdentifier, "pickCountryCode"] };
    await new t$9(e6).submitData({ action: E$1.PICK_COUNTRY_CODE });
  }
  validateUsername(t8) {
    const e6 = this.transaction.usernamePolicy;
    return o$2(t8, e6);
  }
};
__publicField(_m, "screenIdentifier", e$d.SIGNUP_ID);
let m = _m;
function s$2(s3, e6) {
  if (!e6 || "none" === e6.policy) {
    const e7 = s3.length ? [] : [{ code: "no_password", label: "Password is required.", status: "error", isValid: false }];
    return { isValid: 0 === e7.length, results: e7 };
  }
  const a7 = e6.minLength ?? 8, r3 = Array.isArray(e6.passwordSecurityInfo) ? e6.passwordSecurityInfo : [];
  if ("low" === e6.policy && 0 === r3.length) {
    const e7 = s3.length >= a7 ? "valid" : "error", r4 = [{ code: "password-policy-not-conformant", label: `Password must be at least ${a7} characters long.`, status: e7, isValid: "valid" === e7 }];
    return { isValid: r4.every((s4) => "valid" === s4.status), results: r4 };
  }
  const t8 = [], o4 = { lower: /[a-z]/.test(s3), upper: /[A-Z]/.test(s3), number: /\d/.test(s3), special: /[\W_]/.test(s3), hasTripleIdentical: /(.)\1\1/.test(s3) }, l2 = { "password-policy-lower-case": o4.lower, "password-policy-upper-case": o4.upper, "password-policy-numbers": o4.number, "password-policy-special-characters": o4.special }, i2 = Object.values(l2).filter(Boolean).length, c2 = (s4, e7) => {
    t8.push({ ...s4, status: e7 ? "valid" : "error", isValid: e7 });
  };
  for (const e7 of r3) {
    const { code: r4, args: n3, items: p2 } = e7;
    switch (r4) {
      case "password-policy-length-at-least": {
        const r5 = "number" == typeof (n3 == null ? void 0 : n3.count) ? n3.count : a7;
        c2(e7, s3.length >= r5);
        break;
      }
      case "password-policy-identical-chars":
        c2(e7, s3.length > 0 && !o4.hasTripleIdentical);
        break;
      case "password-policy-contains-at-least": {
        const s4 = Array.isArray(p2) ? p2.length : 0, a8 = 3, r5 = s4 >= a8 ? a8 : s4;
        if (p2 && s4 > 0) {
          const s5 = p2.map((s6) => ({ ...s6, status: l2[s6.code] ? "valid" : "error", isValid: !!l2[s6.code] })), a9 = s5.filter((s6) => "valid" === s6.status).length >= r5;
          t8.push({ ...e7, items: s5, status: a9 ? "valid" : "error", isValid: a9 });
        } else {
          c2(e7, i2 >= r5);
        }
        break;
      }
      case "password-policy-lower-case":
      case "password-policy-upper-case":
      case "password-policy-numbers":
      case "password-policy-special-characters":
        c2(e7, !!l2[r4]);
        break;
      default:
        c2(e7, true);
    }
  }
  return { isValid: t8.every((s4) => "valid" === s4.status), results: t8 };
}
let r$1 = (_c = class extends a$6 {
  constructor(e6) {
    super(e6);
    __publicField(this, "loginLink");
    __publicField(this, "editLink");
    __publicField(this, "data");
    this.loginLink = e$6(e6), this.editLink = i$4(e6), this.data = _c.getScreenData(e6);
  }
}, __publicField(_c, "getScreenData", (e6) => {
  const t8 = e6.data;
  return t8 ? { email: t8.email, phoneNumber: t8.phone_number, username: t8.username } : null;
}), _c);
let a$2 = class a5 extends t$b {
  constructor(s3) {
    super(s3);
    __publicField(this, "isPasskeyEnabled");
    __publicField(this, "passwordPolicy");
    __publicField(this, "optionalIdentifiers");
    __publicField(this, "requiredIdentifiers");
    this.isPasskeyEnabled = t$5(s3), this.passwordPolicy = r$5(s3), this.optionalIdentifiers = c(s3), this.requiredIdentifiers = a5.getRequiredIdentifiers(s3, this.connectionStrategy);
  }
  static getRequiredIdentifiers(e6, i2) {
    return i2 === s$4.SMS ? [e$5.PHONE] : i2 === s$4.EMAIL ? [e$5.EMAIL] : a$4(e6);
  }
};
let i$2 = (_d2 = class extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen"), s3 = this.getContext("transaction");
    this.screen = new r$1(t8), this.transaction = new a$2(s3);
  }
  async signup(t8) {
    const s3 = { state: this.transaction.state, telemetry: [this.constructor.name, "signup"] };
    await new t$9(s3).submitData(t8);
  }
  async federatedSignup(t8) {
    const s3 = { state: this.transaction.state, telemetry: [_d2.screenIdentifier, "federatedSignup"] };
    await new t$9(s3).submitData(t8);
  }
  async switchConnection(t8) {
    const s3 = { state: this.transaction.state, telemetry: [_d2.screenIdentifier, "switchConnection"] };
    await new t$9(s3).submitData(t8);
  }
  validatePassword(t8) {
    var _a3;
    const s3 = (_a3 = this.transaction) == null ? void 0 : _a3.passwordPolicy;
    return s$2(t8, s3);
  }
}, __publicField(_d2, "screenIdentifier", e$d.SIGNUP_PASSWORD), _d2);
function t$3(t8, e6, n3, a7) {
  const { timeoutSeconds: o4 = 10, onStatusChange: l2, onTimeout: r3 } = n3 || {}, s3 = `acul_resend_timeout_${t8}`;
  let c2 = 0, u2 = false, i2 = false, m2 = null;
  const I2 = () => {
    m2 && (clearInterval(m2), m2 = null);
  }, g = () => {
    const t9 = parseInt(localStorage.getItem(s3) || "0", 10), e7 = Date.now(), n4 = 1e3 * o4, m3 = e7 - t9, I3 = c2;
    c2 = Math.max(0, Math.ceil((n4 - m3) / 1e3)), u2 = c2 > 0 || !!a7, r3 && I3 > 0 && 0 === c2 && !i2 && (i2 = true, r3()), l2 && l2(c2, u2);
  };
  return g(), c2 > 0 && !a7 && (m2 = setInterval(() => {
    g(), c2 <= 0 && I2();
  }, 1e3)), { startResend: async () => {
    g(), u2 || (await e6(), a7 || (localStorage.setItem(s3, Date.now().toString()), i2 = false, I2(), g(), m2 = setInterval(() => {
      g(), c2 <= 0 && I2();
    }, 1e3)));
  } };
}
let s$1 = class s extends a$6 {
  constructor(e6) {
    super(e6);
    __publicField(this, "data");
    this.data = s.getScreenData(e6);
  }
  static getScreenData(e6) {
    const s3 = e6.data;
    return s3 ? { ...s3, phone: s3 == null ? void 0 : s3.phone_number, messageType: s3 == null ? void 0 : s3.message_type, showLinkSms: s3 == null ? void 0 : s3.show_link_sms, showLinkVoice: s3 == null ? void 0 : s3.show_link_voice } : null;
  }
};
let i$1 = (_e = class extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    const t8 = this.getContext("screen");
    this.screen = new s$1(t8);
  }
  async submitPhoneChallenge(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_e.screenIdentifier, "submitPhoneChallenge"] };
    await new t$9(e6).submitData(t8);
  }
  async resendCode(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_e.screenIdentifier, "resendCode"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.RESEND_CODE });
  }
  async returnToPrevious(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_e.screenIdentifier, "returnToPrevious"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.BACK });
  }
  async switchToVoice(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_e.screenIdentifier, "switchToVoice"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.SWITCH_TO_VOICE });
  }
  async switchToText(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_e.screenIdentifier, "switchToText"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.SWITCH_TO_TEXT });
  }
  resendManager(t8) {
    var _a3;
    return t$3(_e.screenIdentifier, () => this.resendCode(), t8, !!((_a3 = this.screen.data) == null ? void 0 : _a3.resendLimitReached));
  }
}, __publicField(_e, "screenIdentifier", e$d.PHONE_IDENTIFIER_CHALLENGE), _e);
let t$2 = (_f = class extends a$6 {
  constructor(e6) {
    super(e6), this.data = _f.getScreenData(e6);
  }
}, __publicField(_f, "getScreenData", (e6) => {
  const t8 = e6.data;
  if (!t8) return null;
  const { message_type: s3, email: a7, ...r3 } = t8;
  return { ...r3, email: a7, messageType: s3 };
}), _f);
const _i = class _i extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    const e6 = this.getContext("screen");
    this.screen = new t$2(e6);
  }
  async submitEmailChallenge(e6) {
    const t8 = { state: this.transaction.state, telemetry: [_i.screenIdentifier, "submitEmailChallenge"] };
    await new t$9(t8).submitData(e6);
  }
  async resendCode(t8) {
    const s3 = { state: this.transaction.state, telemetry: [_i.screenIdentifier, "resendCode"] };
    await new t$9(s3).submitData({ ...t8, action: E$1.RESEND_CODE });
  }
  async returnToPrevious(t8) {
    const s3 = { state: this.transaction.state, telemetry: [_i.screenIdentifier, "returnToPrevious"] };
    await new t$9(s3).submitData({ ...t8, action: E$1.BACK });
  }
  resendManager(e6) {
    var _a3;
    return t$3(_i.screenIdentifier, () => this.resendCode(), e6, !!((_a3 = this.screen.data) == null ? void 0 : _a3.resendLimitReached));
  }
};
__publicField(_i, "screenIdentifier", e$d.EMAIL_IDENTIFIER_CHALLENGE);
let i = _i;
let e$2 = (_g = class extends a$6 {
  constructor(t8) {
    super(t8), this.data = _g.getScreenData(t8);
  }
}, __publicField(_g, "getScreenData", (t8) => {
  const e6 = t8.data;
  return e6 ? { ...e6 } : null;
}), _g);
class r2 extends t$b {
  constructor(s3) {
    super(s3);
    __publicField(this, "passwordPolicy");
    this.passwordPolicy = r$5(s3);
  }
}
let a$1 = (_h = class extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen");
    this.screen = new e$2(t8);
    const s3 = this.getContext("transaction");
    this.transaction = new r2(s3);
  }
  async resetPassword(t8) {
    const s3 = { state: this.transaction.state, telemetry: [_h.screenIdentifier, "resetPassword"] };
    await new t$9(s3).submitData(t8);
  }
  validatePassword(t8) {
    var _a3;
    const s3 = (_a3 = this.transaction) == null ? void 0 : _a3.passwordPolicy;
    return s$2(t8, s3);
  }
}, __publicField(_h, "screenIdentifier", e$d.RESET_PASSWORD), _h);
let t$1 = (_i2 = class extends a$6 {
  constructor(e6) {
    super(e6), this.data = _i2.getScreenData(e6);
  }
}, __publicField(_i2, "getScreenData", (e6) => {
  const t8 = e6.data;
  return t8 ? { ...t8, phone: t8.phone, email: t8.email, username: t8.username } : null;
}), _i2);
let o$1 = class o2 extends t$b {
  constructor(e6) {
    super(e6);
    __publicField(this, "allowedIdentifiers");
    __publicField(this, "requiredIdentifiers");
    __publicField(this, "hasFlexibleIdentifier");
    this.allowedIdentifiers = o2.getAllowedIdentifiers(e6, this.connectionStrategy), this.requiredIdentifiers = o2.getRequiredIdentifiers(e6, this.connectionStrategy), this.hasFlexibleIdentifier = l(e6);
  }
  static getAllowedIdentifiers(i2, r3) {
    return r3 === s$4.SMS ? [e$5.PHONE] : r3 === s$4.EMAIL ? [e$5.EMAIL] : s$3(i2);
  }
  static getRequiredIdentifiers(i2, r3) {
    return r3 === s$4.SMS ? [e$5.PHONE] : r3 === s$4.EMAIL ? [e$5.EMAIL] : a$4(i2);
  }
};
const _a2 = class _a2 extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "transaction");
    const t8 = this.getContext("screen"), e6 = this.getContext("transaction");
    this.screen = new t$1(t8), this.transaction = new o$1(e6);
  }
  async resetPassword(t8) {
    const e6 = { state: this.transaction.state, telemetry: [_a2.screenIdentifier, "resetPassword"] }, s3 = function(t9, e7) {
      if (e7) return t9;
      {
        const { username: e8, ...s4 } = t9;
        return { ...s4, email: t9.username };
      }
    }(t8, this.transaction.hasFlexibleIdentifier);
    await new t$9(e6).submitData(s3);
  }
  async backToLogin(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_a2.screenIdentifier, "backToLogin"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.BACK_TO_LOGIN });
  }
  getLoginIdentifiers() {
    return n$4(this.transaction.allowedIdentifiers);
  }
};
__publicField(_a2, "screenIdentifier", e$d.RESET_PASSWORD_REQUEST);
let a6 = _a2;
let e$1 = (_j = class extends l$2 {
  constructor() {
    super();
  }
}, __publicField(_j, "screenIdentifier", e$d.RESET_PASSWORD_SUCCESS), _j);
const _t = class _t extends a$6 {
  constructor(e6) {
    super(e6);
    __publicField(this, "data");
    this.data = _t.getScreenData(e6);
  }
};
__publicField(_t, "getScreenData", (e6) => {
  const t8 = e6.data;
  return t8 ? { email: "string" == typeof t8.email ? t8.email : "", showRememberDevice: "boolean" == typeof t8.show_remember_device ? t8.show_remember_device : void 0 } : null;
});
let t7 = _t;
class e5 extends t$a {
  constructor(t8) {
    super(t8);
    __publicField(this, "submittedFormData");
    this.submittedFormData = e5.getSubmittedFormData(t8);
  }
  static getSubmittedFormData(e6) {
    const r3 = t$a.getSubmittedFormData(e6);
    if (!r3) return null;
    const { remember_device: m2, ...a7 } = r3;
    return { ...a7, rememberDevice: m2 ?? false };
  }
}
const _o = class _o extends l$2 {
  constructor() {
    super();
    __publicField(this, "screen");
    __publicField(this, "untrustedData");
    const t$12 = this.getContext("screen"), e$12 = this.getContext("untrusted_data");
    this.screen = new t7(t$12), this.untrustedData = new e5(e$12);
  }
  async continue(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_o.screenIdentifier, "continue"] }, { rememberDevice: r3 = false, ...a7 } = e6 || {}, i2 = { ...a7, action: E$1.DEFAULT };
    r3 && (i2.rememberBrowser = true), await new t$9(s3).submitData(i2);
  }
  async resendCode(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_o.screenIdentifier, "resendCode"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.RESEND_CODE });
  }
  async tryAnotherMethod(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_o.screenIdentifier, "tryAnotherMethod"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.PICK_AUTHENTICATOR });
  }
  async pickEmail(e6) {
    const s3 = { state: this.transaction.state, telemetry: [_o.screenIdentifier, "pickEmail"] };
    await new t$9(s3).submitData({ ...e6, action: E$1.PICK_EMAIL });
  }
  resendManager(t8) {
    return t$3(_o.screenIdentifier, () => this.resendCode(), t8);
  }
};
__publicField(_o, "screenIdentifier", e$d.MFA_EMAIL_CHALLENGE);
let o3 = _o;
function s2() {
  var _a3;
  return ((_a3 = new l$2().getContext("screen")) == null ? void 0 : _a3.name) ?? null;
}
const LoginId = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [email, setEmail] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const provider = new d2();
      setScreenProvider(provider);
      console.log("LoginId screen provider:", provider);
    } catch (error) {
      console.error("Failed to initialize LoginId screen provider:", error);
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    try {
      await screenProvider.login({ username: email });
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };
  const onCreateAccount = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const signupLink = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.signup;
    if (signupLink) {
      window.location.href = signupLink;
    }
  };
  const handleSocialLogin = async (connection) => {
    if (!screenProvider) return;
    try {
      await screenProvider.federatedLogin({ connection });
    } catch (error) {
      console.error("Social login error:", error);
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "login-id-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const title = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.texts) == null ? void 0 : _b2.title) || "Sign In";
  const emailPlaceholder = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.emailPlaceholder) || "Email";
  const buttonText = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.buttonText) || "Continue";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-id-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-title", children: "Enter your email or phone to sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: emailPlaceholder,
              value: email,
              onChange: (e6) => setEmail(e6.target.value),
              disabled: isLoading,
              autoFocus: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: email ? "btn-outline" : "btn-disabled",
              disabled: !email || isLoading,
              children: buttonText
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "signup-link-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "signup-text", children: [
          "Do not have an Account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              onClick: (e6) => {
                e6.preventDefault();
                onCreateAccount();
              },
              className: "signup-link",
              children: "Sign up"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "By continuing, you agree to Toyota's Terms of Service and Privacy Policy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "divider-text", children: "OR" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-title", children: "Sign in with" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialLogin("apple"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/apple/apple-avatar.png",
                  alt: "Apple",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Apple" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialLogin("google-oauth2"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png",
                  alt: "Google",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Google" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialLogin("facebook"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/facebook/facebook-avatar.png",
                  alt: "Facebook",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Facebook" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const DEVICE_ID_KEY = "device-id";
const getDeviceId = () => {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
};
const LoginPassword = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  const [deviceId] = reactExports.useState(() => getDeviceId());
  reactExports.useEffect(() => {
    var _a4;
    try {
      const provider = new r$3();
      setScreenProvider(provider);
      console.log("LoginPassword screen provider:", provider);
      console.log("Device ID:", deviceId);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize LoginPassword screen provider:",
        error
      );
    }
  }, [deviceId]);
  const handleSubmit = async (e6) => {
    var _a4, _b3;
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    const username2 = ((_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.data) == null ? void 0 : _b3.username) || "";
    try {
      await screenProvider.login({
        username: username2,
        password,
        "ulp-identifier": username2,
        "ulp-device-id": deviceId
      });
    } catch (error) {
      console.error("Login error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleEditUsername = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const editLink2 = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.edit_identifier;
    if (editLink2) {
      window.location.href = editLink2;
    }
  };
  const handleForgotPassword = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const resetLink = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.reset_password;
    if (resetLink) {
      window.location.href = resetLink;
    }
  };
  const handleSwitchToOTP = () => {
    var _a4;
    if (!screenProvider) return;
    const state = ((_a4 = screenProvider.transaction) == null ? void 0 : _a4.state) || "";
    const form = document.createElement("form");
    form.method = "POST";
    form.action = window.location.href;
    const stateInput = document.createElement("input");
    stateInput.type = "hidden";
    stateInput.name = "state";
    stateInput.value = state || "";
    form.appendChild(stateInput);
    const actionInput = document.createElement("input");
    actionInput.type = "hidden";
    actionInput.name = "action";
    actionInput.value = "switch-to-otp-auth";
    form.appendChild(actionInput);
    document.body.appendChild(form);
    form.submit();
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "login-password-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const username = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.username) || "";
  const title = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.title) || "Enter your password";
  const editLink = (_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.links) == null ? void 0 : _f2.edit_identifier;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-password-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: "Welcome back! Please enter your password to continue." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Email ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: username,
            disabled: true,
            className: "email-input"
          }
        ),
        editLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "edit-link",
            onClick: handleEditUsername,
            children: "Edit"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: showPassword ? "text" : "password",
              value: password,
              onChange: (e6) => setPassword(e6.target.value),
              disabled: isLoading,
              className: hasError ? "error" : "",
              autoFocus: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "password-toggle",
              onClick: () => setShowPassword(!showPassword),
              children: showPassword ? "👁️" : "👁️‍🗨️"
            }
          )
        ] }),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: "Wrong email or password. Please try again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "required-note", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" }),
        " Required fields"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "sign-in-button",
          disabled: !password || isLoading,
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "otp-switch-button",
          onClick: handleSwitchToOTP,
          disabled: isLoading,
          children: "Continue with code instead"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "trouble-text", children: "Having trouble signing in?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-links", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          onClick: (e6) => {
            e6.preventDefault();
          },
          children: "Contact Support"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", onClick: handleForgotPassword, children: "Forgot Password" })
    ] })
  ] });
};
const SignupId = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [countryCode, setCountryCode] = reactExports.useState("+1");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const countryCodes = [
    { code: "+1", country: "US/CA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+91", country: "IN", flag: "🇮🇳" },
    { code: "+81", country: "JP", flag: "🇯🇵" },
    { code: "+86", country: "CN", flag: "🇨🇳" },
    { code: "+49", country: "DE", flag: "🇩🇪" },
    { code: "+33", country: "FR", flag: "🇫🇷" },
    { code: "+39", country: "IT", flag: "🇮🇹" },
    { code: "+61", country: "AU", flag: "🇦🇺" },
    { code: "+52", country: "MX", flag: "🇲🇽" }
  ];
  reactExports.useEffect(() => {
    try {
      const provider = new m();
      setScreenProvider(provider);
      console.log("SignupId screen provider:", provider);
    } catch (error) {
      console.error("Failed to initialize SignupId screen provider:", error);
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    const fullPhoneNumber = `${countryCode}${phone}`;
    try {
      await screenProvider.signup({
        email,
        phone: fullPhoneNumber
      });
    } catch (error) {
      console.error("Signup error:", error);
      setIsLoading(false);
    }
  };
  const handleSocialSignup = async (connection) => {
    if (!screenProvider) return;
    try {
      await screenProvider.federatedSignup({ connection });
    } catch (error) {
      console.error("Social signup error:", error);
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "signup-id-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const title = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.texts) == null ? void 0 : _b2.title) || "Create Your Account";
  const emailPlaceholder = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.emailPlaceholder) || "Email";
  const buttonText = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.buttonText) || "Continue";
  const loginLink = (_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.links) == null ? void 0 : _h2.login;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "signup-id-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-title", children: "Enter your email and phone number to get started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "input-label", children: [
              "Email ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: emailPlaceholder,
                value: email,
                onChange: (e6) => setEmail(e6.target.value),
                disabled: isLoading,
                autoFocus: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "input-label", children: [
              "Phone Number ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-input-container", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  className: "country-code-select",
                  value: countryCode,
                  onChange: (e6) => setCountryCode(e6.target.value),
                  disabled: isLoading,
                  children: countryCodes.map((country) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: country.code, children: [
                    country.flag,
                    " ",
                    country.code
                  ] }, country.code))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  placeholder: "Phone Number",
                  value: phone,
                  onChange: (e6) => setPhone(e6.target.value),
                  disabled: isLoading,
                  className: "phone-number-input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: email ? "btn-outline" : "btn-disabled",
              disabled: !email || isLoading,
              children: buttonText
            }
          ) })
        ] }),
        loginLink && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "login-link-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "login-text", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: loginLink, className: "login-link", children: "Sign In" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "By continuing, you agree to Toyota's Terms of Service and Privacy Policy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "divider-text", children: "OR" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-title", children: "Sign up with" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialSignup("apple"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/apple/apple-avatar.png",
                  alt: "Apple",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Apple" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialSignup("google-oauth2"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png",
                  alt: "Google",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Google" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "sso-button",
            onClick: () => handleSocialSignup("facebook"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://cdn.auth0.com/marketplace/catalog/content/assets/creators/facebook/facebook-avatar.png",
                  alt: "Facebook",
                  className: "sso-icon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Facebook" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const SignupPassword = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [password, setPassword] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [businessName, setBusinessName] = reactExports.useState("");
  const [accountType, setAccountType] = reactExports.useState(
    "individual"
  );
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const [deviceId] = reactExports.useState(() => getDeviceId());
  reactExports.useEffect(() => {
    var _a4, _b3, _c3;
    try {
      const provider = new i$2();
      setScreenProvider(provider);
      console.log("SignupPassword screen provider:", provider);
      console.log("Device ID:", deviceId);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
        setErrorMessage(((_c3 = (_b3 = provider.transaction.errors) == null ? void 0 : _b3[0]) == null ? void 0 : _c3.message) || "");
      }
    } catch (error) {
      console.error(
        "Failed to initialize SignupPassword screen provider:",
        error
      );
    }
  }, [deviceId]);
  const handleSubmit = async (e6) => {
    var _a4, _b3, _c3, _d4;
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");
    const email2 = ((_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.data) == null ? void 0 : _b3.email) || "";
    const phone2 = ((_d4 = (_c3 = screenProvider.screen) == null ? void 0 : _c3.data) == null ? void 0 : _d4.phoneNumber) || "";
    try {
      const signupData = {
        email: email2,
        phone_number: phone2,
        password,
        "ulp-device-id": deviceId,
        "ulp-account-type": accountType
      };
      if (accountType === "individual") {
        signupData["ulp-given-name"] = firstName;
        signupData["ulp-family-name"] = lastName;
      } else {
        signupData["ulp-business-name"] = businessName;
      }
      await screenProvider.signup(signupData);
    } catch (error) {
      console.error("Signup error:", error);
      const message = error instanceof Error ? error.message : (error == null ? void 0 : error.error_description) || (error == null ? void 0 : error.description) || "Failed to create account. Please try again.";
      setErrorMessage(message);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleEditDetails = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const editLink2 = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.edit_identifier;
    if (editLink2) {
      window.location.href = editLink2;
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "signup-password-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const email = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.email) || "";
  const phone = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.data) == null ? void 0 : _d3.phoneNumber) || "";
  const title = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.title) || "Create Your Password";
  const editLink = (_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.links) == null ? void 0 : _h2.edit_identifier;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "signup-password-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: "Almost there! Please provide your name and create a password." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Account Type ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "radio-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "radio-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "accountType",
                value: "individual",
                checked: accountType === "individual",
                onChange: (e6) => setAccountType(e6.target.value),
                disabled: isLoading
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Individual" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "radio-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "accountType",
                value: "business",
                checked: accountType === "business",
                onChange: (e6) => setAccountType(e6.target.value),
                disabled: isLoading
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Business" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Email ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, disabled: true, className: "email-input" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Phone Number ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phone, className: "phone-input", disabled: true }),
        editLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "edit-link",
            onClick: handleEditDetails,
            children: "Edit"
          }
        )
      ] }),
      accountType === "individual" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "First Name ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "First Name",
              value: firstName,
              onChange: (e6) => setFirstName(e6.target.value),
              disabled: isLoading,
              autoFocus: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "Last Name ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Last Name",
              value: lastName,
              onChange: (e6) => setLastName(e6.target.value),
              disabled: isLoading
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Business Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Business Name",
            value: businessName,
            onChange: (e6) => setBusinessName(e6.target.value),
            disabled: isLoading,
            autoFocus: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: showPassword ? "text" : "password",
              value: password,
              onChange: (e6) => setPassword(e6.target.value),
              disabled: isLoading,
              className: hasError ? "error" : "",
              placeholder: "Enter a strong password"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "password-toggle",
              onClick: () => setShowPassword(!showPassword),
              children: showPassword ? "👁️" : "👁️‍🗨️"
            }
          )
        ] }),
        hasError && errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "password-hint", children: "Password must be at least 8 characters long" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "required-note", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" }),
        " Required fields"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "terms-agreement", children: `By clicking "Create Account", you agree to Toyota's Terms of Service and Privacy Policy.` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "create-account-button",
          disabled: isLoading || !password || accountType === "individual" && (!firstName || !lastName) || accountType === "business" && !businessName,
          children: "Create Account"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "By creating an account, you agree to Toyota's Terms of Service and Privacy Policy." })
  ] });
};
const EmailIdentifierChallenge = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [verificationCode, setVerificationCode] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a4;
    try {
      const provider = new i();
      setScreenProvider(provider);
      console.log("EmailIdentifierChallenge screen provider:", provider);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize EmailIdentifierChallenge screen provider:",
        error
      );
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    try {
      await screenProvider.submitEmailChallenge({
        code: verificationCode
      });
    } catch (error) {
      console.error("Verification error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleResend = async () => {
    if (!screenProvider) return;
    try {
      await screenProvider.resendCode();
      console.log("Verification code resent");
    } catch (error) {
      console.error("Resend error:", error);
    }
  };
  const handleEdit = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const editLink2 = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.edit_identifier;
    if (editLink2) {
      window.location.href = editLink2;
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "email-challenge-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const email = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.email) || "";
  const title = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.title) || "Verify Your Email";
  const description = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.description) || "Enter the verification code sent to your email";
  const editLink = (_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.links) == null ? void 0 : _h2.edit_identifier;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "email-challenge-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: description }),
    email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "email-display", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "email-text", children: [
        "Verification code sent to: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email })
      ] }),
      editLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "edit-email-link",
          onClick: handleEdit,
          children: "Edit Email"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Verification Code ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Enter 6-digit code",
            value: verificationCode,
            onChange: (e6) => setVerificationCode(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : "",
            maxLength: 6,
            autoFocus: true
          }
        ),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: "Invalid verification code. Please try again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "verify-button",
          disabled: !verificationCode || isLoading,
          children: isLoading ? "Verifying..." : "Verify Email"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resend-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "resend-text", children: "Didn't receive the code?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "resend-button",
          onClick: handleResend,
          disabled: isLoading,
          children: "Resend Code"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "Check your spam folder if you don't see the email. The code will expire in 10 minutes." })
  ] });
};
const PhoneIdentifierChallenge = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2, _i3, _j2, _k, _l, _m2, _n;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [verificationCode, setVerificationCode] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a4;
    try {
      const provider = new i$1();
      setScreenProvider(provider);
      console.log("PhoneIdentifierChallenge screen provider:", provider);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize PhoneIdentifierChallenge screen provider:",
        error
      );
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    try {
      await screenProvider.submitPhoneChallenge({
        code: verificationCode
      });
    } catch (error) {
      console.error("Verification error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleResend = async () => {
    if (!screenProvider) return;
    try {
      await screenProvider.resendCode();
      console.log("Verification code resent");
    } catch (error) {
      console.error("Resend error:", error);
    }
  };
  const handleEdit = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const editLink2 = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.edit_identifier;
    if (editLink2) {
      window.location.href = editLink2;
    }
  };
  const handleSwitchToPassword = () => {
    var _a4;
    if (!screenProvider) return;
    const state = ((_a4 = screenProvider.transaction) == null ? void 0 : _a4.state) || "";
    const form = document.createElement("form");
    form.method = "POST";
    form.action = window.location.href;
    const stateInput = document.createElement("input");
    stateInput.type = "hidden";
    stateInput.name = "state";
    stateInput.value = state;
    form.appendChild(stateInput);
    const actionInput = document.createElement("input");
    actionInput.type = "hidden";
    actionInput.name = "action";
    actionInput.value = "switch-to-password-auth";
    form.appendChild(actionInput);
    document.body.appendChild(form);
    form.submit();
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "phone-challenge-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const showSwitchToPassword = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.show_switch_to_password_button) === true;
  const phone = showSwitchToPassword ? (_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.data) == null ? void 0 : _d3.username : (_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.data) == null ? void 0 : _f2.phone;
  const title = showSwitchToPassword ? (_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.texts) == null ? void 0 : _h2.titleWhenPhoneNumberFieldShown : (_j2 = (_i3 = screenProvider.screen) == null ? void 0 : _i3.texts) == null ? void 0 : _j2.title;
  const description = showSwitchToPassword ? (_l = (_k = screenProvider.screen) == null ? void 0 : _k.texts) == null ? void 0 : _l.descriptionWhenPhoneNumberFieldShown : "Enter the verification code sent to your phone";
  const editLink = (_n = (_m2 = screenProvider.screen) == null ? void 0 : _m2.links) == null ? void 0 : _n.edit_identifier;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-challenge-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: description }),
    phone && !showSwitchToPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-display", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "phone-text", children: [
        "Verification code sent to: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: phone })
      ] }),
      editLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "edit-phone-link",
          onClick: handleEdit,
          children: "Edit Phone"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      showSwitchToPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Phone Number ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: phone, disabled: true, className: "phone-input" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Verification Code ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Enter 6-digit code",
            value: verificationCode,
            onChange: (e6) => setVerificationCode(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : "",
            maxLength: 6,
            autoFocus: true
          }
        ),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: "Invalid verification code. Please try again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "verify-button",
          disabled: !verificationCode || isLoading,
          children: showSwitchToPassword ? "Continue" : "Verify Phone"
        }
      ),
      showSwitchToPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "password-switch-button",
          onClick: handleSwitchToPassword,
          disabled: isLoading,
          children: "Continue with a password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resend-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "resend-text", children: "Didn't receive the code?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "resend-button",
          onClick: handleResend,
          disabled: isLoading,
          children: "Resend Code"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "Check your messages if you don't see the SMS. The code will expire in 10 minutes." })
  ] });
};
const MfaEmailChallenge = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [verificationCode, setVerificationCode] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a4;
    try {
      const provider = new o3();
      setScreenProvider(provider);
      console.log("MfaEmailChallenge screen provider:", provider);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize MfaEmailChallenge screen provider:",
        error
      );
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    try {
      await screenProvider.continue({
        code: verificationCode,
        rememberDevice: false
      });
    } catch (error) {
      console.error("MFA verification error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleResend = async () => {
    if (!screenProvider) return;
    try {
      await screenProvider.resendCode();
      console.log("MFA code resent");
    } catch (error) {
      console.error("Resend error:", error);
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mfa-email-challenge-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const email = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.email) || "";
  const title = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.title) || "Multi-Factor Authentication";
  const description = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.description) || "Enter the verification code sent to your email";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mfa-email-challenge-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: description }),
    email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "email-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "email-text", children: [
      "Verification code sent to: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Verification Code ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Enter 6-digit code",
            value: verificationCode,
            onChange: (e6) => setVerificationCode(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : "",
            maxLength: 6,
            autoFocus: true
          }
        ),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: "Invalid verification code. Please try again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "verify-button",
          disabled: !verificationCode || isLoading,
          children: isLoading ? "Verifying..." : "Verify"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resend-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "resend-text", children: "Didn't receive the code?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "resend-button",
          onClick: handleResend,
          disabled: isLoading,
          children: "Resend Code"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "Check your spam folder if you don't see the email. The code will expire in 10 minutes." })
  ] });
};
const ResetPasswordRequest = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [email, setEmail] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a4, _b3, _c3;
    try {
      const provider = new a6();
      setScreenProvider(provider);
      console.log("ResetPasswordRequest screen provider:", provider);
      const username = (_b3 = (_a4 = provider.screen) == null ? void 0 : _a4.data) == null ? void 0 : _b3.username;
      if (username) {
        setEmail(username);
      }
      if ((_c3 = provider.transaction) == null ? void 0 : _c3.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize ResetPasswordRequest screen provider:",
        error
      );
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    setIsLoading(true);
    setHasError(false);
    try {
      await screenProvider.resetPassword({ username: email });
    } catch (error) {
      console.error("Password reset request error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  const handleBackToLogin = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const loginLink = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.login;
    if (loginLink) {
      window.location.href = loginLink;
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reset-password-request-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const title = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.texts) == null ? void 0 : _b2.title) || "Reset Your Password";
  const description = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.description) || "Enter your email address and we'll send you a link to reset your password";
  const emailPlaceholder = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.emailPlaceholder) || "Email";
  const buttonText = ((_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.texts) == null ? void 0 : _h2.buttonText) || "Send Reset Link";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reset-password-request-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Email ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            placeholder: emailPlaceholder,
            value: email,
            onChange: (e6) => setEmail(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : "",
            autoFocus: true
          }
        ),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: "Unable to send reset link. Please check your email and try again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "submit-button",
          disabled: !email || isLoading,
          children: isLoading ? "Sending..." : buttonText
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "back-to-login-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#",
        onClick: (e6) => {
          e6.preventDefault();
          handleBackToLogin();
        },
        className: "back-to-login-link",
        children: "Back to Sign In"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "Check your spam folder if you don't see the email. The reset link will expire in 24 hours." })
  ] });
};
const ResetPassword = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2, _g2, _h2, _i3, _j2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [hasError, setHasError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a4;
    try {
      const provider = new a$1();
      setScreenProvider(provider);
      console.log("ResetPassword screen provider:", provider);
      if ((_a4 = provider.transaction) == null ? void 0 : _a4.hasErrors) {
        setHasError(true);
      }
    } catch (error) {
      console.error(
        "Failed to initialize ResetPassword screen provider:",
        error
      );
    }
  }, []);
  const handleSubmit = async (e6) => {
    e6.preventDefault();
    if (!screenProvider) return;
    if (password !== confirmPassword) {
      setHasError(true);
      return;
    }
    setIsLoading(true);
    setHasError(false);
    try {
      await screenProvider.resetPassword({
        "password-reset": password,
        "re-enter-password": confirmPassword
      });
    } catch (error) {
      console.error("Password reset error:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reset-password-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const email = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.data) == null ? void 0 : _b2.username) || "";
  const title = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.title) || "Reset Your Password";
  const description = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.description) || "Enter your new password below";
  const passwordPlaceholder = ((_h2 = (_g2 = screenProvider.screen) == null ? void 0 : _g2.texts) == null ? void 0 : _h2.passwordPlaceholder) || "New Password";
  const buttonText = ((_j2 = (_i3 = screenProvider.screen) == null ? void 0 : _i3.texts) == null ? void 0 : _j2.buttonText) || "Reset Password";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reset-password-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: description }),
    email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "email-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "email-text", children: [
      "Account: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "New Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            placeholder: passwordPlaceholder,
            value: password,
            onChange: (e6) => setPassword(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : "",
            autoFocus: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
          "Confirm Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required-asterisk", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            placeholder: "Confirm New Password",
            value: confirmPassword,
            onChange: (e6) => setConfirmPassword(e6.target.value),
            disabled: isLoading,
            className: hasError ? "error" : ""
          }
        ),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", children: password !== confirmPassword ? "Passwords do not match. Please try again." : "Unable to reset password. Please try again or request a new reset link." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "submit-button",
          disabled: !password || !confirmPassword || isLoading,
          children: isLoading ? "Resetting..." : buttonText
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-text", children: "Your new password must be at least 8 characters long and contain a mix of letters, numbers, and symbols." })
  ] });
};
const ResetPasswordSuccess = () => {
  var _a3, _b2, _c2, _d3, _e3, _f2;
  const [screenProvider, setScreenProvider] = reactExports.useState(
    null
  );
  reactExports.useEffect(() => {
    try {
      const provider = new e$1();
      setScreenProvider(provider);
      console.log("ResetPasswordSuccess screen provider:", provider);
    } catch (error) {
      console.error(
        "Failed to initialize ResetPasswordSuccess screen provider:",
        error
      );
    }
  }, []);
  const handleBackToLogin = () => {
    var _a4, _b3;
    if (!screenProvider) return;
    const loginLink = (_b3 = (_a4 = screenProvider.screen) == null ? void 0 : _a4.links) == null ? void 0 : _b3.back_to_app;
    if (loginLink) {
      window.location.href = loginLink;
    }
  };
  if (!screenProvider) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reset-password-success-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) }) });
  }
  const title = ((_b2 = (_a3 = screenProvider.screen) == null ? void 0 : _a3.texts) == null ? void 0 : _b2.title) || "Password Reset Successful";
  const description = ((_d3 = (_c2 = screenProvider.screen) == null ? void 0 : _c2.texts) == null ? void 0 : _d3.description) || "Your password has been reset successfully. You can now sign in with your new password.";
  const buttonText = ((_f2 = (_e3 = screenProvider.screen) == null ? void 0 : _e3.texts) == null ? void 0 : _f2.buttonText) || "Back to Sign In";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reset-password-success-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://brand.toyota.com/content/dam/brandhub/VIS_toyota_logo_horiz_black_RGB_2021.svg",
        alt: "Toyota Logo",
        style: { height: "32px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "success-icon", children: "✓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "description", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "login-button",
        onClick: handleBackToLogin,
        children: buttonText
      }
    )
  ] });
};
function App() {
  const [screenName, setScreenName] = reactExports.useState(() => s2());
  reactExports.useEffect(() => {
    console.log("Current screen:", screenName);
    const interval = setInterval(() => {
      const currentScreen = s2();
      if (currentScreen !== screenName) {
        console.log("Screen changed to:", currentScreen);
        setScreenName(currentScreen);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [screenName]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app", children: [
    screenName === "login-id" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoginId, {}),
    screenName === "login-password" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPassword, {}),
    screenName === "signup-id" && /* @__PURE__ */ jsxRuntimeExports.jsx(SignupId, {}),
    screenName === "signup-password" && /* @__PURE__ */ jsxRuntimeExports.jsx(SignupPassword, {}),
    screenName === "email-identifier-challenge" && /* @__PURE__ */ jsxRuntimeExports.jsx(EmailIdentifierChallenge, {}),
    screenName === "phone-identifier-challenge" && /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneIdentifierChallenge, {}),
    screenName === "mfa-email-challenge" && /* @__PURE__ */ jsxRuntimeExports.jsx(MfaEmailChallenge, {}),
    screenName === "reset-password-request" && /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPasswordRequest, {}),
    screenName === "reset-password" && /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPassword, {}),
    screenName === "reset-password-success" && /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPasswordSuccess, {}),
    !screenName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) })
  ] });
}
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "8px",
        maxWidth: "500px",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "24px", marginBottom: "20px", color: "#333" }, children: "Something went wrong" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "16px", color: "#666", marginBottom: "20px" }, children: "Please try refreshing the page or contact support if the problem persists." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            style: {
              padding: "12px 24px",
              backgroundColor: "#eb0a1e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer"
            },
            children: "Refresh Page"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
let rootElement = document.getElementById("root");
if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}
client.createRoot(rootElement).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-B1s988-S.js.map
