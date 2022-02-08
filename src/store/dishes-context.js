// import React, {useState, useEffect, useMemo} from 'react';
// import PropTypes from 'prop-types';

// const DishesContext = React.createContext({
//     dishes: [],
// })

// export const DishesContextProvider = ({children}) => {
//     const [dishes, setDishes] = useState([])

//     useEffect(() => {
//       fetch('/api/dishes')
//         .then((res) => res.json())
//         .then((json) => {
//           setDishes(json.dishes)
//         })
//     })
//     const dish = useMemo(() => ({dish: dishes}), [])

//     return (
//         <DishesContext.Provider
//             value={dish}
//         >
//             {children}

//         </DishesContext.Provider>
//     )
// }

// DishesContextProvider.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.shape(
//         {
//             id: PropTypes.number,
//             text: PropTypes.string,
//             author: PropTypes.string,
//         }
//     )).isRequired
// }

// export default DishesContext;
