import { TechnicalProperties } from '../iiif/technical';
import { DescriptiveProperties } from '../iiif/descriptive';
import { StructuralProperties } from '../iiif/structural';
import { LinkingProperties } from '../iiif/linking';
import { OmitProperties, SomeRequired } from '../utility';
import { AnnotationPage } from './annotationPage';

export declare type CanvasItems = AnnotationPage;

type CanvasOmittedTechnical = 'format' | 'profile' | 'viewingDirection' | 'timeMode' | 'motivation';
type CanvasOmittedDescriptive = 'language';
type CanvasOmittedLinking = 'services' | 'start' | 'supplementary';
type CanvasOmittedStructural = 'structures';

type CanvasTechnical = OmitProperties<TechnicalProperties, CanvasOmittedTechnical>;
type CanvasDescriptive = OmitProperties<DescriptiveProperties, CanvasOmittedDescriptive>;
type CanvasStructural = OmitProperties<StructuralProperties<CanvasItems>, CanvasOmittedStructural>;
type CanvasLinking = OmitProperties<LinkingProperties, CanvasOmittedLinking>;

export interface Canvas
  extends SomeRequired<CanvasTechnical, 'id' | 'type'>,
    Partial<CanvasDescriptive>,
    Partial<CanvasStructural>,
    Partial<CanvasLinking> {
  '@context'?: string | string[];
}

type CanvasItemSchemas = 'AnnotationPage';
