import React, { useContext } from 'react'

import { SalariesContext } from './SalariesContext'

const App = () => {
	//useContext returns the Context Provider value
	//which is an Object containing all the salaries related vars and methods
	console.log( 'log', SalariesContext )
	const { xSalary, ySalary, totalCost, onChangeAmount } = useContext(
		SalariesContext,
	)

	/* 	const { totalCost } = useContext(
		TotalCostContext,
	) */

	const totalSalaries = xSalary + ySalary

	const percentageX = ( 100 * xSalary ) / totalSalaries
	const percentageY = ( 100 * ySalary ) / totalSalaries

	const amoutCostX = ( ( totalCost * percentageX ) / 100 ).toFixed( 2 )
	const amoutCostY = ( ( totalCost * percentageY ) / 100 ).toFixed( 2 )

	return (
		<div>
			<section>
				<h2>Relative Expanses</h2>
					<div>xSalary={ xSalary }</div>
					<div>ySalary={ ySalary }</div>
					<div>onChangeIncome={ onChangeAmount }</div>
				<hr />
			</section>
		</div>
	)
}

export default App

