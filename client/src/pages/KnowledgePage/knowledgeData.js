import silverAndroid from './../../img/silverAndroid.webp';
import goldAndroid from './../../img/goldAndroid.webp';
import platinumAndroid from './../../img/platinumAndroid.png';
import silverApple from './../../img/silverApple.webp';
import goldApple from './../../img/goldApple.webp';
import platinumApple from './../../img/platinumApple.webp';
import mac from './../../img/mac.svg';
import apple from './../../img/apple.svg';
import windows from './../../img/windows.svg';
import android from './../../img/android.svg';

export const services = [
    {
        id: 1,
        name: 'Годовые пакеты',
        path: 'year-services/',
        description: '',
        os: [
            {
                name: 'Android',
                image: android,
                inner: [
                    {
                        photo: silverAndroid,
                        name: 'Silver Card Android',
                        price: '800',
                        include: [
                            {
                                name: 'Тех. поддержка',
                                description: 'Прошивка, обновления, исправление системных сбоев, настройка' +
                                    ' приложений на протяжении 12 месяцев. Поддержка оказывается в магазине, или на' +
                                    ' горячей линии по номеру 044-503-70-30',
                            },
                            {
                                name: 'Первоначальная настройка',
                                description: 'Активация, настройка языка, даты, времени, интернета',
                            },
                            {
                                name: 'Обновление ПО до последней версии',
                                description: 'Обновление систем безопасности, добавление новых функций',
                            },
                            {
                                name: 'Настройка Учетной записи Google',
                                description: 'Активация синхронизации с Google. Восстановление старой учетной записи' +
                                    ' если это возможно',
                            },
                            {
                                name: 'Миграция данных',
                                description: 'Перенос информации со старого телефона. Перенос осуществляется с' +
                                    ' ОДНОГО старого телефона. Максимальный обьем переноса - 20гб, все что больше' +
                                    ' оплачивается отдельно',
                            },
                            {
                                name: 'Настройка браузеров',
                                description: 'Установка Chrome, Firefox, Opera и т.д. Синхронизация закладок и' +
                                    ' истории с учетной записью Google',
                            },
                            {
                                name: 'Настройка аудео и видео плееров',
                                description: 'Установка всех существующих форматов и кодеков аудио/видео, без' +
                                    ' которых большенство медиа-контента не будет воспроизводиться',
                            },
                            {
                                name: 'Настройка офисных программ',
                                description: 'Установка Docs, Sheets, Presentation, Adobe Acrobat. Все "вордовские",' +
                                    ' "екселевские" и т.д. файы будет открываться автоматически в нужной программе.' +
                                    ' Без них даже обычный "вордовский" документ не откроется.',
                            },
                            {
                                name: 'Файловые менеджеры',
                                description: 'Установка архиватоа и альтернативных файовых менеджеров',
                            },
                            {
                                name: 'Блокировщик рекламы',
                                description: 'Лицензионный антибанер AdLock 12мес.',
                            },
                            {
                                name: 'IPTV',
                                description: 'Подписка на SweetTV 3мес',
                            },
                        ]
                    },
                    {
                        photo: goldAndroid,
                        name: 'Gold Card Android',
                        price: '1500',
                        include: [
                            {
                                name: 'Подбор лучших приложений',
                                description: 'Клиент называет функцию, например "хочу редактирофать фотки" - тех' +
                                    ' ставит 3-4 топовых фоторедактора.',
                            },
                            {
                                name: 'Електронная коммерция',
                                description: 'Настройка GooglePay, банкингов и других платежных систем',
                            },
                            {
                                name: 'Оптимизация ОС',
                                description: 'Настройка энергопотребления, отключение ненужных фоновых процессов,' +
                                    ' настройка автоочистки кэша, настройка потребления трафика и т.д.',
                            },
                            {
                                name: 'Облачные сервисы',
                                description: 'Настройка доступа к облаку для загрузки/выгрузки файлов' +
                                    ' НЕ ВКЛЮЧЕТ В СЕБЯ синхронизацию с тругими устройствами и резервное копирование',
                            },
                            {
                                name: 'Антивирус',
                                description: 'Лицензионный антивирус Avast Mobile Security 12мес',
                            },
                            {
                                name: 'Megogo IPTV',
                                description: 'Подписка на Megogo Смартфон 1мес',
                            },
                        ]
                    },
                    {
                        photo: platinumAndroid,
                        name: 'Platinum Card Android',
                        price: '2000',
                        include: [
                            {
                                name: 'Настройка медиа-сервисов',
                                description: 'Настраиваем подписки на сервисы AppleMusic, Spotify, Netflix, YouTube' +
                                    ' т.д.',
                            },
                            {
                                name: 'Синхронизация всех устройств',
                                description: 'Данные клиента всегда будут доступны на любом из его устройств',
                            },
                            {
                                name: 'Резервное копирование',
                                description: 'Автоматические резервные копии данных в облако, для сохранности в' +
                                    ' случае утери, или поломки телефона',
                            },
                            {
                                name: 'Megogo IPTV',
                                description: 'Подписка на Megogo Смартфон 3мес',
                            },
                        ]
                    },
                ]
            },
            {
                name: 'iOS',
                image: apple,
                inner: [
                    {
                        photo: silverApple,
                        name: 'Silver Card iOS',
                        price: '800',
                        include: []
                    },
                    {
                        photo: goldApple,
                        name: 'Gold Card iOS',
                        price: '1500',
                        include: []
                    },
                    {
                        photo: platinumApple,
                        name: 'Platinum Card iOS',
                        price: '2000',
                        include: []
                    },
                ]
            },
            {
                name: 'MacOS',
                image: mac,
                inner: [
                    {
                        photo: silverAndroid,
                        name: 'Silver Card MacOS',
                        price: '800',
                        include: []
                    },
                    {
                        photo: silverAndroid,
                        name: 'Gold Card MacOS',
                        price: '1500',
                        include: []
                    },
                    {
                        photo: silverAndroid,
                        name: 'Platinum Card MacOS',
                        price: '2000',
                        include: []
                    },
                ]
            },
            {
                name: 'Windows',
                image: windows,
                inner: [
                    {
                        photo: silverAndroid,
                        name: 'Silver Card Windows',
                        price: '800',
                        include: []
                    },
                    {
                        photo: silverAndroid,
                        name: 'Gold Card Windows',
                        price: '1500',
                        include: []
                    },
                    {
                        photo: silverAndroid,
                        name: 'Platinum Card Windows',
                        price: '2000',
                        include: []
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Разовые пакеты',
        description: '',
        os: [
            {
                name: 'Android',
                image: android,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'iOS',
                image: apple,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'MacOS',
                image: mac,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'Windows',
                image: windows,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Разовые',
        description: '',
        os: []
    },
    {
        id: 4,
        name: 'Лиц ПО',
        description: '',
        os: []
    },
    {
        id: 5,
        name: 'Space',
        description: '',
        os: []
    },
]