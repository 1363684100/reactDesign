export default function car(state = '', action) {
    switch (action.type) {
        case 'CHOOSECAR':
            return action.car
        default:
            return state
    }
}