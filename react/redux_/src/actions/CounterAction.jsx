export let increment = () => {
    return {
        type: "INCREMENT"
    }
}

export let decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export let incrementTimeOut = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment())
        }, 3000);
    }
}