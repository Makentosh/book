export function ScrollTo(selector: string) {
    let anchor: HTMLAnchorElement | null = document.querySelector(selector)

    if (!anchor) return

    window.location.hash = selector

    window.scrollTo({
        left: 0,
        top: anchor.offsetTop,
        behavior: 'smooth'
    })
}


export const EMAIL_PATTER_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;



type validationMessages = {
    email: {
        required: string
        pattern: string
    }
}
export const VALIDATION_MESSAGES: validationMessages = {
    email: {
        required: 'Поле обязательное для заполнения',
        pattern: 'Ведите корректный email, например example@gmail.com'
    }
}
