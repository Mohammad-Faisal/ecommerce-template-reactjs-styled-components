import MiscAction from "../misc/MiscAction";
import UserAction from "./UserAction";

const UserPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case UserAction.REQUEST_CREATE_NEW_USER_FINISHED:
                next(MiscAction._showModalSuccess("User Successfully Registered !"));
                break;
            case UserAction.REQUEST_GET_USER_WITH_FIREBASE_ID_FINISHED:
                if(action.payload.data.length === 0)next(MiscAction._showRegistrationModal());
                break;
        }
    }

    next(action);
};

export default UserPostEffect;
