export default () => {
  const noteName = useState('noteName', () => '')
  const noteSource = useState('noteSource', () => '点击 hasNote 列进行选择展示')

  const handleNote = (name: string) => {
    console.warn('handleShowNote: ', name)
    noteName.value = name
    const md = import(`~/store/notes/${name}.md?raw`)
    md.then((res) => {
      noteSource.value = res.default
    }).catch((e) => {
      console.error(e)
    })
  }
  return {
    noteName,
    noteSource,
    handleNote,
  }
}
