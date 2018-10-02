export default store => next => action => {
    console.log('MathRandom')
    if(!action.generateId) return next(action)
    next({
        ...action,
        randomId:(Date.now() + Math.random()).toString()
    })
}