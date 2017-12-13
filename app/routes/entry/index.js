import { HtmlElement } from 'cx/widgets';

import Controller from './Controller';

export default <cx>
    <div controller={Controller}>
        <h2 text-bind="$route.id" />
    </div>
</cx>
