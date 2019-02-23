const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADDPERSON":
            const nuevaPersona = {
                id: Math.random(),
                name: "Mario",
                age: Math.floor(Math.random()*40)
            }
            return {
                ...state, persons: state.persons.concat([
                    nuevaPersona]
                )
            }
        case "REMOVEPERSON":
            /*Esto nel
            const personId = state.persons.id
            return {
                ...state, persons: state.persons.filter((person => person.id !== personId))
            } */ 
            const elementoActual = action.value
            const filteredPersons = state.persons.filter((person) => {
                return elementoActual !== person.id
            })
            return {
                persons: filteredPersons
            }
        default:
            return state
    }
}

export default reducer;