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


function actionCreator<T extends string>(type: T): IAction<T>
function actionCreator<T extends string, P>(type: T, payload: P): IWithPayloadAction<T, P>
export function actionCreator<T extends string, P>(type: T, payload?: P) {
    if (payload === undefined) {
        return {
            type
        }
    } else {
        return {
            payload,
            type,
        }
    }
}
