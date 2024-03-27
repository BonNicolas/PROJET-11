const storedToken = localStorage.getItem('token');


const initialState = {
   token: storedToken ? storedToken : ''
};

const authReducer = (state = initialState, action) => {
   switch (action.type) { 
      case 'LOGIN':
         localStorage.setItem('token', action.payload.token);
         return {
            ...state,
            token: action.payload.token
         };
      case 'LOGOUT':
         localStorage.removeItem('token');
         return { token: '' };
      default:
         return state;
   }
};
 
export default authReducer;