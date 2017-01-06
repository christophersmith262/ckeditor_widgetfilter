/**
 * @file
 * CKEditor Widget Filter Drag data decorator plugin base.
 */
(function (_, Backbone, Drupal) {

  /**
   * A base for creating drag data decorators.
   *
   * @constructor
   */
  Drupal.ckeditor_widgetfilter.Decorator = function() {
  }

  _.extend(Drupal.ckeditor_widgetfilter.Decorator.prototype, /** @lends Drupal.ckeditor_widgetfilter.Decorator */{

    /**
     * A list of properties required by this decorator.
     */
    requires: [],

    /**
     * A list of properties provided by this decorator.
     */
    provides: [],

    /**
     * Performs drag data decoration.
     *
     * @param {CKEDITOR.event}
     * @param {Backbone.Model}
     */
    decorate: function(evt, dragData) {}
  });

  Drupal.ckeditor_widgetfilter.Decorator.extend = Backbone.Model.extend;

})(_, Backbone, Drupal);
