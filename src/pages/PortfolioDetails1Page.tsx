import { useParams, Navigate } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/portfolio-details-1/Section1";
import Section2 from "@/shared/sections/portfolio-details-1/Section2";
import { useProject, useRelatedProjects } from "@/hooks/useProjects";
import { ErrorBoundary } from "@/components/ErrorBoundary";

function LoadingSkeleton() {
    return (
        <div className="overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row g-3 align-items-end">
                    <div className="col-md-9">
                        <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 80, borderRadius: 4, marginBottom: 16 }} />
                        <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 28, width: "50%", borderRadius: 4 }} />
                    </div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-5" />
                    <div className="col-lg-7">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="d-flex justify-content-between border-bottom-100 py-4">
                                <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 18, width: "30%", borderRadius: 4 }} />
                                <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 18, width: "40%", borderRadius: 4 }} />
                            </div>
                        ))}
                        <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 100, borderRadius: 4, marginTop: 40 }} />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div style={{ background: "var(--neutral-100, #f0f0f0)", height: 400, borderRadius: 4 }} />
            </div>
        </div>
    );
}

export default function PortfolioDetails1Page() {
    const { slug = "" } = useParams<{ slug: string }>();
    const { project, loading, error } = useProject(slug);
    const related = useRelatedProjects(project?.related_slugs ?? []);

    if (loading) {
        return (
            <>
                <PageMeta title="Loading… | Motion Studio" />
                <LoadingSkeleton />
            </>
        );
    }

    if (error || !project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <ErrorBoundary>
            <PageMeta
                title={project.meta_title ?? `${project.title} | Motion Studio`}
                description={project.meta_description ?? project.overview ?? undefined}
            />
            <Section1 project={project} />
            <Section2 related={related} />
        </ErrorBoundary>
    );
}
