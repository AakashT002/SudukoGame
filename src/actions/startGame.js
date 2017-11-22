export function startGame() {
    const texts = [];
    const text = {};
    text['t1'] = Math.floor((1 + Math.random() * 9));
    text['t6'] = Math.floor((1 + Math.random() * 9));
    text['t8'] = Math.floor((1 + Math.random() * 9));

    while (text['t1'] === text['t6'] || text['t6'] === text['t8'] || text['t8'] === text['t1']) {
        text['t1'] = Math.floor((1 + Math.random() * 9));
        text['t6'] = Math.floor((1 + Math.random() * 9));
        text['t8'] = Math.floor((1 + Math.random() * 9));
    }

    texts.push(text);

    return { type: 'START_GAME', texts }
}