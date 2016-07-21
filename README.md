
# Redux

## What is it?

    Redux is a predictable state container for JavaScript apps.

    The whole state of your app is stored in an object tree inside a single store.
    The only way to change the state tree is to emit an action, an object describing what happened.
    To specify how the actions transform the state tree, you write pure reducers.

## Three Principles of Redux
  1. Single source of truth
    - single Store
  2. State is read-only
    - the only way to mutate the state is through Actions
  3. Changes are made with pure functions
    - Reducer functions take previous stage + action -> next state

## Main Advantages
  - Simplicity
  - Server-side Rendering
  - Removes boilerplate
  - Allows for Store middleware
  - Incentives better design pattern
  - Support for Developer tools
  - Facebook's official recommendation for managing data-flow


## Compared to Flux
| _concept_         | Redux                         | Flux                                |
| -------------     | -------------                 | -------------                       |
| **Update Logic**  | contained in Reducers         | contained in Stores                 |
| **Store**         | JS object                     | JS object that extend EventEmitter  |
| **Actions**       | JS object sent to Reducers    | Events sent to Dispatcher           |
| **Dispatcher**    | none                          | emits Events to Stores              |
| **Immutability**  | required & assumed            | no opinion                          |
