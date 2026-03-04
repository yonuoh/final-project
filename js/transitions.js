/* global nn */

let isBubbleOpen = false

function showBubble () {
  nn.get('#bubblewrapblurb').css('display', 'block')
  isBubbleOpen = true
}

function hideBubble () {
  nn.get('#bubblewrapblurb').css('display', 'none')
  isBubbleOpen = false
}

function toggle () {
  if (isBubbleOpen) hideBubble()
  else showBubble()
}

nn.get('#bubblewrap').on('click', toggle)
nn.get('#closeBubble').on('click', hideBubble)