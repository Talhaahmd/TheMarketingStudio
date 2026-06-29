import { useMemo } from 'react'
import type { Project, ProjectCard } from '@/types/project'
import { STATIC_PROJECTS } from '@/data/projects'

function toCard(p: Project): ProjectCard {
  return {
    id: p.id,
    slug: p.slug,
    sort_order: p.sort_order,
    title: p.title,
    tagline: p.tagline,
    category: p.category,
    tags: p.tags,
    thumbnail_url: p.thumbnail_url,
    hover_video_url: p.hover_video_url,
    is_featured: p.is_featured,
  }
}

export function useProjects(category?: string) {
  const projects = useMemo<ProjectCard[]>(() => {
    const filtered = category && category !== 'All'
      ? STATIC_PROJECTS.filter((p) => p.category === category && p.published)
      : STATIC_PROJECTS.filter((p) => p.published)
    return filtered
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(toCard)
  }, [category])

  return { projects, loading: false, error: null }
}

export function useProject(slug: string) {
  const project = useMemo<Project | null>(
    () => STATIC_PROJECTS.find((p) => p.slug === slug && p.published) ?? null,
    [slug],
  )

  return { project, loading: false, error: null }
}

export function useRelatedProjects(slugs: string[]) {
  return useMemo<ProjectCard[]>(
    () =>
      STATIC_PROJECTS.filter((p) => slugs.includes(p.slug) && p.published).map(toCard),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slugs.join(',')],
  )
}

export function useCategories() {
  return useMemo<string[]>(() => {
    const unique = [...new Set(STATIC_PROJECTS.filter((p) => p.published).map((p) => p.category))]
    return ['All', ...unique]
  }, [])
}
