import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <Head>
            <title>Web Developer Alessandro Anselmi's Portfolio</title>
            <meta name="description" content="" />
        </Head>
        <div>
            <Banner />
            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/screenshot-damon-creazioni.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>01</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Damon Creazioni</h3>
                            <p>#eCommerce</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/screenshot-studio-25.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>02</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Studio 25 – Produzioni Visive</h3>
                            <p>#Website</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/screenshot-ristorante-zi-titta.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>03</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Ristorante Zi Titta</h3>
                            <p>#Website #Social</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/screenshot-fisioterapia-de-simone.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>04</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Fisioterapia De Simone</h3>
                            <p>#Website #Social</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/screenshot-maeva-beauty.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>05</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Maeva Beauty</h3>
                            <p>#Website</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/screenshot-futura-gardening.jpg')`}}>
                        <div class="work-nr">
                            <div>
                                <span>06</span>
                            </div>
                        </div>
                        <header className="major">
                            <h3>Futura Gardening</h3>
                            <p>#Website</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Websites, Web Apps &amp; eCommerce Development</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get in touch</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </Layout>
)
