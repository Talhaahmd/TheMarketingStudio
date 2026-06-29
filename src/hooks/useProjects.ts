import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Project, ProjectCard } from '@/types/project'

// ── All projects for the Work listing page ─────────────────
export function useProjects(category?: string) {
  const [projects, setProjects] = useState<ProjectCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProjects() {
      setLoading(true)
      setError(null)

      let query = supabase
        .from('projects')
        .select('id, slug, sort_order, title, tagline, category, tags, thumbnail_url, hover_video_url, is_featured')
        .eq('published', true)
        .order('sort_order', { ascending: true })

      if (category && category !== 'All') {
        query = query.eq('category', category)
      }

      const { data, error: fetchError } = await query

      if (!cancelled) {
        if (fetchError) setError(fetchError.message)
        else setProjects((data as ProjectCard[]) ?? [])
        setLoading(false)
      }
    }

    fetchProjects()
    return () => { cancelled = true }
  }, [category])

  return { projects, loading, error }
}

// ── Single project for the detail page ────────────────────
export function useProject(slug: string) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    async function fetchProject() {
      setLoading(true)
      setError(null)

      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (!cancelled) {
        if (fetchError) setError(fetchError.message)
        else setProject((data as Project) ?? null)
        setLoading(false)
      }
    }

    fetchProject()
    return () => { cancelled = true }
  }, [slug])

  return { project, loading, error }
}

// ── Related projects (used at bottom of detail page) ──────
export function useRelatedProjects(slugs: string[]) {
  const [projects, setProjects] = useState<ProjectCard[]>([])

  useEffect(() => {
    if (!slugs.length) return
    let cancelled = false

    async function fetchRelated() {
      const { data } = await supabase
        .from('projects')
        .select('id, slug, sort_order, title, tagline, category, tags, thumbnail_url, hover_video_url, is_featured')
        .in('slug', slugs)
        .eq('published', true)

      if (!cancelled) setProjects((data as ProjectCard[]) ?? [])
    }

    fetchRelated()
    return () => { cancelled = true }
  }, [slugs.join(',')])  // eslint-disable-line react-hooks/exhaustive-deps

  return projects
}

// ── All unique categories (for filter tabs on Work page) ──
export function useCategories() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase
        .from('projects')
        .select('category')
        .eq('published', true)

      if (data) {
        const unique = ['All', ...new Set(data.map((d: { category: string }) => d.category))]
        setCategories(unique)
      }
    }

    fetchCategories()
  }, [])

  return categories
}
