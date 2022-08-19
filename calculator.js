function calculator(btn) {
    const pannel = document.querySelector(".cal-answer-body")

    switch (btn) {
        case 'reset':
            pannel.innerHTML = 0
            break;

        case del:
            let str = pannel.innerHTML
            str = str.substring(0, str.length - 1);
            pannel.innerHTML = str
            break;

        case 'ans':
            const ans = eval(pannel.innerHTML)
            pannel.innerHTML = ans
            break;

        default:
            if (pannel.innerHTML == 0 && Number.isInteger(btn)) {
                pannel.innerHTML = btn
            }
            else {
                pannel.innerHTML += btn
            }
            break;
    }
}

function range() {
    const range = Number(document.querySelector(".range").value);

    if (range === 0) {
        theme1()
        return
    }

    if (range === 50) {
        theme2()
        return
    }

    theme3()
    
}

async function theme1() {
    document.body.classList.remove("theme-dark", "theme-ultra-light")
    document.body.classList.add("theme-light")
}

function theme2() {
    document.body.classList.remove("theme-light", "theme-dark")
    document.body.classList.add("theme-ultra-light")
}

function theme3() {
    document.body.classList.remove("theme-light", "theme-ultra-light")
    document.body.classList.add("theme-dark")
}
