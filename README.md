
# Redux

## Three Principles of Redux
  1. Single source of truth
    - single Store
  2. State is read-only
    - the only way to mutate the state is through Actions
  3. Changes are made with pure functions
    - Reducer functions take previous stage + action -> next state

## Compared to Flux
| _concept_         | Redux                         | Flux                                |
| -------------     | -------------                 | -------------                       |
| **Update Logic**  | contained in Reducers         | contained in Stores                 |
| **Store**         | JS object                     | JS object that extend EventEmitter  |
| **Actions**       | JS object sent to Reducers    | Events sent to Dispatcher           |
| **Dispatcher**    | none                          | emits Events to Stores              |
| **Immutability**  | required & assumed            | no opinion                          |
