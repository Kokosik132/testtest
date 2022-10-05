import {
    changeMarket,
    fullScreen,
    pen,
    phone,
    record, settings,
    smsError,
    smsWarning,
    star,
    subtitle,
    troubleshoot
} from "../constants";

export let arraySettings = [
    {
        title: 'Дошка для конференції',
        id: 1,
        subTitle: true,
        underline: false,
        img: pen
    }, {
        title: 'Записувати зустріч',
        id: 2,
        subTitle: false,
        underline: true,
        img:  record
    }, {
        title: 'Змінити макет',
        id: 3,
        subTitle: false,
        underline: false,
        img:  changeMarket
    },{
        title: 'Повноекранний режим',
        id: 4,
        subTitle: false,
        underline: false,
        img:  fullScreen
    },{
        title: 'Застосувати візуальні ефекти',
        id: 5,
        subTitle: false,
        underline: false,
        img:  star
    },{
        title: 'Увімкнути субтитри',
        id: 6,
        subTitle: false,
        underline: false,
        img:  subtitle
    },{
        title: 'Використовувати телефон для передачі звуку',
        id: 7,
        subTitle: false,
        underline: true,
        img:  phone
    },{
        title: 'Повідомити про проблему',
        id: 8,
        subTitle: false,
        underline: false,
        img:  smsWarning
    },{
        title: 'Повідомити про проблему',
        id: 9,
        subTitle: false,
        underline: false,
        img:  smsError
    },{
        title: 'Вирішення проблем і довідка',
        id: 10,
        subTitle: false,
        underline: false,
        img:  troubleshoot
    },{
        title: 'Налаштування',
        id: 11,
        subTitle: false,
        underline: false,
        img:  settings
    },
]
