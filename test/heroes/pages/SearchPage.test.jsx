const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter, useNavigate } = require("react-router-dom")
const { SearchPage } = require("../../../src/heroes/pages/SearchPage")

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate : () => mockUseNavigate
}
))

    beforeEach(() => jest.clearAllMocks())

describe('<SearchPage/> test', () => { 
    
    test('should show default', () => { 

        const {container } = render(

            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('should show batman and query with input', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole( 'textbox' )
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')

        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const div = screen.getByLabelText('noFound')

        screen.debug()
        expect(div.style.display).toBe('none')
    })


    test('should display error div if hero was no found', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batm123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const div = screen.getByLabelText('noFound')

        expect(div.style.display).toBe('')
    })

    test('should call navigate to a new page', () => { 

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const imput = screen.getByRole('textbox')

        fireEvent.change(imput, {target: {name : 'searchText', value: 'superman' }} )

        const form = screen.getByLabelText('form')
        
        fireEvent.submit(form)

        expect( mockUseNavigate).toHaveBeenCalled()

    })

})