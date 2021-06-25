import axios from 'axios'

class ApiCallsFactory {
  private url: string
  private body: object | undefined
  private baseURL = `https://api.giphy.com/v1`

  constructor(
    url: string,
    body?: object
  ) {
    this.url = `${this.baseURL}${url}`
    this.body = body
  }

  public async getData() {
    try {
      const response = await axios.get(this.url, {
      })
      return response.data
    } catch (error) {
      return []
    }
  }

  public async postData() {
    try {
      const response: any = await axios.post(this.url, this.body, {
      })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

}

export {
  ApiCallsFactory
}
