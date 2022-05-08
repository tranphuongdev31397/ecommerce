import React from 'react';
import FooterBot from './FooterBot';
import FooterTop from './FooterTop';

function Footer() {
    return (
        <footer className="bg-black text-white footer">
            <section className="footer__top py-4 container mx-auto">
                <FooterTop />
            </section>
            <hr className="border-t mx-6" />
            <section className="footer__bottom container mx-auto py-2 ">
                <FooterBot />
            </section>
        </footer>
    );
}
export default Footer;
