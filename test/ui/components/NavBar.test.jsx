import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { Navbar } from "../../../src/ui/components/NavBar"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockUseNavigate
}))

describe('<NavBar/> test', () => { 

    const contextValue = {
        logged: true,
        name: 'Jhon',
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('should show user name', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByLabelText('nameSpan').innerHTML).toBe(contextValue.name)

    })
    
    test('should call logout and navigate on a onclick envent', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByLabelText('logoutBtn')
        
        fireEvent.click(logoutButton)


        expect(contextValue.logout).toHaveBeenCalled()

        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {'replace': true})

    })
})