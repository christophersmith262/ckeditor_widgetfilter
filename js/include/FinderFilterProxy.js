/**
 * @file
 * A proxy class for CKEDITOR.plugins.lineutils.finder.
 */

(function (_, Backbone, Drupal, CKEDITOR) {

  'use strict';

  /**
   * CKEDITOR lineutils finder proxy class.
   *
   * @constructor
   *
   * @param {CKEDITOR.editor}
   */
  Drupal.ckeditor_widgetfilter.FinderFilterProxy = function(editor) {
    this._editor = editor;
    this.dragEnd();
  }

  _.extend(Drupal.ckeditor_widgetfilter.FinderFilterProxy.prototype, /** @lends Drupal.ckeditor.widgetfilter.FinderFilterProxy */{

    /**
     * Initializes the finder proxy on an editor.
     *
     * This should be called after the content DOM is loaded.
     */
    init: function() {
      // Allow plugins to register their decorators and filters.
      this._decorators = {};
      this._filters = [];
      this._greedySearch = this._editor.widgets.finder.greedySearch;
      this.fire('init');

      // Setup the proxy function for the finder.
      var proxy = this;

      this._editor.widgets.finder.greedySearch = function() {
        return proxy._relations;
      }

      this._editor.widgets.finder.lookups.default = function(el) {
        var result = CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER;
        if (proxy._activeFilters.length) {
          for (var i in proxy._activeFilters) {
            var filter = proxy._activeFilters[i];
            result &= filter.filter(el, proxy._dragData);
          }
        }
        return result;
      };

      this._editor.widgets.finder.getDragData = function() {
        return proxy.getDragData();
      };
    },

    /**
     * Registers a drag data decorator with the proxy.
     *
     * @param {Drupal.ckeditor_widgetfilter.Decorator}
     */
    registerDecorator: function(decorator) {
      for (var i in decorator.provides) {
        var name = decorator.provides[i];
        if (!this._decorators[name]) {
          this._decorators[name] = [];
        }
        this._decorators[name].push(decorator);
      }
      return this;
    },

    /**
     * Registers a drop target filter with the proxy.
     *
     * @param {Drupal.ckeditor_widgetfilter.Filter}
     */
    registerFilter: function(filter) {
      this._filters.push(filter);
      return this;
    },

    /**
     * Initializes the proxy for a drag operation.
     *
     * @param {CKEDITOR.event}
     */
    dragStart: function(evt) {
      this._dragData = new Backbone.Model();
      this._activeFilters = [];

      // First loop through filters to see which decorators need to be run.
      var requirements = {};
      for (var i in this._filters) {
        var filter = this._filters[i];
        for (var j in filter.requires) {
          requirements[filter.requires[j]] = true;
        }
      }

      // Loop through to try to build the requirements.
      for (var requirement in requirements) {
        this._buildRequirement(requirement, evt, this._dragData);
      }

      // Build a list of filters that can be applied.
      for (var i in this._filters) {
        var filter = this._filters[i];
        var active = true;
        for (var j in filter.requires) {
          if (!this._dragData.has(filter.requires[j])) {
            active = false;
            break;
          }
        }

        if (active) {
          this._activeFilters.push(filter);
        }
      }

      _.extend(this._relations, this._greedySearch.call(this._editor.widgets.finder));
    },

    /**
     * Reset the drag session data.
     *
     * @param {CKEDITOR.event}
     */
    dragEnd: function(evt) {
      this._dragData = null;
      this._activeFilters = [];
      this._relations = {};
    },

    /**
     * Gets the currently active, decorated drag data model.
     */
    getDragData: function() {
      return this._dragData;
    },

    /**
     * Attempts to build a data requirement by invoking associated decorators.
     *
     * @param {string}
     * @param {object}
     * @param {CKEDITOR.event}
     * @param {Backbone.Model}
     */
    _buildRequirement: function(requirement, evt, dragData) {
      var providers = this._decorators[requirement];
      if (providers) {
        for (var i in providers) {
          this._runDecorator(providers[i], evt, dragData);
          if (dragData.has(requirement)) {
            break;
          }
        }
      }
    },

    /**
     * Runs a decorator to generate a requirement.
     *
     * @param {Drupal.ckeditor_widgetfilter.Decorator}
     * @param {CKEDITOR.event} evt
     * @param {Backbone.Model} dragData
     */
    _runDecorator(decorator, evt, dragData) {
      var decorable = true;

      for (var i in decorator.requires) {
        var requirement = decorator.requires[i];
        if (!dragData.has(requirement)) {
          this._buildRequirement(requirement, evt, dragData);
        }
        decorable &= dragData.has(requirement);
      }

      if (decorable) {
        decorator.decorate(evt, dragData);
      }
    }

  });

  CKEDITOR.event.implementOn(Drupal.ckeditor_widgetfilter.FinderFilterProxy.prototype);

})(_, Backbone, Drupal, CKEDITOR);
