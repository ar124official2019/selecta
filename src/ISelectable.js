"use strict";
exports.__esModule = true;
exports.bootSelectable = exports.DefaultSetStrictSelectionMode = exports.DefaultSetSelectionSet = exports.DefaultSetSelectionMode = exports.DefaultResetSelections = exports.DefaultOnItemSelect = exports.DefaultOnItemDeselect = exports.DefaultIsSelected = exports.DefaultGetSelectionSet = exports.DefaultGetCurrentSelections = void 0;
var rxjs_1 = require("rxjs");
function DefaultGetCurrentSelections() {
    if (!this.selectionMode)
        return null;
    return this.currentSelections;
}
exports.DefaultGetCurrentSelections = DefaultGetCurrentSelections;
function DefaultGetSelectionSet() {
    if (!this.selectionMode || !this.useStrictMode)
        return null;
    return this.selectionItems;
}
exports.DefaultGetSelectionSet = DefaultGetSelectionSet;
function DefaultIsSelected(item) {
    if (!this.selectionMode ||
        (this.useStrictMode && !this.selectionItems.has(item)))
        return null;
    return this.currentSelections.has(item);
}
exports.DefaultIsSelected = DefaultIsSelected;
function DefaultOnItemDeselect(item) {
    if (!this.selectionMode ||
        (this.useStrictMode && !this.selectionItems.has(item))) {
        return null;
    }
    this.currentSelections["delete"](item);
}
exports.DefaultOnItemDeselect = DefaultOnItemDeselect;
function DefaultOnItemSelect(item) {
    if (!this.selectionMode ||
        (this.useStrictMode && !this.selectionItems.has(item))) {
        return null;
    }
    this.currentSelections.add(item);
}
exports.DefaultOnItemSelect = DefaultOnItemSelect;
function DefaultResetSelections() {
    if (!this.selectionMode)
        return null;
    this.currentSelections.clear();
}
exports.DefaultResetSelections = DefaultResetSelections;
function DefaultSetSelectionMode(enabled, reset) {
    if (reset === void 0) { reset = false; }
    this.selectionMode = enabled;
    this.selectionModeChange.next(enabled);
    if (reset) {
        this.currentSelections.clear();
    }
    return this.selectionMode;
}
exports.DefaultSetSelectionMode = DefaultSetSelectionMode;
var intersection_1 = require("./intersection");
function DefaultSetSelectionSet(set) {
    if (!this.selectionMode || !this.useStrictMode)
        return null;
    this.selectionItems = set;
    this.currentSelections =
        intersection_1["default"](this.selectionItems, this.currentSelections);
}
exports.DefaultSetSelectionSet = DefaultSetSelectionSet;
function DefaultSetStrictSelectionMode(strict, selectionSet, reset) {
    if (selectionSet === void 0) { selectionSet = new Set(); }
    if (reset === void 0) { reset = true; }
    if (!this.selectionMode || this.useStrictMode == strict)
        return null;
    if (strict) {
        this.selectionItems = selectionSet;
        this.currentSelections =
            intersection_1["default"](this.selectionItems, this.currentSelections);
    }
    else {
        this.selectionItems = null;
    }
    if (reset) {
        this.currentSelections.clear();
    }
    this.useStrictMode = strict;
    return this.useStrictMode;
}
exports.DefaultSetStrictSelectionMode = DefaultSetStrictSelectionMode;
function bootSelectable(object, strictMode, selectionSet) {
    if (strictMode === void 0) { strictMode = false; }
    if (selectionSet === void 0) { selectionSet = new Set(); }
    object.currentSelections = new Set();
    object.selectionModeChange = new rxjs_1.BehaviorSubject(false);
    object.setSelectionMode = DefaultSetSelectionMode.bind(object);
    object.setStrictMode = DefaultSetStrictSelectionMode.bind(object);
    object.onItemSelect = DefaultOnItemSelect.bind(object);
    object.isSelected = DefaultIsSelected.bind(object);
    object.onItemDeselect = DefaultOnItemDeselect.bind(object);
    object.resetSelections = DefaultResetSelections.bind(object);
    object.getSelectionSet = DefaultGetSelectionSet.bind(object);
    object.setSelectionSet = DefaultSetSelectionSet.bind(object);
    object.getCurrentSelections = DefaultGetCurrentSelections.bind(object);
    if (strictMode) {
        object.setStrictMode(true);
        var selectionSet_ = selectionSet;
        if (!selectionSet) {
            selectionSet_ = new Set();
        }
        object.useStrictMode = true;
        object.selectionItems = selectionSet_;
    }
    return object;
}
exports.bootSelectable = bootSelectable;
//# sourceMappingURL=ISelectable.js.map