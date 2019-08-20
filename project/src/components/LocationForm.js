import React from 'react'
import { getData } from '../actions'
import Location from './Location'

const LocationForm = (props) => {
    console.log("form props", props)

    return (
        // <>
        //     <form>
        //         <label>Enter latitude:
        //         <input
        //                 name="latitude"
        //                 type="text"
        //                 placeholder="37.8267"
        //             // onChange={handleChange}
        //             />
        //         </label>
        //         <label>Enter longitude:
        //     <input
        //                 name="longitude"
        //                 type="text"
        //                 placeholder="-122.4233"
        //             // onChange={handleChange}
        //             />
        //         </label>
        //         <button onClick={props.getData}>Get Weather</button>
        //     </form>
        // </>
        <button onClick={props.getData}>Get Weather</button>
    )
}

export default LocationForm
