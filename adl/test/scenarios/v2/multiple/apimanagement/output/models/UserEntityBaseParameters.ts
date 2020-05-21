import { UserIdentityContract } from './UserIdentityContract';
/**
 * @description User Entity Base Parameters set.
 */
export interface UserEntityBaseParameters {
    /**
     * @description Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    state: UserState;
    /**
     * @description Optional note about a user set by the administrator.
     */
    note: string;
    /**
     * @description Collection of user identities.
     */
    identities: Array<UserIdentityContract>;
}