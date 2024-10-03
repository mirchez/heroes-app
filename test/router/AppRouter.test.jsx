import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('<AppRouter/> test', () => { 

    test('should show login if user it is not logged', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByText('login').length).toBe(2)
    }) 

    test('should show marvel component if user is logged', () => { 
        const contextValue = {
            logged: true,
        }

        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByAltText('Marvel').length).toBeGreaterThanOrEqual(1)

    })


})