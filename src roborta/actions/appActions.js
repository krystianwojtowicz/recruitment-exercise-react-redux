export const ADD_RATE = 'ADD_RATE';
import axios from 'axios';

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

// export const addUser = userObj => {
//     return (dispatch) => {
//         axios.post('http://localhost:3001/users', userObj)
//         .then(response => {
//             dispatch({
//                 type: 'ADD_USER',
//                 payload: response.data
//             }) 
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     }
// }

// export const add = ({name, preparation_time, type
//     , no_of_slices, diameter, spiciness_scale, slices_of_bread
// }) => {
//     return (dispatch) => {
//         axios.post('http://localhost:3001/users', userObj)
//         .then(response => {
//                         dispatch({
//     type: ADD_RATE,
//     payload: {
//         name,
//         preparation_time,
//         type,
//         no_of_slices,
//         diameter,
//         spiciness_scale,
//         slices_of_bread,
//                         }})
// })
// .catch(error => {
//                 console.log(error);
//             });
//         }
//     }

// export const userLoginRequest = () => dispatch => {
//     axios.post(`localhost:5000/api/users`)
//     .then( userdata => 
//         dispatch({
//             type: ADD_USER,
//             payload: userdata
//         })
//     )
//     .catch( error => {
//         console.log(error);
//     });
// };

        