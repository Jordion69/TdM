export const environment = {
  production: true,
  apiUrl: 'https://laughing-dijkstra.5-250-188-38.plesk.page/api',
  baseUrl: 'https://laughing-dijkstra.5-250-188-38.plesk.page/storage/',
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
