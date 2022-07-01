// Header nav

const initState = {
    Nav : [
        {id:1, title:"나에 대하여"},
        {id:2, title:"나의 기술들"},
        {id:3, title:"나의 공부들"},
        {id:4, title:"나의 코딩들"},
        {id:5, title:"나의 행적들"}
    ]
};

//Action
const CREATE = "header/CREATE";

// CREATE Action
export function createNav(navigate){
    return{type:CREATE , navigate};
};

//Reducer
export default function reducer(state=initState, action = {} ){
    switch (action.type) {
        case "header/CREATE": {
          const new_Nav = [...state.Nav, action.navigate];
          return { Nav:new_Nav };
        }
        default:
          return state;
      }
}