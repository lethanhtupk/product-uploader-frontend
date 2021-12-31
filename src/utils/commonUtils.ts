export const DEFAULT_LIMIT_RECORDS = 6
export const DEFAULT_DELAY_TIME = 300 // 300ms

export interface IPagination {
  count: number
  previous?: string | null
  next?: string | null
  results: Record<string, unknown>[]
}

export const truncateLongText = (text: string, limit = 20) => {
  if (text.length > limit + 3) {
    return `${text.slice(0, limit)}...`
  }
  return text
}

export const getTotalPage = (total: number, limit: number) => {
  return Math.ceil(total / limit)
}

let timeoutId: NodeJS.Timeout
export const debounce = (func: () => void, delayTime = DEFAULT_DELAY_TIME) => {
  return (function () {
    if (timeoutId) {
      clearTimeout()
    }
    timeoutId = setTimeout(() => {
      func()
    }, delayTime)
  })()
}
