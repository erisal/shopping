const LocalStorage = (() => {
    // check if local storage available
    
        let localStor = storageAvailable('localStorage');
    
        function storageAvailable(type) {
            var storage;
            try {
                storage = window[type];
                var x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            }
            catch(e) {
                return e instanceof DOMException && (
                    // everything except Firefox
                    e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === 'QuotaExceededError' ||
                    // Firefox
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                    // acknowledge QuotaExceededError only if there's something already stored
                    (storage && storage.length !== 0);
            }
        }
    
        function copyToLocal(cartList){
            console.log('COPYTOLOCAL' + cartList);
            console.table(cartList);
            if (localStor) {
                localStorage.setItem("cart", JSON.stringify(cartList));
            }
        }
    
        // returns local storage if available, if not returns empty array
        function getLocal(){
            if (localStor && JSON.parse(localStorage.getItem("cart")) !== '') {
                let local = JSON.parse(localStorage.getItem("cart"));
                console.log('retrieved local')
                console.table(local);
                return local; 
    
            }
            else {
                console.log('no local');
                return null;
            }
        }
    
        function resetLocal() {
            if (localStor) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
        }
    
        return {
            copyToLocal,
            getLocal,
            resetLocal
        }
    
    })();

    export default LocalStorage;
