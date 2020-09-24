const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner" style={{ display: "flex" }}>
            <div>
                <header className="major">
                    <h1>Hello, my name is Alessandro</h1>
                </header>
                <div className="content">
                    <p>I am a web developer,<br />
                    and welcome to my portfolio.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button next scrolly">Go to Projects</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ flex: "auto", textAlign: "center" }}>
                <img src="/static/images/logo2.png" className="profileImage" />
            </div>
        </div>
    </section>
)

export default Banner
