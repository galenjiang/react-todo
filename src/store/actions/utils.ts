export interface IAction<T extends string> {
    type: T
}

export interface IWithPayloadAction<T extends string, P> extends IAction<T> {
    payload: P
}

interface IActionCreatorsMapObject {
    [actionCreator: string]: (...args: any[]) => any
}


type MapReturnType<T extends IActionCreatorsMapObject> = {
    [K in keyof T]: ReturnType<T[K]>
}

export type ActionMap<T extends IActionCreatorsMapObject> = MapReturnType<T>

// export type ActionUnion<A extends IActionCreatorsMapObject> = ReturnType<A[keyof A]>
export type ActionUnion<A extends IActionCreatorsMapObject> = ActionMap<A>[keyof A]


export function actionCreator<T extends string>(type: T): IAction<T>
export function actionCreator<T extends string, P>(type: T, payload: P): IWithPayloadAction<T, P>
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
