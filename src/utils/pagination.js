export const moveLeft = (element) => {
    if (!element.current.scrollLeft) return;
    element.current.scrollLeft -= element.current.scrollWidth;
}


export const moveRigth = (element) => {
    element.current.scrollLeft += element.current.scrollWidth;
}