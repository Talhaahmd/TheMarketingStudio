import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Contact 1 Section 1 - Reach out / Contact form

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SCROLL_ROTATE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
            fill="currentColor"
        />
    </svg>
);

const OFFICE_ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
    </svg>
);

const OFFICE_ICON_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 20V10L30 0H40V10L30 20H20Z" fill="currentColor" />
        <path d="M20 30V20H10L20 10L10 0H0V20H10L0 30V40H10L20 30Z" fill="currentColor" />
        <path d="M20 30L30 40H40V20H30L20 30Z" fill="currentColor" />
    </svg>
);

const ARROW_ICON_SM = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path
            d="M7.60201e-05 6.26559L0 2.03894e-05L1.49997 -4.58971e-07L1.50004 4.87322L9.12873 4.87329L6.16652 2.12355L7.22714 1.139L12 5.56948L7.22713 10L6.16652 9.01545L9.12876 6.26566L7.60201e-05 6.26559Z"
            fill="currentColor"
        />
    </svg>
);

const AVATARS = [
    { src: "/assets/imgs/template/avatar/avatar-10.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-11.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-12.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-13.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-14.webp", alt: "orisa", hiddenOnMobile: true },
];

export default function Section1() {
    return (
        <section className="sec-1-contact overflow-hidden pt-120">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-6 col-lg-7">
                        <div className="at-about-title-wrap mb-30">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">cONTACT US</span>
                                    <span className="text-2">cONTACT US</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h2 className="at-section-title reveal-text mb-lg-0 mb-4">
                                <RevealText>
                                    Ready to Build Your
                                    Next Growth System?
                                </RevealText>
                            </h2>
                            <div className="at-about-content d-flex flex-md-row flex-column justify-content-between gap-4 pt-40">
                                <div className="d-flex gap-4 w-lg-50">
                                    <div className="icon">
                                        {OFFICE_ICON_1}
                                    </div>
                                    <div>
                                        <h6 className="fw-600">Toronto</h6>
                                        <span className="fz-font-md neutral-500">
                                            Toronto, Ontario
                                            <br className="d-block" />
                                            Canada
                                            <br className="d-block" />
                                            Phone:{" "}
                                            <span className="neutral-900">
                                                <a href="tel:+14378794050">+1 (437) 879-4050</a>
                                            </span>
                                            <br className="d-block" />
                                            Email:{" "}
                                            <span className="neutral-900">
                                                <a href="mailto:info@stratxio.com">info@stratxio.com</a>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex gap-4 w-lg-50">
                                    <div className="icon">
                                        {OFFICE_ICON_2}
                                    </div>
                                    <div>
                                        <h6 className="fw-600">Lahore</h6>
                                        <span className="fz-font-md neutral-500">
                                            Lahore, Punjab
                                            <br className="d-block" />
                                            Pakistan
                                            <br className="d-block" />
                                            Phone:{" "}
                                            <span className="neutral-900">
                                                <a href="tel:+14378794050">+1 (437) 879-4050</a>
                                            </span>
                                            <br className="d-block" />
                                            Email:{" "}
                                            <span className="neutral-900">
                                                <a href="mailto:info@stratxio.com">info@stratxio.com</a>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5 col-md-8 ms-xxl-auto position-relative">
                        <div className="scroll-rotate d-md-inline-block d-none">
                            <div className="icon">
                                {SCROLL_ROTATE_SVG}
                            </div>
                        </div>
                        <div className="sec-2-home-5__avatars-row d-flex gap-2 py-3">
                            {AVATARS.map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`sec-2-home-5__avatar-sm at-offcanvas-gallery-img ${avatar.hiddenOnMobile ? "d-none d-md-block" : ""}`}
                                >
                                    <img
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        width={65}
                                        height={65}
                                        className="img-cover" loading="lazy" />
                                </div>
                            ))}
                        </div>
                        <h6 className="mb-4 fz-font-lg">
                            Tell us what you are building, where you want to grow, and what channels you want to scale. We will respond within 1–2 business days with a clear direction.
                        </h6>
                    </div>
                </div>
                <div className="row g-5 pt-120 align-items-end">
                    <div className="col-xxl-6 col-lg-7">
                        <h4>Book a Strategy Call</h4>
                        <form className="sec-4-about-form" action="#" method="post">
                            <div className="sec-4-about-form__field">
                                <input
                                    type="text"
                                    className="sec-4-about-form__input"
                                    name="name"
                                    placeholder="Your name *"
                                    required
                                    aria-label="Your name"
                                />
                            </div>
                            <div className="sec-4-about-form__field">
                                <input
                                    type="email"
                                    className="sec-4-about-form__input"
                                    name="email"
                                    placeholder="Your email *"
                                    required
                                    aria-label="Your email"
                                />
                            </div>
                            <div className="sec-4-about-form__field">
                                <input
                                    type="tel"
                                    className="sec-4-about-form__input"
                                    name="phone"
                                    placeholder="Your phone *"
                                    required
                                    aria-label="Your phone"
                                />
                            </div>
                            <div className="sec-4-about-form__field">
                                <textarea
                                    className="sec-4-about-form__input sec-4-about-form__textarea"
                                    name="message"
                                    placeholder="Your message *"
                                    rows={5}
                                    required
                                    aria-label="Your message"
                                />
                            </div>
                            <div className="sec-4-about-form__actions">
                                <button type="submit" className="sec-4-about-form__btn at-btn">
                                    <span>
                                        <span className="text-1 text-capitalize">Send Message</span>
                                        <span className="text-2 text-capitalize">Send Message</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </button>
                            </div>
                            <p className="sec-4-about-form__disclaimer">
                                By submitting, you agree to our{" "}
                                <Link to="#" className="sec-4-about-form__link">
                                    Terms
                                </Link>{" "}
                                and{" "}
                                <Link to="#" className="sec-4-about-form__link">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
