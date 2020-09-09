"use strict";
exports.__esModule = true;
var ISelectable_1 = require("./ISelectable");
var Selectable = (function () {
    function Selectable(strictMode, selectionSet) {
        if (strictMode === void 0) { strictMode = false; }
        if (selectionSet === void 0) { selectionSet = null; }
        ISelectable_1.bootSelectable(this, strictMode, selectionSet);
    }
    return Selectable;
}());
exports["default"] = Selectable;
//# sourceMappingURL=Selectable.js.map