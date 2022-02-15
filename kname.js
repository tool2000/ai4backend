// 한국어 예쁜 이름 짓기 앱
function randName() {
    let firstname = "김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구";
    let lastname = "가나노다단도로루리민보소솔오우율은";
    let text = ""

    let aIndex = Math.floor(Math.random() * firstname.length)
    let first = firstname[aIndex]

    for (var i=0; i < 1+Math.floor(Math.random()*4) ; i++) {
        let bIndex = Math.floor(Math.random() * lastname.length)
        text = text + lastname[bIndex]
    }

    return first+text        
}

let korean_name = randName()
console.log( korean_name )

