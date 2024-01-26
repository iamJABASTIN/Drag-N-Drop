const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',Dragdrop)
}


function dragStart(){
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible' ,0)
}

function dragEnd(){
    this.className = 'fill'
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty'
}

function dragOver(e) {
    e.preventDefault()
}

function Dragdrop() {
    this.className = 'empty'
    this.append(fill)
}