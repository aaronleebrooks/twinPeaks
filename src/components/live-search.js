import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    }

    setValue(value) {
        this.setState({
            value
        })
    }

	render() {
		const filteredContacts = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.value.toLowerCase()
            )
 		);
    return (

        <div className="live-search">
            <SearchForm 
				value={this.state.hours}
				onChange={value => this.setValue(value)} 
            />
            <CharacterList characters={filteredContacts}/>
        </div>
    );


	}		
}

