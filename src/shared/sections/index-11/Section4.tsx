import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PLAY_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
    </svg>
);

interface WorkItem {
    title: string;
    category: string;
    tags: string[];
    tagline: string;
    videoUrl: string;
    posterUrl: string;
    projectUrl: string;
    slug: string;
}

const WORK_ITEMS: WorkItem[] = [
    {
        title: "Krevix",
        category: "Motion Design",
        tags: ["Motion Graphics", "Brand Identity", "Video"],
        tagline: "Brand motion package and visual identity for a creative agency.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744665/Krevix_gmv1he.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744665/Krevix_gmv1he.jpg",
        projectUrl: "https://krevix.agency",
        slug: "krevix",
    },
    {
        title: "Health AI",
        category: "AI Content",
        tags: ["AI Content", "Motion Graphics", "Product Video"],
        tagline: "AI-driven content and product video for a health technology platform.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/HealthAi_rnbyx4.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744663/HealthAi_rnbyx4.jpg",
        projectUrl: "https://health.ai",
        slug: "health-ai",
    },
    {
        title: "Cursa — Courses",
        category: "UGC Content",
        tags: ["UGC Content", "2D Animation", "Social Ads"],
        tagline: "UGC-style video content and animated explainers for an online learning platform.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744656/Courses_rg79hw.mov",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744656/Courses_rg79hw.jpg",
        projectUrl: "https://cursa.app/en",
        slug: "cursa-courses",
    },
    {
        title: "Finans Mobile App",
        category: "Motion Design",
        tags: ["Motion Graphics", "App Demo", "Product Video"],
        tagline: "Motion graphics and product demo video for a fintech mobile application.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744670/Finans_q49edg.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744670/Finans_q49edg.jpg",
        projectUrl: "https://fiscal.ai",
        slug: "finans-mobile-app",
    },
    {
        title: "Octave — Project Management",
        category: "Motion Design",
        tags: ["Motion Graphics", "SaaS Video", "Brand Film"],
        tagline: "Brand film and motion content for a project management SaaS product.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744670/SkyAI50_lmh5q1.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744670/SkyAI50_lmh5q1.jpg",
        projectUrl: "https://www.octave.com",
        slug: "octave-project-management",
    },
    {
        title: "Optima — Ecommerce Brand",
        category: "Meta Ads",
        tags: ["Meta Ads", "UGC Content", "Ecommerce"],
        tagline: "Meta ad creatives and UGC content for a premium ecommerce brand.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/Optima_t54j07.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744663/Optima_t54j07.jpg",
        projectUrl: "https://optimacotton.com",
        slug: "optima-ecommerce",
    },
    {
        title: "CryptoVerse Consultancy",
        category: "Motion Design",
        tags: ["Motion Graphics", "Brand Video", "Consultancy"],
        tagline: "Visual identity and motion package for a blockchain consultancy firm.",
        videoUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/v1782744663/CryptonVerse_dmntpn.mp4",
        posterUrl: "https://res.cloudinary.com/dt93sahp2/video/upload/so_0/v1782744663/CryptonVerse_dmntpn.jpg",
        projectUrl: "https://www.cryptoverselawyers.io",
        slug: "cryptoverse-consultancy",
    },
];

function VideoItem({ item }: { item: WorkItem }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    function handlePlay() {
        const vid = videoRef.current;
        if (!vid) return;
        vid.play().catch(() => {/* blocked */});
        setPlaying(true);
    }

    function handleStop() { setPlaying(false); }

    return (
        <div
            className="mg-portfolio-thumb anim-zoomin not-hide-cursor"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <video
                ref={videoRef}
                className="w-100"
                src={item.videoUrl}
                poster={item.posterUrl}
                onEnded={handleStop}
                onPause={handleStop}
                playsInline
                style={{ display: "block", width: "100%", height: "auto" }}
            />

            {/* Frosted-glass play button — hidden while playing */}
            {!playing && (
                <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${item.title}`}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.30)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                    }}
                >
                    <span
                        style={{
                            width: 72,
                            height: 72,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.13)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1.5px solid rgba(255,255,255,0.45)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                        }}
                    >
                        {PLAY_ICON}
                    </span>
                </button>
            )}

            <span className="sec-4-home-11__thumb-title changeless" aria-hidden="true">
                {item.category}
            </span>
        </div>
    );
}

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
                            <VideoItem item={item} />

                            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                                <div className="w-md-75">
                                    <h3 className="h5 cs-portfolio-title at-title-anim fix mr-20 at-ff-sequel-semi-bold">
                                        <a
                                            href={item.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="at-title-text"
                                        >
                                            {item.title}
                                        </a>
                                    </h3>
                                    <p className="fz-font-lg neutral-500">{item.tagline}</p>
                                </div>
                                <div className="cs-portfolio-tag">
                                    <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
                                        {item.tags.map((tag) => (
                                            <li key={tag}>
                                                <span>{tag}</span>
                                            </li>
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
