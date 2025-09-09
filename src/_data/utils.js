module.exports = {


    getContents(collection, item, random = true) {
        let filtered = collection.filter(x => x.url !== item.url);
    
        if (random) {
			let counter = filtered.length;

			while (counter > 0) {

                let index = Math.floor(Math.random() * counter);
                counter--;

                let temp = filtered[counter];
                filtered[counter] = filtered[index];
                filtered[index] = temp;
			}
		}
        
        return filtered;
    }

}; 

