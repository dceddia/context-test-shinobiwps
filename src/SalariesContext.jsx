import React, { Component } from 'react'

const SalariesContext = React.createContext()
/* const { Provider } = SalariesContext
 */
class SalariesProvider extends Component {
	//equivalent of Redux Store (just a slice)
	state = {
		xSalary: 0,
		ySalary: 0,
	}

	//equivalent of actions
	//wich are reducers too at the same time
	onChangeAmount = ( value, stateField ) => {
		//todo
		this.setState( {
			[stateField]: parseInt( value, 10 ) || 0,
		} )
	}

	render() {
		return (
			<SalariesContext.Provider
				value={ {
					xSalary: this.state.xSalary,
					ySalary: this.state.ySalary,
				} }
			>
				{ this.props.children }
			</SalariesContext.Provider>
		)
	}
}

export { SalariesProvider, SalariesContext }
