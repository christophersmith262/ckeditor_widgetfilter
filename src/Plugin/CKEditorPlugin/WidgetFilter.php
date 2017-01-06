<?php

namespace Drupal\ckeditor_widgetfilter\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "widgetfilter" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widgetfilter",
 *   label = @Translation("Widget Filter"),
 *   module = "ckeditor_widgetfilter"
 * )
 */
class WidgetFilter extends CKEditorPluginBase implements CKEditorPluginContextualInterface {

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    // If the module is enabled, the plugin should be enabled.
    return true;
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_widgetfilter') . '/js/plugins/widgetfilter/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array(
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  function getLibraries(Editor $editor) {
    return array(
      'ckeditor_widgetfilter/widgetfilter',
    );
  }
}
