export default async function translate(string) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200508T230049Z.d40a6456fe393ad6.38947ea8a4c7db1910216f36612cb92a5544f302&text=${string}&lang=ru-en`;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
}