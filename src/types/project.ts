export interface GalleryItem {
  type: 'image' | 'video'
  url: string
  caption?: string
  full_width?: boolean
}

export interface StatItem {
  value: string
  label: string
}

export interface Project {
  id: string
  slug: string
  sort_order: number
  // Listing page
  title: string
  tagline: string | null
  category: string
  tags: string[]
  thumbnail_url: string
  hover_video_url: string | null
  is_featured: boolean
  // Hero
  hero_image_url: string | null
  hero_video_url: string | null
  hero_caption: string | null
  // Meta sidebar
  client: string | null
  client_url: string | null
  services: string[]
  deliverables: string[]
  year: number | null
  duration: string | null
  role: string | null
  project_url: string | null
  awards: string[]
  // Body
  overview: string | null
  challenge: string | null
  approach: string | null
  outcome: string | null
  // Media
  gallery: GalleryItem[]
  stats: StatItem[]
  // Testimonial
  testimonial_quote: string | null
  testimonial_author: string | null
  testimonial_role: string | null
  testimonial_avatar: string | null
  // Navigation
  related_slugs: string[]
  // SEO
  meta_title: string | null
  meta_description: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export type ProjectCard = Pick<
  Project,
  | 'id' | 'slug' | 'sort_order'
  | 'title' | 'tagline' | 'category' | 'tags'
  | 'thumbnail_url' | 'hover_video_url' | 'is_featured'
>
