export const uniqueId = (() => {
    let seed = 0
    return (prefix = '') => {
        return `${prefix ? `${prefix}_` : ''}${seed++}`
    }
})()