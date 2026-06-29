import { Link } from "react-router-dom";
import SwiperDynamic from "@/shared/components/SwiperDynamic";
import type { Project, GalleryItem } from "@/types/project";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="d-flex justify-content-between border-bottom-100 py-4">
            <p className="fz-font-md neutral-900 mb-0">{label}</p>
            <p className="fz-font-lg fw-600 mb-0 neutral-900">{value}</p>
        </div>
    );
}

function SectionLabel({ label }: { label: string }) {
    return (
        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
            <ul className="sec-2-home-5__list list-unstyled mb-0">
                <li className="sec-2-home-5__list-item">
                    <h6 className="mb-0 fw-600">{label}</h6>
                </li>
            </ul>
        </div>
    );
}

function SlideItem({ item, title }: { item: GalleryItem; title: string }) {
    return (
        <div className="about-me-slider-thumb at-item-anime marque">
            {item.type === "video" ? (
                <video
                    src={item.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 rounded-4"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            ) : (
                <img
                    src={item.url}
                    alt={item.caption ?? title}
                    width={770}
                    height={560}
                    className="w-100 rounded-4"
                    loading="lazy"
                />
            )}
        </div>
    );
}

interface Props {
    project: Project;
}

export default function Section1({ project }: Props) {
    const gallery = project.gallery ?? [];
    const swiperSlides = gallery.length > 0 ? gallery : [{ type: "image" as const, url: project.thumbnail_url }];
    const fullWidthImage = gallery.find((g) => g.full_width) ?? null;
    const nonFullWidth = gallery.filter((g) => !g.full_width);
    const heroImage = project.hero_image_url ?? project.thumbnail_url;

    return (
        <section className="sec-1-portfolio-details-1 overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row g-3 align-items-end">
                    <div className="col-md-9">
                        <h1 className="fz-ds-1 lh-1 fw-500 d-flex mb-0">
                            {project.title}<sup className="fz-80 fw-400 top-0">®</sup>
                        </h1>
                        <h5 className="fw-600 mb-0">{project.tagline ?? project.category}</h5>
                    </div>
                    <div className="col-md-3 ms-auto text-md-end">
                        {project.project_url ? (
                            <a
                                href={project.project_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-bottom-900 d-inline-block"
                            >
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">live demo</span>
                                        <span className="text-2">live demo</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </a>
                        ) : (
                            <Link to="#" className="border-bottom-900 d-inline-block" onClick={(e) => e.preventDefault()}>
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">live demo</span>
                                        <span className="text-2">live demo</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </Link>
                        )}
                    </div>
                    <div className="col-12">
                        <div className="border-bottom-100 pb-30" />
                    </div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-5">
                        <SectionLabel label="Introduction" />
                    </div>
                    <div className="col-lg-7">
                        {project.client && <InfoRow label="Client" value={project.client} />}
                        {project.year && <InfoRow label="Release Date" value={String(project.year)} />}
                        {project.role && <InfoRow label="Role" value={project.role} />}
                        {project.duration && <InfoRow label="Duration" value={project.duration} />}
                        {project.overview && (
                            <p className="fz-font-2xl fw-400 neutral-900 mt-40">
                                {project.overview}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <SwiperDynamic
                className="swiper about-me-slider-active pt-60 mb-60 at-item-anime-area"
                slidesPerView={2}
                spaceBetween={24}
                loop
                breakpoints={{
                    576: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 1, spaceBetween: 24 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                }}
            >
                {swiperSlides.map((slide, index) => (
                    <SlideItem key={index} item={slide} title={project.title} />
                ))}
            </SwiperDynamic>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <SectionLabel label="Challenge & Approach" />
                    </div>
                    <div className="col-lg-7">
                        {project.challenge && (
                            <p className="fz-font-xl neutral-900 mt-40">
                                {project.challenge}
                            </p>
                        )}
                        {project.approach && (
                            <p className="fz-font-xl neutral-900 mt-40">
                                {project.approach}
                            </p>
                        )}
                        {project.deliverables.length > 0 && (
                            <ul className="ps-4">
                                {project.deliverables.map((d, i) => (
                                    <li key={i} className="neutral-950">{d}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <img
                            src={fullWidthImage?.url ?? heroImage}
                            alt={fullWidthImage?.caption ?? project.title}
                            width={1200}
                            height={700}
                            className="w-100"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-5">
                        <SectionLabel label="The Solution" />
                    </div>
                    <div className="col-lg-7">
                        {project.outcome && (
                            <p className="fz-font-xl neutral-900 mt-40">
                                {project.outcome}
                            </p>
                        )}
                        {project.services.length > 0 && (
                            <>
                                <h6 className="py-3">Key Services</h6>
                                <ul className="ps-4">
                                    {project.services.map((s, i) => (
                                        <li key={i} className="neutral-950">{s}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5">
                        <img
                            src={nonFullWidth[0]?.url ?? project.thumbnail_url}
                            alt={nonFullWidth[0]?.caption ?? project.title}
                            width={600}
                            height={400}
                            className="w-100"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-md-6 py-5">
                        <img
                            src={nonFullWidth[1]?.url ?? project.thumbnail_url}
                            alt={nonFullWidth[1]?.caption ?? project.title}
                            width={600}
                            height={400}
                            className="w-100"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-5">
                        <SectionLabel label="Outcome" />
                    </div>
                    <div className="col-lg-7">
                        {project.outcome && (
                            <p className="fz-font-xl fw-500 neutral-900 mt-40">
                                {project.outcome}
                            </p>
                        )}
                        {project.testimonial_quote && (
                            <>
                                <div className="py-3 border-bottom-100" />
                                <div className="testimonial-author d-flex align-items-start mb-0 gap-4 pt-60 w-75">
                                    <div>
                                        <div className="testimonial-left-img size-50 rounded-3 overflow-hidden">
                                            <img
                                                src={project.testimonial_avatar ?? "/assets/imgs/template/avatar/avatar-20.webp"}
                                                alt={project.testimonial_author ?? ""}
                                                width={50}
                                                height={50}
                                                className="img-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p className="fz-3xl neutral-900 fw-400">
                                            &quot;{project.testimonial_quote}&quot;
                                        </p>
                                        {project.testimonial_author && (
                                            <h6 className="testimonial-content-author-name fw-600 mb-0 fz-font-md">
                                                {project.testimonial_author}
                                            </h6>
                                        )}
                                        {project.testimonial_role && (
                                            <p className="testimonial-content-author-position m-0 fz-font-label">
                                                {project.testimonial_role}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
