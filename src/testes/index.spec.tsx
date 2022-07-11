import { render } from "@testing-library/react"
import Home from "../pages/index"

test('sum', () => {
    // expect(1+1).toBe(2)
    const { getByText } = render(<Home />);
    expect(getByText('React/Redux')).toBeTruthy();
})