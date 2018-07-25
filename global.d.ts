// export as namespace director;
// export = director
// declare function director(option: any): { init: any }

// type ClassNamesFn = (option: any) => { init: any }
//
// type ClassNamesExport = ClassNamesFn & { default: ClassNamesFn }
//
// declare

interface IRouterOption {
    [index: string]: (...args: any[]) => void
}

declare module 'director/build/director' {
    export function Router(option: IRouterOption): { init: (route?: string | null) => void }
}