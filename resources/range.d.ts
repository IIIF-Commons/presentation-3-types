import { TechnicalProperties } from '../iiif/technical';
import { DescriptiveNormalized, DescriptiveProperties } from '../iiif/descriptive';
import { StructuralNormalized, StructuralProperties } from '../iiif/structural';
import { LinkingNormalized, LinkingProperties } from '../iiif/linking';
import { OmitProperties, SomeRequired } from '../utility';
import { Reference } from '../reference';
import { Canvas } from './canvas';

export declare type RangeItems = Range | Canvas | string;

type RangeOmittedTechnical = 'format' | 'profile' | 'height' | 'width' | 'duration' | 'timeMode';
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
    Partial<RangeLinking> {}

type ItemSchemas = 'Range' | 'Canvas';

export declare type RangeNormalized = OmitProperties<TechnicalProperties, RangeOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, RangeOmittedDescriptive> &
  OmitProperties<StructuralNormalized<Reference<ItemSchemas>, ItemSchemas>, RangeOmittedStructural> &
  OmitProperties<LinkingNormalized, RangeOmittedLinking> & { type: 'Range' };
