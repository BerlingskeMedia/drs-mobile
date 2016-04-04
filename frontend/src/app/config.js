var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentWelcome: 'Kom med dine kommentarer nedenfor. Eller deltag i debatten på vores <a href="https://www.facebook.com/stiftstidende">Facebook-side</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 1418,
    frontpageQueueId: 1232,
    frontpageItems: 21,
    canonicalDomain: 'http://dagbladetringskjern.dk/',
    chartbeatApikey: 'c3624866ca79af3601812dbe1eb517f4',
    chartbeatHost: 'amtsavisen.dk',
    defaultImageSize: '866x487-c',
    defaultMetaTitle: 'Dagbladet Ringkøbing-Skjern - mobil',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Randers',
    weatherIcons: {
            'day': {
              '200': 'thunderstorm',
              '300': 'showers',
              '500': 'rain',
              '520': 'showers',
              '600': 'snow',
              '800': 'day-sunny',
              '801': 'day-cloudy',
              '802': 'day-cloudy',
              '803': 'day-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            },
            'night': {
              '200': 'night-alt-thunderstorm',
              '300': 'night-alt-showers',
              '500': 'night-alt-rain',
              '520': 'night-alt-showers',
              '600': 'night-alt-snow',
              '800': 'night-clear',
              '801': 'night-alt-cloudy',
              '802': 'night-alt-cloudy',
              '803': 'night-alt-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            }
          },
    emediate: {
        "G1": {
            cu: "0",
            w: "930",
            h: "180"
        },
        "G2": {
            cu: "0",
            w: "930",
            h: "180"
        }
    },
    sectionsWithSubsectionsById: {
        1257: 'sport', //Lokal sport
        1255: 'sport', //Ringkøbing Håndbold
        2008: 'sport', //Ringkøbing IF
        1256: 'sport', //Skjern Håndbold
        2009: 'sport', //Tarm-Foersum GF
    },
    sections: {
      sport: {
        name: 'Sport',
        id: 1253
      },
      indland: {
        name: 'Danmark',
        id: 1248
      },
      verden: {
        name: 'Verden',
        id: 1249
      },

      lokalsport: {
        name: 'Lokal sport',
        id: 1257
      },

      alarm112: {
        name: 'Alarm 112',
        id: 1401
      },
      debat: {
        name: 'Debat',
        id: 1417
      },
      ringkoebing: {
        name: 'Ringkøbing',
        id: 1242
      },
      skjerntarm: {
        name: 'Skjern-Tarm',
        id: 1243
      },
      hvidesande: {
        name: 'Hvide Sande',
        id: 1244
      },
      videbaek: {
        name: 'Videbæk',
        id: 1245
      },
      ulfborgvemb: {
        name: 'Ulfborg-Vemb',
        id: 1246
      },
    },
    sportsTeams: [
        {
            name: 'AGF',
            id: 66919,
            image: 'agf'
        },
        {
            name: 'Bakken Bears',
            id: 66922,
            image: 'bakken-bears'
        },
        {
            name: 'Aarhus Håndbold',
            id: 66921,
            image: 'aarhus-haandbold'
        },
        {
            name: 'SK Aarhus',
            id: 66920,
            image: 'skaarhus'
        },
        {
            name: 'Aarhus Fremad',
            id: 0,
            image: 'aarhus-fremad'
        },
        {
            name: 'Skanderborg Håndbold',
            id: 305761,
            image: 'skanderborg-haandbold'
        },
        {
            name: 'Odder Håndbold',
            id: 329953,
            image: 'odder-haandbold'
        }

    ],
    socials: {
        facebook: 'https://www.facebook.com/dagbladetRS',
        twitter: 'https://twitter.com/DagbladetRS',
        instagram: 'https://www.instagram.com/dagbladetrs',
        google: 'https://plus.google.com/101613100874818493833/about'
    },
    footer: {
        copyright: "2016 Jysk Fynske Medier",
        tipmail: 'ringkoebing@bergske.dk',
        logo: '/assets/images/stiftenlogo_white.svg',
        phoneNum: 'tel:+4599757300',
        phoneNumDisplay: '+4599757300',
        maplink: 'https://www.google.dk/maps/place/Dagbladet+Ringk%C3%B8bing-Skjern+-+Ringk%C3%B8bing/@56.0922994,8.2459936,17z/data=!4m2!3m1!1s0x464a5b21663d2335:0x266965e70ace1ac4',
        postalAddress: 'St. Blichersvej 5 · 6950 Ringkøbing',
        policies: {
            copyright: {
                text: 'Ophavsret og vilkår',
                link: 'http://www.berlingskemedia.dk/ophavsret-og-vilkaar/'
            },
            privacy: {
                text: 'Cookie-og Privatlivspolitik',
                link: 'http://www.berlingskemedia.dk/cookie-og-privatlivspolitik/'
            },
            terms: {
                text: 'Generelle handelsbetingelser',
                link: 'http://www.berlingskemedia.dk/generelle-handelsbetingelser/'
            }
        },
        business: {
            subscription: {
                text: 'Abonnement',
                link: 'http://abonnement.dagbladetringskjern.dk/'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: 'https://dagbladetringskjern.kundeunivers.dk/kontakt'
            }
        },
    }
}

