export const environment = {
  production: true,
  apiUrl: 'https://www.templodelmetal.com/api',
  baseUrl: 'https://www.templodelmetal.com/storage/',
  endpoints: {
    getProvinceList: '/provincias/list',
    sendEmail: '/EnviarCorreo',
    noticias: {
      firstSeven: '/noticias/first-seven',
      firstThree: '/noticias/first-three',
      fromFourth: '/noticias/from-fourth',
      getById: '/noticia/',
    },
    garitos: {
      randomSeven: '/garitos/random-seven',
      randomFromCities: '/garitos/random-from-cities',
      allByProvince: '/garitos/all-by-province',
    },
    conciertos: {
      firstTenUpcoming: '/conciertos-first-ten-upcoming',
      lastWeekUpdates: '/conciertos-last-week-updates',
      allFromToday: '/conciertos-all-from-today',
    }
  }
};
