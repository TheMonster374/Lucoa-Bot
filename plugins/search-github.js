import fetch from 'node-fetch';
const handler = async (m, {text}) => {
  if (!text) throw '¿Qué tengo que buscar?';
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  const str = json.items.map((repo, index) => {
    return `
⬡ *Resultado:* ${1 + index}
⬡ *Enlace:* ${repo.html_url}
⬡ *Creador:* ${repo.owner.login}
⬡ *Nombre:* ${repo.name}
⬡ *Creado:* ${formatDate(repo.created_at)}
⬡ *Actualizado:* ${formatDate(repo.updated_at)}
⬡ *Visitas:* ${repo.watchers}
⬡ *Bifurcado:* ${repo.forks}
⬡ *Estrellas:* ${repo.stargazers_count}
⬡ *Issues:* ${repo.open_issues}
⬡ *Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
⬡ *Clone:* ${repo.clone_url}
`.trim();
  }).join('\n\n');
  m.reply(str);
};
handler.help = ['githubsearch'];
handler.tags = ['search'];
handler.command = /^(ghs|githubs|githubsearch)?$/i;

export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}
