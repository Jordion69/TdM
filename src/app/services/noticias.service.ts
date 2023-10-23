import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private generateLoremIpsum(): string {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet feugiat purus. Praesent auctor mauris eget purus finibus, a ullamcorper velit euismod. Maecenas quis nunc quis dui cursus fermentum non ac arcu. Vivamus in libero eu ex vestibulum tincidunt. Proin quis tincidunt odio. Nullam eget libero sed justo blandit consectetur. Nulla facilisi. Praesent feugiat enim nec ligula euismod, at pulvinar elit lacinia. Nullam vel felis eros. Vivamus id libero a sapien sollicitudin tincidunt. Suspendisse potenti.";
    return lorem;
  }
  private noticiasGeneradas: Noticia[] = [];
  private selectedNoticia: Noticia | null = null;
  constructor(private http: HttpClient) { }

  generateRandomNoticias(): Noticia[] {
    // Tu código para generar noticias aleatorias
    const imagenes = [
      "../../../../../assets/img/new1280(1).jpg",
      "../../../../../assets/img/new1280(2).jpg",
      "../../../../../assets/img/new1280(3).jpg"
    ];

    const enlacesVideos = [
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
    ];
    const loremText = this.generateLoremIpsum();


    // Crea un array de 25 elementos aleatorios
    this.noticiasGeneradas = Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      titular_inicial: `Título inicial ${index + 1}`,
      texto_inicial: `Texto inicial ${index + 1}`,
      foto_inicio: imagenes[index % imagenes.length], // Repite las imágenes
      alt_foto_inicio: `Texto alternativo ${index + 1}`,
      titular: `Título ${index + 1}`,
      texto1: loremText,
      texto2: loremText,
      texto3: loremText,
      texto4: loremText,
      link_video: enlacesVideos[index % enlacesVideos.length], // Repite los enlaces de video
      headline: `Headline ${index + 1}`,
      text1: loremText,
      text2: loremText,
      text3: loremText,
      text4: loremText,
      palabras_clave: `Palabras clave ${index + 1}`,
      created_at: new Date(), // Puedes ajustar la fecha según tus necesidades
      updated_at: new Date(), // Puedes ajustar la fecha según tus necesidades
    }));
    console.log("Noticias generadas ---->",this.noticiasGeneradas);

    return this.noticiasGeneradas;
  }
  setSelectedNoticia(noticia: Noticia | null) {
    this.selectedNoticia = noticia;
  }

  getSelectedNoticia(): Noticia | null {
    return this.selectedNoticia;
  }
  getNoticiasGeneradas(): Noticia[] {
    return this.noticiasGeneradas;
  }

  public getFirstSeven(url:string) {
    return this.http.get(url);
  }

  public getFirstThree(url:string) {
    return this.http.get(url);
  }
  public getFromFourth(url:string) {
    return this.http.get(url);
  }
  public getNoticiaById(id: number): Noticia | undefined {
    return this.noticiasGeneradas.find(noticia => noticia.id === id);
  }

  public convertirEnlaceVideo(url: string): string {
    const videoIdMatch = url.match(/(?:\/|v=)([a-zA-Z0-9_-]+)(\?|\z)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    } else {
      return ''; // O cualquier otro valor predeterminado si la URL no es válida
    }
  }


  // Nuevo método para obtener el enlace de video de la noticia seleccionada
  getEnlaceVideoSeleccionado(): string | null {
    return this.selectedNoticia ? this.selectedNoticia.link_video : null;
  }
}
  // public getNoticiaById(id: number) {
  //   // Aquí debes obtener la noticia correspondiente según el ID proporcionado.
  //   // Puedes hacerlo llamando a tu fuente de datos o tu API.

  //   // Por ahora, solo estoy simulando una noticia:
  //   const noticia: Noticia = {
  //     id: id,
  //     titular_inicial: '',
  //     texto_inicial: '',
  //     foto_inicio: '',
  //     alt_foto_inicio: '',
  //     titular: '',
  //     texto1: '',
  //     texto2: undefined,
  //     texto3: undefined,
  //     texto4: undefined,
  //     link_video: undefined,
  //     headline: undefined,
  //     text1: undefined,
  //     text2: undefined,
  //     text3: undefined,
  //     text4: undefined,
  //     palabras_clave: '',
  //     created_at: undefined,
  //     updated_at: undefined
  //   };

  //   // Devuelve la noticia como un observable
  //   return new Observable<Noticia>(observer => {
  //     observer.next(noticia);
  //     observer.complete();
  //   });
  // }


