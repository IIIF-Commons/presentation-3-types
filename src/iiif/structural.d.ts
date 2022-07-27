import { AnnotationPage } from '../resources/annotationPage';
import { Range } from '../resources/range';

export declare type StructuralProperties<T> = {
  items: T[];
  annotations: AnnotationPage[];
  structures: Range[];
};
