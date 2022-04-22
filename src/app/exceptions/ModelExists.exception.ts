export class ModelExistsException extends Error {
  constructor() {
    super('Failed to check model exists.')
  }
}
