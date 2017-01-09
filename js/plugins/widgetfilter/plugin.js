/**
 * @file
 * Drupal CKEditor Widget Filter Plugin.
 *
 * This replaces the default widget drop target finder with a proxy class that
 * will track data associated with a DnD operation and allow filtering of drop
 * locations based on that data.
 *
 * @ignore
 */
(function (_, Drupal, CKEDITOR) {

  'use strict';

  /**
   * Decorator for adding widget data.
   */
  Drupal.ckeditor_widgetfilter.Decorators.Widget = Drupal.ckeditor_widgetfilter.Decorator.extend({

    /**
     * {@method}
     */
    constructor: function(editor) {
      this._editor = editor;
    },

    provides: ['widget'],

    /**
     * {@method}
     */
    decorate: function(evt, dragData) {
      var widgetId = evt.data.dataTransfer.getData('cke/widget-id');
      if (!_.isUndefined(widgetId)) {
        var widget = this._editor.widgets.instances[widgetId];
        if(widget) {
          dragData.set({'widget': widget});
        }
      }
    },
  });

  /**
   * Default filter provided by the CKEditor widget plugin.
   */
  Drupal.ckeditor_widgetfilter.Filters.Default = Drupal.ckeditor_widgetfilter.Filter.extend({

    /**
     * {@method}
     */
    constructor: function(editor) {
      this._defaultFilter = editor.widgets.finder.lookups.default;
    },

    filter: function(el, dragData) {
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
  });

  CKEDITOR.plugins.add('widgetfilter', {
    icons: null,
    hidpi: false,
    requires: ["widget"],

    beforeInit: function(editor) {
      // Attach a widgetfilter instance to the editor.
      editor.widgetfilter = new Drupal.ckeditor_widgetfilter.FinderFilterProxy(editor);
    },

    init: function(editor) {
      // Register default decorator / filter.
      editor.widgetfilter.on('init', function(evt) {
        editor.widgetfilter
          .registerDecorator(new Drupal.ckeditor_widgetfilter.Decorators.Widget(editor))
          .registerFilter(new Drupal.ckeditor_widgetfilter.Filters.Default(editor));
      });

      // Initialize the widget filter. This has to be done after the DOM is
      // ready since it needs the widget repository to set up its finder,
      // locator, liner properties.
      editor.on('contentDom', function(evt) {
        editor.widgetfilter.init();
      });

      editor.on('dragstart', function(evt) {
        editor.widgetfilter.dragStart(evt);
      });

      editor.on('dragend', function(evt) {
        editor.widgetfilter.dragEnd(evt);
      });
    },
  });

})(_, Drupal, CKEDITOR);
