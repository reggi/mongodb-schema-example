namespace TestRunnerOperations {
  export interface FailPoint {
    name: 'failPoint';
    object: 'testRunner'
    arguments: {
      client: string
      configureFailPoint: string;
      data: {
        failCommands: string[]
        appName: string
        blockConnection: boolean
        blockTimeMS: number
      }
    }
  }
}

interface AnyOperation {
  name: any
  object: any
  arguments: any
}

export default interface Schema {
  operations: (TestRunnerOperations.FailPoint | AnyOperation)[]
}
