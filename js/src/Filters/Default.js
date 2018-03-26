import Filter from '../Filter';
import CKEDITOR from 'ckeditor';

/**
 * Default filter provided by the CKEditor widget plugin.
 */
class Default extends Filter {

  /**
   * {@method}
   */
  constructor(editor) {
    super();
    this._defaultFilter = editor.widgets.finder.lookups.default;
  }

  /**
   * {@method}
   */
  filter(el, dragData) {
    if (dragData.get('widget')) {
      return this._defaultFilter(el);
    }
    else  {

      if (el.is(CKEDITOR.dtd.$listItem)) {
        return;
      }

      if (!el.is(CKEDITOR.dtd.$block)) {
        return;
      }

      // Allow drop line inside, but never before or after nested editable (#12006).
      if (CKEDITOR.plugins.widget.isDomNestedEditable(el)) {
        return;
      }

      return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER;
    }
  }

}

export default Default;
