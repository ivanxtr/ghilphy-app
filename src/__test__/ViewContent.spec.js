import React from 'react';
import ViewContent from '../components/ViewContent'
import { render } from '@testing-library/react';

const mockData = [
    {
      images: {
        fixed_width_small: {
          url: 'testimage.url'
        }
      },
      url: 'testimage.url'
    }
  ]

describe('View Content', () => {
  it('should render the proper structure', async () => {
    const { getByAltText } = render(<ViewContent data={mockData} />)
    expect(getByAltText(/test/i)).toBeInTheDocument()
    expect(getByAltText(/test/i)).toHaveAttribute('src', 'testimage.url')
  })
})
