export default function city(state = '无锡', action) {
    switch (action.type) {
        case 'CHOOSECITY':
            return action.city
        default:
            return state
    }
}