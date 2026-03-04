/* global nn */

function makeToggle (imgId, blurbId, closeId) {
  let IsItOpen = false

  function show () {
    nn.get(blurbId).css('display', 'block')
    IsItOpen = true
  }

  function hide () {
    nn.get(blurbId).css('display', 'none')
    IsItOpen = false
  }

  function toggle () {
    if (IsItOpen) hide()
    else show()
  }

  nn.get(imgId).on('click', toggle)
  nn.get(closeId).on('click', hide)
}

makeToggle('#bubblewrap', '#bubblewrapBlurb', '#closeBubble')
makeToggle('#running', '#runningBlurb', '#closeRunning')
makeToggle('#mat', '#matBlurb', '#closeMat')
makeToggle('#beli', '#beliBlurb', '#closeBeli')
makeToggle('#pen', '#penBlurb', '#closePen')
makeToggle('#smoothie', '#smoothieBlurb', '#closeSmoothie')
makeToggle('#washytape', '#washytapeBlurb', '#closeWashytape')
makeToggle('#earbuds', '#earbudsBlurb', '#closeEarbuds')
makeToggle('#yogurt', '#yogurtBlurb', '#closeYogurt')
makeToggle('#eadem', '#eademBlurb', '#closeEadem')
makeToggle('#goldstar', '#goldstarBlurb', '#closeGoldstar')
makeToggle('#denimstar', '#denimstarBlurb', '#closeDenimstar')