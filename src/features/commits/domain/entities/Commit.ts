export interface Commit {
    type: string,
    scope?:string,
    description: string,
    body?: string,
    footer?: string,
}