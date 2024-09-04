import axios, { AxiosRequestConfig } from 'axios'
// import { signOut } from 'next-auth/react'
// import { token } from './protector'

interface IError {
  message: string
  statusCode: number
}
interface IResponse {
  data: any | null
  error: IError | null
  isError: boolean
}
export class AxiosService {
  //use only server side
  key = ''

  handleErorr = (error: any) => {
    let status = 400

    if (error.response?.data.status === false) {
      status = 400
    }

    if (error.response?.data?.data?.statusCode) {
      status = error.response?.data?.data?.statusCode
    }

    if (error?.response?.status) {
      status = error?.response?.status
    }

    if (status === 401) {
      if (typeof window === 'undefined') {
        //server side
      } else {
        //client side
        // signOut({ redirect: true, callbackUrl: '/' })
      }
    }

    return {
      data: null,
      error: error?.response?.data?.data || error?.response?.data,
      isError: true,
    }
  }

  getPayload = (method: AxiosRequestConfig['method'], body = {}) => {
    const payload = body
    const queryName = method === 'GET' || method === 'DELETE' ? 'params' : 'data'
    return { payload, queryName }
  }

  async fetch(
    method: AxiosRequestConfig['method'],
    endpoint = '',
    body = {},
    options: AxiosRequestConfig = {},
    headers: AxiosRequestConfig['headers'] = {},
    baseURL = process.env.NEXT_PUBLIC_PORTAL_BASE_URL
  ) {
    const url = `${baseURL}${endpoint}`
    const { payload, queryName } = this.getPayload(method, body)

    const api = axios.create({
      baseURL: url,
    })

    api.interceptors.request.use((config) => {
      return config
    })

    try {
      const res = await axios({
        method,
        url,
        [queryName]: payload,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-api-key': this.key,
          // Authorization: `Bearer ${sessionStorage.getItem('credential')}`,
          ...headers,
        },
        ...options,
      })

      const response = {
        data: res.data,
        error: null,
        isError: false,
      }
      return response
    } catch (error) {
      return this.handleErorr(error)
    }
  }

  async fetchSelf(
    method: AxiosRequestConfig['method'],
    endpoint = '',
    body = {},
    options: AxiosRequestConfig = {},
    headers: AxiosRequestConfig['headers'] = {}
  ): Promise<IResponse> {
    const url = `${endpoint}`
    const { payload, queryName } = this.getPayload(method, body)

    const { headers: opthonsHeaders, ...others } = options
    try {
      const res = await axios({
        method,
        url,
        [queryName]: payload,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'x-access-token': token,
          // Authorization: `Bearer ${sessionStorage.getItem('credential')}`,
          ...headers,
          ...opthonsHeaders,
        },
        ...others,
      })

      const response = {
        data: res.data,
        error: null,
        isError: false,
      }
      return response
    } catch (error) {
      return this.handleErorr(error)
    }
  }
}
