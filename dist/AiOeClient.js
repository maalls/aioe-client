function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import io from "socket.io-client";
import axios from "axios";
var AiOeClient = /*#__PURE__*/function () {
  function AiOeClient(apiURL, socketURL, WEB_URL) {
    _classCallCheck(this, AiOeClient);
    this.API_URL = 'https://api.ai-oe.co';
    this.SOCKET_URL = 'https://socket.ai-oe.co';
    this.WEB_URL = 'https://ai-oe.co';
    this.socket = null;
    if (socketURL) {
      this.SOCKET_URL = socketURL;
    }
    if (apiURL) {
      this.API_URL = apiURL;
    }
    if (WEB_URL) {
      this.WEB_URL = WEB_URL;
    }
  }
  return _createClass(AiOeClient, [{
    key: "connectAsync",
    value: function connectAsync(user) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.connect(user, function (socket) {
          resolve(socket);
        });
      });
    }
  }, {
    key: "connect",
    value: function connect(user, cb) {
      var _this2 = this;
      if (this.socket && this.socket.connected) {
        if (cb) cb(this.socket);
      } else {
        this.socket = io(this.SOCKET_URL, {
          reconnection: true,
          // Enable auto-reconnect
          reconnectionAttempts: 5,
          // Retry 5 times before failing
          reconnectionDelay: 2000,
          // Wait 2 seconds before retrying
          timeout: 10000 // Max time before timeout (10 sec)
        });
        this.socket.on("connect", function () {
          _this2.socket.emit("registerUser", user.id);
          if (cb) cb(_this2.socket);
        });
        this.socket.on("connect_error", function (error) {});
        this.socket.on("connect_timeout", function () {});
        this.socket.on("reconnect_attempt", function (attempt) {});
        this.socket.on("reconnect_failed", function () {});
        this.socket.on("disconnect", function (reason) {});
      }
      return this.socket;
    }
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.socket.disconnect();
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function disconnect() {
        return _disconnect.apply(this, arguments);
      }
      return disconnect;
    }()
  }, {
    key: "testPushNotification",
    value: function () {
      var _testPushNotification = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(deviceId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.postEntity('user/push-token/test', {
                deviceId: deviceId
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function testPushNotification(_x3) {
        return _testPushNotification.apply(this, arguments);
      }
      return testPushNotification;
    }()
  }, {
    key: "pushNotificationToken",
    value: function () {
      var _pushNotificationToken2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user, deviceId, _pushNotificationToken, pushNotificationTokenType, key) {
        var userId;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              userId = user.id;
              return _context3.abrupt("return", this.postEntity('user/push-token', {
                userId: userId,
                deviceId: deviceId,
                pushNotificationToken: _pushNotificationToken,
                pushNotificationTokenType: pushNotificationTokenType,
                key: key
              }));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function pushNotificationToken(_x4, _x5, _x6, _x7, _x8) {
        return _pushNotificationToken2.apply(this, arguments);
      }
      return pushNotificationToken;
    }()
  }, {
    key: "auth",
    value: function () {
      var _auth = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(username, password, device) {
        var uri, json;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              uri = this.API_URL + '/api/auth';
              _context4.next = 3;
              return this.fetch(uri, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: username,
                  password: password,
                  device: device
                })
              });
            case 3:
              json = _context4.sent;
              return _context4.abrupt("return", json);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function auth(_x9, _x0, _x1) {
        return _auth.apply(this, arguments);
      }
      return auth;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId, password, apiKey) {
        var uri, response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              uri = this.API_URL + '/api/user/password';
              _context5.next = 3;
              return this.fetch(uri, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  userId: userId,
                  password: password,
                  key: apiKey
                })
              });
            case 3:
              response = _context5.sent;
              return _context5.abrupt("return", response);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function updatePassword(_x10, _x11, _x12) {
        return _updatePassword.apply(this, arguments);
      }
      return updatePassword;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(deviceId, key) {
        var rsp;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.postEntity('logout', {
                deviceId: deviceId,
                key: key
              });
            case 2:
              rsp = _context6.sent;
              if (!(rsp.status == 'ok')) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return");
            case 7:
              throw new Error(rsp.message);
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function logout(_x13, _x14) {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }, {
    key: "getMessages",
    value: function () {
      var _getMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(params) {
        var query, response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (params !== null && params !== void 0 && params.key) {
                _context7.next = 2;
                break;
              }
              throw new Error("aioe.getMessages requires a key parameters.");
            case 2:
              query = new URLSearchParams(params).toString();
              _context7.next = 5;
              return this.fetch(this.API_URL + '/api/chat?' + query);
            case 5:
              response = _context7.sent;
              return _context7.abrupt("return", response);
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getMessages(_x15) {
        return _getMessages.apply(this, arguments);
      }
      return getMessages;
    }()
  }, {
    key: "updateGroupAccess",
    value: function () {
      var _updateGroupAccess = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(userId, groupId, apiKey) {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.fetch(this.API_URL + '/api/chat/access', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user_id: userId,
                  group_id: groupId,
                  key: apiKey
                })
              });
            case 2:
              response = _context8.sent;
              return _context8.abrupt("return", response);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function updateGroupAccess(_x16, _x17, _x18) {
        return _updateGroupAccess.apply(this, arguments);
      }
      return updateGroupAccess;
    }()
  }, {
    key: "command",
    value: function () {
      var _command = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(name, args, apiKey) {
        var uri, data, rsp;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              uri = this.API_URL + "/api/command";
              data = {
                command: name,
                args: args ? args : null,
                key: apiKey
              };
              _context9.next = 4;
              return this.fetch(uri, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              });
            case 4:
              rsp = _context9.sent;
              return _context9.abrupt("return", rsp.json());
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function command(_x19, _x20, _x21) {
        return _command.apply(this, arguments);
      }
      return command;
    }()
    /*
    async post(message:any, apiKey:string) {
         const content = message.content;
        console.log("[mobile][aioe][post] posting", content, apiKey);
         const formData = new FormData();
        formData.append('content', content);
        formData.append('sender_id', message.sender.id);
        formData.append('group_id', message.group.id);
        formData.append("key", apiKey);
        if (message.attachments && message.attachments.length) {
            const attachment = message.attachments[0];
            const uri = attachment.uri;
            const type = typeof uri;
            console.log(type);
            if (type === 'string') {
                 console.log("adding attchmnent to post form", attachment, type);
                const uriParts = uri.split('.');
                const fileType = uriParts[uriParts.length - 1];
                // If you have a File or Blob, use it directly. If not, append the URI string.
                // You may need to convert the URI to a Blob/File depending on your environment.
                formData.append('file', uri);
            }
            else {
                console.log("not a string");
                formData.append('file', uri);
            }
             if (attachment.thumbnail_uri) {
                 const tb = attachment.thumbnail_uri;
                if (type === 'string') {
                    const uriParts = tb.split('.');
                    const fileType = uriParts[uriParts.length - 1];
                    // If you have a File or Blob, use it directly. If not, append the URI string.
                    formData.append('thumbnail', tb);
                    console.log("not a string");
                    formData.append('file', tb);
                }
             }
        }
        //const SERVER_URI = 'http://54.168.50.155:8084/api/chat';
         const response = await this.fetch(this.API_URL + '/api/chat', {
            method: 'POST',
            headers: { 'x-api-key': apiKey },
            body: formData // JSON.stringify({ message: newMessage }),
        });
         return response;
     }
    */
  }, {
    key: "post",
    value: (function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(message, apiKey) {
        var formData, response, data;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              axios.defaults.headers.common['x-api-key'] = apiKey;
              formData = new FormData();
              formData.append('content', message.content);
              formData.append('sender_id', message.sender.id);
              formData.append('group_id', message.group.id);
              _context0.next = 7;
              return axios.post(this.API_URL + '/api/chat', formData);
            case 7:
              response = _context0.sent;
              if (!(!response.data || response.data.status !== 'ok')) {
                _context0.next = 10;
                break;
              }
              throw new Error(response.data.message || "Failed to post message");
            case 10:
              data = response.data;
              return _context0.abrupt("return", data);
            case 12:
            case "end":
              return _context0.stop();
          }
        }, _callee0, this);
      }));
      function post(_x22, _x23) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
    /*async post(message: any, apiKey: string) {
        console.log("[mobile][aioe][post] posting", message.content, apiKey);
         const fields = {
            content: message.content,
            sender_id: message.sender.id,
            group_id: message.group.id,
            key: apiKey
        };
         const formData = await createFormData(fields, message.attachments || []);
         const headers = typeof formData?.getHeaders === 'function'
            ? formData.getHeaders()
            : { 'x-api-key': apiKey };
         const response = await this.fetch(this.API_URL + '/api/chat', {
            method: 'POST',
            headers,
            body: formData,
        });
         return response;
    }*/
    )
  }, {
    key: "postReceipt",
    value: (function () {
      var _postReceipt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(owner, receipt, apiKey) {
        var data;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              data = _objectSpread(_objectSpread({}, receipt), {}, {
                owner: owner,
                key: apiKey
              });
              return _context1.abrupt("return", this.postEntity('receipt', data));
            case 2:
            case "end":
              return _context1.stop();
          }
        }, _callee1, this);
      }));
      function postReceipt(_x24, _x25, _x26) {
        return _postReceipt.apply(this, arguments);
      }
      return postReceipt;
    }())
  }, {
    key: "getApis",
    value: function () {
      var _getApis = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(query) {
        var rsp;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.list("apis", query);
            case 2:
              rsp = _context10.sent;
              if (!(rsp.status == 'ok')) {
                _context10.next = 7;
                break;
              }
              return _context10.abrupt("return", rsp.apis);
            case 7:
              throw new Error(rsp.message);
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getApis(_x27) {
        return _getApis.apply(this, arguments);
      }
      return getApis;
    }()
  }, {
    key: "saveApi",
    value: function () {
      var _saveApi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(api, apiKey) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.postEntity("apis", _objectSpread(_objectSpread({}, api), {}, {
                key: apiKey
              })));
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function saveApi(_x28, _x29) {
        return _saveApi.apply(this, arguments);
      }
      return saveApi;
    }()
  }, {
    key: "callApi",
    value: function () {
      var _callApi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(api, values, key) {
        var query, _iterator, _step, input, queryString, uri, response;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              query = {};
              _iterator = _createForOfIteratorHelper(api.parameters);
              _context12.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context12.next = 17;
                break;
              }
              input = _step.value;
              if (!(input.type == 'hidden')) {
                _context12.next = 10;
                break;
              }
              query[input.name] = input.value;
              _context12.next = 15;
              break;
            case 10:
              if (values[input.name]) {
                _context12.next = 14;
                break;
              }
              throw new Error("Missing parameter:" + input.name);
            case 14:
              query[input.name] = values[input.name];
            case 15:
              _context12.next = 4;
              break;
            case 17:
              _context12.next = 22;
              break;
            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](2);
              _iterator.e(_context12.t0);
            case 22:
              _context12.prev = 22;
              _iterator.f();
              return _context12.finish(22);
            case 25:
              queryString = new URLSearchParams(query).toString();
              uri = api.uri + "?" + queryString;
              _context12.next = 29;
              return this.fetch(uri);
            case 29:
              response = _context12.sent;
              return _context12.abrupt("return", response);
            case 31:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[2, 19, 22, 25]]);
      }));
      function callApi(_x30, _x31, _x32) {
        return _callApi.apply(this, arguments);
      }
      return callApi;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(username, apiKey) {
        var uri, user;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              uri = this.API_URL + '/api/user/' + username + '?key=' + apiKey;
              _context13.next = 3;
              return this.fetch(uri);
            case 3:
              user = _context13.sent;
              return _context13.abrupt("return", user);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function getUser(_x33, _x34) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(entityName, parameters) {
        var queryString, uri, response;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              queryString = new URLSearchParams(parameters).toString();
              uri = this.API_URL + '/api/' + entityName + "?" + queryString;
              _context14.next = 4;
              return this.fetch(uri);
            case 4:
              response = _context14.sent;
              return _context14.abrupt("return", response);
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function list(_x35, _x36) {
        return _list.apply(this, arguments);
      }
      return list;
    }()
  }, {
    key: "deleteEntity",
    value: function () {
      var _deleteEntity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(entityName, id, key) {
        var uri, response;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              uri = this.API_URL + '/api/' + entityName + '/' + id + '?key=' + key;
              _context15.next = 3;
              return this.fetch(uri, {
                method: "DELETE"
              });
            case 3:
              response = _context15.sent;
              return _context15.abrupt("return", response);
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function deleteEntity(_x37, _x38, _x39) {
        return _deleteEntity.apply(this, arguments);
      }
      return deleteEntity;
    }()
  }, {
    key: "postEntity",
    value: function () {
      var _postEntity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(entityName, payload) {
        var uri, response;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              uri = this.API_URL + '/api/' + entityName;
              _context16.next = 3;
              return this.fetch(uri, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(payload) // Convert JS object to JSON
              });
            case 3:
              response = _context16.sent;
              return _context16.abrupt("return", response);
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function postEntity(_x40, _x41) {
        return _postEntity.apply(this, arguments);
      }
      return postEntity;
    }()
  }, {
    key: "getSocket",
    value: function getSocket() {
      return this.socket;
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(uri, params) {
        var response, errorData, json;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return fetch(uri, params);
            case 2:
              response = _context17.sent;
              if (response.ok) {
                _context17.next = 14;
                break;
              }
              _context17.next = 6;
              return response.json();
            case 6:
              errorData = _context17.sent;
              if (!errorData.message) {
                _context17.next = 11;
                break;
              }
              throw new Error("".concat(response.status, " error: ").concat(errorData.message));
            case 11:
              throw new Error("HTTP error! Status: ".concat(response.status));
            case 12:
              _context17.next = 18;
              break;
            case 14:
              _context17.next = 16;
              return response.json();
            case 16:
              json = _context17.sent;
              return _context17.abrupt("return", json);
            case 18:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      return function (_x42, _x43) {
        return _ref.apply(this, arguments);
      };
    }())
  }]);
}();
export { AiOeClient as default };