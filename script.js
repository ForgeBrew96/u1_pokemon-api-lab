const getPkmn = async () => {
    const pkmnBreed = await axios.get('https://pokeapi.co/api/v2')
    const pkmnArray = pkmnBreed.data.pokemon
    console.log(pkmnBreed)
}

getPkmn()

const button = document.querySelector('#btn')
const pkmnInput = document.querySelector('#searchBar')
const pkmnSprite = document.querySelector('#imgContainer')
const pability = document.querySelector('#ability')
const p1moves = document.querySelector('#firstMoves')
const p2moves = document.querySelector('#secondMoves')
const ptypes = document.querySelector('#types')
const pnames = document.querySelector('#name')
const pbackgrounds = document.querySelector('#pokemonTypesBG')
const BODY = document.querySelector(`body`)
const computedStyles = window.getComputedStyle(BODY);
const backgroundColor = computedStyles.backgroundColor;

button.addEventListener('click', async () => {

    let pkmn = pkmnInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)


    let pkmnImg = response.data.sprites.front_default
    pkmnSprite.setAttribute ('src', pkmnImg)
    console.log(response.data)

    const { abilities, moves, types, name } = response.data;
    const firsttype = types[0].type.name;
    //----------------------Name---------------------------------
    pnames.textContent = name.toUpperCase()
    //----------------------ABILITY---------------------------------
    if (abilities.length > 0) {
        const firstAbility = abilities[0].ability.name;
        console.log(`The first ability is: ${firstAbility}`);
        pability.textContent = `Ability: ${firstAbility.toUpperCase()}`
    } else {
        console.log("This Pokémon has no abilities.");
        pability.textContent = "This Pokémon has no abilities."
    }
    //----------------------MOVES---------------------------------
    if (moves.length > 0) {
        const firstMove = moves[0].move.name;
        const secondMove = moves[1].move.name;
        console.log(firstMove)
        p1moves.textContent = `Move 1: ${firstMove.toUpperCase()}`
        p2moves.textContent = `Move 2: ${secondMove.toUpperCase()}`
    } else {
        p1moves.textContent = "This Pokémon has no moves."
        p2moves.textContent = "This Pokémon has no moves."
    }
    //----------------------TYPE---------------------------------
    if (types.length > 0) {
        const firsttype = types[0].type.name;
        if (types.length > 1) {
        const secondtype = types[1].type.name;
        ptypes.textContent = `${firsttype.toUpperCase()}, ${secondtype.toUpperCase()}`
        } else{
            ptypes.textContent = `Type: ${firsttype.toUpperCase()}`
        }
    } else {
        console.log("This Pokémon has no types.");
        ptypes.textContent = "This Pokémon has no types."
    }
    //-----------------------typeColor & cardBackground-------------------
     const pokemonTypes = ["flying", "grass", "poison", "psychic", "bug", "dark", "dragon", "fighting", "ghost", "ground", "water", "fire", "ice", "rock", "steel", "fairy", "electric"]

     const pokemonTypesBG = ["https://static.vecteezy.com/system/resources/previews/006/573/729/non_2x/realistic-white-cloud-on-blue-sky-background-vector.jpg", "https://wallpapercave.com/wp/wp5844774.jpg", "https://paopuleaf.neocities.org/games/amie/wallpaper_poison.png", "https://wallpapercave.com/wp/wp7262633.jpg", "https://e0.pxfuel.com/wallpapers/238/288/desktop-wallpaper-pokemon-spectrum-bug-revamp-by-eyeofxana-pokemon-love-background-thumbnail.jpg", "https://img.freepik.com/free-photo/metal-grunge-background-with-scratches-stains_1048-14029.jpg", "https://as2.ftcdn.net/v2/jpg/04/99/40/93/1000_F_499409362_QxWGlIv6elTHpPfaonaUtXTOami3om5i.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3623cfbc-41a8-40f4-bd77-184800f2bd81/dab816e-79f87151-5050-41ee-b51a-dba997b4da34.jpg/v1/fill/w_1023,h_777,q_75,strp/pokemon_go_fighting_type_background_by_thoritegem_dab816e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc3IiwicGF0aCI6IlwvZlwvMzYyM2NmYmMtNDFhOC00MGY0LWJkNzctMTg0ODAwZjJiZDgxXC9kYWI4MTZlLTc5Zjg3MTUxLTUwNTAtNDFlZS1iNTFhLWRiYTk5N2I0ZGEzNC5qcGciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0NoRzRcXlv5QJ-rJYgqz_HCXzyl8ofP2F52XnRGut3c", "https://cdn.wallpapersafari.com/56/31/3aVpKx.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b96252f-36a9-4d78-a896-f31e2e20c0b6/d8jxrn2-dae37f01-f38e-42ce-879a-7aee5b44d477.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiOTYyNTJmLTM2YTktNGQ3OC1hODk2LWYzMWUyZTIwYzBiNlwvZDhqeHJuMi1kYWUzN2YwMS1mMzhlLTQyY2UtODc5YS03YWVlNWI0NGQ0NzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kY9ySWV7eccyhKZUPb9nLkuwtKWqdnVQiXRV4lEkMg0", "https://cache.desktopnexus.com/thumbseg/1447/1447971-bigthumbnail.jpg", "https://c4.wallpaperflare.com/wallpaper/443/960/991/fire-background-flames-wallpaper-thumb.jpg", "https://www.gameovercancer.ca/backgrounds/Ice.png", "https://static.vecteezy.com/system/resources/previews/028/801/043/large_2x/a-collection-of-rocks-in-different-colors-in-the-style-wallpaper-ai-generated-image-free-photo.jpg", "https://wallpapers.com/images/featured/steel-background-bkfn7wbg7i1dgqhz.jpg", "https://i.pinimg.com/originals/bb/be/93/bbbe934ba0631a87f938e56dc4fbed05.png", "https://images2.alphacoders.com/206/206280.jpg"]

     const typeTextBackground = ["gainsboro", "green", "indigo", "fuchsia", "palegreen", "darkmagenta", "cornflowerblue", "coral", "darkslateblue", "chocolate", "royalblue", "orangered", "powderblue", "burlywood", "dimgrey", "hotpink", "gold"]

    for (let i = 0; i < pokemonTypes.length; i++) {
        console.log(pokemonTypes[i])
        if (pokemonTypes[i] === firsttype) {
            pbackgrounds.setAttribute ('src', pokemonTypesBG[i])
            BODY.style.backgroundColor = typeTextBackground[i];
            firsttype.style.backgroundColor = typeTextBackground[i];
        }
    } 
})
//---------------------------------------------------------------------

