import React from 'react';
import App from '../components/App'
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get("https://api.giphy.com/v1/gifs/trending", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data:[
          {
            images: {
              fixed_width_small: {
                url: 'test.url'
              }
            },
            url: 'test.url'
          }
        ]
      })
    )
  })
)

beforeAll(() => {
  // Enable API mocking before tests.
  server.listen()
});

afterEach(() => { 
  // Reset any runtime request handlers we may add during the tests.
  server.resetHandlers()
})

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('app', () => {
  it('should render the proper structure', async() => {
    server.use(
      rest.get('https://api.giphy.com/v1/stickers/trending', (req, res, ctx) => {
        return res(ctx.json({
          data:[
            {
              images: {
                fixed_width_small: {
                  url: 'test.url'
                }
              },
              url: 'test.url'
            }
          ]
        }))
      }),
    )
    await act(async() => {
      const { getByText } = render(<App />)
      await act(async () => {
        fireEvent.click(getByText(/Trending/i))
        await waitFor(async () => {
          fireEvent.click(getByText(/Gifs/i))
          fireEvent.click(getByText(/Stickers/i))
        })
      })
      expect(screen.getByText(/Gilphy App/i)).toBeInTheDocument()
      expect(screen.getByText(/Trending/i)).toBeInTheDocument()
      expect(screen.getByText(/Gifs/i)).toBeInTheDocument()
      expect(screen.getByText(/Stickers/i)).toBeInTheDocument()
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
      expect(screen.getByText(/Random/i)).toBeInTheDocument()
    })
  })
})
