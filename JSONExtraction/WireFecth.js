document.querySelectorAll('.category-page__member').forEach( character => {
    console.log(character.children[1].href)
    obj = {}
    var key_info = fetch(character.children[1].href).then( response => {return response.text()}).then(result => {
        // if conditions for each case, check for more than one and generate list
        var character_obj = {}
        var parser = new DOMParser
        var doc = parser.parseFromString(result, 'text/html')
        try {
            var key_info = doc.querySelector('meta[property="og:description"]').content
            character_obj['desc'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('.pi-image-thumbnail').src
            character_obj['img'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="actor"]').children[1].firstChild.innerHTML
            character_obj['actor'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="debut"]').children[1].children[0].innerHTML
            character_obj['debut'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="departure"]').children[1].children[0].innerHTML
            character_obj['departure'] =key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="episodes"]').children[1].innerHTML
            character_obj['episodes'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="name"]').children[1].innerHTML
            character_obj['name'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="nickname"]').children[1].innerHTML
            character_obj['nickname'] = key_info
        }
        catch {}
        try {
            key_info = doc.querySelector('div[data-source="prevoccupa"]').children[1].children[0].innerHTML
            character_obj['occupation'] = key_info
        }
        catch {}
        obj[character.children[1].innerHTML] = character_obj
        console.log(obj)
    })
    
})
	
