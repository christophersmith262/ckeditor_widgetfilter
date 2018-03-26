/**
 * @file
 * CKEditor Widget Filter Drag data decorator plugin base.
 */

/**
 * A base for creating drag data decorators.
 */
class Decorator {

  /**
   * A list of properties required by this decorator.
   */
  requires = [];

  /**
   * A list of properties provided by this decorator.
   */
  provides = [];

  /**
   * Performs drag data decoration.
   *
   * @param {CKEDITOR.event}
   * @param {Backbone.Model}
   */
  decorate(evt, dragData) {}

}

export default Decorator;
