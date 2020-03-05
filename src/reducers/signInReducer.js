export const signInReducer = (state, {field, value}) => {
    return [...state, {
        [field]: value
    }]
}