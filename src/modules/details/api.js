const mockDetails = ['React Hook', 'Suspense', 'Concurrent', 'Time Slicing']

export function fetchDetails(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockDetails)
    }, 1000)
  })
}