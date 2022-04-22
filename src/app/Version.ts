export class Version {

  major: number = 1
  minor: number = 0
  patch: number = 0

  constructor(v?: string | Version) {
    if (!v) return this
    if (v instanceof Version) return v
    const split = v.split('.')
    this.major = +split[0] ?? 1
    this.minor = +split[1] ?? 0
    this.patch = +split[2] ?? 0
  }

  toString(): string {
    return `${this.major}.${this.minor}.${this.patch}`
  }

  get sum(): number {
    return (this.major * 100) + (this.minor * 10) + this.patch
  }

  diff(v: Version | string): number {
    v = new Version(v)
    return v.sum - this.sum
  }

  impact(v: Version | string): 'major' | 'minor' | 'patch' | 'no' {
    v = new Version(v)
    if (v.major !== this.major) return 'major'
    if (v.minor !== this.minor) return 'minor'
    if (v.patch !== this.patch) return 'patch'
    return 'no'
  }

}
