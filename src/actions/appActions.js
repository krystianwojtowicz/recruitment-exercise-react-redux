export const ADD_RATE = 'ADD_RATE';

export const add = ({name, preparation_time, type
    , no_of_slices, diameter, spiciness_scale, slices_of_bread
}) => ({
    type: ADD_RATE,
    payload: {
        name,
        preparation_time,
        type,
        no_of_slices,
        diameter,
        spiciness_scale,
        slices_of_bread,
    }
})