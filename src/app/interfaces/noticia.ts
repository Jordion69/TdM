export interface Root {
  noticias: Noticia[]
}

export interface Noticia {
  id: number
  titular_inicial: string
  texto_inicial: string
  foto_inicio: string
  alt_foto_inicio: string
  titular: string
  texto1: string
  texto2: any
  texto3: any
  texto4: any
  link_video: any
  headline: any
  text1: any
  text2: any
  text3: any
  text4: any
  palabras_clave: string
  created_at: any
  updated_at: any
}
