import { serverUrl } from "./serverConfig"

export const get = async (url: string) => {
    let response = await fetch(serverUrl + url)
    let data = await response.json()
    return data
}