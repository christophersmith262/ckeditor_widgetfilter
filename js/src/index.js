/**
 * @file
 * Provides an API for filtering widget drop targets.
 */

import Drupal from 'drupal';
import Decorator from './Decorator';
import Filter from './Filter';
import FinderFilterProxy from './FinderFilterProxy';
import WidgetDecorator from './Decorators/Widget';
import DefaultFilter from './Filters/Default';

/**
 * {@namespace}
 */
Drupal.ckeditor_widgetfilter = {};

/**
 * {@namespace}
 */
Drupal.ckeditor_widgetfilter.Decorators = {};

/**
 * {@namespace}
 */
Drupal.ckeditor_widgetfilter.Filters = {};

Drupal.ckeditor_widgetfilter.FinderFilterProxy = FinderFilterProxy;
Drupal.ckeditor_widgetfilter.Decorator = Decorator;
Drupal.ckeditor_widgetfilter.Filter = Filter;
Drupal.ckeditor_widgetfilter.Decorators.Widget = WidgetDecorator;
Drupal.ckeditor_widgetfilter.Filters.Default = DefaultFilter;
