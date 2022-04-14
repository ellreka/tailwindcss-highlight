export function getClassNames(
  targetText: string
): Array<{ start: number; value: string }> {
  const arr = []
  const classNameMatches = targetText.matchAll(
    /(?:\b(?:class(?:Name)?|tw)\s*=\s*(?:(?:{([\s\S.:/${}()[\]"'`,]+)})|(["'`][\s\S.:/]+["'`])))/g
  )
  for (const classNameMatch of classNameMatches) {
    const stringMatches = classNameMatch[0].matchAll(
      /(?:["'`]([\s\S.:/${}()[\]"']+)["'`])/g
    )
    for (const stringMatch of stringMatches) {
      if (classNameMatch.index != null && stringMatch.index != null) {
        arr.push({
          start: classNameMatch.index + stringMatch.index,
          value: stringMatch[0]
        })
      }
    }
  }
  return arr
}

export function getUtility(
  targetText: string,
  regex: RegExp
): Array<{
  end: number
  start: number
  value: string
}> {
  const arr = []
  const matches = targetText.matchAll(regex)
  for (const match of matches) {
    if (match.index != null) {
      arr.push({
        start: match.index,
        end: match.index + match[0].length,
        value: match[0]
      })
    }
  }
  return arr
}
