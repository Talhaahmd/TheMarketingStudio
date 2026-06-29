import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface WorkItem {
    title: string;
    category: string;
    tags: string[];
    tagline: string;
    videoUrl: string;
    slug: string;
}

const WORK_ITEMS: WorkItem[] = [
    {
        title: "Krevix",
        category: "Motion Design",
        tags: ["Motion Graphics", "Brand Identity", "Video"],
        tagline: "Brand motion package and visual identity for a creative agency.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744665/Krevix_gmv1he.mp4",
        slug: "krevix",
    },
    {
        title: "Health AI",
        category: "AI Content",
        tags: ["AI Content", "Motion Graphics", "Product Video"],
        tagline: "AI-driven content and product video for a health technology platform.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/HealthAi_rnbyx4.mp4",
        slug: "health-ai",
    },
    {
        title: "Cursa — Courses",
        category: "UGC Content",
        tags: ["UGC Content", "2D Animation", "Social Ads"],
        tagline: "UGC-style video content and animated explainers for an online learning platform.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744656/Courses_rg79hw.mov",
        slug: "cursa-courses",
    },
    {
        title: "Finans Mobile App",
        category: "Motion Design",
        tags: ["Motion Graphics", "App Demo", "Product Video"],
        tagline: "Motion graphics and product demo video for a fintech mobile application.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744670/Finans_q49edg.mp4",
        slug: "finans-mobile-app",
    },
    {
        title: "Octave — Project Management",
        category: "Motion Design",
        tags: ["Motion Graphics", "SaaS Video", "Brand Film"],
        tagline: "Brand film and motion content for a project management SaaS product.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744670/SkyAI50_lmh5q1.mp4",
        slug: "octave-project-management",
    },
    {
        title: "Optima — Ecommerce Brand",
        category: "Meta Ads",
        tags: ["Meta Ads", "UGC Content", "Ecommerce"],
        tagline: "Meta ad creatives and UGC content for a premium ecommerce brand.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/Optima_t54j07.mp4",
        slug: "optima-ecommerce",
    },
    {
        title: "CryptoVerse Consultancy",
        category: "Motion Design",
        tags: ["Motion Graphics", "Brand Video", "Consultancy"],
        tagline: "Visual identity and motion package for a blockchain consultancy firm.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/CryptonVerse_dmntpn.mp4",
        slug: "cryptoverse-consultancy",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-11" id="home-11-sec-4" aria-label="Featured works">
            <div className="sec-4-home-11__container">
                <header className="sec-4-home-11__header row g-4 g-xl-5 align-items-end justify-content-between">
                    <div className="col-xl-6 col-lg-7">
                        <div className="sec-4-home-11__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay=".05">
                            <span className="sec-4-home-11__eyebrow-dot" aria-hidden="true"></span>
                            <span className="sec-4-home-11__eyebrow-text text-uppercase">Featured works</span>
                        </div>
                        <h2 className="sec-4-home-11__title mt-3 mb-0 reveal-text">
                            <RevealText>
                                <span className="d-block">Selected Work Built Around</span>
                                <span className="d-block">Real Business Outcomes</span>
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <p className="sec-4-home-11__intro mb-0 at_fade_anim" data-delay=".15">
                            A curated look at paid ad campaigns, content systems, motion projects, and SEO work designed to improve reach, lower acquisition costs, and increase revenue.
                        </p>
                        <Link
                            className="sec-4-home-11__view-all d-inline-flex align-items-center gap-2 mt-4 at_fade_anim"
                            to="/portfolio"
                            data-delay=".2"
                        >
                            <span>View All Case Studies</span>
                            {ARROW_SVG}
                        </Link>
                    </div>
                </header>

                <div className="sec-4-home-11__list mt-5">
                    {WORK_ITEMS.map((item, idx) => (
                        <div
                            key={idx}
                            className="mg-portfolio-item anim-zoomin-wrap sec-4-home-11__loop-item mb-55"
                            data-category={item.category}
                        >
                            <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor" style={{ position: "relative", overflow: "hidden" }}>
                                <Link to={`/portfolio/${item.slug}`} className="cursor-hide d-block" tabIndex={-1} aria-hidden="true">
                                    <video
                                        className="w-100"
                                        src={item.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{ display: "block", width: "100%", height: "auto", pointerEvents: "none" }}
                                    />
                                </Link>
                                <span className="sec-4-home-11__thumb-title changeless" aria-hidden="true">
                                    {item.category}
                                </span>
                            </div>

                            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                                <div className="w-md-75">
                                    <h3 className="h5 cs-portfolio-title at-title-anim fix mr-20 at-ff-sequel-semi-bold">
                                        <Link to={`/portfolio/${item.slug}`} className="at-title-text">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="fz-font-lg neutral-500">{item.tagline}</p>
                                </div>
                                <div className="cs-portfolio-tag">
                                    <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
                                        {item.tags.map((tag) => (
                                            <li key={tag}><span>{tag}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
