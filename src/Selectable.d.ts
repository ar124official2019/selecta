import ISelectable, { SetSelectionModeFunc, SetStrictSelectionModeFunc, ToggleSelectionFunc, IsSelectedFunc, ResetSelectionFunc, SetSelectionSetFunc, GetSelectionSetFunc, GetCurrentSelectionsFunc } from "./ISelectable";
export default class Selectable<T> implements ISelectable<T> {
    useStrictMode: boolean;
    selectionMode: boolean;
    selectionItems: Set<T>;
    currentSelections: Set<T>;
    selectionModeChange: any;
    setSelectionMode: SetSelectionModeFunc;
    setStrictMode: SetStrictSelectionModeFunc;
    onItemSelect: ToggleSelectionFunc<T>;
    onItemDeselect: ToggleSelectionFunc<T>;
    isSelected: IsSelectedFunc<T>;
    resetSelections: ResetSelectionFunc;
    setSelectionSet: SetSelectionSetFunc<T>;
    getSelectionSet: GetSelectionSetFunc<T>;
    getCurrentSelections: GetCurrentSelectionsFunc<T>;
    constructor(strictMode?: boolean, selectionSet?: Set<T>);
}
