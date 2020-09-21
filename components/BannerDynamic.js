const BannerDynamic = ({ title, content }) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    </section>
)

export default BannerDynamic