import './Body.css'
import React, {useReducer} from 'react';

import OverviewReport from '../Report_Overview/OverviewReport';
import DepartmentReport from '../Report_Dept/DepartmentReport'
import SOPReport from '../Report_SOP/SOPReport'
import DeviceReport from '../Report_Device/DeviceReport'

function reducer(state, action) {
	switch(action.type) {
		case 'Overview':
			return [true,false,false,false]
		case 'Department':
			return [false,true,false,false]
		case 'SOP':
			return [false,false,true,false]
		case 'Device':
			return [false,false,false,true]
		default: 
			return [true,false,false,false]
	}
}

function Body() {
	const [renderOverview, dispatch] = useReducer(reducer, [true,false,false,false])

    return (
        <div>
			<div className='mainSelector'>
				<button className='mainSelectorTab' onClick={() => dispatch({type: 'Overview'})}> Overview </button>
				<button className='mainSelectorTab' onClick={() => dispatch({type: 'Department'})}> Departments </button>
				<button className='mainSelectorTab' onClick={() => dispatch({type: 'SOP'})}> SOP </button>
				<button className='mainSelectorTab' onClick={() => dispatch({type: 'Device'})}> Devices </button>
			</div>
			<hr/>
			<div className='BodyContainer'>
				{renderOverview[0] ? 
				 <OverviewReport/>
				 : 
				 '[False : 0]'
				}
				{renderOverview[1] ? 
				 <DepartmentReport/>
				 : 
				 '[False : 1]'
				}
				{renderOverview[2] ? 
				 <SOPReport/>
				 : 
				 '[False : 2]'
				}
				{renderOverview[3] ? 
				 <DeviceReport/>
				 : 
				 '[False : 3]'
				}
			</div>
		</div>
	)
}

export default Body