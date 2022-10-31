import type { NextPage } from "next"

function FooterComponent(): JSX.Element {
    return (
        <footer className="footer dark-mode">
            <div className="columns">
                <div className="column my-pad-left">
                    <ul>
                        <li className="my-pad-bot-title  is-size-4">Магазин</li>
                        <li className="my-pad-bot">Клавиатуры</li>
                        <li className="my-pad-bot">Мышки </li>
                        <li className="my-pad-bot">Аксессуары</li>
                        <li className="my-pad-bot">Инструменты и детали</li>
                        <li className="my-pad-bot">Ремонт и апгрейд </li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Покупателям</li>
                        <li className="my-pad-bot">Доставка и оплата</li>
                        <li className="my-pad-bot">Гарантия и возврат</li>
                        <li className="my-pad-bot">Политика конфиденциальности</li>
                        <li className="my-pad-bot">Пользовательское соглашение</li>
                        <li className="my-pad-bot">Договор-оферта</li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Где нас найти</li>
                        <li className="my-pad-bot">Работаем без выходных</li>
                        <li className="my-pad-bot">Каждый день 11:00 – 20:00</li>
                        <li className="my-pad-bot">г. Москва, метро Театральная</li>
                        <li className="my-pad-bot">Нижний Сусальный переулок, 5 </li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Мы в соцсетях</li>
                        <li className="my-pad-bot">Telegram</li>
                        <li className="my-pad-bot">Instagram</li>
                        <li className="my-pad-bot">VK</li>
                        <li className="my-pad-bot">Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
