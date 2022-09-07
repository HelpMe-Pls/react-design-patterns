import { withEditableResource } from "./withEditableResource";
import { UserInfo } from "./UserInfo";


// HOC:
export const UserInfoForm = withEditableResource(UserInfo, '/users/123', 'user');