import os
import urllib.request

def main():
    path = os.getcwd()
    with open (path + '/Edited Character Table.html') as f:
        obj = {}
        for line in f:
            if 'a href' in line:
                if ' class="' in line:
                    
                    # making scrape request
                    search_start = line.find('href="')
                    search_end = line.find(' class="')
                    slice_obj = slice(search_start+6, search_end-1)
                    search_string = line[slice_obj] 
                    print('https://thewire.fandom.com' + search_string)
                    name_string = search_string[6:]
                    name_string = name_string.replace('_', ' ')

                    # recieving and parsing web request
                    response = urllib.request.urlopen('https://thewire.fandom.com' + search_string)
                    # response = urllib.request.urlopen('https://thewire.fandom.com/wiki/Reginald_Cousins')
                    actual_response = response.read()
                    decoded_response = actual_response.decode("utf-8", "ignore")

                    #  searching for content
                    aside_start = decoded_response.find('mw-parser-output')
                    aside_end = decoded_response.find('</p')
                    slice_obj= slice(aside_start, aside_end)
                    key_info = decoded_response[slice_obj]
                    slice_obj = key_info.find('</aside') + 10
                    obj_info = {}
                    obj_info['desc'] = key_info[slice_obj:]
                    
                    if key_info.find('image image-thumbnail') > 0 and key_info.find('pi-image-thumbnail') > 0:
                        slice_obj = slice(key_info.find('image image-thumbnail') + 37, key_info.find('pi-image-thumbnail') - 7)
                        obj_info['image'] = (key_info[slice_obj] + ' />')

                    slice_obj =  slice(key_info.find('Portrayed by') + 69, key_info.find('data-source="seasons') - 80)
                    print(key_info[slice_obj])

                    obj[name_string] = obj_info
                    # print(obj[name_string])
                
if __name__ == "__main__":
    main()


