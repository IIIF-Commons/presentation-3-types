import { TechnicalProperties } from '../iiif/technical';
import { DescriptiveProperties } from '../iiif/descriptive';
import { StructuralProperties } from '../iiif/structural';
import { LinkingProperties } from '../iiif/linking';
import { JsonLDContext, OmitProperties, SomeRequired } from '../utility';
import { Reference } from '../reference';
import { Canvas } from './canvas';
import { NavPlaceExtension } from '../extensions/nav-place';

export declare type ManifestItems = Canvas;

type ManifestOmittedTechnical = 'format' | 'profile' | 'height' | 'width' | 'duration' | 'timeMode' | 'motivation';
type ManifestOmittedDescriptive = 'language';
type ManifestOmittedLinking = 'supplementary';

type ManifestTechnical = OmitProperties<TechnicalProperties, ManifestOmittedTechnical>;
type ManifestDescriptive = OmitProperties<DescriptiveProperties, ManifestOmittedDescriptive>;
type ManifestStructural = StructuralProperties<ManifestItems>;
type ManifestLinking = OmitProperties<LinkingProperties, ManifestOmittedLinking>;

export interface Manifest
  extends SomeRequired<ManifestTechnical, 'id' | 'type'>,
    SomeRequired<ManifestDescriptive, 'label'>,
    SomeRequired<ManifestStructural, 'items'>,
    Partial<ManifestLinking>,
    NavPlaceExtension,
    JsonLDContext {}

type ManifestItemSchemas = 'Canvas';
