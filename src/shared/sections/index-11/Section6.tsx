import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const STEPS = [
    {
        num: "01",
        title: "Research &amp; Positioning",
        body: "We study your brand, audience, competitors, offer, and current marketing performance to identify the specific areas where investment will generate the best return.",
        tags: ["Brand audit", "Competitor analysis", "Channel strategy"],
        img: "/assets/imgs/pages/home-11/img-11.webp",
        delay: ".1",
    },
    {
        num: "02",
        title: "Creative Strategy",
        body: "We define campaign angles, content themes, hooks, visual direction, ad concepts, and platform-specific execution plans before a single asset is produced.",
        tags: ["Content strategy", "Ad concepts", "Platform planning"],
        img: "/assets/imgs/pages/home-11/img-12.webp",
        delay: ".12",
    },
    {
        num: "03",
        title: "Production &amp; Launch",
        body: "Motion graphics, UGC-style creatives, landing copy, and SEO assets are produced and deployed. Campaigns go live with structured audience targeting and conversion tracking in place.",
        tags: ["Motion graphics", "UGC content", "Campaign launch"],
        img: "/assets/imgs/pages/home-11/img-13.webp",
        delay: ".14",
    },
    {
        num: "04",
        title: "Scale, Report &amp; Improve",
        body: "Winning campaigns are scaled with structured budget allocation and creative testing. You receive weekly reports showing what is working, what needs improvement, and where the next opportunity is.",
        tags: ["Scaling", "Weekly reports", "Creative testing"],
        img: "/assets/imgs/pages/home-11/img-14.webp",
        delay: ".16",
    },
];

export default function Section6() {
    return (
        <section className="sec-6-home-11" id="home-11-sec-6" aria-label="Our process">
            <div className="sec-6-home-11__container">
                {/* Sticky heading column */}
                <div className="sec-6-home-11__layout row g-5 g-xl-6 section-fix">
                    <div className="col-lg-5">
                        <div className="sec-6-home-11__title-block section-title-pin">
                            <div className="sec-6-home-11__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay=".05">
                                <span className="sec-6-home-11__eyebrow-dot" aria-hidden="true"></span>
                                <span className="sec-6-home-11__eyebrow-text text-uppercase">How we work</span>
                            </div>
                            <h2 className="sec-6-home-11__title mt-4 mb-0 reveal-text">
                                <RevealText>
                                    <span className="d-block">A Clear Process</span>
                                    <span className="d-block">From Strategy</span>
                                    <span className="d-block">to Scale.</span>
                                </RevealText>
                            </h2>
                            <p className="sec-6-home-11__intro mt-4 at_fade_anim" data-delay=".2">
                                From the first strategy brief to campaign launch and optimization, every project stays focused, measurable, and built around outcomes — not just activity.
                            </p>
                            <Link
                                className="sec-6-home-11__cta d-inline-flex align-items-center gap-3 mt-4 at_fade_anim"
                                to="/about"
                                data-delay=".25"
                            >
                                <span>Learn about our approach</span>
                                <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M1 12L13 1M13 1H4M13 1V10"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Steps column (scroll stacking -- same pattern as home-6 sec-2) */}
                    <div className="col-lg-7">
                        <div className="scroll-section vertical-section section scroll-active-item sec-6-home-11__scroll-stack">
                            <div className="wrapper">
                                <ol className="sec-6-home-11__steps list list-unstyled mb-0" aria-label="Studio process steps">
                                    {STEPS.map((step) => (
                                        <li
                                            key={step.num}
                                            className="sec-6-home-11__step item at_fade_anim"
                                            data-delay={step.delay}
                                        >
                                            <div className="sec-6-home-11__step-inner">
                                                <div className="sec-6-home-11__step-head d-flex align-items-start gap-4">
                                                    <span className="sec-6-home-11__step-num" aria-label={`Step ${step.num}`}>
                                                        {step.num}
                                                    </span>
                                                    <h3
                                                        className="sec-6-home-11__step-title mb-0"
                                                        dangerouslySetInnerHTML={{ __html: step.title }}
                                                    />
                                                </div>
                                                <p className="sec-6-home-11__step-body mt-3 mb-0">{step.body}</p>
                                                <div className="sec-6-home-11__step-tags d-flex flex-wrap gap-2 mt-3" aria-hidden="true">
                                                    {step.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="sec-6-home-11__tag text-uppercase"
                                                            dangerouslySetInnerHTML={{ __html: tag }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="sec-6-home-11__step-media">
                                                <img
                                                    src={step.img}
                                                    alt="orisa"
                                                    width={640}
                                                    height={400}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
