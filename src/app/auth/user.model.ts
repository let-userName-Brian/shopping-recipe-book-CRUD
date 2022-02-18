export class User {
  constructor(
    public email: any,
    public id: any,
    private _token: any,
    private _tokenExpDate: any
  ) { }


  get token() {
    if (!this._tokenExpDate || new Date() > this._tokenExpDate) {
      return null
    }
    return this._token
  }

}