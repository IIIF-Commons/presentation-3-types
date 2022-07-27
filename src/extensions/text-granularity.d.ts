/**
 * Text granularity
 *
 * See: https://iiif.io/api/extension/text-granularity/
 */

/**
 * A page in a paginated document
 */
export declare type PageGranularity = 'page';

/**
 * An arbitrary region of text
 */
export declare type BlockGranularity = 'block';

/**
 * A paragraph
 */
export declare type ParagraphGranularity = 'paragraph';

/**
 * A topographic line
 */
export declare type LineGranularity = 'line';

/**
 * A single word
 */
export declare type WordGranularity = 'word';

/**
 * A single glyph or symbol
 */
export declare type GlyphGranularity = 'glyph';

/**
 * The textGranularity property identifies the Text Granularity Level of a resource. The value must be a single string.
 * This extension defines the Text Granularity Levels found in the table below. The string should be one of those
 * defined in the table below or in the [Registry of Extensions](https://iiif.io/api/extension/).
 */
export declare type TextGranularityOptions =
  | PageGranularity
  | BlockGranularity
  | ParagraphGranularity
  | LineGranularity
  | WordGranularity
  | GlyphGranularity;

export declare interface TextGranularityExtension {
  /**
   * Text granularity
   *
   * An Annotation may have the textGranularity property. An Annotation that has the property should reference a IIIF
   * Presentation API Canvas or segment in the target property and the identified Text Granularity Level should describe
   * that of the textual content represented by the content resources painted on the Target.
   *
   * The Annotation Body’s textual content should be equivalent to the textual content represented by the content
   * resources painted on the Target. For example, the Body of the Annotation might be a TextualBody that contains the
   * transcription of the Target, which is painted with the image of a page of a medieval manuscript.
   *
   * See: https://iiif.io/api/extension/text-granularity/
   */
  textGranularity?: TextGranularityOptions;
}
