import { types } from "../../../src/auth/types/types"
import { authReducer } from "../../../src/auth"


describe('test authReducer', () => { 

    test('should return default state', () => { 

        const action = {
            type: '',
        }

        const state = (authReducer( {}, action))
        expect(state).toEqual({})

    })

    test('should call login and set user and logged should be true', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        }

        const { logged, name } = authReducer( {} , action )
        
        expect(logged).toBeTruthy()
        expect(name).toBe(action.payload.name)

    })

    test('should call logout and delete, delete name and logged sholud be false', () => { 


        const action = {
            type: types.logout,
        }

        const { logged, name } = authReducer(  {name:'jose'}, action )
        
        expect(logged).toBeFalsy()
        expect(name).toBe(null)



    })


})