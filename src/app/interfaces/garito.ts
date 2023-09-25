export interface Root {
  garitos: Garito[]
}
export interface Garito {
  id: number
  nombre_garito: string
  nombre_duenyo: string
  direccion: string
  poblacion: string
  provincia: string
  codigo_postal: number
  comunidad_autonoma: string
  telefono: any
  telefono2: any
  facebook: any
  instagram: any
  mail: any
  frase: any
  sentence: any
  visitado: number
  ratio_colaboracion: any
  imagen: string
  alt_imagen: string
  latitud: string
  longitud: string
  tendencia: string
  created_at: any
  updated_at: any
}
