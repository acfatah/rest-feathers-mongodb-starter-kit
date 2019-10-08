import admin from '../src/firebase-admin'

describe('Firebase admin', () => {
  it('GOOGLE_APPLICATION_CREDENTIALS should be defined', () => {
    expect(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      .toBeTruthy()
  })
  it('Should be initialized', () => {
    expect(admin).toBeTruthy()
  })
})
