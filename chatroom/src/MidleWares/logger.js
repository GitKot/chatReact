export default store => next => action => {
    console.log('dispatchisng', action)
    next(action)
}