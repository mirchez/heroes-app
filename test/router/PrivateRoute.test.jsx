import { render, screen } from "@testing-library/react"
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"


describe('<PrivateRoute/> test', () => {

    test('should show children if it is logged', () => { 

        Storage.prototype.setItem = jest.fn()
        
        const contextValues = {
            logged: true,
            name: 'Miguel'
        }
        render(
            <AuthContext.Provider value = {contextValues}>
                <MemoryRouter initialEntries={['/marvel']} >
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
    })

    test('should navigate to login children if it is not logged', () => { 




    })


})