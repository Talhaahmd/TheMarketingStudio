import { useEffect } from "react";
import PortfolioCard1, { type PortfolioCard1Tag } from "@/shared/cards/PortfolioCard1";
import PortfolioFilterSort from "./PortfolioFilterSort";
import { useProjects } from "@/hooks/useProjects";

type PortfolioItem = {
    classList: string;
    category: string;
    link: string;
    img: string;
    title: string;
    description: string;
    tags: PortfolioCard1Tag[];
};

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    const { projects, loading, error } = useProjects();

    // Build filter options from unique categories in loaded data
    const filterOptions = (() => {
        const seen = new Set<string>();
        const options: { value: string; label: string }[] = [{ value: "All", label: "All Work" }];
        for (const p of projects) {
            if (!seen.has(p.category)) {
                seen.add(p.category);
                options.push({ value: p.category, label: p.category });
            }
        }
        return options;
    })();

    // Map Supabase ProjectCard → PortfolioItem expected by PortfolioCard1
    const items: PortfolioItem[] = projects.map((p) => ({
        classList: "col-xxl-6 col-lg-7",
        category: p.category,
        link: `/portfolio/${p.slug}`,
        img: p.thumbnail_url,
        title: p.title,
        description: p.tagline ?? "",
        tags: p.tags.map((t) => ({ label: t, href: "#" })),
    }));

    // Re-initialize GSAP effects for cards that rendered after initial effect pass
    useEffect(() => {
        if (loading || projects.length === 0) return;
        let cancelled = false;

        const timer = setTimeout(async () => {
            if (cancelled) return;
            try {
                const gsap = (await import("gsap")).default;
                const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
                gsap.registerPlugin(ScrollTrigger);

                // anim-zoomin: only process elements not yet initialized
                document.querySelectorAll<HTMLElement>(".anim-zoomin:not([data-gsap-zoomin])").forEach((el) => {
                    el.setAttribute("data-gsap-zoomin", "1");
                    const wrap = (el.closest(".anim-zoomin-wrap") as HTMLElement | null) ?? el;
                    if (wrap !== el) wrap.style.overflow = "hidden";
                    gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 100%" } }).from(el, {
                        duration: 2,
                        autoAlpha: 0,
                        scale: 1.2,
                        ease: "power2.out",
                        clearProps: "all",
                    });
                });

                // parallax: only process elements not yet initialized
                document.querySelectorAll<HTMLElement>("[data-parallax]:not([data-at-parallax-done])").forEach((el) => {
                    el.setAttribute("data-at-parallax-done", "true");
                    const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.5");
                    const range = parseFloat(el.dataset.parallaxRange ?? "120");
                    ScrollTrigger.create({
                        trigger: el, start: "top bottom", end: "bottom top",
                        scrub: 1, invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            gsap.set(el, { y: (self.progress - 0.5) * 2 * range * speed, force3D: true });
                        },
                    });
                });

                ScrollTrigger.refresh();
            } catch { /* fail silently — GSAP unavailable */ }
        }, 100);

        return () => { cancelled = true; clearTimeout(timer); };
    }, [loading, projects.length]);

    return (
        <section className="sec-1-portfolio-1 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">Highlighted Projects</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                        <p className="fz-font-lg neutral-900 text-lg-end">
                            A thoughtful selection of work shaped by simplicity and meaningful outcomes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                {error && (
                    <p className="fz-font-lg neutral-900 text-center py-5">
                        Could not load projects. Please try again later.
                    </p>
                )}
                {loading && (
                    <div className="row g-4 justify-content-center">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="col-xxl-6 col-lg-7">
                                <div className="mg-portfolio-item">
                                    <div
                                        className="mg-portfolio-thumb"
                                        style={{ background: "var(--neutral-100, #f0f0f0)", aspectRatio: "4/3", borderRadius: 4 }}
                                    />
                                    <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center justify-content-between" style={{ marginTop: 12 }}>
                                        <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 20, width: "60%", borderRadius: 4 }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {!loading && !error && (
                    <PortfolioFilterSort items={items} filterOptions={filterOptions}>
                        {(visibleItems, { hasMore, onLoadMore }) => (
                            <div className="row g-4 justify-content-center">
                                {visibleItems.length === 0 && (
                                    <div className="col-12 text-center py-5">
                                        <p className="fz-font-lg neutral-900">No projects found.</p>
                                    </div>
                                )}
                                {visibleItems.map((item, idx) => (
                                    <PortfolioCard1
                                        key={`${item.title}-${idx}`}
                                        classList={item.classList}
                                        link={item.link}
                                        img={item.img}
                                        title={item.title}
                                        description={item.description}
                                        tags={item.tags}
                                    />
                                ))}
                                {hasMore && (
                                    <div className="col-12 text-center">
                                        <button type="button" className="at-btn" onClick={onLoadMore}>
                                            <span>
                                                <span className="text-1">LOAD MORE PROJECTS</span>
                                                <span className="text-2">LOAD MORE PROJECTS</span>
                                            </span>
                                            <i>
                                                {ARROW_SVG}
                                                {ARROW_SVG}
                                            </i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </PortfolioFilterSort>
                )}
            </div>
        </section>
    );
}
