const content = document.querySelector('.content');
document.querySelector('.title').addEventListener('mouseover', () => {
    content.style.maxHeight = '500px'
})

document.querySelector('.title').addEventListener('mouseout', () => {
    content.style.maxHeight = '0'
})