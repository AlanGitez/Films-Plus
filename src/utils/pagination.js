export const moveLeft = (element) => {
    if (!element.current.scrollLeft) return;
    element.current.scrollLeft -= element.current.clientWidth;
}


export const moveRigth = (element) => {
    element.current.scrollLeft += element.current.clientWidth;
}