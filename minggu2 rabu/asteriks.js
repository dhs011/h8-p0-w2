// 1. menyusun barisan bintang
var rows1 = 0
while (rows1 < 5){
  console.log('*')
  rows1= rows1 + 1
}

// 2. menyusun barisan bintang dengan nested looping
function asteriks (height){
  var rows2 = 0
  while (rows2 < height){
    var temp = ''
    var rows2Dalam =0
    while (rows2Dalam < height){
      temp=temp + '*'
      rows2Dalam=rows2Dalam+1
    }
    console.log(temp)
    rows2=rows2+1
  }
}
asteriks (5)

// 3. menyusun barisan tangga bintang dengan nested looping
function asteriks (height){
  var rows3 = 0
  while (rows3 < height){
    var temp = ''
    var rows3Dalam =0
    while (rows3Dalam <=rows3){
      temp=temp + '*'
      rows3Dalam=rows3Dalam+1
    }
    console.log(temp)
    rows3=rows3+1
  }
}
asteriks (5)