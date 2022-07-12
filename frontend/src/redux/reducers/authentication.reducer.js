import { SET_AUTHENTICATION, UPDATE_PROFILEPICTURE_AND_USERNAME } from "../types/authentication.types";

const initialState = {
  isAuthenticated: false,
  userProfilePic: "",
  userName: "",
  userTag: "",
  userEmail: "",
};

export default (state = initialState, action) => {
  //   console.log("reducer >>>> " + JSON.stringify(action));
  switch (action.type) {
    case SET_AUTHENTICATION:
      const { isAuthenticated, userProfilePic, userName, userTag, userEmail} = action.authenticationData;
      return { isAuthenticated, userProfilePic, userName, userTag, userEmail };

    case UPDATE_PROFILEPICTURE_AND_USERNAME:
      const { profilePic, name } = action.data;
      if(!!profilePic){
        return { ...state, userProfilePic: profilePic, userName: name};
      }else{
        return { ...state, userName: name};
      }     

    default:
      return state;
  }
};
