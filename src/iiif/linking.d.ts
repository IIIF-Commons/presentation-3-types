import { ContentResource } from '../resources/contentResource';
import { Service } from '../resources/service';
import { Canvas } from '../resources/canvas';
import { AnnotationCollection } from '../resources/annotationCollection';

export declare type LinkingProperties = {
  seeAlso: ContentResource[];
  service: Service[];
  services: Service[];
  rendering: ContentResource[];
  partOf: Array<ContentResource | Canvas | AnnotationCollection>;
  start: Canvas | null;
  supplementary: ContentResource[];
  /**
   * @deprecated since 3.0-beta - use provider.logo
   */
  logo: ContentResource[];
  homepage: ContentResource[];
};
