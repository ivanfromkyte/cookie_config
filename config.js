var kyteCookieConfig = {

    testing: false,
    elementID: 'kytecookie',
    storageMethod: 'cookie',
    storageName: 'kytecookie',
    htmlTexts: false,
    cookieDomain: '.example.com',
    cookieExpiresAfterDays: 30,
    default: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,

    translations: {
        /*
        The `zz` key contains default translations that will be used as fallback values.
            This can e.g. be useful for defining a fallback privacy policy URL.
        */
        zz: {
            privacyPolicyUrl: 'https://www.kyteapp.com/privacy-policy',

        }
        es: {
            privacyPolicyUrl: 'https://www.appkyte.com/politica-de-privacidad',
            consentNotice: {
                description: '🍪 Necesitamos tu aprobación para continuar...',
            },
            consentModal: {
                description:
                    'Nos preocupamos por su privacidad y usamos cookies para crear ' + 
                    'la mejor experiencia posible en nuestra plataforma.' +
                    '¿Está bien para ti?',
            },
            
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Seguridad'
                },
                livechat: {
                    title: 'Chat'
                },
                advertising: {
                    title: 'Anuncios'
                },
            },
        },
         pt: {
            privacyPolicyUrl: 'https://www.kyte.com.br/politica-de-privacidade',
            consentNotice: {
                description: '🍪 Precisamos do seu okay para continuar...',
            },
            consentModal: {
                description:
                    'Nós nos importamos com sua privacidade e usamos cookies para criar ' + 
                    'a melhor experiência possível em nossa plataforma.' +
                    'Tudo bem pra você?',
            },
            
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Segurança'
                },
                livechat: {
                    title: 'Chat'
                },
                advertising: {
                    title: 'Anúncios'
                },
            },
        },
        en: {
            privacyPolicyUrl: 'https://www.kyteapp.com/privacy-policy',
            consentNotice: {
              description: '🍪 We need your consent to continue.',
            },
            consentModal: {
              description:
                    'Let's get this out of the way... ' + 
                    'We value your privacy and use cookies to make Kyte's platform the best it can be. ' + 
                    'Is that okay with you?',
            },
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Security'
                },
                livechat: {
                    title: 'Livechat'
                },
                advertising: {
                    title: 'Advertising'
                },
                styling: {
                    title: 'Styling'
                },
            },
        },
    },
    
    services: [
        {

            name: 'facebook',
            default: true,
            translations: {
                zz: {
                    title: 'Meta Pixel'
                },
                en: {
                    description: 'This cookie helps us understand and improve the use and performance of our services.'
                },
                pt: {
                    description: 'Este cookie nos ajuda a entender comportamentos e melhorar o desempenho de nossos serviços.'
                },
                es: {
                    description: 'Esta cookie nos ayuda a comprender el comportamiento y mejorar el desempeño de nuestros servicios.'
                },
            },
            
            purposes: ['analytics'],

            cookies: [
                [/^_fbp_.*$/, '/', 'kyte.online'],
                [/^_fbp_.*$/, '/', 'localhost'],
                [/^_ga_.*$/, '/', 'kyte.online'],
                [/^_ga_.*$/, '/', 'localhost'],
                [/^_cdga_.*$/, '/', 'kyte.online'],
                [/^_cdga_.*$/, '/', 'localhost'],
                [/^_cdga_gid_.*$/, '/', 'kyte.online'],
                [/^_cdga_gid_.*$/, '/', 'localhost'],
                [/^_clck_.*$/, '/', 'kyte.online'],
                [/^_clsk_.*$/, '/', 'localhost'],
                [/^_dc_gtm_UA-105887486-5_.*$/, '/', 'kyte.online'],
                [/^_dc_gtm_UA-105887486-5_.*$/, '/', 'localhost'],
                [/^_gcl_au_.*$/, '/', 'kyte.online'],
                [/^_gcl_au_.*$/, '/', 'localhost'],
            ],
            callback: function(consent, service) {
                console.log(
                    'User consent for service ' + service.name + ': consent=' + consent
                );
            },

            required: false,
            optOut: false,
            onlyOnce: true,
        },
        {
            name: 'youtube',
            /*
            [no translation for key annotated-config.services.contextualConsentOnly]
            */
            contextualConsentOnly: true,
        },
    ],

    callback: function(consent, service) {
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
    },

};
