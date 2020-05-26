import { ApiEntityBaseContract } from './ApiEntityBaseContract';
import { Protocol } from '../enums/Protocol';
/** @since 2019-12-01 */
export interface ApiTagResourceContractProperties extends ApiEntityBaseContract {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    name: string & MaxLength<300> & MinLength<1>;
    /** @since 2019-12-01 */
    serviceUrl: string & MaxLength<2000> & MinLength<1>;
    /** @since 2019-12-01 */
    path: string & MaxLength<400> & MinLength<0>;
    /** @since 2019-12-01 */
    protocols: Array<Protocol>;
}
