import { TechnicalProperties } from '../iiif/technical';
import { DescriptiveProperties } from '../iiif/descriptive';
import { StructuralProperties } from '../iiif/structural';
import { LinkingProperties } from '../iiif/linking';
import { OmitProperties, SomeRequired } from '../utility';
import { Reference } from '../reference';
import { Canvas } from './canvas';
import { SpecificResource } from './annotation';

export declare type RangeItems = Range | Canvas | string | SpecificResource<Reference<'Canvas'>>;

type RangeOmittedTechnical = 'format' | 'profile' | 'height' | 'width' | 'duration' | 'timeMode' | 'motivation';
type RangeOmittedDescriptive = 'language';
type RangeOmittedStructural = 'structures';
type RangeOmittedLinking = 'services';

type RangeTechnical = OmitProperties<TechnicalProperties, RangeOmittedTechnical>;
type RangeDescriptive = OmitProperties<DescriptiveProperties, RangeOmittedDescriptive>;
type RangeStructural = OmitProperties<StructuralProperties<RangeItems>, RangeOmittedStructural>;
type RangeLinking = OmitProperties<LinkingProperties, RangeOmittedLinking>;

export interface Range
  extends SomeRequired<RangeTechnical, 'id' | 'type'>,
    SomeRequired<RangeDescriptive, 'label'>,
    Partial<RangeStructural>,
    Partial<RangeLinking> {
  // Extensions: https://iiif.io/api/extension/
  navPlace?: import('geojson').GeoJSON;
}
