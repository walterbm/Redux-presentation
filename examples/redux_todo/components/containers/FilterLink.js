import React from 'react';
import { connect } from 'react-redux';

import { Link } from '../presentation/Link'
import { setVisibilityFilter } from '../../actions/visibility_actions'

const mapStateToLinkProps = ( state, ownProps ) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToLinkProps = ( dispatch, ownProps ) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
}
export const FilterLink = connect( mapStateToLinkProps, mapDispatchToLinkProps )(Link);
// ~~~ grass-fed `connect` ~~~
//
// class FilterLink extends React.Component {
//   componentDidMount() {
//     const { store } = this.context
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const state = store.getState();
//
//     return (
//       <Link
//         active={
//           this.props.filter ===
//           state.visibilityFilter
//         }
//         onClick={() =>
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: this.props.filter
//           })
//         }
//       >
//         {this.props.children}
//       </Link>
//     );
//   }
// }
