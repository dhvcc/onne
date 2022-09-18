import { TISOMonth } from '@shared/types'

function getModifiedPath(key: string, value?: string | null) {
  const url = new URL(window.location.href)
  url.searchParams.delete(key)
  if (value) url.searchParams.append(key, value)
  const path = url.pathname + url.search
  return path
}

/**
 * Function checks if string is valid ISO month
 */
export function isISOMonth(month?: string | null): month is TISOMonth {
  if (!month) return false
  const regex = /\d{4}-\d{2}/g // 0000-00
  return regex.test(month)
}
