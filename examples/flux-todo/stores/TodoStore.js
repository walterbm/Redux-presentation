/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */
import assign from 'object-assign';

import AppDispatcher  from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import { TodoConstants } from '../constants/TodoConstants';

var CHANGE_EVENT = 'change';

var _todos = {};

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Update a TODO item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

/**
 * Update all of the TODO items with the same object.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.
 */
function updateAll(updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

/**
 * Delete a TODO item.
 * @param  {string} id
 */
function destroy(id) {
  delete _todos[id];
}

/**
 * Delete all the completed TODO items.
 */
function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

class TodoStore extends EventEmitter {

  constructor() {
		super();
		this.subscribe(() => this.register.bind(this));
	}

	subscribe(actionSubscribe) {
		this._dispatchToken = AppDispatcher.register(actionSubscribe());
	}

  /**
   * Tests whether all the remaining TODO items are marked as completed.
   * @return {boolean}
   */
  areAllComplete() {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  }

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  register(action) {
    var text;

    switch(action.actionType) {
      case TodoConstants.TODO_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          this.emitChange();
        }
        break;

      case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
        if (this.areAllComplete()) {
          updateAll({complete: false});
        } else {
          updateAll({complete: true});
        }
        this.emitChange();
        break;

      case TodoConstants.TODO_UNDO_COMPLETE:
        update(action.id, {complete: false});
        this.emitChange();
        break;

      case TodoConstants.TODO_COMPLETE:
        update(action.id, {complete: true});
        this.emitChange();
        break;

      case TodoConstants.TODO_UPDATE_TEXT:
        text = action.text.trim();
        if (text !== '') {
          update(action.id, {text: text});
          this.emitChange();
        }
        break;

      case TodoConstants.TODO_DESTROY:
        destroy(action.id);
        this.emitChange();
        break;

      case TodoConstants.TODO_DESTROY_COMPLETED:
        destroyCompleted();
        this.emitChange();
        break;

      default:
        // no op
    }
  }
}

export default new TodoStore();
