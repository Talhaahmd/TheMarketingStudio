import RevealText from "@/shared/effects/RevealText";

// FAQs section 3 - Scroll sections with accordions by topic

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

type FaqItem = {
    id: string;
    num: string;
    question: string;
    answer: string;
    open: boolean;
};

type FaqSection = {
    number: string;
    title: React.ReactNode;
    description: string;
    accordionId: string;
    items: FaqItem[];
};

const FAQ_SECTIONS: FaqSection[] = [
    {
        number: "01",
        title: "About STRATX",
        description:
            "Essential questions about who we are, what we do, and who we work with.",
        accordionId: "accordionFaq1",
        items: [
            {
                id: "collapseFaq1-1",
                num: "1",
                question: "What is STRATX?",
                answer:
                    "STRATX is an AI Marketing Studio that helps brands grow through motion graphics, UGC content, Meta ads, Google ads, and SEO — all powered by artificial intelligence.",
                open: true,
            },
            {
                id: "collapseFaq1-2",
                num: "2",
                question: "Who do you typically work with?",
                answer:
                    "We work with e-commerce brands, SaaS companies, local businesses, and consumer brands looking to scale their digital marketing with AI-powered strategies.",
                open: false,
            },
            {
                id: "collapseFaq1-3",
                num: "3",
                question: "Where are you based?",
                answer: "We have offices in Toronto, Canada and Lahore, Pakistan, and work with clients globally across all time zones.",
                open: false,
            },
            {
                id: "collapseFaq1-4",
                num: "4",
                question: "What makes STRATX different from other agencies?",
                answer:
                    "We use AI throughout every part of our process — from creative ideation and content production to campaign optimisation and reporting — delivering faster results at a fraction of the traditional agency cost.",
                open: false,
            },
        ],
    },
    {
        number: "02",
        title: (
            <>
                Services <br />
                and Solutions
            </>
        ),
        description:
            "Details about our AI marketing services, ad management, and content capabilities.",
        accordionId: "accordionFaq2",
        items: [
            {
                id: "collapseFaq2-1",
                num: "1",
                question: "What services does STRATX offer?",
                answer:
                    "We offer Meta Ads, Google Ads, AI motion graphics, UGC content production, AI-written SEO content, and full-funnel digital marketing strategy.",
                open: true,
            },
            {
                id: "collapseFaq2-2",
                num: "2",
                question: "Do you manage Meta and Google ads campaigns end-to-end?",
                answer: "Yes, we handle everything from audience research and creative production to campaign setup, launch, optimisation, and weekly performance reporting.",
                open: false,
            },
            {
                id: "collapseFaq2-3",
                num: "3",
                question: "What is AI-generated UGC content?",
                answer: "UGC (User-Generated Content) is ad creative that looks authentic and native on social feeds. We use AI tools to produce UGC-style videos at scale — faster and cheaper than hiring traditional content creators.",
                open: false,
            },
            {
                id: "collapseFaq2-4",
                num: "4",
                question: "Can you do both paid ads and SEO?",
                answer: "Absolutely. Many of our clients run paid and organic together for a full-funnel approach — we manage both and make sure they work in sync.",
                open: false,
            },
        ],
    },
    {
        number: "03",
        title: "Process & Results",
        description:
            "How we work, what results to expect, and how long it takes to see growth.",
        accordionId: "accordionFaq3",
        items: [
            {
                id: "collapseFaq3-1",
                num: "1",
                question: "How do we get started?",
                answer:
                    "It starts with a free discovery call. We learn about your brand, goals, and current marketing. Then we build a tailored AI marketing strategy and kick off within 5–7 business days.",
                open: true,
            },
            {
                id: "collapseFaq3-2",
                num: "2",
                question: "How soon can I expect results from paid ads?",
                answer:
                    "Most clients see early results within the first 2–4 weeks. We optimise continuously and typically hit peak efficiency within 60–90 days.",
                open: false,
            },
            {
                id: "collapseFaq3-3",
                num: "3",
                question: "How long does SEO take?",
                answer: "SEO is a longer-term investment. Most clients see meaningful organic traffic growth within 3–6 months, with compounding results over time.",
                open: false,
            },
            {
                id: "collapseFaq3-4",
                num: "4",
                question: "How do you communicate and report?",
                answer: "We send weekly performance reports with key metrics (ROAS, CPL, traffic, rankings), and you have direct Slack/email access to your account manager at all times.",
                open: false,
            },
        ],
    },
    {
        number: "04",
        title: (
            <>
                Pricing <br />
                and Support
            </>
        ),
        description:
            "Pricing, contracts, and what ongoing support looks like.",
        accordionId: "accordionFaq4",
        items: [
            {
                id: "collapseFaq4-1",
                num: "1",
                question: "How does STRATX price its services?",
                answer:
                    "We offer monthly retainer plans starting at $497/month. Each plan is scoped to your goals. We also offer custom packages for brands with specific needs.",
                open: true,
            },
            {
                id: "collapseFaq4-2",
                num: "2",
                question: "Are there long-term contracts?",
                answer: "No lock-in contracts. We work month-to-month, though most clients stay long-term because they see results. We earn your business every month.",
                open: false,
            },
            {
                id: "collapseFaq4-3",
                num: "3",
                question: "What ad spend budget do I need?",
                answer: "For Meta and Google ads, we recommend a minimum of $1,000/month in ad spend separate from our management fee. Better results come with $2,500–$5,000+ budgets.",
                open: false,
            },
            {
                id: "collapseFaq4-4",
                num: "4",
                question: "Do you offer ongoing support after onboarding?",
                answer: "Yes — support is included in all plans. You get ongoing creative production, campaign management, reporting, and strategy calls every month.",
                open: false,
            },
        ],
    },
];

export default function Section3() {
    return (
        <section className="sec-3-faqs p-relative z-n1 pb-100">
            <div className="scroll-section">
                <div className="wrapper">
                    {FAQ_SECTIONS.map((section) => (
                        <div
                            key={section.accordionId}
                            className="item bg-neutral-0 d-block"
                        >
                            <div className="pt-100 border-top-100">
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-4 h-100">
                                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                                <span className="text-uppercase">
                                                    <span className="text-1">
                                                        [ {section.number} ]
                                                    </span>
                                                    <span className="text-2">
                                                        [ {section.number} ]
                                                    </span>
                                                </span>
                                                <i>
                                                    {ARROW_SVG}
                                                    {ARROW_SVG}
                                                </i>
                                            </span>
                                            <h3 className="reveal-text">
                                                <RevealText>{section.title}</RevealText>
                                            </h3>
                                            <h6 className="fw-500 mb-0 fz-font-lg">
                                                {section.description}
                                            </h6>
                                            <div className="section-title-pin"></div>
                                        </div>
                                        <div className="col-lg-7 offset-lg-1 p-relative">
                                            <div
                                                className="accordion p-relative z-index-3"
                                                id={section.accordionId}
                                            >
                                                {section.items.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="at-faq-item bg-neutral-0 border-100 rounded-4"
                                                    >
                                                        <div className="at-faq-header d-flex gap-2">
                                                            <div className="box-number">
                                                                <span className="at-faq-number">
                                                                    {item.num}
                                                                </span>
                                                            </div>
                                                            <button
                                                                className={`at-faq-button${item.open ? "" : " collapsed"}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#${item.id}`}
                                                                aria-expanded={item.open}
                                                                aria-controls={item.id}
                                                            >
                                                                {item.question}
                                                            </button>
                                                        </div>
                                                        <div
                                                            id={item.id}
                                                            className={`at-faq-collapse collapse${item.open ? " show" : ""}`}
                                                            data-bs-parent={`#${section.accordionId}`}
                                                        >
                                                            <div className="at-faq-body">
                                                                <p>{item.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
