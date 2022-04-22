export class InvalidLSModelNameException extends Error {
  constructor() {
    super('Invalid LocalStorageModel name. Name must contain [A-Z 0-9 _]')
  }
}
