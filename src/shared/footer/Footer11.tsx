import { Link } from "react-router-dom";
// Footer 11 (Home 11) - Motion & Video Creative Studio, decorative lines bg, multi-location, socials with home-8 icons

const NAV_LINKS_1 = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
];

const NAV_LINKS_2 = [
    { label: "Contact", href: "/contact" },
    { label: "Team", href: "/team" },
    { label: "FAQs", href: "/faqs" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
];

const LOCATIONS = [
    { city: "Toronto", address: "Toronto, Ontario, Canada" },
    { city: "Lahore", address: "Lahore, Punjab, Pakistan" },
];

const NAV_ARROW_IMAGE = {
    src: "/assets/imgs/pages/home-8/footer-8-nav-arrow.svg",
    alt: "orisa",
    width: 14,
    height: 13,
};

const SUBSCRIBE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path
            d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

export default function Footer11() {
    return (
        <footer className="footer-11 changeless overflow-hidden">
            <div className="footer-11__bg" aria-hidden="true">
                <div className="footer-11__bg-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div className="container-2200 px-lg-5 px-3 position-relative">
                {/* Mid section: Nav + Contact + Newsletter + Social */}
                <div className="footer-11__mid">
                    <div className="row g-5 align-items-start">
                        {/* Column 1: Navigation */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="row g-4 footer-11__nav-grid">
                                <div className="col-6">
                                    <nav className="footer-11__nav-list" aria-label="Footer primary">
                                        {NAV_LINKS_1.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-11__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-11__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="col-6">
                                    <nav className="footer-11__nav-list" aria-label="Footer secondary">
                                        {NAV_LINKS_2.map((link) => (
                                            <Link
                                                key={link.label}
                                                className="footer-11__nav-link"
                                                to={link.href}
                                            >
                                                <span>{link.label}</span>
                                                <img
                                                    className="footer-11__nav-arrow"
                                                    src={NAV_ARROW_IMAGE.src}
                                                    alt={NAV_ARROW_IMAGE.alt}
                                                    width={NAV_ARROW_IMAGE.width}
                                                    height={NAV_ARROW_IMAGE.height}
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    style={{ width: "auto", height: "auto" }}
                                                />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Contact + Locations */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-11__contact-hours d-flex flex-column gap-4">
                                <div className="footer-11__contact">
                                    <p className="footer-11__contact-line mb-1">
                                        <Link to="tel:+14378794050">+1 (437) 879-4050</Link>
                                    </p>
                                    <p className="footer-11__contact-line mb-3">
                                        <Link to="mailto:info@stratxio.com">info@stratxio.com</Link>
                                    </p>
                                </div>
                                <div className="footer-11__locations">
                                    {LOCATIONS.map((loc) => (
                                        <div key={loc.city}>
                                            <p className="footer-11__location-city">{loc.city}</p>
                                            <p className="footer-11__location-addr">
                                                {loc.address.split("<br>").map((line, i) => (
                                                    <span key={i}>
                                                        {i > 0 && <br />}
                                                        {line}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="footer-11__hours">
                                    <p className="footer-11__hours-label mb-1">Mo - Sa</p>
                                    <p className="footer-11__hours-value mb-0">9am - 5pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Newsletter */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-11__newsletter">
                                <p className="footer-11__newsletter-title mb-3 at_fade_anim" data-delay="0.1">
                                    AI marketing insights<br />from STRATX Studio
                                </p>
                                <form
                                    className="footer-11__form at_fade_anim"
                                    data-delay="0.2"
                                    action="#"
                                    method="post"
                                >
                                    <label className="visually-hidden" htmlFor="footer11Email">
                                        Email
                                    </label>
                                    <input
                                        id="footer11Email"
                                        className="footer-11__input"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="footer-11__submit" type="submit">
                                        <span>
                                            <span className="text-1">Subscribe Now</span>
                                            <span className="text-2">Subscribe Now</span>
                                        </span>
                                        <i aria-hidden="true">
                                            {SUBSCRIBE_ARROW_SVG}
                                            {SUBSCRIBE_ARROW_SVG}
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-11__bottom">
                    <div className="footer-11__bottom-inner d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div className="d-flex flex-wrap align-items-center gap-3 gap-xxl-4">
                            <span className="footer-11__copy">STRATX &copy; 2026</span>
                            <span className="footer-11__tagline d-none d-sm-inline">
                                AI Marketing Studio
                            </span>
                        </div>
                        <span className="footer-11__since">[ Since 2019 ]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
