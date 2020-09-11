import { BehaviorSubject } from 'rxjs';
export default interface ISelectable<T> {
    useStrictMode: boolean;
    selectionMode: boolean;
    selectionModeChange: BehaviorSubject<boolean>;
    selectionItems: Set<T>;
    currentSelections: Set<T>;
    setSelectionMode: SetSelectionModeFunc;
    isSelected: IsSelectedFunc<T>;
    setStrictMode: SetStrictSelectionModeFunc;
    onItemSelect: ToggleSelectionFunc<T>;
    onItemDeselect: ToggleSelectionFunc<T>;
    setSelectionSet: SetSelectionSetFunc<T>;
    getSelectionSet: GetSelectionSetFunc<T>;
    getCurrentSelections: GetCurrentSelectionsFunc<T>;
    resetSelections: ResetSelectionFunc;
}
export declare function DefaultGetCurrentSelections<T>(): Set<T> | null;
export declare function DefaultGetSelectionSet<T>(): Set<T> | null;
export declare function DefaultIsSelected<T>(item: T): boolean | null;
export declare function DefaultOnItemDeselect<T>(item: T): void | null;
export declare function DefaultOnItemSelect<T>(item: T): void | null;
export declare function DefaultResetSelections(): void | null;
export declare function DefaultSetSelectionMode(enabled: boolean, reset?: boolean): boolean;
export declare function DefaultSetSelectionSet<T>(set: Set<T>): void | null;
export declare function DefaultSetStrictSelectionMode<T>(strict: boolean, selectionSet?: Set<T>, reset?: boolean): boolean | null;
export declare function bootSelectable<T>(object: ISelectable<T>, strictMode?: boolean, selectionSet?: Set<T>): ISelectable<T>;
export interface GetCurrentSelectionsFunc<T> {
    (): Set<T>;
}
export interface GetSelectionSetFunc<T> {
    (): Set<T>;
}
export interface IsSelectedFunc<T> {
    (item: T): boolean;
}
export interface ResetSelectionFunc {
    (): void;
}
export interface SetSelectionModeFunc {
    (enabled: boolean, reset?: boolean): boolean;
}
export interface SetSelectionSetFunc<T> {
    (set: Set<T>): void;
}
export interface SetStrictSelectionModeFunc {
    (strict: boolean): boolean;
}
export interface ToggleSelectionFunc<T> {
    (item: T): void | null;
}
