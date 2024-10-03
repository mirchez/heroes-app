import {types} from '../../../src/auth/types/types'
describe('test types', () => { 

    test('types should be static always', () => { 

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })

    })

})