/**
 * @file
 * CKEditor Widget Filter Drag filter plugin base.
 *
 * @ignore
 */
(function (_, Backbone, Drupal) {

  /**
   * A base for creating drop target element filters.
   *
   * @constructor
   */
  Drupal.ckeditor_widgetfilter.Filter = function() {
  }

  _.extend(Drupal.ckeditor_widgetfilter.Filter.prototype, /** @lends Drupal.ckeditor_widgetfilter.Filter */{

    /**
     * A list of properties required by this filter.
     */
    requires: [],

    /**
     * Performs drop target element filtering.
     *
     * @param {CKEDITOR.dom.element}
     * @param {Backbone.Model}
     */
    filter: function(el, dragData) {}
  });

  Drupal.ckeditor_widgetfilter.Filter.extend = Backbone.Model.extend;

})(_, Backbone, Drupal);
