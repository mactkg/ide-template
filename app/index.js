import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

var editor = ace.edit('editor')
editor.getSession().setMode('ace/mode/javascript')
editor.setTheme('ace/theme/monokai')
editor.setValue('alert(\'hello, world!\')')

document.getElementById('run').addEventListener('click', ev => {
  eval(editor.getValue())
})
