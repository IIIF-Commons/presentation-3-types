import { Manifest } from '../src/resources/manifest';
import { Service } from '../src/resources/service';
import { AuthProbeService2 } from '../src/services/auth-2';
import { ImageService, ImageService3 } from '../src/services/image-service';

const cookbook1: Manifest = {
  '@context': 'http://iiif.io/api/presentation/3/context.json',
  id: 'https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json',
  type: 'Manifest',
  label: {
    en: ['Single Image Example'],
  },
  items: [
    {
      id: 'https://iiif.io/api/cookbook/recipe/0001-mvm-image/canvas/p1',
      type: 'Canvas',
      height: 1800,
      width: 1200,
      items: [
        {
          id: 'https://iiif.io/api/cookbook/recipe/0001-mvm-image/page/p1/1',
          type: 'AnnotationPage',
          items: [
            {
              id: 'https://iiif.io/api/cookbook/recipe/0001-mvm-image/annotation/p0001-image',
              type: 'Annotation',
              motivation: 'painting',
              body: {
                id: 'http://iiif.io/api/presentation/2.1/example/fixtures/resources/page1-full.png',
                type: 'Image',
                format: 'image/png',
                height: 1800,
                width: 1200,
              },
              target: 'https://iiif.io/api/cookbook/recipe/0001-mvm-image/canvas/p1',
            },
          ],
        },
      ],
    },
  ],
};

const cookbook2: Manifest = {
  '@context': 'http://iiif.io/api/presentation/3/context.json',
  id: 'https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json',
  type: 'Manifest',
  label: {
    en: ['Simplest Audio Example 1'],
  },
  items: [
    {
      id: 'https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas',
      type: 'Canvas',
      duration: 1985.024,
      items: [
        {
          id: 'https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas/page',
          type: 'AnnotationPage',
          items: [
            {
              id: 'https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas/page/annotation',
              type: 'Annotation',
              motivation: 'painting',
              body: {
                id: 'https://fixtures.iiif.io/audio/indiana/mahler-symphony-3/CD1/medium/128Kbps.mp4',
                type: 'Sound',
                format: 'audio/mp4',
                duration: 1985.024,
              },
              target: 'https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas',
            },
          ],
        },
      ],
    },
  ],
};

const cookbook3: Manifest = {
  '@context': 'http://iiif.io/api/presentation/3/context.json',
  id: 'https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json',
  type: 'Manifest',
  label: {
    en: ['Video Example 3'],
  },
  items: [
    {
      id: 'https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas',
      type: 'Canvas',
      height: 360,
      width: 640,
      duration: 572.034,
      items: [
        {
          id: 'https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas/page',
          type: 'AnnotationPage',
          items: [
            {
              id: 'https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas/page/annotation',
              type: 'Annotation',
              motivation: 'painting',
              body: {
                id: 'https://fixtures.iiif.io/video/indiana/lunchroom_manners/high/lunchroom_manners_1024kb.mp4',
                type: 'Video',
                height: 360,
                width: 480,
                duration: 572.034,
                format: 'video/mp4',
              },
              target: 'https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas',
            },
          ],
        },
      ],
    },
  ],
};

const cookbook5: Manifest = {
  '@context': 'http://iiif.io/api/presentation/3/context.json',
  id: 'https://iiif.io/api/cookbook/recipe/0005-image-service/manifest.json',
  type: 'Manifest',
  label: {
    en: ['Picture of Göttingen taken during the 2019 IIIF Conference'],
  },
  items: [
    {
      id: 'https://iiif.io/api/cookbook/recipe/0005-image-service/canvas/p1',
      type: 'Canvas',
      label: {
        en: ['Canvas with a single IIIF image'],
      },
      height: 3024,
      width: 4032,
      items: [
        {
          id: 'https://iiif.io/api/cookbook/recipe/0005-image-service/page/p1/1',
          type: 'AnnotationPage',
          items: [
            {
              id: 'https://iiif.io/api/cookbook/recipe/0005-image-service/annotation/p0001-image',
              type: 'Annotation',
              motivation: 'painting',
              body: {
                id: 'https://iiif.io/api/image/3.0/example/reference/918ecd18c2592080851777620de9bcb5-gottingen/full/max/0/default.jpg',
                type: 'Image',
                format: 'image/jpeg',
                height: 3024,
                width: 4032,
                service: [
                  {
                    id: 'https://iiif.io/api/image/3.0/example/reference/918ecd18c2592080851777620de9bcb5-gottingen',
                    profile: 'level1',
                    type: 'ImageService3',
                  } as ImageService,
                ],
              },
              target: 'https://iiif.io/api/cookbook/recipe/0005-image-service/canvas/p1',
            },
          ],
        },
      ],
    },
  ],
};

const imageService1: ImageService3 = {
  '@context': 'http://iiif.io/api/image/3/context.json',
  extraFormats: ['jpg', 'png'],
  extraQualities: ['default', 'color', 'gray'],
  height: 3000,
  id: 'https://iiif.io/api/image/3.0/example/reference/28473c77da3deebe4375c3a50572d9d3-laocoon',
  profile: 'level1',
  protocol: 'http://iiif.io/api/image',
  tiles: [
    {
      height: 512,
      scaleFactors: [1, 2, 4],
      width: 512,
    },
  ],
  type: 'ImageService3',
  width: 2315,
};

const imageService2: ImageService3 = {
  '@context': 'http://iiif.io/api/image/3/context.json',
  extraFormats: ['jpg', 'png'],
  extraQualities: ['default', 'color', 'gray'],
  height: 4823,
  id: 'https://iiif.io/api/image/3.0/example/reference/4f92cceb12dd53b52433425ce44308c7-ucla_bib1987273_no001_rs_001',
  profile: 'level1',
  protocol: 'http://iiif.io/api/image',
  tiles: [
    {
      height: 512,
      scaleFactors: [1, 2, 4, 8],
      width: 512,
    },
  ],
  type: 'ImageService3',
  width: 3497,
};

const auth2_1: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/01_Icarus_Breughel.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/active-login/01_Icarus_Breughel.jpg',
      type: 'AuthAccessService2',
      profile: 'active',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/active-login/01_Icarus_Breughel.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Authentication Failed'],
          },
          errorNote: {
            en: ['<a href="http://example.org/policy">Access Policy</a>'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/active-login/01_Icarus_Breughel.jpg',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Login to Example Institution'],
      },
      heading: {
        en: ['Please Log In'],
      },
      note: {
        en: ['Example Institution requires that you log in with your example account to view this content.'],
      },
      confirmLabel: {
        en: ['Login'],
      },
    },
  ],
};

const auth2_2: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/02_gauguin.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/active-login/02_gauguin.jpg',
      type: 'AuthAccessService2',
      profile: 'active',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/active-login/02_gauguin.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Viewing greyscale version'],
          },
          errorNote: {
            en: [
              'You don\'t appear to have access to the full colour version. <a href="http://example.org/policy">Access Policy</a>',
            ],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/active-login/02_gauguin.jpg',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Login to Example Institution for full quality'],
      },
      heading: {
        en: ['Please Log In'],
      },
      note: {
        en: [
          'Example Institution requires that you log in with your example account to view the full-quality content.',
        ],
      },
      confirmLabel: {
        en: ['Login'],
      },
    },
  ],
};

const auth2_3_clickthrough: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/03_clickthrough.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/active-clickthrough/03_clickthrough.jpg',
      type: 'AuthAccessService2',
      profile: 'active',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/active-clickthrough/03_clickthrough.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Terms of Use Not Accepted'],
          },
          errorNote: {
            en: ['You must accept the terms of use to see the content.'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/active-clickthrough/03_clickthrough.jpg',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Terms of Use for Example Institution'],
      },
      heading: {
        en: ['Restricted Material with Terms of Use'],
      },
      note: {
        en: ['<span>... terms of use ... </span>'],
      },
      confirmLabel: {
        en: ['I Agree'],
      },
    },
  ],
};

const auth2_4_kiosk: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/04_gene_cernan.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/kiosk/04_gene_cernan.jpg',
      type: 'AuthAccessService2',
      profile: 'kiosk',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/kiosk/04_gene_cernan.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Ooops!'],
          },
          errorNote: {
            en: ['Call Bob at ext. 1234 to reboot the cookie server'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/kiosk/04_gene_cernan.jpg',
          type: 'AuthLogoutService2' as const,
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Internal cookie granting service'],
      },
    },
  ],
};

const auth2_5_external: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/05_cader_idris.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/external/05_cader_idris.jpg',
      type: 'AuthAccessService2',
      profile: 'external',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/external/05_cader_idris.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Restricted Material'],
          },
          errorNote: {
            en: ['This material is not viewable without prior agreement'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/external/05_cader_idris.jpg',
          type: 'AuthLogoutService2' as const,
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['External Authentication Required'],
      },
    },
  ],
};

const auth2_6_shared: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/06_1959.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/active-login/shared',
      type: 'AuthAccessService2',
      profile: 'active',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/active-login/shared',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Authentication Failed'],
          },
          errorNote: {
            en: ['<a href="http://example.org/policy">Access Policy</a>'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/active-login/shared',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Login to Example Institution'],
      },
      heading: {
        en: ['Please Log In'],
      },
      note: {
        en: ['You can still use the service information to vary the strings presented to the user.'],
      },
      confirmLabel: {
        en: ['Login'],
      },
    },
  ],
};

const auth2_7_multiple: AuthProbeService2 = {
  id: 'https://iiif-auth2-server.herokuapp.com/probe/08_portmeirion.jpg',
  type: 'AuthProbeService2',
  service: [
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/active-clickthrough/08_portmeirion.jpg',
      type: 'AuthAccessService2',
      profile: 'active',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/active-clickthrough/08_portmeirion.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Terms of Use Not Accepted'],
          },
          errorNote: {
            en: ['You must accept the terms of use to see the content.'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/active-clickthrough/08_portmeirion.jpg',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['Terms of Use for Example Institution'],
      },
      heading: {
        en: ['Restricted Material with Terms of Use'],
      },
      note: {
        en: ['<span>... terms of use ... </span>'],
      },
      confirmLabel: {
        en: ['I Agree'],
      },
    },
    {
      id: 'https://iiif-auth2-server.herokuapp.com/auth/access/external/08_portmeirion.jpg',
      type: 'AuthAccessService2',
      profile: 'external',
      service: [
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/token/external/08_portmeirion.jpg',
          type: 'AuthAccessTokenService2',
          errorHeading: {
            en: ['Restricted Material'],
          },
          errorNote: {
            en: ['This material is not viewable without prior agreement'],
          },
        },
        {
          id: 'https://iiif-auth2-server.herokuapp.com/auth/logout/external/08_portmeirion.jpg',
          type: 'AuthLogoutService2',
          label: {
            en: ['Log out'],
          },
        },
      ],
      label: {
        en: ['External Authentication Required'],
      },
    },
  ],
};

const test: Service = {} as any;
if (test.profile) {
  // shouldn't error.
}
