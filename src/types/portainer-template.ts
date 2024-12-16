export type Templates = Template[]

export interface PortainerTemplate {
  version: string
  templates: Templates
}

export interface Template {
  categories: string[]
  description: string
  env?: Env[]
  image?: string
  logo: string
  name?: string
  platform: string
  ports?: string[]
  restart_policy?: string
  title: string
  type: number
  volumes?: Volume[]
  note?: string
  repository?: Repository
  network?: string
}

export interface Env {
  label: string
  name: string
  default?: string
  set?: string
  description?: string
}

export interface Volume {
  bind?: string
  container: string
}

export interface Repository {
  stackfile: string
  url: string
}
