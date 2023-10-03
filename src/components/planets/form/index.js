import React, { Fragment, useState, useEffect } from "react";

const InitialState  = {
    title: '',
    desc: '',
    link: '',
    img_url: ''

}

const Form = (props) => {
    const [fields, setFields] = useState(InitialState)

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(InitialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="title" value={fields.tite} onChange={handleFieldsChange}/>
                    <div>
                    <label htmlFor="desc">Description: </label>
                    <input id="desc" type="text" name="desc" value={fields.desc} onChange={handleFieldsChange}/>
                    </div>
                    <div>
                    <label htmlFor="link">Link </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
                    </div>
                    <div>
                    <label htmlFor="img_url">Foto: </label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                    </div>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;