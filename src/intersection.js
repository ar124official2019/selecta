"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
function intersection(setA, setB) {
    var e_1, _a;
    var _intersection = new Set();
    try {
        for (var _b = __values(setB.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var elem = _c.value;
            if (setA.has(elem)) {
                _intersection.add(elem);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return _intersection;
}
exports["default"] = intersection;
//# sourceMappingURL=intersection.js.map