import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('test <PublicRoute/>', () => { 

    test('should show children if it is not authenticated', () => { 
        
        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        

        expect(screen.getByText('Ruta Publica')).toBeTruthy()
    })

    test('should navigate if it is authenticated', () => { 

        const contextValue = {
            logged: true,
            name: 'Miguel'
        };
    
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='search' element={<h1>Search Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        screen.debug()
        expect(screen.getByText('Search Page')).toBeTruthy(); 
    });
    

    

})