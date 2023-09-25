export interface Root {
  conciertos: Concierto[];
}

export interface Concierto {
  id:              number;
  nombre:          string;
  imagen:          string;
  alt_imagen:      string;
  banda_principal: string;
  sala:            string;
  direccion:       string;
  poblacion:       string;
  provincia:       string;
  fecha_evento:    Date;
  link_entrada:    null;
  created_at:      null;
  updated_at:      Date;
  teloneros:       Telonero[];
}

export interface Telonero {
  id:           number;
  concierto_id: number;
  telonero:     string;
  created_at:   Date;
  updated_at:   Date;
}
