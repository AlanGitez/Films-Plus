export const infoHover = (info, main) => {
    return main.current.addEventListener("mouseover", (e) => {
        info.current.style.display = "inherit";
        setTimeout(() => {
            
        }, 1000);
    })
};