// Упражнение разбор url

const url =  '<https://purpleschool.ru/course/javascript>'

const getURL = () => {
    url.split('/')
}
const destracturl = () => {
 const [protocol, domain, ...path] = url.split('/')
 return`${protocol.split('/')}//${domain}${path.join('/')}`
}

console.log(destracturl());