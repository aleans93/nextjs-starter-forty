const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Mario Rossi" required />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="mario.rossi@gmail.com" required />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Your Message" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">aleans93@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(+39) 340 86 58 386</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Via del Grillo, 1<br />
                        00062, Bracciano<br />
                        Rome, Italy</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
