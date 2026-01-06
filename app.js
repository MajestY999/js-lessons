const url = '<https://purpleschool.ru/course/javascript>'


function disUrl(){
    const [protocol, domain, ...path] = url.split('/')
    return `${protocol}/${domain}/${path.join('/')}`
}
console.log(disUrl());