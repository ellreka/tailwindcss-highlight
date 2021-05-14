export function getClassNames(
  targetText: string
): Array<{ start: number; text: string }> {
  const arr = []
  const classNameMatches = targetText.matchAll(
    /(?:\bclass(?:Name)?\s*=\s*(?:{([\w\d\s_\-:/${}()[\]"'`,]+)})|(["'`][\w\d\s_\-:/]+["'`]))|(?:\btw\s*(`[\w\d\s_\-:/]+`))/g
  )
  for (const classNameMatch of classNameMatches) {
    const stringMatches = classNameMatch[0].matchAll(
      /(?:["'`]([\w\d\s_\-:/${}()[\]"']+)["'`])/g
    )
    for (const stringMatch of stringMatches) {
      if (classNameMatch.index != null && stringMatch.index != null) {
        arr.push({
          start: classNameMatch.index + stringMatch.index,
          text: stringMatch[0]
        })
      }
    }
  }
  return arr
}
