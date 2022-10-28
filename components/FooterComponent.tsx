import type { NextPage } from "next"

function FooterComponent(): JSX.Element {
    return (
        <footer className="footer dark-mode">
            <div className="content has-text-centered">
                <p>
                    Awesome Keyboards
                    <br />
                    The website content is licensed{" "}
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                        CC BY NC SA 4.0
                    </a>
                    .
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent
