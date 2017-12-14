import { Controller } from 'cx/ui';

export default class extends Controller {
    onInit(){
        let id = this.store.get('$route.id');
        let entries = this.store.get('entries');
        
        let entry = entries.find(e => e.id == id);
        if (!entry) {
            throw new Error('Entry could not be found.')
        }
        
        this.store.set('$page.entry', entry);
    }
}