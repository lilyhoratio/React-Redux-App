import React from 'react'

const LocationForm = (props) => {
    console.log("form props", props)

    return (
        <>
            <form>
                <label>Enter latitude:
                <input
                        name="latitude"
                        type="text"
                        placeholder="37.8267"
                    // onChange={handleChange}
                    />
                </label>
                <label>Enter longitude:
            <input
                        name="longitude"
                        type="text"
                        placeholder="-122.4233"
                    // onChange={handleChange}
                    />
                </label>
                <button onClick={props.getData}>Get Weather</button>
            </form>
        </>
    )
}

export default LocationForm
