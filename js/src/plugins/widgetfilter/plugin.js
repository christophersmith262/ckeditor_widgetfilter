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

import Drupal from 'drupal';
import CKEDITOR from 'ckeditor';
import _ from 'underscore';

var pluginDefinition = {
  icons: '',
  requires: ["widget"],
};

if (Drupal.ckeditor_widgetfilter) {

  pluginDefinition = { ...pluginDefinition,

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
  };
}

CKEDITOR.plugins.add('widgetfilter', pluginDefinition);
