import app from '../src/app'

describe('Config tests', () => {
  it('defined HOST', () => {
    let host = {
      env: process.env.HOST,
      config: app.get('host')
    }
    expect(host.env).toBeTruthy()
    expect(host.config).toBeTruthy()
    expect(host.config).toEqual(host.env)
  })
  it('defined PORT', () => {
    let port = {
      env: process.env.PORT,
      config: app.get('port')
    }
    expect(port.env).toBeTruthy()
    expect(port.config).toBeTruthy()
    expect(port.config).toEqual(port.env)
  })
})
