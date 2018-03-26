import Decorator from '../Decorator';
import _ from 'underscore';

/**
 * Decorator for adding widget data.
 */
class Widget extends Decorator {

  provides = ['widget'];

  /**
   * {@method}
   */
  constructor(editor) {
    super();
    this._editor = editor;
  }

  /**
   * {@method}
   */
  decorate(evt, dragData) {
    var widgetId = evt.data.dataTransfer.getData('cke/widget-id');
    if (!_.isUndefined(widgetId)) {
      var widget = this._editor.widgets.instances[widgetId];
      if(widget) {
        dragData.set({'widget': widget});
      }
    }
  }

}

export default Widget;
