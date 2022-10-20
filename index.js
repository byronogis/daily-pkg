export const getMD = async (name) => {
  let mdStr = `## <center> ${name} \n`
  
  const xhr = new XMLHttpRequest()

  xhr.open('get', `./store/${name}.md`, false)
  
  
  xhr.addEventListener('readystatechange', ({ target }) => {
    if (target.readyState !== 4) return
  
    if (target.status === 200) {
      mdStr += target.responseText
    } else {
      mdStr += xhr.statusText
    }
  })

  try {
    xhr.send(null)
  } catch (err) {
    console.log('err: ', err)
  } finally {
    return mdStr
  }
}