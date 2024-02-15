export const correctDate = (data: number) => {
  const newData = data.toString()
  if (newData.length < 2) {
    return '0' + data
  }
  return newData
}

