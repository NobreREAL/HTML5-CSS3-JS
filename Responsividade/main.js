
let cab = document.querySelector('#cabecario__links');

function clickMenu()
{
    if (cab.style.display == 'flex')
    {
        cab.style.display = 'none';
    }else{
    cab.style.display = 'flex';
    }
}

window.addEventListener('resize', () =>
{
    if ((window.innerWidth > 485) & (cab.style.display == 'none'))
    {
        cab.style.display = 'flex';
    }
});
