import record from "../exception/index"

export default abstract class UUID {
  format: Function
  index: number
  exist: Set<string>

  constructor(format?: Function) {
    this.index = 0
    this.exist = new Set<string>()
    this.format = format || function (ind) {
      return ind
    }
  }

  getID(): string {
    const uuid = this.format(this.index).toString()
    // index记录当前getID调用的次数
    this.index += 1
    try {
      if (this.exist.has(uuid)) {
        throw record('exist', `There already has id ${uuid}`)
      } else {
        this.exist.add(uuid)
      }
      return uuid
    } catch(error) {
      return ''
    }
  }
}