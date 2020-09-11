import ISelectableItem, { OnSelectFunc, OnDeselectFunc } from "./ISelectableItem";
import ISelectable from "./ISelectable";
export default class SelectableItem<T> implements ISelectableItem<T> {
    collection: ISelectable<T>;
    key: any;
    selectionMode: boolean;
    isSelected: boolean;
    onSelect: OnSelectFunc;
    onDeselect: OnDeselectFunc;
    constructor(collection: ISelectable<T>, key: T);
}
