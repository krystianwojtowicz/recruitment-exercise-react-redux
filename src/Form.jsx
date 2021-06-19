import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from './actions/appActions';


const Form = ({
    name = '', preparation_time = '00:00:00', type = '', no_of_slices='', diameter='', spiciness_scale='', slices_of_bread='', add,
}) => {
    const [condition, setCondition] = useState('')
    const [nameInput, setNameInput] = useState(name);
    const [timeInput, setTimeInput] = useState(preparation_time);
    const [typeSelect, setTypeSelect] = useState(type);
    const [sliceInput, setSliceInput] = useState(no_of_slices);
    const [diameterInput, setDiameterInput] = useState(diameter);
    const [spicinessInput, setSpicinessInput] = useState(spiciness_scale);
    const [breadInput, setBreadInput] = useState(slices_of_bread);

    let dishes = ['pizza', 'soup', 'sandwich'];

    const handleChangeName = event => setNameInput(event.target.value);
    const handleChangeTime = event => setTimeInput(event.target.value);
    const handleChangeType = event => setTypeSelect(event.target.value);
    const handleChangeSlice = event => setSliceInput(event.target.value);
    const handleChangeDiameter = event => setDiameterInput(event.target.value);
    const handleChangeSpiciness = event => setSpicinessInput(event.target.value);
    const handleChangeBread = event => setBreadInput(event.target.value);
    const handleOnSubmit = event => {
        event.preventDefault();
        const typeObject = {
            name: nameInput,
            time: timeInput,
            type: typeSelect,
            no_of_slices: sliceInput,
            diameter: diameterInput,
            spiciness_scale: spicinessInput,
            slices_of_bread: breadInput,
        };
        console.log(typeObject);
        add(typeObject);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <input
                    onChange={handleChangeName}
                    type="text"
                    value={nameInput}
                    required
                />
            </div>
            <div>
                <input
                    onChange={handleChangeTime}
                    type="text"
                    value={timeInput}
                    required
                />
            </div>
            <div>
                <select name="dishes" required
                    onChange={(event) => { setCondition(event.target.value); handleChangeType(event) }}
                    id='type' value={typeSelect} >
                    <option value="">None</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="sandwich">sandwich</option>
                </select>
                {condition === dishes[0] &&
                    <div>
                        <label htmlFor="quantity">no_of_slices:</label>
                        <input type="number" name="quantity" required onChange={handleChangeSlice} id='no_of_slices' value={sliceInput} />
                        <label htmlFor="quantity">diameter:</label>
                        <input type="number" step="0.01" required onChange={handleChangeDiameter} id='diameter' value={diameterInput} />
                    </div>}

                {condition === dishes[1] &&
                    <div>
                        <label htmlFor="quantity">spiciness_scale:</label>
                        <input type="number" name="quantity" min="1" max="10" required  onChange={handleChangeSpiciness}id='spiciness_scale' value={spicinessInput} />
                    </div>}

                {condition === dishes[2] &&
                    <div>
                        <label htmlFor="quantity">slices_of_bread:</label>
                        <input type="number" name="quantity" requiredonChange={handleChangeBread} id='slices_of_bread' value={breadInput} />
                    </div>}
            </div>
            <button type="submit">
                wyłśij ocenę
            </button>
        </form>

    );
};
const connectActionsToProps = ({
    add,
});

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;