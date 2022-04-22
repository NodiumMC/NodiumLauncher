export class LocalStorageException extends Error {
  constructor(message: string) {
    super(`LocalStorageException: ${message}`)
  }
}
