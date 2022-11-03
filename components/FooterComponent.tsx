function FooterComponent(): JSX.Element {
    return (
        <footer className="footer dark-mode">
            <div className="columns">
                <div className="column footer_column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Магазин</li>
                        <li>Клавиатуры</li>
                        <li>Мышки </li>
                        <li>Аксессуары</li>
                        <li>Инструменты и детали</li>
                        <li>Ремонт и апгрейд </li>
                    </ul>
                </div>
                <div className="column footer_column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Покупателям</li>
                        <li>Доставка и оплата</li>
                        <li>Гарантия и возврат</li>
                        <li>Политика конфиденциальности</li>
                        <li>Пользовательское соглашение</li>
                        <li>Договор-оферта</li>
                    </ul>
                </div>
                <div className="column footer_column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Где нас найти</li>
                        <li>Работаем без выходных</li>
                        <li>Каждый день 11:00 – 20:00</li>
                        <li>г. Москва, метро Театральная</li>
                        <li>Нижний Сусальный переулок, 5 </li>
                    </ul>
                </div>
                <div className="column footer_column">
                    <ul>
                        <li className="my-pad-bot-title is-size-4">Мы в соцсетях</li>
                        <li>Telegram</li>
                        <li>Instagram</li>
                        <li>VK</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
