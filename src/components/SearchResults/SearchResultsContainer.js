import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { searchCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  return {
    cards: searchCardsForSearchResults(state, props.match.params.searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);