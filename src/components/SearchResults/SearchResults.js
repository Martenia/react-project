import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import styles from '../Column/Column.scss';
// import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    // addCard: PropTypes.func,
  }

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon}/></span>
          {title}
        </h3>

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        
        {/*  <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>  */}

      </section>
    );
  }
}

export default SearchResults;