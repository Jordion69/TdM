export const environment = {
  production: false,

  URL_NEWS_FIRST_3: 'http://127.0.0.1:8000/noticias/first-three',
  URL_NEWS_FROM_4: 'http://127.0.0.1:8000/noticias/from-fourth',
  apiUrl: 'http://127.0.0.1:8000/api',
  baseUrl: 'http://127.0.0.1:8000/storage/',
  endpoints: {
    getProvinceList: '/provincias/list',
    sendEmail: '/EnviarCorreo',
    noticias: {
      firstSeven: '/noticias/first-seven',
      firstThree: '/noticias/first-three',
      fromFourth: '/noticias/from-fourth',
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
