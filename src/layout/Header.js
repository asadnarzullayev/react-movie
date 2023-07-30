import "../index.css";

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper header__nav">
                <a href="http://localhost:3000/" className="brand-logo">
                    React
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="http://localhost:3000/">Movie</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
