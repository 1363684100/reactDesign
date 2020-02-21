export function changeUserFn(name) {
    return { type:'CHOOSEUSER',username:name }
}

/*该action接收参数，在dispatch当前action的时候可以传递参数*/
export function changeCityFn(name) {
    return { type:'CHOOSECITY',city:name }
}

export function changeCarFn(name) {
    return { type:'CHOOSECAR',car:name }
}