"use strict";
exports.__esModule = true;
exports.bootSelectableItem = exports.OnDeselect = exports.OnSelect = void 0;
function OnSelect() {
    if (!this.selectionMode || this.isSelected)
        return null;
    this.collection.onItemSelect(this.key);
}
exports.OnSelect = OnSelect;
function OnDeselect() {
    if (!this.selectionMode || !this.isSelected)
        return null;
    this.collection.onItemDeselect(this.key);
}
exports.OnDeselect = OnDeselect;
function bootSelectableItem(object, collection, key) {
    object.collection = collection;
    object.key = key;
    object.selectionMode = false;
    object.isSelected = false;
    if (object.collection.selectionModeChange) {
        object.collection.selectionModeChange.subscribe((function (mode) {
            object.selectionMode = mode;
            if (!mode) {
                object.isSelected = false;
            }
        }).bind(object));
    }
    object.onSelect = OnSelect.bind(object);
    object.onDeselect = OnDeselect.bind(object);
    return object;
}
exports.bootSelectableItem = bootSelectableItem;
//# sourceMappingURL=ISelectableItem.js.map