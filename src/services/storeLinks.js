export async function getSavedLinks(key){
  const myLinks = await localStorage.getItem(key)

  let savedLinks = JSON.parse(myLinks) || [];

  return savedLinks;
}

export async function saveLink(key, newLink){
  let storedLinks = await getSavedLinks(key)

  const hasLink = storedLinks.some( link => link.id === newLink.id)

  if (hasLink) {
    return;
  }

  storedLinks.push(newLink)
  await localStorage.setItem(key, JSON.stringify(storedLinks))
} 

export function deleteLink(links, id) {
  let myLinks = links.filter( item => item.id !== id)

  localStorage.setItem('@shortenLinks', JSON.stringify(myLinks))
  
  return myLinks;
}