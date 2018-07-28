export interface IAction<T extends string> {
    type: T
}

export interface IWithPayloadAction<T extends string, P> extends IAction<T> {
    payload: P
}

interface IActionCreatorsMapObject {
    [actionCreator: string]: (...args: any[]) => any
}
export type ActionUnion<A extends IActionCreatorsMapObject> = ReturnType<A[keyof A]>
