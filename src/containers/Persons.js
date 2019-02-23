import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    /* state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Mike',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    } */

    /* personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    } */

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persona.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.removePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persona: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: () => dispatch({type:"ADDPERSON"}),
        removePerson: (id) => dispatch({type: "REMOVEPERSON", value: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Persons);