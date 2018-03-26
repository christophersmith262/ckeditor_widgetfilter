/**
 * @file
 * CKEditor Widget Filter Drag filter plugin base.
 *
 * @ignore
 */

/**
 * A base for creating drop target element filters.
 */
class Filter {

  /**
   * A list of properties required by this filter.
   */
  requires = [];

  /**
   * Performs drop target element filtering.
   *
   * @param {CKEDITOR.dom.element}
   * @param {Backbone.Model}
   */
  filter(el, dragData) {}
}

export default Filter;
