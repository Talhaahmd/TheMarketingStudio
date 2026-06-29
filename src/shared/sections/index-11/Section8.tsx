export default function Section8() {
    return (
        <section className="sec-8-home-11 pb-110" aria-label="Call to action">
            <div className="sec-8-home-11__bg" aria-hidden="true">
                <div className="anim-zoomin-wrap sec-8-home-11__bg-wrap position-relative">
                    <img
                        className="anim-zoomin sec-8-home-11__bg-img"
                        src="/assets/imgs/pages/home-11/bg.webp"
                        alt="orisa"
                        loading="lazy"
                        decoding="async"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="sec-8-home-11__bg-overlay" aria-hidden="true"></div>
            </div>

            <div className="sec-8-home-11__inner">
                {/* Scroll-driven typography rows */}
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-right mb-0">
                        Meta &nbsp; Ads &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-3.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; Google &nbsp; Ads &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-7.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp;--&nbsp;
                    </p>
                </div>
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-left mb-0">
                        --&nbsp; Motion &nbsp; Design &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-5.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; UGC &nbsp; Content &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-9.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp;--&nbsp;
                    </p>
                </div>
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-right mb-0">
                        SEO &nbsp; Growth &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-11.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; Creative &nbsp; Testing &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-13.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp;--&nbsp;
                    </p>
                </div>
            </div>
        </section>
    );
}
