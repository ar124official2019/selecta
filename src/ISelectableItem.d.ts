import ISelectable from "./ISelectable";
export default interface ISelectableItem<T> {
    collection: ISelectable<T>;
    key: any;
    selectionMode: boolean;
    isSelected: boolean;
    onSelect: OnSelectFunc;
    onDeselect: OnDeselectFunc;
}
export declare function OnSelect(): void | null;
export declare function OnDeselect(): void | null;
export declare function bootSelectableItem<T>(object: ISelectableItem<T>, collection: ISelectable<T>, key: T): ISelectableItem<T>;
export interface OnSelectFunc {
    (): void | null;
}
export interface OnDeselectFunc {
    (): void | null;
}
