const BannerDynamic = ({ title, content, imageUrl }) => (
    <section id="banner" className="style2" style={{ backgroundImage: ! imageUrl ? `` : `url(static/images/` + imageUrl + `)` }}>
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            <div className="content">
                <p>{ !content ? "Lorem ipsum dolor sit amet." : content }</p>
            </div>
        </div>
    </section>
)

export default BannerDynamic