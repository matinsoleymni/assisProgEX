export function aa(name)
{
    return document.querySelector(name) || `We have some error :( (not found ${name} in DOM)`
}