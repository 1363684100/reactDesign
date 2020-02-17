export default function username(state='',action){
    switch (action.type) {
        case 'CHOOSEUSER':
            return action.username
        default:
            return state
    }
}