import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

function HeaderComponent(): JSX.Element {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item my-title-is-2">
                        Awesome Keyboards
                    </a>
                </Link>
                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/keyboards">
                        <a className="navbar-item is-size-5">Клавиатуры</a>
                    </Link>

                    <a className="navbar-item is-size-5">Мыши</a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link is-size-5">Аксессуары</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item is-size-6">Кейкапы</a>
                            <a className="navbar-item is-size-6">Свитчи</a>
                            <a className="navbar-item is-size-6">Коврики</a>
                            <a className="navbar-item is-size-6">Подставки</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Войти</strong>
                            </a>
                            <a className="button is-light">Корзина</a>
                            <a className="button is-light">Избранное</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent
test