const apiKey = '1a74325a53bd41c49f27a5ae5d05191b';

window.addEventListener('load', e => {
    updateNews();
});

async function updateNews() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}');
    const json = await res.json();
}