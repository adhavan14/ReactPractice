export const NextButton = ({nextFunction, imageIndex}) => {

    return (
        <button onClick={nextFunction} disabled = {imageIndex >= 3}>Next</button>
    )
}

export const PrevButton = ({prevFunction, imageIndex}) => {

    return (
        <button onClick={prevFunction} disabled = {imageIndex <= 0}>Prev</button>
    )
}