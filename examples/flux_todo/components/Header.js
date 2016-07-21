/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';

class Header extends React.Component {

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave(text) {
    if (text.trim()){
      TodoActions.create(text);
    }
  }

  /**
   * @return {object}
   */
  render() {
    return (
      <header id="header">
        <h1>Flux Todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="Build a flux capacitor"
          onSave={this._onSave}
        />
      </header>
    );
  }

};

export default Header;
