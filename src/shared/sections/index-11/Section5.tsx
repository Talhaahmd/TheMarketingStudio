import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            d="M1 12L13 1M13 1H4M13 1V10"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SERVICES = [
    {
        num: "01",
        name: "Meta Ads",
        desc: "Performance-led Facebook and Instagram campaigns built around creative testing, audience insights, retargeting, and ROAS improvement.",
        img: "/assets/imgs/pages/home-11/img-8.webp",
        alt: "Meta Ads campaign results",
        featured: true,
        size: "lg",
        link: "/services-details",
        linkLabel: "Explore service",
    },
    {
        num: "02",
        name: "Motion Graphics &amp; UGC",
        desc: "Scroll-stopping videos, product explainers, branded edits, AI-enhanced visuals, and UGC-style content designed for ads and organic growth.",
        img: "/assets/imgs/pages/home-11/img-9.webp",
        alt: "Motion graphics and UGC content",
        featured: false,
        size: "lg",
        link: "/services-details",
        linkLabel: "Explore service",
    },
    {
        num: "03",
        name: "Google Ads",
        desc: "Search and conversion-focused campaigns that connect high-intent buyers with your offer through structured keywords, landing pages, and tracking.",
        img: null,
        alt: null,
        featured: false,
        size: "sm",
        link: "/services-details",
        linkLabel: "Explore",
    },
    {
        num: "04",
        name: "AI Content &amp; SEO",
        desc: "Search-optimized website content, blogs, landing pages, and AI-assisted content systems built to improve visibility and domain authority.",
        img: null,
        alt: null,
        featured: false,
        size: "sm",
        link: "/services-details",
        linkLabel: "Explore",
    },
    {
        num: "05",
        name: "Marketing Strategy",
        desc: "A clear growth roadmap covering positioning, content direction, paid media priorities, reporting structure, and campaign planning.",
        img: null,
        alt: null,
        featured: false,
        size: "sm",
        link: "/services-details",
        linkLabel: "Explore",
    },
];

export default function Section5() {
    return (
        <section className="sec-5-home-11" id="home-11-sec-5" aria-label="Our services">
            <div className="sec-5-home-11__bg-deco" aria-hidden="true"></div>
            <div className="sec-5-home-11__container">
                <header
                    className="sec-5-home-11__header at_fade_anim"
                    data-delay=".05"
                    data-fade-from="bottom"
                    data-fade-offset="30"
                >
                    <div className="sec-5-home-11__eyebrow d-inline-flex align-items-center gap-2">
                        <span className="sec-5-home-11__eyebrow-dot" aria-hidden="true"></span>
                        <span className="sec-5-home-11__eyebrow-text text-uppercase">What we do</span>
                    </div>
                    <h2 className="sec-5-home-11__title mt-3 mb-0 reveal-text">
                        <RevealText>
                            <span className="d-block">Creative and Performance,</span>
                            <span className="d-block">Under One Roof.</span>
                        </RevealText>
                    </h2>
                </header>

                <div className="sec-5-home-11__grid row g-4 g-xl-5 mt-4 mt-md-5">
                    {/* Large cards first (col-lg-6) */}
                    {SERVICES.filter((s) => s.size === "lg").map((service) => (
                        <div key={service.num} className="col-lg-6">
                            <article className="sec-5-home-11__card sec-5-home-11__card--lg">
                                <div className="sec-5-home-11__card-accent" aria-hidden="true"></div>
                                {service.img && (
                                    <div className="sec-5-home-11__card-media anim-zoomin-wrap">
                                        <img
                                            className="anim-zoomin"
                                            src={service.img}
                                            alt={service.alt ?? ""}
                                            width={800}
                                            height={520}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="sec-5-home-11__card-overlay" aria-hidden="true"></div>
                                        {service.featured && (
                                            <div className="sec-5-home-11__card-tag" aria-hidden="true">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="sec-5-home-11__card-body">
                                    <div className="sec-5-home-11__card-head">
                                        <span className="sec-5-home-11__card-num" aria-hidden="true">
                                            {service.num}
                                        </span>
                                        <h3
                                            className="sec-5-home-11__card-name"
                                            dangerouslySetInnerHTML={{ __html: service.name }}
                                        />
                                    </div>
                                    <p className="sec-5-home-11__card-desc mb-0">{service.desc}</p>
                                    <Link
                                        className="sec-5-home-11__card-link d-inline-flex align-items-center gap-2 mt-3"
                                        to={service.link}
                                        aria-label={`Learn about ${service.name.replace(/&amp;/g, "&")} service`}
                                    >
                                        <span>{service.linkLabel}</span>
                                        {ARROW_SVG}
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}

                    {/* Small cards (col-lg-4) */}
                    {SERVICES.filter((s) => s.size === "sm").map((service) => (
                        <div key={service.num} className="col-lg-4">
                            <article className="sec-5-home-11__card sec-5-home-11__card--sm">
                                <div className="sec-5-home-11__card-accent" aria-hidden="true"></div>
                                <div className="sec-5-home-11__card-body">
                                    <div className="sec-5-home-11__card-head">
                                        <span className="sec-5-home-11__card-num" aria-hidden="true">
                                            {service.num}
                                        </span>
                                        <h3
                                            className="sec-5-home-11__card-name"
                                            dangerouslySetInnerHTML={{ __html: service.name }}
                                        />
                                    </div>
                                    <p className="sec-5-home-11__card-desc mb-0">{service.desc}</p>
                                    <Link
                                        className="sec-5-home-11__card-link d-inline-flex align-items-center gap-2 mt-3"
                                        to={service.link}
                                        aria-label={`Learn about ${service.name.replace(/&amp;/g, "&")} service`}
                                    >
                                        <span>{service.linkLabel}</span>
                                        {ARROW_SVG}
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
