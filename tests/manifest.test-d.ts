import { Manifest } from '../src/resources/manifest';
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
