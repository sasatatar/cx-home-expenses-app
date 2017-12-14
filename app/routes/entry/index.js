import { 
    HtmlElement, 
    DateField, 
    NumberField, 
    LookupField, 
    TextField, 
    FlexCol,
    Section
} from 'cx/widgets';

import Controller from './Controller';
import {categories} from '../../data/categories';

export default <cx>
    <div controller={Controller}>
        <Section
            mod="card"
        >
            <FlexCol>
                <DateField
                    label="Date"
                    value-bind="$page.entry.date"
                    required
                    autoFocus
                />

                <NumberField
                    value-bind="$page.entry.amount"
                    label="Amount"
                    format="currency;;2"
                    placeholder="$"
                    required
                />

                <LookupField
                    value-bind='$page.entry.categoryId'
                    options={categories}
                    optionTextField="name"
                    label="Category"
                    required
                />

                <TextField
                    value-bind='$page.entry.description'
                    label="Description"
                    style="width: 100%; max-width: 500px"
                />
            </FlexCol>
        </Section>
    </div>
</cx>
