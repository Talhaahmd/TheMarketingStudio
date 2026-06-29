import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import { useProjects } from "@/hooks/useProjects";
import type { ProjectCard } from "@/types/project";

const ARROW_SVG = (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PLAY_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
    </svg>
);

function VideoItem({ item }: { item: ProjectCard }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    function handlePlay() {
        const vid = videoRef.current;
        if (!vid) return;
        vid.play().catch(() => {/* autoplay blocked — fine */});
        setPlaying(true);
    }

    function handleVideoEnd() { setPlaying(false); }
    function handleVideoPause() { setPlaying(false); }

    if (!item.hover_video_url) {
        return (
            <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor">
                <Link className="cursor-hide" to={`/portfolio/${item.slug}`}>
                    <img
                        data-speed=".8"
                        className="w-100"
                        src={item.thumbnail_url}
                        alt={item.title}
                        width={800}
                        height={520}
                        loading="lazy"
                    />
                    <span className="sec-4-home-11__thumb-title changeless" aria-hidden="true">
                        {item.category}
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor" style={{ position: "relative", overflow: "hidden" }}>
            <video
                ref={videoRef}
                className="w-100"
                src={item.hover_video_url}
                poster={item.thumbnail_url}
                onEnded={handleVideoEnd}
                onPause={handleVideoPause}
                playsInline
                style={{ display: "block", width: "100%", height: "auto" }}
            />

            {/* Play overlay — visible only when not playing */}
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
                        background: "rgba(0,0,0,0.28)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                    }}
                >
                    <span
                        style={{
                            width: 68,
                            height: 68,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            border: "1.5px solid rgba(255,255,255,0.45)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            transition: "background 0.2s",
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
    const { projects, loading } = useProjects();

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
                    {loading && (
                        <p className="neutral-500 fz-font-lg py-4">Loading projects…</p>
                    )}

                    {projects.map((item, idx) => (
                        <div
                            key={item.id ?? idx}
                            className="mg-portfolio-item anim-zoomin-wrap sec-4-home-11__loop-item mb-55"
                            data-category={item.category}
                        >
                            <VideoItem item={item} />

                            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                                <div className="w-md-75">
                                    <h3 className="h5 cs-portfolio-title at-title-anim fix mr-20 at-ff-sequel-semi-bold">
                                        <Link to={`/portfolio/${item.slug}`} className="at-title-text">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    {item.tagline && (
                                        <p className="fz-font-lg neutral-500">{item.tagline}</p>
                                    )}
                                </div>
                                <div className="cs-portfolio-tag">
                                    <ul className="d-flex justify-content-md-end flex-wrap text-nowrap">
                                        {(item.tags ?? []).map((tag) => (
                                            <li key={tag}>
                                                <Link to="#">{tag}</Link>
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
