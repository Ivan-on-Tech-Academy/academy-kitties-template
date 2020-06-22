
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)
    $('#headcode').html('code: '+code)
    $('#dnabody').html(code)
}
function mouthAndBelly(color,code) {
    $('.cat__mouth-contour, .cat__tail, .cat__chest_inner').css('background', '#' + color)
    $('#mouthcode').html('code: '+code)
    $('#dnamouth').html(code)
}

function eyeColor(color,code) {
    $('.cat__eye').find('span').css('background', '#' + color)
    $('#eyecode').html('code: '+code)
    $('#dnaeyes').html(code)
}

function earsAndPaw(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right,  .cat__paw-left_inner, .cat__paw-right_inner').css('background', '#' + color)
    $('#earscode').html('code: '+code)
    $('#dnaears').html(code)
}

// Variation functions for range-bars

//8 eye types
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            return eyesType1()
            break
    }
}


function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

function normalEyes() {
    $('.cat__eye').find('span').css('border', 'none')
}


function eyesType1() {
    $('.cat__eye').find('span').css('border-top', '15px solid')
}


async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
