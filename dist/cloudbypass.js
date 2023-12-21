// Cloudbypass v0.0.1 Copyright (c) 2023 NULL and contributors
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('punycode'), require('util'), require('url')) :
  typeof define === 'function' && define.amd ? define(['punycode', 'util', 'url'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cloudbypass = factory(global.Punycode, global.require$$0$1, global.url));
})(this, (function (Punycode, require$$0$1, url) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Punycode__default = /*#__PURE__*/_interopDefaultLegacy(Punycode);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
  var url__default = /*#__PURE__*/_interopDefaultLegacy(url);

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // utils is a library of generic helper functions non-specific to axios

  var toString$2 = Object.prototype.toString;
  var getPrototypeOf = Object.getPrototypeOf;
  var kindOf = function (cache) {
    return function (thing) {
      var str = toString$2.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(Object.create(null));
  var kindOfTest = function kindOfTest(type) {
    type = type.toLowerCase();
    return function (thing) {
      return kindOf(thing) === type;
    };
  };
  var typeOfTest = function typeOfTest(type) {
    return function (thing) {
      return _typeof(thing) === type;
    };
  };

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   *
   * @returns {boolean} True if value is an Array, otherwise false
   */
  var isArray = Array.isArray;

  /**
   * Determine if a value is undefined
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  var isUndefined = typeOfTest('undefined');

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  var isArrayBuffer = kindOfTest('ArrayBuffer');

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */
  var isString$1 = typeOfTest('string');

  /**
   * Determine if a value is a Function
   *
   * @param {*} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  var isFunction$1 = typeOfTest('function');

  /**
   * Determine if a value is a Number
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Number, otherwise false
   */
  var isNumber = typeOfTest('number');

  /**
   * Determine if a value is an Object
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an Object, otherwise false
   */
  var isObject$2 = function isObject(thing) {
    return thing !== null && _typeof(thing) === 'object';
  };

  /**
   * Determine if a value is a Boolean
   *
   * @param {*} thing The value to test
   * @returns {boolean} True if value is a Boolean, otherwise false
   */
  var isBoolean = function isBoolean(thing) {
    return thing === true || thing === false;
  };

  /**
   * Determine if a value is a plain Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a plain Object, otherwise false
   */
  var isPlainObject = function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
      return false;
    }
    var prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };

  /**
   * Determine if a value is a Date
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Date, otherwise false
   */
  var isDate$1 = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  var isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Stream
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  var isStream = function isStream(val) {
    return isObject$2(val) && isFunction$1(val.pipe);
  };

  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  var isFormData = function isFormData(thing) {
    var kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
    // detect form-data instance
    kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]'));
  };

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  var isURLSearchParams = kindOfTest('URLSearchParams');

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   *
   * @returns {String} The String freed of excess whitespace
   */
  var trim = function trim(str) {
    return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$allOwnKeys = _ref.allOwnKeys,
      allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    var i;
    var l;

    // Force an array if not already something iterable
    if (_typeof(obj) !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      var len = keys.length;
      var key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    var keys = Object.keys(obj);
    var i = keys.length;
    var _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = function () {
    /*eslint no-undef:0*/
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
  }();
  var isContextDefined = function isContextDefined(context) {
    return !isUndefined(context) && context !== _global;
  };

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   *
   * @returns {Object} Result of all merge properties
   */
  function merge( /* obj1, obj2, obj3, ... */
  ) {
    var _ref2 = isContextDefined(this) && this || {},
      caseless = _ref2.caseless;
    var result = {};
    var assignValue = function assignValue(val, key) {
      var targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (var i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */
  var extend = function extend(a, b, thisArg) {
    var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      allOwnKeys = _ref3.allOwnKeys;
    forEach(b, function (val, key) {
      if (thisArg && isFunction$1(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, {
      allOwnKeys: allOwnKeys
    });
    return a;
  };

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   *
   * @returns {string} content value without BOM
   */
  var stripBOM = function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  };

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   *
   * @returns {void}
   */
  var inherits$1 = function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function|Boolean} [filter]
   * @param {Function} [propFilter]
   *
   * @returns {Object}
   */
  var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };

  /**
   * Determines whether a string ends with the characters of a specified string
   *
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   *
   * @returns {boolean}
   */
  var endsWith = function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };

  /**
   * Returns new array from array like object or null if failed
   *
   * @param {*} [thing]
   *
   * @returns {?Array}
   */
  var toArray = function toArray(thing) {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    var i = thing.length;
    if (!isNumber(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };

  /**
   * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
   * thing passed in is an instance of Uint8Array
   *
   * @param {TypedArray}
   *
   * @returns {Array}
   */
  // eslint-disable-next-line func-names
  var isTypedArray = function (TypedArray) {
    // eslint-disable-next-line func-names
    return function (thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

  /**
   * For each entry in the object, call the function with the key and value.
   *
   * @param {Object<any, any>} obj - The object to iterate over.
   * @param {Function} fn - The function to call for each entry.
   *
   * @returns {void}
   */
  var forEachEntry = function forEachEntry(obj, fn) {
    var generator = obj && obj[Symbol.iterator];
    var iterator = generator.call(obj);
    var result;
    while ((result = iterator.next()) && !result.done) {
      var pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };

  /**
   * It takes a regular expression and a string, and returns an array of all the matches
   *
   * @param {string} regExp - The regular expression to match against.
   * @param {string} str - The string to search.
   *
   * @returns {Array<boolean>}
   */
  var matchAll = function matchAll(regExp, str) {
    var matches;
    var arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };

  /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
  var isHTMLForm = kindOfTest('HTMLFormElement');
  var toCamelCase = function toCamelCase(str) {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };

  /* Creating a function that will check if an object has a property. */
  var hasOwnProperty = function (_ref4) {
    var hasOwnProperty = _ref4.hasOwnProperty;
    return function (obj, prop) {
      return hasOwnProperty.call(obj, prop);
    };
  }(Object.prototype);

  /**
   * Determine if a value is a RegExp object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a RegExp object, otherwise false
   */
  var isRegExp = kindOfTest('RegExp');
  var reduceDescriptors = function reduceDescriptors(obj, reducer) {
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    var reducedDescriptors = {};
    forEach(descriptors, function (descriptor, name) {
      var ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };

  /**
   * Makes all methods read-only
   * @param {Object} obj
   */

  var freezeMethods = function freezeMethods(obj) {
    reduceDescriptors(obj, function (descriptor, name) {
      // skip restricted props in strict mode
      if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
        return false;
      }
      var value = obj[name];
      if (!isFunction$1(value)) return;
      descriptor.enumerable = false;
      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = function () {
          throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
      }
    });
  };
  var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
    var obj = {};
    var define = function define(arr) {
      arr.forEach(function (value) {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = function noop() {};
  var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  var DIGIT = '0123456789';
  var ALPHABET = {
    DIGIT: DIGIT,
    ALPHA: ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = function generateString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALPHABET.ALPHA_DIGIT;
    var str = '';
    var length = alphabet.length;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };

  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
  }
  var toJSONObject = function toJSONObject(obj) {
    var stack = new Array(10);
    var visit = function visit(source, i) {
      if (isObject$2(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!('toJSON' in source)) {
          stack[i] = source;
          var target = isArray(source) ? [] : {};
          forEach(source, function (value, key) {
            var reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = undefined;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest('AsyncFunction');
  var isThenable = function isThenable(thing) {
    return thing && (isObject$2(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing["catch"]);
  };
  var utils$1 = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString$1,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject$2,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate$1,
    isFile: isFile,
    isBlob: isBlob,
    isRegExp: isRegExp,
    isFunction: isFunction$1,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isTypedArray: isTypedArray,
    isFileList: isFileList,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits$1,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    forEachEntry: forEachEntry,
    matchAll: matchAll,
    isHTMLForm: isHTMLForm,
    hasOwnProperty: hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: reduceDescriptors,
    freezeMethods: freezeMethods,
    toObjectSet: toObjectSet,
    toCamelCase: toCamelCase,
    noop: noop,
    toFiniteNumber: toFiniteNumber,
    findKey: findKey,
    global: _global,
    isContextDefined: isContextDefined,
    ALPHABET: ALPHABET,
    generateString: generateString,
    isSpecCompliantForm: isSpecCompliantForm,
    toJSONObject: toJSONObject,
    isAsyncFn: isAsyncFn,
    isThenable: isThenable
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype$2 = AxiosError.prototype;
  var descriptors = {};
  ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
  // eslint-disable-next-line func-names
  ].forEach(function (code) {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$2, 'isAxiosError', {
    value: true
  });

  // eslint-disable-next-line func-names
  AxiosError.from = function (error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype$2);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, function (prop) {
      return prop !== 'isAxiosError';
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };

  // eslint-disable-next-line strict
  var httpAdapter = null;

  /**
   * Determines if the given thing is a array or js object.
   *
   * @param {string} thing - The object or array to be visited.
   *
   * @returns {boolean}
   */
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }

  /**
   * It removes the brackets from the end of a string
   *
   * @param {string} key - The key of the parameter.
   *
   * @returns {string} the key without the brackets.
   */
  function removeBrackets(key) {
    return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }

  /**
   * It takes a path, a key, and a boolean, and returns a string
   *
   * @param {string} path - The path to the current key.
   * @param {string} key - The key of the current object being iterated over.
   * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
   *
   * @returns {string} The path to the current key.
   */
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
  }

  /**
   * If the array is an array and none of its elements are visitable, then it's a flat array.
   *
   * @param {Array<any>} arr - The array to check
   *
   * @returns {boolean}
   */
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });

  /**
   * Convert a data object to FormData
   *
   * @param {Object} obj
   * @param {?Object} [formData]
   * @param {?Object} [options]
   * @param {Function} [options.visitor]
   * @param {Boolean} [options.metaTokens = true]
   * @param {Boolean} [options.dots = false]
   * @param {?Boolean} [options.indexes = false]
   *
   * @returns {Object}
   **/

  /**
   * It converts an object into a FormData object
   *
   * @param {Object<any, any>} obj - The object to convert to form data.
   * @param {string} formData - The FormData object to append to.
   * @param {Object<string, any>} options
   *
   * @returns
   */
  function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError('target must be an object');
    }

    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData)();

    // eslint-disable-next-line no-param-reassign
    options = utils$1.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils$1.isUndefined(source[option]);
    });
    var metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    var visitor = options.visitor || defaultVisitor;
    var dots = options.dots;
    var indexes = options.indexes;
    var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    var useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
      if (value === null) return '';
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError('Blob is not supported. Use a Buffer instead.');
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }

    /**
     * Default visitor.
     *
     * @param {*} value
     * @param {String|Number} key
     * @param {Array<String|Number>} path
     * @this {FormData}
     *
     * @returns {boolean} return true to visit the each prop of the value recursively
     */
    function defaultVisitor(value, key, path) {
      var arr = value;
      if (value && !path && _typeof(value) === 'object') {
        if (utils$1.endsWith(key, '{}')) {
          // eslint-disable-next-line no-param-reassign
          key = metaTokens ? key : key.slice(0, -2);
          // eslint-disable-next-line no-param-reassign
          value = JSON.stringify(value);
        } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
          // eslint-disable-next-line no-param-reassign
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    var stack = [];
    var exposedHelpers = Object.assign(predicates, {
      defaultVisitor: defaultVisitor,
      convertValue: convertValue,
      isVisitable: isVisitable
    });
    function build(value, path) {
      if (utils$1.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        var result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
  }

  /**
   * It encodes a string by replacing all characters that are not in the unreserved set with
   * their percent-encoded equivalents
   *
   * @param {string} str - The string to encode.
   *
   * @returns {string} The encoded string.
   */
  function encode$3(str) {
    var charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }

  /**
   * It takes a params object and converts it to a FormData object
   *
   * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
   * @param {Object<string, any>} options - The options object passed to the Axios constructor.
   *
   * @returns {void}
   */
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  var prototype$1 = AxiosURLSearchParams.prototype;
  prototype$1.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype$1.toString = function toString(encoder) {
    var _encode = encoder ? function (value) {
      return encoder.call(this, value, encode$3);
    } : encode$3;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
  };

  /**
   * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
   * URI encoded counterparts
   *
   * @param {string} val The value to be encoded.
   *
   * @returns {string} The encoded value.
   */
  function encode$2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?object} options
   *
   * @returns {string} The formatted url
   */
  function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    var _encode = options && options.encode || encode$2;
    var serializeFn = options && options.serialize;
    var serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  }

  var InterceptorManager = /*#__PURE__*/function () {
    function InterceptorManager() {
      _classCallCheck(this, InterceptorManager);
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    _createClass(InterceptorManager, [{
      key: "use",
      value: function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
    }, {
      key: "eject",
      value: function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }

      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
    }, {
      key: "clear",
      value: function clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
    }, {
      key: "forEach",
      value: function forEach(fn) {
        utils$1.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    }]);
    return InterceptorManager;
  }();
  var InterceptorManager$1 = InterceptorManager;

  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

  var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

  var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

  var platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  };

  var hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   *
   * @returns {boolean}
   */
  var hasStandardBrowserEnv = function (product) {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0;
  }(typeof navigator !== 'undefined' && navigator.product);

  /**
   * Determine if we're running in a standard browser webWorker environment
   *
   * Although the `isStandardBrowserEnv` method indicates that
   * `allows axios to run in a web worker`, the WebWorker will still be
   * filtered out due to its judgment standard
   * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
   * This leads to a problem when axios post `FormData` in webWorker
   */
  var hasStandardBrowserWebWorkerEnv = function () {
    return typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
  }();

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv
  });

  var platform = _objectSpread2(_objectSpread2({}, utils), platform$1);

  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function visitor(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString('base64'));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }

  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */
  function arrayToObject(arr) {
    var obj = {};
    var keys = Object.keys(arr);
    var i;
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }

  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      var name = path[index++];
      var isNumericKey = Number.isFinite(+name);
      var isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      var result = buildPath(path, value, target[name], index);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      var obj = {};
      utils$1.forEachEntry(formData, function (name, value) {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: ['xhr', 'http'],
    transformRequest: [function transformRequest(data, headers) {
      var contentType = headers.getContentType() || '';
      var hasJSONContentType = contentType.indexOf('application/json') > -1;
      var isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      var isFormData = utils$1.isFormData(data);
      if (isFormData) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }
      var isFileList;
      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? {
            'files[]': data
          } : data, _FormData && new _FormData(), this.formSerializer);
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults.transitional;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var JSONRequested = this.responseType === 'json';
      if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': undefined
      }
    }
  };
  utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], function (method) {
    defaults.headers[method] = {};
  });
  var defaults$1 = defaults;

  // RawAxiosHeaders whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} rawHeaders Headers needing to be parsed
   *
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = (function (rawHeaders) {
    var parsed = {};
    var key;
    var val;
    var i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  });

  var $internals = Symbol('internals');
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    var tokens = Object.create(null);
    var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    var match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = function isValidHeaderName(str) {
    return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  };
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
      return _char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    var accessorName = utils$1.toCamelCase(' ' + header);
    ['get', 'set', 'has'].forEach(function (methodName) {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function value(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
    function AxiosHeaders(headers) {
      _classCallCheck(this, AxiosHeaders);
      headers && this.set(headers);
    }
    _createClass(AxiosHeaders, [{
      key: "set",
      value: function set(header, valueOrRewrite, rewrite) {
        var self = this;
        function setHeader(_value, _header, _rewrite) {
          var lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error('header name must be a non-empty string');
          }
          var key = utils$1.findKey(self, lHeader);
          if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
            self[key || _header] = normalizeValue(_value);
          }
        }
        var setHeaders = function setHeaders(headers, _rewrite) {
          return utils$1.forEach(headers, function (_value, _header) {
            return setHeader(_value, _header, _rewrite);
          });
        };
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
    }, {
      key: "get",
      value: function get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils$1.findKey(this, header);
          if (key) {
            var value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils$1.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils$1.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError('parser must be boolean|regexp|function');
          }
        }
      }
    }, {
      key: "has",
      value: function has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils$1.findKey(this, header);
          return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
    }, {
      key: "delete",
      value: function _delete(header, matcher) {
        var self = this;
        var deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            var key = utils$1.findKey(self, _header);
            if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
              delete self[key];
              deleted = true;
            }
          }
        }
        if (utils$1.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
    }, {
      key: "clear",
      value: function clear(matcher) {
        var keys = Object.keys(this);
        var i = keys.length;
        var deleted = false;
        while (i--) {
          var key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
    }, {
      key: "normalize",
      value: function normalize(format) {
        var self = this;
        var headers = {};
        utils$1.forEach(this, function (value, header) {
          var key = utils$1.findKey(headers, header);
          if (key) {
            self[key] = normalizeValue(value);
            delete self[header];
            return;
          }
          var normalized = format ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self[header];
          }
          self[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
    }, {
      key: "concat",
      value: function concat() {
        var _this$constructor;
        for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
          targets[_key] = arguments[_key];
        }
        return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
      }
    }, {
      key: "toJSON",
      value: function toJSON(asStrings) {
        var obj = Object.create(null);
        utils$1.forEach(this, function (value, header) {
          value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
        });
        return obj;
      }
    }, {
      key: _Symbol$iterator,
      value: function value() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
    }, {
      key: "toString",
      value: function toString() {
        return Object.entries(this.toJSON()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            header = _ref2[0],
            value = _ref2[1];
          return header + ': ' + value;
        }).join('\n');
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return 'AxiosHeaders';
      }
    }], [{
      key: "from",
      value: function from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
    }, {
      key: "concat",
      value: function concat(first) {
        var computed = new this(first);
        for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          targets[_key2 - 1] = arguments[_key2];
        }
        targets.forEach(function (target) {
          return computed.set(target);
        });
        return computed;
      }
    }, {
      key: "accessor",
      value: function accessor(header) {
        var internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        var accessors = internals.accessors;
        var prototype = this.prototype;
        function defineAccessor(_header) {
          var lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype, _header);
            accessors[lHeader] = true;
          }
        }
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    }]);
    return AxiosHeaders;
  }(Symbol.iterator, Symbol.toStringTag);
  AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

  // reserved names hotfix
  utils$1.reduceDescriptors(AxiosHeaders.prototype, function (_ref3, key) {
    var value = _ref3.value;
    var mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
      get: function get() {
        return value;
      },
      set: function set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils$1.freezeMethods(AxiosHeaders);
  var AxiosHeaders$1 = AxiosHeaders;

  /**
   * Transform the data for a request or a response
   *
   * @param {Array|Function} fns A single function or Array of functions
   * @param {?Object} response The response object
   *
   * @returns {*} The resulting transformed data
   */
  function transformData(fns, response) {
    var config = this || defaults$1;
    var context = response || config;
    var headers = AxiosHeaders$1.from(context.headers);
    var data = context.data;
    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
  }

  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  var cookies = platform.hasStandardBrowserEnv ?
  // Standard browser envs support document.cookie
  {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [name + '=' + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push('path=' + path);
      utils$1.isString(domain) && cookie.push('domain=' + domain);
      secure === true && cookie.push('secure');
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  } :
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   *
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   *
   * @returns {string} The combined URL
   */
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  }

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  var isURLSameOrigin = platform.hasStandardBrowserEnv ?
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;
      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() :
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();

  function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  /**
   * Calculate data maxRate
   * @param {Number} [samplesCount= 10]
   * @param {Number} [min= 1000]
   * @returns {Function}
   */
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    var bytes = new Array(samplesCount);
    var timestamps = new Array(samplesCount);
    var head = 0;
    var tail = 0;
    var firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
      var now = Date.now();
      var startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      var i = tail;
      var bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      var passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
  }

  function progressEventReducer(listener, isDownloadStream) {
    var bytesNotified = 0;
    var _speedometer = speedometer(50, 250);
    return function (e) {
      var loaded = e.loaded;
      var total = e.lengthComputable ? e.total : undefined;
      var progressBytes = loaded - bytesNotified;
      var rate = _speedometer(progressBytes);
      var inRange = loaded <= total;
      bytesNotified = loaded;
      var data = {
        loaded: loaded,
        total: total,
        progress: total ? loaded / total : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e
      };
      data[isDownloadStream ? 'download' : 'upload'] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
  var xhrAdapter = isXHRAdapterSupported && function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
      var responseType = config.responseType,
        withXSRFToken = config.withXSRFToken;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', onCanceled);
        }
      }
      var contentType;
      if (utils$1.isFormData(requestData)) {
        if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false); // Let the browser set it
        } else if ((contentType = requestHeaders.getContentType()) !== false) {
          // fix semicolon duplication issue for ReactNative FormData implementation
          var _ref = contentType ? contentType.split(';').map(function (token) {
              return token.trim();
            }).filter(Boolean) : [],
            _ref2 = _toArray(_ref),
            type = _ref2[0],
            tokens = _ref2.slice(1);
          requestHeaders.setContentType([type || 'multipart/form-data'].concat(_toConsumableArray(tokens)).join('; '));
        }
      }
      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
      }
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        var responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
        var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }
      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        var transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (platform.hasStandardBrowserEnv) {
        withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(fullPath)) {
          // Add xsrf header
          var xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
          if (xsrfValue) {
            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
          }
        }
      }

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils$1.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = config.responseType;
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = function onCanceled(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
      }
      var protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

  var knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils$1.forEach(knownAdapters, function (fn, value) {
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {
          value: value
        });
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
      Object.defineProperty(fn, 'adapterName', {
        value: value
      });
    }
  });
  var renderReason = function renderReason(reason) {
    return "- ".concat(reason);
  };
  var isResolvedHandle = function isResolvedHandle(adapter) {
    return utils$1.isFunction(adapter) || adapter === null || adapter === false;
  };
  var adapters = {
    getAdapter: function getAdapter(adapters) {
      adapters = utils$1.isArray(adapters) ? adapters : [adapters];
      var _adapters = adapters,
        length = _adapters.length;
      var nameOrAdapter;
      var adapter;
      var rejectedReasons = {};
      for (var i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        var id = void 0;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === undefined) {
            throw new AxiosError("Unknown adapter '".concat(id, "'"));
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || '#' + i] = adapter;
      }
      if (!adapter) {
        var reasons = Object.entries(rejectedReasons).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            state = _ref2[1];
          return "adapter ".concat(id, " ") + (state === false ? 'is not supported by the environment' : 'is not available in the build');
        });
        var s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new AxiosError("There is no suitable adapter to dispatch the request " + s, 'ERR_NOT_SUPPORT');
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   *
   * @param {Object} config The config that is to be used for the request
   *
   * @returns {void}
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);

    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  var headersToObject = function headersToObject(thing) {
    return thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   *
   * @returns {Object} New object resulting from merging config2 to config1
   */
  function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({
          caseless: caseless
        }, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a, caseless);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }
    var mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: function headers(a, b) {
        return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
      }
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  var VERSION = "1.6.2";

  var validators$2 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
    validators$2[type] = function validator(thing) {
      return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  var deprecatedWarnings = {};

  /**
   * Transitional option validator
   *
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   *
   * @returns {function}
   */
  validators$2.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function (value, opt, opts) {
      if (validator === false) {
        throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */

  function assertOptions(options, schema, allowUnknown) {
    if (_typeof(options) !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  var validator = {
    assertOptions: assertOptions,
    validators: validators$2
  };

  var validators$1 = validator.validators;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   *
   * @return {Axios} A new instance of Axios
   */
  var Axios = /*#__PURE__*/function () {
    function Axios(instanceConfig) {
      _classCallCheck(this, Axios);
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    _createClass(Axios, [{
      key: "request",
      value: function request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        var _config = config,
          transitional = _config.transitional,
          paramsSerializer = _config.paramsSerializer,
          headers = _config.headers;
        if (transitional !== undefined) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators$1.transitional(validators$1["boolean"]),
            forcedJSONParsing: validators$1.transitional(validators$1["boolean"]),
            clarifyTimeoutError: validators$1.transitional(validators$1["boolean"])
          }, false);
        }
        if (paramsSerializer != null) {
          if (utils$1.isFunction(paramsSerializer)) {
            config.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            validator.assertOptions(paramsSerializer, {
              encode: validators$1["function"],
              serialize: validators$1["function"]
            }, true);
          }
        }

        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();

        // Flatten headers
        var contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
        headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
          delete headers[method];
        });
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

        // filter out skipped interceptors
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        var i = 0;
        var len;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest.bind(this), undefined];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        var newConfig = config;
        i = 0;
        while (i < len) {
          var onFulfilled = requestInterceptorChain[i++];
          var onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
    }, {
      key: "getUri",
      value: function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    }]);
    return Axios;
  }(); // Provide aliases for supported request methods
  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url: url,
          data: data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  });
  var Axios$1 = Axios;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @param {Function} executor The executor function.
   *
   * @returns {CancelToken}
   */
  var CancelToken = /*#__PURE__*/function () {
    function CancelToken(executor) {
      _classCallCheck(this, CancelToken);
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;

      // eslint-disable-next-line func-names
      this.promise.then(function (cancel) {
        if (!token._listeners) return;
        var i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });

      // eslint-disable-next-line func-names
      this.promise.then = function (onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function (resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    _createClass(CancelToken, [{
      key: "throwIfRequested",
      value: function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }

      /**
       * Subscribe to the cancel signal
       */
    }, {
      key: "subscribe",
      value: function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }

      /**
       * Unsubscribe from the cancel signal
       */
    }, {
      key: "unsubscribe",
      value: function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
    }], [{
      key: "source",
      value: function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      }
    }]);
    return CancelToken;
  }();
  var CancelToken$1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   *
   * @returns {Function}
   */
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   *
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }

  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode$1 = HttpStatusCode;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   *
   * @returns {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios$1(defaultConfig);
    var instance = bind(Axios$1.prototype.request, context);

    // Copy axios.prototype to instance
    utils$1.extend(instance, Axios$1.prototype, context, {
      allOwnKeys: true
    });

    // Copy context to instance
    utils$1.extend(instance, context, null, {
      allOwnKeys: true
    });

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults$1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios$1;

  // Expose Cancel & CancelToken
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;

  // Expose AxiosError class
  axios.AxiosError = AxiosError;

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  // Expose isAxiosError
  axios.isAxiosError = isAxiosError;

  // Expose mergeConfig
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = function (thing) {
    return formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
  };
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode$1;
  axios["default"] = axios;

  // this module should only have a default export
  var axios$1 = axios;

  // This module is intended to unwrap Axios default export as named.
  // Keep top-level export same with static properties
  // so that it can keep same with es module or cjs
  axios$1.Axios;
    axios$1.AxiosError;
    axios$1.CanceledError;
    axios$1.isCancel;
    axios$1.CancelToken;
    axios$1.VERSION;
    axios$1.all;
    axios$1.Cancel;
    axios$1.isAxiosError;
    axios$1.spread;
    axios$1.toFormData;
    axios$1.AxiosHeaders;
    axios$1.HttpStatusCode;
    axios$1.formToJSON;
    axios$1.getAdapter;
    axios$1.mergeConfig;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var noop_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    function noop(axios) {
      return axios;
    }
    exports.wrapper = noop;
  });

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'

  /** Regular expressions */
  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */
  var errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  };

  /** Convenience shortcuts */
  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;

  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
  function error(type) {
    throw new RangeError(errors[type]);
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
  function map(array, callback) {
    var result = [];
    var length = array.length;
    while (length--) {
      result[length] = callback(array[length]);
    }
    return result;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {String} A new string of characters returned by the callback
   * function.
   */
  function mapDomain(domain, callback) {
    var parts = domain.split('@');
    var result = '';
    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      domain = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    domain = domain.replace(regexSeparators, '\x2E');
    var labels = domain.split('.');
    var encoded = map(labels, callback).join('.');
    return result + encoded;
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
  var ucs2encode = function ucs2encode(codePoints) {
    return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
  };

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
  var basicToDigit = function basicToDigit(codePoint) {
    if (codePoint >= 0x30 && codePoint < 0x3A) {
      return 26 + (codePoint - 0x30);
    }
    if (codePoint >= 0x41 && codePoint < 0x5B) {
      return codePoint - 0x41;
    }
    if (codePoint >= 0x61 && codePoint < 0x7B) {
      return codePoint - 0x61;
    }
    return base;
  };

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
  var digitToBasic = function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for /* no initialization */
    (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  var decode$1 = function decode(input) {
    // Don't use UCS-2.
    var output = [];
    var inputLength = input.length;
    var i = 0;
    var n = initialN;
    var bias = initialBias;

    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    var basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (var j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }
      output.push(input.charCodeAt(j));
    }

    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.

    for /* no final expression */
    (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      var oldi = i;
      for /* no condition */
      (var w = 1, k = base;; k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }
        var digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base) {
          error('invalid-input');
        }
        if (digit > floor((maxInt - i) / w)) {
          error('overflow');
        }
        i += digit * w;
        var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t) {
          break;
        }
        var baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }
        w *= baseMinusT;
      }
      var out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);

      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }
      n += floor(i / out);
      i %= out;

      // Insert `n` at position `i` of the output.
      output.splice(i++, 0, n);
    }
    return String.fromCodePoint.apply(String, output);
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
  var encode$1 = function encode(input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;

    // Handle the basic code points.
    var _iterator = _createForOfIteratorHelper(input),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _currentValue2 = _step.value;
        if (_currentValue2 < 0x80) {
          output.push(stringFromCharCode(_currentValue2));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var basicLength = output.length;
    var handledCPCount = basicLength;

    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      output.push(delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      var m = maxInt;
      var _iterator2 = _createForOfIteratorHelper(input),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var currentValue = _step2.value;
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }

        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      var _iterator3 = _createForOfIteratorHelper(input),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _currentValue = _step3.value;
          if (_currentValue < n && ++delta > maxInt) {
            error('overflow');
          }
          if (_currentValue === n) {
            // Represent delta as a generalized variable-length integer.
            var q = delta;
            for /* no condition */
            (var k = base;; k += base) {
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              var qMinusT = q - t;
              var baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      ++delta;
      ++n;
    }
    return output.join('');
  };

  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
  var toUnicode = function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode$1(string.slice(4).toLowerCase()) : string;
    });
  };

  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
  var toASCII = function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode$1(string) : string;
    });
  };

  /*--------------------------------------------------------------------------*/

  /** Define the public API */
  var punycode$1 = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '2.3.1',
    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode$1,
    'encode': encode$1,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };

  var punycode_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ucs2decode: ucs2decode,
    ucs2encode: ucs2encode,
    decode: decode$1,
    encode: encode$1,
    toASCII: toASCII,
    toUnicode: toUnicode,
    'default': punycode$1
  });

  /**
   * Check if we're required to add a port number.
   *
   * @see https://url.spec.whatwg.org/#default-port
   * @param {Number|String} port Port number we need to check
   * @param {String} protocol Protocol we need to check against.
   * @returns {Boolean} Is it a default port for the given protocol
   * @api private
   */
  var requiresPort = function required(port, protocol) {
    protocol = protocol.split(':')[0];
    port = +port;
    if (!port) return false;
    switch (protocol) {
      case 'http':
      case 'ws':
        return port !== 80;
      case 'https':
      case 'wss':
        return port !== 443;
      case 'ftp':
        return port !== 21;
      case 'gopher':
        return port !== 70;
      case 'file':
        return false;
    }
    return port !== 0;
  };

  var has = Object.prototype.hasOwnProperty,
    undef;

  /**
   * Decode a URI encoded string.
   *
   * @param {String} input The URI encoded string.
   * @returns {String|Null} The decoded string.
   * @api private
   */
  function decode(input) {
    try {
      return decodeURIComponent(input.replace(/\+/g, ' '));
    } catch (e) {
      return null;
    }
  }

  /**
   * Attempts to encode a given input.
   *
   * @param {String} input The string that needs to be encoded.
   * @returns {String|Null} The encoded string.
   * @api private
   */
  function encode(input) {
    try {
      return encodeURIComponent(input);
    } catch (e) {
      return null;
    }
  }

  /**
   * Simple query string parser.
   *
   * @param {String} query The query string that needs to be parsed.
   * @returns {Object}
   * @api public
   */
  function querystring(query) {
    var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;
    while (part = parser.exec(query)) {
      var key = decode(part[1]),
        value = decode(part[2]);

      //
      // Prevent overriding of existing properties. This ensures that build-in
      // methods like `toString` or __proto__ are not overriden by malicious
      // querystrings.
      //
      // In the case if failed decoding, we want to omit the key/value pairs
      // from the result.
      //
      if (key === null || value === null || key in result) continue;
      result[key] = value;
    }
    return result;
  }

  /**
   * Transform a query string to an object.
   *
   * @param {Object} obj Object that should be transformed.
   * @param {String} prefix Optional prefix.
   * @returns {String}
   * @api public
   */
  function querystringify(obj, prefix) {
    prefix = prefix || '';
    var pairs = [],
      value,
      key;

    //
    // Optionally prefix with a '?' if needed
    //
    if ('string' !== typeof prefix) prefix = '?';
    for (key in obj) {
      if (has.call(obj, key)) {
        value = obj[key];

        //
        // Edge cases where we actually want to encode the value to an empty
        // string instead of the stringified value.
        //
        if (!value && (value === null || value === undef || isNaN(value))) {
          value = '';
        }
        key = encode(key);
        value = encode(value);

        //
        // If we failed to encode the strings, we should bail out as we don't
        // want to add invalid strings to the query.
        //
        if (key === null || value === null) continue;
        pairs.push(key + '=' + value);
      }
    }
    return pairs.length ? prefix + pairs.join('&') : '';
  }

  //
  // Expose the module.
  //
  var stringify = querystringify;
  var parse$1 = querystring;
  var querystringify_1 = {
    stringify: stringify,
    parse: parse$1
  };

  var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
    CRHTLF = /[\n\r\t]/g,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    port = /:\d+$/,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
    windowsDriveLetter = /^[a-zA-Z]:/;

  /**
   * Remove control characters and whitespace from the beginning of a string.
   *
   * @param {Object|String} str String to trim.
   * @returns {String} A new string representing `str` stripped of control
   *     characters and whitespace from its beginning.
   * @public
   */
  function trimLeft(str) {
    return (str ? str : '').toString().replace(controlOrWhitespace, '');
  }

  /**
   * These are the parse rules for the URL parser, it informs the parser
   * about:
   *
   * 0. The char it Needs to parse, if it's a string it should be done using
   *    indexOf, RegExp using exec and NaN means set as current value.
   * 1. The property we should set when parsing this value.
   * 2. Indication if it's backwards or forward parsing, when set as number it's
   *    the value of extra chars that should be split off.
   * 3. Inherit from location if non existing in the parser.
   * 4. `toLowerCase` the resulting value.
   */
  var rules = [['#', 'hash'],
  // Extract from the back.
  ['?', 'query'],
  // Extract from the back.
  function sanitize(address, url) {
    // Sanitize what is left of the address
    return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
  }, ['/', 'pathname'],
  // Extract from the back.
  ['@', 'auth', 1],
  // Extract from the front.
  [NaN, 'host', undefined, 1, 1],
  // Set left over value.
  [/:(\d*)$/, 'port', undefined, 1],
  // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1] // Set left over.
  ];

  /**
   * These properties should not be copied or inherited from. This is only needed
   * for all non blob URL's as a blob URL does not include a hash, only the
   * origin.
   *
   * @type {Object}
   * @private
   */
  var ignore = {
    hash: 1,
    query: 1
  };

  /**
   * The location object differs when your code is loaded through a normal page,
   * Worker or through a worker using a blob. And with the blobble begins the
   * trouble as the location object will contain the URL of the blob, not the
   * location of the page where our code is loaded in. The actual origin is
   * encoded in the `pathname` so we can thankfully generate a good "default"
   * location from it so we can generate proper relative URL's again.
   *
   * @param {Object|String} loc Optional default location object.
   * @returns {Object} lolcation object.
   * @public
   */
  function lolcation(loc) {
    var globalVar;
    if (typeof window !== 'undefined') globalVar = window;else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
    var location = globalVar.location || {};
    loc = loc || location;
    var finaldestination = {},
      type = _typeof(loc),
      key;
    if ('blob:' === loc.protocol) {
      finaldestination = new Url(unescape(loc.pathname), {});
    } else if ('string' === type) {
      finaldestination = new Url(loc, {});
      for (key in ignore) delete finaldestination[key];
    } else if ('object' === type) {
      for (key in loc) {
        if (key in ignore) continue;
        finaldestination[key] = loc[key];
      }
      if (finaldestination.slashes === undefined) {
        finaldestination.slashes = slashes.test(loc.href);
      }
    }
    return finaldestination;
  }

  /**
   * Check whether a protocol scheme is special.
   *
   * @param {String} The protocol scheme of the URL
   * @return {Boolean} `true` if the protocol scheme is special, else `false`
   * @private
   */
  function isSpecial(scheme) {
    return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
  }

  /**
   * @typedef ProtocolExtract
   * @type Object
   * @property {String} protocol Protocol matched in the URL, in lowercase.
   * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
   * @property {String} rest Rest of the URL that is not part of the protocol.
   */

  /**
   * Extract protocol information from a URL with/without double slash ("//").
   *
   * @param {String} address URL we want to extract from.
   * @param {Object} location
   * @return {ProtocolExtract} Extracted information.
   * @private
   */
  function extractProtocol(address, location) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    location = location || {};
    var match = protocolre.exec(address);
    var protocol = match[1] ? match[1].toLowerCase() : '';
    var forwardSlashes = !!match[2];
    var otherSlashes = !!match[3];
    var slashesCount = 0;
    var rest;
    if (forwardSlashes) {
      if (otherSlashes) {
        rest = match[2] + match[3] + match[4];
        slashesCount = match[2].length + match[3].length;
      } else {
        rest = match[2] + match[4];
        slashesCount = match[2].length;
      }
    } else {
      if (otherSlashes) {
        rest = match[3] + match[4];
        slashesCount = match[3].length;
      } else {
        rest = match[4];
      }
    }
    if (protocol === 'file:') {
      if (slashesCount >= 2) {
        rest = rest.slice(2);
      }
    } else if (isSpecial(protocol)) {
      rest = match[4];
    } else if (protocol) {
      if (forwardSlashes) {
        rest = rest.slice(2);
      }
    } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
      rest = match[4];
    }
    return {
      protocol: protocol,
      slashes: forwardSlashes || isSpecial(protocol),
      slashesCount: slashesCount,
      rest: rest
    };
  }

  /**
   * Resolve a relative URL pathname against a base URL pathname.
   *
   * @param {String} relative Pathname of the relative URL.
   * @param {String} base Pathname of the base URL.
   * @return {String} Resolved pathname.
   * @private
   */
  function resolve(relative, base) {
    if (relative === '') return base;
    var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;
    while (i--) {
      if (path[i] === '.') {
        path.splice(i, 1);
      } else if (path[i] === '..') {
        path.splice(i, 1);
        up++;
      } else if (up) {
        if (i === 0) unshift = true;
        path.splice(i, 1);
        up--;
      }
    }
    if (unshift) path.unshift('');
    if (last === '.' || last === '..') path.push('');
    return path.join('/');
  }

  /**
   * The actual URL instance. Instead of returning an object we've opted-in to
   * create an actual constructor as it's much more memory efficient and
   * faster and it pleases my OCD.
   *
   * It is worth noting that we should not use `URL` as class name to prevent
   * clashes with the global URL instance that got introduced in browsers.
   *
   * @constructor
   * @param {String} address URL we want to parse.
   * @param {Object|String} [location] Location defaults for relative paths.
   * @param {Boolean|Function} [parser] Parser for the query string.
   * @private
   */
  function Url(address, location, parser) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    if (!(this instanceof Url)) {
      return new Url(address, location, parser);
    }
    var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = _typeof(location),
      url = this,
      i = 0;

    //
    // The following if statements allows this module two have compatibility with
    // 2 different API:
    //
    // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
    //    where the boolean indicates that the query string should also be parsed.
    //
    // 2. The `URL` interface of the browser which accepts a URL, object as
    //    arguments. The supplied object will be used as default values / fall-back
    //    for relative paths.
    //
    if ('object' !== type && 'string' !== type) {
      parser = location;
      location = null;
    }
    if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;
    location = lolcation(location);

    //
    // Extract protocol information before running the instructions.
    //
    extracted = extractProtocol(address || '', location);
    relative = !extracted.protocol && !extracted.slashes;
    url.slashes = extracted.slashes || relative && location.slashes;
    url.protocol = extracted.protocol || location.protocol || '';
    address = extracted.rest;

    //
    // When the authority component is absent the URL starts with a path
    // component.
    //
    if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
      instructions[3] = [/(.*)/, 'pathname'];
    }
    for (; i < instructions.length; i++) {
      instruction = instructions[i];
      if (typeof instruction === 'function') {
        address = instruction(address, url);
        continue;
      }
      parse = instruction[0];
      key = instruction[1];
      if (parse !== parse) {
        url[key] = address;
      } else if ('string' === typeof parse) {
        index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);
        if (~index) {
          if ('number' === typeof instruction[2]) {
            url[key] = address.slice(0, index);
            address = address.slice(index + instruction[2]);
          } else {
            url[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else if (index = parse.exec(address)) {
        url[key] = index[1];
        address = address.slice(0, index.index);
      }
      url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

      //
      // Hostname, host and protocol should be lowercased so they can be used to
      // create a proper `origin`.
      //
      if (instruction[4]) url[key] = url[key].toLowerCase();
    }

    //
    // Also parse the supplied query string in to an object. If we're supplied
    // with a custom parser as function use that instead of the default build-in
    // parser.
    //
    if (parser) url.query = parser(url.query);

    //
    // If the URL is relative, resolve the pathname against the base URL.
    //
    if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
      url.pathname = resolve(url.pathname, location.pathname);
    }

    //
    // Default to a / for pathname if none exists. This normalizes the URL
    // to always have a /
    //
    if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
      url.pathname = '/' + url.pathname;
    }

    //
    // We should not add port numbers if they are already the default port number
    // for a given protocol. As the host also contains the port number we're going
    // override it with the hostname which contains no port number.
    //
    if (!requiresPort(url.port, url.protocol)) {
      url.host = url.hostname;
      url.port = '';
    }

    //
    // Parse down the `auth` for the username and password.
    //
    url.username = url.password = '';
    if (url.auth) {
      index = url.auth.indexOf(':');
      if (~index) {
        url.username = url.auth.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));
        url.password = url.auth.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(url.auth));
      }
      url.auth = url.password ? url.username + ':' + url.password : url.username;
    }
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';

    //
    // The href is just the compiled result.
    //
    url.href = url.toString();
  }

  /**
   * This is convenience method for changing properties in the URL instance to
   * insure that they all propagate correctly.
   *
   * @param {String} part          Property we need to adjust.
   * @param {Mixed} value          The newly assigned value.
   * @param {Boolean|Function} fn  When setting the query, it will be the function
   *                               used to parse the query.
   *                               When setting the protocol, double slash will be
   *                               removed from the final url if it is true.
   * @returns {URL} URL instance for chaining.
   * @public
   */
  function set(part, value, fn) {
    var url = this;
    switch (part) {
      case 'query':
        if ('string' === typeof value && value.length) {
          value = (fn || querystringify_1.parse)(value);
        }
        url[part] = value;
        break;
      case 'port':
        url[part] = value;
        if (!requiresPort(value, url.protocol)) {
          url.host = url.hostname;
          url[part] = '';
        } else if (value) {
          url.host = url.hostname + ':' + value;
        }
        break;
      case 'hostname':
        url[part] = value;
        if (url.port) value += ':' + url.port;
        url.host = value;
        break;
      case 'host':
        url[part] = value;
        if (port.test(value)) {
          value = value.split(':');
          url.port = value.pop();
          url.hostname = value.join(':');
        } else {
          url.hostname = value;
          url.port = '';
        }
        break;
      case 'protocol':
        url.protocol = value.toLowerCase();
        url.slashes = !fn;
        break;
      case 'pathname':
      case 'hash':
        if (value) {
          var _char = part === 'pathname' ? '/' : '#';
          url[part] = value.charAt(0) !== _char ? _char + value : value;
        } else {
          url[part] = value;
        }
        break;
      case 'username':
      case 'password':
        url[part] = encodeURIComponent(value);
        break;
      case 'auth':
        var index = value.indexOf(':');
        if (~index) {
          url.username = value.slice(0, index);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = value.slice(index + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(value));
        }
    }
    for (var i = 0; i < rules.length; i++) {
      var ins = rules[i];
      if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
    }
    url.auth = url.password ? url.username + ':' + url.password : url.username;
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
    url.href = url.toString();
    return url;
  }

  /**
   * Transform the properties back in to a valid and full URL string.
   *
   * @param {Function} stringify Optional query stringify function.
   * @returns {String} Compiled version of the URL.
   * @public
   */
  function toString$1(stringify) {
    if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;
    var query,
      url = this,
      host = url.host,
      protocol = url.protocol;
    if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
    var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');
    if (url.username) {
      result += url.username;
      if (url.password) result += ':' + url.password;
      result += '@';
    } else if (url.password) {
      result += ':' + url.password;
      result += '@';
    } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') {
      //
      // Add back the empty userinfo, otherwise the original invalid URL
      // might be transformed into a valid one with `url.pathname` as host.
      //
      result += '@';
    }

    //
    // Trailing colon is removed from `url.host` when it is parsed. If it still
    // ends with a colon, then add back the trailing colon that was removed. This
    // prevents an invalid URL from being transformed into a valid one.
    //
    if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) {
      host += ':';
    }
    result += host + url.pathname;
    query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
    if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
    if (url.hash) result += url.hash;
    return result;
  }
  Url.prototype = {
    set: set,
    toString: toString$1
  };

  //
  // Expose the URL parser and some additional properties that might be useful for
  // others or testing.
  //
  Url.extractProtocol = extractProtocol;
  Url.location = lolcation;
  Url.trimLeft = trimLeft;
  Url.qs = querystringify_1;
  var urlParse = Url;

  var require$$0 = [
  	"ac",
  	"com.ac",
  	"edu.ac",
  	"gov.ac",
  	"net.ac",
  	"mil.ac",
  	"org.ac",
  	"ad",
  	"nom.ad",
  	"ae",
  	"co.ae",
  	"net.ae",
  	"org.ae",
  	"sch.ae",
  	"ac.ae",
  	"gov.ae",
  	"mil.ae",
  	"aero",
  	"accident-investigation.aero",
  	"accident-prevention.aero",
  	"aerobatic.aero",
  	"aeroclub.aero",
  	"aerodrome.aero",
  	"agents.aero",
  	"aircraft.aero",
  	"airline.aero",
  	"airport.aero",
  	"air-surveillance.aero",
  	"airtraffic.aero",
  	"air-traffic-control.aero",
  	"ambulance.aero",
  	"amusement.aero",
  	"association.aero",
  	"author.aero",
  	"ballooning.aero",
  	"broker.aero",
  	"caa.aero",
  	"cargo.aero",
  	"catering.aero",
  	"certification.aero",
  	"championship.aero",
  	"charter.aero",
  	"civilaviation.aero",
  	"club.aero",
  	"conference.aero",
  	"consultant.aero",
  	"consulting.aero",
  	"control.aero",
  	"council.aero",
  	"crew.aero",
  	"design.aero",
  	"dgca.aero",
  	"educator.aero",
  	"emergency.aero",
  	"engine.aero",
  	"engineer.aero",
  	"entertainment.aero",
  	"equipment.aero",
  	"exchange.aero",
  	"express.aero",
  	"federation.aero",
  	"flight.aero",
  	"fuel.aero",
  	"gliding.aero",
  	"government.aero",
  	"groundhandling.aero",
  	"group.aero",
  	"hanggliding.aero",
  	"homebuilt.aero",
  	"insurance.aero",
  	"journal.aero",
  	"journalist.aero",
  	"leasing.aero",
  	"logistics.aero",
  	"magazine.aero",
  	"maintenance.aero",
  	"media.aero",
  	"microlight.aero",
  	"modelling.aero",
  	"navigation.aero",
  	"parachuting.aero",
  	"paragliding.aero",
  	"passenger-association.aero",
  	"pilot.aero",
  	"press.aero",
  	"production.aero",
  	"recreation.aero",
  	"repbody.aero",
  	"res.aero",
  	"research.aero",
  	"rotorcraft.aero",
  	"safety.aero",
  	"scientist.aero",
  	"services.aero",
  	"show.aero",
  	"skydiving.aero",
  	"software.aero",
  	"student.aero",
  	"trader.aero",
  	"trading.aero",
  	"trainer.aero",
  	"union.aero",
  	"workinggroup.aero",
  	"works.aero",
  	"af",
  	"gov.af",
  	"com.af",
  	"org.af",
  	"net.af",
  	"edu.af",
  	"ag",
  	"com.ag",
  	"org.ag",
  	"net.ag",
  	"co.ag",
  	"nom.ag",
  	"ai",
  	"off.ai",
  	"com.ai",
  	"net.ai",
  	"org.ai",
  	"al",
  	"com.al",
  	"edu.al",
  	"gov.al",
  	"mil.al",
  	"net.al",
  	"org.al",
  	"am",
  	"co.am",
  	"com.am",
  	"commune.am",
  	"net.am",
  	"org.am",
  	"ao",
  	"ed.ao",
  	"gv.ao",
  	"og.ao",
  	"co.ao",
  	"pb.ao",
  	"it.ao",
  	"aq",
  	"ar",
  	"bet.ar",
  	"com.ar",
  	"coop.ar",
  	"edu.ar",
  	"gob.ar",
  	"gov.ar",
  	"int.ar",
  	"mil.ar",
  	"musica.ar",
  	"mutual.ar",
  	"net.ar",
  	"org.ar",
  	"senasa.ar",
  	"tur.ar",
  	"arpa",
  	"e164.arpa",
  	"in-addr.arpa",
  	"ip6.arpa",
  	"iris.arpa",
  	"uri.arpa",
  	"urn.arpa",
  	"as",
  	"gov.as",
  	"asia",
  	"at",
  	"ac.at",
  	"co.at",
  	"gv.at",
  	"or.at",
  	"sth.ac.at",
  	"au",
  	"com.au",
  	"net.au",
  	"org.au",
  	"edu.au",
  	"gov.au",
  	"asn.au",
  	"id.au",
  	"info.au",
  	"conf.au",
  	"oz.au",
  	"act.au",
  	"nsw.au",
  	"nt.au",
  	"qld.au",
  	"sa.au",
  	"tas.au",
  	"vic.au",
  	"wa.au",
  	"act.edu.au",
  	"catholic.edu.au",
  	"nsw.edu.au",
  	"nt.edu.au",
  	"qld.edu.au",
  	"sa.edu.au",
  	"tas.edu.au",
  	"vic.edu.au",
  	"wa.edu.au",
  	"qld.gov.au",
  	"sa.gov.au",
  	"tas.gov.au",
  	"vic.gov.au",
  	"wa.gov.au",
  	"schools.nsw.edu.au",
  	"aw",
  	"com.aw",
  	"ax",
  	"az",
  	"com.az",
  	"net.az",
  	"int.az",
  	"gov.az",
  	"org.az",
  	"edu.az",
  	"info.az",
  	"pp.az",
  	"mil.az",
  	"name.az",
  	"pro.az",
  	"biz.az",
  	"ba",
  	"com.ba",
  	"edu.ba",
  	"gov.ba",
  	"mil.ba",
  	"net.ba",
  	"org.ba",
  	"bb",
  	"biz.bb",
  	"co.bb",
  	"com.bb",
  	"edu.bb",
  	"gov.bb",
  	"info.bb",
  	"net.bb",
  	"org.bb",
  	"store.bb",
  	"tv.bb",
  	"*.bd",
  	"be",
  	"ac.be",
  	"bf",
  	"gov.bf",
  	"bg",
  	"a.bg",
  	"b.bg",
  	"c.bg",
  	"d.bg",
  	"e.bg",
  	"f.bg",
  	"g.bg",
  	"h.bg",
  	"i.bg",
  	"j.bg",
  	"k.bg",
  	"l.bg",
  	"m.bg",
  	"n.bg",
  	"o.bg",
  	"p.bg",
  	"q.bg",
  	"r.bg",
  	"s.bg",
  	"t.bg",
  	"u.bg",
  	"v.bg",
  	"w.bg",
  	"x.bg",
  	"y.bg",
  	"z.bg",
  	"0.bg",
  	"1.bg",
  	"2.bg",
  	"3.bg",
  	"4.bg",
  	"5.bg",
  	"6.bg",
  	"7.bg",
  	"8.bg",
  	"9.bg",
  	"bh",
  	"com.bh",
  	"edu.bh",
  	"net.bh",
  	"org.bh",
  	"gov.bh",
  	"bi",
  	"co.bi",
  	"com.bi",
  	"edu.bi",
  	"or.bi",
  	"org.bi",
  	"biz",
  	"bj",
  	"asso.bj",
  	"barreau.bj",
  	"gouv.bj",
  	"bm",
  	"com.bm",
  	"edu.bm",
  	"gov.bm",
  	"net.bm",
  	"org.bm",
  	"bn",
  	"com.bn",
  	"edu.bn",
  	"gov.bn",
  	"net.bn",
  	"org.bn",
  	"bo",
  	"com.bo",
  	"edu.bo",
  	"gob.bo",
  	"int.bo",
  	"org.bo",
  	"net.bo",
  	"mil.bo",
  	"tv.bo",
  	"web.bo",
  	"academia.bo",
  	"agro.bo",
  	"arte.bo",
  	"blog.bo",
  	"bolivia.bo",
  	"ciencia.bo",
  	"cooperativa.bo",
  	"democracia.bo",
  	"deporte.bo",
  	"ecologia.bo",
  	"economia.bo",
  	"empresa.bo",
  	"indigena.bo",
  	"industria.bo",
  	"info.bo",
  	"medicina.bo",
  	"movimiento.bo",
  	"musica.bo",
  	"natural.bo",
  	"nombre.bo",
  	"noticias.bo",
  	"patria.bo",
  	"politica.bo",
  	"profesional.bo",
  	"plurinacional.bo",
  	"pueblo.bo",
  	"revista.bo",
  	"salud.bo",
  	"tecnologia.bo",
  	"tksat.bo",
  	"transporte.bo",
  	"wiki.bo",
  	"br",
  	"9guacu.br",
  	"abc.br",
  	"adm.br",
  	"adv.br",
  	"agr.br",
  	"aju.br",
  	"am.br",
  	"anani.br",
  	"aparecida.br",
  	"app.br",
  	"arq.br",
  	"art.br",
  	"ato.br",
  	"b.br",
  	"barueri.br",
  	"belem.br",
  	"bhz.br",
  	"bib.br",
  	"bio.br",
  	"blog.br",
  	"bmd.br",
  	"boavista.br",
  	"bsb.br",
  	"campinagrande.br",
  	"campinas.br",
  	"caxias.br",
  	"cim.br",
  	"cng.br",
  	"cnt.br",
  	"com.br",
  	"contagem.br",
  	"coop.br",
  	"coz.br",
  	"cri.br",
  	"cuiaba.br",
  	"curitiba.br",
  	"def.br",
  	"des.br",
  	"det.br",
  	"dev.br",
  	"ecn.br",
  	"eco.br",
  	"edu.br",
  	"emp.br",
  	"enf.br",
  	"eng.br",
  	"esp.br",
  	"etc.br",
  	"eti.br",
  	"far.br",
  	"feira.br",
  	"flog.br",
  	"floripa.br",
  	"fm.br",
  	"fnd.br",
  	"fortal.br",
  	"fot.br",
  	"foz.br",
  	"fst.br",
  	"g12.br",
  	"geo.br",
  	"ggf.br",
  	"goiania.br",
  	"gov.br",
  	"ac.gov.br",
  	"al.gov.br",
  	"am.gov.br",
  	"ap.gov.br",
  	"ba.gov.br",
  	"ce.gov.br",
  	"df.gov.br",
  	"es.gov.br",
  	"go.gov.br",
  	"ma.gov.br",
  	"mg.gov.br",
  	"ms.gov.br",
  	"mt.gov.br",
  	"pa.gov.br",
  	"pb.gov.br",
  	"pe.gov.br",
  	"pi.gov.br",
  	"pr.gov.br",
  	"rj.gov.br",
  	"rn.gov.br",
  	"ro.gov.br",
  	"rr.gov.br",
  	"rs.gov.br",
  	"sc.gov.br",
  	"se.gov.br",
  	"sp.gov.br",
  	"to.gov.br",
  	"gru.br",
  	"imb.br",
  	"ind.br",
  	"inf.br",
  	"jab.br",
  	"jampa.br",
  	"jdf.br",
  	"joinville.br",
  	"jor.br",
  	"jus.br",
  	"leg.br",
  	"lel.br",
  	"log.br",
  	"londrina.br",
  	"macapa.br",
  	"maceio.br",
  	"manaus.br",
  	"maringa.br",
  	"mat.br",
  	"med.br",
  	"mil.br",
  	"morena.br",
  	"mp.br",
  	"mus.br",
  	"natal.br",
  	"net.br",
  	"niteroi.br",
  	"*.nom.br",
  	"not.br",
  	"ntr.br",
  	"odo.br",
  	"ong.br",
  	"org.br",
  	"osasco.br",
  	"palmas.br",
  	"poa.br",
  	"ppg.br",
  	"pro.br",
  	"psc.br",
  	"psi.br",
  	"pvh.br",
  	"qsl.br",
  	"radio.br",
  	"rec.br",
  	"recife.br",
  	"rep.br",
  	"ribeirao.br",
  	"rio.br",
  	"riobranco.br",
  	"riopreto.br",
  	"salvador.br",
  	"sampa.br",
  	"santamaria.br",
  	"santoandre.br",
  	"saobernardo.br",
  	"saogonca.br",
  	"seg.br",
  	"sjc.br",
  	"slg.br",
  	"slz.br",
  	"sorocaba.br",
  	"srv.br",
  	"taxi.br",
  	"tc.br",
  	"tec.br",
  	"teo.br",
  	"the.br",
  	"tmp.br",
  	"trd.br",
  	"tur.br",
  	"tv.br",
  	"udi.br",
  	"vet.br",
  	"vix.br",
  	"vlog.br",
  	"wiki.br",
  	"zlg.br",
  	"bs",
  	"com.bs",
  	"net.bs",
  	"org.bs",
  	"edu.bs",
  	"gov.bs",
  	"bt",
  	"com.bt",
  	"edu.bt",
  	"gov.bt",
  	"net.bt",
  	"org.bt",
  	"bv",
  	"bw",
  	"co.bw",
  	"org.bw",
  	"by",
  	"gov.by",
  	"mil.by",
  	"com.by",
  	"of.by",
  	"bz",
  	"com.bz",
  	"net.bz",
  	"org.bz",
  	"edu.bz",
  	"gov.bz",
  	"ca",
  	"ab.ca",
  	"bc.ca",
  	"mb.ca",
  	"nb.ca",
  	"nf.ca",
  	"nl.ca",
  	"ns.ca",
  	"nt.ca",
  	"nu.ca",
  	"on.ca",
  	"pe.ca",
  	"qc.ca",
  	"sk.ca",
  	"yk.ca",
  	"gc.ca",
  	"cat",
  	"cc",
  	"cd",
  	"gov.cd",
  	"cf",
  	"cg",
  	"ch",
  	"ci",
  	"org.ci",
  	"or.ci",
  	"com.ci",
  	"co.ci",
  	"edu.ci",
  	"ed.ci",
  	"ac.ci",
  	"net.ci",
  	"go.ci",
  	"asso.ci",
  	"aéroport.ci",
  	"int.ci",
  	"presse.ci",
  	"md.ci",
  	"gouv.ci",
  	"*.ck",
  	"!www.ck",
  	"cl",
  	"co.cl",
  	"gob.cl",
  	"gov.cl",
  	"mil.cl",
  	"cm",
  	"co.cm",
  	"com.cm",
  	"gov.cm",
  	"net.cm",
  	"cn",
  	"ac.cn",
  	"com.cn",
  	"edu.cn",
  	"gov.cn",
  	"net.cn",
  	"org.cn",
  	"mil.cn",
  	"公司.cn",
  	"网络.cn",
  	"網絡.cn",
  	"ah.cn",
  	"bj.cn",
  	"cq.cn",
  	"fj.cn",
  	"gd.cn",
  	"gs.cn",
  	"gz.cn",
  	"gx.cn",
  	"ha.cn",
  	"hb.cn",
  	"he.cn",
  	"hi.cn",
  	"hl.cn",
  	"hn.cn",
  	"jl.cn",
  	"js.cn",
  	"jx.cn",
  	"ln.cn",
  	"nm.cn",
  	"nx.cn",
  	"qh.cn",
  	"sc.cn",
  	"sd.cn",
  	"sh.cn",
  	"sn.cn",
  	"sx.cn",
  	"tj.cn",
  	"xj.cn",
  	"xz.cn",
  	"yn.cn",
  	"zj.cn",
  	"hk.cn",
  	"mo.cn",
  	"tw.cn",
  	"co",
  	"arts.co",
  	"com.co",
  	"edu.co",
  	"firm.co",
  	"gov.co",
  	"info.co",
  	"int.co",
  	"mil.co",
  	"net.co",
  	"nom.co",
  	"org.co",
  	"rec.co",
  	"web.co",
  	"com",
  	"coop",
  	"cr",
  	"ac.cr",
  	"co.cr",
  	"ed.cr",
  	"fi.cr",
  	"go.cr",
  	"or.cr",
  	"sa.cr",
  	"cu",
  	"com.cu",
  	"edu.cu",
  	"org.cu",
  	"net.cu",
  	"gov.cu",
  	"inf.cu",
  	"cv",
  	"com.cv",
  	"edu.cv",
  	"int.cv",
  	"nome.cv",
  	"org.cv",
  	"cw",
  	"com.cw",
  	"edu.cw",
  	"net.cw",
  	"org.cw",
  	"cx",
  	"gov.cx",
  	"cy",
  	"ac.cy",
  	"biz.cy",
  	"com.cy",
  	"ekloges.cy",
  	"gov.cy",
  	"ltd.cy",
  	"mil.cy",
  	"net.cy",
  	"org.cy",
  	"press.cy",
  	"pro.cy",
  	"tm.cy",
  	"cz",
  	"de",
  	"dj",
  	"dk",
  	"dm",
  	"com.dm",
  	"net.dm",
  	"org.dm",
  	"edu.dm",
  	"gov.dm",
  	"do",
  	"art.do",
  	"com.do",
  	"edu.do",
  	"gob.do",
  	"gov.do",
  	"mil.do",
  	"net.do",
  	"org.do",
  	"sld.do",
  	"web.do",
  	"dz",
  	"art.dz",
  	"asso.dz",
  	"com.dz",
  	"edu.dz",
  	"gov.dz",
  	"org.dz",
  	"net.dz",
  	"pol.dz",
  	"soc.dz",
  	"tm.dz",
  	"ec",
  	"com.ec",
  	"info.ec",
  	"net.ec",
  	"fin.ec",
  	"k12.ec",
  	"med.ec",
  	"pro.ec",
  	"org.ec",
  	"edu.ec",
  	"gov.ec",
  	"gob.ec",
  	"mil.ec",
  	"edu",
  	"ee",
  	"edu.ee",
  	"gov.ee",
  	"riik.ee",
  	"lib.ee",
  	"med.ee",
  	"com.ee",
  	"pri.ee",
  	"aip.ee",
  	"org.ee",
  	"fie.ee",
  	"eg",
  	"com.eg",
  	"edu.eg",
  	"eun.eg",
  	"gov.eg",
  	"mil.eg",
  	"name.eg",
  	"net.eg",
  	"org.eg",
  	"sci.eg",
  	"*.er",
  	"es",
  	"com.es",
  	"nom.es",
  	"org.es",
  	"gob.es",
  	"edu.es",
  	"et",
  	"com.et",
  	"gov.et",
  	"org.et",
  	"edu.et",
  	"biz.et",
  	"name.et",
  	"info.et",
  	"net.et",
  	"eu",
  	"fi",
  	"aland.fi",
  	"fj",
  	"ac.fj",
  	"biz.fj",
  	"com.fj",
  	"gov.fj",
  	"info.fj",
  	"mil.fj",
  	"name.fj",
  	"net.fj",
  	"org.fj",
  	"pro.fj",
  	"*.fk",
  	"com.fm",
  	"edu.fm",
  	"net.fm",
  	"org.fm",
  	"fm",
  	"fo",
  	"fr",
  	"asso.fr",
  	"com.fr",
  	"gouv.fr",
  	"nom.fr",
  	"prd.fr",
  	"tm.fr",
  	"aeroport.fr",
  	"avocat.fr",
  	"avoues.fr",
  	"cci.fr",
  	"chambagri.fr",
  	"chirurgiens-dentistes.fr",
  	"experts-comptables.fr",
  	"geometre-expert.fr",
  	"greta.fr",
  	"huissier-justice.fr",
  	"medecin.fr",
  	"notaires.fr",
  	"pharmacien.fr",
  	"port.fr",
  	"veterinaire.fr",
  	"ga",
  	"gb",
  	"edu.gd",
  	"gov.gd",
  	"gd",
  	"ge",
  	"com.ge",
  	"edu.ge",
  	"gov.ge",
  	"org.ge",
  	"mil.ge",
  	"net.ge",
  	"pvt.ge",
  	"gf",
  	"gg",
  	"co.gg",
  	"net.gg",
  	"org.gg",
  	"gh",
  	"com.gh",
  	"edu.gh",
  	"gov.gh",
  	"org.gh",
  	"mil.gh",
  	"gi",
  	"com.gi",
  	"ltd.gi",
  	"gov.gi",
  	"mod.gi",
  	"edu.gi",
  	"org.gi",
  	"gl",
  	"co.gl",
  	"com.gl",
  	"edu.gl",
  	"net.gl",
  	"org.gl",
  	"gm",
  	"gn",
  	"ac.gn",
  	"com.gn",
  	"edu.gn",
  	"gov.gn",
  	"org.gn",
  	"net.gn",
  	"gov",
  	"gp",
  	"com.gp",
  	"net.gp",
  	"mobi.gp",
  	"edu.gp",
  	"org.gp",
  	"asso.gp",
  	"gq",
  	"gr",
  	"com.gr",
  	"edu.gr",
  	"net.gr",
  	"org.gr",
  	"gov.gr",
  	"gs",
  	"gt",
  	"com.gt",
  	"edu.gt",
  	"gob.gt",
  	"ind.gt",
  	"mil.gt",
  	"net.gt",
  	"org.gt",
  	"gu",
  	"com.gu",
  	"edu.gu",
  	"gov.gu",
  	"guam.gu",
  	"info.gu",
  	"net.gu",
  	"org.gu",
  	"web.gu",
  	"gw",
  	"gy",
  	"co.gy",
  	"com.gy",
  	"edu.gy",
  	"gov.gy",
  	"net.gy",
  	"org.gy",
  	"hk",
  	"com.hk",
  	"edu.hk",
  	"gov.hk",
  	"idv.hk",
  	"net.hk",
  	"org.hk",
  	"公司.hk",
  	"教育.hk",
  	"敎育.hk",
  	"政府.hk",
  	"個人.hk",
  	"个��.hk",
  	"箇人.hk",
  	"網络.hk",
  	"网络.hk",
  	"组織.hk",
  	"網絡.hk",
  	"网絡.hk",
  	"组织.hk",
  	"組織.hk",
  	"組织.hk",
  	"hm",
  	"hn",
  	"com.hn",
  	"edu.hn",
  	"org.hn",
  	"net.hn",
  	"mil.hn",
  	"gob.hn",
  	"hr",
  	"iz.hr",
  	"from.hr",
  	"name.hr",
  	"com.hr",
  	"ht",
  	"com.ht",
  	"shop.ht",
  	"firm.ht",
  	"info.ht",
  	"adult.ht",
  	"net.ht",
  	"pro.ht",
  	"org.ht",
  	"med.ht",
  	"art.ht",
  	"coop.ht",
  	"pol.ht",
  	"asso.ht",
  	"edu.ht",
  	"rel.ht",
  	"gouv.ht",
  	"perso.ht",
  	"hu",
  	"co.hu",
  	"info.hu",
  	"org.hu",
  	"priv.hu",
  	"sport.hu",
  	"tm.hu",
  	"2000.hu",
  	"agrar.hu",
  	"bolt.hu",
  	"casino.hu",
  	"city.hu",
  	"erotica.hu",
  	"erotika.hu",
  	"film.hu",
  	"forum.hu",
  	"games.hu",
  	"hotel.hu",
  	"ingatlan.hu",
  	"jogasz.hu",
  	"konyvelo.hu",
  	"lakas.hu",
  	"media.hu",
  	"news.hu",
  	"reklam.hu",
  	"sex.hu",
  	"shop.hu",
  	"suli.hu",
  	"szex.hu",
  	"tozsde.hu",
  	"utazas.hu",
  	"video.hu",
  	"id",
  	"ac.id",
  	"biz.id",
  	"co.id",
  	"desa.id",
  	"go.id",
  	"mil.id",
  	"my.id",
  	"net.id",
  	"or.id",
  	"ponpes.id",
  	"sch.id",
  	"web.id",
  	"ie",
  	"gov.ie",
  	"il",
  	"ac.il",
  	"co.il",
  	"gov.il",
  	"idf.il",
  	"k12.il",
  	"muni.il",
  	"net.il",
  	"org.il",
  	"im",
  	"ac.im",
  	"co.im",
  	"com.im",
  	"ltd.co.im",
  	"net.im",
  	"org.im",
  	"plc.co.im",
  	"tt.im",
  	"tv.im",
  	"in",
  	"co.in",
  	"firm.in",
  	"net.in",
  	"org.in",
  	"gen.in",
  	"ind.in",
  	"nic.in",
  	"ac.in",
  	"edu.in",
  	"res.in",
  	"gov.in",
  	"mil.in",
  	"info",
  	"int",
  	"eu.int",
  	"io",
  	"com.io",
  	"iq",
  	"gov.iq",
  	"edu.iq",
  	"mil.iq",
  	"com.iq",
  	"org.iq",
  	"net.iq",
  	"ir",
  	"ac.ir",
  	"co.ir",
  	"gov.ir",
  	"id.ir",
  	"net.ir",
  	"org.ir",
  	"sch.ir",
  	"ایران.ir",
  	"ايران.ir",
  	"is",
  	"net.is",
  	"com.is",
  	"edu.is",
  	"gov.is",
  	"org.is",
  	"int.is",
  	"it",
  	"gov.it",
  	"edu.it",
  	"abr.it",
  	"abruzzo.it",
  	"aosta-valley.it",
  	"aostavalley.it",
  	"bas.it",
  	"basilicata.it",
  	"cal.it",
  	"calabria.it",
  	"cam.it",
  	"campania.it",
  	"emilia-romagna.it",
  	"emiliaromagna.it",
  	"emr.it",
  	"friuli-v-giulia.it",
  	"friuli-ve-giulia.it",
  	"friuli-vegiulia.it",
  	"friuli-venezia-giulia.it",
  	"friuli-veneziagiulia.it",
  	"friuli-vgiulia.it",
  	"friuliv-giulia.it",
  	"friulive-giulia.it",
  	"friulivegiulia.it",
  	"friulivenezia-giulia.it",
  	"friuliveneziagiulia.it",
  	"friulivgiulia.it",
  	"fvg.it",
  	"laz.it",
  	"lazio.it",
  	"lig.it",
  	"liguria.it",
  	"lom.it",
  	"lombardia.it",
  	"lombardy.it",
  	"lucania.it",
  	"mar.it",
  	"marche.it",
  	"mol.it",
  	"molise.it",
  	"piedmont.it",
  	"piemonte.it",
  	"pmn.it",
  	"pug.it",
  	"puglia.it",
  	"sar.it",
  	"sardegna.it",
  	"sardinia.it",
  	"sic.it",
  	"sicilia.it",
  	"sicily.it",
  	"taa.it",
  	"tos.it",
  	"toscana.it",
  	"trentin-sud-tirol.it",
  	"trentin-süd-tirol.it",
  	"trentin-sudtirol.it",
  	"trentin-südtirol.it",
  	"trentin-sued-tirol.it",
  	"trentin-suedtirol.it",
  	"trentino-a-adige.it",
  	"trentino-aadige.it",
  	"trentino-alto-adige.it",
  	"trentino-altoadige.it",
  	"trentino-s-tirol.it",
  	"trentino-stirol.it",
  	"trentino-sud-tirol.it",
  	"trentino-süd-tirol.it",
  	"trentino-sudtirol.it",
  	"trentino-südtirol.it",
  	"trentino-sued-tirol.it",
  	"trentino-suedtirol.it",
  	"trentino.it",
  	"trentinoa-adige.it",
  	"trentinoaadige.it",
  	"trentinoalto-adige.it",
  	"trentinoaltoadige.it",
  	"trentinos-tirol.it",
  	"trentinostirol.it",
  	"trentinosud-tirol.it",
  	"trentinosüd-tirol.it",
  	"trentinosudtirol.it",
  	"trentinosüdtirol.it",
  	"trentinosued-tirol.it",
  	"trentinosuedtirol.it",
  	"trentinsud-tirol.it",
  	"trentinsüd-tirol.it",
  	"trentinsudtirol.it",
  	"trentinsüdtirol.it",
  	"trentinsued-tirol.it",
  	"trentinsuedtirol.it",
  	"tuscany.it",
  	"umb.it",
  	"umbria.it",
  	"val-d-aosta.it",
  	"val-daosta.it",
  	"vald-aosta.it",
  	"valdaosta.it",
  	"valle-aosta.it",
  	"valle-d-aosta.it",
  	"valle-daosta.it",
  	"valleaosta.it",
  	"valled-aosta.it",
  	"valledaosta.it",
  	"vallee-aoste.it",
  	"vallée-aoste.it",
  	"vallee-d-aoste.it",
  	"vallée-d-aoste.it",
  	"valleeaoste.it",
  	"valléeaoste.it",
  	"valleedaoste.it",
  	"valléedaoste.it",
  	"vao.it",
  	"vda.it",
  	"ven.it",
  	"veneto.it",
  	"ag.it",
  	"agrigento.it",
  	"al.it",
  	"alessandria.it",
  	"alto-adige.it",
  	"altoadige.it",
  	"an.it",
  	"ancona.it",
  	"andria-barletta-trani.it",
  	"andria-trani-barletta.it",
  	"andriabarlettatrani.it",
  	"andriatranibarletta.it",
  	"ao.it",
  	"aosta.it",
  	"aoste.it",
  	"ap.it",
  	"aq.it",
  	"aquila.it",
  	"ar.it",
  	"arezzo.it",
  	"ascoli-piceno.it",
  	"ascolipiceno.it",
  	"asti.it",
  	"at.it",
  	"av.it",
  	"avellino.it",
  	"ba.it",
  	"balsan-sudtirol.it",
  	"balsan-südtirol.it",
  	"balsan-suedtirol.it",
  	"balsan.it",
  	"bari.it",
  	"barletta-trani-andria.it",
  	"barlettatraniandria.it",
  	"belluno.it",
  	"benevento.it",
  	"bergamo.it",
  	"bg.it",
  	"bi.it",
  	"biella.it",
  	"bl.it",
  	"bn.it",
  	"bo.it",
  	"bologna.it",
  	"bolzano-altoadige.it",
  	"bolzano.it",
  	"bozen-sudtirol.it",
  	"bozen-südtirol.it",
  	"bozen-suedtirol.it",
  	"bozen.it",
  	"br.it",
  	"brescia.it",
  	"brindisi.it",
  	"bs.it",
  	"bt.it",
  	"bulsan-sudtirol.it",
  	"bulsan-südtirol.it",
  	"bulsan-suedtirol.it",
  	"bulsan.it",
  	"bz.it",
  	"ca.it",
  	"cagliari.it",
  	"caltanissetta.it",
  	"campidano-medio.it",
  	"campidanomedio.it",
  	"campobasso.it",
  	"carbonia-iglesias.it",
  	"carboniaiglesias.it",
  	"carrara-massa.it",
  	"carraramassa.it",
  	"caserta.it",
  	"catania.it",
  	"catanzaro.it",
  	"cb.it",
  	"ce.it",
  	"cesena-forli.it",
  	"cesena-forlì.it",
  	"cesenaforli.it",
  	"cesenaforlì.it",
  	"ch.it",
  	"chieti.it",
  	"ci.it",
  	"cl.it",
  	"cn.it",
  	"co.it",
  	"como.it",
  	"cosenza.it",
  	"cr.it",
  	"cremona.it",
  	"crotone.it",
  	"cs.it",
  	"ct.it",
  	"cuneo.it",
  	"cz.it",
  	"dell-ogliastra.it",
  	"dellogliastra.it",
  	"en.it",
  	"enna.it",
  	"fc.it",
  	"fe.it",
  	"fermo.it",
  	"ferrara.it",
  	"fg.it",
  	"fi.it",
  	"firenze.it",
  	"florence.it",
  	"fm.it",
  	"foggia.it",
  	"forli-cesena.it",
  	"forlì-cesena.it",
  	"forlicesena.it",
  	"forlìcesena.it",
  	"fr.it",
  	"frosinone.it",
  	"ge.it",
  	"genoa.it",
  	"genova.it",
  	"go.it",
  	"gorizia.it",
  	"gr.it",
  	"grosseto.it",
  	"iglesias-carbonia.it",
  	"iglesiascarbonia.it",
  	"im.it",
  	"imperia.it",
  	"is.it",
  	"isernia.it",
  	"kr.it",
  	"la-spezia.it",
  	"laquila.it",
  	"laspezia.it",
  	"latina.it",
  	"lc.it",
  	"le.it",
  	"lecce.it",
  	"lecco.it",
  	"li.it",
  	"livorno.it",
  	"lo.it",
  	"lodi.it",
  	"lt.it",
  	"lu.it",
  	"lucca.it",
  	"macerata.it",
  	"mantova.it",
  	"massa-carrara.it",
  	"massacarrara.it",
  	"matera.it",
  	"mb.it",
  	"mc.it",
  	"me.it",
  	"medio-campidano.it",
  	"mediocampidano.it",
  	"messina.it",
  	"mi.it",
  	"milan.it",
  	"milano.it",
  	"mn.it",
  	"mo.it",
  	"modena.it",
  	"monza-brianza.it",
  	"monza-e-della-brianza.it",
  	"monza.it",
  	"monzabrianza.it",
  	"monzaebrianza.it",
  	"monzaedellabrianza.it",
  	"ms.it",
  	"mt.it",
  	"na.it",
  	"naples.it",
  	"napoli.it",
  	"no.it",
  	"novara.it",
  	"nu.it",
  	"nuoro.it",
  	"og.it",
  	"ogliastra.it",
  	"olbia-tempio.it",
  	"olbiatempio.it",
  	"or.it",
  	"oristano.it",
  	"ot.it",
  	"pa.it",
  	"padova.it",
  	"padua.it",
  	"palermo.it",
  	"parma.it",
  	"pavia.it",
  	"pc.it",
  	"pd.it",
  	"pe.it",
  	"perugia.it",
  	"pesaro-urbino.it",
  	"pesarourbino.it",
  	"pescara.it",
  	"pg.it",
  	"pi.it",
  	"piacenza.it",
  	"pisa.it",
  	"pistoia.it",
  	"pn.it",
  	"po.it",
  	"pordenone.it",
  	"potenza.it",
  	"pr.it",
  	"prato.it",
  	"pt.it",
  	"pu.it",
  	"pv.it",
  	"pz.it",
  	"ra.it",
  	"ragusa.it",
  	"ravenna.it",
  	"rc.it",
  	"re.it",
  	"reggio-calabria.it",
  	"reggio-emilia.it",
  	"reggiocalabria.it",
  	"reggioemilia.it",
  	"rg.it",
  	"ri.it",
  	"rieti.it",
  	"rimini.it",
  	"rm.it",
  	"rn.it",
  	"ro.it",
  	"roma.it",
  	"rome.it",
  	"rovigo.it",
  	"sa.it",
  	"salerno.it",
  	"sassari.it",
  	"savona.it",
  	"si.it",
  	"siena.it",
  	"siracusa.it",
  	"so.it",
  	"sondrio.it",
  	"sp.it",
  	"sr.it",
  	"ss.it",
  	"suedtirol.it",
  	"südtirol.it",
  	"sv.it",
  	"ta.it",
  	"taranto.it",
  	"te.it",
  	"tempio-olbia.it",
  	"tempioolbia.it",
  	"teramo.it",
  	"terni.it",
  	"tn.it",
  	"to.it",
  	"torino.it",
  	"tp.it",
  	"tr.it",
  	"trani-andria-barletta.it",
  	"trani-barletta-andria.it",
  	"traniandriabarletta.it",
  	"tranibarlettaandria.it",
  	"trapani.it",
  	"trento.it",
  	"treviso.it",
  	"trieste.it",
  	"ts.it",
  	"turin.it",
  	"tv.it",
  	"ud.it",
  	"udine.it",
  	"urbino-pesaro.it",
  	"urbinopesaro.it",
  	"va.it",
  	"varese.it",
  	"vb.it",
  	"vc.it",
  	"ve.it",
  	"venezia.it",
  	"venice.it",
  	"verbania.it",
  	"vercelli.it",
  	"verona.it",
  	"vi.it",
  	"vibo-valentia.it",
  	"vibovalentia.it",
  	"vicenza.it",
  	"viterbo.it",
  	"vr.it",
  	"vs.it",
  	"vt.it",
  	"vv.it",
  	"je",
  	"co.je",
  	"net.je",
  	"org.je",
  	"*.jm",
  	"jo",
  	"com.jo",
  	"org.jo",
  	"net.jo",
  	"edu.jo",
  	"sch.jo",
  	"gov.jo",
  	"mil.jo",
  	"name.jo",
  	"jobs",
  	"jp",
  	"ac.jp",
  	"ad.jp",
  	"co.jp",
  	"ed.jp",
  	"go.jp",
  	"gr.jp",
  	"lg.jp",
  	"ne.jp",
  	"or.jp",
  	"aichi.jp",
  	"akita.jp",
  	"aomori.jp",
  	"chiba.jp",
  	"ehime.jp",
  	"fukui.jp",
  	"fukuoka.jp",
  	"fukushima.jp",
  	"gifu.jp",
  	"gunma.jp",
  	"hiroshima.jp",
  	"hokkaido.jp",
  	"hyogo.jp",
  	"ibaraki.jp",
  	"ishikawa.jp",
  	"iwate.jp",
  	"kagawa.jp",
  	"kagoshima.jp",
  	"kanagawa.jp",
  	"kochi.jp",
  	"kumamoto.jp",
  	"kyoto.jp",
  	"mie.jp",
  	"miyagi.jp",
  	"miyazaki.jp",
  	"nagano.jp",
  	"nagasaki.jp",
  	"nara.jp",
  	"niigata.jp",
  	"oita.jp",
  	"okayama.jp",
  	"okinawa.jp",
  	"osaka.jp",
  	"saga.jp",
  	"saitama.jp",
  	"shiga.jp",
  	"shimane.jp",
  	"shizuoka.jp",
  	"tochigi.jp",
  	"tokushima.jp",
  	"tokyo.jp",
  	"tottori.jp",
  	"toyama.jp",
  	"wakayama.jp",
  	"yamagata.jp",
  	"yamaguchi.jp",
  	"yamanashi.jp",
  	"栃木.jp",
  	"愛知.jp",
  	"愛媛.jp",
  	"兵庫.jp",
  	"熊本.jp",
  	"茨城.jp",
  	"北海道.jp",
  	"千葉.jp",
  	"和歌山.jp",
  	"長崎.jp",
  	"長野.jp",
  	"新潟.jp",
  	"青森.jp",
  	"静岡.jp",
  	"東京.jp",
  	"石川.jp",
  	"埼玉.jp",
  	"三重.jp",
  	"京都.jp",
  	"佐賀.jp",
  	"大分.jp",
  	"大阪.jp",
  	"奈良.jp",
  	"宮城.jp",
  	"宮崎.jp",
  	"富山.jp",
  	"山口.jp",
  	"山形.jp",
  	"山梨.jp",
  	"岩手.jp",
  	"岐阜.jp",
  	"岡山.jp",
  	"島根.jp",
  	"広島.jp",
  	"徳島.jp",
  	"沖縄.jp",
  	"滋賀.jp",
  	"神奈川.jp",
  	"福井.jp",
  	"福岡.jp",
  	"福島.jp",
  	"秋田.jp",
  	"群馬.jp",
  	"香川.jp",
  	"高知.jp",
  	"鳥取.jp",
  	"鹿児島.jp",
  	"*.kawasaki.jp",
  	"*.kitakyushu.jp",
  	"*.kobe.jp",
  	"*.nagoya.jp",
  	"*.sapporo.jp",
  	"*.sendai.jp",
  	"*.yokohama.jp",
  	"!city.kawasaki.jp",
  	"!city.kitakyushu.jp",
  	"!city.kobe.jp",
  	"!city.nagoya.jp",
  	"!city.sapporo.jp",
  	"!city.sendai.jp",
  	"!city.yokohama.jp",
  	"aisai.aichi.jp",
  	"ama.aichi.jp",
  	"anjo.aichi.jp",
  	"asuke.aichi.jp",
  	"chiryu.aichi.jp",
  	"chita.aichi.jp",
  	"fuso.aichi.jp",
  	"gamagori.aichi.jp",
  	"handa.aichi.jp",
  	"hazu.aichi.jp",
  	"hekinan.aichi.jp",
  	"higashiura.aichi.jp",
  	"ichinomiya.aichi.jp",
  	"inazawa.aichi.jp",
  	"inuyama.aichi.jp",
  	"isshiki.aichi.jp",
  	"iwakura.aichi.jp",
  	"kanie.aichi.jp",
  	"kariya.aichi.jp",
  	"kasugai.aichi.jp",
  	"kira.aichi.jp",
  	"kiyosu.aichi.jp",
  	"komaki.aichi.jp",
  	"konan.aichi.jp",
  	"kota.aichi.jp",
  	"mihama.aichi.jp",
  	"miyoshi.aichi.jp",
  	"nishio.aichi.jp",
  	"nisshin.aichi.jp",
  	"obu.aichi.jp",
  	"oguchi.aichi.jp",
  	"oharu.aichi.jp",
  	"okazaki.aichi.jp",
  	"owariasahi.aichi.jp",
  	"seto.aichi.jp",
  	"shikatsu.aichi.jp",
  	"shinshiro.aichi.jp",
  	"shitara.aichi.jp",
  	"tahara.aichi.jp",
  	"takahama.aichi.jp",
  	"tobishima.aichi.jp",
  	"toei.aichi.jp",
  	"togo.aichi.jp",
  	"tokai.aichi.jp",
  	"tokoname.aichi.jp",
  	"toyoake.aichi.jp",
  	"toyohashi.aichi.jp",
  	"toyokawa.aichi.jp",
  	"toyone.aichi.jp",
  	"toyota.aichi.jp",
  	"tsushima.aichi.jp",
  	"yatomi.aichi.jp",
  	"akita.akita.jp",
  	"daisen.akita.jp",
  	"fujisato.akita.jp",
  	"gojome.akita.jp",
  	"hachirogata.akita.jp",
  	"happou.akita.jp",
  	"higashinaruse.akita.jp",
  	"honjo.akita.jp",
  	"honjyo.akita.jp",
  	"ikawa.akita.jp",
  	"kamikoani.akita.jp",
  	"kamioka.akita.jp",
  	"katagami.akita.jp",
  	"kazuno.akita.jp",
  	"kitaakita.akita.jp",
  	"kosaka.akita.jp",
  	"kyowa.akita.jp",
  	"misato.akita.jp",
  	"mitane.akita.jp",
  	"moriyoshi.akita.jp",
  	"nikaho.akita.jp",
  	"noshiro.akita.jp",
  	"odate.akita.jp",
  	"oga.akita.jp",
  	"ogata.akita.jp",
  	"semboku.akita.jp",
  	"yokote.akita.jp",
  	"yurihonjo.akita.jp",
  	"aomori.aomori.jp",
  	"gonohe.aomori.jp",
  	"hachinohe.aomori.jp",
  	"hashikami.aomori.jp",
  	"hiranai.aomori.jp",
  	"hirosaki.aomori.jp",
  	"itayanagi.aomori.jp",
  	"kuroishi.aomori.jp",
  	"misawa.aomori.jp",
  	"mutsu.aomori.jp",
  	"nakadomari.aomori.jp",
  	"noheji.aomori.jp",
  	"oirase.aomori.jp",
  	"owani.aomori.jp",
  	"rokunohe.aomori.jp",
  	"sannohe.aomori.jp",
  	"shichinohe.aomori.jp",
  	"shingo.aomori.jp",
  	"takko.aomori.jp",
  	"towada.aomori.jp",
  	"tsugaru.aomori.jp",
  	"tsuruta.aomori.jp",
  	"abiko.chiba.jp",
  	"asahi.chiba.jp",
  	"chonan.chiba.jp",
  	"chosei.chiba.jp",
  	"choshi.chiba.jp",
  	"chuo.chiba.jp",
  	"funabashi.chiba.jp",
  	"futtsu.chiba.jp",
  	"hanamigawa.chiba.jp",
  	"ichihara.chiba.jp",
  	"ichikawa.chiba.jp",
  	"ichinomiya.chiba.jp",
  	"inzai.chiba.jp",
  	"isumi.chiba.jp",
  	"kamagaya.chiba.jp",
  	"kamogawa.chiba.jp",
  	"kashiwa.chiba.jp",
  	"katori.chiba.jp",
  	"katsuura.chiba.jp",
  	"kimitsu.chiba.jp",
  	"kisarazu.chiba.jp",
  	"kozaki.chiba.jp",
  	"kujukuri.chiba.jp",
  	"kyonan.chiba.jp",
  	"matsudo.chiba.jp",
  	"midori.chiba.jp",
  	"mihama.chiba.jp",
  	"minamiboso.chiba.jp",
  	"mobara.chiba.jp",
  	"mutsuzawa.chiba.jp",
  	"nagara.chiba.jp",
  	"nagareyama.chiba.jp",
  	"narashino.chiba.jp",
  	"narita.chiba.jp",
  	"noda.chiba.jp",
  	"oamishirasato.chiba.jp",
  	"omigawa.chiba.jp",
  	"onjuku.chiba.jp",
  	"otaki.chiba.jp",
  	"sakae.chiba.jp",
  	"sakura.chiba.jp",
  	"shimofusa.chiba.jp",
  	"shirako.chiba.jp",
  	"shiroi.chiba.jp",
  	"shisui.chiba.jp",
  	"sodegaura.chiba.jp",
  	"sosa.chiba.jp",
  	"tako.chiba.jp",
  	"tateyama.chiba.jp",
  	"togane.chiba.jp",
  	"tohnosho.chiba.jp",
  	"tomisato.chiba.jp",
  	"urayasu.chiba.jp",
  	"yachimata.chiba.jp",
  	"yachiyo.chiba.jp",
  	"yokaichiba.chiba.jp",
  	"yokoshibahikari.chiba.jp",
  	"yotsukaido.chiba.jp",
  	"ainan.ehime.jp",
  	"honai.ehime.jp",
  	"ikata.ehime.jp",
  	"imabari.ehime.jp",
  	"iyo.ehime.jp",
  	"kamijima.ehime.jp",
  	"kihoku.ehime.jp",
  	"kumakogen.ehime.jp",
  	"masaki.ehime.jp",
  	"matsuno.ehime.jp",
  	"matsuyama.ehime.jp",
  	"namikata.ehime.jp",
  	"niihama.ehime.jp",
  	"ozu.ehime.jp",
  	"saijo.ehime.jp",
  	"seiyo.ehime.jp",
  	"shikokuchuo.ehime.jp",
  	"tobe.ehime.jp",
  	"toon.ehime.jp",
  	"uchiko.ehime.jp",
  	"uwajima.ehime.jp",
  	"yawatahama.ehime.jp",
  	"echizen.fukui.jp",
  	"eiheiji.fukui.jp",
  	"fukui.fukui.jp",
  	"ikeda.fukui.jp",
  	"katsuyama.fukui.jp",
  	"mihama.fukui.jp",
  	"minamiechizen.fukui.jp",
  	"obama.fukui.jp",
  	"ohi.fukui.jp",
  	"ono.fukui.jp",
  	"sabae.fukui.jp",
  	"sakai.fukui.jp",
  	"takahama.fukui.jp",
  	"tsuruga.fukui.jp",
  	"wakasa.fukui.jp",
  	"ashiya.fukuoka.jp",
  	"buzen.fukuoka.jp",
  	"chikugo.fukuoka.jp",
  	"chikuho.fukuoka.jp",
  	"chikujo.fukuoka.jp",
  	"chikushino.fukuoka.jp",
  	"chikuzen.fukuoka.jp",
  	"chuo.fukuoka.jp",
  	"dazaifu.fukuoka.jp",
  	"fukuchi.fukuoka.jp",
  	"hakata.fukuoka.jp",
  	"higashi.fukuoka.jp",
  	"hirokawa.fukuoka.jp",
  	"hisayama.fukuoka.jp",
  	"iizuka.fukuoka.jp",
  	"inatsuki.fukuoka.jp",
  	"kaho.fukuoka.jp",
  	"kasuga.fukuoka.jp",
  	"kasuya.fukuoka.jp",
  	"kawara.fukuoka.jp",
  	"keisen.fukuoka.jp",
  	"koga.fukuoka.jp",
  	"kurate.fukuoka.jp",
  	"kurogi.fukuoka.jp",
  	"kurume.fukuoka.jp",
  	"minami.fukuoka.jp",
  	"miyako.fukuoka.jp",
  	"miyama.fukuoka.jp",
  	"miyawaka.fukuoka.jp",
  	"mizumaki.fukuoka.jp",
  	"munakata.fukuoka.jp",
  	"nakagawa.fukuoka.jp",
  	"nakama.fukuoka.jp",
  	"nishi.fukuoka.jp",
  	"nogata.fukuoka.jp",
  	"ogori.fukuoka.jp",
  	"okagaki.fukuoka.jp",
  	"okawa.fukuoka.jp",
  	"oki.fukuoka.jp",
  	"omuta.fukuoka.jp",
  	"onga.fukuoka.jp",
  	"onojo.fukuoka.jp",
  	"oto.fukuoka.jp",
  	"saigawa.fukuoka.jp",
  	"sasaguri.fukuoka.jp",
  	"shingu.fukuoka.jp",
  	"shinyoshitomi.fukuoka.jp",
  	"shonai.fukuoka.jp",
  	"soeda.fukuoka.jp",
  	"sue.fukuoka.jp",
  	"tachiarai.fukuoka.jp",
  	"tagawa.fukuoka.jp",
  	"takata.fukuoka.jp",
  	"toho.fukuoka.jp",
  	"toyotsu.fukuoka.jp",
  	"tsuiki.fukuoka.jp",
  	"ukiha.fukuoka.jp",
  	"umi.fukuoka.jp",
  	"usui.fukuoka.jp",
  	"yamada.fukuoka.jp",
  	"yame.fukuoka.jp",
  	"yanagawa.fukuoka.jp",
  	"yukuhashi.fukuoka.jp",
  	"aizubange.fukushima.jp",
  	"aizumisato.fukushima.jp",
  	"aizuwakamatsu.fukushima.jp",
  	"asakawa.fukushima.jp",
  	"bandai.fukushima.jp",
  	"date.fukushima.jp",
  	"fukushima.fukushima.jp",
  	"furudono.fukushima.jp",
  	"futaba.fukushima.jp",
  	"hanawa.fukushima.jp",
  	"higashi.fukushima.jp",
  	"hirata.fukushima.jp",
  	"hirono.fukushima.jp",
  	"iitate.fukushima.jp",
  	"inawashiro.fukushima.jp",
  	"ishikawa.fukushima.jp",
  	"iwaki.fukushima.jp",
  	"izumizaki.fukushima.jp",
  	"kagamiishi.fukushima.jp",
  	"kaneyama.fukushima.jp",
  	"kawamata.fukushima.jp",
  	"kitakata.fukushima.jp",
  	"kitashiobara.fukushima.jp",
  	"koori.fukushima.jp",
  	"koriyama.fukushima.jp",
  	"kunimi.fukushima.jp",
  	"miharu.fukushima.jp",
  	"mishima.fukushima.jp",
  	"namie.fukushima.jp",
  	"nango.fukushima.jp",
  	"nishiaizu.fukushima.jp",
  	"nishigo.fukushima.jp",
  	"okuma.fukushima.jp",
  	"omotego.fukushima.jp",
  	"ono.fukushima.jp",
  	"otama.fukushima.jp",
  	"samegawa.fukushima.jp",
  	"shimogo.fukushima.jp",
  	"shirakawa.fukushima.jp",
  	"showa.fukushima.jp",
  	"soma.fukushima.jp",
  	"sukagawa.fukushima.jp",
  	"taishin.fukushima.jp",
  	"tamakawa.fukushima.jp",
  	"tanagura.fukushima.jp",
  	"tenei.fukushima.jp",
  	"yabuki.fukushima.jp",
  	"yamato.fukushima.jp",
  	"yamatsuri.fukushima.jp",
  	"yanaizu.fukushima.jp",
  	"yugawa.fukushima.jp",
  	"anpachi.gifu.jp",
  	"ena.gifu.jp",
  	"gifu.gifu.jp",
  	"ginan.gifu.jp",
  	"godo.gifu.jp",
  	"gujo.gifu.jp",
  	"hashima.gifu.jp",
  	"hichiso.gifu.jp",
  	"hida.gifu.jp",
  	"higashishirakawa.gifu.jp",
  	"ibigawa.gifu.jp",
  	"ikeda.gifu.jp",
  	"kakamigahara.gifu.jp",
  	"kani.gifu.jp",
  	"kasahara.gifu.jp",
  	"kasamatsu.gifu.jp",
  	"kawaue.gifu.jp",
  	"kitagata.gifu.jp",
  	"mino.gifu.jp",
  	"minokamo.gifu.jp",
  	"mitake.gifu.jp",
  	"mizunami.gifu.jp",
  	"motosu.gifu.jp",
  	"nakatsugawa.gifu.jp",
  	"ogaki.gifu.jp",
  	"sakahogi.gifu.jp",
  	"seki.gifu.jp",
  	"sekigahara.gifu.jp",
  	"shirakawa.gifu.jp",
  	"tajimi.gifu.jp",
  	"takayama.gifu.jp",
  	"tarui.gifu.jp",
  	"toki.gifu.jp",
  	"tomika.gifu.jp",
  	"wanouchi.gifu.jp",
  	"yamagata.gifu.jp",
  	"yaotsu.gifu.jp",
  	"yoro.gifu.jp",
  	"annaka.gunma.jp",
  	"chiyoda.gunma.jp",
  	"fujioka.gunma.jp",
  	"higashiagatsuma.gunma.jp",
  	"isesaki.gunma.jp",
  	"itakura.gunma.jp",
  	"kanna.gunma.jp",
  	"kanra.gunma.jp",
  	"katashina.gunma.jp",
  	"kawaba.gunma.jp",
  	"kiryu.gunma.jp",
  	"kusatsu.gunma.jp",
  	"maebashi.gunma.jp",
  	"meiwa.gunma.jp",
  	"midori.gunma.jp",
  	"minakami.gunma.jp",
  	"naganohara.gunma.jp",
  	"nakanojo.gunma.jp",
  	"nanmoku.gunma.jp",
  	"numata.gunma.jp",
  	"oizumi.gunma.jp",
  	"ora.gunma.jp",
  	"ota.gunma.jp",
  	"shibukawa.gunma.jp",
  	"shimonita.gunma.jp",
  	"shinto.gunma.jp",
  	"showa.gunma.jp",
  	"takasaki.gunma.jp",
  	"takayama.gunma.jp",
  	"tamamura.gunma.jp",
  	"tatebayashi.gunma.jp",
  	"tomioka.gunma.jp",
  	"tsukiyono.gunma.jp",
  	"tsumagoi.gunma.jp",
  	"ueno.gunma.jp",
  	"yoshioka.gunma.jp",
  	"asaminami.hiroshima.jp",
  	"daiwa.hiroshima.jp",
  	"etajima.hiroshima.jp",
  	"fuchu.hiroshima.jp",
  	"fukuyama.hiroshima.jp",
  	"hatsukaichi.hiroshima.jp",
  	"higashihiroshima.hiroshima.jp",
  	"hongo.hiroshima.jp",
  	"jinsekikogen.hiroshima.jp",
  	"kaita.hiroshima.jp",
  	"kui.hiroshima.jp",
  	"kumano.hiroshima.jp",
  	"kure.hiroshima.jp",
  	"mihara.hiroshima.jp",
  	"miyoshi.hiroshima.jp",
  	"naka.hiroshima.jp",
  	"onomichi.hiroshima.jp",
  	"osakikamijima.hiroshima.jp",
  	"otake.hiroshima.jp",
  	"saka.hiroshima.jp",
  	"sera.hiroshima.jp",
  	"seranishi.hiroshima.jp",
  	"shinichi.hiroshima.jp",
  	"shobara.hiroshima.jp",
  	"takehara.hiroshima.jp",
  	"abashiri.hokkaido.jp",
  	"abira.hokkaido.jp",
  	"aibetsu.hokkaido.jp",
  	"akabira.hokkaido.jp",
  	"akkeshi.hokkaido.jp",
  	"asahikawa.hokkaido.jp",
  	"ashibetsu.hokkaido.jp",
  	"ashoro.hokkaido.jp",
  	"assabu.hokkaido.jp",
  	"atsuma.hokkaido.jp",
  	"bibai.hokkaido.jp",
  	"biei.hokkaido.jp",
  	"bifuka.hokkaido.jp",
  	"bihoro.hokkaido.jp",
  	"biratori.hokkaido.jp",
  	"chippubetsu.hokkaido.jp",
  	"chitose.hokkaido.jp",
  	"date.hokkaido.jp",
  	"ebetsu.hokkaido.jp",
  	"embetsu.hokkaido.jp",
  	"eniwa.hokkaido.jp",
  	"erimo.hokkaido.jp",
  	"esan.hokkaido.jp",
  	"esashi.hokkaido.jp",
  	"fukagawa.hokkaido.jp",
  	"fukushima.hokkaido.jp",
  	"furano.hokkaido.jp",
  	"furubira.hokkaido.jp",
  	"haboro.hokkaido.jp",
  	"hakodate.hokkaido.jp",
  	"hamatonbetsu.hokkaido.jp",
  	"hidaka.hokkaido.jp",
  	"higashikagura.hokkaido.jp",
  	"higashikawa.hokkaido.jp",
  	"hiroo.hokkaido.jp",
  	"hokuryu.hokkaido.jp",
  	"hokuto.hokkaido.jp",
  	"honbetsu.hokkaido.jp",
  	"horokanai.hokkaido.jp",
  	"horonobe.hokkaido.jp",
  	"ikeda.hokkaido.jp",
  	"imakane.hokkaido.jp",
  	"ishikari.hokkaido.jp",
  	"iwamizawa.hokkaido.jp",
  	"iwanai.hokkaido.jp",
  	"kamifurano.hokkaido.jp",
  	"kamikawa.hokkaido.jp",
  	"kamishihoro.hokkaido.jp",
  	"kamisunagawa.hokkaido.jp",
  	"kamoenai.hokkaido.jp",
  	"kayabe.hokkaido.jp",
  	"kembuchi.hokkaido.jp",
  	"kikonai.hokkaido.jp",
  	"kimobetsu.hokkaido.jp",
  	"kitahiroshima.hokkaido.jp",
  	"kitami.hokkaido.jp",
  	"kiyosato.hokkaido.jp",
  	"koshimizu.hokkaido.jp",
  	"kunneppu.hokkaido.jp",
  	"kuriyama.hokkaido.jp",
  	"kuromatsunai.hokkaido.jp",
  	"kushiro.hokkaido.jp",
  	"kutchan.hokkaido.jp",
  	"kyowa.hokkaido.jp",
  	"mashike.hokkaido.jp",
  	"matsumae.hokkaido.jp",
  	"mikasa.hokkaido.jp",
  	"minamifurano.hokkaido.jp",
  	"mombetsu.hokkaido.jp",
  	"moseushi.hokkaido.jp",
  	"mukawa.hokkaido.jp",
  	"muroran.hokkaido.jp",
  	"naie.hokkaido.jp",
  	"nakagawa.hokkaido.jp",
  	"nakasatsunai.hokkaido.jp",
  	"nakatombetsu.hokkaido.jp",
  	"nanae.hokkaido.jp",
  	"nanporo.hokkaido.jp",
  	"nayoro.hokkaido.jp",
  	"nemuro.hokkaido.jp",
  	"niikappu.hokkaido.jp",
  	"niki.hokkaido.jp",
  	"nishiokoppe.hokkaido.jp",
  	"noboribetsu.hokkaido.jp",
  	"numata.hokkaido.jp",
  	"obihiro.hokkaido.jp",
  	"obira.hokkaido.jp",
  	"oketo.hokkaido.jp",
  	"okoppe.hokkaido.jp",
  	"otaru.hokkaido.jp",
  	"otobe.hokkaido.jp",
  	"otofuke.hokkaido.jp",
  	"otoineppu.hokkaido.jp",
  	"oumu.hokkaido.jp",
  	"ozora.hokkaido.jp",
  	"pippu.hokkaido.jp",
  	"rankoshi.hokkaido.jp",
  	"rebun.hokkaido.jp",
  	"rikubetsu.hokkaido.jp",
  	"rishiri.hokkaido.jp",
  	"rishirifuji.hokkaido.jp",
  	"saroma.hokkaido.jp",
  	"sarufutsu.hokkaido.jp",
  	"shakotan.hokkaido.jp",
  	"shari.hokkaido.jp",
  	"shibecha.hokkaido.jp",
  	"shibetsu.hokkaido.jp",
  	"shikabe.hokkaido.jp",
  	"shikaoi.hokkaido.jp",
  	"shimamaki.hokkaido.jp",
  	"shimizu.hokkaido.jp",
  	"shimokawa.hokkaido.jp",
  	"shinshinotsu.hokkaido.jp",
  	"shintoku.hokkaido.jp",
  	"shiranuka.hokkaido.jp",
  	"shiraoi.hokkaido.jp",
  	"shiriuchi.hokkaido.jp",
  	"sobetsu.hokkaido.jp",
  	"sunagawa.hokkaido.jp",
  	"taiki.hokkaido.jp",
  	"takasu.hokkaido.jp",
  	"takikawa.hokkaido.jp",
  	"takinoue.hokkaido.jp",
  	"teshikaga.hokkaido.jp",
  	"tobetsu.hokkaido.jp",
  	"tohma.hokkaido.jp",
  	"tomakomai.hokkaido.jp",
  	"tomari.hokkaido.jp",
  	"toya.hokkaido.jp",
  	"toyako.hokkaido.jp",
  	"toyotomi.hokkaido.jp",
  	"toyoura.hokkaido.jp",
  	"tsubetsu.hokkaido.jp",
  	"tsukigata.hokkaido.jp",
  	"urakawa.hokkaido.jp",
  	"urausu.hokkaido.jp",
  	"uryu.hokkaido.jp",
  	"utashinai.hokkaido.jp",
  	"wakkanai.hokkaido.jp",
  	"wassamu.hokkaido.jp",
  	"yakumo.hokkaido.jp",
  	"yoichi.hokkaido.jp",
  	"aioi.hyogo.jp",
  	"akashi.hyogo.jp",
  	"ako.hyogo.jp",
  	"amagasaki.hyogo.jp",
  	"aogaki.hyogo.jp",
  	"asago.hyogo.jp",
  	"ashiya.hyogo.jp",
  	"awaji.hyogo.jp",
  	"fukusaki.hyogo.jp",
  	"goshiki.hyogo.jp",
  	"harima.hyogo.jp",
  	"himeji.hyogo.jp",
  	"ichikawa.hyogo.jp",
  	"inagawa.hyogo.jp",
  	"itami.hyogo.jp",
  	"kakogawa.hyogo.jp",
  	"kamigori.hyogo.jp",
  	"kamikawa.hyogo.jp",
  	"kasai.hyogo.jp",
  	"kasuga.hyogo.jp",
  	"kawanishi.hyogo.jp",
  	"miki.hyogo.jp",
  	"minamiawaji.hyogo.jp",
  	"nishinomiya.hyogo.jp",
  	"nishiwaki.hyogo.jp",
  	"ono.hyogo.jp",
  	"sanda.hyogo.jp",
  	"sannan.hyogo.jp",
  	"sasayama.hyogo.jp",
  	"sayo.hyogo.jp",
  	"shingu.hyogo.jp",
  	"shinonsen.hyogo.jp",
  	"shiso.hyogo.jp",
  	"sumoto.hyogo.jp",
  	"taishi.hyogo.jp",
  	"taka.hyogo.jp",
  	"takarazuka.hyogo.jp",
  	"takasago.hyogo.jp",
  	"takino.hyogo.jp",
  	"tamba.hyogo.jp",
  	"tatsuno.hyogo.jp",
  	"toyooka.hyogo.jp",
  	"yabu.hyogo.jp",
  	"yashiro.hyogo.jp",
  	"yoka.hyogo.jp",
  	"yokawa.hyogo.jp",
  	"ami.ibaraki.jp",
  	"asahi.ibaraki.jp",
  	"bando.ibaraki.jp",
  	"chikusei.ibaraki.jp",
  	"daigo.ibaraki.jp",
  	"fujishiro.ibaraki.jp",
  	"hitachi.ibaraki.jp",
  	"hitachinaka.ibaraki.jp",
  	"hitachiomiya.ibaraki.jp",
  	"hitachiota.ibaraki.jp",
  	"ibaraki.ibaraki.jp",
  	"ina.ibaraki.jp",
  	"inashiki.ibaraki.jp",
  	"itako.ibaraki.jp",
  	"iwama.ibaraki.jp",
  	"joso.ibaraki.jp",
  	"kamisu.ibaraki.jp",
  	"kasama.ibaraki.jp",
  	"kashima.ibaraki.jp",
  	"kasumigaura.ibaraki.jp",
  	"koga.ibaraki.jp",
  	"miho.ibaraki.jp",
  	"mito.ibaraki.jp",
  	"moriya.ibaraki.jp",
  	"naka.ibaraki.jp",
  	"namegata.ibaraki.jp",
  	"oarai.ibaraki.jp",
  	"ogawa.ibaraki.jp",
  	"omitama.ibaraki.jp",
  	"ryugasaki.ibaraki.jp",
  	"sakai.ibaraki.jp",
  	"sakuragawa.ibaraki.jp",
  	"shimodate.ibaraki.jp",
  	"shimotsuma.ibaraki.jp",
  	"shirosato.ibaraki.jp",
  	"sowa.ibaraki.jp",
  	"suifu.ibaraki.jp",
  	"takahagi.ibaraki.jp",
  	"tamatsukuri.ibaraki.jp",
  	"tokai.ibaraki.jp",
  	"tomobe.ibaraki.jp",
  	"tone.ibaraki.jp",
  	"toride.ibaraki.jp",
  	"tsuchiura.ibaraki.jp",
  	"tsukuba.ibaraki.jp",
  	"uchihara.ibaraki.jp",
  	"ushiku.ibaraki.jp",
  	"yachiyo.ibaraki.jp",
  	"yamagata.ibaraki.jp",
  	"yawara.ibaraki.jp",
  	"yuki.ibaraki.jp",
  	"anamizu.ishikawa.jp",
  	"hakui.ishikawa.jp",
  	"hakusan.ishikawa.jp",
  	"kaga.ishikawa.jp",
  	"kahoku.ishikawa.jp",
  	"kanazawa.ishikawa.jp",
  	"kawakita.ishikawa.jp",
  	"komatsu.ishikawa.jp",
  	"nakanoto.ishikawa.jp",
  	"nanao.ishikawa.jp",
  	"nomi.ishikawa.jp",
  	"nonoichi.ishikawa.jp",
  	"noto.ishikawa.jp",
  	"shika.ishikawa.jp",
  	"suzu.ishikawa.jp",
  	"tsubata.ishikawa.jp",
  	"tsurugi.ishikawa.jp",
  	"uchinada.ishikawa.jp",
  	"wajima.ishikawa.jp",
  	"fudai.iwate.jp",
  	"fujisawa.iwate.jp",
  	"hanamaki.iwate.jp",
  	"hiraizumi.iwate.jp",
  	"hirono.iwate.jp",
  	"ichinohe.iwate.jp",
  	"ichinoseki.iwate.jp",
  	"iwaizumi.iwate.jp",
  	"iwate.iwate.jp",
  	"joboji.iwate.jp",
  	"kamaishi.iwate.jp",
  	"kanegasaki.iwate.jp",
  	"karumai.iwate.jp",
  	"kawai.iwate.jp",
  	"kitakami.iwate.jp",
  	"kuji.iwate.jp",
  	"kunohe.iwate.jp",
  	"kuzumaki.iwate.jp",
  	"miyako.iwate.jp",
  	"mizusawa.iwate.jp",
  	"morioka.iwate.jp",
  	"ninohe.iwate.jp",
  	"noda.iwate.jp",
  	"ofunato.iwate.jp",
  	"oshu.iwate.jp",
  	"otsuchi.iwate.jp",
  	"rikuzentakata.iwate.jp",
  	"shiwa.iwate.jp",
  	"shizukuishi.iwate.jp",
  	"sumita.iwate.jp",
  	"tanohata.iwate.jp",
  	"tono.iwate.jp",
  	"yahaba.iwate.jp",
  	"yamada.iwate.jp",
  	"ayagawa.kagawa.jp",
  	"higashikagawa.kagawa.jp",
  	"kanonji.kagawa.jp",
  	"kotohira.kagawa.jp",
  	"manno.kagawa.jp",
  	"marugame.kagawa.jp",
  	"mitoyo.kagawa.jp",
  	"naoshima.kagawa.jp",
  	"sanuki.kagawa.jp",
  	"tadotsu.kagawa.jp",
  	"takamatsu.kagawa.jp",
  	"tonosho.kagawa.jp",
  	"uchinomi.kagawa.jp",
  	"utazu.kagawa.jp",
  	"zentsuji.kagawa.jp",
  	"akune.kagoshima.jp",
  	"amami.kagoshima.jp",
  	"hioki.kagoshima.jp",
  	"isa.kagoshima.jp",
  	"isen.kagoshima.jp",
  	"izumi.kagoshima.jp",
  	"kagoshima.kagoshima.jp",
  	"kanoya.kagoshima.jp",
  	"kawanabe.kagoshima.jp",
  	"kinko.kagoshima.jp",
  	"kouyama.kagoshima.jp",
  	"makurazaki.kagoshima.jp",
  	"matsumoto.kagoshima.jp",
  	"minamitane.kagoshima.jp",
  	"nakatane.kagoshima.jp",
  	"nishinoomote.kagoshima.jp",
  	"satsumasendai.kagoshima.jp",
  	"soo.kagoshima.jp",
  	"tarumizu.kagoshima.jp",
  	"yusui.kagoshima.jp",
  	"aikawa.kanagawa.jp",
  	"atsugi.kanagawa.jp",
  	"ayase.kanagawa.jp",
  	"chigasaki.kanagawa.jp",
  	"ebina.kanagawa.jp",
  	"fujisawa.kanagawa.jp",
  	"hadano.kanagawa.jp",
  	"hakone.kanagawa.jp",
  	"hiratsuka.kanagawa.jp",
  	"isehara.kanagawa.jp",
  	"kaisei.kanagawa.jp",
  	"kamakura.kanagawa.jp",
  	"kiyokawa.kanagawa.jp",
  	"matsuda.kanagawa.jp",
  	"minamiashigara.kanagawa.jp",
  	"miura.kanagawa.jp",
  	"nakai.kanagawa.jp",
  	"ninomiya.kanagawa.jp",
  	"odawara.kanagawa.jp",
  	"oi.kanagawa.jp",
  	"oiso.kanagawa.jp",
  	"sagamihara.kanagawa.jp",
  	"samukawa.kanagawa.jp",
  	"tsukui.kanagawa.jp",
  	"yamakita.kanagawa.jp",
  	"yamato.kanagawa.jp",
  	"yokosuka.kanagawa.jp",
  	"yugawara.kanagawa.jp",
  	"zama.kanagawa.jp",
  	"zushi.kanagawa.jp",
  	"aki.kochi.jp",
  	"geisei.kochi.jp",
  	"hidaka.kochi.jp",
  	"higashitsuno.kochi.jp",
  	"ino.kochi.jp",
  	"kagami.kochi.jp",
  	"kami.kochi.jp",
  	"kitagawa.kochi.jp",
  	"kochi.kochi.jp",
  	"mihara.kochi.jp",
  	"motoyama.kochi.jp",
  	"muroto.kochi.jp",
  	"nahari.kochi.jp",
  	"nakamura.kochi.jp",
  	"nankoku.kochi.jp",
  	"nishitosa.kochi.jp",
  	"niyodogawa.kochi.jp",
  	"ochi.kochi.jp",
  	"okawa.kochi.jp",
  	"otoyo.kochi.jp",
  	"otsuki.kochi.jp",
  	"sakawa.kochi.jp",
  	"sukumo.kochi.jp",
  	"susaki.kochi.jp",
  	"tosa.kochi.jp",
  	"tosashimizu.kochi.jp",
  	"toyo.kochi.jp",
  	"tsuno.kochi.jp",
  	"umaji.kochi.jp",
  	"yasuda.kochi.jp",
  	"yusuhara.kochi.jp",
  	"amakusa.kumamoto.jp",
  	"arao.kumamoto.jp",
  	"aso.kumamoto.jp",
  	"choyo.kumamoto.jp",
  	"gyokuto.kumamoto.jp",
  	"kamiamakusa.kumamoto.jp",
  	"kikuchi.kumamoto.jp",
  	"kumamoto.kumamoto.jp",
  	"mashiki.kumamoto.jp",
  	"mifune.kumamoto.jp",
  	"minamata.kumamoto.jp",
  	"minamioguni.kumamoto.jp",
  	"nagasu.kumamoto.jp",
  	"nishihara.kumamoto.jp",
  	"oguni.kumamoto.jp",
  	"ozu.kumamoto.jp",
  	"sumoto.kumamoto.jp",
  	"takamori.kumamoto.jp",
  	"uki.kumamoto.jp",
  	"uto.kumamoto.jp",
  	"yamaga.kumamoto.jp",
  	"yamato.kumamoto.jp",
  	"yatsushiro.kumamoto.jp",
  	"ayabe.kyoto.jp",
  	"fukuchiyama.kyoto.jp",
  	"higashiyama.kyoto.jp",
  	"ide.kyoto.jp",
  	"ine.kyoto.jp",
  	"joyo.kyoto.jp",
  	"kameoka.kyoto.jp",
  	"kamo.kyoto.jp",
  	"kita.kyoto.jp",
  	"kizu.kyoto.jp",
  	"kumiyama.kyoto.jp",
  	"kyotamba.kyoto.jp",
  	"kyotanabe.kyoto.jp",
  	"kyotango.kyoto.jp",
  	"maizuru.kyoto.jp",
  	"minami.kyoto.jp",
  	"minamiyamashiro.kyoto.jp",
  	"miyazu.kyoto.jp",
  	"muko.kyoto.jp",
  	"nagaokakyo.kyoto.jp",
  	"nakagyo.kyoto.jp",
  	"nantan.kyoto.jp",
  	"oyamazaki.kyoto.jp",
  	"sakyo.kyoto.jp",
  	"seika.kyoto.jp",
  	"tanabe.kyoto.jp",
  	"uji.kyoto.jp",
  	"ujitawara.kyoto.jp",
  	"wazuka.kyoto.jp",
  	"yamashina.kyoto.jp",
  	"yawata.kyoto.jp",
  	"asahi.mie.jp",
  	"inabe.mie.jp",
  	"ise.mie.jp",
  	"kameyama.mie.jp",
  	"kawagoe.mie.jp",
  	"kiho.mie.jp",
  	"kisosaki.mie.jp",
  	"kiwa.mie.jp",
  	"komono.mie.jp",
  	"kumano.mie.jp",
  	"kuwana.mie.jp",
  	"matsusaka.mie.jp",
  	"meiwa.mie.jp",
  	"mihama.mie.jp",
  	"minamiise.mie.jp",
  	"misugi.mie.jp",
  	"miyama.mie.jp",
  	"nabari.mie.jp",
  	"shima.mie.jp",
  	"suzuka.mie.jp",
  	"tado.mie.jp",
  	"taiki.mie.jp",
  	"taki.mie.jp",
  	"tamaki.mie.jp",
  	"toba.mie.jp",
  	"tsu.mie.jp",
  	"udono.mie.jp",
  	"ureshino.mie.jp",
  	"watarai.mie.jp",
  	"yokkaichi.mie.jp",
  	"furukawa.miyagi.jp",
  	"higashimatsushima.miyagi.jp",
  	"ishinomaki.miyagi.jp",
  	"iwanuma.miyagi.jp",
  	"kakuda.miyagi.jp",
  	"kami.miyagi.jp",
  	"kawasaki.miyagi.jp",
  	"marumori.miyagi.jp",
  	"matsushima.miyagi.jp",
  	"minamisanriku.miyagi.jp",
  	"misato.miyagi.jp",
  	"murata.miyagi.jp",
  	"natori.miyagi.jp",
  	"ogawara.miyagi.jp",
  	"ohira.miyagi.jp",
  	"onagawa.miyagi.jp",
  	"osaki.miyagi.jp",
  	"rifu.miyagi.jp",
  	"semine.miyagi.jp",
  	"shibata.miyagi.jp",
  	"shichikashuku.miyagi.jp",
  	"shikama.miyagi.jp",
  	"shiogama.miyagi.jp",
  	"shiroishi.miyagi.jp",
  	"tagajo.miyagi.jp",
  	"taiwa.miyagi.jp",
  	"tome.miyagi.jp",
  	"tomiya.miyagi.jp",
  	"wakuya.miyagi.jp",
  	"watari.miyagi.jp",
  	"yamamoto.miyagi.jp",
  	"zao.miyagi.jp",
  	"aya.miyazaki.jp",
  	"ebino.miyazaki.jp",
  	"gokase.miyazaki.jp",
  	"hyuga.miyazaki.jp",
  	"kadogawa.miyazaki.jp",
  	"kawaminami.miyazaki.jp",
  	"kijo.miyazaki.jp",
  	"kitagawa.miyazaki.jp",
  	"kitakata.miyazaki.jp",
  	"kitaura.miyazaki.jp",
  	"kobayashi.miyazaki.jp",
  	"kunitomi.miyazaki.jp",
  	"kushima.miyazaki.jp",
  	"mimata.miyazaki.jp",
  	"miyakonojo.miyazaki.jp",
  	"miyazaki.miyazaki.jp",
  	"morotsuka.miyazaki.jp",
  	"nichinan.miyazaki.jp",
  	"nishimera.miyazaki.jp",
  	"nobeoka.miyazaki.jp",
  	"saito.miyazaki.jp",
  	"shiiba.miyazaki.jp",
  	"shintomi.miyazaki.jp",
  	"takaharu.miyazaki.jp",
  	"takanabe.miyazaki.jp",
  	"takazaki.miyazaki.jp",
  	"tsuno.miyazaki.jp",
  	"achi.nagano.jp",
  	"agematsu.nagano.jp",
  	"anan.nagano.jp",
  	"aoki.nagano.jp",
  	"asahi.nagano.jp",
  	"azumino.nagano.jp",
  	"chikuhoku.nagano.jp",
  	"chikuma.nagano.jp",
  	"chino.nagano.jp",
  	"fujimi.nagano.jp",
  	"hakuba.nagano.jp",
  	"hara.nagano.jp",
  	"hiraya.nagano.jp",
  	"iida.nagano.jp",
  	"iijima.nagano.jp",
  	"iiyama.nagano.jp",
  	"iizuna.nagano.jp",
  	"ikeda.nagano.jp",
  	"ikusaka.nagano.jp",
  	"ina.nagano.jp",
  	"karuizawa.nagano.jp",
  	"kawakami.nagano.jp",
  	"kiso.nagano.jp",
  	"kisofukushima.nagano.jp",
  	"kitaaiki.nagano.jp",
  	"komagane.nagano.jp",
  	"komoro.nagano.jp",
  	"matsukawa.nagano.jp",
  	"matsumoto.nagano.jp",
  	"miasa.nagano.jp",
  	"minamiaiki.nagano.jp",
  	"minamimaki.nagano.jp",
  	"minamiminowa.nagano.jp",
  	"minowa.nagano.jp",
  	"miyada.nagano.jp",
  	"miyota.nagano.jp",
  	"mochizuki.nagano.jp",
  	"nagano.nagano.jp",
  	"nagawa.nagano.jp",
  	"nagiso.nagano.jp",
  	"nakagawa.nagano.jp",
  	"nakano.nagano.jp",
  	"nozawaonsen.nagano.jp",
  	"obuse.nagano.jp",
  	"ogawa.nagano.jp",
  	"okaya.nagano.jp",
  	"omachi.nagano.jp",
  	"omi.nagano.jp",
  	"ookuwa.nagano.jp",
  	"ooshika.nagano.jp",
  	"otaki.nagano.jp",
  	"otari.nagano.jp",
  	"sakae.nagano.jp",
  	"sakaki.nagano.jp",
  	"saku.nagano.jp",
  	"sakuho.nagano.jp",
  	"shimosuwa.nagano.jp",
  	"shinanomachi.nagano.jp",
  	"shiojiri.nagano.jp",
  	"suwa.nagano.jp",
  	"suzaka.nagano.jp",
  	"takagi.nagano.jp",
  	"takamori.nagano.jp",
  	"takayama.nagano.jp",
  	"tateshina.nagano.jp",
  	"tatsuno.nagano.jp",
  	"togakushi.nagano.jp",
  	"togura.nagano.jp",
  	"tomi.nagano.jp",
  	"ueda.nagano.jp",
  	"wada.nagano.jp",
  	"yamagata.nagano.jp",
  	"yamanouchi.nagano.jp",
  	"yasaka.nagano.jp",
  	"yasuoka.nagano.jp",
  	"chijiwa.nagasaki.jp",
  	"futsu.nagasaki.jp",
  	"goto.nagasaki.jp",
  	"hasami.nagasaki.jp",
  	"hirado.nagasaki.jp",
  	"iki.nagasaki.jp",
  	"isahaya.nagasaki.jp",
  	"kawatana.nagasaki.jp",
  	"kuchinotsu.nagasaki.jp",
  	"matsuura.nagasaki.jp",
  	"nagasaki.nagasaki.jp",
  	"obama.nagasaki.jp",
  	"omura.nagasaki.jp",
  	"oseto.nagasaki.jp",
  	"saikai.nagasaki.jp",
  	"sasebo.nagasaki.jp",
  	"seihi.nagasaki.jp",
  	"shimabara.nagasaki.jp",
  	"shinkamigoto.nagasaki.jp",
  	"togitsu.nagasaki.jp",
  	"tsushima.nagasaki.jp",
  	"unzen.nagasaki.jp",
  	"ando.nara.jp",
  	"gose.nara.jp",
  	"heguri.nara.jp",
  	"higashiyoshino.nara.jp",
  	"ikaruga.nara.jp",
  	"ikoma.nara.jp",
  	"kamikitayama.nara.jp",
  	"kanmaki.nara.jp",
  	"kashiba.nara.jp",
  	"kashihara.nara.jp",
  	"katsuragi.nara.jp",
  	"kawai.nara.jp",
  	"kawakami.nara.jp",
  	"kawanishi.nara.jp",
  	"koryo.nara.jp",
  	"kurotaki.nara.jp",
  	"mitsue.nara.jp",
  	"miyake.nara.jp",
  	"nara.nara.jp",
  	"nosegawa.nara.jp",
  	"oji.nara.jp",
  	"ouda.nara.jp",
  	"oyodo.nara.jp",
  	"sakurai.nara.jp",
  	"sango.nara.jp",
  	"shimoichi.nara.jp",
  	"shimokitayama.nara.jp",
  	"shinjo.nara.jp",
  	"soni.nara.jp",
  	"takatori.nara.jp",
  	"tawaramoto.nara.jp",
  	"tenkawa.nara.jp",
  	"tenri.nara.jp",
  	"uda.nara.jp",
  	"yamatokoriyama.nara.jp",
  	"yamatotakada.nara.jp",
  	"yamazoe.nara.jp",
  	"yoshino.nara.jp",
  	"aga.niigata.jp",
  	"agano.niigata.jp",
  	"gosen.niigata.jp",
  	"itoigawa.niigata.jp",
  	"izumozaki.niigata.jp",
  	"joetsu.niigata.jp",
  	"kamo.niigata.jp",
  	"kariwa.niigata.jp",
  	"kashiwazaki.niigata.jp",
  	"minamiuonuma.niigata.jp",
  	"mitsuke.niigata.jp",
  	"muika.niigata.jp",
  	"murakami.niigata.jp",
  	"myoko.niigata.jp",
  	"nagaoka.niigata.jp",
  	"niigata.niigata.jp",
  	"ojiya.niigata.jp",
  	"omi.niigata.jp",
  	"sado.niigata.jp",
  	"sanjo.niigata.jp",
  	"seiro.niigata.jp",
  	"seirou.niigata.jp",
  	"sekikawa.niigata.jp",
  	"shibata.niigata.jp",
  	"tagami.niigata.jp",
  	"tainai.niigata.jp",
  	"tochio.niigata.jp",
  	"tokamachi.niigata.jp",
  	"tsubame.niigata.jp",
  	"tsunan.niigata.jp",
  	"uonuma.niigata.jp",
  	"yahiko.niigata.jp",
  	"yoita.niigata.jp",
  	"yuzawa.niigata.jp",
  	"beppu.oita.jp",
  	"bungoono.oita.jp",
  	"bungotakada.oita.jp",
  	"hasama.oita.jp",
  	"hiji.oita.jp",
  	"himeshima.oita.jp",
  	"hita.oita.jp",
  	"kamitsue.oita.jp",
  	"kokonoe.oita.jp",
  	"kuju.oita.jp",
  	"kunisaki.oita.jp",
  	"kusu.oita.jp",
  	"oita.oita.jp",
  	"saiki.oita.jp",
  	"taketa.oita.jp",
  	"tsukumi.oita.jp",
  	"usa.oita.jp",
  	"usuki.oita.jp",
  	"yufu.oita.jp",
  	"akaiwa.okayama.jp",
  	"asakuchi.okayama.jp",
  	"bizen.okayama.jp",
  	"hayashima.okayama.jp",
  	"ibara.okayama.jp",
  	"kagamino.okayama.jp",
  	"kasaoka.okayama.jp",
  	"kibichuo.okayama.jp",
  	"kumenan.okayama.jp",
  	"kurashiki.okayama.jp",
  	"maniwa.okayama.jp",
  	"misaki.okayama.jp",
  	"nagi.okayama.jp",
  	"niimi.okayama.jp",
  	"nishiawakura.okayama.jp",
  	"okayama.okayama.jp",
  	"satosho.okayama.jp",
  	"setouchi.okayama.jp",
  	"shinjo.okayama.jp",
  	"shoo.okayama.jp",
  	"soja.okayama.jp",
  	"takahashi.okayama.jp",
  	"tamano.okayama.jp",
  	"tsuyama.okayama.jp",
  	"wake.okayama.jp",
  	"yakage.okayama.jp",
  	"aguni.okinawa.jp",
  	"ginowan.okinawa.jp",
  	"ginoza.okinawa.jp",
  	"gushikami.okinawa.jp",
  	"haebaru.okinawa.jp",
  	"higashi.okinawa.jp",
  	"hirara.okinawa.jp",
  	"iheya.okinawa.jp",
  	"ishigaki.okinawa.jp",
  	"ishikawa.okinawa.jp",
  	"itoman.okinawa.jp",
  	"izena.okinawa.jp",
  	"kadena.okinawa.jp",
  	"kin.okinawa.jp",
  	"kitadaito.okinawa.jp",
  	"kitanakagusuku.okinawa.jp",
  	"kumejima.okinawa.jp",
  	"kunigami.okinawa.jp",
  	"minamidaito.okinawa.jp",
  	"motobu.okinawa.jp",
  	"nago.okinawa.jp",
  	"naha.okinawa.jp",
  	"nakagusuku.okinawa.jp",
  	"nakijin.okinawa.jp",
  	"nanjo.okinawa.jp",
  	"nishihara.okinawa.jp",
  	"ogimi.okinawa.jp",
  	"okinawa.okinawa.jp",
  	"onna.okinawa.jp",
  	"shimoji.okinawa.jp",
  	"taketomi.okinawa.jp",
  	"tarama.okinawa.jp",
  	"tokashiki.okinawa.jp",
  	"tomigusuku.okinawa.jp",
  	"tonaki.okinawa.jp",
  	"urasoe.okinawa.jp",
  	"uruma.okinawa.jp",
  	"yaese.okinawa.jp",
  	"yomitan.okinawa.jp",
  	"yonabaru.okinawa.jp",
  	"yonaguni.okinawa.jp",
  	"zamami.okinawa.jp",
  	"abeno.osaka.jp",
  	"chihayaakasaka.osaka.jp",
  	"chuo.osaka.jp",
  	"daito.osaka.jp",
  	"fujiidera.osaka.jp",
  	"habikino.osaka.jp",
  	"hannan.osaka.jp",
  	"higashiosaka.osaka.jp",
  	"higashisumiyoshi.osaka.jp",
  	"higashiyodogawa.osaka.jp",
  	"hirakata.osaka.jp",
  	"ibaraki.osaka.jp",
  	"ikeda.osaka.jp",
  	"izumi.osaka.jp",
  	"izumiotsu.osaka.jp",
  	"izumisano.osaka.jp",
  	"kadoma.osaka.jp",
  	"kaizuka.osaka.jp",
  	"kanan.osaka.jp",
  	"kashiwara.osaka.jp",
  	"katano.osaka.jp",
  	"kawachinagano.osaka.jp",
  	"kishiwada.osaka.jp",
  	"kita.osaka.jp",
  	"kumatori.osaka.jp",
  	"matsubara.osaka.jp",
  	"minato.osaka.jp",
  	"minoh.osaka.jp",
  	"misaki.osaka.jp",
  	"moriguchi.osaka.jp",
  	"neyagawa.osaka.jp",
  	"nishi.osaka.jp",
  	"nose.osaka.jp",
  	"osakasayama.osaka.jp",
  	"sakai.osaka.jp",
  	"sayama.osaka.jp",
  	"sennan.osaka.jp",
  	"settsu.osaka.jp",
  	"shijonawate.osaka.jp",
  	"shimamoto.osaka.jp",
  	"suita.osaka.jp",
  	"tadaoka.osaka.jp",
  	"taishi.osaka.jp",
  	"tajiri.osaka.jp",
  	"takaishi.osaka.jp",
  	"takatsuki.osaka.jp",
  	"tondabayashi.osaka.jp",
  	"toyonaka.osaka.jp",
  	"toyono.osaka.jp",
  	"yao.osaka.jp",
  	"ariake.saga.jp",
  	"arita.saga.jp",
  	"fukudomi.saga.jp",
  	"genkai.saga.jp",
  	"hamatama.saga.jp",
  	"hizen.saga.jp",
  	"imari.saga.jp",
  	"kamimine.saga.jp",
  	"kanzaki.saga.jp",
  	"karatsu.saga.jp",
  	"kashima.saga.jp",
  	"kitagata.saga.jp",
  	"kitahata.saga.jp",
  	"kiyama.saga.jp",
  	"kouhoku.saga.jp",
  	"kyuragi.saga.jp",
  	"nishiarita.saga.jp",
  	"ogi.saga.jp",
  	"omachi.saga.jp",
  	"ouchi.saga.jp",
  	"saga.saga.jp",
  	"shiroishi.saga.jp",
  	"taku.saga.jp",
  	"tara.saga.jp",
  	"tosu.saga.jp",
  	"yoshinogari.saga.jp",
  	"arakawa.saitama.jp",
  	"asaka.saitama.jp",
  	"chichibu.saitama.jp",
  	"fujimi.saitama.jp",
  	"fujimino.saitama.jp",
  	"fukaya.saitama.jp",
  	"hanno.saitama.jp",
  	"hanyu.saitama.jp",
  	"hasuda.saitama.jp",
  	"hatogaya.saitama.jp",
  	"hatoyama.saitama.jp",
  	"hidaka.saitama.jp",
  	"higashichichibu.saitama.jp",
  	"higashimatsuyama.saitama.jp",
  	"honjo.saitama.jp",
  	"ina.saitama.jp",
  	"iruma.saitama.jp",
  	"iwatsuki.saitama.jp",
  	"kamiizumi.saitama.jp",
  	"kamikawa.saitama.jp",
  	"kamisato.saitama.jp",
  	"kasukabe.saitama.jp",
  	"kawagoe.saitama.jp",
  	"kawaguchi.saitama.jp",
  	"kawajima.saitama.jp",
  	"kazo.saitama.jp",
  	"kitamoto.saitama.jp",
  	"koshigaya.saitama.jp",
  	"kounosu.saitama.jp",
  	"kuki.saitama.jp",
  	"kumagaya.saitama.jp",
  	"matsubushi.saitama.jp",
  	"minano.saitama.jp",
  	"misato.saitama.jp",
  	"miyashiro.saitama.jp",
  	"miyoshi.saitama.jp",
  	"moroyama.saitama.jp",
  	"nagatoro.saitama.jp",
  	"namegawa.saitama.jp",
  	"niiza.saitama.jp",
  	"ogano.saitama.jp",
  	"ogawa.saitama.jp",
  	"ogose.saitama.jp",
  	"okegawa.saitama.jp",
  	"omiya.saitama.jp",
  	"otaki.saitama.jp",
  	"ranzan.saitama.jp",
  	"ryokami.saitama.jp",
  	"saitama.saitama.jp",
  	"sakado.saitama.jp",
  	"satte.saitama.jp",
  	"sayama.saitama.jp",
  	"shiki.saitama.jp",
  	"shiraoka.saitama.jp",
  	"soka.saitama.jp",
  	"sugito.saitama.jp",
  	"toda.saitama.jp",
  	"tokigawa.saitama.jp",
  	"tokorozawa.saitama.jp",
  	"tsurugashima.saitama.jp",
  	"urawa.saitama.jp",
  	"warabi.saitama.jp",
  	"yashio.saitama.jp",
  	"yokoze.saitama.jp",
  	"yono.saitama.jp",
  	"yorii.saitama.jp",
  	"yoshida.saitama.jp",
  	"yoshikawa.saitama.jp",
  	"yoshimi.saitama.jp",
  	"aisho.shiga.jp",
  	"gamo.shiga.jp",
  	"higashiomi.shiga.jp",
  	"hikone.shiga.jp",
  	"koka.shiga.jp",
  	"konan.shiga.jp",
  	"kosei.shiga.jp",
  	"koto.shiga.jp",
  	"kusatsu.shiga.jp",
  	"maibara.shiga.jp",
  	"moriyama.shiga.jp",
  	"nagahama.shiga.jp",
  	"nishiazai.shiga.jp",
  	"notogawa.shiga.jp",
  	"omihachiman.shiga.jp",
  	"otsu.shiga.jp",
  	"ritto.shiga.jp",
  	"ryuoh.shiga.jp",
  	"takashima.shiga.jp",
  	"takatsuki.shiga.jp",
  	"torahime.shiga.jp",
  	"toyosato.shiga.jp",
  	"yasu.shiga.jp",
  	"akagi.shimane.jp",
  	"ama.shimane.jp",
  	"gotsu.shimane.jp",
  	"hamada.shimane.jp",
  	"higashiizumo.shimane.jp",
  	"hikawa.shimane.jp",
  	"hikimi.shimane.jp",
  	"izumo.shimane.jp",
  	"kakinoki.shimane.jp",
  	"masuda.shimane.jp",
  	"matsue.shimane.jp",
  	"misato.shimane.jp",
  	"nishinoshima.shimane.jp",
  	"ohda.shimane.jp",
  	"okinoshima.shimane.jp",
  	"okuizumo.shimane.jp",
  	"shimane.shimane.jp",
  	"tamayu.shimane.jp",
  	"tsuwano.shimane.jp",
  	"unnan.shimane.jp",
  	"yakumo.shimane.jp",
  	"yasugi.shimane.jp",
  	"yatsuka.shimane.jp",
  	"arai.shizuoka.jp",
  	"atami.shizuoka.jp",
  	"fuji.shizuoka.jp",
  	"fujieda.shizuoka.jp",
  	"fujikawa.shizuoka.jp",
  	"fujinomiya.shizuoka.jp",
  	"fukuroi.shizuoka.jp",
  	"gotemba.shizuoka.jp",
  	"haibara.shizuoka.jp",
  	"hamamatsu.shizuoka.jp",
  	"higashiizu.shizuoka.jp",
  	"ito.shizuoka.jp",
  	"iwata.shizuoka.jp",
  	"izu.shizuoka.jp",
  	"izunokuni.shizuoka.jp",
  	"kakegawa.shizuoka.jp",
  	"kannami.shizuoka.jp",
  	"kawanehon.shizuoka.jp",
  	"kawazu.shizuoka.jp",
  	"kikugawa.shizuoka.jp",
  	"kosai.shizuoka.jp",
  	"makinohara.shizuoka.jp",
  	"matsuzaki.shizuoka.jp",
  	"minamiizu.shizuoka.jp",
  	"mishima.shizuoka.jp",
  	"morimachi.shizuoka.jp",
  	"nishiizu.shizuoka.jp",
  	"numazu.shizuoka.jp",
  	"omaezaki.shizuoka.jp",
  	"shimada.shizuoka.jp",
  	"shimizu.shizuoka.jp",
  	"shimoda.shizuoka.jp",
  	"shizuoka.shizuoka.jp",
  	"susono.shizuoka.jp",
  	"yaizu.shizuoka.jp",
  	"yoshida.shizuoka.jp",
  	"ashikaga.tochigi.jp",
  	"bato.tochigi.jp",
  	"haga.tochigi.jp",
  	"ichikai.tochigi.jp",
  	"iwafune.tochigi.jp",
  	"kaminokawa.tochigi.jp",
  	"kanuma.tochigi.jp",
  	"karasuyama.tochigi.jp",
  	"kuroiso.tochigi.jp",
  	"mashiko.tochigi.jp",
  	"mibu.tochigi.jp",
  	"moka.tochigi.jp",
  	"motegi.tochigi.jp",
  	"nasu.tochigi.jp",
  	"nasushiobara.tochigi.jp",
  	"nikko.tochigi.jp",
  	"nishikata.tochigi.jp",
  	"nogi.tochigi.jp",
  	"ohira.tochigi.jp",
  	"ohtawara.tochigi.jp",
  	"oyama.tochigi.jp",
  	"sakura.tochigi.jp",
  	"sano.tochigi.jp",
  	"shimotsuke.tochigi.jp",
  	"shioya.tochigi.jp",
  	"takanezawa.tochigi.jp",
  	"tochigi.tochigi.jp",
  	"tsuga.tochigi.jp",
  	"ujiie.tochigi.jp",
  	"utsunomiya.tochigi.jp",
  	"yaita.tochigi.jp",
  	"aizumi.tokushima.jp",
  	"anan.tokushima.jp",
  	"ichiba.tokushima.jp",
  	"itano.tokushima.jp",
  	"kainan.tokushima.jp",
  	"komatsushima.tokushima.jp",
  	"matsushige.tokushima.jp",
  	"mima.tokushima.jp",
  	"minami.tokushima.jp",
  	"miyoshi.tokushima.jp",
  	"mugi.tokushima.jp",
  	"nakagawa.tokushima.jp",
  	"naruto.tokushima.jp",
  	"sanagochi.tokushima.jp",
  	"shishikui.tokushima.jp",
  	"tokushima.tokushima.jp",
  	"wajiki.tokushima.jp",
  	"adachi.tokyo.jp",
  	"akiruno.tokyo.jp",
  	"akishima.tokyo.jp",
  	"aogashima.tokyo.jp",
  	"arakawa.tokyo.jp",
  	"bunkyo.tokyo.jp",
  	"chiyoda.tokyo.jp",
  	"chofu.tokyo.jp",
  	"chuo.tokyo.jp",
  	"edogawa.tokyo.jp",
  	"fuchu.tokyo.jp",
  	"fussa.tokyo.jp",
  	"hachijo.tokyo.jp",
  	"hachioji.tokyo.jp",
  	"hamura.tokyo.jp",
  	"higashikurume.tokyo.jp",
  	"higashimurayama.tokyo.jp",
  	"higashiyamato.tokyo.jp",
  	"hino.tokyo.jp",
  	"hinode.tokyo.jp",
  	"hinohara.tokyo.jp",
  	"inagi.tokyo.jp",
  	"itabashi.tokyo.jp",
  	"katsushika.tokyo.jp",
  	"kita.tokyo.jp",
  	"kiyose.tokyo.jp",
  	"kodaira.tokyo.jp",
  	"koganei.tokyo.jp",
  	"kokubunji.tokyo.jp",
  	"komae.tokyo.jp",
  	"koto.tokyo.jp",
  	"kouzushima.tokyo.jp",
  	"kunitachi.tokyo.jp",
  	"machida.tokyo.jp",
  	"meguro.tokyo.jp",
  	"minato.tokyo.jp",
  	"mitaka.tokyo.jp",
  	"mizuho.tokyo.jp",
  	"musashimurayama.tokyo.jp",
  	"musashino.tokyo.jp",
  	"nakano.tokyo.jp",
  	"nerima.tokyo.jp",
  	"ogasawara.tokyo.jp",
  	"okutama.tokyo.jp",
  	"ome.tokyo.jp",
  	"oshima.tokyo.jp",
  	"ota.tokyo.jp",
  	"setagaya.tokyo.jp",
  	"shibuya.tokyo.jp",
  	"shinagawa.tokyo.jp",
  	"shinjuku.tokyo.jp",
  	"suginami.tokyo.jp",
  	"sumida.tokyo.jp",
  	"tachikawa.tokyo.jp",
  	"taito.tokyo.jp",
  	"tama.tokyo.jp",
  	"toshima.tokyo.jp",
  	"chizu.tottori.jp",
  	"hino.tottori.jp",
  	"kawahara.tottori.jp",
  	"koge.tottori.jp",
  	"kotoura.tottori.jp",
  	"misasa.tottori.jp",
  	"nanbu.tottori.jp",
  	"nichinan.tottori.jp",
  	"sakaiminato.tottori.jp",
  	"tottori.tottori.jp",
  	"wakasa.tottori.jp",
  	"yazu.tottori.jp",
  	"yonago.tottori.jp",
  	"asahi.toyama.jp",
  	"fuchu.toyama.jp",
  	"fukumitsu.toyama.jp",
  	"funahashi.toyama.jp",
  	"himi.toyama.jp",
  	"imizu.toyama.jp",
  	"inami.toyama.jp",
  	"johana.toyama.jp",
  	"kamiichi.toyama.jp",
  	"kurobe.toyama.jp",
  	"nakaniikawa.toyama.jp",
  	"namerikawa.toyama.jp",
  	"nanto.toyama.jp",
  	"nyuzen.toyama.jp",
  	"oyabe.toyama.jp",
  	"taira.toyama.jp",
  	"takaoka.toyama.jp",
  	"tateyama.toyama.jp",
  	"toga.toyama.jp",
  	"tonami.toyama.jp",
  	"toyama.toyama.jp",
  	"unazuki.toyama.jp",
  	"uozu.toyama.jp",
  	"yamada.toyama.jp",
  	"arida.wakayama.jp",
  	"aridagawa.wakayama.jp",
  	"gobo.wakayama.jp",
  	"hashimoto.wakayama.jp",
  	"hidaka.wakayama.jp",
  	"hirogawa.wakayama.jp",
  	"inami.wakayama.jp",
  	"iwade.wakayama.jp",
  	"kainan.wakayama.jp",
  	"kamitonda.wakayama.jp",
  	"katsuragi.wakayama.jp",
  	"kimino.wakayama.jp",
  	"kinokawa.wakayama.jp",
  	"kitayama.wakayama.jp",
  	"koya.wakayama.jp",
  	"koza.wakayama.jp",
  	"kozagawa.wakayama.jp",
  	"kudoyama.wakayama.jp",
  	"kushimoto.wakayama.jp",
  	"mihama.wakayama.jp",
  	"misato.wakayama.jp",
  	"nachikatsuura.wakayama.jp",
  	"shingu.wakayama.jp",
  	"shirahama.wakayama.jp",
  	"taiji.wakayama.jp",
  	"tanabe.wakayama.jp",
  	"wakayama.wakayama.jp",
  	"yuasa.wakayama.jp",
  	"yura.wakayama.jp",
  	"asahi.yamagata.jp",
  	"funagata.yamagata.jp",
  	"higashine.yamagata.jp",
  	"iide.yamagata.jp",
  	"kahoku.yamagata.jp",
  	"kaminoyama.yamagata.jp",
  	"kaneyama.yamagata.jp",
  	"kawanishi.yamagata.jp",
  	"mamurogawa.yamagata.jp",
  	"mikawa.yamagata.jp",
  	"murayama.yamagata.jp",
  	"nagai.yamagata.jp",
  	"nakayama.yamagata.jp",
  	"nanyo.yamagata.jp",
  	"nishikawa.yamagata.jp",
  	"obanazawa.yamagata.jp",
  	"oe.yamagata.jp",
  	"oguni.yamagata.jp",
  	"ohkura.yamagata.jp",
  	"oishida.yamagata.jp",
  	"sagae.yamagata.jp",
  	"sakata.yamagata.jp",
  	"sakegawa.yamagata.jp",
  	"shinjo.yamagata.jp",
  	"shirataka.yamagata.jp",
  	"shonai.yamagata.jp",
  	"takahata.yamagata.jp",
  	"tendo.yamagata.jp",
  	"tozawa.yamagata.jp",
  	"tsuruoka.yamagata.jp",
  	"yamagata.yamagata.jp",
  	"yamanobe.yamagata.jp",
  	"yonezawa.yamagata.jp",
  	"yuza.yamagata.jp",
  	"abu.yamaguchi.jp",
  	"hagi.yamaguchi.jp",
  	"hikari.yamaguchi.jp",
  	"hofu.yamaguchi.jp",
  	"iwakuni.yamaguchi.jp",
  	"kudamatsu.yamaguchi.jp",
  	"mitou.yamaguchi.jp",
  	"nagato.yamaguchi.jp",
  	"oshima.yamaguchi.jp",
  	"shimonoseki.yamaguchi.jp",
  	"shunan.yamaguchi.jp",
  	"tabuse.yamaguchi.jp",
  	"tokuyama.yamaguchi.jp",
  	"toyota.yamaguchi.jp",
  	"ube.yamaguchi.jp",
  	"yuu.yamaguchi.jp",
  	"chuo.yamanashi.jp",
  	"doshi.yamanashi.jp",
  	"fuefuki.yamanashi.jp",
  	"fujikawa.yamanashi.jp",
  	"fujikawaguchiko.yamanashi.jp",
  	"fujiyoshida.yamanashi.jp",
  	"hayakawa.yamanashi.jp",
  	"hokuto.yamanashi.jp",
  	"ichikawamisato.yamanashi.jp",
  	"kai.yamanashi.jp",
  	"kofu.yamanashi.jp",
  	"koshu.yamanashi.jp",
  	"kosuge.yamanashi.jp",
  	"minami-alps.yamanashi.jp",
  	"minobu.yamanashi.jp",
  	"nakamichi.yamanashi.jp",
  	"nanbu.yamanashi.jp",
  	"narusawa.yamanashi.jp",
  	"nirasaki.yamanashi.jp",
  	"nishikatsura.yamanashi.jp",
  	"oshino.yamanashi.jp",
  	"otsuki.yamanashi.jp",
  	"showa.yamanashi.jp",
  	"tabayama.yamanashi.jp",
  	"tsuru.yamanashi.jp",
  	"uenohara.yamanashi.jp",
  	"yamanakako.yamanashi.jp",
  	"yamanashi.yamanashi.jp",
  	"ke",
  	"ac.ke",
  	"co.ke",
  	"go.ke",
  	"info.ke",
  	"me.ke",
  	"mobi.ke",
  	"ne.ke",
  	"or.ke",
  	"sc.ke",
  	"kg",
  	"org.kg",
  	"net.kg",
  	"com.kg",
  	"edu.kg",
  	"gov.kg",
  	"mil.kg",
  	"*.kh",
  	"ki",
  	"edu.ki",
  	"biz.ki",
  	"net.ki",
  	"org.ki",
  	"gov.ki",
  	"info.ki",
  	"com.ki",
  	"km",
  	"org.km",
  	"nom.km",
  	"gov.km",
  	"prd.km",
  	"tm.km",
  	"edu.km",
  	"mil.km",
  	"ass.km",
  	"com.km",
  	"coop.km",
  	"asso.km",
  	"presse.km",
  	"medecin.km",
  	"notaires.km",
  	"pharmaciens.km",
  	"veterinaire.km",
  	"gouv.km",
  	"kn",
  	"net.kn",
  	"org.kn",
  	"edu.kn",
  	"gov.kn",
  	"kp",
  	"com.kp",
  	"edu.kp",
  	"gov.kp",
  	"org.kp",
  	"rep.kp",
  	"tra.kp",
  	"kr",
  	"ac.kr",
  	"co.kr",
  	"es.kr",
  	"go.kr",
  	"hs.kr",
  	"kg.kr",
  	"mil.kr",
  	"ms.kr",
  	"ne.kr",
  	"or.kr",
  	"pe.kr",
  	"re.kr",
  	"sc.kr",
  	"busan.kr",
  	"chungbuk.kr",
  	"chungnam.kr",
  	"daegu.kr",
  	"daejeon.kr",
  	"gangwon.kr",
  	"gwangju.kr",
  	"gyeongbuk.kr",
  	"gyeonggi.kr",
  	"gyeongnam.kr",
  	"incheon.kr",
  	"jeju.kr",
  	"jeonbuk.kr",
  	"jeonnam.kr",
  	"seoul.kr",
  	"ulsan.kr",
  	"kw",
  	"com.kw",
  	"edu.kw",
  	"emb.kw",
  	"gov.kw",
  	"ind.kw",
  	"net.kw",
  	"org.kw",
  	"ky",
  	"com.ky",
  	"edu.ky",
  	"net.ky",
  	"org.ky",
  	"kz",
  	"org.kz",
  	"edu.kz",
  	"net.kz",
  	"gov.kz",
  	"mil.kz",
  	"com.kz",
  	"la",
  	"int.la",
  	"net.la",
  	"info.la",
  	"edu.la",
  	"gov.la",
  	"per.la",
  	"com.la",
  	"org.la",
  	"lb",
  	"com.lb",
  	"edu.lb",
  	"gov.lb",
  	"net.lb",
  	"org.lb",
  	"lc",
  	"com.lc",
  	"net.lc",
  	"co.lc",
  	"org.lc",
  	"edu.lc",
  	"gov.lc",
  	"li",
  	"lk",
  	"gov.lk",
  	"sch.lk",
  	"net.lk",
  	"int.lk",
  	"com.lk",
  	"org.lk",
  	"edu.lk",
  	"ngo.lk",
  	"soc.lk",
  	"web.lk",
  	"ltd.lk",
  	"assn.lk",
  	"grp.lk",
  	"hotel.lk",
  	"ac.lk",
  	"lr",
  	"com.lr",
  	"edu.lr",
  	"gov.lr",
  	"org.lr",
  	"net.lr",
  	"ls",
  	"ac.ls",
  	"biz.ls",
  	"co.ls",
  	"edu.ls",
  	"gov.ls",
  	"info.ls",
  	"net.ls",
  	"org.ls",
  	"sc.ls",
  	"lt",
  	"gov.lt",
  	"lu",
  	"lv",
  	"com.lv",
  	"edu.lv",
  	"gov.lv",
  	"org.lv",
  	"mil.lv",
  	"id.lv",
  	"net.lv",
  	"asn.lv",
  	"conf.lv",
  	"ly",
  	"com.ly",
  	"net.ly",
  	"gov.ly",
  	"plc.ly",
  	"edu.ly",
  	"sch.ly",
  	"med.ly",
  	"org.ly",
  	"id.ly",
  	"ma",
  	"co.ma",
  	"net.ma",
  	"gov.ma",
  	"org.ma",
  	"ac.ma",
  	"press.ma",
  	"mc",
  	"tm.mc",
  	"asso.mc",
  	"md",
  	"me",
  	"co.me",
  	"net.me",
  	"org.me",
  	"edu.me",
  	"ac.me",
  	"gov.me",
  	"its.me",
  	"priv.me",
  	"mg",
  	"org.mg",
  	"nom.mg",
  	"gov.mg",
  	"prd.mg",
  	"tm.mg",
  	"edu.mg",
  	"mil.mg",
  	"com.mg",
  	"co.mg",
  	"mh",
  	"mil",
  	"mk",
  	"com.mk",
  	"org.mk",
  	"net.mk",
  	"edu.mk",
  	"gov.mk",
  	"inf.mk",
  	"name.mk",
  	"ml",
  	"com.ml",
  	"edu.ml",
  	"gouv.ml",
  	"gov.ml",
  	"net.ml",
  	"org.ml",
  	"presse.ml",
  	"*.mm",
  	"mn",
  	"gov.mn",
  	"edu.mn",
  	"org.mn",
  	"mo",
  	"com.mo",
  	"net.mo",
  	"org.mo",
  	"edu.mo",
  	"gov.mo",
  	"mobi",
  	"mp",
  	"mq",
  	"mr",
  	"gov.mr",
  	"ms",
  	"com.ms",
  	"edu.ms",
  	"gov.ms",
  	"net.ms",
  	"org.ms",
  	"mt",
  	"com.mt",
  	"edu.mt",
  	"net.mt",
  	"org.mt",
  	"mu",
  	"com.mu",
  	"net.mu",
  	"org.mu",
  	"gov.mu",
  	"ac.mu",
  	"co.mu",
  	"or.mu",
  	"museum",
  	"academy.museum",
  	"agriculture.museum",
  	"air.museum",
  	"airguard.museum",
  	"alabama.museum",
  	"alaska.museum",
  	"amber.museum",
  	"ambulance.museum",
  	"american.museum",
  	"americana.museum",
  	"americanantiques.museum",
  	"americanart.museum",
  	"amsterdam.museum",
  	"and.museum",
  	"annefrank.museum",
  	"anthro.museum",
  	"anthropology.museum",
  	"antiques.museum",
  	"aquarium.museum",
  	"arboretum.museum",
  	"archaeological.museum",
  	"archaeology.museum",
  	"architecture.museum",
  	"art.museum",
  	"artanddesign.museum",
  	"artcenter.museum",
  	"artdeco.museum",
  	"arteducation.museum",
  	"artgallery.museum",
  	"arts.museum",
  	"artsandcrafts.museum",
  	"asmatart.museum",
  	"assassination.museum",
  	"assisi.museum",
  	"association.museum",
  	"astronomy.museum",
  	"atlanta.museum",
  	"austin.museum",
  	"australia.museum",
  	"automotive.museum",
  	"aviation.museum",
  	"axis.museum",
  	"badajoz.museum",
  	"baghdad.museum",
  	"bahn.museum",
  	"bale.museum",
  	"baltimore.museum",
  	"barcelona.museum",
  	"baseball.museum",
  	"basel.museum",
  	"baths.museum",
  	"bauern.museum",
  	"beauxarts.museum",
  	"beeldengeluid.museum",
  	"bellevue.museum",
  	"bergbau.museum",
  	"berkeley.museum",
  	"berlin.museum",
  	"bern.museum",
  	"bible.museum",
  	"bilbao.museum",
  	"bill.museum",
  	"birdart.museum",
  	"birthplace.museum",
  	"bonn.museum",
  	"boston.museum",
  	"botanical.museum",
  	"botanicalgarden.museum",
  	"botanicgarden.museum",
  	"botany.museum",
  	"brandywinevalley.museum",
  	"brasil.museum",
  	"bristol.museum",
  	"british.museum",
  	"britishcolumbia.museum",
  	"broadcast.museum",
  	"brunel.museum",
  	"brussel.museum",
  	"brussels.museum",
  	"bruxelles.museum",
  	"building.museum",
  	"burghof.museum",
  	"bus.museum",
  	"bushey.museum",
  	"cadaques.museum",
  	"california.museum",
  	"cambridge.museum",
  	"can.museum",
  	"canada.museum",
  	"capebreton.museum",
  	"carrier.museum",
  	"cartoonart.museum",
  	"casadelamoneda.museum",
  	"castle.museum",
  	"castres.museum",
  	"celtic.museum",
  	"center.museum",
  	"chattanooga.museum",
  	"cheltenham.museum",
  	"chesapeakebay.museum",
  	"chicago.museum",
  	"children.museum",
  	"childrens.museum",
  	"childrensgarden.museum",
  	"chiropractic.museum",
  	"chocolate.museum",
  	"christiansburg.museum",
  	"cincinnati.museum",
  	"cinema.museum",
  	"circus.museum",
  	"civilisation.museum",
  	"civilization.museum",
  	"civilwar.museum",
  	"clinton.museum",
  	"clock.museum",
  	"coal.museum",
  	"coastaldefence.museum",
  	"cody.museum",
  	"coldwar.museum",
  	"collection.museum",
  	"colonialwilliamsburg.museum",
  	"coloradoplateau.museum",
  	"columbia.museum",
  	"columbus.museum",
  	"communication.museum",
  	"communications.museum",
  	"community.museum",
  	"computer.museum",
  	"computerhistory.museum",
  	"comunicações.museum",
  	"contemporary.museum",
  	"contemporaryart.museum",
  	"convent.museum",
  	"copenhagen.museum",
  	"corporation.museum",
  	"correios-e-telecomunicações.museum",
  	"corvette.museum",
  	"costume.museum",
  	"countryestate.museum",
  	"county.museum",
  	"crafts.museum",
  	"cranbrook.museum",
  	"creation.museum",
  	"cultural.museum",
  	"culturalcenter.museum",
  	"culture.museum",
  	"cyber.museum",
  	"cymru.museum",
  	"dali.museum",
  	"dallas.museum",
  	"database.museum",
  	"ddr.museum",
  	"decorativearts.museum",
  	"delaware.museum",
  	"delmenhorst.museum",
  	"denmark.museum",
  	"depot.museum",
  	"design.museum",
  	"detroit.museum",
  	"dinosaur.museum",
  	"discovery.museum",
  	"dolls.museum",
  	"donostia.museum",
  	"durham.museum",
  	"eastafrica.museum",
  	"eastcoast.museum",
  	"education.museum",
  	"educational.museum",
  	"egyptian.museum",
  	"eisenbahn.museum",
  	"elburg.museum",
  	"elvendrell.museum",
  	"embroidery.museum",
  	"encyclopedic.museum",
  	"england.museum",
  	"entomology.museum",
  	"environment.museum",
  	"environmentalconservation.museum",
  	"epilepsy.museum",
  	"essex.museum",
  	"estate.museum",
  	"ethnology.museum",
  	"exeter.museum",
  	"exhibition.museum",
  	"family.museum",
  	"farm.museum",
  	"farmequipment.museum",
  	"farmers.museum",
  	"farmstead.museum",
  	"field.museum",
  	"figueres.museum",
  	"filatelia.museum",
  	"film.museum",
  	"fineart.museum",
  	"finearts.museum",
  	"finland.museum",
  	"flanders.museum",
  	"florida.museum",
  	"force.museum",
  	"fortmissoula.museum",
  	"fortworth.museum",
  	"foundation.museum",
  	"francaise.museum",
  	"frankfurt.museum",
  	"franziskaner.museum",
  	"freemasonry.museum",
  	"freiburg.museum",
  	"fribourg.museum",
  	"frog.museum",
  	"fundacio.museum",
  	"furniture.museum",
  	"gallery.museum",
  	"garden.museum",
  	"gateway.museum",
  	"geelvinck.museum",
  	"gemological.museum",
  	"geology.museum",
  	"georgia.museum",
  	"giessen.museum",
  	"glas.museum",
  	"glass.museum",
  	"gorge.museum",
  	"grandrapids.museum",
  	"graz.museum",
  	"guernsey.museum",
  	"halloffame.museum",
  	"hamburg.museum",
  	"handson.museum",
  	"harvestcelebration.museum",
  	"hawaii.museum",
  	"health.museum",
  	"heimatunduhren.museum",
  	"hellas.museum",
  	"helsinki.museum",
  	"hembygdsforbund.museum",
  	"heritage.museum",
  	"histoire.museum",
  	"historical.museum",
  	"historicalsociety.museum",
  	"historichouses.museum",
  	"historisch.museum",
  	"historisches.museum",
  	"history.museum",
  	"historyofscience.museum",
  	"horology.museum",
  	"house.museum",
  	"humanities.museum",
  	"illustration.museum",
  	"imageandsound.museum",
  	"indian.museum",
  	"indiana.museum",
  	"indianapolis.museum",
  	"indianmarket.museum",
  	"intelligence.museum",
  	"interactive.museum",
  	"iraq.museum",
  	"iron.museum",
  	"isleofman.museum",
  	"jamison.museum",
  	"jefferson.museum",
  	"jerusalem.museum",
  	"jewelry.museum",
  	"jewish.museum",
  	"jewishart.museum",
  	"jfk.museum",
  	"journalism.museum",
  	"judaica.museum",
  	"judygarland.museum",
  	"juedisches.museum",
  	"juif.museum",
  	"karate.museum",
  	"karikatur.museum",
  	"kids.museum",
  	"koebenhavn.museum",
  	"koeln.museum",
  	"kunst.museum",
  	"kunstsammlung.museum",
  	"kunstunddesign.museum",
  	"labor.museum",
  	"labour.museum",
  	"lajolla.museum",
  	"lancashire.museum",
  	"landes.museum",
  	"lans.museum",
  	"läns.museum",
  	"larsson.museum",
  	"lewismiller.museum",
  	"lincoln.museum",
  	"linz.museum",
  	"living.museum",
  	"livinghistory.museum",
  	"localhistory.museum",
  	"london.museum",
  	"losangeles.museum",
  	"louvre.museum",
  	"loyalist.museum",
  	"lucerne.museum",
  	"luxembourg.museum",
  	"luzern.museum",
  	"mad.museum",
  	"madrid.museum",
  	"mallorca.museum",
  	"manchester.museum",
  	"mansion.museum",
  	"mansions.museum",
  	"manx.museum",
  	"marburg.museum",
  	"maritime.museum",
  	"maritimo.museum",
  	"maryland.museum",
  	"marylhurst.museum",
  	"media.museum",
  	"medical.museum",
  	"medizinhistorisches.museum",
  	"meeres.museum",
  	"memorial.museum",
  	"mesaverde.museum",
  	"michigan.museum",
  	"midatlantic.museum",
  	"military.museum",
  	"mill.museum",
  	"miners.museum",
  	"mining.museum",
  	"minnesota.museum",
  	"missile.museum",
  	"missoula.museum",
  	"modern.museum",
  	"moma.museum",
  	"money.museum",
  	"monmouth.museum",
  	"monticello.museum",
  	"montreal.museum",
  	"moscow.museum",
  	"motorcycle.museum",
  	"muenchen.museum",
  	"muenster.museum",
  	"mulhouse.museum",
  	"muncie.museum",
  	"museet.museum",
  	"museumcenter.museum",
  	"museumvereniging.museum",
  	"music.museum",
  	"national.museum",
  	"nationalfirearms.museum",
  	"nationalheritage.museum",
  	"nativeamerican.museum",
  	"naturalhistory.museum",
  	"naturalhistorymuseum.museum",
  	"naturalsciences.museum",
  	"nature.museum",
  	"naturhistorisches.museum",
  	"natuurwetenschappen.museum",
  	"naumburg.museum",
  	"naval.museum",
  	"nebraska.museum",
  	"neues.museum",
  	"newhampshire.museum",
  	"newjersey.museum",
  	"newmexico.museum",
  	"newport.museum",
  	"newspaper.museum",
  	"newyork.museum",
  	"niepce.museum",
  	"norfolk.museum",
  	"north.museum",
  	"nrw.museum",
  	"nyc.museum",
  	"nyny.museum",
  	"oceanographic.museum",
  	"oceanographique.museum",
  	"omaha.museum",
  	"online.museum",
  	"ontario.museum",
  	"openair.museum",
  	"oregon.museum",
  	"oregontrail.museum",
  	"otago.museum",
  	"oxford.museum",
  	"pacific.museum",
  	"paderborn.museum",
  	"palace.museum",
  	"paleo.museum",
  	"palmsprings.museum",
  	"panama.museum",
  	"paris.museum",
  	"pasadena.museum",
  	"pharmacy.museum",
  	"philadelphia.museum",
  	"philadelphiaarea.museum",
  	"philately.museum",
  	"phoenix.museum",
  	"photography.museum",
  	"pilots.museum",
  	"pittsburgh.museum",
  	"planetarium.museum",
  	"plantation.museum",
  	"plants.museum",
  	"plaza.museum",
  	"portal.museum",
  	"portland.museum",
  	"portlligat.museum",
  	"posts-and-telecommunications.museum",
  	"preservation.museum",
  	"presidio.museum",
  	"press.museum",
  	"project.museum",
  	"public.museum",
  	"pubol.museum",
  	"quebec.museum",
  	"railroad.museum",
  	"railway.museum",
  	"research.museum",
  	"resistance.museum",
  	"riodejaneiro.museum",
  	"rochester.museum",
  	"rockart.museum",
  	"roma.museum",
  	"russia.museum",
  	"saintlouis.museum",
  	"salem.museum",
  	"salvadordali.museum",
  	"salzburg.museum",
  	"sandiego.museum",
  	"sanfrancisco.museum",
  	"santabarbara.museum",
  	"santacruz.museum",
  	"santafe.museum",
  	"saskatchewan.museum",
  	"satx.museum",
  	"savannahga.museum",
  	"schlesisches.museum",
  	"schoenbrunn.museum",
  	"schokoladen.museum",
  	"school.museum",
  	"schweiz.museum",
  	"science.museum",
  	"scienceandhistory.museum",
  	"scienceandindustry.museum",
  	"sciencecenter.museum",
  	"sciencecenters.museum",
  	"science-fiction.museum",
  	"sciencehistory.museum",
  	"sciences.museum",
  	"sciencesnaturelles.museum",
  	"scotland.museum",
  	"seaport.museum",
  	"settlement.museum",
  	"settlers.museum",
  	"shell.museum",
  	"sherbrooke.museum",
  	"sibenik.museum",
  	"silk.museum",
  	"ski.museum",
  	"skole.museum",
  	"society.museum",
  	"sologne.museum",
  	"soundandvision.museum",
  	"southcarolina.museum",
  	"southwest.museum",
  	"space.museum",
  	"spy.museum",
  	"square.museum",
  	"stadt.museum",
  	"stalbans.museum",
  	"starnberg.museum",
  	"state.museum",
  	"stateofdelaware.museum",
  	"station.museum",
  	"steam.museum",
  	"steiermark.museum",
  	"stjohn.museum",
  	"stockholm.museum",
  	"stpetersburg.museum",
  	"stuttgart.museum",
  	"suisse.museum",
  	"surgeonshall.museum",
  	"surrey.museum",
  	"svizzera.museum",
  	"sweden.museum",
  	"sydney.museum",
  	"tank.museum",
  	"tcm.museum",
  	"technology.museum",
  	"telekommunikation.museum",
  	"television.museum",
  	"texas.museum",
  	"textile.museum",
  	"theater.museum",
  	"time.museum",
  	"timekeeping.museum",
  	"topology.museum",
  	"torino.museum",
  	"touch.museum",
  	"town.museum",
  	"transport.museum",
  	"tree.museum",
  	"trolley.museum",
  	"trust.museum",
  	"trustee.museum",
  	"uhren.museum",
  	"ulm.museum",
  	"undersea.museum",
  	"university.museum",
  	"usa.museum",
  	"usantiques.museum",
  	"usarts.museum",
  	"uscountryestate.museum",
  	"usculture.museum",
  	"usdecorativearts.museum",
  	"usgarden.museum",
  	"ushistory.museum",
  	"ushuaia.museum",
  	"uslivinghistory.museum",
  	"utah.museum",
  	"uvic.museum",
  	"valley.museum",
  	"vantaa.museum",
  	"versailles.museum",
  	"viking.museum",
  	"village.museum",
  	"virginia.museum",
  	"virtual.museum",
  	"virtuel.museum",
  	"vlaanderen.museum",
  	"volkenkunde.museum",
  	"wales.museum",
  	"wallonie.museum",
  	"war.museum",
  	"washingtondc.museum",
  	"watchandclock.museum",
  	"watch-and-clock.museum",
  	"western.museum",
  	"westfalen.museum",
  	"whaling.museum",
  	"wildlife.museum",
  	"williamsburg.museum",
  	"windmill.museum",
  	"workshop.museum",
  	"york.museum",
  	"yorkshire.museum",
  	"yosemite.museum",
  	"youth.museum",
  	"zoological.museum",
  	"zoology.museum",
  	"ירושלים.museum",
  	"иком.museum",
  	"mv",
  	"aero.mv",
  	"biz.mv",
  	"com.mv",
  	"coop.mv",
  	"edu.mv",
  	"gov.mv",
  	"info.mv",
  	"int.mv",
  	"mil.mv",
  	"museum.mv",
  	"name.mv",
  	"net.mv",
  	"org.mv",
  	"pro.mv",
  	"mw",
  	"ac.mw",
  	"biz.mw",
  	"co.mw",
  	"com.mw",
  	"coop.mw",
  	"edu.mw",
  	"gov.mw",
  	"int.mw",
  	"museum.mw",
  	"net.mw",
  	"org.mw",
  	"mx",
  	"com.mx",
  	"org.mx",
  	"gob.mx",
  	"edu.mx",
  	"net.mx",
  	"my",
  	"biz.my",
  	"com.my",
  	"edu.my",
  	"gov.my",
  	"mil.my",
  	"name.my",
  	"net.my",
  	"org.my",
  	"mz",
  	"ac.mz",
  	"adv.mz",
  	"co.mz",
  	"edu.mz",
  	"gov.mz",
  	"mil.mz",
  	"net.mz",
  	"org.mz",
  	"na",
  	"info.na",
  	"pro.na",
  	"name.na",
  	"school.na",
  	"or.na",
  	"dr.na",
  	"us.na",
  	"mx.na",
  	"ca.na",
  	"in.na",
  	"cc.na",
  	"tv.na",
  	"ws.na",
  	"mobi.na",
  	"co.na",
  	"com.na",
  	"org.na",
  	"name",
  	"nc",
  	"asso.nc",
  	"nom.nc",
  	"ne",
  	"net",
  	"nf",
  	"com.nf",
  	"net.nf",
  	"per.nf",
  	"rec.nf",
  	"web.nf",
  	"arts.nf",
  	"firm.nf",
  	"info.nf",
  	"other.nf",
  	"store.nf",
  	"ng",
  	"com.ng",
  	"edu.ng",
  	"gov.ng",
  	"i.ng",
  	"mil.ng",
  	"mobi.ng",
  	"name.ng",
  	"net.ng",
  	"org.ng",
  	"sch.ng",
  	"ni",
  	"ac.ni",
  	"biz.ni",
  	"co.ni",
  	"com.ni",
  	"edu.ni",
  	"gob.ni",
  	"in.ni",
  	"info.ni",
  	"int.ni",
  	"mil.ni",
  	"net.ni",
  	"nom.ni",
  	"org.ni",
  	"web.ni",
  	"nl",
  	"no",
  	"fhs.no",
  	"vgs.no",
  	"fylkesbibl.no",
  	"folkebibl.no",
  	"museum.no",
  	"idrett.no",
  	"priv.no",
  	"mil.no",
  	"stat.no",
  	"dep.no",
  	"kommune.no",
  	"herad.no",
  	"aa.no",
  	"ah.no",
  	"bu.no",
  	"fm.no",
  	"hl.no",
  	"hm.no",
  	"jan-mayen.no",
  	"mr.no",
  	"nl.no",
  	"nt.no",
  	"of.no",
  	"ol.no",
  	"oslo.no",
  	"rl.no",
  	"sf.no",
  	"st.no",
  	"svalbard.no",
  	"tm.no",
  	"tr.no",
  	"va.no",
  	"vf.no",
  	"gs.aa.no",
  	"gs.ah.no",
  	"gs.bu.no",
  	"gs.fm.no",
  	"gs.hl.no",
  	"gs.hm.no",
  	"gs.jan-mayen.no",
  	"gs.mr.no",
  	"gs.nl.no",
  	"gs.nt.no",
  	"gs.of.no",
  	"gs.ol.no",
  	"gs.oslo.no",
  	"gs.rl.no",
  	"gs.sf.no",
  	"gs.st.no",
  	"gs.svalbard.no",
  	"gs.tm.no",
  	"gs.tr.no",
  	"gs.va.no",
  	"gs.vf.no",
  	"akrehamn.no",
  	"åkrehamn.no",
  	"algard.no",
  	"ålgård.no",
  	"arna.no",
  	"brumunddal.no",
  	"bryne.no",
  	"bronnoysund.no",
  	"brønnøysund.no",
  	"drobak.no",
  	"drøbak.no",
  	"egersund.no",
  	"fetsund.no",
  	"floro.no",
  	"florø.no",
  	"fredrikstad.no",
  	"hokksund.no",
  	"honefoss.no",
  	"hønefoss.no",
  	"jessheim.no",
  	"jorpeland.no",
  	"jørpeland.no",
  	"kirkenes.no",
  	"kopervik.no",
  	"krokstadelva.no",
  	"langevag.no",
  	"langevåg.no",
  	"leirvik.no",
  	"mjondalen.no",
  	"mjøndalen.no",
  	"mo-i-rana.no",
  	"mosjoen.no",
  	"mosjøen.no",
  	"nesoddtangen.no",
  	"orkanger.no",
  	"osoyro.no",
  	"osøyro.no",
  	"raholt.no",
  	"råholt.no",
  	"sandnessjoen.no",
  	"sandnessjøen.no",
  	"skedsmokorset.no",
  	"slattum.no",
  	"spjelkavik.no",
  	"stathelle.no",
  	"stavern.no",
  	"stjordalshalsen.no",
  	"stjørdalshalsen.no",
  	"tananger.no",
  	"tranby.no",
  	"vossevangen.no",
  	"afjord.no",
  	"åfjord.no",
  	"agdenes.no",
  	"al.no",
  	"ål.no",
  	"alesund.no",
  	"ålesund.no",
  	"alstahaug.no",
  	"alta.no",
  	"áltá.no",
  	"alaheadju.no",
  	"álaheadju.no",
  	"alvdal.no",
  	"amli.no",
  	"åmli.no",
  	"amot.no",
  	"åmot.no",
  	"andebu.no",
  	"andoy.no",
  	"andøy.no",
  	"andasuolo.no",
  	"ardal.no",
  	"årdal.no",
  	"aremark.no",
  	"arendal.no",
  	"ås.no",
  	"aseral.no",
  	"åseral.no",
  	"asker.no",
  	"askim.no",
  	"askvoll.no",
  	"askoy.no",
  	"askøy.no",
  	"asnes.no",
  	"åsnes.no",
  	"audnedaln.no",
  	"aukra.no",
  	"aure.no",
  	"aurland.no",
  	"aurskog-holand.no",
  	"aurskog-høland.no",
  	"austevoll.no",
  	"austrheim.no",
  	"averoy.no",
  	"averøy.no",
  	"balestrand.no",
  	"ballangen.no",
  	"balat.no",
  	"bálát.no",
  	"balsfjord.no",
  	"bahccavuotna.no",
  	"báhccavuotna.no",
  	"bamble.no",
  	"bardu.no",
  	"beardu.no",
  	"beiarn.no",
  	"bajddar.no",
  	"bájddar.no",
  	"baidar.no",
  	"báidár.no",
  	"berg.no",
  	"bergen.no",
  	"berlevag.no",
  	"berlevåg.no",
  	"bearalvahki.no",
  	"bearalváhki.no",
  	"bindal.no",
  	"birkenes.no",
  	"bjarkoy.no",
  	"bjarkøy.no",
  	"bjerkreim.no",
  	"bjugn.no",
  	"bodo.no",
  	"bodø.no",
  	"badaddja.no",
  	"bådåddjå.no",
  	"budejju.no",
  	"bokn.no",
  	"bremanger.no",
  	"bronnoy.no",
  	"brønnøy.no",
  	"bygland.no",
  	"bykle.no",
  	"barum.no",
  	"bærum.no",
  	"bo.telemark.no",
  	"bø.telemark.no",
  	"bo.nordland.no",
  	"bø.nordland.no",
  	"bievat.no",
  	"bievát.no",
  	"bomlo.no",
  	"bømlo.no",
  	"batsfjord.no",
  	"båtsfjord.no",
  	"bahcavuotna.no",
  	"báhcavuotna.no",
  	"dovre.no",
  	"drammen.no",
  	"drangedal.no",
  	"dyroy.no",
  	"dyrøy.no",
  	"donna.no",
  	"dønna.no",
  	"eid.no",
  	"eidfjord.no",
  	"eidsberg.no",
  	"eidskog.no",
  	"eidsvoll.no",
  	"eigersund.no",
  	"elverum.no",
  	"enebakk.no",
  	"engerdal.no",
  	"etne.no",
  	"etnedal.no",
  	"evenes.no",
  	"evenassi.no",
  	"evenášši.no",
  	"evje-og-hornnes.no",
  	"farsund.no",
  	"fauske.no",
  	"fuossko.no",
  	"fuoisku.no",
  	"fedje.no",
  	"fet.no",
  	"finnoy.no",
  	"finnøy.no",
  	"fitjar.no",
  	"fjaler.no",
  	"fjell.no",
  	"flakstad.no",
  	"flatanger.no",
  	"flekkefjord.no",
  	"flesberg.no",
  	"flora.no",
  	"fla.no",
  	"flå.no",
  	"folldal.no",
  	"forsand.no",
  	"fosnes.no",
  	"frei.no",
  	"frogn.no",
  	"froland.no",
  	"frosta.no",
  	"frana.no",
  	"fræna.no",
  	"froya.no",
  	"frøya.no",
  	"fusa.no",
  	"fyresdal.no",
  	"forde.no",
  	"førde.no",
  	"gamvik.no",
  	"gangaviika.no",
  	"gáŋgaviika.no",
  	"gaular.no",
  	"gausdal.no",
  	"gildeskal.no",
  	"gildeskål.no",
  	"giske.no",
  	"gjemnes.no",
  	"gjerdrum.no",
  	"gjerstad.no",
  	"gjesdal.no",
  	"gjovik.no",
  	"gjøvik.no",
  	"gloppen.no",
  	"gol.no",
  	"gran.no",
  	"grane.no",
  	"granvin.no",
  	"gratangen.no",
  	"grimstad.no",
  	"grong.no",
  	"kraanghke.no",
  	"kråanghke.no",
  	"grue.no",
  	"gulen.no",
  	"hadsel.no",
  	"halden.no",
  	"halsa.no",
  	"hamar.no",
  	"hamaroy.no",
  	"habmer.no",
  	"hábmer.no",
  	"hapmir.no",
  	"hápmir.no",
  	"hammerfest.no",
  	"hammarfeasta.no",
  	"hámmárfeasta.no",
  	"haram.no",
  	"hareid.no",
  	"harstad.no",
  	"hasvik.no",
  	"aknoluokta.no",
  	"ákŋoluokta.no",
  	"hattfjelldal.no",
  	"aarborte.no",
  	"haugesund.no",
  	"hemne.no",
  	"hemnes.no",
  	"hemsedal.no",
  	"heroy.more-og-romsdal.no",
  	"herøy.møre-og-romsdal.no",
  	"heroy.nordland.no",
  	"herøy.nordland.no",
  	"hitra.no",
  	"hjartdal.no",
  	"hjelmeland.no",
  	"hobol.no",
  	"hobøl.no",
  	"hof.no",
  	"hol.no",
  	"hole.no",
  	"holmestrand.no",
  	"holtalen.no",
  	"holtålen.no",
  	"hornindal.no",
  	"horten.no",
  	"hurdal.no",
  	"hurum.no",
  	"hvaler.no",
  	"hyllestad.no",
  	"hagebostad.no",
  	"hægebostad.no",
  	"hoyanger.no",
  	"høyanger.no",
  	"hoylandet.no",
  	"høylandet.no",
  	"ha.no",
  	"hå.no",
  	"ibestad.no",
  	"inderoy.no",
  	"inderøy.no",
  	"iveland.no",
  	"jevnaker.no",
  	"jondal.no",
  	"jolster.no",
  	"jølster.no",
  	"karasjok.no",
  	"karasjohka.no",
  	"kárášjohka.no",
  	"karlsoy.no",
  	"galsa.no",
  	"gálsá.no",
  	"karmoy.no",
  	"karmøy.no",
  	"kautokeino.no",
  	"guovdageaidnu.no",
  	"klepp.no",
  	"klabu.no",
  	"klæbu.no",
  	"kongsberg.no",
  	"kongsvinger.no",
  	"kragero.no",
  	"kragerø.no",
  	"kristiansand.no",
  	"kristiansund.no",
  	"krodsherad.no",
  	"krødsherad.no",
  	"kvalsund.no",
  	"rahkkeravju.no",
  	"ráhkkerávju.no",
  	"kvam.no",
  	"kvinesdal.no",
  	"kvinnherad.no",
  	"kviteseid.no",
  	"kvitsoy.no",
  	"kvitsøy.no",
  	"kvafjord.no",
  	"kvæfjord.no",
  	"giehtavuoatna.no",
  	"kvanangen.no",
  	"kvænangen.no",
  	"navuotna.no",
  	"návuotna.no",
  	"kafjord.no",
  	"kåfjord.no",
  	"gaivuotna.no",
  	"gáivuotna.no",
  	"larvik.no",
  	"lavangen.no",
  	"lavagis.no",
  	"loabat.no",
  	"loabát.no",
  	"lebesby.no",
  	"davvesiida.no",
  	"leikanger.no",
  	"leirfjord.no",
  	"leka.no",
  	"leksvik.no",
  	"lenvik.no",
  	"leangaviika.no",
  	"leaŋgaviika.no",
  	"lesja.no",
  	"levanger.no",
  	"lier.no",
  	"lierne.no",
  	"lillehammer.no",
  	"lillesand.no",
  	"lindesnes.no",
  	"lindas.no",
  	"lindås.no",
  	"lom.no",
  	"loppa.no",
  	"lahppi.no",
  	"láhppi.no",
  	"lund.no",
  	"lunner.no",
  	"luroy.no",
  	"lurøy.no",
  	"luster.no",
  	"lyngdal.no",
  	"lyngen.no",
  	"ivgu.no",
  	"lardal.no",
  	"lerdal.no",
  	"lærdal.no",
  	"lodingen.no",
  	"lødingen.no",
  	"lorenskog.no",
  	"lørenskog.no",
  	"loten.no",
  	"løten.no",
  	"malvik.no",
  	"masoy.no",
  	"måsøy.no",
  	"muosat.no",
  	"muosát.no",
  	"mandal.no",
  	"marker.no",
  	"marnardal.no",
  	"masfjorden.no",
  	"meland.no",
  	"meldal.no",
  	"melhus.no",
  	"meloy.no",
  	"meløy.no",
  	"meraker.no",
  	"meråker.no",
  	"moareke.no",
  	"moåreke.no",
  	"midsund.no",
  	"midtre-gauldal.no",
  	"modalen.no",
  	"modum.no",
  	"molde.no",
  	"moskenes.no",
  	"moss.no",
  	"mosvik.no",
  	"malselv.no",
  	"målselv.no",
  	"malatvuopmi.no",
  	"málatvuopmi.no",
  	"namdalseid.no",
  	"aejrie.no",
  	"namsos.no",
  	"namsskogan.no",
  	"naamesjevuemie.no",
  	"nååmesjevuemie.no",
  	"laakesvuemie.no",
  	"nannestad.no",
  	"narvik.no",
  	"narviika.no",
  	"naustdal.no",
  	"nedre-eiker.no",
  	"nes.akershus.no",
  	"nes.buskerud.no",
  	"nesna.no",
  	"nesodden.no",
  	"nesseby.no",
  	"unjarga.no",
  	"unjárga.no",
  	"nesset.no",
  	"nissedal.no",
  	"nittedal.no",
  	"nord-aurdal.no",
  	"nord-fron.no",
  	"nord-odal.no",
  	"norddal.no",
  	"nordkapp.no",
  	"davvenjarga.no",
  	"davvenjárga.no",
  	"nordre-land.no",
  	"nordreisa.no",
  	"raisa.no",
  	"ráisa.no",
  	"nore-og-uvdal.no",
  	"notodden.no",
  	"naroy.no",
  	"nærøy.no",
  	"notteroy.no",
  	"nøtterøy.no",
  	"odda.no",
  	"oksnes.no",
  	"øksnes.no",
  	"oppdal.no",
  	"oppegard.no",
  	"oppegård.no",
  	"orkdal.no",
  	"orland.no",
  	"ørland.no",
  	"orskog.no",
  	"ørskog.no",
  	"orsta.no",
  	"ørsta.no",
  	"os.hedmark.no",
  	"os.hordaland.no",
  	"osen.no",
  	"osteroy.no",
  	"osterøy.no",
  	"ostre-toten.no",
  	"østre-toten.no",
  	"overhalla.no",
  	"ovre-eiker.no",
  	"øvre-eiker.no",
  	"oyer.no",
  	"øyer.no",
  	"oygarden.no",
  	"øygarden.no",
  	"oystre-slidre.no",
  	"øystre-slidre.no",
  	"porsanger.no",
  	"porsangu.no",
  	"porsáŋgu.no",
  	"porsgrunn.no",
  	"radoy.no",
  	"radøy.no",
  	"rakkestad.no",
  	"rana.no",
  	"ruovat.no",
  	"randaberg.no",
  	"rauma.no",
  	"rendalen.no",
  	"rennebu.no",
  	"rennesoy.no",
  	"rennesøy.no",
  	"rindal.no",
  	"ringebu.no",
  	"ringerike.no",
  	"ringsaker.no",
  	"rissa.no",
  	"risor.no",
  	"risør.no",
  	"roan.no",
  	"rollag.no",
  	"rygge.no",
  	"ralingen.no",
  	"rælingen.no",
  	"rodoy.no",
  	"rødøy.no",
  	"romskog.no",
  	"rømskog.no",
  	"roros.no",
  	"røros.no",
  	"rost.no",
  	"røst.no",
  	"royken.no",
  	"røyken.no",
  	"royrvik.no",
  	"røyrvik.no",
  	"rade.no",
  	"råde.no",
  	"salangen.no",
  	"siellak.no",
  	"saltdal.no",
  	"salat.no",
  	"sálát.no",
  	"sálat.no",
  	"samnanger.no",
  	"sande.more-og-romsdal.no",
  	"sande.møre-og-romsdal.no",
  	"sande.vestfold.no",
  	"sandefjord.no",
  	"sandnes.no",
  	"sandoy.no",
  	"sandøy.no",
  	"sarpsborg.no",
  	"sauda.no",
  	"sauherad.no",
  	"sel.no",
  	"selbu.no",
  	"selje.no",
  	"seljord.no",
  	"sigdal.no",
  	"siljan.no",
  	"sirdal.no",
  	"skaun.no",
  	"skedsmo.no",
  	"ski.no",
  	"skien.no",
  	"skiptvet.no",
  	"skjervoy.no",
  	"skjervøy.no",
  	"skierva.no",
  	"skiervá.no",
  	"skjak.no",
  	"skjåk.no",
  	"skodje.no",
  	"skanland.no",
  	"skånland.no",
  	"skanit.no",
  	"skánit.no",
  	"smola.no",
  	"smøla.no",
  	"snillfjord.no",
  	"snasa.no",
  	"snåsa.no",
  	"snoasa.no",
  	"snaase.no",
  	"snåase.no",
  	"sogndal.no",
  	"sokndal.no",
  	"sola.no",
  	"solund.no",
  	"songdalen.no",
  	"sortland.no",
  	"spydeberg.no",
  	"stange.no",
  	"stavanger.no",
  	"steigen.no",
  	"steinkjer.no",
  	"stjordal.no",
  	"stjørdal.no",
  	"stokke.no",
  	"stor-elvdal.no",
  	"stord.no",
  	"stordal.no",
  	"storfjord.no",
  	"omasvuotna.no",
  	"strand.no",
  	"stranda.no",
  	"stryn.no",
  	"sula.no",
  	"suldal.no",
  	"sund.no",
  	"sunndal.no",
  	"surnadal.no",
  	"sveio.no",
  	"svelvik.no",
  	"sykkylven.no",
  	"sogne.no",
  	"søgne.no",
  	"somna.no",
  	"sømna.no",
  	"sondre-land.no",
  	"søndre-land.no",
  	"sor-aurdal.no",
  	"sør-aurdal.no",
  	"sor-fron.no",
  	"sør-fron.no",
  	"sor-odal.no",
  	"sør-odal.no",
  	"sor-varanger.no",
  	"sør-varanger.no",
  	"matta-varjjat.no",
  	"mátta-várjjat.no",
  	"sorfold.no",
  	"sørfold.no",
  	"sorreisa.no",
  	"sørreisa.no",
  	"sorum.no",
  	"sørum.no",
  	"tana.no",
  	"deatnu.no",
  	"time.no",
  	"tingvoll.no",
  	"tinn.no",
  	"tjeldsund.no",
  	"dielddanuorri.no",
  	"tjome.no",
  	"tjøme.no",
  	"tokke.no",
  	"tolga.no",
  	"torsken.no",
  	"tranoy.no",
  	"tranøy.no",
  	"tromso.no",
  	"tromsø.no",
  	"tromsa.no",
  	"romsa.no",
  	"trondheim.no",
  	"troandin.no",
  	"trysil.no",
  	"trana.no",
  	"træna.no",
  	"trogstad.no",
  	"trøgstad.no",
  	"tvedestrand.no",
  	"tydal.no",
  	"tynset.no",
  	"tysfjord.no",
  	"divtasvuodna.no",
  	"divttasvuotna.no",
  	"tysnes.no",
  	"tysvar.no",
  	"tysvær.no",
  	"tonsberg.no",
  	"tønsberg.no",
  	"ullensaker.no",
  	"ullensvang.no",
  	"ulvik.no",
  	"utsira.no",
  	"vadso.no",
  	"vadsø.no",
  	"cahcesuolo.no",
  	"čáhcesuolo.no",
  	"vaksdal.no",
  	"valle.no",
  	"vang.no",
  	"vanylven.no",
  	"vardo.no",
  	"vardø.no",
  	"varggat.no",
  	"várggát.no",
  	"vefsn.no",
  	"vaapste.no",
  	"vega.no",
  	"vegarshei.no",
  	"vegårshei.no",
  	"vennesla.no",
  	"verdal.no",
  	"verran.no",
  	"vestby.no",
  	"vestnes.no",
  	"vestre-slidre.no",
  	"vestre-toten.no",
  	"vestvagoy.no",
  	"vestvågøy.no",
  	"vevelstad.no",
  	"vik.no",
  	"vikna.no",
  	"vindafjord.no",
  	"volda.no",
  	"voss.no",
  	"varoy.no",
  	"værøy.no",
  	"vagan.no",
  	"vågan.no",
  	"voagat.no",
  	"vagsoy.no",
  	"vågsøy.no",
  	"vaga.no",
  	"vågå.no",
  	"valer.ostfold.no",
  	"våler.østfold.no",
  	"valer.hedmark.no",
  	"våler.hedmark.no",
  	"*.np",
  	"nr",
  	"biz.nr",
  	"info.nr",
  	"gov.nr",
  	"edu.nr",
  	"org.nr",
  	"net.nr",
  	"com.nr",
  	"nu",
  	"nz",
  	"ac.nz",
  	"co.nz",
  	"cri.nz",
  	"geek.nz",
  	"gen.nz",
  	"govt.nz",
  	"health.nz",
  	"iwi.nz",
  	"kiwi.nz",
  	"maori.nz",
  	"mil.nz",
  	"māori.nz",
  	"net.nz",
  	"org.nz",
  	"parliament.nz",
  	"school.nz",
  	"om",
  	"co.om",
  	"com.om",
  	"edu.om",
  	"gov.om",
  	"med.om",
  	"museum.om",
  	"net.om",
  	"org.om",
  	"pro.om",
  	"onion",
  	"org",
  	"pa",
  	"ac.pa",
  	"gob.pa",
  	"com.pa",
  	"org.pa",
  	"sld.pa",
  	"edu.pa",
  	"net.pa",
  	"ing.pa",
  	"abo.pa",
  	"med.pa",
  	"nom.pa",
  	"pe",
  	"edu.pe",
  	"gob.pe",
  	"nom.pe",
  	"mil.pe",
  	"org.pe",
  	"com.pe",
  	"net.pe",
  	"pf",
  	"com.pf",
  	"org.pf",
  	"edu.pf",
  	"*.pg",
  	"ph",
  	"com.ph",
  	"net.ph",
  	"org.ph",
  	"gov.ph",
  	"edu.ph",
  	"ngo.ph",
  	"mil.ph",
  	"i.ph",
  	"pk",
  	"com.pk",
  	"net.pk",
  	"edu.pk",
  	"org.pk",
  	"fam.pk",
  	"biz.pk",
  	"web.pk",
  	"gov.pk",
  	"gob.pk",
  	"gok.pk",
  	"gon.pk",
  	"gop.pk",
  	"gos.pk",
  	"info.pk",
  	"pl",
  	"com.pl",
  	"net.pl",
  	"org.pl",
  	"aid.pl",
  	"agro.pl",
  	"atm.pl",
  	"auto.pl",
  	"biz.pl",
  	"edu.pl",
  	"gmina.pl",
  	"gsm.pl",
  	"info.pl",
  	"mail.pl",
  	"miasta.pl",
  	"media.pl",
  	"mil.pl",
  	"nieruchomosci.pl",
  	"nom.pl",
  	"pc.pl",
  	"powiat.pl",
  	"priv.pl",
  	"realestate.pl",
  	"rel.pl",
  	"sex.pl",
  	"shop.pl",
  	"sklep.pl",
  	"sos.pl",
  	"szkola.pl",
  	"targi.pl",
  	"tm.pl",
  	"tourism.pl",
  	"travel.pl",
  	"turystyka.pl",
  	"gov.pl",
  	"ap.gov.pl",
  	"ic.gov.pl",
  	"is.gov.pl",
  	"us.gov.pl",
  	"kmpsp.gov.pl",
  	"kppsp.gov.pl",
  	"kwpsp.gov.pl",
  	"psp.gov.pl",
  	"wskr.gov.pl",
  	"kwp.gov.pl",
  	"mw.gov.pl",
  	"ug.gov.pl",
  	"um.gov.pl",
  	"umig.gov.pl",
  	"ugim.gov.pl",
  	"upow.gov.pl",
  	"uw.gov.pl",
  	"starostwo.gov.pl",
  	"pa.gov.pl",
  	"po.gov.pl",
  	"psse.gov.pl",
  	"pup.gov.pl",
  	"rzgw.gov.pl",
  	"sa.gov.pl",
  	"so.gov.pl",
  	"sr.gov.pl",
  	"wsa.gov.pl",
  	"sko.gov.pl",
  	"uzs.gov.pl",
  	"wiih.gov.pl",
  	"winb.gov.pl",
  	"pinb.gov.pl",
  	"wios.gov.pl",
  	"witd.gov.pl",
  	"wzmiuw.gov.pl",
  	"piw.gov.pl",
  	"wiw.gov.pl",
  	"griw.gov.pl",
  	"wif.gov.pl",
  	"oum.gov.pl",
  	"sdn.gov.pl",
  	"zp.gov.pl",
  	"uppo.gov.pl",
  	"mup.gov.pl",
  	"wuoz.gov.pl",
  	"konsulat.gov.pl",
  	"oirm.gov.pl",
  	"augustow.pl",
  	"babia-gora.pl",
  	"bedzin.pl",
  	"beskidy.pl",
  	"bialowieza.pl",
  	"bialystok.pl",
  	"bielawa.pl",
  	"bieszczady.pl",
  	"boleslawiec.pl",
  	"bydgoszcz.pl",
  	"bytom.pl",
  	"cieszyn.pl",
  	"czeladz.pl",
  	"czest.pl",
  	"dlugoleka.pl",
  	"elblag.pl",
  	"elk.pl",
  	"glogow.pl",
  	"gniezno.pl",
  	"gorlice.pl",
  	"grajewo.pl",
  	"ilawa.pl",
  	"jaworzno.pl",
  	"jelenia-gora.pl",
  	"jgora.pl",
  	"kalisz.pl",
  	"kazimierz-dolny.pl",
  	"karpacz.pl",
  	"kartuzy.pl",
  	"kaszuby.pl",
  	"katowice.pl",
  	"kepno.pl",
  	"ketrzyn.pl",
  	"klodzko.pl",
  	"kobierzyce.pl",
  	"kolobrzeg.pl",
  	"konin.pl",
  	"konskowola.pl",
  	"kutno.pl",
  	"lapy.pl",
  	"lebork.pl",
  	"legnica.pl",
  	"lezajsk.pl",
  	"limanowa.pl",
  	"lomza.pl",
  	"lowicz.pl",
  	"lubin.pl",
  	"lukow.pl",
  	"malbork.pl",
  	"malopolska.pl",
  	"mazowsze.pl",
  	"mazury.pl",
  	"mielec.pl",
  	"mielno.pl",
  	"mragowo.pl",
  	"naklo.pl",
  	"nowaruda.pl",
  	"nysa.pl",
  	"olawa.pl",
  	"olecko.pl",
  	"olkusz.pl",
  	"olsztyn.pl",
  	"opoczno.pl",
  	"opole.pl",
  	"ostroda.pl",
  	"ostroleka.pl",
  	"ostrowiec.pl",
  	"ostrowwlkp.pl",
  	"pila.pl",
  	"pisz.pl",
  	"podhale.pl",
  	"podlasie.pl",
  	"polkowice.pl",
  	"pomorze.pl",
  	"pomorskie.pl",
  	"prochowice.pl",
  	"pruszkow.pl",
  	"przeworsk.pl",
  	"pulawy.pl",
  	"radom.pl",
  	"rawa-maz.pl",
  	"rybnik.pl",
  	"rzeszow.pl",
  	"sanok.pl",
  	"sejny.pl",
  	"slask.pl",
  	"slupsk.pl",
  	"sosnowiec.pl",
  	"stalowa-wola.pl",
  	"skoczow.pl",
  	"starachowice.pl",
  	"stargard.pl",
  	"suwalki.pl",
  	"swidnica.pl",
  	"swiebodzin.pl",
  	"swinoujscie.pl",
  	"szczecin.pl",
  	"szczytno.pl",
  	"tarnobrzeg.pl",
  	"tgory.pl",
  	"turek.pl",
  	"tychy.pl",
  	"ustka.pl",
  	"walbrzych.pl",
  	"warmia.pl",
  	"warszawa.pl",
  	"waw.pl",
  	"wegrow.pl",
  	"wielun.pl",
  	"wlocl.pl",
  	"wloclawek.pl",
  	"wodzislaw.pl",
  	"wolomin.pl",
  	"wroclaw.pl",
  	"zachpomor.pl",
  	"zagan.pl",
  	"zarow.pl",
  	"zgora.pl",
  	"zgorzelec.pl",
  	"pm",
  	"pn",
  	"gov.pn",
  	"co.pn",
  	"org.pn",
  	"edu.pn",
  	"net.pn",
  	"post",
  	"pr",
  	"com.pr",
  	"net.pr",
  	"org.pr",
  	"gov.pr",
  	"edu.pr",
  	"isla.pr",
  	"pro.pr",
  	"biz.pr",
  	"info.pr",
  	"name.pr",
  	"est.pr",
  	"prof.pr",
  	"ac.pr",
  	"pro",
  	"aaa.pro",
  	"aca.pro",
  	"acct.pro",
  	"avocat.pro",
  	"bar.pro",
  	"cpa.pro",
  	"eng.pro",
  	"jur.pro",
  	"law.pro",
  	"med.pro",
  	"recht.pro",
  	"ps",
  	"edu.ps",
  	"gov.ps",
  	"sec.ps",
  	"plo.ps",
  	"com.ps",
  	"org.ps",
  	"net.ps",
  	"pt",
  	"net.pt",
  	"gov.pt",
  	"org.pt",
  	"edu.pt",
  	"int.pt",
  	"publ.pt",
  	"com.pt",
  	"nome.pt",
  	"pw",
  	"co.pw",
  	"ne.pw",
  	"or.pw",
  	"ed.pw",
  	"go.pw",
  	"belau.pw",
  	"py",
  	"com.py",
  	"coop.py",
  	"edu.py",
  	"gov.py",
  	"mil.py",
  	"net.py",
  	"org.py",
  	"qa",
  	"com.qa",
  	"edu.qa",
  	"gov.qa",
  	"mil.qa",
  	"name.qa",
  	"net.qa",
  	"org.qa",
  	"sch.qa",
  	"re",
  	"asso.re",
  	"com.re",
  	"nom.re",
  	"ro",
  	"arts.ro",
  	"com.ro",
  	"firm.ro",
  	"info.ro",
  	"nom.ro",
  	"nt.ro",
  	"org.ro",
  	"rec.ro",
  	"store.ro",
  	"tm.ro",
  	"www.ro",
  	"rs",
  	"ac.rs",
  	"co.rs",
  	"edu.rs",
  	"gov.rs",
  	"in.rs",
  	"org.rs",
  	"ru",
  	"rw",
  	"ac.rw",
  	"co.rw",
  	"coop.rw",
  	"gov.rw",
  	"mil.rw",
  	"net.rw",
  	"org.rw",
  	"sa",
  	"com.sa",
  	"net.sa",
  	"org.sa",
  	"gov.sa",
  	"med.sa",
  	"pub.sa",
  	"edu.sa",
  	"sch.sa",
  	"sb",
  	"com.sb",
  	"edu.sb",
  	"gov.sb",
  	"net.sb",
  	"org.sb",
  	"sc",
  	"com.sc",
  	"gov.sc",
  	"net.sc",
  	"org.sc",
  	"edu.sc",
  	"sd",
  	"com.sd",
  	"net.sd",
  	"org.sd",
  	"edu.sd",
  	"med.sd",
  	"tv.sd",
  	"gov.sd",
  	"info.sd",
  	"se",
  	"a.se",
  	"ac.se",
  	"b.se",
  	"bd.se",
  	"brand.se",
  	"c.se",
  	"d.se",
  	"e.se",
  	"f.se",
  	"fh.se",
  	"fhsk.se",
  	"fhv.se",
  	"g.se",
  	"h.se",
  	"i.se",
  	"k.se",
  	"komforb.se",
  	"kommunalforbund.se",
  	"komvux.se",
  	"l.se",
  	"lanbib.se",
  	"m.se",
  	"n.se",
  	"naturbruksgymn.se",
  	"o.se",
  	"org.se",
  	"p.se",
  	"parti.se",
  	"pp.se",
  	"press.se",
  	"r.se",
  	"s.se",
  	"t.se",
  	"tm.se",
  	"u.se",
  	"w.se",
  	"x.se",
  	"y.se",
  	"z.se",
  	"sg",
  	"com.sg",
  	"net.sg",
  	"org.sg",
  	"gov.sg",
  	"edu.sg",
  	"per.sg",
  	"sh",
  	"com.sh",
  	"net.sh",
  	"gov.sh",
  	"org.sh",
  	"mil.sh",
  	"si",
  	"sj",
  	"sk",
  	"sl",
  	"com.sl",
  	"net.sl",
  	"edu.sl",
  	"gov.sl",
  	"org.sl",
  	"sm",
  	"sn",
  	"art.sn",
  	"com.sn",
  	"edu.sn",
  	"gouv.sn",
  	"org.sn",
  	"perso.sn",
  	"univ.sn",
  	"so",
  	"com.so",
  	"edu.so",
  	"gov.so",
  	"me.so",
  	"net.so",
  	"org.so",
  	"sr",
  	"ss",
  	"biz.ss",
  	"com.ss",
  	"edu.ss",
  	"gov.ss",
  	"me.ss",
  	"net.ss",
  	"org.ss",
  	"sch.ss",
  	"st",
  	"co.st",
  	"com.st",
  	"consulado.st",
  	"edu.st",
  	"embaixada.st",
  	"mil.st",
  	"net.st",
  	"org.st",
  	"principe.st",
  	"saotome.st",
  	"store.st",
  	"su",
  	"sv",
  	"com.sv",
  	"edu.sv",
  	"gob.sv",
  	"org.sv",
  	"red.sv",
  	"sx",
  	"gov.sx",
  	"sy",
  	"edu.sy",
  	"gov.sy",
  	"net.sy",
  	"mil.sy",
  	"com.sy",
  	"org.sy",
  	"sz",
  	"co.sz",
  	"ac.sz",
  	"org.sz",
  	"tc",
  	"td",
  	"tel",
  	"tf",
  	"tg",
  	"th",
  	"ac.th",
  	"co.th",
  	"go.th",
  	"in.th",
  	"mi.th",
  	"net.th",
  	"or.th",
  	"tj",
  	"ac.tj",
  	"biz.tj",
  	"co.tj",
  	"com.tj",
  	"edu.tj",
  	"go.tj",
  	"gov.tj",
  	"int.tj",
  	"mil.tj",
  	"name.tj",
  	"net.tj",
  	"nic.tj",
  	"org.tj",
  	"test.tj",
  	"web.tj",
  	"tk",
  	"tl",
  	"gov.tl",
  	"tm",
  	"com.tm",
  	"co.tm",
  	"org.tm",
  	"net.tm",
  	"nom.tm",
  	"gov.tm",
  	"mil.tm",
  	"edu.tm",
  	"tn",
  	"com.tn",
  	"ens.tn",
  	"fin.tn",
  	"gov.tn",
  	"ind.tn",
  	"info.tn",
  	"intl.tn",
  	"mincom.tn",
  	"nat.tn",
  	"net.tn",
  	"org.tn",
  	"perso.tn",
  	"tourism.tn",
  	"to",
  	"com.to",
  	"gov.to",
  	"net.to",
  	"org.to",
  	"edu.to",
  	"mil.to",
  	"tr",
  	"av.tr",
  	"bbs.tr",
  	"bel.tr",
  	"biz.tr",
  	"com.tr",
  	"dr.tr",
  	"edu.tr",
  	"gen.tr",
  	"gov.tr",
  	"info.tr",
  	"mil.tr",
  	"k12.tr",
  	"kep.tr",
  	"name.tr",
  	"net.tr",
  	"org.tr",
  	"pol.tr",
  	"tel.tr",
  	"tsk.tr",
  	"tv.tr",
  	"web.tr",
  	"nc.tr",
  	"gov.nc.tr",
  	"tt",
  	"co.tt",
  	"com.tt",
  	"org.tt",
  	"net.tt",
  	"biz.tt",
  	"info.tt",
  	"pro.tt",
  	"int.tt",
  	"coop.tt",
  	"jobs.tt",
  	"mobi.tt",
  	"travel.tt",
  	"museum.tt",
  	"aero.tt",
  	"name.tt",
  	"gov.tt",
  	"edu.tt",
  	"tv",
  	"tw",
  	"edu.tw",
  	"gov.tw",
  	"mil.tw",
  	"com.tw",
  	"net.tw",
  	"org.tw",
  	"idv.tw",
  	"game.tw",
  	"ebiz.tw",
  	"club.tw",
  	"網路.tw",
  	"組織.tw",
  	"商業.tw",
  	"tz",
  	"ac.tz",
  	"co.tz",
  	"go.tz",
  	"hotel.tz",
  	"info.tz",
  	"me.tz",
  	"mil.tz",
  	"mobi.tz",
  	"ne.tz",
  	"or.tz",
  	"sc.tz",
  	"tv.tz",
  	"ua",
  	"com.ua",
  	"edu.ua",
  	"gov.ua",
  	"in.ua",
  	"net.ua",
  	"org.ua",
  	"cherkassy.ua",
  	"cherkasy.ua",
  	"chernigov.ua",
  	"chernihiv.ua",
  	"chernivtsi.ua",
  	"chernovtsy.ua",
  	"ck.ua",
  	"cn.ua",
  	"cr.ua",
  	"crimea.ua",
  	"cv.ua",
  	"dn.ua",
  	"dnepropetrovsk.ua",
  	"dnipropetrovsk.ua",
  	"donetsk.ua",
  	"dp.ua",
  	"if.ua",
  	"ivano-frankivsk.ua",
  	"kh.ua",
  	"kharkiv.ua",
  	"kharkov.ua",
  	"kherson.ua",
  	"khmelnitskiy.ua",
  	"khmelnytskyi.ua",
  	"kiev.ua",
  	"kirovograd.ua",
  	"km.ua",
  	"kr.ua",
  	"krym.ua",
  	"ks.ua",
  	"kv.ua",
  	"kyiv.ua",
  	"lg.ua",
  	"lt.ua",
  	"lugansk.ua",
  	"lutsk.ua",
  	"lv.ua",
  	"lviv.ua",
  	"mk.ua",
  	"mykolaiv.ua",
  	"nikolaev.ua",
  	"od.ua",
  	"odesa.ua",
  	"odessa.ua",
  	"pl.ua",
  	"poltava.ua",
  	"rivne.ua",
  	"rovno.ua",
  	"rv.ua",
  	"sb.ua",
  	"sebastopol.ua",
  	"sevastopol.ua",
  	"sm.ua",
  	"sumy.ua",
  	"te.ua",
  	"ternopil.ua",
  	"uz.ua",
  	"uzhgorod.ua",
  	"vinnica.ua",
  	"vinnytsia.ua",
  	"vn.ua",
  	"volyn.ua",
  	"yalta.ua",
  	"zaporizhzhe.ua",
  	"zaporizhzhia.ua",
  	"zhitomir.ua",
  	"zhytomyr.ua",
  	"zp.ua",
  	"zt.ua",
  	"ug",
  	"co.ug",
  	"or.ug",
  	"ac.ug",
  	"sc.ug",
  	"go.ug",
  	"ne.ug",
  	"com.ug",
  	"org.ug",
  	"uk",
  	"ac.uk",
  	"co.uk",
  	"gov.uk",
  	"ltd.uk",
  	"me.uk",
  	"net.uk",
  	"nhs.uk",
  	"org.uk",
  	"plc.uk",
  	"police.uk",
  	"*.sch.uk",
  	"us",
  	"dni.us",
  	"fed.us",
  	"isa.us",
  	"kids.us",
  	"nsn.us",
  	"ak.us",
  	"al.us",
  	"ar.us",
  	"as.us",
  	"az.us",
  	"ca.us",
  	"co.us",
  	"ct.us",
  	"dc.us",
  	"de.us",
  	"fl.us",
  	"ga.us",
  	"gu.us",
  	"hi.us",
  	"ia.us",
  	"id.us",
  	"il.us",
  	"in.us",
  	"ks.us",
  	"ky.us",
  	"la.us",
  	"ma.us",
  	"md.us",
  	"me.us",
  	"mi.us",
  	"mn.us",
  	"mo.us",
  	"ms.us",
  	"mt.us",
  	"nc.us",
  	"nd.us",
  	"ne.us",
  	"nh.us",
  	"nj.us",
  	"nm.us",
  	"nv.us",
  	"ny.us",
  	"oh.us",
  	"ok.us",
  	"or.us",
  	"pa.us",
  	"pr.us",
  	"ri.us",
  	"sc.us",
  	"sd.us",
  	"tn.us",
  	"tx.us",
  	"ut.us",
  	"vi.us",
  	"vt.us",
  	"va.us",
  	"wa.us",
  	"wi.us",
  	"wv.us",
  	"wy.us",
  	"k12.ak.us",
  	"k12.al.us",
  	"k12.ar.us",
  	"k12.as.us",
  	"k12.az.us",
  	"k12.ca.us",
  	"k12.co.us",
  	"k12.ct.us",
  	"k12.dc.us",
  	"k12.de.us",
  	"k12.fl.us",
  	"k12.ga.us",
  	"k12.gu.us",
  	"k12.ia.us",
  	"k12.id.us",
  	"k12.il.us",
  	"k12.in.us",
  	"k12.ks.us",
  	"k12.ky.us",
  	"k12.la.us",
  	"k12.ma.us",
  	"k12.md.us",
  	"k12.me.us",
  	"k12.mi.us",
  	"k12.mn.us",
  	"k12.mo.us",
  	"k12.ms.us",
  	"k12.mt.us",
  	"k12.nc.us",
  	"k12.ne.us",
  	"k12.nh.us",
  	"k12.nj.us",
  	"k12.nm.us",
  	"k12.nv.us",
  	"k12.ny.us",
  	"k12.oh.us",
  	"k12.ok.us",
  	"k12.or.us",
  	"k12.pa.us",
  	"k12.pr.us",
  	"k12.sc.us",
  	"k12.tn.us",
  	"k12.tx.us",
  	"k12.ut.us",
  	"k12.vi.us",
  	"k12.vt.us",
  	"k12.va.us",
  	"k12.wa.us",
  	"k12.wi.us",
  	"k12.wy.us",
  	"cc.ak.us",
  	"cc.al.us",
  	"cc.ar.us",
  	"cc.as.us",
  	"cc.az.us",
  	"cc.ca.us",
  	"cc.co.us",
  	"cc.ct.us",
  	"cc.dc.us",
  	"cc.de.us",
  	"cc.fl.us",
  	"cc.ga.us",
  	"cc.gu.us",
  	"cc.hi.us",
  	"cc.ia.us",
  	"cc.id.us",
  	"cc.il.us",
  	"cc.in.us",
  	"cc.ks.us",
  	"cc.ky.us",
  	"cc.la.us",
  	"cc.ma.us",
  	"cc.md.us",
  	"cc.me.us",
  	"cc.mi.us",
  	"cc.mn.us",
  	"cc.mo.us",
  	"cc.ms.us",
  	"cc.mt.us",
  	"cc.nc.us",
  	"cc.nd.us",
  	"cc.ne.us",
  	"cc.nh.us",
  	"cc.nj.us",
  	"cc.nm.us",
  	"cc.nv.us",
  	"cc.ny.us",
  	"cc.oh.us",
  	"cc.ok.us",
  	"cc.or.us",
  	"cc.pa.us",
  	"cc.pr.us",
  	"cc.ri.us",
  	"cc.sc.us",
  	"cc.sd.us",
  	"cc.tn.us",
  	"cc.tx.us",
  	"cc.ut.us",
  	"cc.vi.us",
  	"cc.vt.us",
  	"cc.va.us",
  	"cc.wa.us",
  	"cc.wi.us",
  	"cc.wv.us",
  	"cc.wy.us",
  	"lib.ak.us",
  	"lib.al.us",
  	"lib.ar.us",
  	"lib.as.us",
  	"lib.az.us",
  	"lib.ca.us",
  	"lib.co.us",
  	"lib.ct.us",
  	"lib.dc.us",
  	"lib.fl.us",
  	"lib.ga.us",
  	"lib.gu.us",
  	"lib.hi.us",
  	"lib.ia.us",
  	"lib.id.us",
  	"lib.il.us",
  	"lib.in.us",
  	"lib.ks.us",
  	"lib.ky.us",
  	"lib.la.us",
  	"lib.ma.us",
  	"lib.md.us",
  	"lib.me.us",
  	"lib.mi.us",
  	"lib.mn.us",
  	"lib.mo.us",
  	"lib.ms.us",
  	"lib.mt.us",
  	"lib.nc.us",
  	"lib.nd.us",
  	"lib.ne.us",
  	"lib.nh.us",
  	"lib.nj.us",
  	"lib.nm.us",
  	"lib.nv.us",
  	"lib.ny.us",
  	"lib.oh.us",
  	"lib.ok.us",
  	"lib.or.us",
  	"lib.pa.us",
  	"lib.pr.us",
  	"lib.ri.us",
  	"lib.sc.us",
  	"lib.sd.us",
  	"lib.tn.us",
  	"lib.tx.us",
  	"lib.ut.us",
  	"lib.vi.us",
  	"lib.vt.us",
  	"lib.va.us",
  	"lib.wa.us",
  	"lib.wi.us",
  	"lib.wy.us",
  	"pvt.k12.ma.us",
  	"chtr.k12.ma.us",
  	"paroch.k12.ma.us",
  	"ann-arbor.mi.us",
  	"cog.mi.us",
  	"dst.mi.us",
  	"eaton.mi.us",
  	"gen.mi.us",
  	"mus.mi.us",
  	"tec.mi.us",
  	"washtenaw.mi.us",
  	"uy",
  	"com.uy",
  	"edu.uy",
  	"gub.uy",
  	"mil.uy",
  	"net.uy",
  	"org.uy",
  	"uz",
  	"co.uz",
  	"com.uz",
  	"net.uz",
  	"org.uz",
  	"va",
  	"vc",
  	"com.vc",
  	"net.vc",
  	"org.vc",
  	"gov.vc",
  	"mil.vc",
  	"edu.vc",
  	"ve",
  	"arts.ve",
  	"bib.ve",
  	"co.ve",
  	"com.ve",
  	"e12.ve",
  	"edu.ve",
  	"firm.ve",
  	"gob.ve",
  	"gov.ve",
  	"info.ve",
  	"int.ve",
  	"mil.ve",
  	"net.ve",
  	"nom.ve",
  	"org.ve",
  	"rar.ve",
  	"rec.ve",
  	"store.ve",
  	"tec.ve",
  	"web.ve",
  	"vg",
  	"vi",
  	"co.vi",
  	"com.vi",
  	"k12.vi",
  	"net.vi",
  	"org.vi",
  	"vn",
  	"com.vn",
  	"net.vn",
  	"org.vn",
  	"edu.vn",
  	"gov.vn",
  	"int.vn",
  	"ac.vn",
  	"biz.vn",
  	"info.vn",
  	"name.vn",
  	"pro.vn",
  	"health.vn",
  	"vu",
  	"com.vu",
  	"edu.vu",
  	"net.vu",
  	"org.vu",
  	"wf",
  	"ws",
  	"com.ws",
  	"net.ws",
  	"org.ws",
  	"gov.ws",
  	"edu.ws",
  	"yt",
  	"امارات",
  	"հայ",
  	"বাংলা",
  	"бг",
  	"البحرين",
  	"бел",
  	"中国",
  	"中國",
  	"الجزائر",
  	"مصر",
  	"ею",
  	"ευ",
  	"موريتانيا",
  	"გე",
  	"ελ",
  	"香港",
  	"公司.香港",
  	"教育.香港",
  	"政府.香港",
  	"個人.香港",
  	"網絡.香港",
  	"組織.香港",
  	"ಭಾರತ",
  	"ଭାରତ",
  	"ভাৰত",
  	"भारतम्",
  	"भारोत",
  	"ڀارت",
  	"ഭാരതം",
  	"भारत",
  	"بارت",
  	"بھارت",
  	"భారత్",
  	"ભારત",
  	"ਭਾਰਤ",
  	"ভারত",
  	"இந்தியா",
  	"ایران",
  	"ايران",
  	"عراق",
  	"الاردن",
  	"한국",
  	"қаз",
  	"ລາວ",
  	"ලංකා",
  	"இலங்கை",
  	"المغرب",
  	"мкд",
  	"мон",
  	"澳門",
  	"澳门",
  	"مليسيا",
  	"عمان",
  	"پاکستان",
  	"پاكستان",
  	"فلسطين",
  	"срб",
  	"пр.срб",
  	"орг.срб",
  	"обр.срб",
  	"од.срб",
  	"упр.срб",
  	"ак.срб",
  	"рф",
  	"قطر",
  	"السعودية",
  	"السعودیة",
  	"السعودیۃ",
  	"السعوديه",
  	"سودان",
  	"新加坡",
  	"சிங்கப்பூர்",
  	"سورية",
  	"سوريا",
  	"ไทย",
  	"ศึกษา.ไทย",
  	"ธุรกิจ.ไทย",
  	"รัฐบาล.ไทย",
  	"ทหาร.ไทย",
  	"เน็ต.ไทย",
  	"องค์กร.ไทย",
  	"تونس",
  	"台灣",
  	"台湾",
  	"臺灣",
  	"укр",
  	"اليمن",
  	"xxx",
  	"ye",
  	"com.ye",
  	"edu.ye",
  	"gov.ye",
  	"net.ye",
  	"mil.ye",
  	"org.ye",
  	"ac.za",
  	"agric.za",
  	"alt.za",
  	"co.za",
  	"edu.za",
  	"gov.za",
  	"grondar.za",
  	"law.za",
  	"mil.za",
  	"net.za",
  	"ngo.za",
  	"nic.za",
  	"nis.za",
  	"nom.za",
  	"org.za",
  	"school.za",
  	"tm.za",
  	"web.za",
  	"zm",
  	"ac.zm",
  	"biz.zm",
  	"co.zm",
  	"com.zm",
  	"edu.zm",
  	"gov.zm",
  	"info.zm",
  	"mil.zm",
  	"net.zm",
  	"org.zm",
  	"sch.zm",
  	"zw",
  	"ac.zw",
  	"co.zw",
  	"gov.zw",
  	"mil.zw",
  	"org.zw",
  	"aaa",
  	"aarp",
  	"abarth",
  	"abb",
  	"abbott",
  	"abbvie",
  	"abc",
  	"able",
  	"abogado",
  	"abudhabi",
  	"academy",
  	"accenture",
  	"accountant",
  	"accountants",
  	"aco",
  	"actor",
  	"adac",
  	"ads",
  	"adult",
  	"aeg",
  	"aetna",
  	"afl",
  	"africa",
  	"agakhan",
  	"agency",
  	"aig",
  	"airbus",
  	"airforce",
  	"airtel",
  	"akdn",
  	"alfaromeo",
  	"alibaba",
  	"alipay",
  	"allfinanz",
  	"allstate",
  	"ally",
  	"alsace",
  	"alstom",
  	"amazon",
  	"americanexpress",
  	"americanfamily",
  	"amex",
  	"amfam",
  	"amica",
  	"amsterdam",
  	"analytics",
  	"android",
  	"anquan",
  	"anz",
  	"aol",
  	"apartments",
  	"app",
  	"apple",
  	"aquarelle",
  	"arab",
  	"aramco",
  	"archi",
  	"army",
  	"art",
  	"arte",
  	"asda",
  	"associates",
  	"athleta",
  	"attorney",
  	"auction",
  	"audi",
  	"audible",
  	"audio",
  	"auspost",
  	"author",
  	"auto",
  	"autos",
  	"avianca",
  	"aws",
  	"axa",
  	"azure",
  	"baby",
  	"baidu",
  	"banamex",
  	"bananarepublic",
  	"band",
  	"bank",
  	"bar",
  	"barcelona",
  	"barclaycard",
  	"barclays",
  	"barefoot",
  	"bargains",
  	"baseball",
  	"basketball",
  	"bauhaus",
  	"bayern",
  	"bbc",
  	"bbt",
  	"bbva",
  	"bcg",
  	"bcn",
  	"beats",
  	"beauty",
  	"beer",
  	"bentley",
  	"berlin",
  	"best",
  	"bestbuy",
  	"bet",
  	"bharti",
  	"bible",
  	"bid",
  	"bike",
  	"bing",
  	"bingo",
  	"bio",
  	"black",
  	"blackfriday",
  	"blockbuster",
  	"blog",
  	"bloomberg",
  	"blue",
  	"bms",
  	"bmw",
  	"bnpparibas",
  	"boats",
  	"boehringer",
  	"bofa",
  	"bom",
  	"bond",
  	"boo",
  	"book",
  	"booking",
  	"bosch",
  	"bostik",
  	"boston",
  	"bot",
  	"boutique",
  	"box",
  	"bradesco",
  	"bridgestone",
  	"broadway",
  	"broker",
  	"brother",
  	"brussels",
  	"bugatti",
  	"build",
  	"builders",
  	"business",
  	"buy",
  	"buzz",
  	"bzh",
  	"cab",
  	"cafe",
  	"cal",
  	"call",
  	"calvinklein",
  	"cam",
  	"camera",
  	"camp",
  	"cancerresearch",
  	"canon",
  	"capetown",
  	"capital",
  	"capitalone",
  	"car",
  	"caravan",
  	"cards",
  	"care",
  	"career",
  	"careers",
  	"cars",
  	"casa",
  	"case",
  	"cash",
  	"casino",
  	"catering",
  	"catholic",
  	"cba",
  	"cbn",
  	"cbre",
  	"cbs",
  	"center",
  	"ceo",
  	"cern",
  	"cfa",
  	"cfd",
  	"chanel",
  	"channel",
  	"charity",
  	"chase",
  	"chat",
  	"cheap",
  	"chintai",
  	"christmas",
  	"chrome",
  	"church",
  	"cipriani",
  	"circle",
  	"cisco",
  	"citadel",
  	"citi",
  	"citic",
  	"city",
  	"cityeats",
  	"claims",
  	"cleaning",
  	"click",
  	"clinic",
  	"clinique",
  	"clothing",
  	"cloud",
  	"club",
  	"clubmed",
  	"coach",
  	"codes",
  	"coffee",
  	"college",
  	"cologne",
  	"comcast",
  	"commbank",
  	"community",
  	"company",
  	"compare",
  	"computer",
  	"comsec",
  	"condos",
  	"construction",
  	"consulting",
  	"contact",
  	"contractors",
  	"cooking",
  	"cookingchannel",
  	"cool",
  	"corsica",
  	"country",
  	"coupon",
  	"coupons",
  	"courses",
  	"cpa",
  	"credit",
  	"creditcard",
  	"creditunion",
  	"cricket",
  	"crown",
  	"crs",
  	"cruise",
  	"cruises",
  	"cuisinella",
  	"cymru",
  	"cyou",
  	"dabur",
  	"dad",
  	"dance",
  	"data",
  	"date",
  	"dating",
  	"datsun",
  	"day",
  	"dclk",
  	"dds",
  	"deal",
  	"dealer",
  	"deals",
  	"degree",
  	"delivery",
  	"dell",
  	"deloitte",
  	"delta",
  	"democrat",
  	"dental",
  	"dentist",
  	"desi",
  	"design",
  	"dev",
  	"dhl",
  	"diamonds",
  	"diet",
  	"digital",
  	"direct",
  	"directory",
  	"discount",
  	"discover",
  	"dish",
  	"diy",
  	"dnp",
  	"docs",
  	"doctor",
  	"dog",
  	"domains",
  	"dot",
  	"download",
  	"drive",
  	"dtv",
  	"dubai",
  	"dunlop",
  	"dupont",
  	"durban",
  	"dvag",
  	"dvr",
  	"earth",
  	"eat",
  	"eco",
  	"edeka",
  	"education",
  	"email",
  	"emerck",
  	"energy",
  	"engineer",
  	"engineering",
  	"enterprises",
  	"epson",
  	"equipment",
  	"ericsson",
  	"erni",
  	"esq",
  	"estate",
  	"etisalat",
  	"eurovision",
  	"eus",
  	"events",
  	"exchange",
  	"expert",
  	"exposed",
  	"express",
  	"extraspace",
  	"fage",
  	"fail",
  	"fairwinds",
  	"faith",
  	"family",
  	"fan",
  	"fans",
  	"farm",
  	"farmers",
  	"fashion",
  	"fast",
  	"fedex",
  	"feedback",
  	"ferrari",
  	"ferrero",
  	"fiat",
  	"fidelity",
  	"fido",
  	"film",
  	"final",
  	"finance",
  	"financial",
  	"fire",
  	"firestone",
  	"firmdale",
  	"fish",
  	"fishing",
  	"fit",
  	"fitness",
  	"flickr",
  	"flights",
  	"flir",
  	"florist",
  	"flowers",
  	"fly",
  	"foo",
  	"food",
  	"foodnetwork",
  	"football",
  	"ford",
  	"forex",
  	"forsale",
  	"forum",
  	"foundation",
  	"fox",
  	"free",
  	"fresenius",
  	"frl",
  	"frogans",
  	"frontdoor",
  	"frontier",
  	"ftr",
  	"fujitsu",
  	"fun",
  	"fund",
  	"furniture",
  	"futbol",
  	"fyi",
  	"gal",
  	"gallery",
  	"gallo",
  	"gallup",
  	"game",
  	"games",
  	"gap",
  	"garden",
  	"gay",
  	"gbiz",
  	"gdn",
  	"gea",
  	"gent",
  	"genting",
  	"george",
  	"ggee",
  	"gift",
  	"gifts",
  	"gives",
  	"giving",
  	"glass",
  	"gle",
  	"global",
  	"globo",
  	"gmail",
  	"gmbh",
  	"gmo",
  	"gmx",
  	"godaddy",
  	"gold",
  	"goldpoint",
  	"golf",
  	"goo",
  	"goodyear",
  	"goog",
  	"google",
  	"gop",
  	"got",
  	"grainger",
  	"graphics",
  	"gratis",
  	"green",
  	"gripe",
  	"grocery",
  	"group",
  	"guardian",
  	"gucci",
  	"guge",
  	"guide",
  	"guitars",
  	"guru",
  	"hair",
  	"hamburg",
  	"hangout",
  	"haus",
  	"hbo",
  	"hdfc",
  	"hdfcbank",
  	"health",
  	"healthcare",
  	"help",
  	"helsinki",
  	"here",
  	"hermes",
  	"hgtv",
  	"hiphop",
  	"hisamitsu",
  	"hitachi",
  	"hiv",
  	"hkt",
  	"hockey",
  	"holdings",
  	"holiday",
  	"homedepot",
  	"homegoods",
  	"homes",
  	"homesense",
  	"honda",
  	"horse",
  	"hospital",
  	"host",
  	"hosting",
  	"hot",
  	"hoteles",
  	"hotels",
  	"hotmail",
  	"house",
  	"how",
  	"hsbc",
  	"hughes",
  	"hyatt",
  	"hyundai",
  	"ibm",
  	"icbc",
  	"ice",
  	"icu",
  	"ieee",
  	"ifm",
  	"ikano",
  	"imamat",
  	"imdb",
  	"immo",
  	"immobilien",
  	"inc",
  	"industries",
  	"infiniti",
  	"ing",
  	"ink",
  	"institute",
  	"insurance",
  	"insure",
  	"international",
  	"intuit",
  	"investments",
  	"ipiranga",
  	"irish",
  	"ismaili",
  	"ist",
  	"istanbul",
  	"itau",
  	"itv",
  	"jaguar",
  	"java",
  	"jcb",
  	"jeep",
  	"jetzt",
  	"jewelry",
  	"jio",
  	"jll",
  	"jmp",
  	"jnj",
  	"joburg",
  	"jot",
  	"joy",
  	"jpmorgan",
  	"jprs",
  	"juegos",
  	"juniper",
  	"kaufen",
  	"kddi",
  	"kerryhotels",
  	"kerrylogistics",
  	"kerryproperties",
  	"kfh",
  	"kia",
  	"kids",
  	"kim",
  	"kinder",
  	"kindle",
  	"kitchen",
  	"kiwi",
  	"koeln",
  	"komatsu",
  	"kosher",
  	"kpmg",
  	"kpn",
  	"krd",
  	"kred",
  	"kuokgroup",
  	"kyoto",
  	"lacaixa",
  	"lamborghini",
  	"lamer",
  	"lancaster",
  	"lancia",
  	"land",
  	"landrover",
  	"lanxess",
  	"lasalle",
  	"lat",
  	"latino",
  	"latrobe",
  	"law",
  	"lawyer",
  	"lds",
  	"lease",
  	"leclerc",
  	"lefrak",
  	"legal",
  	"lego",
  	"lexus",
  	"lgbt",
  	"lidl",
  	"life",
  	"lifeinsurance",
  	"lifestyle",
  	"lighting",
  	"like",
  	"lilly",
  	"limited",
  	"limo",
  	"lincoln",
  	"linde",
  	"link",
  	"lipsy",
  	"live",
  	"living",
  	"llc",
  	"llp",
  	"loan",
  	"loans",
  	"locker",
  	"locus",
  	"loft",
  	"lol",
  	"london",
  	"lotte",
  	"lotto",
  	"love",
  	"lpl",
  	"lplfinancial",
  	"ltd",
  	"ltda",
  	"lundbeck",
  	"luxe",
  	"luxury",
  	"macys",
  	"madrid",
  	"maif",
  	"maison",
  	"makeup",
  	"man",
  	"management",
  	"mango",
  	"map",
  	"market",
  	"marketing",
  	"markets",
  	"marriott",
  	"marshalls",
  	"maserati",
  	"mattel",
  	"mba",
  	"mckinsey",
  	"med",
  	"media",
  	"meet",
  	"melbourne",
  	"meme",
  	"memorial",
  	"men",
  	"menu",
  	"merckmsd",
  	"miami",
  	"microsoft",
  	"mini",
  	"mint",
  	"mit",
  	"mitsubishi",
  	"mlb",
  	"mls",
  	"mma",
  	"mobile",
  	"moda",
  	"moe",
  	"moi",
  	"mom",
  	"monash",
  	"money",
  	"monster",
  	"mormon",
  	"mortgage",
  	"moscow",
  	"moto",
  	"motorcycles",
  	"mov",
  	"movie",
  	"msd",
  	"mtn",
  	"mtr",
  	"music",
  	"mutual",
  	"nab",
  	"nagoya",
  	"natura",
  	"navy",
  	"nba",
  	"nec",
  	"netbank",
  	"netflix",
  	"network",
  	"neustar",
  	"new",
  	"news",
  	"next",
  	"nextdirect",
  	"nexus",
  	"nfl",
  	"ngo",
  	"nhk",
  	"nico",
  	"nike",
  	"nikon",
  	"ninja",
  	"nissan",
  	"nissay",
  	"nokia",
  	"northwesternmutual",
  	"norton",
  	"now",
  	"nowruz",
  	"nowtv",
  	"nra",
  	"nrw",
  	"ntt",
  	"nyc",
  	"obi",
  	"observer",
  	"office",
  	"okinawa",
  	"olayan",
  	"olayangroup",
  	"oldnavy",
  	"ollo",
  	"omega",
  	"one",
  	"ong",
  	"onl",
  	"online",
  	"ooo",
  	"open",
  	"oracle",
  	"orange",
  	"organic",
  	"origins",
  	"osaka",
  	"otsuka",
  	"ott",
  	"ovh",
  	"page",
  	"panasonic",
  	"paris",
  	"pars",
  	"partners",
  	"parts",
  	"party",
  	"passagens",
  	"pay",
  	"pccw",
  	"pet",
  	"pfizer",
  	"pharmacy",
  	"phd",
  	"philips",
  	"phone",
  	"photo",
  	"photography",
  	"photos",
  	"physio",
  	"pics",
  	"pictet",
  	"pictures",
  	"pid",
  	"pin",
  	"ping",
  	"pink",
  	"pioneer",
  	"pizza",
  	"place",
  	"play",
  	"playstation",
  	"plumbing",
  	"plus",
  	"pnc",
  	"pohl",
  	"poker",
  	"politie",
  	"porn",
  	"pramerica",
  	"praxi",
  	"press",
  	"prime",
  	"prod",
  	"productions",
  	"prof",
  	"progressive",
  	"promo",
  	"properties",
  	"property",
  	"protection",
  	"pru",
  	"prudential",
  	"pub",
  	"pwc",
  	"qpon",
  	"quebec",
  	"quest",
  	"racing",
  	"radio",
  	"read",
  	"realestate",
  	"realtor",
  	"realty",
  	"recipes",
  	"red",
  	"redstone",
  	"redumbrella",
  	"rehab",
  	"reise",
  	"reisen",
  	"reit",
  	"reliance",
  	"ren",
  	"rent",
  	"rentals",
  	"repair",
  	"report",
  	"republican",
  	"rest",
  	"restaurant",
  	"review",
  	"reviews",
  	"rexroth",
  	"rich",
  	"richardli",
  	"ricoh",
  	"ril",
  	"rio",
  	"rip",
  	"rocher",
  	"rocks",
  	"rodeo",
  	"rogers",
  	"room",
  	"rsvp",
  	"rugby",
  	"ruhr",
  	"run",
  	"rwe",
  	"ryukyu",
  	"saarland",
  	"safe",
  	"safety",
  	"sakura",
  	"sale",
  	"salon",
  	"samsclub",
  	"samsung",
  	"sandvik",
  	"sandvikcoromant",
  	"sanofi",
  	"sap",
  	"sarl",
  	"sas",
  	"save",
  	"saxo",
  	"sbi",
  	"sbs",
  	"sca",
  	"scb",
  	"schaeffler",
  	"schmidt",
  	"scholarships",
  	"school",
  	"schule",
  	"schwarz",
  	"science",
  	"scot",
  	"search",
  	"seat",
  	"secure",
  	"security",
  	"seek",
  	"select",
  	"sener",
  	"services",
  	"ses",
  	"seven",
  	"sew",
  	"sex",
  	"sexy",
  	"sfr",
  	"shangrila",
  	"sharp",
  	"shaw",
  	"shell",
  	"shia",
  	"shiksha",
  	"shoes",
  	"shop",
  	"shopping",
  	"shouji",
  	"show",
  	"showtime",
  	"silk",
  	"sina",
  	"singles",
  	"site",
  	"ski",
  	"skin",
  	"sky",
  	"skype",
  	"sling",
  	"smart",
  	"smile",
  	"sncf",
  	"soccer",
  	"social",
  	"softbank",
  	"software",
  	"sohu",
  	"solar",
  	"solutions",
  	"song",
  	"sony",
  	"soy",
  	"spa",
  	"space",
  	"sport",
  	"spot",
  	"srl",
  	"stada",
  	"staples",
  	"star",
  	"statebank",
  	"statefarm",
  	"stc",
  	"stcgroup",
  	"stockholm",
  	"storage",
  	"store",
  	"stream",
  	"studio",
  	"study",
  	"style",
  	"sucks",
  	"supplies",
  	"supply",
  	"support",
  	"surf",
  	"surgery",
  	"suzuki",
  	"swatch",
  	"swiss",
  	"sydney",
  	"systems",
  	"tab",
  	"taipei",
  	"talk",
  	"taobao",
  	"target",
  	"tatamotors",
  	"tatar",
  	"tattoo",
  	"tax",
  	"taxi",
  	"tci",
  	"tdk",
  	"team",
  	"tech",
  	"technology",
  	"temasek",
  	"tennis",
  	"teva",
  	"thd",
  	"theater",
  	"theatre",
  	"tiaa",
  	"tickets",
  	"tienda",
  	"tiffany",
  	"tips",
  	"tires",
  	"tirol",
  	"tjmaxx",
  	"tjx",
  	"tkmaxx",
  	"tmall",
  	"today",
  	"tokyo",
  	"tools",
  	"top",
  	"toray",
  	"toshiba",
  	"total",
  	"tours",
  	"town",
  	"toyota",
  	"toys",
  	"trade",
  	"trading",
  	"training",
  	"travel",
  	"travelchannel",
  	"travelers",
  	"travelersinsurance",
  	"trust",
  	"trv",
  	"tube",
  	"tui",
  	"tunes",
  	"tushu",
  	"tvs",
  	"ubank",
  	"ubs",
  	"unicom",
  	"university",
  	"uno",
  	"uol",
  	"ups",
  	"vacations",
  	"vana",
  	"vanguard",
  	"vegas",
  	"ventures",
  	"verisign",
  	"versicherung",
  	"vet",
  	"viajes",
  	"video",
  	"vig",
  	"viking",
  	"villas",
  	"vin",
  	"vip",
  	"virgin",
  	"visa",
  	"vision",
  	"viva",
  	"vivo",
  	"vlaanderen",
  	"vodka",
  	"volkswagen",
  	"volvo",
  	"vote",
  	"voting",
  	"voto",
  	"voyage",
  	"vuelos",
  	"wales",
  	"walmart",
  	"walter",
  	"wang",
  	"wanggou",
  	"watch",
  	"watches",
  	"weather",
  	"weatherchannel",
  	"webcam",
  	"weber",
  	"website",
  	"wedding",
  	"weibo",
  	"weir",
  	"whoswho",
  	"wien",
  	"wiki",
  	"williamhill",
  	"win",
  	"windows",
  	"wine",
  	"winners",
  	"wme",
  	"wolterskluwer",
  	"woodside",
  	"work",
  	"works",
  	"world",
  	"wow",
  	"wtc",
  	"wtf",
  	"xbox",
  	"xerox",
  	"xfinity",
  	"xihuan",
  	"xin",
  	"कॉम",
  	"セール",
  	"佛山",
  	"慈善",
  	"集团",
  	"在线",
  	"点看",
  	"คอม",
  	"八卦",
  	"موقع",
  	"公益",
  	"公司",
  	"香格里拉",
  	"网站",
  	"移动",
  	"我爱你",
  	"москва",
  	"католик",
  	"онлайн",
  	"сайт",
  	"联通",
  	"קום",
  	"时尚",
  	"微博",
  	"淡马锡",
  	"ファッション",
  	"орг",
  	"नेट",
  	"ストア",
  	"アマゾン",
  	"삼성",
  	"商标",
  	"商店",
  	"商城",
  	"дети",
  	"ポイント",
  	"新闻",
  	"家電",
  	"كوم",
  	"中文网",
  	"中信",
  	"娱乐",
  	"谷歌",
  	"電訊盈科",
  	"购物",
  	"クラウド",
  	"通販",
  	"网店",
  	"संगठन",
  	"餐厅",
  	"网络",
  	"ком",
  	"亚马逊",
  	"诺基亚",
  	"食品",
  	"飞利浦",
  	"手机",
  	"ارامكو",
  	"العليان",
  	"اتصالات",
  	"بازار",
  	"ابوظبي",
  	"كاثوليك",
  	"همراه",
  	"닷컴",
  	"政府",
  	"شبكة",
  	"بيتك",
  	"عرب",
  	"机构",
  	"组织机构",
  	"健康",
  	"招聘",
  	"рус",
  	"大拿",
  	"みんな",
  	"グーグル",
  	"世界",
  	"書籍",
  	"网址",
  	"닷넷",
  	"コム",
  	"天主教",
  	"游戏",
  	"vermögensberater",
  	"vermögensberatung",
  	"企业",
  	"信息",
  	"嘉里大酒店",
  	"嘉里",
  	"广东",
  	"政务",
  	"xyz",
  	"yachts",
  	"yahoo",
  	"yamaxun",
  	"yandex",
  	"yodobashi",
  	"yoga",
  	"yokohama",
  	"you",
  	"youtube",
  	"yun",
  	"zappos",
  	"zara",
  	"zero",
  	"zip",
  	"zone",
  	"zuerich",
  	"cc.ua",
  	"inf.ua",
  	"ltd.ua",
  	"611.to",
  	"graphox.us",
  	"*.devcdnaccesso.com",
  	"adobeaemcloud.com",
  	"*.dev.adobeaemcloud.com",
  	"hlx.live",
  	"adobeaemcloud.net",
  	"hlx.page",
  	"hlx3.page",
  	"beep.pl",
  	"airkitapps.com",
  	"airkitapps-au.com",
  	"airkitapps.eu",
  	"aivencloud.com",
  	"barsy.ca",
  	"*.compute.estate",
  	"*.alces.network",
  	"kasserver.com",
  	"altervista.org",
  	"alwaysdata.net",
  	"cloudfront.net",
  	"*.compute.amazonaws.com",
  	"*.compute-1.amazonaws.com",
  	"*.compute.amazonaws.com.cn",
  	"us-east-1.amazonaws.com",
  	"cn-north-1.eb.amazonaws.com.cn",
  	"cn-northwest-1.eb.amazonaws.com.cn",
  	"elasticbeanstalk.com",
  	"ap-northeast-1.elasticbeanstalk.com",
  	"ap-northeast-2.elasticbeanstalk.com",
  	"ap-northeast-3.elasticbeanstalk.com",
  	"ap-south-1.elasticbeanstalk.com",
  	"ap-southeast-1.elasticbeanstalk.com",
  	"ap-southeast-2.elasticbeanstalk.com",
  	"ca-central-1.elasticbeanstalk.com",
  	"eu-central-1.elasticbeanstalk.com",
  	"eu-west-1.elasticbeanstalk.com",
  	"eu-west-2.elasticbeanstalk.com",
  	"eu-west-3.elasticbeanstalk.com",
  	"sa-east-1.elasticbeanstalk.com",
  	"us-east-1.elasticbeanstalk.com",
  	"us-east-2.elasticbeanstalk.com",
  	"us-gov-west-1.elasticbeanstalk.com",
  	"us-west-1.elasticbeanstalk.com",
  	"us-west-2.elasticbeanstalk.com",
  	"*.elb.amazonaws.com",
  	"*.elb.amazonaws.com.cn",
  	"awsglobalaccelerator.com",
  	"s3.amazonaws.com",
  	"s3-ap-northeast-1.amazonaws.com",
  	"s3-ap-northeast-2.amazonaws.com",
  	"s3-ap-south-1.amazonaws.com",
  	"s3-ap-southeast-1.amazonaws.com",
  	"s3-ap-southeast-2.amazonaws.com",
  	"s3-ca-central-1.amazonaws.com",
  	"s3-eu-central-1.amazonaws.com",
  	"s3-eu-west-1.amazonaws.com",
  	"s3-eu-west-2.amazonaws.com",
  	"s3-eu-west-3.amazonaws.com",
  	"s3-external-1.amazonaws.com",
  	"s3-fips-us-gov-west-1.amazonaws.com",
  	"s3-sa-east-1.amazonaws.com",
  	"s3-us-gov-west-1.amazonaws.com",
  	"s3-us-east-2.amazonaws.com",
  	"s3-us-west-1.amazonaws.com",
  	"s3-us-west-2.amazonaws.com",
  	"s3.ap-northeast-2.amazonaws.com",
  	"s3.ap-south-1.amazonaws.com",
  	"s3.cn-north-1.amazonaws.com.cn",
  	"s3.ca-central-1.amazonaws.com",
  	"s3.eu-central-1.amazonaws.com",
  	"s3.eu-west-2.amazonaws.com",
  	"s3.eu-west-3.amazonaws.com",
  	"s3.us-east-2.amazonaws.com",
  	"s3.dualstack.ap-northeast-1.amazonaws.com",
  	"s3.dualstack.ap-northeast-2.amazonaws.com",
  	"s3.dualstack.ap-south-1.amazonaws.com",
  	"s3.dualstack.ap-southeast-1.amazonaws.com",
  	"s3.dualstack.ap-southeast-2.amazonaws.com",
  	"s3.dualstack.ca-central-1.amazonaws.com",
  	"s3.dualstack.eu-central-1.amazonaws.com",
  	"s3.dualstack.eu-west-1.amazonaws.com",
  	"s3.dualstack.eu-west-2.amazonaws.com",
  	"s3.dualstack.eu-west-3.amazonaws.com",
  	"s3.dualstack.sa-east-1.amazonaws.com",
  	"s3.dualstack.us-east-1.amazonaws.com",
  	"s3.dualstack.us-east-2.amazonaws.com",
  	"s3-website-us-east-1.amazonaws.com",
  	"s3-website-us-west-1.amazonaws.com",
  	"s3-website-us-west-2.amazonaws.com",
  	"s3-website-ap-northeast-1.amazonaws.com",
  	"s3-website-ap-southeast-1.amazonaws.com",
  	"s3-website-ap-southeast-2.amazonaws.com",
  	"s3-website-eu-west-1.amazonaws.com",
  	"s3-website-sa-east-1.amazonaws.com",
  	"s3-website.ap-northeast-2.amazonaws.com",
  	"s3-website.ap-south-1.amazonaws.com",
  	"s3-website.ca-central-1.amazonaws.com",
  	"s3-website.eu-central-1.amazonaws.com",
  	"s3-website.eu-west-2.amazonaws.com",
  	"s3-website.eu-west-3.amazonaws.com",
  	"s3-website.us-east-2.amazonaws.com",
  	"t3l3p0rt.net",
  	"tele.amune.org",
  	"apigee.io",
  	"siiites.com",
  	"appspacehosted.com",
  	"appspaceusercontent.com",
  	"appudo.net",
  	"on-aptible.com",
  	"user.aseinet.ne.jp",
  	"gv.vc",
  	"d.gv.vc",
  	"user.party.eus",
  	"pimienta.org",
  	"poivron.org",
  	"potager.org",
  	"sweetpepper.org",
  	"myasustor.com",
  	"cdn.prod.atlassian-dev.net",
  	"translated.page",
  	"myfritz.net",
  	"onavstack.net",
  	"*.awdev.ca",
  	"*.advisor.ws",
  	"ecommerce-shop.pl",
  	"b-data.io",
  	"backplaneapp.io",
  	"balena-devices.com",
  	"rs.ba",
  	"*.banzai.cloud",
  	"app.banzaicloud.io",
  	"*.backyards.banzaicloud.io",
  	"base.ec",
  	"official.ec",
  	"buyshop.jp",
  	"fashionstore.jp",
  	"handcrafted.jp",
  	"kawaiishop.jp",
  	"supersale.jp",
  	"theshop.jp",
  	"shopselect.net",
  	"base.shop",
  	"*.beget.app",
  	"betainabox.com",
  	"bnr.la",
  	"bitbucket.io",
  	"blackbaudcdn.net",
  	"of.je",
  	"bluebite.io",
  	"boomla.net",
  	"boutir.com",
  	"boxfuse.io",
  	"square7.ch",
  	"bplaced.com",
  	"bplaced.de",
  	"square7.de",
  	"bplaced.net",
  	"square7.net",
  	"shop.brendly.rs",
  	"browsersafetymark.io",
  	"uk0.bigv.io",
  	"dh.bytemark.co.uk",
  	"vm.bytemark.co.uk",
  	"cafjs.com",
  	"mycd.eu",
  	"drr.ac",
  	"uwu.ai",
  	"carrd.co",
  	"crd.co",
  	"ju.mp",
  	"ae.org",
  	"br.com",
  	"cn.com",
  	"com.de",
  	"com.se",
  	"de.com",
  	"eu.com",
  	"gb.net",
  	"hu.net",
  	"jp.net",
  	"jpn.com",
  	"mex.com",
  	"ru.com",
  	"sa.com",
  	"se.net",
  	"uk.com",
  	"uk.net",
  	"us.com",
  	"za.bz",
  	"za.com",
  	"ar.com",
  	"hu.com",
  	"kr.com",
  	"no.com",
  	"qc.com",
  	"uy.com",
  	"africa.com",
  	"gr.com",
  	"in.net",
  	"web.in",
  	"us.org",
  	"co.com",
  	"aus.basketball",
  	"nz.basketball",
  	"radio.am",
  	"radio.fm",
  	"c.la",
  	"certmgr.org",
  	"cx.ua",
  	"discourse.group",
  	"discourse.team",
  	"cleverapps.io",
  	"clerk.app",
  	"clerkstage.app",
  	"*.lcl.dev",
  	"*.lclstage.dev",
  	"*.stg.dev",
  	"*.stgstage.dev",
  	"clickrising.net",
  	"c66.me",
  	"cloud66.ws",
  	"cloud66.zone",
  	"jdevcloud.com",
  	"wpdevcloud.com",
  	"cloudaccess.host",
  	"freesite.host",
  	"cloudaccess.net",
  	"cloudcontrolled.com",
  	"cloudcontrolapp.com",
  	"*.cloudera.site",
  	"pages.dev",
  	"trycloudflare.com",
  	"workers.dev",
  	"wnext.app",
  	"co.ca",
  	"*.otap.co",
  	"co.cz",
  	"c.cdn77.org",
  	"cdn77-ssl.net",
  	"r.cdn77.net",
  	"rsc.cdn77.org",
  	"ssl.origin.cdn77-secure.org",
  	"cloudns.asia",
  	"cloudns.biz",
  	"cloudns.club",
  	"cloudns.cc",
  	"cloudns.eu",
  	"cloudns.in",
  	"cloudns.info",
  	"cloudns.org",
  	"cloudns.pro",
  	"cloudns.pw",
  	"cloudns.us",
  	"cnpy.gdn",
  	"codeberg.page",
  	"co.nl",
  	"co.no",
  	"webhosting.be",
  	"hosting-cluster.nl",
  	"ac.ru",
  	"edu.ru",
  	"gov.ru",
  	"int.ru",
  	"mil.ru",
  	"test.ru",
  	"dyn.cosidns.de",
  	"dynamisches-dns.de",
  	"dnsupdater.de",
  	"internet-dns.de",
  	"l-o-g-i-n.de",
  	"dynamic-dns.info",
  	"feste-ip.net",
  	"knx-server.net",
  	"static-access.net",
  	"realm.cz",
  	"*.cryptonomic.net",
  	"cupcake.is",
  	"curv.dev",
  	"*.customer-oci.com",
  	"*.oci.customer-oci.com",
  	"*.ocp.customer-oci.com",
  	"*.ocs.customer-oci.com",
  	"cyon.link",
  	"cyon.site",
  	"fnwk.site",
  	"folionetwork.site",
  	"platform0.app",
  	"daplie.me",
  	"localhost.daplie.me",
  	"dattolocal.com",
  	"dattorelay.com",
  	"dattoweb.com",
  	"mydatto.com",
  	"dattolocal.net",
  	"mydatto.net",
  	"biz.dk",
  	"co.dk",
  	"firm.dk",
  	"reg.dk",
  	"store.dk",
  	"dyndns.dappnode.io",
  	"*.dapps.earth",
  	"*.bzz.dapps.earth",
  	"builtwithdark.com",
  	"demo.datadetect.com",
  	"instance.datadetect.com",
  	"edgestack.me",
  	"ddns5.com",
  	"debian.net",
  	"deno.dev",
  	"deno-staging.dev",
  	"dedyn.io",
  	"deta.app",
  	"deta.dev",
  	"*.rss.my.id",
  	"*.diher.solutions",
  	"discordsays.com",
  	"discordsez.com",
  	"jozi.biz",
  	"dnshome.de",
  	"online.th",
  	"shop.th",
  	"drayddns.com",
  	"shoparena.pl",
  	"dreamhosters.com",
  	"mydrobo.com",
  	"drud.io",
  	"drud.us",
  	"duckdns.org",
  	"bip.sh",
  	"bitbridge.net",
  	"dy.fi",
  	"tunk.org",
  	"dyndns-at-home.com",
  	"dyndns-at-work.com",
  	"dyndns-blog.com",
  	"dyndns-free.com",
  	"dyndns-home.com",
  	"dyndns-ip.com",
  	"dyndns-mail.com",
  	"dyndns-office.com",
  	"dyndns-pics.com",
  	"dyndns-remote.com",
  	"dyndns-server.com",
  	"dyndns-web.com",
  	"dyndns-wiki.com",
  	"dyndns-work.com",
  	"dyndns.biz",
  	"dyndns.info",
  	"dyndns.org",
  	"dyndns.tv",
  	"at-band-camp.net",
  	"ath.cx",
  	"barrel-of-knowledge.info",
  	"barrell-of-knowledge.info",
  	"better-than.tv",
  	"blogdns.com",
  	"blogdns.net",
  	"blogdns.org",
  	"blogsite.org",
  	"boldlygoingnowhere.org",
  	"broke-it.net",
  	"buyshouses.net",
  	"cechire.com",
  	"dnsalias.com",
  	"dnsalias.net",
  	"dnsalias.org",
  	"dnsdojo.com",
  	"dnsdojo.net",
  	"dnsdojo.org",
  	"does-it.net",
  	"doesntexist.com",
  	"doesntexist.org",
  	"dontexist.com",
  	"dontexist.net",
  	"dontexist.org",
  	"doomdns.com",
  	"doomdns.org",
  	"dvrdns.org",
  	"dyn-o-saur.com",
  	"dynalias.com",
  	"dynalias.net",
  	"dynalias.org",
  	"dynathome.net",
  	"dyndns.ws",
  	"endofinternet.net",
  	"endofinternet.org",
  	"endoftheinternet.org",
  	"est-a-la-maison.com",
  	"est-a-la-masion.com",
  	"est-le-patron.com",
  	"est-mon-blogueur.com",
  	"for-better.biz",
  	"for-more.biz",
  	"for-our.info",
  	"for-some.biz",
  	"for-the.biz",
  	"forgot.her.name",
  	"forgot.his.name",
  	"from-ak.com",
  	"from-al.com",
  	"from-ar.com",
  	"from-az.net",
  	"from-ca.com",
  	"from-co.net",
  	"from-ct.com",
  	"from-dc.com",
  	"from-de.com",
  	"from-fl.com",
  	"from-ga.com",
  	"from-hi.com",
  	"from-ia.com",
  	"from-id.com",
  	"from-il.com",
  	"from-in.com",
  	"from-ks.com",
  	"from-ky.com",
  	"from-la.net",
  	"from-ma.com",
  	"from-md.com",
  	"from-me.org",
  	"from-mi.com",
  	"from-mn.com",
  	"from-mo.com",
  	"from-ms.com",
  	"from-mt.com",
  	"from-nc.com",
  	"from-nd.com",
  	"from-ne.com",
  	"from-nh.com",
  	"from-nj.com",
  	"from-nm.com",
  	"from-nv.com",
  	"from-ny.net",
  	"from-oh.com",
  	"from-ok.com",
  	"from-or.com",
  	"from-pa.com",
  	"from-pr.com",
  	"from-ri.com",
  	"from-sc.com",
  	"from-sd.com",
  	"from-tn.com",
  	"from-tx.com",
  	"from-ut.com",
  	"from-va.com",
  	"from-vt.com",
  	"from-wa.com",
  	"from-wi.com",
  	"from-wv.com",
  	"from-wy.com",
  	"ftpaccess.cc",
  	"fuettertdasnetz.de",
  	"game-host.org",
  	"game-server.cc",
  	"getmyip.com",
  	"gets-it.net",
  	"go.dyndns.org",
  	"gotdns.com",
  	"gotdns.org",
  	"groks-the.info",
  	"groks-this.info",
  	"ham-radio-op.net",
  	"here-for-more.info",
  	"hobby-site.com",
  	"hobby-site.org",
  	"home.dyndns.org",
  	"homedns.org",
  	"homeftp.net",
  	"homeftp.org",
  	"homeip.net",
  	"homelinux.com",
  	"homelinux.net",
  	"homelinux.org",
  	"homeunix.com",
  	"homeunix.net",
  	"homeunix.org",
  	"iamallama.com",
  	"in-the-band.net",
  	"is-a-anarchist.com",
  	"is-a-blogger.com",
  	"is-a-bookkeeper.com",
  	"is-a-bruinsfan.org",
  	"is-a-bulls-fan.com",
  	"is-a-candidate.org",
  	"is-a-caterer.com",
  	"is-a-celticsfan.org",
  	"is-a-chef.com",
  	"is-a-chef.net",
  	"is-a-chef.org",
  	"is-a-conservative.com",
  	"is-a-cpa.com",
  	"is-a-cubicle-slave.com",
  	"is-a-democrat.com",
  	"is-a-designer.com",
  	"is-a-doctor.com",
  	"is-a-financialadvisor.com",
  	"is-a-geek.com",
  	"is-a-geek.net",
  	"is-a-geek.org",
  	"is-a-green.com",
  	"is-a-guru.com",
  	"is-a-hard-worker.com",
  	"is-a-hunter.com",
  	"is-a-knight.org",
  	"is-a-landscaper.com",
  	"is-a-lawyer.com",
  	"is-a-liberal.com",
  	"is-a-libertarian.com",
  	"is-a-linux-user.org",
  	"is-a-llama.com",
  	"is-a-musician.com",
  	"is-a-nascarfan.com",
  	"is-a-nurse.com",
  	"is-a-painter.com",
  	"is-a-patsfan.org",
  	"is-a-personaltrainer.com",
  	"is-a-photographer.com",
  	"is-a-player.com",
  	"is-a-republican.com",
  	"is-a-rockstar.com",
  	"is-a-socialist.com",
  	"is-a-soxfan.org",
  	"is-a-student.com",
  	"is-a-teacher.com",
  	"is-a-techie.com",
  	"is-a-therapist.com",
  	"is-an-accountant.com",
  	"is-an-actor.com",
  	"is-an-actress.com",
  	"is-an-anarchist.com",
  	"is-an-artist.com",
  	"is-an-engineer.com",
  	"is-an-entertainer.com",
  	"is-by.us",
  	"is-certified.com",
  	"is-found.org",
  	"is-gone.com",
  	"is-into-anime.com",
  	"is-into-cars.com",
  	"is-into-cartoons.com",
  	"is-into-games.com",
  	"is-leet.com",
  	"is-lost.org",
  	"is-not-certified.com",
  	"is-saved.org",
  	"is-slick.com",
  	"is-uberleet.com",
  	"is-very-bad.org",
  	"is-very-evil.org",
  	"is-very-good.org",
  	"is-very-nice.org",
  	"is-very-sweet.org",
  	"is-with-theband.com",
  	"isa-geek.com",
  	"isa-geek.net",
  	"isa-geek.org",
  	"isa-hockeynut.com",
  	"issmarterthanyou.com",
  	"isteingeek.de",
  	"istmein.de",
  	"kicks-ass.net",
  	"kicks-ass.org",
  	"knowsitall.info",
  	"land-4-sale.us",
  	"lebtimnetz.de",
  	"leitungsen.de",
  	"likes-pie.com",
  	"likescandy.com",
  	"merseine.nu",
  	"mine.nu",
  	"misconfused.org",
  	"mypets.ws",
  	"myphotos.cc",
  	"neat-url.com",
  	"office-on-the.net",
  	"on-the-web.tv",
  	"podzone.net",
  	"podzone.org",
  	"readmyblog.org",
  	"saves-the-whales.com",
  	"scrapper-site.net",
  	"scrapping.cc",
  	"selfip.biz",
  	"selfip.com",
  	"selfip.info",
  	"selfip.net",
  	"selfip.org",
  	"sells-for-less.com",
  	"sells-for-u.com",
  	"sells-it.net",
  	"sellsyourhome.org",
  	"servebbs.com",
  	"servebbs.net",
  	"servebbs.org",
  	"serveftp.net",
  	"serveftp.org",
  	"servegame.org",
  	"shacknet.nu",
  	"simple-url.com",
  	"space-to-rent.com",
  	"stuff-4-sale.org",
  	"stuff-4-sale.us",
  	"teaches-yoga.com",
  	"thruhere.net",
  	"traeumtgerade.de",
  	"webhop.biz",
  	"webhop.info",
  	"webhop.net",
  	"webhop.org",
  	"worse-than.tv",
  	"writesthisblog.com",
  	"ddnss.de",
  	"dyn.ddnss.de",
  	"dyndns.ddnss.de",
  	"dyndns1.de",
  	"dyn-ip24.de",
  	"home-webserver.de",
  	"dyn.home-webserver.de",
  	"myhome-server.de",
  	"ddnss.org",
  	"definima.net",
  	"definima.io",
  	"ondigitalocean.app",
  	"*.digitaloceanspaces.com",
  	"bci.dnstrace.pro",
  	"ddnsfree.com",
  	"ddnsgeek.com",
  	"giize.com",
  	"gleeze.com",
  	"kozow.com",
  	"loseyourip.com",
  	"ooguy.com",
  	"theworkpc.com",
  	"casacam.net",
  	"dynu.net",
  	"accesscam.org",
  	"camdvr.org",
  	"freeddns.org",
  	"mywire.org",
  	"webredirect.org",
  	"myddns.rocks",
  	"blogsite.xyz",
  	"dynv6.net",
  	"e4.cz",
  	"eero.online",
  	"eero-stage.online",
  	"elementor.cloud",
  	"elementor.cool",
  	"en-root.fr",
  	"mytuleap.com",
  	"tuleap-partners.com",
  	"encr.app",
  	"encoreapi.com",
  	"onred.one",
  	"staging.onred.one",
  	"eu.encoway.cloud",
  	"eu.org",
  	"al.eu.org",
  	"asso.eu.org",
  	"at.eu.org",
  	"au.eu.org",
  	"be.eu.org",
  	"bg.eu.org",
  	"ca.eu.org",
  	"cd.eu.org",
  	"ch.eu.org",
  	"cn.eu.org",
  	"cy.eu.org",
  	"cz.eu.org",
  	"de.eu.org",
  	"dk.eu.org",
  	"edu.eu.org",
  	"ee.eu.org",
  	"es.eu.org",
  	"fi.eu.org",
  	"fr.eu.org",
  	"gr.eu.org",
  	"hr.eu.org",
  	"hu.eu.org",
  	"ie.eu.org",
  	"il.eu.org",
  	"in.eu.org",
  	"int.eu.org",
  	"is.eu.org",
  	"it.eu.org",
  	"jp.eu.org",
  	"kr.eu.org",
  	"lt.eu.org",
  	"lu.eu.org",
  	"lv.eu.org",
  	"mc.eu.org",
  	"me.eu.org",
  	"mk.eu.org",
  	"mt.eu.org",
  	"my.eu.org",
  	"net.eu.org",
  	"ng.eu.org",
  	"nl.eu.org",
  	"no.eu.org",
  	"nz.eu.org",
  	"paris.eu.org",
  	"pl.eu.org",
  	"pt.eu.org",
  	"q-a.eu.org",
  	"ro.eu.org",
  	"ru.eu.org",
  	"se.eu.org",
  	"si.eu.org",
  	"sk.eu.org",
  	"tr.eu.org",
  	"uk.eu.org",
  	"us.eu.org",
  	"eurodir.ru",
  	"eu-1.evennode.com",
  	"eu-2.evennode.com",
  	"eu-3.evennode.com",
  	"eu-4.evennode.com",
  	"us-1.evennode.com",
  	"us-2.evennode.com",
  	"us-3.evennode.com",
  	"us-4.evennode.com",
  	"twmail.cc",
  	"twmail.net",
  	"twmail.org",
  	"mymailer.com.tw",
  	"url.tw",
  	"onfabrica.com",
  	"apps.fbsbx.com",
  	"ru.net",
  	"adygeya.ru",
  	"bashkiria.ru",
  	"bir.ru",
  	"cbg.ru",
  	"com.ru",
  	"dagestan.ru",
  	"grozny.ru",
  	"kalmykia.ru",
  	"kustanai.ru",
  	"marine.ru",
  	"mordovia.ru",
  	"msk.ru",
  	"mytis.ru",
  	"nalchik.ru",
  	"nov.ru",
  	"pyatigorsk.ru",
  	"spb.ru",
  	"vladikavkaz.ru",
  	"vladimir.ru",
  	"abkhazia.su",
  	"adygeya.su",
  	"aktyubinsk.su",
  	"arkhangelsk.su",
  	"armenia.su",
  	"ashgabad.su",
  	"azerbaijan.su",
  	"balashov.su",
  	"bashkiria.su",
  	"bryansk.su",
  	"bukhara.su",
  	"chimkent.su",
  	"dagestan.su",
  	"east-kazakhstan.su",
  	"exnet.su",
  	"georgia.su",
  	"grozny.su",
  	"ivanovo.su",
  	"jambyl.su",
  	"kalmykia.su",
  	"kaluga.su",
  	"karacol.su",
  	"karaganda.su",
  	"karelia.su",
  	"khakassia.su",
  	"krasnodar.su",
  	"kurgan.su",
  	"kustanai.su",
  	"lenug.su",
  	"mangyshlak.su",
  	"mordovia.su",
  	"msk.su",
  	"murmansk.su",
  	"nalchik.su",
  	"navoi.su",
  	"north-kazakhstan.su",
  	"nov.su",
  	"obninsk.su",
  	"penza.su",
  	"pokrovsk.su",
  	"sochi.su",
  	"spb.su",
  	"tashkent.su",
  	"termez.su",
  	"togliatti.su",
  	"troitsk.su",
  	"tselinograd.su",
  	"tula.su",
  	"tuva.su",
  	"vladikavkaz.su",
  	"vladimir.su",
  	"vologda.su",
  	"channelsdvr.net",
  	"u.channelsdvr.net",
  	"edgecompute.app",
  	"fastly-terrarium.com",
  	"fastlylb.net",
  	"map.fastlylb.net",
  	"freetls.fastly.net",
  	"map.fastly.net",
  	"a.prod.fastly.net",
  	"global.prod.fastly.net",
  	"a.ssl.fastly.net",
  	"b.ssl.fastly.net",
  	"global.ssl.fastly.net",
  	"fastvps-server.com",
  	"fastvps.host",
  	"myfast.host",
  	"fastvps.site",
  	"myfast.space",
  	"fedorainfracloud.org",
  	"fedorapeople.org",
  	"cloud.fedoraproject.org",
  	"app.os.fedoraproject.org",
  	"app.os.stg.fedoraproject.org",
  	"conn.uk",
  	"copro.uk",
  	"hosp.uk",
  	"mydobiss.com",
  	"fh-muenster.io",
  	"filegear.me",
  	"filegear-au.me",
  	"filegear-de.me",
  	"filegear-gb.me",
  	"filegear-ie.me",
  	"filegear-jp.me",
  	"filegear-sg.me",
  	"firebaseapp.com",
  	"fireweb.app",
  	"flap.id",
  	"onflashdrive.app",
  	"fldrv.com",
  	"fly.dev",
  	"edgeapp.net",
  	"shw.io",
  	"flynnhosting.net",
  	"forgeblocks.com",
  	"id.forgerock.io",
  	"framer.app",
  	"framercanvas.com",
  	"*.frusky.de",
  	"ravpage.co.il",
  	"0e.vc",
  	"freebox-os.com",
  	"freeboxos.com",
  	"fbx-os.fr",
  	"fbxos.fr",
  	"freebox-os.fr",
  	"freeboxos.fr",
  	"freedesktop.org",
  	"freemyip.com",
  	"wien.funkfeuer.at",
  	"*.futurecms.at",
  	"*.ex.futurecms.at",
  	"*.in.futurecms.at",
  	"futurehosting.at",
  	"futuremailing.at",
  	"*.ex.ortsinfo.at",
  	"*.kunden.ortsinfo.at",
  	"*.statics.cloud",
  	"independent-commission.uk",
  	"independent-inquest.uk",
  	"independent-inquiry.uk",
  	"independent-panel.uk",
  	"independent-review.uk",
  	"public-inquiry.uk",
  	"royal-commission.uk",
  	"campaign.gov.uk",
  	"service.gov.uk",
  	"api.gov.uk",
  	"gehirn.ne.jp",
  	"usercontent.jp",
  	"gentapps.com",
  	"gentlentapis.com",
  	"lab.ms",
  	"cdn-edges.net",
  	"ghost.io",
  	"gsj.bz",
  	"githubusercontent.com",
  	"githubpreview.dev",
  	"github.io",
  	"gitlab.io",
  	"gitapp.si",
  	"gitpage.si",
  	"glitch.me",
  	"nog.community",
  	"co.ro",
  	"shop.ro",
  	"lolipop.io",
  	"angry.jp",
  	"babyblue.jp",
  	"babymilk.jp",
  	"backdrop.jp",
  	"bambina.jp",
  	"bitter.jp",
  	"blush.jp",
  	"boo.jp",
  	"boy.jp",
  	"boyfriend.jp",
  	"but.jp",
  	"candypop.jp",
  	"capoo.jp",
  	"catfood.jp",
  	"cheap.jp",
  	"chicappa.jp",
  	"chillout.jp",
  	"chips.jp",
  	"chowder.jp",
  	"chu.jp",
  	"ciao.jp",
  	"cocotte.jp",
  	"coolblog.jp",
  	"cranky.jp",
  	"cutegirl.jp",
  	"daa.jp",
  	"deca.jp",
  	"deci.jp",
  	"digick.jp",
  	"egoism.jp",
  	"fakefur.jp",
  	"fem.jp",
  	"flier.jp",
  	"floppy.jp",
  	"fool.jp",
  	"frenchkiss.jp",
  	"girlfriend.jp",
  	"girly.jp",
  	"gloomy.jp",
  	"gonna.jp",
  	"greater.jp",
  	"hacca.jp",
  	"heavy.jp",
  	"her.jp",
  	"hiho.jp",
  	"hippy.jp",
  	"holy.jp",
  	"hungry.jp",
  	"icurus.jp",
  	"itigo.jp",
  	"jellybean.jp",
  	"kikirara.jp",
  	"kill.jp",
  	"kilo.jp",
  	"kuron.jp",
  	"littlestar.jp",
  	"lolipopmc.jp",
  	"lolitapunk.jp",
  	"lomo.jp",
  	"lovepop.jp",
  	"lovesick.jp",
  	"main.jp",
  	"mods.jp",
  	"mond.jp",
  	"mongolian.jp",
  	"moo.jp",
  	"namaste.jp",
  	"nikita.jp",
  	"nobushi.jp",
  	"noor.jp",
  	"oops.jp",
  	"parallel.jp",
  	"parasite.jp",
  	"pecori.jp",
  	"peewee.jp",
  	"penne.jp",
  	"pepper.jp",
  	"perma.jp",
  	"pigboat.jp",
  	"pinoko.jp",
  	"punyu.jp",
  	"pupu.jp",
  	"pussycat.jp",
  	"pya.jp",
  	"raindrop.jp",
  	"readymade.jp",
  	"sadist.jp",
  	"schoolbus.jp",
  	"secret.jp",
  	"staba.jp",
  	"stripper.jp",
  	"sub.jp",
  	"sunnyday.jp",
  	"thick.jp",
  	"tonkotsu.jp",
  	"under.jp",
  	"upper.jp",
  	"velvet.jp",
  	"verse.jp",
  	"versus.jp",
  	"vivian.jp",
  	"watson.jp",
  	"weblike.jp",
  	"whitesnow.jp",
  	"zombie.jp",
  	"heteml.net",
  	"cloudapps.digital",
  	"london.cloudapps.digital",
  	"pymnt.uk",
  	"homeoffice.gov.uk",
  	"ro.im",
  	"goip.de",
  	"run.app",
  	"a.run.app",
  	"web.app",
  	"*.0emm.com",
  	"appspot.com",
  	"*.r.appspot.com",
  	"codespot.com",
  	"googleapis.com",
  	"googlecode.com",
  	"pagespeedmobilizer.com",
  	"publishproxy.com",
  	"withgoogle.com",
  	"withyoutube.com",
  	"*.gateway.dev",
  	"cloud.goog",
  	"translate.goog",
  	"*.usercontent.goog",
  	"cloudfunctions.net",
  	"blogspot.ae",
  	"blogspot.al",
  	"blogspot.am",
  	"blogspot.ba",
  	"blogspot.be",
  	"blogspot.bg",
  	"blogspot.bj",
  	"blogspot.ca",
  	"blogspot.cf",
  	"blogspot.ch",
  	"blogspot.cl",
  	"blogspot.co.at",
  	"blogspot.co.id",
  	"blogspot.co.il",
  	"blogspot.co.ke",
  	"blogspot.co.nz",
  	"blogspot.co.uk",
  	"blogspot.co.za",
  	"blogspot.com",
  	"blogspot.com.ar",
  	"blogspot.com.au",
  	"blogspot.com.br",
  	"blogspot.com.by",
  	"blogspot.com.co",
  	"blogspot.com.cy",
  	"blogspot.com.ee",
  	"blogspot.com.eg",
  	"blogspot.com.es",
  	"blogspot.com.mt",
  	"blogspot.com.ng",
  	"blogspot.com.tr",
  	"blogspot.com.uy",
  	"blogspot.cv",
  	"blogspot.cz",
  	"blogspot.de",
  	"blogspot.dk",
  	"blogspot.fi",
  	"blogspot.fr",
  	"blogspot.gr",
  	"blogspot.hk",
  	"blogspot.hr",
  	"blogspot.hu",
  	"blogspot.ie",
  	"blogspot.in",
  	"blogspot.is",
  	"blogspot.it",
  	"blogspot.jp",
  	"blogspot.kr",
  	"blogspot.li",
  	"blogspot.lt",
  	"blogspot.lu",
  	"blogspot.md",
  	"blogspot.mk",
  	"blogspot.mr",
  	"blogspot.mx",
  	"blogspot.my",
  	"blogspot.nl",
  	"blogspot.no",
  	"blogspot.pe",
  	"blogspot.pt",
  	"blogspot.qa",
  	"blogspot.re",
  	"blogspot.ro",
  	"blogspot.rs",
  	"blogspot.ru",
  	"blogspot.se",
  	"blogspot.sg",
  	"blogspot.si",
  	"blogspot.sk",
  	"blogspot.sn",
  	"blogspot.td",
  	"blogspot.tw",
  	"blogspot.ug",
  	"blogspot.vn",
  	"goupile.fr",
  	"gov.nl",
  	"awsmppl.com",
  	"günstigbestellen.de",
  	"günstigliefern.de",
  	"fin.ci",
  	"free.hr",
  	"caa.li",
  	"ua.rs",
  	"conf.se",
  	"hs.zone",
  	"hs.run",
  	"hashbang.sh",
  	"hasura.app",
  	"hasura-app.io",
  	"pages.it.hs-heilbronn.de",
  	"hepforge.org",
  	"herokuapp.com",
  	"herokussl.com",
  	"ravendb.cloud",
  	"myravendb.com",
  	"ravendb.community",
  	"ravendb.me",
  	"development.run",
  	"ravendb.run",
  	"homesklep.pl",
  	"secaas.hk",
  	"hoplix.shop",
  	"orx.biz",
  	"biz.gl",
  	"col.ng",
  	"firm.ng",
  	"gen.ng",
  	"ltd.ng",
  	"ngo.ng",
  	"edu.scot",
  	"sch.so",
  	"hostyhosting.io",
  	"häkkinen.fi",
  	"*.moonscale.io",
  	"moonscale.net",
  	"iki.fi",
  	"ibxos.it",
  	"iliadboxos.it",
  	"impertrixcdn.com",
  	"impertrix.com",
  	"smushcdn.com",
  	"wphostedmail.com",
  	"wpmucdn.com",
  	"tempurl.host",
  	"wpmudev.host",
  	"dyn-berlin.de",
  	"in-berlin.de",
  	"in-brb.de",
  	"in-butter.de",
  	"in-dsl.de",
  	"in-dsl.net",
  	"in-dsl.org",
  	"in-vpn.de",
  	"in-vpn.net",
  	"in-vpn.org",
  	"biz.at",
  	"info.at",
  	"info.cx",
  	"ac.leg.br",
  	"al.leg.br",
  	"am.leg.br",
  	"ap.leg.br",
  	"ba.leg.br",
  	"ce.leg.br",
  	"df.leg.br",
  	"es.leg.br",
  	"go.leg.br",
  	"ma.leg.br",
  	"mg.leg.br",
  	"ms.leg.br",
  	"mt.leg.br",
  	"pa.leg.br",
  	"pb.leg.br",
  	"pe.leg.br",
  	"pi.leg.br",
  	"pr.leg.br",
  	"rj.leg.br",
  	"rn.leg.br",
  	"ro.leg.br",
  	"rr.leg.br",
  	"rs.leg.br",
  	"sc.leg.br",
  	"se.leg.br",
  	"sp.leg.br",
  	"to.leg.br",
  	"pixolino.com",
  	"na4u.ru",
  	"iopsys.se",
  	"ipifony.net",
  	"iservschule.de",
  	"mein-iserv.de",
  	"schulplattform.de",
  	"schulserver.de",
  	"test-iserv.de",
  	"iserv.dev",
  	"iobb.net",
  	"mel.cloudlets.com.au",
  	"cloud.interhostsolutions.be",
  	"users.scale.virtualcloud.com.br",
  	"mycloud.by",
  	"alp1.ae.flow.ch",
  	"appengine.flow.ch",
  	"es-1.axarnet.cloud",
  	"diadem.cloud",
  	"vip.jelastic.cloud",
  	"jele.cloud",
  	"it1.eur.aruba.jenv-aruba.cloud",
  	"it1.jenv-aruba.cloud",
  	"keliweb.cloud",
  	"cs.keliweb.cloud",
  	"oxa.cloud",
  	"tn.oxa.cloud",
  	"uk.oxa.cloud",
  	"primetel.cloud",
  	"uk.primetel.cloud",
  	"ca.reclaim.cloud",
  	"uk.reclaim.cloud",
  	"us.reclaim.cloud",
  	"ch.trendhosting.cloud",
  	"de.trendhosting.cloud",
  	"jele.club",
  	"amscompute.com",
  	"clicketcloud.com",
  	"dopaas.com",
  	"hidora.com",
  	"paas.hosted-by-previder.com",
  	"rag-cloud.hosteur.com",
  	"rag-cloud-ch.hosteur.com",
  	"jcloud.ik-server.com",
  	"jcloud-ver-jpc.ik-server.com",
  	"demo.jelastic.com",
  	"kilatiron.com",
  	"paas.massivegrid.com",
  	"jed.wafaicloud.com",
  	"lon.wafaicloud.com",
  	"ryd.wafaicloud.com",
  	"j.scaleforce.com.cy",
  	"jelastic.dogado.eu",
  	"fi.cloudplatform.fi",
  	"demo.datacenter.fi",
  	"paas.datacenter.fi",
  	"jele.host",
  	"mircloud.host",
  	"paas.beebyte.io",
  	"sekd1.beebyteapp.io",
  	"jele.io",
  	"cloud-fr1.unispace.io",
  	"jc.neen.it",
  	"cloud.jelastic.open.tim.it",
  	"jcloud.kz",
  	"upaas.kazteleport.kz",
  	"cloudjiffy.net",
  	"fra1-de.cloudjiffy.net",
  	"west1-us.cloudjiffy.net",
  	"jls-sto1.elastx.net",
  	"jls-sto2.elastx.net",
  	"jls-sto3.elastx.net",
  	"faststacks.net",
  	"fr-1.paas.massivegrid.net",
  	"lon-1.paas.massivegrid.net",
  	"lon-2.paas.massivegrid.net",
  	"ny-1.paas.massivegrid.net",
  	"ny-2.paas.massivegrid.net",
  	"sg-1.paas.massivegrid.net",
  	"jelastic.saveincloud.net",
  	"nordeste-idc.saveincloud.net",
  	"j.scaleforce.net",
  	"jelastic.tsukaeru.net",
  	"sdscloud.pl",
  	"unicloud.pl",
  	"mircloud.ru",
  	"jelastic.regruhosting.ru",
  	"enscaled.sg",
  	"jele.site",
  	"jelastic.team",
  	"orangecloud.tn",
  	"j.layershift.co.uk",
  	"phx.enscaled.us",
  	"mircloud.us",
  	"myjino.ru",
  	"*.hosting.myjino.ru",
  	"*.landing.myjino.ru",
  	"*.spectrum.myjino.ru",
  	"*.vps.myjino.ru",
  	"jotelulu.cloud",
  	"*.triton.zone",
  	"*.cns.joyent.com",
  	"js.org",
  	"kaas.gg",
  	"khplay.nl",
  	"ktistory.com",
  	"kapsi.fi",
  	"keymachine.de",
  	"kinghost.net",
  	"uni5.net",
  	"knightpoint.systems",
  	"koobin.events",
  	"oya.to",
  	"kuleuven.cloud",
  	"ezproxy.kuleuven.be",
  	"co.krd",
  	"edu.krd",
  	"krellian.net",
  	"webthings.io",
  	"git-repos.de",
  	"lcube-server.de",
  	"svn-repos.de",
  	"leadpages.co",
  	"lpages.co",
  	"lpusercontent.com",
  	"lelux.site",
  	"co.business",
  	"co.education",
  	"co.events",
  	"co.financial",
  	"co.network",
  	"co.place",
  	"co.technology",
  	"app.lmpm.com",
  	"linkyard.cloud",
  	"linkyard-cloud.ch",
  	"members.linode.com",
  	"*.nodebalancer.linode.com",
  	"*.linodeobjects.com",
  	"ip.linodeusercontent.com",
  	"we.bs",
  	"*.user.localcert.dev",
  	"localzone.xyz",
  	"loginline.app",
  	"loginline.dev",
  	"loginline.io",
  	"loginline.services",
  	"loginline.site",
  	"servers.run",
  	"lohmus.me",
  	"krasnik.pl",
  	"leczna.pl",
  	"lubartow.pl",
  	"lublin.pl",
  	"poniatowa.pl",
  	"swidnik.pl",
  	"glug.org.uk",
  	"lug.org.uk",
  	"lugs.org.uk",
  	"barsy.bg",
  	"barsy.co.uk",
  	"barsyonline.co.uk",
  	"barsycenter.com",
  	"barsyonline.com",
  	"barsy.club",
  	"barsy.de",
  	"barsy.eu",
  	"barsy.in",
  	"barsy.info",
  	"barsy.io",
  	"barsy.me",
  	"barsy.menu",
  	"barsy.mobi",
  	"barsy.net",
  	"barsy.online",
  	"barsy.org",
  	"barsy.pro",
  	"barsy.pub",
  	"barsy.ro",
  	"barsy.shop",
  	"barsy.site",
  	"barsy.support",
  	"barsy.uk",
  	"*.magentosite.cloud",
  	"mayfirst.info",
  	"mayfirst.org",
  	"hb.cldmail.ru",
  	"cn.vu",
  	"mazeplay.com",
  	"mcpe.me",
  	"mcdir.me",
  	"mcdir.ru",
  	"mcpre.ru",
  	"vps.mcdir.ru",
  	"mediatech.by",
  	"mediatech.dev",
  	"hra.health",
  	"miniserver.com",
  	"memset.net",
  	"messerli.app",
  	"*.cloud.metacentrum.cz",
  	"custom.metacentrum.cz",
  	"flt.cloud.muni.cz",
  	"usr.cloud.muni.cz",
  	"meteorapp.com",
  	"eu.meteorapp.com",
  	"co.pl",
  	"*.azurecontainer.io",
  	"azurewebsites.net",
  	"azure-mobile.net",
  	"cloudapp.net",
  	"azurestaticapps.net",
  	"1.azurestaticapps.net",
  	"centralus.azurestaticapps.net",
  	"eastasia.azurestaticapps.net",
  	"eastus2.azurestaticapps.net",
  	"westeurope.azurestaticapps.net",
  	"westus2.azurestaticapps.net",
  	"csx.cc",
  	"mintere.site",
  	"forte.id",
  	"mozilla-iot.org",
  	"bmoattachments.org",
  	"net.ru",
  	"org.ru",
  	"pp.ru",
  	"hostedpi.com",
  	"customer.mythic-beasts.com",
  	"caracal.mythic-beasts.com",
  	"fentiger.mythic-beasts.com",
  	"lynx.mythic-beasts.com",
  	"ocelot.mythic-beasts.com",
  	"oncilla.mythic-beasts.com",
  	"onza.mythic-beasts.com",
  	"sphinx.mythic-beasts.com",
  	"vs.mythic-beasts.com",
  	"x.mythic-beasts.com",
  	"yali.mythic-beasts.com",
  	"cust.retrosnub.co.uk",
  	"ui.nabu.casa",
  	"pony.club",
  	"of.fashion",
  	"in.london",
  	"of.london",
  	"from.marketing",
  	"with.marketing",
  	"for.men",
  	"repair.men",
  	"and.mom",
  	"for.mom",
  	"for.one",
  	"under.one",
  	"for.sale",
  	"that.win",
  	"from.work",
  	"to.work",
  	"cloud.nospamproxy.com",
  	"netlify.app",
  	"4u.com",
  	"ngrok.io",
  	"nh-serv.co.uk",
  	"nfshost.com",
  	"*.developer.app",
  	"noop.app",
  	"*.northflank.app",
  	"*.build.run",
  	"*.code.run",
  	"*.database.run",
  	"*.migration.run",
  	"noticeable.news",
  	"dnsking.ch",
  	"mypi.co",
  	"n4t.co",
  	"001www.com",
  	"ddnslive.com",
  	"myiphost.com",
  	"forumz.info",
  	"16-b.it",
  	"32-b.it",
  	"64-b.it",
  	"soundcast.me",
  	"tcp4.me",
  	"dnsup.net",
  	"hicam.net",
  	"now-dns.net",
  	"ownip.net",
  	"vpndns.net",
  	"dynserv.org",
  	"now-dns.org",
  	"x443.pw",
  	"now-dns.top",
  	"ntdll.top",
  	"freeddns.us",
  	"crafting.xyz",
  	"zapto.xyz",
  	"nsupdate.info",
  	"nerdpol.ovh",
  	"blogsyte.com",
  	"brasilia.me",
  	"cable-modem.org",
  	"ciscofreak.com",
  	"collegefan.org",
  	"couchpotatofries.org",
  	"damnserver.com",
  	"ddns.me",
  	"ditchyourip.com",
  	"dnsfor.me",
  	"dnsiskinky.com",
  	"dvrcam.info",
  	"dynns.com",
  	"eating-organic.net",
  	"fantasyleague.cc",
  	"geekgalaxy.com",
  	"golffan.us",
  	"health-carereform.com",
  	"homesecuritymac.com",
  	"homesecuritypc.com",
  	"hopto.me",
  	"ilovecollege.info",
  	"loginto.me",
  	"mlbfan.org",
  	"mmafan.biz",
  	"myactivedirectory.com",
  	"mydissent.net",
  	"myeffect.net",
  	"mymediapc.net",
  	"mypsx.net",
  	"mysecuritycamera.com",
  	"mysecuritycamera.net",
  	"mysecuritycamera.org",
  	"net-freaks.com",
  	"nflfan.org",
  	"nhlfan.net",
  	"no-ip.ca",
  	"no-ip.co.uk",
  	"no-ip.net",
  	"noip.us",
  	"onthewifi.com",
  	"pgafan.net",
  	"point2this.com",
  	"pointto.us",
  	"privatizehealthinsurance.net",
  	"quicksytes.com",
  	"read-books.org",
  	"securitytactics.com",
  	"serveexchange.com",
  	"servehumour.com",
  	"servep2p.com",
  	"servesarcasm.com",
  	"stufftoread.com",
  	"ufcfan.org",
  	"unusualperson.com",
  	"workisboring.com",
  	"3utilities.com",
  	"bounceme.net",
  	"ddns.net",
  	"ddnsking.com",
  	"gotdns.ch",
  	"hopto.org",
  	"myftp.biz",
  	"myftp.org",
  	"myvnc.com",
  	"no-ip.biz",
  	"no-ip.info",
  	"no-ip.org",
  	"noip.me",
  	"redirectme.net",
  	"servebeer.com",
  	"serveblog.net",
  	"servecounterstrike.com",
  	"serveftp.com",
  	"servegame.com",
  	"servehalflife.com",
  	"servehttp.com",
  	"serveirc.com",
  	"serveminecraft.net",
  	"servemp3.com",
  	"servepics.com",
  	"servequake.com",
  	"sytes.net",
  	"webhop.me",
  	"zapto.org",
  	"stage.nodeart.io",
  	"pcloud.host",
  	"nyc.mn",
  	"static.observableusercontent.com",
  	"cya.gg",
  	"omg.lol",
  	"cloudycluster.net",
  	"omniwe.site",
  	"service.one",
  	"nid.io",
  	"opensocial.site",
  	"opencraft.hosting",
  	"orsites.com",
  	"operaunite.com",
  	"tech.orange",
  	"authgear-staging.com",
  	"authgearapps.com",
  	"skygearapp.com",
  	"outsystemscloud.com",
  	"*.webpaas.ovh.net",
  	"*.hosting.ovh.net",
  	"ownprovider.com",
  	"own.pm",
  	"*.owo.codes",
  	"ox.rs",
  	"oy.lc",
  	"pgfog.com",
  	"pagefrontapp.com",
  	"pagexl.com",
  	"*.paywhirl.com",
  	"bar0.net",
  	"bar1.net",
  	"bar2.net",
  	"rdv.to",
  	"art.pl",
  	"gliwice.pl",
  	"krakow.pl",
  	"poznan.pl",
  	"wroc.pl",
  	"zakopane.pl",
  	"pantheonsite.io",
  	"gotpantheon.com",
  	"mypep.link",
  	"perspecta.cloud",
  	"lk3.ru",
  	"on-web.fr",
  	"bc.platform.sh",
  	"ent.platform.sh",
  	"eu.platform.sh",
  	"us.platform.sh",
  	"*.platformsh.site",
  	"*.tst.site",
  	"platter-app.com",
  	"platter-app.dev",
  	"platterp.us",
  	"pdns.page",
  	"plesk.page",
  	"pleskns.com",
  	"dyn53.io",
  	"onporter.run",
  	"co.bn",
  	"postman-echo.com",
  	"pstmn.io",
  	"mock.pstmn.io",
  	"httpbin.org",
  	"prequalifyme.today",
  	"xen.prgmr.com",
  	"priv.at",
  	"prvcy.page",
  	"*.dweb.link",
  	"protonet.io",
  	"chirurgiens-dentistes-en-france.fr",
  	"byen.site",
  	"pubtls.org",
  	"pythonanywhere.com",
  	"eu.pythonanywhere.com",
  	"qoto.io",
  	"qualifioapp.com",
  	"qbuser.com",
  	"cloudsite.builders",
  	"instances.spawn.cc",
  	"instantcloud.cn",
  	"ras.ru",
  	"qa2.com",
  	"qcx.io",
  	"*.sys.qcx.io",
  	"dev-myqnapcloud.com",
  	"alpha-myqnapcloud.com",
  	"myqnapcloud.com",
  	"*.quipelements.com",
  	"vapor.cloud",
  	"vaporcloud.io",
  	"rackmaze.com",
  	"rackmaze.net",
  	"g.vbrplsbx.io",
  	"*.on-k3s.io",
  	"*.on-rancher.cloud",
  	"*.on-rio.io",
  	"readthedocs.io",
  	"rhcloud.com",
  	"app.render.com",
  	"onrender.com",
  	"repl.co",
  	"id.repl.co",
  	"repl.run",
  	"resindevice.io",
  	"devices.resinstaging.io",
  	"hzc.io",
  	"wellbeingzone.eu",
  	"wellbeingzone.co.uk",
  	"adimo.co.uk",
  	"itcouldbewor.se",
  	"git-pages.rit.edu",
  	"rocky.page",
  	"биз.рус",
  	"ком.рус",
  	"крым.рус",
  	"мир.рус",
  	"мск.рус",
  	"орг.рус",
  	"самара.рус",
  	"сочи.рус",
  	"спб.рус",
  	"я.рус",
  	"*.builder.code.com",
  	"*.dev-builder.code.com",
  	"*.stg-builder.code.com",
  	"sandcats.io",
  	"logoip.de",
  	"logoip.com",
  	"fr-par-1.baremetal.scw.cloud",
  	"fr-par-2.baremetal.scw.cloud",
  	"nl-ams-1.baremetal.scw.cloud",
  	"fnc.fr-par.scw.cloud",
  	"functions.fnc.fr-par.scw.cloud",
  	"k8s.fr-par.scw.cloud",
  	"nodes.k8s.fr-par.scw.cloud",
  	"s3.fr-par.scw.cloud",
  	"s3-website.fr-par.scw.cloud",
  	"whm.fr-par.scw.cloud",
  	"priv.instances.scw.cloud",
  	"pub.instances.scw.cloud",
  	"k8s.scw.cloud",
  	"k8s.nl-ams.scw.cloud",
  	"nodes.k8s.nl-ams.scw.cloud",
  	"s3.nl-ams.scw.cloud",
  	"s3-website.nl-ams.scw.cloud",
  	"whm.nl-ams.scw.cloud",
  	"k8s.pl-waw.scw.cloud",
  	"nodes.k8s.pl-waw.scw.cloud",
  	"s3.pl-waw.scw.cloud",
  	"s3-website.pl-waw.scw.cloud",
  	"scalebook.scw.cloud",
  	"smartlabeling.scw.cloud",
  	"dedibox.fr",
  	"schokokeks.net",
  	"gov.scot",
  	"service.gov.scot",
  	"scrysec.com",
  	"firewall-gateway.com",
  	"firewall-gateway.de",
  	"my-gateway.de",
  	"my-router.de",
  	"spdns.de",
  	"spdns.eu",
  	"firewall-gateway.net",
  	"my-firewall.org",
  	"myfirewall.org",
  	"spdns.org",
  	"seidat.net",
  	"sellfy.store",
  	"senseering.net",
  	"minisite.ms",
  	"magnet.page",
  	"biz.ua",
  	"co.ua",
  	"pp.ua",
  	"shiftcrypto.dev",
  	"shiftcrypto.io",
  	"shiftedit.io",
  	"myshopblocks.com",
  	"myshopify.com",
  	"shopitsite.com",
  	"shopware.store",
  	"mo-siemens.io",
  	"1kapp.com",
  	"appchizi.com",
  	"applinzi.com",
  	"sinaapp.com",
  	"vipsinaapp.com",
  	"siteleaf.net",
  	"bounty-full.com",
  	"alpha.bounty-full.com",
  	"beta.bounty-full.com",
  	"small-web.org",
  	"vp4.me",
  	"try-snowplow.com",
  	"srht.site",
  	"stackhero-network.com",
  	"musician.io",
  	"novecore.site",
  	"static.land",
  	"dev.static.land",
  	"sites.static.land",
  	"storebase.store",
  	"vps-host.net",
  	"atl.jelastic.vps-host.net",
  	"njs.jelastic.vps-host.net",
  	"ric.jelastic.vps-host.net",
  	"playstation-cloud.com",
  	"apps.lair.io",
  	"*.stolos.io",
  	"spacekit.io",
  	"customer.speedpartner.de",
  	"myspreadshop.at",
  	"myspreadshop.com.au",
  	"myspreadshop.be",
  	"myspreadshop.ca",
  	"myspreadshop.ch",
  	"myspreadshop.com",
  	"myspreadshop.de",
  	"myspreadshop.dk",
  	"myspreadshop.es",
  	"myspreadshop.fi",
  	"myspreadshop.fr",
  	"myspreadshop.ie",
  	"myspreadshop.it",
  	"myspreadshop.net",
  	"myspreadshop.nl",
  	"myspreadshop.no",
  	"myspreadshop.pl",
  	"myspreadshop.se",
  	"myspreadshop.co.uk",
  	"api.stdlib.com",
  	"storj.farm",
  	"utwente.io",
  	"soc.srcf.net",
  	"user.srcf.net",
  	"temp-dns.com",
  	"supabase.co",
  	"supabase.in",
  	"supabase.net",
  	"su.paba.se",
  	"*.s5y.io",
  	"*.sensiosite.cloud",
  	"syncloud.it",
  	"dscloud.biz",
  	"direct.quickconnect.cn",
  	"dsmynas.com",
  	"familyds.com",
  	"diskstation.me",
  	"dscloud.me",
  	"i234.me",
  	"myds.me",
  	"synology.me",
  	"dscloud.mobi",
  	"dsmynas.net",
  	"familyds.net",
  	"dsmynas.org",
  	"familyds.org",
  	"vpnplus.to",
  	"direct.quickconnect.to",
  	"tabitorder.co.il",
  	"taifun-dns.de",
  	"beta.tailscale.net",
  	"ts.net",
  	"gda.pl",
  	"gdansk.pl",
  	"gdynia.pl",
  	"med.pl",
  	"sopot.pl",
  	"site.tb-hosting.com",
  	"edugit.io",
  	"s3.teckids.org",
  	"telebit.app",
  	"telebit.io",
  	"*.telebit.xyz",
  	"gwiddle.co.uk",
  	"*.firenet.ch",
  	"*.svc.firenet.ch",
  	"reservd.com",
  	"thingdustdata.com",
  	"cust.dev.thingdust.io",
  	"cust.disrec.thingdust.io",
  	"cust.prod.thingdust.io",
  	"cust.testing.thingdust.io",
  	"reservd.dev.thingdust.io",
  	"reservd.disrec.thingdust.io",
  	"reservd.testing.thingdust.io",
  	"tickets.io",
  	"arvo.network",
  	"azimuth.network",
  	"tlon.network",
  	"torproject.net",
  	"pages.torproject.net",
  	"bloxcms.com",
  	"townnews-staging.com",
  	"tbits.me",
  	"12hp.at",
  	"2ix.at",
  	"4lima.at",
  	"lima-city.at",
  	"12hp.ch",
  	"2ix.ch",
  	"4lima.ch",
  	"lima-city.ch",
  	"trafficplex.cloud",
  	"de.cool",
  	"12hp.de",
  	"2ix.de",
  	"4lima.de",
  	"lima-city.de",
  	"1337.pictures",
  	"clan.rip",
  	"lima-city.rocks",
  	"webspace.rocks",
  	"lima.zone",
  	"*.transurl.be",
  	"*.transurl.eu",
  	"*.transurl.nl",
  	"site.transip.me",
  	"tuxfamily.org",
  	"dd-dns.de",
  	"diskstation.eu",
  	"diskstation.org",
  	"dray-dns.de",
  	"draydns.de",
  	"dyn-vpn.de",
  	"dynvpn.de",
  	"mein-vigor.de",
  	"my-vigor.de",
  	"my-wan.de",
  	"syno-ds.de",
  	"synology-diskstation.de",
  	"synology-ds.de",
  	"typedream.app",
  	"pro.typeform.com",
  	"uber.space",
  	"*.uberspace.de",
  	"hk.com",
  	"hk.org",
  	"ltd.hk",
  	"inc.hk",
  	"name.pm",
  	"sch.tf",
  	"biz.wf",
  	"sch.wf",
  	"org.yt",
  	"virtualuser.de",
  	"virtual-user.de",
  	"upli.io",
  	"urown.cloud",
  	"dnsupdate.info",
  	"lib.de.us",
  	"2038.io",
  	"vercel.app",
  	"vercel.dev",
  	"now.sh",
  	"router.management",
  	"v-info.info",
  	"voorloper.cloud",
  	"neko.am",
  	"nyaa.am",
  	"be.ax",
  	"cat.ax",
  	"es.ax",
  	"eu.ax",
  	"gg.ax",
  	"mc.ax",
  	"us.ax",
  	"xy.ax",
  	"nl.ci",
  	"xx.gl",
  	"app.gp",
  	"blog.gt",
  	"de.gt",
  	"to.gt",
  	"be.gy",
  	"cc.hn",
  	"blog.kg",
  	"io.kg",
  	"jp.kg",
  	"tv.kg",
  	"uk.kg",
  	"us.kg",
  	"de.ls",
  	"at.md",
  	"de.md",
  	"jp.md",
  	"to.md",
  	"indie.porn",
  	"vxl.sh",
  	"ch.tc",
  	"me.tc",
  	"we.tc",
  	"nyan.to",
  	"at.vg",
  	"blog.vu",
  	"dev.vu",
  	"me.vu",
  	"v.ua",
  	"*.vultrobjects.com",
  	"wafflecell.com",
  	"*.webhare.dev",
  	"reserve-online.net",
  	"reserve-online.com",
  	"bookonline.app",
  	"hotelwithflight.com",
  	"wedeploy.io",
  	"wedeploy.me",
  	"wedeploy.sh",
  	"remotewd.com",
  	"pages.wiardweb.com",
  	"wmflabs.org",
  	"toolforge.org",
  	"wmcloud.org",
  	"panel.gg",
  	"daemon.panel.gg",
  	"messwithdns.com",
  	"woltlab-demo.com",
  	"myforum.community",
  	"community-pro.de",
  	"diskussionsbereich.de",
  	"community-pro.net",
  	"meinforum.net",
  	"affinitylottery.org.uk",
  	"raffleentry.org.uk",
  	"weeklylottery.org.uk",
  	"wpenginepowered.com",
  	"js.wpenginepowered.com",
  	"wixsite.com",
  	"editorx.io",
  	"half.host",
  	"xnbay.com",
  	"u2.xnbay.com",
  	"u2-local.xnbay.com",
  	"cistron.nl",
  	"demon.nl",
  	"xs4all.space",
  	"yandexcloud.net",
  	"storage.yandexcloud.net",
  	"website.yandexcloud.net",
  	"official.academy",
  	"yolasite.com",
  	"ybo.faith",
  	"yombo.me",
  	"homelink.one",
  	"ybo.party",
  	"ybo.review",
  	"ybo.science",
  	"ybo.trade",
  	"ynh.fr",
  	"nohost.me",
  	"noho.st",
  	"za.net",
  	"za.org",
  	"bss.design",
  	"basicserver.io",
  	"virtualserver.io",
  	"enterprisecloud.nu"
  ];

  var psl = createCommonjsModule(function (module, exports) {

    var internals = {};

    //
    // Read rules from file.
    //
    internals.rules = require$$0.map(function (rule) {
      return {
        rule: rule,
        suffix: rule.replace(/^(\*\.|\!)/, ''),
        punySuffix: -1,
        wildcard: rule.charAt(0) === '*',
        exception: rule.charAt(0) === '!'
      };
    });

    //
    // Check is given string ends with `suffix`.
    //
    internals.endsWith = function (str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    //
    // Find rule for a given domain.
    //
    internals.findRule = function (domain) {
      var punyDomain = Punycode__default["default"].toASCII(domain);
      return internals.rules.reduce(function (memo, rule) {
        if (rule.punySuffix === -1) {
          rule.punySuffix = Punycode__default["default"].toASCII(rule.suffix);
        }
        if (!internals.endsWith(punyDomain, '.' + rule.punySuffix) && punyDomain !== rule.punySuffix) {
          return memo;
        }
        // This has been commented out as it never seems to run. This is because
        // sub tlds always appear after their parents and we never find a shorter
        // match.
        //if (memo) {
        //  var memoSuffix = Punycode.toASCII(memo.suffix);
        //  if (memoSuffix.length >= punySuffix.length) {
        //    return memo;
        //  }
        //}
        return rule;
      }, null);
    };

    //
    // Error codes and messages.
    //
    exports.errorCodes = {
      DOMAIN_TOO_SHORT: 'Domain name too short.',
      DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
      LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
      LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
      LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
      LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
      LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
    };

    //
    // Validate domain name and throw if not valid.
    //
    // From wikipedia:
    //
    // Hostnames are composed of series of labels concatenated with dots, as are all
    // domain names. Each label must be between 1 and 63 characters long, and the
    // entire hostname (including the delimiting dots) has a maximum of 255 chars.
    //
    // Allowed chars:
    //
    // * `a-z`
    // * `0-9`
    // * `-` but not as a starting or ending character
    // * `.` as a separator for the textual portions of a domain name
    //
    // * http://en.wikipedia.org/wiki/Domain_name
    // * http://en.wikipedia.org/wiki/Hostname
    //
    internals.validate = function (input) {
      // Before we can validate we need to take care of IDNs with unicode chars.
      var ascii = Punycode__default["default"].toASCII(input);
      if (ascii.length < 1) {
        return 'DOMAIN_TOO_SHORT';
      }
      if (ascii.length > 255) {
        return 'DOMAIN_TOO_LONG';
      }

      // Check each part's length and allowed chars.
      var labels = ascii.split('.');
      var label;
      for (var i = 0; i < labels.length; ++i) {
        label = labels[i];
        if (!label.length) {
          return 'LABEL_TOO_SHORT';
        }
        if (label.length > 63) {
          return 'LABEL_TOO_LONG';
        }
        if (label.charAt(0) === '-') {
          return 'LABEL_STARTS_WITH_DASH';
        }
        if (label.charAt(label.length - 1) === '-') {
          return 'LABEL_ENDS_WITH_DASH';
        }
        if (!/^[a-z0-9\-]+$/.test(label)) {
          return 'LABEL_INVALID_CHARS';
        }
      }
    };

    //
    // Public API
    //

    //
    // Parse domain.
    //
    exports.parse = function (input) {
      if (typeof input !== 'string') {
        throw new TypeError('Domain name must be a string.');
      }

      // Force domain to lowercase.
      var domain = input.slice(0).toLowerCase();

      // Handle FQDN.
      // TODO: Simply remove trailing dot?
      if (domain.charAt(domain.length - 1) === '.') {
        domain = domain.slice(0, domain.length - 1);
      }

      // Validate and sanitise input.
      var error = internals.validate(domain);
      if (error) {
        return {
          input: input,
          error: {
            message: exports.errorCodes[error],
            code: error
          }
        };
      }
      var parsed = {
        input: input,
        tld: null,
        sld: null,
        domain: null,
        subdomain: null,
        listed: false
      };
      var domainParts = domain.split('.');

      // Non-Internet TLD
      if (domainParts[domainParts.length - 1] === 'local') {
        return parsed;
      }
      var handlePunycode = function handlePunycode() {
        if (!/xn--/.test(domain)) {
          return parsed;
        }
        if (parsed.domain) {
          parsed.domain = Punycode__default["default"].toASCII(parsed.domain);
        }
        if (parsed.subdomain) {
          parsed.subdomain = Punycode__default["default"].toASCII(parsed.subdomain);
        }
        return parsed;
      };
      var rule = internals.findRule(domain);

      // Unlisted tld.
      if (!rule) {
        if (domainParts.length < 2) {
          return parsed;
        }
        parsed.tld = domainParts.pop();
        parsed.sld = domainParts.pop();
        parsed.domain = [parsed.sld, parsed.tld].join('.');
        if (domainParts.length) {
          parsed.subdomain = domainParts.pop();
        }
        return handlePunycode();
      }

      // At this point we know the public suffix is listed.
      parsed.listed = true;
      var tldParts = rule.suffix.split('.');
      var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);
      if (rule.exception) {
        privateParts.push(tldParts.shift());
      }
      parsed.tld = tldParts.join('.');
      if (!privateParts.length) {
        return handlePunycode();
      }
      if (rule.wildcard) {
        tldParts.unshift(privateParts.pop());
        parsed.tld = tldParts.join('.');
      }
      if (!privateParts.length) {
        return handlePunycode();
      }
      parsed.sld = privateParts.pop();
      parsed.domain = [parsed.sld, parsed.tld].join('.');
      if (privateParts.length) {
        parsed.subdomain = privateParts.join('.');
      }
      return handlePunycode();
    };

    //
    // Get domain.
    //
    exports.get = function (domain) {
      if (!domain) {
        return null;
      }
      return exports.parse(domain).domain || null;
    };

    //
    // Check whether domain belongs to a known public suffix.
    //
    exports.isValid = function (domain) {
      var parsed = exports.parse(domain);
      return Boolean(parsed.domain && parsed.listed);
    };
  });

  // RFC 6761
  var SPECIAL_USE_DOMAINS = ["local", "example", "invalid", "localhost", "test"];
  var SPECIAL_TREATMENT_DOMAINS = ["localhost", "invalid"];
  function getPublicSuffix(domain) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var domainParts = domain.split(".");
    var topLevelDomain = domainParts[domainParts.length - 1];
    var allowSpecialUseDomain = !!options.allowSpecialUseDomain;
    var ignoreError = !!options.ignoreError;
    if (allowSpecialUseDomain && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
      if (domainParts.length > 1) {
        var secondLevelDomain = domainParts[domainParts.length - 2];
        // In aforementioned example, the eTLD/pubSuf will be apple.localhost
        return "".concat(secondLevelDomain, ".").concat(topLevelDomain);
      } else if (SPECIAL_TREATMENT_DOMAINS.includes(topLevelDomain)) {
        // For a single word special use domain, e.g. 'localhost' or 'invalid', per RFC 6761,
        // "Application software MAY recognize {localhost/invalid} names as special, or
        // MAY pass them to name resolution APIs as they would for other domain names."
        return "".concat(topLevelDomain);
      }
    }
    if (!ignoreError && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
      throw new Error("Cookie has domain set to the public suffix \"".concat(topLevelDomain, "\" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}."));
    }
    return psl.get(domain);
  }
  var getPublicSuffix_1 = getPublicSuffix;
  var pubsuffixPsl = {
    getPublicSuffix: getPublicSuffix_1
  };

  /*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   */
  var Store$2 = /*#__PURE__*/function () {
    function Store() {
      _classCallCheck(this, Store);
      this.synchronous = false;
    }
    _createClass(Store, [{
      key: "findCookie",
      value: function findCookie(domain, path, key, cb) {
        throw new Error("findCookie is not implemented");
      }
    }, {
      key: "findCookies",
      value: function findCookies(domain, path, allowSpecialUseDomain, cb) {
        throw new Error("findCookies is not implemented");
      }
    }, {
      key: "putCookie",
      value: function putCookie(cookie, cb) {
        throw new Error("putCookie is not implemented");
      }
    }, {
      key: "updateCookie",
      value: function updateCookie(oldCookie, newCookie, cb) {
        // recommended default implementation:
        // return this.putCookie(newCookie, cb);
        throw new Error("updateCookie is not implemented");
      }
    }, {
      key: "removeCookie",
      value: function removeCookie(domain, path, key, cb) {
        throw new Error("removeCookie is not implemented");
      }
    }, {
      key: "removeCookies",
      value: function removeCookies(domain, path, cb) {
        throw new Error("removeCookies is not implemented");
      }
    }, {
      key: "removeAllCookies",
      value: function removeAllCookies(cb) {
        throw new Error("removeAllCookies is not implemented");
      }
    }, {
      key: "getAllCookies",
      value: function getAllCookies(cb) {
        throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
      }
    }]);
    return Store;
  }();
  var Store_1 = Store$2;
  var store = {
    Store: Store_1
  };

  var fromCallback$2 = function fromCallback(fn) {
    return Object.defineProperty(function () {
      var _arguments = arguments,
        _this = this;
      if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments);else {
        return new Promise(function (resolve, reject) {
          _arguments[_arguments.length] = function (err, res) {
            if (err) return reject(err);
            resolve(res);
          };
          _arguments.length++;
          fn.apply(_this, _arguments);
        });
      }
    }, 'name', {
      value: fn.name
    });
  };
  var fromPromise = function fromPromise(fn) {
    return Object.defineProperty(function () {
      var cb = arguments[arguments.length - 1];
      if (typeof cb !== 'function') return fn.apply(this, arguments);else {
        delete arguments[arguments.length - 1];
        arguments.length--;
        fn.apply(this, arguments).then(function (r) {
          return cb(null, r);
        }, cb);
      }
    }, 'name', {
      value: fn.name
    });
  };
  var universalify = {
    fromCallback: fromCallback$2,
    fromPromise: fromPromise
  };

  // Gives the permutation of all possible domainMatch()es of a given domain. The
  // array is in shortest-to-longest order.  Handy for indexing.

  function permuteDomain$1(domain, allowSpecialUseDomain) {
    var pubSuf = pubsuffixPsl.getPublicSuffix(domain, {
      allowSpecialUseDomain: allowSpecialUseDomain
    });
    if (!pubSuf) {
      return null;
    }
    if (pubSuf == domain) {
      return [domain];
    }

    // Nuke trailing dot
    if (domain.slice(-1) == ".") {
      domain = domain.slice(0, -1);
    }
    var prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"
    var parts = prefix.split(".").reverse();
    var cur = pubSuf;
    var permutations = [cur];
    while (parts.length) {
      cur = "".concat(parts.shift(), ".").concat(cur);
      permutations.push(cur);
    }
    return permutations;
  }
  var permuteDomain_2 = permuteDomain$1;
  var permuteDomain_1 = {
    permuteDomain: permuteDomain_2
  };

  /*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   */

  /*
   * "A request-path path-matches a given cookie-path if at least one of the
   * following conditions holds:"
   */
  function pathMatch$2(reqPath, cookiePath) {
    // "o  The cookie-path and the request-path are identical."
    if (cookiePath === reqPath) {
      return true;
    }
    var idx = reqPath.indexOf(cookiePath);
    if (idx === 0) {
      // "o  The cookie-path is a prefix of the request-path, and the last
      // character of the cookie-path is %x2F ("/")."
      if (cookiePath.substr(-1) === "/") {
        return true;
      }

      // " o  The cookie-path is a prefix of the request-path, and the first
      // character of the request-path that is not included in the cookie- path
      // is a %x2F ("/") character."
      if (reqPath.substr(cookiePath.length, 1) === "/") {
        return true;
      }
    }
    return false;
  }
  var pathMatch_2 = pathMatch$2;
  var pathMatch_1 = {
    pathMatch: pathMatch_2
  };

  function requireUtil() {
    try {
      // eslint-disable-next-line no-restricted-modules
      return require$$0__default["default"];
    } catch (e) {
      return null;
    }
  }

  // for v10.12.0+
  function lookupCustomInspectSymbol() {
    return Symbol["for"]("nodejs.util.inspect.custom");
  }

  // for older node environments
  function tryReadingCustomSymbolFromUtilInspect(options) {
    var _requireUtil = options.requireUtil || requireUtil;
    var util = _requireUtil();
    return util ? util.inspect.custom : null;
  }
  var getUtilInspect$1 = function getUtilInspect(fallback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _requireUtil = options.requireUtil || requireUtil;
    var util = _requireUtil();
    return function inspect(value, showHidden, depth) {
      return util ? util.inspect(value, showHidden, depth) : fallback(value);
    };
  };
  var getCustomInspectSymbol$2 = function getCustomInspectSymbol() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _lookupCustomInspectSymbol = options.lookupCustomInspectSymbol || lookupCustomInspectSymbol;

    // get custom inspect symbol for node environments
    return _lookupCustomInspectSymbol() || tryReadingCustomSymbolFromUtilInspect(options);
  };
  var utilHelper = {
    getUtilInspect: getUtilInspect$1,
    getCustomInspectSymbol: getCustomInspectSymbol$2
  };

  var fromCallback$1 = universalify.fromCallback;
  var Store$1 = store.Store;
  var permuteDomain = permuteDomain_1.permuteDomain;
  var pathMatch$1 = pathMatch_1.pathMatch;
  var getCustomInspectSymbol$1 = utilHelper.getCustomInspectSymbol,
    getUtilInspect = utilHelper.getUtilInspect;
  var MemoryCookieStore$1 = /*#__PURE__*/function (_Store) {
    _inherits(MemoryCookieStore, _Store);
    var _super = _createSuper(MemoryCookieStore);
    function MemoryCookieStore() {
      var _this;
      _classCallCheck(this, MemoryCookieStore);
      _this = _super.call(this);
      _this.synchronous = true;
      _this.idx = Object.create(null);
      var customInspectSymbol = getCustomInspectSymbol$1();
      if (customInspectSymbol) {
        _this[customInspectSymbol] = _this.inspect;
      }
      return _this;
    }
    _createClass(MemoryCookieStore, [{
      key: "inspect",
      value: function inspect() {
        var util = {
          inspect: getUtilInspect(inspectFallback)
        };
        return "{ idx: ".concat(util.inspect(this.idx, false, 2), " }");
      }
    }, {
      key: "findCookie",
      value: function findCookie(domain, path, key, cb) {
        if (!this.idx[domain]) {
          return cb(null, undefined);
        }
        if (!this.idx[domain][path]) {
          return cb(null, undefined);
        }
        return cb(null, this.idx[domain][path][key] || null);
      }
    }, {
      key: "findCookies",
      value: function findCookies(domain, path, allowSpecialUseDomain, cb) {
        var results = [];
        if (typeof allowSpecialUseDomain === "function") {
          cb = allowSpecialUseDomain;
          allowSpecialUseDomain = true;
        }
        if (!domain) {
          return cb(null, []);
        }
        var pathMatcher;
        if (!path) {
          // null means "all paths"
          pathMatcher = function matchAll(domainIndex) {
            for (var curPath in domainIndex) {
              var pathIndex = domainIndex[curPath];
              for (var key in pathIndex) {
                results.push(pathIndex[key]);
              }
            }
          };
        } else {
          pathMatcher = function matchRFC(domainIndex) {
            //NOTE: we should use path-match algorithm from S5.1.4 here
            //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
            Object.keys(domainIndex).forEach(function (cookiePath) {
              if (pathMatch$1(path, cookiePath)) {
                var pathIndex = domainIndex[cookiePath];
                for (var key in pathIndex) {
                  results.push(pathIndex[key]);
                }
              }
            });
          };
        }
        var domains = permuteDomain(domain, allowSpecialUseDomain) || [domain];
        var idx = this.idx;
        domains.forEach(function (curDomain) {
          var domainIndex = idx[curDomain];
          if (!domainIndex) {
            return;
          }
          pathMatcher(domainIndex);
        });
        cb(null, results);
      }
    }, {
      key: "putCookie",
      value: function putCookie(cookie, cb) {
        if (!this.idx[cookie.domain]) {
          this.idx[cookie.domain] = Object.create(null);
        }
        if (!this.idx[cookie.domain][cookie.path]) {
          this.idx[cookie.domain][cookie.path] = Object.create(null);
        }
        this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
        cb(null);
      }
    }, {
      key: "updateCookie",
      value: function updateCookie(oldCookie, newCookie, cb) {
        // updateCookie() may avoid updating cookies that are identical.  For example,
        // lastAccessed may not be important to some stores and an equality
        // comparison could exclude that field.
        this.putCookie(newCookie, cb);
      }
    }, {
      key: "removeCookie",
      value: function removeCookie(domain, path, key, cb) {
        if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) {
          delete this.idx[domain][path][key];
        }
        cb(null);
      }
    }, {
      key: "removeCookies",
      value: function removeCookies(domain, path, cb) {
        if (this.idx[domain]) {
          if (path) {
            delete this.idx[domain][path];
          } else {
            delete this.idx[domain];
          }
        }
        return cb(null);
      }
    }, {
      key: "removeAllCookies",
      value: function removeAllCookies(cb) {
        this.idx = Object.create(null);
        return cb(null);
      }
    }, {
      key: "getAllCookies",
      value: function getAllCookies(cb) {
        var cookies = [];
        var idx = this.idx;
        var domains = Object.keys(idx);
        domains.forEach(function (domain) {
          var paths = Object.keys(idx[domain]);
          paths.forEach(function (path) {
            var keys = Object.keys(idx[domain][path]);
            keys.forEach(function (key) {
              if (key !== null) {
                cookies.push(idx[domain][path][key]);
              }
            });
          });
        });

        // Sort by creationIndex so deserializing retains the creation order.
        // When implementing your own store, this SHOULD retain the order too
        cookies.sort(function (a, b) {
          return (a.creationIndex || 0) - (b.creationIndex || 0);
        });
        cb(null, cookies);
      }
    }]);
    return MemoryCookieStore;
  }(Store$1);
  ["findCookie", "findCookies", "putCookie", "updateCookie", "removeCookie", "removeCookies", "removeAllCookies", "getAllCookies"].forEach(function (name) {
    MemoryCookieStore$1.prototype[name] = fromCallback$1(MemoryCookieStore$1.prototype[name]);
  });
  var MemoryCookieStore_1 = MemoryCookieStore$1;
  function inspectFallback(val) {
    var domains = Object.keys(val);
    if (domains.length === 0) {
      return "[Object: null prototype] {}";
    }
    var result = "[Object: null prototype] {\n";
    Object.keys(val).forEach(function (domain, i) {
      result += formatDomain(domain, val[domain]);
      if (i < domains.length - 1) {
        result += ",";
      }
      result += "\n";
    });
    result += "}";
    return result;
  }
  function formatDomain(domainName, domainValue) {
    var indent = "  ";
    var result = "".concat(indent, "'").concat(domainName, "': [Object: null prototype] {\n");
    Object.keys(domainValue).forEach(function (path, i, paths) {
      result += formatPath(path, domainValue[path]);
      if (i < paths.length - 1) {
        result += ",";
      }
      result += "\n";
    });
    result += "".concat(indent, "}");
    return result;
  }
  function formatPath(pathName, pathValue) {
    var indent = "    ";
    var result = "".concat(indent, "'").concat(pathName, "': [Object: null prototype] {\n");
    Object.keys(pathValue).forEach(function (cookieName, i, cookieNames) {
      var cookie = pathValue[cookieName];
      result += "      ".concat(cookieName, ": ").concat(cookie.inspect());
      if (i < cookieNames.length - 1) {
        result += ",";
      }
      result += "\n";
    });
    result += "".concat(indent, "}");
    return result;
  }
  var inspectFallback_1 = inspectFallback;
  var memstore = {
    MemoryCookieStore: MemoryCookieStore_1,
    inspectFallback: inspectFallback_1
  };

  /* ************************************************************************************
  Extracted from check-types.js
  https://gitlab.com/philbooth/check-types.js

  MIT License

  Copyright (c) 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019 Phil Booth

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  ************************************************************************************ */
  function isFunction(data) {
    return typeof data === "function";
  }
  function isNonEmptyString(data) {
    return isString(data) && data !== "";
  }
  function isDate(data) {
    return isInstanceStrict(data, Date) && isInteger(data.getTime());
  }
  function isEmptyString(data) {
    return data === "" || data instanceof String && data.toString() === "";
  }
  function isString(data) {
    return typeof data === "string" || data instanceof String;
  }
  function isObject$1(data) {
    return toString.call(data) === "[object Object]";
  }
  function isInstanceStrict(data, prototype) {
    try {
      return data instanceof prototype;
    } catch (error) {
      return false;
    }
  }
  function isInteger(data) {
    return typeof data === "number" && data % 1 === 0;
  }
  /* End validation functions */

  function validate(bool, cb, options) {
    if (!isFunction(cb)) {
      options = cb;
      cb = null;
    }
    if (!isObject$1(options)) options = {
      Error: "Failed Check"
    };
    if (!bool) {
      if (cb) {
        cb(new ParameterError(options));
      } else {
        throw new ParameterError(options);
      }
    }
  }
  var ParameterError = /*#__PURE__*/function (_Error) {
    _inherits(ParameterError, _Error);
    var _super = _createSuper(ParameterError);
    function ParameterError() {
      _classCallCheck(this, ParameterError);
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      return _super.call.apply(_super, [this].concat(params));
    }
    return _createClass(ParameterError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var ParameterError_1 = ParameterError;
  var isFunction_1 = isFunction;
  var isNonEmptyString_1 = isNonEmptyString;
  var isDate_1 = isDate;
  var isEmptyString_1 = isEmptyString;
  var isString_1 = isString;
  var isObject_1 = isObject$1;
  var validate_1 = validate;
  var validators = {
    ParameterError: ParameterError_1,
    isFunction: isFunction_1,
    isNonEmptyString: isNonEmptyString_1,
    isDate: isDate_1,
    isEmptyString: isEmptyString_1,
    isString: isString_1,
    isObject: isObject_1,
    validate: validate_1
  };

  // generated by genversion
  var version = '4.1.3';

  var punycode = /*@__PURE__*/getAugmentedNamespace(punycode_es6);

  var Store = store.Store;
  var MemoryCookieStore = memstore.MemoryCookieStore;
  var pathMatch = pathMatch_1.pathMatch;
  var fromCallback = universalify.fromCallback;
  var getCustomInspectSymbol = utilHelper.getCustomInspectSymbol;

  // From RFC6265 S4.1.1
  // note that it excludes \x3B ";"
  var COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
  var CONTROL_CHARS = /[\x00-\x1F]/;

  // From Chromium // '\r', '\n' and '\0' should be treated as a terminator in
  // the "relaxed" mode, see:
  // https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60
  var TERMINATORS = ["\n", "\r", "\0"];

  // RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
  // Note ';' is \x3B
  var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;

  // date-time parsing constants (RFC6265 S5.1.1)

  var DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
  var MONTH_TO_NUM = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };
  var MAX_TIME = 2147483647000; // 31-bit max
  var MIN_TIME = 0; // 31-bit min
  var SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
  function checkSameSiteContext(value) {
    validators.validate(validators.isNonEmptyString(value), value);
    var context = String(value).toLowerCase();
    if (context === "none" || context === "lax" || context === "strict") {
      return context;
    } else {
      return null;
    }
  }
  var PrefixSecurityEnum = Object.freeze({
    SILENT: "silent",
    STRICT: "strict",
    DISABLED: "unsafe-disabled"
  });

  // Dumped from ip-regex@4.0.0, with the following changes:
  // * all capturing groups converted to non-capturing -- "(?:)"
  // * support for IPv6 Scoped Literal ("%eth1") removed
  // * lowercase hexadecimal only
  var IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
  var IP_V6_REGEX = "\n\\[?(?:\n(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|\n(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|\n(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|\n(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|\n(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))\n)(?:%[0-9a-zA-Z]{1,})?\\]?\n".replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var IP_V6_REGEX_OBJECT = new RegExp("^".concat(IP_V6_REGEX, "$"));

  /*
   * Parses a Natural number (i.e., non-negative integer) with either the
   *    <min>*<max>DIGIT ( non-digit *OCTET )
   * or
   *    <min>*<max>DIGIT
   * grammar (RFC6265 S5.1.1).
   *
   * The "trailingOK" boolean controls if the grammar accepts a
   * "( non-digit *OCTET )" trailer.
   */
  function parseDigits(token, minDigits, maxDigits, trailingOK) {
    var count = 0;
    while (count < token.length) {
      var c = token.charCodeAt(count);
      // "non-digit = %x00-2F / %x3A-FF"
      if (c <= 0x2f || c >= 0x3a) {
        break;
      }
      count++;
    }

    // constrain to a minimum and maximum number of digits.
    if (count < minDigits || count > maxDigits) {
      return null;
    }
    if (!trailingOK && count != token.length) {
      return null;
    }
    return parseInt(token.substr(0, count), 10);
  }
  function parseTime(token) {
    var parts = token.split(":");
    var result = [0, 0, 0];

    /* RF6256 S5.1.1:
     *      time            = hms-time ( non-digit *OCTET )
     *      hms-time        = time-field ":" time-field ":" time-field
     *      time-field      = 1*2DIGIT
     */

    if (parts.length !== 3) {
      return null;
    }
    for (var i = 0; i < 3; i++) {
      // "time-field" must be strictly "1*2DIGIT", HOWEVER, "hms-time" can be
      // followed by "( non-digit *OCTET )" so therefore the last time-field can
      // have a trailer
      var trailingOK = i == 2;
      var num = parseDigits(parts[i], 1, 2, trailingOK);
      if (num === null) {
        return null;
      }
      result[i] = num;
    }
    return result;
  }
  function parseMonth(token) {
    token = String(token).substr(0, 3).toLowerCase();
    var num = MONTH_TO_NUM[token];
    return num >= 0 ? num : null;
  }

  /*
   * RFC6265 S5.1.1 date parser (see RFC for full grammar)
   */
  function parseDate(str) {
    if (!str) {
      return;
    }

    /* RFC6265 S5.1.1:
     * 2. Process each date-token sequentially in the order the date-tokens
     * appear in the cookie-date
     */
    var tokens = str.split(DATE_DELIM);
    if (!tokens) {
      return;
    }
    var hour = null;
    var minute = null;
    var second = null;
    var dayOfMonth = null;
    var month = null;
    var year = null;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i].trim();
      if (!token.length) {
        continue;
      }
      var result = void 0;

      /* 2.1. If the found-time flag is not set and the token matches the time
       * production, set the found-time flag and set the hour- value,
       * minute-value, and second-value to the numbers denoted by the digits in
       * the date-token, respectively.  Skip the remaining sub-steps and continue
       * to the next date-token.
       */
      if (second === null) {
        result = parseTime(token);
        if (result) {
          hour = result[0];
          minute = result[1];
          second = result[2];
          continue;
        }
      }

      /* 2.2. If the found-day-of-month flag is not set and the date-token matches
       * the day-of-month production, set the found-day-of- month flag and set
       * the day-of-month-value to the number denoted by the date-token.  Skip
       * the remaining sub-steps and continue to the next date-token.
       */
      if (dayOfMonth === null) {
        // "day-of-month = 1*2DIGIT ( non-digit *OCTET )"
        result = parseDigits(token, 1, 2, true);
        if (result !== null) {
          dayOfMonth = result;
          continue;
        }
      }

      /* 2.3. If the found-month flag is not set and the date-token matches the
       * month production, set the found-month flag and set the month-value to
       * the month denoted by the date-token.  Skip the remaining sub-steps and
       * continue to the next date-token.
       */
      if (month === null) {
        result = parseMonth(token);
        if (result !== null) {
          month = result;
          continue;
        }
      }

      /* 2.4. If the found-year flag is not set and the date-token matches the
       * year production, set the found-year flag and set the year-value to the
       * number denoted by the date-token.  Skip the remaining sub-steps and
       * continue to the next date-token.
       */
      if (year === null) {
        // "year = 2*4DIGIT ( non-digit *OCTET )"
        result = parseDigits(token, 2, 4, true);
        if (result !== null) {
          year = result;
          /* From S5.1.1:
           * 3.  If the year-value is greater than or equal to 70 and less
           * than or equal to 99, increment the year-value by 1900.
           * 4.  If the year-value is greater than or equal to 0 and less
           * than or equal to 69, increment the year-value by 2000.
           */
          if (year >= 70 && year <= 99) {
            year += 1900;
          } else if (year >= 0 && year <= 69) {
            year += 2000;
          }
        }
      }
    }

    /* RFC 6265 S5.1.1
     * "5. Abort these steps and fail to parse the cookie-date if:
     *     *  at least one of the found-day-of-month, found-month, found-
     *        year, or found-time flags is not set,
     *     *  the day-of-month-value is less than 1 or greater than 31,
     *     *  the year-value is less than 1601,
     *     *  the hour-value is greater than 23,
     *     *  the minute-value is greater than 59, or
     *     *  the second-value is greater than 59.
     *     (Note that leap seconds cannot be represented in this syntax.)"
     *
     * So, in order as above:
     */
    if (dayOfMonth === null || month === null || year === null || second === null || dayOfMonth < 1 || dayOfMonth > 31 || year < 1601 || hour > 23 || minute > 59 || second > 59) {
      return;
    }
    return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
  }
  function formatDate(date) {
    validators.validate(validators.isDate(date), date);
    return date.toUTCString();
  }

  // S5.1.2 Canonicalized Host Names
  function canonicalDomain(str) {
    if (str == null) {
      return null;
    }
    str = str.trim().replace(/^\./, ""); // S4.1.2.3 & S5.2.3: ignore leading .

    if (IP_V6_REGEX_OBJECT.test(str)) {
      str = str.replace("[", "").replace("]", "");
    }

    // convert to IDN if any non-ASCII characters
    if (punycode && /[^\u0001-\u007f]/.test(str)) {
      str = punycode.toASCII(str);
    }
    return str.toLowerCase();
  }

  // S5.1.3 Domain Matching
  function domainMatch(str, domStr, canonicalize) {
    if (str == null || domStr == null) {
      return null;
    }
    if (canonicalize !== false) {
      str = canonicalDomain(str);
      domStr = canonicalDomain(domStr);
    }

    /*
     * S5.1.3:
     * "A string domain-matches a given domain string if at least one of the
     * following conditions hold:"
     *
     * " o The domain string and the string are identical. (Note that both the
     * domain string and the string will have been canonicalized to lower case at
     * this point)"
     */
    if (str == domStr) {
      return true;
    }

    /* " o All of the following [three] conditions hold:" */

    /* "* The domain string is a suffix of the string" */
    var idx = str.lastIndexOf(domStr);
    if (idx <= 0) {
      return false; // it's a non-match (-1) or prefix (0)
    }

    // next, check it's a proper suffix
    // e.g., "a.b.c".indexOf("b.c") === 2
    // 5 === 3+2
    if (str.length !== domStr.length + idx) {
      return false; // it's not a suffix
    }

    /* "  * The last character of the string that is not included in the
     * domain string is a %x2E (".") character." */
    if (str.substr(idx - 1, 1) !== ".") {
      return false; // doesn't align on "."
    }

    /* "  * The string is a host name (i.e., not an IP address)." */
    if (IP_REGEX_LOWERCASE.test(str)) {
      return false; // it's an IP address
    }
    return true;
  }

  // RFC6265 S5.1.4 Paths and Path-Match

  /*
   * "The user agent MUST use an algorithm equivalent to the following algorithm
   * to compute the default-path of a cookie:"
   *
   * Assumption: the path (and not query part or absolute uri) is passed in.
   */
  function defaultPath(path) {
    // "2. If the uri-path is empty or if the first character of the uri-path is not
    // a %x2F ("/") character, output %x2F ("/") and skip the remaining steps.
    if (!path || path.substr(0, 1) !== "/") {
      return "/";
    }

    // "3. If the uri-path contains no more than one %x2F ("/") character, output
    // %x2F ("/") and skip the remaining step."
    if (path === "/") {
      return path;
    }
    var rightSlash = path.lastIndexOf("/");
    if (rightSlash === 0) {
      return "/";
    }

    // "4. Output the characters of the uri-path from the first character up to,
    // but not including, the right-most %x2F ("/")."
    return path.slice(0, rightSlash);
  }
  function trimTerminator(str) {
    if (validators.isEmptyString(str)) return str;
    for (var t = 0; t < TERMINATORS.length; t++) {
      var terminatorIdx = str.indexOf(TERMINATORS[t]);
      if (terminatorIdx !== -1) {
        str = str.substr(0, terminatorIdx);
      }
    }
    return str;
  }
  function parseCookiePair(cookiePair, looseMode) {
    cookiePair = trimTerminator(cookiePair);
    validators.validate(validators.isString(cookiePair), cookiePair);
    var firstEq = cookiePair.indexOf("=");
    if (looseMode) {
      if (firstEq === 0) {
        // '=' is immediately at start
        cookiePair = cookiePair.substr(1);
        firstEq = cookiePair.indexOf("="); // might still need to split on '='
      }
    } else {
      // non-loose mode
      if (firstEq <= 0) {
        // no '=' or is at start
        return; // needs to have non-empty "cookie-name"
      }
    }
    var cookieName, cookieValue;
    if (firstEq <= 0) {
      cookieName = "";
      cookieValue = cookiePair.trim();
    } else {
      cookieName = cookiePair.substr(0, firstEq).trim();
      cookieValue = cookiePair.substr(firstEq + 1).trim();
    }
    if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
      return;
    }
    var c = new Cookie();
    c.key = cookieName;
    c.value = cookieValue;
    return c;
  }
  function parse(str, options) {
    if (!options || _typeof(options) !== "object") {
      options = {};
    }
    if (validators.isEmptyString(str) || !validators.isString(str)) {
      return null;
    }
    str = str.trim();

    // We use a regex to parse the "name-value-pair" part of S5.2
    var firstSemi = str.indexOf(";"); // S5.2 step 1
    var cookiePair = firstSemi === -1 ? str : str.substr(0, firstSemi);
    var c = parseCookiePair(cookiePair, !!options.loose);
    if (!c) {
      return;
    }
    if (firstSemi === -1) {
      return c;
    }

    // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
    // (including the %x3B (";") in question)." plus later on in the same section
    // "discard the first ";" and trim".
    var unparsed = str.slice(firstSemi + 1).trim();

    // "If the unparsed-attributes string is empty, skip the rest of these
    // steps."
    if (unparsed.length === 0) {
      return c;
    }

    /*
     * S5.2 says that when looping over the items "[p]rocess the attribute-name
     * and attribute-value according to the requirements in the following
     * subsections" for every item.  Plus, for many of the individual attributes
     * in S5.3 it says to use the "attribute-value of the last attribute in the
     * cookie-attribute-list".  Therefore, in this implementation, we overwrite
     * the previous value.
     */
    var cookie_avs = unparsed.split(";");
    while (cookie_avs.length) {
      var av = cookie_avs.shift().trim();
      if (av.length === 0) {
        // happens if ";;" appears
        continue;
      }
      var av_sep = av.indexOf("=");
      var av_key = void 0,
        av_value = void 0;
      if (av_sep === -1) {
        av_key = av;
        av_value = null;
      } else {
        av_key = av.substr(0, av_sep);
        av_value = av.substr(av_sep + 1);
      }
      av_key = av_key.trim().toLowerCase();
      if (av_value) {
        av_value = av_value.trim();
      }
      switch (av_key) {
        case "expires":
          // S5.2.1
          if (av_value) {
            var exp = parseDate(av_value);
            // "If the attribute-value failed to parse as a cookie date, ignore the
            // cookie-av."
            if (exp) {
              // over and underflow not realistically a concern: V8's getTime() seems to
              // store something larger than a 32-bit time_t (even with 32-bit node)
              c.expires = exp;
            }
          }
          break;
        case "max-age":
          // S5.2.2
          if (av_value) {
            // "If the first character of the attribute-value is not a DIGIT or a "-"
            // character ...[or]... If the remainder of attribute-value contains a
            // non-DIGIT character, ignore the cookie-av."
            if (/^-?[0-9]+$/.test(av_value)) {
              var delta = parseInt(av_value, 10);
              // "If delta-seconds is less than or equal to zero (0), let expiry-time
              // be the earliest representable date and time."
              c.setMaxAge(delta);
            }
          }
          break;
        case "domain":
          // S5.2.3
          // "If the attribute-value is empty, the behavior is undefined.  However,
          // the user agent SHOULD ignore the cookie-av entirely."
          if (av_value) {
            // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
            // (".") character."
            var domain = av_value.trim().replace(/^\./, "");
            if (domain) {
              // "Convert the cookie-domain to lower case."
              c.domain = domain.toLowerCase();
            }
          }
          break;
        case "path":
          // S5.2.4
          /*
           * "If the attribute-value is empty or if the first character of the
           * attribute-value is not %x2F ("/"):
           *   Let cookie-path be the default-path.
           * Otherwise:
           *   Let cookie-path be the attribute-value."
           *
           * We'll represent the default-path as null since it depends on the
           * context of the parsing.
           */
          c.path = av_value && av_value[0] === "/" ? av_value : null;
          break;
        case "secure":
          // S5.2.5
          /*
           * "If the attribute-name case-insensitively matches the string "Secure",
           * the user agent MUST append an attribute to the cookie-attribute-list
           * with an attribute-name of Secure and an empty attribute-value."
           */
          c.secure = true;
          break;
        case "httponly":
          // S5.2.6 -- effectively the same as 'secure'
          c.httpOnly = true;
          break;
        case "samesite":
          // RFC6265bis-02 S5.3.7
          var enforcement = av_value ? av_value.toLowerCase() : "";
          switch (enforcement) {
            case "strict":
              c.sameSite = "strict";
              break;
            case "lax":
              c.sameSite = "lax";
              break;
            case "none":
              c.sameSite = "none";
              break;
            default:
              c.sameSite = undefined;
              break;
          }
          break;
        default:
          c.extensions = c.extensions || [];
          c.extensions.push(av);
          break;
      }
    }
    return c;
  }

  /**
   *  If the cookie-name begins with a case-sensitive match for the
   *  string "__Secure-", abort these steps and ignore the cookie
   *  entirely unless the cookie's secure-only-flag is true.
   * @param cookie
   * @returns boolean
   */
  function isSecurePrefixConditionMet(cookie) {
    validators.validate(validators.isObject(cookie), cookie);
    return !cookie.key.startsWith("__Secure-") || cookie.secure;
  }

  /**
   *  If the cookie-name begins with a case-sensitive match for the
   *  string "__Host-", abort these steps and ignore the cookie
   *  entirely unless the cookie meets all the following criteria:
   *    1.  The cookie's secure-only-flag is true.
   *    2.  The cookie's host-only-flag is true.
   *    3.  The cookie-attribute-list contains an attribute with an
   *        attribute-name of "Path", and the cookie's path is "/".
   * @param cookie
   * @returns boolean
   */
  function isHostPrefixConditionMet(cookie) {
    validators.validate(validators.isObject(cookie));
    return !cookie.key.startsWith("__Host-") || cookie.secure && cookie.hostOnly && cookie.path != null && cookie.path === "/";
  }

  // avoid the V8 deoptimization monster!
  function jsonParse(str) {
    var obj;
    try {
      obj = JSON.parse(str);
    } catch (e) {
      return e;
    }
    return obj;
  }
  function fromJSON(str) {
    if (!str || validators.isEmptyString(str)) {
      return null;
    }
    var obj;
    if (typeof str === "string") {
      obj = jsonParse(str);
      if (obj instanceof Error) {
        return null;
      }
    } else {
      // assume it's an Object
      obj = str;
    }
    var c = new Cookie();
    for (var i = 0; i < Cookie.serializableProperties.length; i++) {
      var prop = Cookie.serializableProperties[i];
      if (obj[prop] === undefined || obj[prop] === cookieDefaults[prop]) {
        continue; // leave as prototype default
      }
      if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
        if (obj[prop] === null) {
          c[prop] = null;
        } else {
          c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(obj[prop]);
        }
      } else {
        c[prop] = obj[prop];
      }
    }
    return c;
  }

  /* Section 5.4 part 2:
   * "*  Cookies with longer paths are listed before cookies with
   *     shorter paths.
   *
   *  *  Among cookies that have equal-length path fields, cookies with
   *     earlier creation-times are listed before cookies with later
   *     creation-times."
   */

  function cookieCompare(a, b) {
    validators.validate(validators.isObject(a), a);
    validators.validate(validators.isObject(b), b);
    var cmp = 0;

    // descending for length: b CMP a
    var aPathLen = a.path ? a.path.length : 0;
    var bPathLen = b.path ? b.path.length : 0;
    cmp = bPathLen - aPathLen;
    if (cmp !== 0) {
      return cmp;
    }

    // ascending for time: a CMP b
    var aTime = a.creation ? a.creation.getTime() : MAX_TIME;
    var bTime = b.creation ? b.creation.getTime() : MAX_TIME;
    cmp = aTime - bTime;
    if (cmp !== 0) {
      return cmp;
    }

    // break ties for the same millisecond (precision of JavaScript's clock)
    cmp = a.creationIndex - b.creationIndex;
    return cmp;
  }
  function getCookieContext(url) {
    if (url instanceof Object) {
      return url;
    }
    // NOTE: decodeURI will throw on malformed URIs (see GH-32).
    // Therefore, we will just skip decoding for such URIs.
    try {
      url = decodeURI(url);
    } catch (err) {
      // Silently swallow error
    }
    return urlParse(url);
  }
  var cookieDefaults = {
    // the order in which the RFC has them:
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: false,
    httpOnly: false,
    extensions: null,
    // set by the CookieJar:
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: undefined
  };
  var Cookie = /*#__PURE__*/function () {
    function Cookie() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Cookie);
      var customInspectSymbol = getCustomInspectSymbol();
      if (customInspectSymbol) {
        this[customInspectSymbol] = this.inspect;
      }
      Object.assign(this, cookieDefaults, options);
      this.creation = this.creation || new Date();

      // used to break creation ties in cookieCompare():
      Object.defineProperty(this, "creationIndex", {
        configurable: false,
        enumerable: false,
        // important for assert.deepEqual checks
        writable: true,
        value: ++Cookie.cookiesCreated
      });
    }
    _createClass(Cookie, [{
      key: "inspect",
      value: function inspect() {
        var now = Date.now();
        var hostOnly = this.hostOnly != null ? this.hostOnly : "?";
        var createAge = this.creation ? "".concat(now - this.creation.getTime(), "ms") : "?";
        var accessAge = this.lastAccessed ? "".concat(now - this.lastAccessed.getTime(), "ms") : "?";
        return "Cookie=\"".concat(this.toString(), "; hostOnly=").concat(hostOnly, "; aAge=").concat(accessAge, "; cAge=").concat(createAge, "\"");
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var obj = {};
        var _iterator = _createForOfIteratorHelper(Cookie.serializableProperties),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var prop = _step.value;
            if (this[prop] === cookieDefaults[prop]) {
              continue; // leave as prototype default
            }
            if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
              if (this[prop] === null) {
                obj[prop] = null;
              } else {
                obj[prop] = this[prop] == "Infinity" // intentionally not ===
                ? "Infinity" : this[prop].toISOString();
              }
            } else if (prop === "maxAge") {
              if (this[prop] !== null) {
                // again, intentionally not ===
                obj[prop] = this[prop] == Infinity || this[prop] == -Infinity ? this[prop].toString() : this[prop];
              }
            } else {
              if (this[prop] !== cookieDefaults[prop]) {
                obj[prop] = this[prop];
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return obj;
      }
    }, {
      key: "clone",
      value: function clone() {
        return fromJSON(this.toJSON());
      }
    }, {
      key: "validate",
      value: function validate() {
        if (!COOKIE_OCTETS.test(this.value)) {
          return false;
        }
        if (this.expires != Infinity && !(this.expires instanceof Date) && !parseDate(this.expires)) {
          return false;
        }
        if (this.maxAge != null && this.maxAge <= 0) {
          return false; // "Max-Age=" non-zero-digit *DIGIT
        }
        if (this.path != null && !PATH_VALUE.test(this.path)) {
          return false;
        }
        var cdomain = this.cdomain();
        if (cdomain) {
          if (cdomain.match(/\.$/)) {
            return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
          }
          var suffix = pubsuffixPsl.getPublicSuffix(cdomain);
          if (suffix == null) {
            // it's a public suffix
            return false;
          }
        }
        return true;
      }
    }, {
      key: "setExpires",
      value: function setExpires(exp) {
        if (exp instanceof Date) {
          this.expires = exp;
        } else {
          this.expires = parseDate(exp) || "Infinity";
        }
      }
    }, {
      key: "setMaxAge",
      value: function setMaxAge(age) {
        if (age === Infinity || age === -Infinity) {
          this.maxAge = age.toString(); // so JSON.stringify() works
        } else {
          this.maxAge = age;
        }
      }
    }, {
      key: "cookieString",
      value: function cookieString() {
        var val = this.value;
        if (val == null) {
          val = "";
        }
        if (this.key === "") {
          return val;
        }
        return "".concat(this.key, "=").concat(val);
      }

      // gives Set-Cookie header format
    }, {
      key: "toString",
      value: function toString() {
        var str = this.cookieString();
        if (this.expires != Infinity) {
          if (this.expires instanceof Date) {
            str += "; Expires=".concat(formatDate(this.expires));
          } else {
            str += "; Expires=".concat(this.expires);
          }
        }
        if (this.maxAge != null && this.maxAge != Infinity) {
          str += "; Max-Age=".concat(this.maxAge);
        }
        if (this.domain && !this.hostOnly) {
          str += "; Domain=".concat(this.domain);
        }
        if (this.path) {
          str += "; Path=".concat(this.path);
        }
        if (this.secure) {
          str += "; Secure";
        }
        if (this.httpOnly) {
          str += "; HttpOnly";
        }
        if (this.sameSite && this.sameSite !== "none") {
          var ssCanon = Cookie.sameSiteCanonical[this.sameSite.toLowerCase()];
          str += "; SameSite=".concat(ssCanon ? ssCanon : this.sameSite);
        }
        if (this.extensions) {
          this.extensions.forEach(function (ext) {
            str += "; ".concat(ext);
          });
        }
        return str;
      }

      // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
      // elsewhere)
      // S5.3 says to give the "latest representable date" for which we use Infinity
      // For "expired" we use 0
    }, {
      key: "TTL",
      value: function TTL(now) {
        /* RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
         * attribute, the Max-Age attribute has precedence and controls the
         * expiration date of the cookie.
         * (Concurs with S5.3 step 3)
         */
        if (this.maxAge != null) {
          return this.maxAge <= 0 ? 0 : this.maxAge * 1000;
        }
        var expires = this.expires;
        if (expires != Infinity) {
          if (!(expires instanceof Date)) {
            expires = parseDate(expires) || Infinity;
          }
          if (expires == Infinity) {
            return Infinity;
          }
          return expires.getTime() - (now || Date.now());
        }
        return Infinity;
      }

      // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
      // elsewhere)
    }, {
      key: "expiryTime",
      value: function expiryTime(now) {
        if (this.maxAge != null) {
          var relativeTo = now || this.creation || new Date();
          var age = this.maxAge <= 0 ? -Infinity : this.maxAge * 1000;
          return relativeTo.getTime() + age;
        }
        if (this.expires == Infinity) {
          return Infinity;
        }
        return this.expires.getTime();
      }

      // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
      // elsewhere), except it returns a Date
    }, {
      key: "expiryDate",
      value: function expiryDate(now) {
        var millisec = this.expiryTime(now);
        if (millisec == Infinity) {
          return new Date(MAX_TIME);
        } else if (millisec == -Infinity) {
          return new Date(MIN_TIME);
        } else {
          return new Date(millisec);
        }
      }

      // This replaces the "persistent-flag" parts of S5.3 step 3
    }, {
      key: "isPersistent",
      value: function isPersistent() {
        return this.maxAge != null || this.expires != Infinity;
      }

      // Mostly S5.1.2 and S5.2.3:
    }, {
      key: "canonicalizedDomain",
      value: function canonicalizedDomain() {
        if (this.domain == null) {
          return null;
        }
        return canonicalDomain(this.domain);
      }
    }, {
      key: "cdomain",
      value: function cdomain() {
        return this.canonicalizedDomain();
      }
    }]);
    return Cookie;
  }();
  Cookie.cookiesCreated = 0;
  Cookie.parse = parse;
  Cookie.fromJSON = fromJSON;
  Cookie.serializableProperties = Object.keys(cookieDefaults);
  Cookie.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
  };
  Cookie.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
  };
  function getNormalizedPrefixSecurity(prefixSecurity) {
    if (prefixSecurity != null) {
      var normalizedPrefixSecurity = prefixSecurity.toLowerCase();
      /* The three supported options */
      switch (normalizedPrefixSecurity) {
        case PrefixSecurityEnum.STRICT:
        case PrefixSecurityEnum.SILENT:
        case PrefixSecurityEnum.DISABLED:
          return normalizedPrefixSecurity;
      }
    }
    /* Default is SILENT */
    return PrefixSecurityEnum.SILENT;
  }
  var CookieJar = /*#__PURE__*/function () {
    function CookieJar(store) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        rejectPublicSuffixes: true
      };
      _classCallCheck(this, CookieJar);
      if (typeof options === "boolean") {
        options = {
          rejectPublicSuffixes: options
        };
      }
      validators.validate(validators.isObject(options), options);
      this.rejectPublicSuffixes = options.rejectPublicSuffixes;
      this.enableLooseMode = !!options.looseMode;
      this.allowSpecialUseDomain = typeof options.allowSpecialUseDomain === "boolean" ? options.allowSpecialUseDomain : true;
      this.store = store || new MemoryCookieStore();
      this.prefixSecurity = getNormalizedPrefixSecurity(options.prefixSecurity);
      this._cloneSync = syncWrap("clone");
      this._importCookiesSync = syncWrap("_importCookies");
      this.getCookiesSync = syncWrap("getCookies");
      this.getCookieStringSync = syncWrap("getCookieString");
      this.getSetCookieStringsSync = syncWrap("getSetCookieStrings");
      this.removeAllCookiesSync = syncWrap("removeAllCookies");
      this.setCookieSync = syncWrap("setCookie");
      this.serializeSync = syncWrap("serialize");
    }
    _createClass(CookieJar, [{
      key: "setCookie",
      value: function setCookie(cookie, url, options, cb) {
        validators.validate(validators.isNonEmptyString(url), cb, options);
        var err;
        if (validators.isFunction(url)) {
          cb = url;
          return cb(new Error("No URL was specified"));
        }
        var context = getCookieContext(url);
        if (validators.isFunction(options)) {
          cb = options;
          options = {};
        }
        validators.validate(validators.isFunction(cb), cb);
        if (!validators.isNonEmptyString(cookie) && !validators.isObject(cookie) && cookie instanceof String && cookie.length == 0) {
          return cb(null);
        }
        var host = canonicalDomain(context.hostname);
        var loose = options.loose || this.enableLooseMode;
        var sameSiteContext = null;
        if (options.sameSiteContext) {
          sameSiteContext = checkSameSiteContext(options.sameSiteContext);
          if (!sameSiteContext) {
            return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
          }
        }

        // S5.3 step 1
        if (typeof cookie === "string" || cookie instanceof String) {
          cookie = Cookie.parse(cookie, {
            loose: loose
          });
          if (!cookie) {
            err = new Error("Cookie failed to parse");
            return cb(options.ignoreError ? null : err);
          }
        } else if (!(cookie instanceof Cookie)) {
          // If you're seeing this error, and are passing in a Cookie object,
          // it *might* be a Cookie object from another loaded version of tough-cookie.
          err = new Error("First argument to setCookie must be a Cookie object or string");
          return cb(options.ignoreError ? null : err);
        }

        // S5.3 step 2
        var now = options.now || new Date(); // will assign later to save effort in the face of errors

        // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()

        // S5.3 step 4: NOOP; domain is null by default

        // S5.3 step 5: public suffixes
        if (this.rejectPublicSuffixes && cookie.domain) {
          var suffix = pubsuffixPsl.getPublicSuffix(cookie.cdomain(), {
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            ignoreError: options.ignoreError
          });
          if (suffix == null && !IP_V6_REGEX_OBJECT.test(cookie.domain)) {
            // e.g. "com"
            err = new Error("Cookie has domain set to a public suffix");
            return cb(options.ignoreError ? null : err);
          }
        }

        // S5.3 step 6:
        if (cookie.domain) {
          if (!domainMatch(host, cookie.cdomain(), false)) {
            err = new Error("Cookie not in this host's domain. Cookie:".concat(cookie.cdomain(), " Request:").concat(host));
            return cb(options.ignoreError ? null : err);
          }
          if (cookie.hostOnly == null) {
            // don't reset if already set
            cookie.hostOnly = false;
          }
        } else {
          cookie.hostOnly = true;
          cookie.domain = host;
        }

        //S5.2.4 If the attribute-value is empty or if the first character of the
        //attribute-value is not %x2F ("/"):
        //Let cookie-path be the default-path.
        if (!cookie.path || cookie.path[0] !== "/") {
          cookie.path = defaultPath(context.pathname);
          cookie.pathIsDefault = true;
        }

        // S5.3 step 8: NOOP; secure attribute
        // S5.3 step 9: NOOP; httpOnly attribute

        // S5.3 step 10
        if (options.http === false && cookie.httpOnly) {
          err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
          return cb(options.ignoreError ? null : err);
        }

        // 6252bis-02 S5.4 Step 13 & 14:
        if (cookie.sameSite !== "none" && cookie.sameSite !== undefined && sameSiteContext) {
          // "If the cookie's "same-site-flag" is not "None", and the cookie
          //  is being set from a context whose "site for cookies" is not an
          //  exact match for request-uri's host's registered domain, then
          //  abort these steps and ignore the newly created cookie entirely."
          if (sameSiteContext === "none") {
            err = new Error("Cookie is SameSite but this is a cross-origin request");
            return cb(options.ignoreError ? null : err);
          }
        }

        /* 6265bis-02 S5.4 Steps 15 & 16 */
        var ignoreErrorForPrefixSecurity = this.prefixSecurity === PrefixSecurityEnum.SILENT;
        var prefixSecurityDisabled = this.prefixSecurity === PrefixSecurityEnum.DISABLED;
        /* If prefix checking is not disabled ...*/
        if (!prefixSecurityDisabled) {
          var errorFound = false;
          var errorMsg;
          /* Check secure prefix condition */
          if (!isSecurePrefixConditionMet(cookie)) {
            errorFound = true;
            errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
          } else if (!isHostPrefixConditionMet(cookie)) {
            /* Check host prefix condition */
            errorFound = true;
            errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
          }
          if (errorFound) {
            return cb(options.ignoreError || ignoreErrorForPrefixSecurity ? null : new Error(errorMsg));
          }
        }
        var store = this.store;
        if (!store.updateCookie) {
          store.updateCookie = function (oldCookie, newCookie, cb) {
            this.putCookie(newCookie, cb);
          };
        }
        function withCookie(err, oldCookie) {
          if (err) {
            return cb(err);
          }
          var next = function next(err) {
            if (err) {
              return cb(err);
            } else {
              cb(null, cookie);
            }
          };
          if (oldCookie) {
            // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
            // domain, and path as the newly created cookie:"
            if (options.http === false && oldCookie.httpOnly) {
              // step 11.2
              err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
              return cb(options.ignoreError ? null : err);
            }
            cookie.creation = oldCookie.creation; // step 11.3
            cookie.creationIndex = oldCookie.creationIndex; // preserve tie-breaker
            cookie.lastAccessed = now;
            // Step 11.4 (delete cookie) is implied by just setting the new one:
            store.updateCookie(oldCookie, cookie, next); // step 12
          } else {
            cookie.creation = cookie.lastAccessed = now;
            store.putCookie(cookie, next); // step 12
          }
        }
        store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
      }

      // RFC6365 S5.4
    }, {
      key: "getCookies",
      value: function getCookies(url, options, cb) {
        validators.validate(validators.isNonEmptyString(url), cb, url);
        var context = getCookieContext(url);
        if (validators.isFunction(options)) {
          cb = options;
          options = {};
        }
        validators.validate(validators.isObject(options), cb, options);
        validators.validate(validators.isFunction(cb), cb);
        var host = canonicalDomain(context.hostname);
        var path = context.pathname || "/";
        var secure = options.secure;
        if (secure == null && context.protocol && (context.protocol == "https:" || context.protocol == "wss:")) {
          secure = true;
        }
        var sameSiteLevel = 0;
        if (options.sameSiteContext) {
          var sameSiteContext = checkSameSiteContext(options.sameSiteContext);
          sameSiteLevel = Cookie.sameSiteLevel[sameSiteContext];
          if (!sameSiteLevel) {
            return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
          }
        }
        var http = options.http;
        if (http == null) {
          http = true;
        }
        var now = options.now || Date.now();
        var expireCheck = options.expire !== false;
        var allPaths = !!options.allPaths;
        var store = this.store;
        function matchingCookie(c) {
          // "Either:
          //   The cookie's host-only-flag is true and the canonicalized
          //   request-host is identical to the cookie's domain.
          // Or:
          //   The cookie's host-only-flag is false and the canonicalized
          //   request-host domain-matches the cookie's domain."
          if (c.hostOnly) {
            if (c.domain != host) {
              return false;
            }
          } else {
            if (!domainMatch(host, c.domain, false)) {
              return false;
            }
          }

          // "The request-uri's path path-matches the cookie's path."
          if (!allPaths && !pathMatch(path, c.path)) {
            return false;
          }

          // "If the cookie's secure-only-flag is true, then the request-uri's
          // scheme must denote a "secure" protocol"
          if (c.secure && !secure) {
            return false;
          }

          // "If the cookie's http-only-flag is true, then exclude the cookie if the
          // cookie-string is being generated for a "non-HTTP" API"
          if (c.httpOnly && !http) {
            return false;
          }

          // RFC6265bis-02 S5.3.7
          if (sameSiteLevel) {
            var cookieLevel = Cookie.sameSiteLevel[c.sameSite || "none"];
            if (cookieLevel > sameSiteLevel) {
              // only allow cookies at or below the request level
              return false;
            }
          }

          // deferred from S5.3
          // non-RFC: allow retention of expired cookies by choice
          if (expireCheck && c.expiryTime() <= now) {
            store.removeCookie(c.domain, c.path, c.key, function () {}); // result ignored
            return false;
          }
          return true;
        }
        store.findCookies(host, allPaths ? null : path, this.allowSpecialUseDomain, function (err, cookies) {
          if (err) {
            return cb(err);
          }
          cookies = cookies.filter(matchingCookie);

          // sorting of S5.4 part 2
          if (options.sort !== false) {
            cookies = cookies.sort(cookieCompare);
          }

          // S5.4 part 3
          var now = new Date();
          var _iterator2 = _createForOfIteratorHelper(cookies),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var cookie = _step2.value;
              cookie.lastAccessed = now;
            }
            // TODO persist lastAccessed
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          cb(null, cookies);
        });
      }
    }, {
      key: "getCookieString",
      value: function getCookieString() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var cb = args.pop();
        validators.validate(validators.isFunction(cb), cb);
        var next = function next(err, cookies) {
          if (err) {
            cb(err);
          } else {
            cb(null, cookies.sort(cookieCompare).map(function (c) {
              return c.cookieString();
            }).join("; "));
          }
        };
        args.push(next);
        this.getCookies.apply(this, args);
      }
    }, {
      key: "getSetCookieStrings",
      value: function getSetCookieStrings() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var cb = args.pop();
        validators.validate(validators.isFunction(cb), cb);
        var next = function next(err, cookies) {
          if (err) {
            cb(err);
          } else {
            cb(null, cookies.map(function (c) {
              return c.toString();
            }));
          }
        };
        args.push(next);
        this.getCookies.apply(this, args);
      }
    }, {
      key: "serialize",
      value: function serialize(cb) {
        validators.validate(validators.isFunction(cb), cb);
        var type = this.store.constructor.name;
        if (validators.isObject(type)) {
          type = null;
        }

        // update README.md "Serialization Format" if you change this, please!
        var serialized = {
          // The version of tough-cookie that serialized this jar. Generally a good
          // practice since future versions can make data import decisions based on
          // known past behavior. When/if this matters, use `semver`.
          version: "tough-cookie@".concat(version),
          // add the store type, to make humans happy:
          storeType: type,
          // CookieJar configuration:
          rejectPublicSuffixes: !!this.rejectPublicSuffixes,
          enableLooseMode: !!this.enableLooseMode,
          allowSpecialUseDomain: !!this.allowSpecialUseDomain,
          prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),
          // this gets filled from getAllCookies:
          cookies: []
        };
        if (!(this.store.getAllCookies && typeof this.store.getAllCookies === "function")) {
          return cb(new Error("store does not support getAllCookies and cannot be serialized"));
        }
        this.store.getAllCookies(function (err, cookies) {
          if (err) {
            return cb(err);
          }
          serialized.cookies = cookies.map(function (cookie) {
            // convert to serialized 'raw' cookies
            cookie = cookie instanceof Cookie ? cookie.toJSON() : cookie;

            // Remove the index so new ones get assigned during deserialization
            delete cookie.creationIndex;
            return cookie;
          });
          return cb(null, serialized);
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.serializeSync();
      }

      // use the class method CookieJar.deserialize instead of calling this directly
    }, {
      key: "_importCookies",
      value: function _importCookies(serialized, cb) {
        var _this = this;
        var cookies = serialized.cookies;
        if (!cookies || !Array.isArray(cookies)) {
          return cb(new Error("serialized jar has no cookies array"));
        }
        cookies = cookies.slice(); // do not modify the original

        var putNext = function putNext(err) {
          if (err) {
            return cb(err);
          }
          if (!cookies.length) {
            return cb(err, _this);
          }
          var cookie;
          try {
            cookie = fromJSON(cookies.shift());
          } catch (e) {
            return cb(e);
          }
          if (cookie === null) {
            return putNext(null); // skip this cookie
          }
          _this.store.putCookie(cookie, putNext);
        };
        putNext();
      }
    }, {
      key: "clone",
      value: function clone(newStore, cb) {
        if (arguments.length === 1) {
          cb = newStore;
          newStore = null;
        }
        this.serialize(function (err, serialized) {
          if (err) {
            return cb(err);
          }
          CookieJar.deserialize(serialized, newStore, cb);
        });
      }
    }, {
      key: "cloneSync",
      value: function cloneSync(newStore) {
        if (arguments.length === 0) {
          return this._cloneSync();
        }
        if (!newStore.synchronous) {
          throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        }
        return this._cloneSync(newStore);
      }
    }, {
      key: "removeAllCookies",
      value: function removeAllCookies(cb) {
        validators.validate(validators.isFunction(cb), cb);
        var store = this.store;

        // Check that the store implements its own removeAllCookies(). The default
        // implementation in Store will immediately call the callback with a "not
        // implemented" Error.
        if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== Store.prototype.removeAllCookies) {
          return store.removeAllCookies(cb);
        }
        store.getAllCookies(function (err, cookies) {
          if (err) {
            return cb(err);
          }
          if (cookies.length === 0) {
            return cb(null);
          }
          var completedCount = 0;
          var removeErrors = [];
          function removeCookieCb(removeErr) {
            if (removeErr) {
              removeErrors.push(removeErr);
            }
            completedCount++;
            if (completedCount === cookies.length) {
              return cb(removeErrors.length ? removeErrors[0] : null);
            }
          }
          cookies.forEach(function (cookie) {
            store.removeCookie(cookie.domain, cookie.path, cookie.key, removeCookieCb);
          });
        });
      }
    }], [{
      key: "deserialize",
      value: function deserialize(strOrObj, store, cb) {
        if (arguments.length !== 3) {
          // store is optional
          cb = store;
          store = null;
        }
        validators.validate(validators.isFunction(cb), cb);
        var serialized;
        if (typeof strOrObj === "string") {
          serialized = jsonParse(strOrObj);
          if (serialized instanceof Error) {
            return cb(serialized);
          }
        } else {
          serialized = strOrObj;
        }
        var jar = new CookieJar(store, {
          rejectPublicSuffixes: serialized.rejectPublicSuffixes,
          looseMode: serialized.enableLooseMode,
          allowSpecialUseDomain: serialized.allowSpecialUseDomain,
          prefixSecurity: serialized.prefixSecurity
        });
        jar._importCookies(serialized, function (err) {
          if (err) {
            return cb(err);
          }
          cb(null, jar);
        });
      }
    }, {
      key: "deserializeSync",
      value: function deserializeSync(strOrObj, store) {
        var serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
        var jar = new CookieJar(store, {
          rejectPublicSuffixes: serialized.rejectPublicSuffixes,
          looseMode: serialized.enableLooseMode
        });

        // catch this mistake early:
        if (!jar.store.synchronous) {
          throw new Error("CookieJar store is not synchronous; use async API instead.");
        }
        jar._importCookiesSync(serialized);
        return jar;
      }
    }]);
    return CookieJar;
  }();
  CookieJar.fromJSON = CookieJar.deserializeSync;
  ["_importCookies", "clone", "getCookies", "getCookieString", "getSetCookieStrings", "removeAllCookies", "serialize", "setCookie"].forEach(function (name) {
    CookieJar.prototype[name] = fromCallback(CookieJar.prototype[name]);
  });
  CookieJar.deserialize = fromCallback(CookieJar.deserialize);

  // Use a closure to provide a true imperative API for synchronous stores.
  function syncWrap(method) {
    return function () {
      if (!this.store.synchronous) {
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      }
      var syncErr, syncResult;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this[method].apply(this, args.concat([function (err, result) {
        syncErr = err;
        syncResult = result;
      }]));
      if (syncErr) {
        throw syncErr;
      }
      return syncResult;
    };
  }
  var CookieJar_1 = CookieJar;

  var getEnv = function getEnv(key, defaultValue) {
    try {
      if (process.env[key]) {
        return process.env[key] || defaultValue;
      }
    } catch (err) {
      /* pass */
    }
    return defaultValue;
  };
  var getApiHost = function getApiHost(apihost) {
    var apiHost = apihost || getEnv("CB_APIHOST", "https://api.cloudbypass.com");
    if (!apiHost.match(/^((?:http|https):(\/\/)?)([\w.-]+)(:(\d+))?$/)) {
      throw new Error("Invalid APIHOST");
    }
    return apiHost;
  };
  var parseOptions = function parseOptions(options) {
    var _options = {
      "disable-redirect": true,
      "full-cookie": true
    };
    if (typeof options === "string") {
      options.split(",").forEach(function (option) {
        _options[option.trim()] = true;
      });
    } else if (_typeof(options) === "object") {
      if (Array.isArray(options)) {
        options.forEach(function (option) {
          _options[option.trim()] = true;
        });
      } else {
        Object.keys(options).forEach(function (key) {
          _options[key.trim()] = options[key];
        });
      }
    }
    return Object.keys(_options).map(function (key) {
      return _options[key] ? key : "";
    }).join(",");
  };
  var inherits = function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var isObject = function isObject(thing) {
    return thing !== null && _typeof(thing) === 'object';
  };

  function BypassError(axiosError) {
    var request = axiosError.request,
      response = axiosError.response;
    var _response$data = response.data,
      id = _response$data.id,
      code = _response$data.code,
      message = _response$data.message;
    this.name = 'BypassError';
    id && (this.id = id);
    message && (this.message = message);
    code && (this.code = code);
    request && (this.request = request);
    response && (this.response = response);
  }
  inherits(BypassError, Error, {
    toJSON: function toJSON() {
      return {
        message: this.message,
        name: this.name,
        id: this.id,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = BypassError.prototype;
  Object.defineProperty(prototype, 'isBypassError', {
    value: true
  });

  function isBypassError(payload) {
    return isObject(payload) && payload.isBypassError === true;
  }

  var getBalance = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apikey) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", axios$1.get('https://console.cloudbypass.com/api/v1/balance?apikey=' + getEnv("CB_APIKEY", apikey)).then(function (res) {
              var _res$data;
              return ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.balance) || -1;
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getBalance(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var ENV_APIKEY = getEnv("CB_APIKEY", "");
  var ENV_PROXY = getEnv("CB_PROXY", "");
  var cloudbypass = noop_1.wrapper(axios$1.create({
    jar: new CookieJar_1()
  }));
  var cloudbypassInterceptorHelper = function cloudbypassInterceptorHelper(_axios) {
    _axios.interceptors.request.use(function (config) {
      var u = url__default["default"].parse(config.url);
      var proxy = config.cb_proxy || ENV_PROXY;
      config.headers = {
        "x-cb-apikey": config.cb_apikey || ENV_APIKEY,
        "x-cb-host": u.host,
        "x-cb-options": parseOptions(config.cb_options),
        "x-cb-protocol": u.protocol.replace(":", "")
      };
      if (proxy) {
        config.headers["x-cb-proxy"] = proxy;
      }
      config.url = getApiHost(config.cb_apihost) + u.path;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    _axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.name === "AxiosError" && error.response && error.response.data) {
        throw new BypassError(error);
      }
      return Promise.reject(error);
    });
    return _axios;
  };
  cloudbypass.create = function (options) {
    options = options || {};
    options.jar = options.jar || new CookieJar_1();
    return cloudbypassInterceptorHelper(noop_1.wrapper(axios$1.create(options)));
  };
  cloudbypassInterceptorHelper(cloudbypass);
  ["get", "post", "put", "delete", "head", "options", "patch"].forEach(function (method) {
    cloudbypass[method] = function (url, config) {
      return this.request(Object.assign(config || {}, {
        method: method,
        url: url || config.url
      }));
    };
  });
  cloudbypass.isBypassError = isBypassError;
  cloudbypass.getBalance = getBalance;
  cloudbypass["default"] = cloudbypass;

  return cloudbypass;

}));
//# sourceMappingURL=cloudbypass.js.map
