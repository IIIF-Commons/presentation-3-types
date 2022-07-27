import { TechnicalProperties } from '../iiif/technical';
import { DescriptiveProperties } from '../iiif/descriptive';
import { StructuralProperties } from '../iiif/structural';
import { LinkingProperties } from '../iiif/linking';
import { Manifest } from './manifest';
import { JsonLDContext, OmitProperties, SomeRequired } from '../utility';
import { NavPlaceExtension } from '../extensions/nav-place';

export declare type CollectionItems = Collection | Manifest;

type CollectionOmittedTechnical = 'format' | 'profile' | 'height' | 'width' | 'duration' | 'timeMode' | 'motivation';
type CollectionOmittedDescriptive = 'language';
type CollectionOmittedStructural = 'structures';
type CollectionOmittedLinking = 'start' | 'supplementary';

type CollectionTechnical = OmitProperties<TechnicalProperties, CollectionOmittedTechnical>;
type CollectionDescriptive = OmitProperties<DescriptiveProperties, CollectionOmittedDescriptive>;
type CollectionStructural = OmitProperties<StructuralProperties<CollectionItems>, CollectionOmittedStructural>;
type CollectionLinking = OmitProperties<LinkingProperties, CollectionOmittedLinking>;

export interface Collection
  extends SomeRequired<CollectionTechnical, 'id' | 'type'>,
    SomeRequired<CollectionDescriptive, 'label'>,
    SomeRequired<CollectionStructural, 'items'>,
    Partial<CollectionLinking>,
    NavPlaceExtension,
    JsonLDContext {}

export declare type CollectionItemSchemas = 'Collection' | 'Manifest';
