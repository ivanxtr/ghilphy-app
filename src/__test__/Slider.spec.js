import React from 'react';
import Slider from '../components/Slider'
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';

describe('Slider', () => {
  it('should render the proper structure on Trending', async () => {
    await act(async() => {
      const { getByText } = render(<Slider chooseCategory={jest.fn()} />)
      await act(async () => {
        fireEvent.click(getByText(/Trending/i))
        await waitFor(async () => {
          fireEvent.click(getByText(/Gifs/i))
          fireEvent.click(getByText(/Stickers/i))
        })
      })
    })
    expect(screen.getByText(/Trending/i)).toBeInTheDocument()
    expect(screen.getByText(/Gifs/i)).toBeInTheDocument()
    expect(screen.getByText(/Stickers/i)).toBeInTheDocument()
    expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    expect(screen.getByText(/Random/i)).toBeInTheDocument()
  })
  it('should render the proper structure on Homer Simpson', async () => {
    await act(async() => {
      const { getByText } = render(<Slider chooseCategory={jest.fn()} />)
      await act(async () => {
        fireEvent.click(getByText(/Homer Simpson/i))
        await waitFor(async () => {
          fireEvent.click(getByText(/Gifs/i))
          fireEvent.click(getByText(/Stickers/i))
        })
      })
    })
    expect(screen.getByText(/Trending/i)).toBeInTheDocument()
    expect(screen.getByText(/Gifs/i)).toBeInTheDocument()
    expect(screen.getByText(/Stickers/i)).toBeInTheDocument()
    expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    expect(screen.getByText(/Random/i)).toBeInTheDocument()
  })
  it('should render the proper structure on Random', async () => {
    await act(async() => {
      const { getByText } = render(<Slider chooseCategory={jest.fn()} />)
      await act(async () => {
        fireEvent.click(getByText(/Random/i))
        await waitFor(async () => {
          fireEvent.click(getByText(/coiding/i))
          fireEvent.click(getByText(/coding/i))
        })
      })
    })
    expect(screen.getByText(/Trending/i)).toBeInTheDocument()
    expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    expect(screen.getByText(/Random/i)).toBeInTheDocument()
    expect(screen.getByText(/coiding/i)).toBeInTheDocument()
    expect(screen.getByText(/coding/i)).toBeInTheDocument()
    expect(screen.getByText(/grinning/i)).toBeInTheDocument()
    expect(screen.getByText(/happy/i)).toBeInTheDocument()
  })
})
